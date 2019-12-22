---
layout: post
title: "GCC vs LLVM: Which is the best compiler?"
date: 2019-12-20 12:20:48
image: '/assets/img/cpp/gnu-vs-llvm.jpg'
description: 'How to compile in each, benchmarks, who uses and others.'
featured-img: ../cpp/gnu-vs-llvm.jpg
tags:
- gcc
- llvm
- clang
- cpp
- linguagemc
- compiladores
---

## Introduction
**[GCC](https://gcc.gnu.org/)** is the most widely used and reliable compiler in the world. Several of the world's most widely used software were (and are) compiled by him.

However, developers are driven by novelty and somehow speculation. And many have heard of **[LLVM](https://llvm.org/)** and most of the time have gotten good information. This way, many have been using it, but are still afraid about 3 essential requirements:

+ **Security**;
+ **Speed ​​**;
+ and **Reliability**.

We'll look at benchmarking information and testing in this article and come to a conclusion.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Compiling with GCC:
### C language:
+ Single file:
{% highlight bash %}
gcc main.c -o binary
{% endhighlight %}

+ Multiple Files:
{% highlight bash %}
gcc main.c other.c -o binary
{% endhighlight %}
> You can exchange the `gcc` command for only` cc` which is a symbolic link to it:

{% highlight bash %}
which cc
# /usr/bin/cc
ls -l /usr/bin/cc
## lrwxrwxrwx 1 root 42 Nov 23 19:41 /usr/bin/cc -> /usr/x86_64-pc-linux-gnu/gcc-bin/9.2.0/gcc
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

### C++ Language:
+ Single file:
{% highlight bash %}
g++ main.cpp -o binary
{% endhighlight %}

+ Multiple Files:
{% highlight bash %}
g++ main.cpp other.cpp -o binary
{% endhighlight %}
> You can exchange the `g++` command for only `c++` which is a symbolic link to it:

{% highlight bash %}
ls -l $(which c++)
lrwxrwxrwx 1 root 42 Nov 23 19:41/usr/bin/c++ -> /usr/x86_64-pc-linux-gnu/gcc-bin/9.2.0/c++
{% endhighlight %}

## Compiling with LLVM:
> Clang is a compiler front end for the C, C++, Objective-C, and Objective-C++ languages ​​that uses LLVM as the backend.

### C language:
+ Single file:
{% highlight bash %}
clang main.c -o binary
{% endhighlight %}

+ Multiple Files:
{% highlight bash %}
clang main.c other.c -o binary
{% endhighlight %}

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>  

### C++ Language:
+ Single file:
{% highlight bash %}
clang++ main.cpp -o binary
{% endhighlight %}

+ Multiple Files:
{% highlight bash %}
clang++ main.cpp other.cpp -o binary
{% endhighlight %}

---

## GCC Concept:
The GNU Compiler Collection (commonly called GCC) is a set of programming language compilers produced by the GNU project to build a free Unix-like operating system. It is part of the GNU and FSF operating system and is one of the essential tools for keeping software free as it allows you to compile source code into executable binaries for the most common computer platforms. It is distributed by the Free Software Foundation (FSF) under the terms of the GNU GPL, available for UNIX and Linux operating systems and certain derived operating systems such as Mac OS X.

The GCC was written primarily in C.

## LLVM Concept:
LLVM (formerly Low Level Virtual Machine) is a compiler infrastructure designed to optimize the compilation, binding and execution times of programs written in various programming languages. Originally implemented for C and C++, its architecture allowed it to expand to other languages ​​later, including Objective-C, Fortran, Ada, Haskell, Java bytecode, Python, Ruby, ActionScript, GLSL, Julia, Kotlin, and more.

LLVM was written in C++.

---

## GCC History:
The GCC compiler was written by Richard Stallman in 1987 to serve as the compiler for the GNU Project. In 1997, a group of developers unhappy with the slow pace and closed nature of the official development of the GCC compiler, formed the EGCS project, which merged several experimental forks into a single GCC forked project. The development of EGCS, proving sufficiently more vital than the GCC, was finally "blessed" as the official version of the GCC in April 1999. The GCC project is now maintained by a diverse group of programmers from around the world and even to date it has been adapted to more types of processors and operating systems than any other compiler.

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## LLVM History:
The LLVM project began in 2000 at the University of Illinois at Urbana - Champaign under the direction of Vikram Adve and Chris Lattner. In 2005 Apple Inc. hired Lattner and formed a team to work on the LLVM system for various uses in development systems. from Apple.

---

## Languages ​​Supported by GCC:
Ada (GCC for Ada or GNAT), C, C++ (GCC for C++ or G++), Fortran (GCC for Fortran or GFortran), Java (GCC for Java or GCJ), Objective-C, and Pascal.

## Languages ​​Supported by LLVM:
Ada, C, C++, D, Delphi, Fortran, Haskell, Julia, Objective-C, Rust, and Swift using various front ends, some derived from GNU Compiler Collection (GCC) versions 4.0.1 and 4.2.

---

## Who uses GCC:
[NASA](https://www.nccs.nasa.gov/nccs-users/instructional/using-discover/compilation-software/compilers), Intel, Massachusetts Institute of Technology (MIT), AMD, Linux, IBM, Dell , Red Hat, GNOME, KDE and [among others](https://gcc.gnu.org/wiki/CompileFarm#History_and_Sponsors). The number of Universities, Institutions, Companies they use is [very large](https://gcc.gnu.org/wiki/cauldron2016) and there is no place that can bring them all together.

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Who uses LLVM:
Apple, Adobe, Ageia Technologies, Google, Intel, NVIDIA, Sony, University of California, Stanford, New York University, Ericsson, and [among many others](https://llvm.org/Users.html).

## Architectures Supported by GCC:
Alpha, ARM, AVR, Blackfin, Epiphany (GCC 4.8), H8 / 300, HC12, IA-32 (x86), IA-64 (Intel Itanium), MIPS, Motorola 68000, PA-RISC, PDP-11, PowerPC, R8C / M16C / M32C, SPARC, SPU, SuperH, System / 390 / zSeries, VAX, x86-64, 68HC11, A29K, CR16, C6x, D30V, DSP16xx, ETRAX CRIS, FR-30, FR-V, Intel i960, IP2000, M32R, MCORE, MIL-STD-1750A, MMIX, MN10200, MN10300, Motorola 88000, NS32K, IBM ROMP, RL78, Stormy16, V850, Xtensa, Cortus APS3, ARC, AVR32, C166, D10V, EISC, eSi -RISC, Hexagon, LatticeMico32, LatticeMico8, MeP, MicroBlaze, Motorola 6809, MSP430, NEC SX architecture, Nios II and Nios, OpenRISC, PDP-10, PIC24 / dsPIC, PIC32, Propeller, RISC-V, Saturn (HP48XGCC), System / 370, TIGCC (m68k variant), TriCore, Z8000 and ZPU.

## Architectures Supported by LLVM:
X86, X86-64, PowerPC, PowerPC-64, ARM, Thumb, SPARC, Alpha, CellSPU, MIPS, MSP430, SystemZ, WebAssembly, and XCore.

---

## Performance Tests by a Compiler Expert
These tests and analyzes were done by [Mike Kinghan](https://stackoverflow.com/users/1362568/mike-kinghan) a Oxford Software Engineer.

The tests were performed on different architectures and also on different amounts of processor cores. With versions **GCC 4.7.2** and **Clang 3.2**. It can be noted that Clang(LLVM) outperforms larger cores and GCC for smaller and/or hybrid amounts.

> Numbers are represented in microseconds, eg **0.000231 secs**.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

| Compiler | -O2 | -O3 | O2/O3 |
|---|---|---|---|
| GCC-4.7.2 | 231 | 237 | 0.97 |
| Clang-3.2 | 234 | 186 | 1.25 |

Mike Kinghan's Words
> I compared test equipment performance between **GCC 4.7.2** and **Clang 3.2**, all the same except the preprocessors. In **Clang 3.2**, no preprocessor differentiation was needed anymore between the code ranges that GCC would compile and the Clang alternatives. I created in the same C++ library (GCC) in each case and performed all comparisons consecutively in the same terminal session.
> 
> The default optimization level for my version is **-O2**. I also successfully tested builds on **- O3**. I tested each setting three times in a row and averaged the three results with the following results. The number in a data cell is the average number of microseconds consumed by the **coan** executable to process each of the **~70K** input files (read, parse, and write diagnostics).

---

## Conclusion
I know you can't get very far with this comparison. There are several things that are far from our understanding because it is too technical.

But I tried to summarize everything I researched, documented to report here as simply as possible. I particularly use both (for my small programs) and find both excellent. I even compiled LLVM with GCC!

I was thinking about changing the `make.conf` variables from my [Gentoo](https://gentoo.org/) to [LLVM/Clang], but then I thought, why change something that is working? However, I think this initiative of a replacement for GCC is very cool, by the way, the more alternatives there are, the better for us.

I hope you enjoyed this review. In short, the choices are up to you, which are most often made for reasons *extra software* 😂️ !!!

Hugs!

---

## References
+ <http://gcc.gnu.org/wiki/CompileFarm>
+ <https://cfarm.tetaneutral.net/>
+ <https://en.m.wikipedia.org/wiki/GNU_Compiler_Collection>
+ <https://en.wikipedia.org/wiki/LLVM>
+ <https://gcc.gnu.org/>
+ <https://gcc.gnu.org/cgi-bin/search.cgi?cmd=Search&m=all&np=7&q=sponsors&s=DRP>
+ <https://gcc.gnu.org/cgi-bin/search.cgi?cmd=Search&m=all&np=9&q=who+uses&s=DRP>
+ <https://gcc.gnu.org/cgi-bin/search.cgi?q=java&cmd=Search&m=all&s=DRP>
+ <https://gcc.gnu.org/cgi-bin/search.cgi?q=sponsors&cmd=Search&m=all&s=DRP>
+ <https://gcc.gnu.org/cgi-bin/search.cgi?q=who+uses&cmd=Search&m=all&s=DRP>
+ <https://gcc.gnu.org/install/specific.html>
+ <https://gcc.gnu.org/ml/gcc/1998-01/msg01165.html>
+ <https://gcc.gnu.org/ml/gcc-bugs/1999-10n/msg00017.html>
+ <https://gcc.gnu.org/wiki>
+ <https://gcc.gnu.org/wiki/cauldron2016>
+ <https://gcc.gnu.org/wiki/CompileFarm>
+ <https://gcc.gnu.org/wiki/CompileFarm#History_and_Sponsors>
+ <https://gcc.gnu.org/wiki/People>
+ <https://github.com/gcc-mirror/gcc>
+ <https://llvm.org/Features.html>
+ <https://llvm.org/Users.html>
+ <https://pt.wikipedia.org/wiki/Clang>
+ <https://pt.wikipedia.org/wiki/GCJ>
+ <https://pt.wikipedia.org/wiki/GNU_Compiler_Collection>
+ <https://pt.wikipedia.org/wiki/Low_Level_Virtual_Machine>
+ <https://stackoverflow.com/questions/3187414/clang-vs-gcc-which-produces-better-binaries>
+ <https://stackoverflow.com/users/1362568/mike-kinghan>
+ <https://wiki.gentoo.org/wiki/Talk:GCC_optimization>
+ <https://www.fsf.org/news/fsf-announces-new-fiscal-sponsorship-for-seagl-conference>
+ <https://www.fsf.org/patrons>
+ <https://www.fsf.org/patrons/fy2017>
+ <https://www.fsf.org/patrons/fy2018>
+ <https://www.fsf.org/patrons/fy2019>
+ <https://www.gccforensics.com/sponsors>
+ <https://www.gnuhealthcon.org/2019-liege/sponsors.html>
+ <https://www.gnu.org/thankgnus/>
+ <https://www.gnu.org/thankgnus/2019supporters.html>
+ <https://www.gnu.org/thankgnus/2019supporters.html#TOCother>
+ <https://www.linuxfoundation.org/blog/2018/10/gcc-a-world-class-compiler-optimizing-linux-and-more/>
+ <https://www.nccs.nasa.gov/nccs-users/instructional/using-discover/compilation-software/compilers>
