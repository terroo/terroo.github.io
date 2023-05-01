---
layout: post
title: "How to Do Static Analysis of C/C++ with Cppcheck"
date: 2023-04-30 19:22:11
image: '/assets/img/cpp/cppcheck.jpg'
description: 'Sees flaws that neither you nor your compiler can find.'
tags:
- cpp
- clanguage
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The programming languages [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/tags#cpp) have several optional tools that: knowing how to use them them, will be essential for writing *secure code*.

That's why they are recommended languages for professionals in the area, otherwise, the person should look for easier languages that manage things automatically where the programmer often doesn't even know what he's really doing. C and C++ is like an **airplane control panel**, and sometimes people want to use them like a *TV remote*.

---

# What is Static Analysis?
Static Analysis, in short, is finding *bugs* in your code without running it. That's why it has this name: *static*, if we do the analyzes during the execution of the program it would be a *dynamic analysis*.

Usually these analyzes are done by additional programs that can see details that neither you nor your compiler identifies.

In this article we will see how to use **Cppcheck** which is one of the best known and easy to use tools for static analysis in code written in C/C++.

---

# About cppcheck
Cppcheck is a static code analysis tool for the C and C++ programming languages. It is a versatile tool that can check non-standard codes. Cppcheck is a [free software](https://terminalroot.com/tags#freesoftware) made under the license [GNU General Public License](https://terminalroot.com/tags#gnu).

Cppcheck supports a wide variety of static checks that may not be covered by the compiler itself. These checks are static analyzes that can be performed at the source code level.

Some of the supported checks include:
+ Automatic variable checking
+ Checking bounds for array saturations
+ Class checking (e.g. unused functions, variable initialization and memory duplication)
+ Use of deprecated or superseded functions according to the Open Group
+ Exception security checking, e.g. memory allocation usage and destructor checks
+ Memory leaks, e.g. due to scope loss without deallocation
+ Resource leaks, for example due to forgetting to close a file handle
+ Invalid usage of default template library functions and languages
+ Elimination of dead code using usedFunction option
+ Miscellaneous stylistic and performance bugs

The project is actively under development and maintained on different operating systems. He found valid bugs in several popular projects such as [Linux kernel](https://terminalroot.com/tags#linux) and MPlayer.

---

# Installation
You can install using your operating system's package manager, examples: `winget`, `choco`, `apt`, `pacman`, `emerge` and among others. Examples:
{% highlight bash %}
winget install -e --id Cppcheck.Cppcheck # Windows
brew install cppcheck # macOS
sudo apt install cppcheck # Ubuntu, Debian, Mint and similar
emerge cppcheck # Gentoo, Funtoo and the like
{% endhighlight %}

Or you can also install directly from the source code available on [GitHub](https://terminalroot.com/tags#github), like this:
{% highlight bash %}
git clone git://github.com/danmar/cppcheck
cd cppcheck
make
sudo make install
{% endhighlight %}

After installation confirm that everything is correct by checking the version:
{% highlight bash %}
cppcheck --version
cppcheck 2.9
{% endhighlight %}
> In this case, according to the publication date of this article, its current version is `2.9`.

---

# Usage
Suppose you have this code below: `main.cpp`:

{% highlight cpp %}
#include <iostream>
#include <memory>

class Test {
  typedef std::string String;
  String name;

  public:
    Test(String iname) : name(iname){}
    String getName(){
      return name;
    }
};

int main(){
  auto t = std::make_unique<Test>("Terminal Root");
  std::cout << t->getName() << '\n';
  return 0;
}
{% endhighlight %}

### Can you find errors in this code?
The truth is that not even the compiler can do it, even if we enable all the necessary `flags` for *debug*, example:

{% highlight bash %}
g++ -Wall -Wextra -Werror -Wpedantic main.cpp
{% endhighlight %}
> Note that it will compile without even a *warning* if you want and still run normally.

Now let's do the STATIC ANALYSIS with `cppcheck` with the following command:

{% highlight bash %}
cppcheck --enable=all main.cpp
{% endhighlight %}

See the image below the errors he listed:

![cppcheck --enable=all main.cpp](/assets/img/cpp/cppcheck-enable-all.png)

How crazy, right?! 😃

Now let's fix our code by adding [explicit](https://en.cppreference.com/w/cpp/language/explicit) to our constructor as he indicated and also the parameter: `const String& iname`

# [CODE]
{% highlight cpp %}
#include <iostream>
#include <memory>

class Test {
  typedef std::string String;
  String name;

  public:
    explicit Test(const String& iname) : name(iname){}
    String getName(){
      return name;
    }
};

int main(){
  auto t = std::make_unique<Test>("Terminal Root");
  std::cout << t->getName() << '\n';
  return 0;
}
{% endhighlight %}

When running the same command again, we will notice that we have resolved all the errors, except the error:
{% highlight bash %}
nofile:0:0: information: Cppcheck cannot find all the include files (use --check-config for details) [missingIncludeSystem]
{% endhighlight %}
> This *error* **is not really an error** but rather the path to the standard library which can have numerous locations depending on the operating system and even the compiler. So we can ignore it.

But, with this example, we see how useful static analysis with `cppcheck` can help you in everyday life. Remembering that we spend more time *debugging* than *writing the code* itself, so these analyzes will save you a lot of work and also *headaches*.

There are plugins for Cppcheck for several IDEs and Editors such as: [Vim](https://terminalroot.com/tags#vim), [Neovim](https://terminalroot.com/tags#neovim), [Emacs](https://terminalroot.com/tags#emacs), Eclipse, [Code:Blocks](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/#09-codeblocks), [Qt Creator](https://terminalroot.com/tags#cpp), [Kdevelop](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/) and many more!

For more information visit the [repository on GitHub](https://github.com/danmar/cppcheck) and the page on [Source Forge](https://cppcheck.sourceforge.io/).

<!--
+ https://en.wikipedia.org/wiki/Static_program_analysis
+ https://en.wikipedia.org/wiki/Cppcheck
-->

