---
layout: post
title: "How to Use Valgrind to Check Memory in C/C++"
date: 2023-07-08 15:13:02
image: '/assets/img/cpp/valgrind.jpg'
description: 'A memory debugging tool!'
tags:
- memtool
- cpp
- clanguage
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have also published about [CppCheck](https://terminalroot.com/how-to-do-static-analysis-of-c-cpp-with-cppcheck/) which serves to perform static analysis.

In this article we are going to know and learn how to use **Valgrind**, which is a programming tool for memory debugging, memory leak detection and "profiling".

[Valgrind](https://valgrind.org/) runs its code in a virtual machine, that is, nothing of the original program is executed directly in the processor! Instead, Valgrind first translates the program into a temporary, simpler form called an intermediate representation (IR), which is a form based on a processor-neutral static single assignment form.

Valgrind was originally designed to be a free memory debugging tool for x86 architectures, but has since evolved to become a generic framework for creating dynamic analysis tools such as checkers and profilers.

Valgrind is, in essence, a virtual machine that uses just-in-time compilation techniques, including dynamic recompilation.

Valgrind is [Free Software](https://terminalroot.com/tags#freesoftware) licensed under the terms of the license: [GNU GPLv2](http://www.gnu.org/licenses/gpl-2.0.html).

---

# Installation

On [Windows](https://terminalroot.com/tags#windows) you will need to have [MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) installed([see here how](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/)) and then download (or compile) accordingly with [this procedure](https://sourceforge.net/p/valgrind4win/wiki/DevelopmentEnvironment/).


On [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux) distributions
{% highlight bash %}
# Debian, Ubuntu, Mint and similar
sudo apt install valgrind

# Arch, Manjaro and similar
sudo pacman -S valgrind

# Fedora and similar
sudo dnf install valgrind

# On Gentoo, Funtoo and the like
sudo emerge dev-util/valgrind

# Snap
sudo snap install valgrind --classic
{% endhighlight %}

---

# Usage
Suppose you have the code below, which is a mini program that adds two numbers as parameters via the command line. The code uses [Smart Pointers](https://learn.microsoft.com/en-us/cpp/cpp/smart-pointers-modern-cpp?view=msvc-170) and everything is working normally!

### Using Smart Pointers

{% highlight cpp %}
#include <iostream>
#include <memory> // FOR SMART POINTERS
#include <algorithm>

struct Math {
  private:
    int num1, num2;
  public:
    Math(const int &inum1, const int &inum2) 
      : num1(inum1), num2(inum2) {}
    int result(){
      return num1 + num2;
    }
};

bool is_number(const std::string& s){
  return !s.empty() && std::find_if(s.begin(), 
      s.end(), [](unsigned char c) { 
        return !std::isdigit(c); 
      }) == s.end();
}

int main(int argc, char **argv){
  if(argc > 2){
    const std::string a = argv[1], b = argv[2];

    if( !is_number(a) || !is_number(b) ){
      std::cerr << "Use only numbers.\n";
      return 1;
    }

    // USANDO SMART POINTERS
    auto math = std::make_shared<Math>(
        std::stoi(a), 
        std::stoi(b)
    );

    std::cout << math->result() << '\n';
  }else{
    std::cerr << "Use: " <<
      argv[0] << " num1 num2\n";
    return 1;
  }
  return 0;
}
{% endhighlight %}

After compiling, you run your code and decide to test it with Valgrind with the command and parameters:

{% highlight bash %}
valgrind -s --leak-check=yes ./a.out 1 2
{% endhighlight %}

Valgrind does not detect any failures and returns at the end of the output below: `ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)`, that is, no errors!
{% highlight bash %}
==5659== Memcheck, a memory error detector
==5659== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==5659== Using Valgrind-3.18.1 and LibVEX; rerun with -h for copyright info
==5659== Command: ./a.out 1 2
==5659== 
3
==5659== 
==5659== HEAP SUMMARY:
==5659==     in use at exit: 0 bytes in 0 blocks
==5659==   total heap usage: 3 allocs, 3 frees, 73,752 bytes allocated
==5659== 
==5659== All heap blocks were freed -- no leaks are possible
==5659== 
==5659== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)
{% endhighlight %}

---

### Allocating memory
Now you decide to modify your code and allocate memory with `new` declaration, but forget to deallocate with `delete`. Removed `<memory>` header and replaced `make_shared` in code below


{% highlight cpp %}
#include <iostream>
#include <algorithm>

struct Math {
private:
  int num1, num2;

public:
  Math(const int &inum1, const int &inum2) : num1(inum1), num2(inum2) {}
  int result() { return num1 + num2; }
};

bool is_number(const std::string &s) {
  return !s.empty() && std::find_if(s.begin(), s.end(), [](unsigned char c) {
                         return !std::isdigit(c);
                       }) == s.end();
}

int main(int argc, char **argv) {
  if (argc > 2) {
    const std::string a = argv[1], b = argv[2];

    if (!is_number(a) || !is_number(b)) {
      std::cerr << "Use only numbers.\n";
      return 1;
    }

    Math * math = new Math(std::stoi(a), std::stoi(b));
    std::cout << math->result() << '\n';
    // HERE SHOULD BE delete TO DISLOCATE
  } else {
    std::cerr << "Use: " << argv[0] << " num1 num2\n";
    return 1;
  }
  return 0;
}
{% endhighlight %}

Also, in addition to compiling without flags, you include all possible flags for error detection:
{% highlight bash %}
g++ -Wall -Werror -Wextra -Wpedantic main.cpp
{% endhighlight %}
> But still, no failure was detected.

Then, you can rerun Valgrind:
{% highlight bash %}
valgrind -s --leak-check=yes ./a.out 1 2
{% endhighlight %}

However, this time the detected error appears as listed in the output below:

{% highlight bash %}
==5857== Memcheck, a memory error detector
==5857== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==5857== Using Valgrind-3.18.1 and LibVEX; rerun with -h for copyright info
==5857== Command: ./a.out 1 2
==5857== 
3
==5857== 
==5857== HEAP SUMMARY:
==5857==     in use at exit: 8 bytes in 1 blocks
==5857==   total heap usage: 3 allocs, 2 frees, 73,736 bytes allocated
==5857== 
==5857== 8 bytes in 1 blocks are definitely lost in loss record 1 of 1
==5857==    at 0x4845013: operator new(unsigned long) (in /usr/libexec/valgrind/vgpreload_memcheck-amd64-linux.so)
==5857==    by 0x109377: main (in /home/marcos/a.out)
==5857== 
==5857== LEAK SUMMARY:
==5857==    definitely lost: 8 bytes in 1 blocks
==5857==    indirectly lost: 0 bytes in 0 blocks
==5857==      possibly lost: 0 bytes in 0 blocks
==5857==    still reachable: 0 bytes in 0 blocks
==5857==         suppressed: 0 bytes in 0 blocks
==5857== 
==5857== ERROR SUMMARY: 1 errors from 1 contexts (suppressed: 0 from 0)
{% endhighlight %}

Note that `Memcheck`, a Valgrind tool, detected that you forgot to deallocate the placeholder!

If your Valgrind shows an output error: `Fatal error at startup` I recommend you to install the `libc6-dbg` library, for example:
{% highlight bash %}
sudo apt install libc6-dbg:i386
{% endhighlight %}
> Defining the `i386` architecture is important!

For more information use `help` and the manual:
{% highlight bash %}
valgrind --help
man valgrind
{% endhighlight %}

<!-- Useful links:

For more information visit the links below:
+ https://stackoverflow.com/questions/15721919/install-valgrind-fatal-error-at-startup
+ https://valgrind.org/docs/manual/quick-start.html
+ https://en.wikipedia.org/wiki/Valgrind

-->

