---
layout: post
title: "10 Flags and Parameters Tips for GNU GCC"
date: 2023-08-25 19:40:39
image: '/assets/img/gnu/gnu-gcc-800.jpg'
description: 'The main parameters of GNU GCC'
tags:
- gnu
- gcc
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The GNU GCC is a collection of compilers that was initially created only for the C language and the acronym meant GNU C Compiler, but over time several other programming languages were added, such as: C++, Objective-C, Objective-C++, Fortran, Ada, D, Go, Rust and Java. And the meaning of the acronym became: GNU Compiler Collection.

---

# How to install GNU GCC
For Windows specifically, you can also directly access this link: [How to Install GCC/G++ MinGW on Windows](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) and on any other system just use their package manager.

All the links mentioned here I will leave in the description of this video.

It is also necessary to remember that almost 100% of the flags and parameters used by GCC also work with the `clang` and `clang++` compilers. They've already done this on purpose for compatibility, in case companies want to migrate in the future.

The difference between flag and parameter is that the flag influences the binary to be generated, the parameter does not, that is, it is used for programs already built. A compiler can have both (because it is also a program, but it builds binaries), whereas a program only uses parameters.

Now let's get to know 10 most used GNU GCC flags and parameters!

---

## 01. Basic compilation
First of all check your compiler version with `g++ --version` or `gcc --version`, some things might not work if your version is too old.

In a basic C/C++ code to compile just use the command: `gcc` for C language and `g++` for C++. Examples:

> `main.cpp`
{% highlight cpp %}
#include <iostream>

int main(int argc, char **argv){
   std::cout << "Hello World!\n";
   return 0;
}
{% endhighlight %}

> `main.c`
{% highlight c %}
#include <stdio.h>

int main( int argc , char **argv ){
   printf("Hello World!\n");
   return 0;
}
{% endhighlight %}

Some alternative commands to gcc/g++ can be: basic mode, alias or symbolic link are:
{% highlight bash %}
cc # gcc
c++ # g++
{% endhighlight %}

To compile, run:
{% highlight bash %}
g++ main.cpp # C++
gcc main.c # C
{% endhighlight %}

In fact, the `cc` command was the standard C compiler for Unix, but the source code was not available.

---

## 02. Using the `-o` parameter
If you want to save to a different binary name, use the `-o` parameter:
> Let's use `g++` as a base, but use `gcc` if you want to achieve the same result.

{% highlight bash %}
g++ main.cpp -o myprogram
{% endhighlight %}

---

## 03. Enabling `warnings` and `errors`
The `-Wall` flag means `Warnig all`. When there is a flag starting with `W` that means it is to detect warnings, in this case for all/all, actually a set of flags, there are more than 40 .

Suppose you created a variable and didn't use it anywhere in your code. If you compile normally, this will pass, but if you use `-Wall`, the compiler will warn you:
{% highlight cpp %}
#include <iostream>

int main(int argc, char **argv){
   int x;
   std::cout << "Hello World!\n";
   return 0;
}
{% endhighlight %}
> `g++ -Wall main.cpp`

Even so the program compiles, it's just a warning. If you want to turn this warning into an error, i.e., not compile if there is a warning, you need to combine this flag with another flag which is `-Werro`, it treats the warning as an error:
{% highlight bash %}
g++ -Wall -Werror main.cpp
{% endhighlight %}

That is, if you remove the binary and recompile, note that the binary will not be built.
{% highlight bash %}
rm a.out
{% endhighlight %}

> The `-g` parameter is used for debugging at the operating system level. It's always good to use it in conjunction with `-Wall and -Werror`.

---

## 04. Extra checks for warnings/warnings
If we use this variable, note that compilation will pass even with `-Wall and -Werror`:
{% highlight cpp %}
#include <iostream>

int main(int argc, char **argv){
   int x = 9;
   std::cout << "The number x is: " << x << '\n';
   return 0;
}
{% endhighlight %}

But notice that we have the function arguments being passed but not being used. To stop this we can use the flag: `-Wextra`, but it needs to be together with `-Wall and -Werror`:
{% highlight bash %}
g++ -Wall -Werror -Wextra main.cpp
{% endhighlight %}

Either we use these parameters or we need to remove them.

Formerly there was a *bug* in the compilers that even if you removed it, it was possible to obtain parameters via the command line, for that there was the technique of using the `void` parameter, but this is no longer necessary:

