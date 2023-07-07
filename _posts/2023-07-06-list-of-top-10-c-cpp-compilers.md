---
layout: post
title: "List of Top 10 C/C++ Compilers"
date: 2023-07-06 23:03:05
image: '/assets/img/cpp/compilers/1.jpg'
description: 'Those who are up to date!'
tags:
- cpp
- clanguage
- gcc
- llvm
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Creating a C/C++ Compiler is a very difficult thing to write and takes years, in many cases: decades. And besides, it's trying to compete with those who dominate the market and will be almost impossible to replace.

The [C language](https://terminalroot.com/tags#clanguage) had its first compiler(`cc` *C Compiler*) made by its own creator: [Dennis Ritchie](https://en.wikipedia.org/wiki/Dennis_Ritchie). So was [C++](https://terminalroot.com/tags#cpp), its first compiler(`Cfront`) was written by its creator: [Bjarne Stroustrup](https://en.wikipedia.org/wiki/Bjarne_Stroustrup).

People always like alternative tools for *n* reasons.

So, in this article we will see a **list of 10 compilers for C and C++** and they are separated numerically according to their efficiency and update as follows:

+ **1.** from number `01` to `03` - The 3 <u>best</u> and **most updated** on the market;
+ **2.** between the numbers `04` to `07` - the alternative compilers that may one day make the best list;
+ **3.** the numbers: `08` and `09` - recent projects with great potential;
+ **4.** and finally the number `10` - for the sake of *honor*! 😃

Let's go to the list!

---

# 01. [GNU Compiler Collection](https://gcc.gnu.org) `gcc/g++`
![GCC](/assets/img/cpp/compilers/gcc.jpg)

This one certainly had and should always be the first in any list of [C/C++](https://terminalroot.com/tags#cpp) compilers. Well, it supports the largest number of architectures, the oldest among the best and served as a basis/inspiration (in some cases even *fork*) for several others, including the other two best.

It is a complete compiler and **optimizer** produced by the [GNU Project](https://terminalroot.com/tags#gnu) that supports various programming languages, hardware architectures and operating systems. The **Free Software Foundation (FSF)** distributes [GCC](https://terminalroot.com/tags#gcc) as [free software](https://terminalroot.com/tags/# freesoftware) under the [GNU General Public License (GNU GPL)](https://www.gnu.org/licenses/gpl-3.0.html).

With around **15 million lines of code** in 2019, <u>GCC is one of the biggest free software out there</u>.

When it was first released in 1987 by [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman), the GCC 1.0 was named the *GNU C Compiler* as it only dealt with the [C programming language](https://terminalroot.com/why-is-the-c-programming-language-still-on-the-rise/). It was extended to compile [C++](https://terminalroot.com/tags#cpp) in December of that year. Today it has a list of several other [programming languages](https://terminalroot.com/tags#programming)

+ Official page: <https://gcc.gnu.org/>
+ Installation tutorials: [On GNU and Unix-like systems](https://terminalroot.com/tags#gcc) and [Windows](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/)

Usage examples:
> Compile C++ code, eg `main.cpp`
{% highlight bash %}
g++ main.cpp
{% endhighlight %}

> Compile C code, eg `main.c`
{% highlight bash %}
gcc main.c
{% endhighlight %}

---


# 02. [Clang/LLVM](https://clang.llvm.org/) `clang/clang++`
![Clang](/assets/img/cpp/compilers/clang.jpg)

This compiler is, for sure, GCC's biggest competitor, and may even (who knows one day) surpass it!

It was initially developed by [Chris Lattner](https://github.com/lattner)(perhaps, currently the guy who most understands compilers/interpreters in the world) and later by a team, which includes names, which Chris Lattner himself says that: if it wasn't for them, Clang/LLVM wouldn't be so good.

Chris Lattner has stated several times that he was interviewed that his biggest source of inspiration was the GCC.

[Clang](https://terminalroot.com/tags#clang) is nothing more than a **front-end** for [LLVM](https://terminalroot.com/tags#llvm ).

**LLVM** is the one who actually transforms the code! It is written in [C++](https://terminalroot.com/tags#cpp) and took about two decades to get ready, and that was only possible because [Apple](https://terminalroot. com/tags#macos) was the company responsible for financially supporting the LLVM programmers during all this time, but also had support from companies: Google, Microsoft, ARM, Sony, Intel, and AMD.

> LLVM is also used by languages: [Zig](https://github.com/ziglang/zig/issues/16270), [Swift](https://terminalroot.com/how-to-install-swift-programming-language-on-ubuntu/), [Rust](https://terminalroot.com/tags#rust), [Codon](https://terminalroot.com/codon-a-python-compiler-written-with-cpp-and-llvm/) and among several others. Therefore, these new languages are, in fact, **front-end** to **C++/LLVM**, which is one of the reasons they have appeared in so many numbers in recent years!

In addition to C/C++, Clang/LLVM also compiles the codes of languages: Objective-C, Objective-C++, OpenMP, OpenCL, RenderScript and CUDA.

+ Official page: <https://clang.llvm.org>
+ Installation Tutorials: [Windows and Unix-like](https://clang.llvm.org/get_started.html)

Usage examples:
> Compile C++ code, eg `main.cpp`
{% highlight bash %}
clang++ main.cpp
{% endhighlight %}

> Compile C code, eg `main.c`
{% highlight bash %}
clang main.c
{% endhighlight %}

---

# 03. [Microsoft Visual C++](https://learn.microsoft.com/en-us/cpp/?view=msvc-170) `msvc/cl`
![MSVC](/assets/img/cpp/compilers/msvc.jpg)

**MSVC** was originally a standalone product, but later became part of [Visual Studio](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp#23-visual-studio). It has tools for developing and debugging C and C++ code.

+ Official page: <https://learn.microsoft.com/en-us/cpp>
+ Installation tutorials: [Windows](https://terminalroot.com/how-to-compile-with-msvc-via-command-line/)

Usage examples:
> Compile C++ code, eg `main.cpp`
{% highlight bash %}
cl main.cpp
{% endhighlight %}

> Compile C code, eg `main.c`
{% highlight bash %}
cl main.c
{% endhighlight %}

---

# 04. [Intel C++ Compiler](https://www.intel.com/content/www/us/en/developer/tools/oneapi/dpc-compiler.html) `icpx/icx`
![icx](/assets/img/cpp/compilers/intel.jpg)

This compiler is part of the Intel OneAPI HPC Toolkit which are Intel C, C++ ,SYCL and Data Parallel C++ (DPC++) compilers for Intel processor-based systems, available for [Windows](https://terminalroot.com. br/tags#windows), [GNU/Linux](https://terminalroot.com/tags#gnu) and [macOS](https://terminalroot.com/tags#macos)

+ Web address: <https://www.intel.com/content/www/us/en/developer/tools/oneapi/dpc-compiler.html>
+ Installation Tutorials: [On Linux distros](https://www.intel.com/content/www/us/en/docs/dpcpp-cpp-compiler/get-started-guide/2023-0/get-started-on-linux.html) and on [Windows](https://www.intel.com/content/www/us/en/docs/dpcpp-cpp-compiler/get-started-guide/2023-0/get-started-on-windows.html)

Usage examples:
> Compile C++ code on Linux, eg `main.cpp`
{% highlight bash %}
icpx main.cpp
{% endhighlight %}

> Compile C++ code on Windows, eg `main.cpp`
{% highlight bash %}
icx main.cpp
{% endhighlight %}

---

# 05. [IBM XL C/C++ Compilers](https://www.ibm.com/products/c-and-c-plus-plus-compiler-family) `ibm-clang/ibm-clang++`
![IBM XL C/C++](/assets/img/cpp/compilers/ibm.jpg)

XL C/C++ is the name of the IBM compilers for C/C++.

These are front-ends, including a top-notch optimizer. Although independent of hardware architectures, they are intended for: POWER, BlueGene/Q and IBM Z.

+ Internet address: <https://www.ibm.com/products/c-and-c-plus-plus-compiler-family>
+ Installation tutorials: <https://www.ibm.com/docs/en/openxl-c-and-cpp-lop/17.1.1?topic=installation>

Usage examples:
> Compile C++ code, eg `main.cpp`
{% highlight bash %}
ibm-clang++ main.cpp
{% endhighlight %}

> Compile C code, eg `main.c`
{% highlight bash %}
ibm-clang main.c
{% endhighlight %}

---

# 06. [Oracle C++ Compiler](https://docs.oracle.com/cd/E37069_01/html/E37073/gkobs.html) `CC`
![Oracle](/assets/img/cpp/compilers/oracle.jpg)

The Oracle C++ compiler consists of a front end, optimizer, code generator, assembler, model prelinker, and link editor. The `CC` command invokes each of these components automatically, unless you use command line options to specify otherwise.

+ Internet address: <https://docs.oracle.com/cd/E37069_01/html/E37073/gkobs.html>
+ Installation tutorials: <https://docs.oracle.com/cd/E36784_01/html/E49624/gnwql.html>

Usage examples:
> Compile C++ code, eg `main.cpp`
{% highlight bash %}
CC main.cpp
{% endhighlight %}

> Compile C code, eg `main.c`
{% highlight bash %}
CC main.c
{% endhighlight %}

---

# 07. [EDG C++ Front End](https://www.edg.com/c) `eccp`
![EDG](/assets/img/cpp/compilers/edg.jpg)

It is an iC/C++ front-end compiler developed by the company: **Edison Design Group**.

Supports ISO/IEC 14882 standard. C++17, C++14, C++11 and C++98/03 language versions are fully supported. Work is ongoing to support the C++20 language features.

+ Web address and installation tutorials: <https://www.edg.com/c>

Usage examples:
> Compile C++ code, eg `main.cpp`
{% highlight bash %}
eccp -c main.cpp
{% endhighlight %}

> Compile C code, eg `main.c`
{% highlight bash %}
eccp -c main.c
{% endhighlight %}

---

# 08. [Circle](https://github.com/seanbaxter/circle/) `circle`
![Circle](/assets/img/cpp/compilers/circle.jpg)

Circle is a new, different compiler and includes its own language, a:Circle.

It focuses on a new versioning mechanism that allows the compiler to fix defects and make C++ more secure and productive while maintaining 100% compatibility with existing code.

Although the project already has versions available for use, it is still under development.

Internet address: <https://www.circle-lang.org/>

As of the date of publication of this article, only version available for GNU/Linux distributions and the most recent one is `Build 198`.

It can be installed as follows:
{% highlight bash %}
mkdir bin-circle
cd bin-circle
wget https://www.circle-lang.org/linux/build_198.tgz
tar zxvf circle_build_198.tgz
sudo install -v circle /usr/local/bin/
{% endhighlight %}

Testing Circle:
{% highlight bash %}
cat << EOF >> main.cpp
> #include <iostream>
>
> int main(){
> std::cout << "Hello Circle\n";
> }
> EOF
{% endhighlight %}

As Circle does not have a defined path for `STL`, you will have to use the standard library of another compiler to avoid the error: `cannot find header iostream`. In this case, for example, if you have GCC 11 installed, the path to compile would be:

{% highlight bash %}
circle -nostdinc \
       -I/usr/include/c++/11 \
       -I/usr/include/x86_64-linux-gnu/c++/11 \
       -I/usr/lib/gcc/x86_64-linux-gnu/11/include \
       main.cpp
{% endhighlight %}
> For more information see [here](https://github.com/seanbaxter/circle/issues/124).

---

# 09. [C++Builder](https://www.embarcadero.com/products/cbuilder)
![C++Builder](/assets/img/cpp/compilers/cpp-builder.jpg)

In addition to a compiler and optimizer, C++ Builder is also a rapid application development environment (RAD) for developing software in the C++ programming language.

Originally developed by Borland, as of 2009 it is owned by Embarcadero Technologies, a subsidiary of Idera. C++ Builder can build apps for Windows (both IA-32 and x64 ), iOS, macOS and Android (32-bit only).

Its internet address and how to install: <https://www.embarcadero.com/products/cbuilder>

To use C++ Builder through CMD/PowerShell/Windows Terminal you can add the address: `C:\Program Files(x86)\Embarcadero\Studio\[VERSION]\bin` to the **Windows Environment Variable**(`PATH`).

And run via command line according to [this article](https://learncplusplus.org/how-to-start-a-c-program/).

Example:
```bash
bcc32 main.cpp
main.exe
```

As the image below:
![PATH to C++ Builder](/assets/img/cpp/compilers/path-cpp-builder.jpg) 
> Credits by [Yılmaz Yörü](https://www.facebook.com/groups/cppdev/posts/1494419177964674?comment_id=1494555401284385).

---

# 10. [Comeau C/C++](https://en.wikipedia.org/wiki/Comeau_C/C++)
![Cfront](/assets/img/cpp/compilers/cfront.jpg)

Remember that at the beginning of the article I talked about a matter of honor? Yes, **Comeau C/C++** is the new name of the first C++ compiler: `Cfront`.

In 2006-2008 it was described as the only mainstream C++ compiler to fully support the `export` keyword.

This compiler is owned by the company *Comeau Computing* which is a founding member of the C++ committee!

Nowadays, this compiler is **deprecated**, but you can get more information [here](https://www.comeaucomputing.com/).

---

I hope you enjoyed the list and until next time!

<!-- Via:

+ <https://en.wikipedia.org/wiki/List_of_compilers>
+ <https://en.wikipedia.org/wiki/Category:C_(programming_language)_compilers>
+ <https://www.stroustrup.com/compilers.html>

---

+ <https://en.wikipedia.org/wiki/GNU_Compiler_Collection>
+ <https://en.wikipedia.org/wiki/Cfront>
+ <https://en.wikipedia.org/wiki/Intel_C++_Compiler>
+ <https://en.wikipedia.org/wiki/Microsoft_Visual_C++>
+ <https://en.wikipedia.org/wiki/Clang>
+ <https://en.wikipedia.org/wiki/LLVM>
+ <https://en.wikipedia.org/wiki/IBM_XL_C/C++_Compilers>
+ <https://en.wikipedia.org/wiki/C++Builder>

-->

