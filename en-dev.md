---
layout: post
title: "The 10 fastest programming languages in the world"
date: 2025-01-13 14:15:53
image: '/assets/img/programming/fast-langs/fast-langs.png'
description: "🚀 In the current and future world where the amount of information is very large, there is a notable need for tools that match this reality."
tags:
- programming
- cpp
- clanguage
- fortran
- ada
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In the current and future world where the amount of information is very large: [Big Data](https://en.wikipedia.org/wiki/Big_data) there is a notable need for tools that match this reality, which is why the speed of [programming languages](https://terminalroot.com/tags#programming) is essential.

There are several ways to test the speed of languages, among them there is a simple way which is to check with the command [GNU time](https://www.gnu.org/software/time/) the execution time, for example, of a [for loop](https://terminalroot.com/cpp-loop-for-ranged-based/) to perform 1000 cycles. And we've already done this in a series with 3 videos on [Youtube](https://www.youtube.com/TerminalRootTV?sub_confirmation=1):
+ [I Tested the Performance of 10 Programming Languages with Ranking](https://youtu.be/spLIBqiv2Og)
+ [I Tested the Performance of 10 Programming Languages with Ranking - Part 2](https://youtu.be/KbWIFxUqjfc)
+ [I Tested the Performance of 10 Programming Languages - Ranking FINAL](https://youtu.be/M1CCb3XFccQ)
> The videos are in Portuguese, but you can understand them even without audio. If this bothers you, use YouTube's automatic translation.

> **Note**: Since the tests were performed on video, the [screencast](https://www-maartenbaert-be.translate.goog/simplescreenrecorder/) was turned on and the performance with screen recording is slightly higher than if it is done without it. And this is not a detail, but rather necessary information.

The tests performed above were performed with 30 programming languages, including: [C++](https://terminalroot.com/tags#cpp), [C](https://terminalroot.com/tags#clanguage), [JavaScript](https://terminalroot.com/tags#javascript), [Python](https://terminalroot.com/tags#python), [Lua](https://terminalroot.com/tags#lua), [Swift](https://terminalroot.com/tags#swift), [Java](https://terminalroot.com/tags#java), [Go](https://terminalroot.com/tags#go), and others.

We did not make comparisons with [Assembly](https://terminalroot.com/tags#assembly), because Assembly would certainly be in first place. Although C, C++, Zig and others transpile the final code to Assembly, it is not the same as writing in pure Assembly, since these languages ​​create a [dynamic](https://terminalroot.com/difference-between-static-and-dynamic-libraries/) link to other code, which in the end greatly influences the final result, which is why Assembly is always the fastest.

However, the final ranking had some surprises and in this article we will see, in descending order, the **10 fastest programming languages** according to this test. Remember that I did the same test with some that are not on the list and that performed well and we will include them in the list, since they were in the **TOP10**.

---

## 10th POSITION: [Dlang](https://dlang.org/)
![Dlang](/assets/img/programming/fast-langs/dlang.png)

Dlang or simply: D, is a general-purpose programming language designed by *Walter Bright* of *Digital Mars*.

It is mostly based on [C++](https://terminalroot.com/tags#cpp), although it is not just a variant. The stable version of the first specification (*v1.0*) was released in January 2007. Native D code is generally as fast as the code.

---

## 09° POSITION: [Swift](https://terminalroot.com/tags#swift)
![Swift](/assets/img/programming/fast-langs/swift.png)

Swift is a compiled, multi-paradigm, high-level, general-purpose programming language created by [Chris Lattner](https://nondot.org/sabre/) in 2010 for *Apple Inc.* and maintained by the open source community.

Swift compiles to machine code and uses a compiler based on [LLVM](https://terminalroot.com/tags#llvm), also created by *Chris Lattner*. Swift was first released in June 2014.

Swift replaced all of Apple's *Objective-C* and *Objective-C++* code in just a few months of existence, which ended up encouraging Rust (based on Swift's ideas) to try the same feat, that is, to try to replace C and C++ code, but the community has not yet embraced this idea as Apple, which is a closed and private company.

Today, Swift is available for any operating system and architecture, and not just for Apple devices.

> After the release of the new versions of Swift, I redid the tests and it moved up in position!

---

## 08° POSITION: [Lua](https://terminalroot.com/tags#lua)
![Lua](/assets/img/programming/fast-langs/lua.png)

Lua is an interpreted, high-level scripting programming language, with dynamic and multiparadigm typing, reflective and lightweight, designed by **Tecgraf** of **PUC-Rio** (created by Brazilians) in 1993 to expand applications in general, in an extensible way (which unites parts of a program made in more than one language), for prototyping and to be [embedded in complex software](https://terminalroot.com/how-to-embed-c-cpp-functions-in-lua/), such as [games](https://terminalroot.com/tags#games). It resembles [Python](https://terminalroot.com/tags#python), [Ruby](https://terminalroot.com/tags#ruby) and *Icon**, among others.

---

## 7th POSITION: [Rust](https://terminalroot.com/tags#rust)
![Rust](/assets/img/programming/fast-langs/rust.png)

Rust is a general-purpose programming language that emphasizes performance, type safety, and concurrency. Rust's performance is directly linked to the use of [LLVM](https://terminalroot.com/tags#llvm) which took about 20 years to complete and is written in [C++](https://github.com/terroo/mylang).

Rust based its ideas on Swift (automatically sanitizes memory) and mixed the syntax of languages ​​such as: [C++](https://terminalroot.com/tags#cpp) (use of `std`, `main`, ...) and OCaml.

In 2022, Rust was involved in controversy due to its **logo**, which was declared copyrighted, an attitude that led to problems with the operating system: Debian GNU/Linux, which does not accept this type of license.

---

## 06° POSITION: [Perl](https://terminalroot.com/tags#perl)
![Perl](/assets/img/programming/fast-langs/perl.png)

Perl is a family of two multiplatform programming languages, Perl 5 and Perl 6i, and later renamed: Raku.

Perl was originally developed by Larry Wall in 1987.

Perl is considered the fastest scripting programming language ever created to date. Perl was also the basis for the development of the programming language: [PHP](https://terminalroot.com/tags#php), with a very similar syntax.

---

## 05th POSITION: [Ada](https://www.adaic.org/)
![Ada](/assets/img/programming/fast-langs/ada.png)

Ada is a high-level, structured, statically typed, imperative, object-oriented programming language inspired by **Pascal** and other languages.

It was the first programming language designed for *Memory Safe* (or more correctly: *Memory Sanitize*), that is, it makes it easier for the programmer to dynamically deallocate data, test for overflow at compile time, and automatically destroy unused objects.

Ada was originally designed by a team led by French computer scientist *Jean Ichbiah* from Honeywell under contract with the **United States Department of Defense** (DoD) from 1977 to 1983 to replace more than 450 programming languages ​​used by the DoD at that time.

Ada was named after Ada Lovelace (1815–1852), who is credited as the first computer programmer.

---

## 04° POSITION: [Vala](https://vala.dev/)
![Vala](/assets/img/programming/fast-langs/vala.png)

Vala is an object-oriented programming language with a self-hosted compiler that generates C code and uses the [GObject](https://terminalroot.com/how-to-export-firefox-passwords-in-gpg-with-cpp/) system.

Vala is syntactically similar to [C#](https://terminalroot.com/tags#csharp).

It was developed by [GNOME](https://terminalroot.com/how-to-export-firefox-passwords-in-gpg-with-cpp/) and aims to bring modern features to GNOME developers without imposing any additional runtime requirements and without using a different ABI.

---

## 03° POSITION: [Fortran](https://fortran-lang.org/)
![Fortran](/assets/img/programming/fast-langs/fortran.png)

Fortran, an acronym for IBM Mathematical **FOR**mula **TRAN**slation System, is a programming language aimed at scientific and technical computing and specially designed for efficient runtime execution on a wide variety of processors.

It was initially developed in the 1950s and standardized in 1966. It is currently the third most popular programming language in high-performance computing

---

## 02nd POSITION: [C](https://terminalroot.com/tags#clanguage)
![C](/assets/img/programming/fast-langs/c.png)

C is considered the *mother* of almost all modern programming languages.

The initial development of C took place at AT&T Bell Labs between 1969 and 1973, created solely by Dennis Ritchie. The [first book on the C Language](https://terminalroot.com.br/2022/09/10-livros-da-linguagem-c-que-vale-a-pena-voce-ler.html) had the help of Brian Kernighan. [This book](https://terminalroot.com.br/2022/09/10-livros-da-linguagem-c-que-vale-a-pena-voce-ler.html) is the best-selling book in the world when it comes to programming.

---

## 1st POSITION: [C++](https://terminalroot.com/tags#cpp)
![C++](/assets/img/programming/fast-langs/cpp.png)

And in the very first place was [C++](https://terminalroot.com/tags#cpp).

C++ is a programming language that is based on the [Simula](https://en.wikipedia.org/wiki/Simula) and [C](https://terminalroot.com/tags#clanguage) programming languages (and also compiles C code).

Originally C++ was called "C with Classes", but soon after it was changed to C++ (an enhanced C: `++`, like a for loop, for example).

I created my own programming language with C++: <https://github.com/terroo/mylang>.

---

Remember that the codes used for the performance tests can be found in the repository: <https://github.com/terroo/langs-test-loop>.