{% highlight cpp %}
#include <iostream>

int main(void){ // Like it or not, compile with -Wextra
   int x = 9;
   std::cout << "The number x is: " << x << '\n';
   return 0;
}
{% endhighlight %}

---

## 05. Be pedantic
According to the dictionary, pedantic is one who cares excessively about small details or rules and the name justifies it.

That is, the `-pedantic` parameter checks if your code complies with ISO rules, for example:
{% highlight cpp %}
#include <iostream>

int main(int argc, char** argv){
   int x; // REMOVE the initialization of the variable 'x'
   std::cout << "The number x is: " << x << '\n';
   return 0;
}
{% endhighlight %}

When compiling, note:
{% highlight bash %}
g++ -Wall -pedantic basic.cpp
{% endhighlight %}
> Remembering that `-pendatic-errors` does not enable as an error, it is like an alias for `-pedantic` itself.



---

## 06. Being verbose
You can see all the compiler steps using the `--verbose` or `-v` parameter

{% highlight bash %}
g++ --verbose -Wall -pedantic-errors main.cpp
g++ --verbose main.cpp
{% endhighlight %}
> This is usually enabled by default on systems that compile from scratch, like Gentoo, for example, which is where I'm at.

---

## 07. Disinfectant for memory
Sanitizers was developed by Google and is such well-made software that it has been natively adopted by the GNU GCC: <https://github.com/google/sanitizers>.

It checks for memory violations and as its name suggests: disinfects!

Suppose we have this code:
{% highlight cpp %}
#include <iostream>

typedef struct Illegal{
   std::string name = "GCC";
} illegal;

int main(int argc, char** argv){
   illegal * z = new illegal;
   delete z;
   std::cout << z->name << '\n';
   return 0;
}
{% endhighlight %}

If we compile normally and run it several times, note that nothing will be displayed, but in one of the executions it will present the bug:
{% highlight bash %}
g++ main.cpp
./.a.out
./.a.out
./.a.out
./.a.out
{% endhighlight %}

Now if we compile with Sanitize:
{% highlight bash %}
g++ -fsanitize=address main.cpp
{% endhighlight %}

Note that running the program will not run and will give you details of the addressing violation:
{% highlight bash %}
AddressSanitizer:DEADLYSIGNAL
========================================================== ===============
==22886==ERROR: AddressSanitizer: SEGV on unknown address 0x000000000006 (pc 0x7f357aaac113 bp 0x000000000a68 sp 0x7ffd3f1844e0 T0)
==22886==The signal is caused by a READ memory access.
==22886==Hint: address points to the zero page.
     #0 0x7f357aaac113 in _IO_default_xsputn (/lib64/libc.so.6+0x7d113)
     #1 0x7f357aaaa214 in _IO_file_xsputn (/lib64/libc.so.6+0x7b214)
     #2 0x7f357aa9e9e4 in fwrite (/lib64/libc.so.6+0x6f9e4)
     #3 0x7f357b068ff3 (/usr/lib/gcc/x86_64-pc-linux-gnu/13/libasan.so.8+0x68ff3)
     #4 0x7f357ad3fa34 in std::basic_ostream<char, std::char_traits<char> >& std::__ostream_insert<char, std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&, char const*, long) (/usr/lib/gcc/x86_64-pc-linux-gnu/13/libstdc++.so.6+0x13fa34)
     #5 0x55e42bd2b35b in main (/home/marcos/a.out+0x235b)
     #6 0x7f357aa52709 (/lib64/libc.so.6+0x23709)
     #7 0x7f357aa527c4 in __libc_start_main (/lib64/libc.so.6+0x237c4)
     #8 0x55e42bd2b230 in _start (/home/marcos/a.out+0x2230)

AddressSanitizer cannot provide additional info.
SUMMARY: AddressSanitizer: SEGV (/lib64/libc.so.6+0x7d113) in _IO_default_xsputn
==22886==ABORTING
{% endhighlight %}

> Observation: Note that the size of the binary grows a lot when using it, that way you understand why some programming languages that call themselves safe memory have such large binaries, because they already have all these flags by default activated in the compiler . I particularly think this is bad, because the programmer doesn't know what he's doing. But, if you want you can create a Bash function in your `~/.bashrc` and add all parameters to gcc/g++ automatically, including static analyzers and other tools, but remember your binaries will grow significantly!

