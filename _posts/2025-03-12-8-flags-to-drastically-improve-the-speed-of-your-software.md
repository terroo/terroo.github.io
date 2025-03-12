---
layout: post
title: "8 flags to drastically improve the speed of your software"
date: 2025-03-12 13:36:10
image: '/assets/img/cppdaily/fast.jpg'
description: "🚀 For software created in C, C++ and even other programming languages." 
tags:
- languagec
- cpp
- cppdaily
- gcc
- clang
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We've already made a [article about flags](https://terminalroot.com/10-flags-and-parameters-tips-for-gnu-gcc/) that works for both [GCC](https://terminalroot.com/tags#gcc) and [Clang](https://terminalroot.com/tags#clang), however, those tips have general instructions for compilation.

In this article, we will specify more the objective at "compile time" that directly influences the performance of the *binary*, making the **speed** at "runtime" better!


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 01. The basics
The `-fsanitize=address` flag and all the others in [sanitize](https://github.com/google/sanitizers)(`libasan`), from Google, which was natively implemented by the [GNU Project](https://terminalroot.com/tags#gnu) are used to check for *memory leaks*, *memory violations* and other related failures.

However, it should only be used during development, when you are going to make it available for production, that is, the *release* version. The ideal is to create the [Makefile](https://terminalroot.com/tags#make), or [CMake](https://terminalroot.com/tags#cmake) or any other compilation tool without this flag. In fact, it is a good idea to remove any other *debug* flag, including: `-g`, `-Wall`, `-Werror`, `-pedantic`, `-Wpedantic`,...

Because they, especially `-fsanitize=address`, make the binary execution very slow. You can replace it with the optimizer, for example, `-O1`, `-O2` or `-O3`:

+ `-O1` **(Basic optimization)** - Enables optimizations that improve performance without significantly increasing compilation time. Examples: dead code elimination, constant propagation, limited inlining.

+ `-O2` **(Moderate optimization)** - Includes all optimizations from `-O1` and adds more aggressive ones that still maintain code reliability. Examples: loop unrolling, elimination of common subexpressions, better instruction scheduling.

+ `-O3` **(Aggressive optimization)** - Includes all optimizations from `-O2` and adds new, more aggressive ones, such as increased *inlining* and *loop vectorization*. May increase code size and, in some cases, reduce performance due to over-optimization.

And there is also `-Ofast`, although it is the most aggressive of all and *almost equivalent* to `-O3`, it can completely optimize the code, making it even faster, since it still includes the `-ffast-math` flag, this can be good, but the ideal is to do tests, since some precision calculations, mainly for the `double` and `float` types, can have unexpected results, since it can reduce the number of significant digits, in addition to being able to *break* with the [C](https://terminalroot.com/tags#linguagemc) and [C++](https://terminalroot.com/tags#cpp) standards.

However, in most cases, it is recommended for *release*, for example:
{% highlight bash %}
g++ -Ofast main.cpp
{% endhighlight %}
> If you want a less conflicting fusion, use it together with `-ffp-contract=fast`: Allows fusion of floating point operations, such as FMA (*Fused Multiply-Add*).

In short:
#### Use `-Ofast` if exact numerical precision is not critical and you want to extract maximum performance.

---

## 02. Architecture-specific tuning
The `-march=native` flag allows the compiler to generate code optimized for your CPU architecture:
{% highlight bash %}
g++ -Ofast -march=native main.cpp
{% endhighlight %}
> Using it in combination with `-Ofast` can be a great idea for performance.

This allows the compiler to use advanced instructions of your processor, such as **SSE**, **AVX**, etc.

If you need to distribute the binary to other machines, choose a specific value instead of native, such as `-march=haswell`, `-march=znver3`, etc.

In short:
#### The `-march=native` flag, if you want, allows the compiler to generate code optimized for your CPU architecture.

---

## 03. Parallelism with OpenMP
If the code is parallelizable, add support for OpenMP to take advantage of multiple CPU cores:

{% highlight bash %}
g++ -Ofast -march=native -fopenmp main.cpp
{% endhighlight %}
> Also in combination with the flags mentioned above.

This allows loops and other parts of the code to run in parallel.

OpenMP (Open Multi-Processing) is an application programming interface (API) for shared-memory multiprocessing on multiple platforms. It allows adding concurrency to programs written in [C](https://terminalroot.com/tags#linguagemc), [C++](https://terminalroot.com/tags#cpp) and [Fortran](https://terminalroot.com/tags#fortran) based on the fork-join execution model.


<!-- RECTANGLE 2 - OnParagragraph -->
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

---

## 04. Improve CPU cache usage
The `-funroll-loops` and `-fprefetch-loop-arrays` flags help improve loop execution:

{% highlight bash %}
g++ -Ofast -march=native -funroll-loops -fprefetch-loop-arrays main.cpp
{% endhighlight %}
> Also in combination with the flags mentioned above.

If we used them in the [video about Ranking of Programming Languages](https://terminalroot.com/tested-the-performance-of-10-programming-languages/), C++ and C would leave those behind them even further behind! 😃

Remember, an even better utility than these flags is `ccache`, which we published in the article: [Use Ccache and compile much faster](https://terminalroot.com/use-ccache-and-compile-much-faster/), however, its focus is to reduce "compilation time" and not only binary performance.

---

## 05. Optimized linking
The `-flto` (*Link-Time Optimization*) flag is used to allow the optimizer to see the code as a whole:

{% highlight bash %}
g++ -Ofast -march=native -flto main.cpp
{% endhighlight %}
> It is good to use it in conjunction with the first two flags mentioned.

---

## 06. Avoid exceptions and RTTI if they are not necessary
Use the `-fno-rtti` flag if the code does not use exceptions or RTTI (*Runtime Type Information*), disable them to gain performance:

{% highlight cpp %}
g++ -Ofast -march=native -fno-exceptions -fno-rtti main.cpp
{% endhighlight %}

RTTI (*Run-time Type Information*) is a technique that stores information about the data type of an object during the execution of a program. RTTI is available in some programming languages, such as *Delphi* and [C++](https://terminalroot.com/tags#cpp).

---

## 07. Use execution profiles with Profile-Guided Optimization (PGO)
If you can run the program before final compilation (AND DO IT!!!), use PGO with the `-fprofile-generate` flag to optimize based on real execution data:
> Don't confuse it with the so-called: *borrow checker*!

Compile with instrumentation:
{% highlight bash %}
g++ -Ofast -march=native -fprofile-generate main.cpp
{% endhighlight %}
> It is good to use it together with the first two flags mentioned.

Run the program normally to generate profile data, and then recompile using the generated profiles:
{% highlight bash %}
g++ -Ofast -march=native -fprofile-use main.cpp
{% endhighlight %}

*Profile-guided optimization* (**PGO**), also known as <u>profile-directed feedback</u> (PDF) or <u>feedback-directed optimization</u> (FDO), is a compiler optimization technique that uses prior analysis of software artifacts or behaviors ("profiling") to improve the expected runtime performance of the program.

---

## 08. Improve the "tuning"
In addition to `-march=native`, you can use `-mtune` to tune the code generation for better performance without losing compatibility:

{% highlight bash %}
g++ -Ofast -march=native -mtune=native main.cpp
{% endhighlight %}
> It is good to use it in conjunction with the first two flas mentioned.

If you need to run on multiple architectures, use something more generic, like `-mtune=generic`.

---

If you want to use all the flags we mentioned together, feel free:

{% highlight bash %}
g++ -Ofast -march=native -flto -funroll-loops -fprefetch-loop-arrays \
-fno-exceptions -fno-rtti -fopenmp main.cpp
{% endhighlight %}

For more information, see the links below:

+ <https://en.wikipedia.org/wiki/OpenMP>
+ <https://en.wikipedia.org/wiki/Run-time_type_information>
+ <https://en.wikipedia.org/wiki/Profile-guided_optimization>
