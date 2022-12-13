---
layout: post
title: "Codon, a Python Compiler written with C++ and LLVM"
date: 2022-12-13 10:00:49
image: '/assets/img/python/codon.jpg'
description: 'High performance and no overhead! In a test I did, the performance gain was greater than 600%.'
tags:
- python
- cpp
- llvm
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Codon** is a high-performance [Python](https://terminalroot.com/tags#python) compiler that compiles Python code to native machine code without any runtime overhead.

The compiler was written with [C++](https://terminalroot.com/tags#cpp) and uses [LLVM](https://terminalroot.com/tags#llvm) as the final assembly code optimizer. Unlike Python, Codon supports native multithreading, which can lead to even greater speedups.

---

# Installation
You can compile Codon on your own machine, however there are precompiled binaries for [Linux](https://terminalroot.com/tags#linux) and [macOS](https://terminalroot.com /tags#macos).

In the case of Linux just run this command below:
> You must have [cURL](https://terminalroot.com/using-curl-with-cpp/) installed.

{% highlight bash %}
/bin/bash -c "$(curl -fsSL https://exaloop.io/install.sh)"
{% endhighlight %}

At the end of the installation it will ask you to confirm the addition of the binary to your `$PATH` variable, press `y` for yes. If it doesn't work, even opening it in a new terminal, as he advises, run the following commands:
{% highlight bash %}
echo 'export PATH=${HOME}/.codon/bin:${PATH}' >> ~/.bashrc
exec $SHELL
{% endhighlight %}

To test run:
{% highlight bash %}
codon --version
{% endhighlight %}

---

# Usage
Suppose you have this code [Python](https://terminalroot.com/tags#python) which is a *Fibonacci* function, you can interpret the code with Codon itself:
{% highlight python %}
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
fib(1000)
{% endhighlight %}

To run without compiling:
{% highlight bash %}
codon run fib.py
{% endhighlight %}

However, the performance will not be very good. The correct thing is to compile this code to a binary and then run the binary, example:
{% highlight bash %}
codon build -release -exe fib.py
./fib
{% endhighlight %}

You can still compile with [LLVM] optimization(https://terminalroot.com/tags#llvm)
{% highlight bash %}
codon build -release -llvm fib.py
./fib
{% endhighlight %}

---

# Analyzing the performance
When we used a `for loop` with 1 million cycles in Python, as we did [in this video](https://www.youtube.com/watch?v=spLIBqiv2Og), Codon was about 600% faster than native interpreter (version `3.10.9`).
> Test file/code can be obtained [here](https://github.com/terroo/langs-test-loop/blob/main/round1/main.py).

### Result using `/usr/bin/python`
{% highlight bash %}
time python main.py
1000000Ok
real   0m6,264s
user   0m3,530s
sys    0m2,415s
{% endhighlight %}

That is, actual execution: **more than 6 seconds**. 😞 

### Result using `codon`
{% highlight bash %}
codon build -release -exe main.py
time ./main
1000000Ok
real   0m0.795s
user   0m0.254s
sys    0m0,063s
{% endhighlight %}

Actual execution: **in less than 1 second!!!** 😲

---

# Useful links
+ [Codon official repository](https://github.com/exaloop/codon)
+ [Codon Documentation](https://docs.exaloop.io/codon/)
+ [To build/compile Codon from scratch](https://docs.exaloop.io/codon/advanced/build)