{% highlight bash %}
vim ~/.bashrc

compile(){
   cppcheck --suppress=missingIncludeSystem $@
   /usr/bin/g++ -Wall -Werror -Wextra -pedantic -g -fsanitize=address -O2 $@
}
alias g++="compile $@"
# :wq

source ~/.bashrc
{% endhighlight %}

Or
{% highlight bash %}
cat << EOF >> ~/.bashrc
compile(){
   cppcheck --suppress=missingIncludeSystem $@
   /usr/bin/g++ -Wall -Werror -Wextra -pedantic -g -fsanitize=address -O2 $@
}
alias g++="compile $@"
EOF
exec $SHELL
{% endhighlight %}

---

## 08. Separating header inclusion
In the GTKmm series we use the `-MMD` parameter. It serves to separate the headers and include them later in the linker.

First of all let's know what the linker is about. It is a program that merges two binary files together.

Suppose we have this code that needs to compile 2 `.cpp` files:

{% highlight cpp %}
// class.hpp
#pragma once
#include <iostream>

class TestLinker {
   std::string hello;
   public:
     TestLinker(const std::string&);
     void get_hello();
};


// class.cpp
#include "class.hpp"

TestLinker::TestLinker(const std::string& str){
   this->hello = str;
   get_hello();
}

void TestLinker::get_hello(){
   std::cout << this->hello << '\n';
}

// main.cpp
#include "class.hpp"

int main(int argc, char **argv){
   TestLinker t("Testing the linker!");
   return 0;
}
{% endhighlight %}

We could compile like this directly: `g++ main.cpp class.cpp`.

But, using the linker (in GCC the linker can use gcc/g++ itself) we can separate the headers and optimize our compilation:
{% highlight bash %}
g++ -c main.cpp -o main.o
g++ -c class.cpp -o class.o
g++ main.o class.o
./a.out
{% endhighlight %}

However, when there are many headers, it can be duplicated several times to include them, so the `-MMD` parameter is used.

To make it easy to understand, let's use the GTKmm series project that is at: <https://github.com/terroo/pass-firefox>

Let's clone, check the Makefile and modify.
{% highlight bash %}
git clone --recursive https://github.com/terroo/pass-firefox
cd pass-firefox
vim Makefile
# Note that it removes the `.*d`, let's change it to
# we can see this file.
make up
cat main.d
{% endhighlight %}

That is, the headers are in a separate file to be included later by the linker.


---

## 09. View the generated assembly code
C/C++ compilers create assembly code and then compile assembly code. That's why the new programming languages are seen as a front-end for C/C++, more precisely the C++ that LLVM is written on.

There are several assembly compilers, and GNU GCC has its own which is the GNU Assembler (an alternative to NASM), and uses the `as` command.

To generate assembly code:
{% highlight bash %}
g++ -S main.cpp
{% endhighlight %}

View the generated assembly code:
{% highlight bash %}
cat main.s
{% endhighlight %}

Use compile `as` to generate the binary:
{% highlight bash %}
as main.s -o main.o
{% endhighlight %}

Now just compile `main.o`
{% highlight bash %}
g++ main.o
./a.out
{% endhighlight %}

---

## 10. Optimizing the binary
We've talked about situations where the size of the binary can get quite large depending on the flags you pass in, but this can be improved by using the `-O2` flag, actually you can use several numbers: `-O1`, `- O2`, `-O3`, .... but above 2 it's dangerous depending on the machine you're compiling, simple machines (2 processors and 8GB of RAM) it's better to use a maximum of `-O2`:

Test code:
{% highlight cpp %}
#include <iostream>

class Test {
   public:
   const std::string str = "Content";
};

int main(int argc, char **argv){
   Test t;
   std::cout << t.str << '\n';
   return 0;
}
{% endhighlight %}

{% highlight bash %}
g++ main.cpp
du -lhs a.out

g++ -O2 main.cpp
du -lhs a.out

g++ -fsanitize=address main.cpp
du -lhs a.out

g++ -O2 -fsanitize=address main.cpp
du -lhs a.out
{% endhighlight %}

---

The GNU GCC is huge, it has a world of flags and parameters, for everyone use the manual:
{% highlight bash %}
man g++
man gcc
g++ --help
gcc --help
{% endhighlight %}

---

# Usefullinks

+ <https://gcc.gnu.org/>
+ <https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html>
+ <https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html>



