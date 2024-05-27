---
layout: post
title: "Meet Mold: A Modern Linker"
date: 2024-05-27 12:56:35
image: '/assets/img/cpp/mold.jpg'
description: "🦠 A faster replacement for linkers like: ld and lld."
tags:
- cpp
- clanguage
- rust
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**mold** is a faster replacement for existing Unix linkers. 

It is several times faster than the [LLVM lld](https://terminalroot.com/tags#llvm) and [GNU ld](https://terminalroot.com/tags#gnu) linker.  

`mold` aims to increase developer productivity by minimizing build time, especially in fast debug, edit and rebuild cycles.

Here is a performance comparison of *GNU ld*, *GNU gold*, *LLVM lld*, and **mold** when linking final *debuginfo*-enabled executables for large programs on a simulated 16-core, 32-thread machine.

![Chart](/assets/img/cpp/chart.svg) 

| Program (linker output size) | GNU ld | GNU gold | LLVM lld | mold
|--------------------------------------------|---- ----|----------|----------|------
| MySQL 8.3 (0.47 GiB) | 10.84s | 7.47s | 1.64s | 0.46s
| Clang 19 (1.56 GiB) | 42.07s | 33.13s | 5.20s | 1.35s
| Chromium 124 (1.35 GiB) | N/A | 27.40s | 6.10s | 1.52s

> **mold** supports: x86-64, i386, ARM64, ARM32, 64-bit/32-bit little/big-endian RISC-V, 32-bit PowerPC, 64-bit big-endian PowerPC ELFv1, 64-bit little- endian PowerPC ELFv2, s390x, 64/32-bit LoongArch, SPARC64, m68k, SH-4 and DEC Alpha.

Here is a side-by-side comparison of CPU usage per core for lld (left) and mold (right), linking the same program, a Chromium executable.

![Htop mold](/assets/img/cpp/htop.gif) 

## Why is link speed important?
If you are using a compiled language like [C](https://terminalroot.com/tags#linguagemc), [C++](https://terminalroot.com/tags#cpp) or [Rust]( https://terminalroot.com/tags#rust), a compilation consists of two phases. 

In the first phase, a compiler compiles the source files into object files (`.o` files). 

In the second phase, a linker takes all *object files* and combines them into a single executable or shared library file.
> The second phase can be time consuming if the *build* output is large. 

Mold can speed up this process, saving time and avoiding distractions while waiting for a long build to be completed.

The difference is most noticeable during rapid debug, edit, and rebuild cycles.

---

# Installation
`mold` is available in almost all package manager repositories, example:

{% highlight bash %}
sudo brew install mold # Brew
sudo apt install mold # APT
sudo emerge mold # Portage
sudo dnf install mold # DNF
{% endhighlight %}
> And among many others! Use *search* in your package manager to find it!

---

# Usage
If you are going to compile C/C++ files, for example use the flag: `fuse-ld=mold`:
{% highlight bash %}
# Clang
clang++ -fuse-ld=mold main.cpp

# GCC
g++ -fuse-ld=mold main.cpp
{% endhighlight %}

If you are going to compile [Assembly](https://terminalroot.com/tags#assembly) files, example `hello.s` (GNU Assembler - GAS):

{% highlight nasm %}
.section.data
hello:
     .ascii "Hello, World!\n"

.section.text
.globl_start

_start:
     mov $1, %rax # syscall: sys_write
     mov $1, %rdi # file descriptor: stdout
     mov $hello, %rsi # string address
     mov $14, %rdx # string length
     syscall # calls the kernel

     mov $60, %rax # syscall: sys_exit
     xor %rdi, %rdi # exit status: 0
     syscall # calls the kernel
{% endhighlight %}

Compile normally:
{% highlight bash %}
as --64 -o hello.o hello.s
{% endhighlight %}

And use the template to link:
{% highlight bash %}
mold -o hello hello.o
{% endhighlight %}

Checking if `elf` was *linked* with `mold`:
{% highlight bash %}
readelf -p .comment a.out

# Example output

Verbatim dump from '.comment' section:
   [ 0] GCC: (Ubuntu 12.3.0-1ubuntu1~23.04) 12.3.0
   [2b] mold 1.10.1 (compatible with GNU ld)
{% endhighlight %}

---

For more information [access the repository on GiiHub](https://github.com/rui314/mold).
