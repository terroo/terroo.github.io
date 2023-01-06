---
layout: post
title: "How to Install Binary Clang on Any GNU/Linux Distro"
date: 2023-01-06 13:02:04
image: '/assets/img/llvm/clang.jpg'
description: 'For clang, clang++ and several others including LLVM.'
tags:
- llvm
- clang
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Clang](https://terminalroot.com/tags#clang) is a front-end compiler for the languages [C](https://terminalroot.com/tags#linguagemc), [C++ ](https://terminalroot.com/tags#cpp), [Objective-C](https://pt.wikipedia.org/wiki/Objective-C) and [Objective-C++](https:// en.wikipedia.org/wiki/Objective-C) that uses [LLVM](https://terminalroot.com/tags#llvm) as a backend .

It aims to be another alternative to [GCC](https://terminalroot.com/tags#gcc), the [GNU](https://terminalroot.com/tags#gnu) set of compilers .

---

# Installation
Download the latest version [here](https://github.com/llvm/llvm-project/releases), the package name should be: `clang+llvm-<VERSION>-x86_64-linux-gnu-ubuntu- 18.04.tar.xz` (despite having the name `ubuntu` and an old version, it works for any distro), according to the publication date of this article, the most recent version is `15.0.6`, example:
> The package has several binaries, including `clang` and `clang++`

{% highlight bash %}
wget https://github.com/llvm/llvm-project/releases/download/llvmorg-15.0.6/clang+llvm-15.0.6-x86_64-linux-gnu-ubuntu-18.04.tar.xz
{% endhighlight %}

Extract:
{% highlight bash %}
tar xJf clang+llvm-15.0.6-x86_64-linux-gnu-ubuntu-18.04.tar.xz
{% endhighlight %}

Move to `/opt` renaming to directory with shorter name, example: `clang`
{% highlight bash %}
sudo mv clang+llvm-15.0.6-x86_64-linux-gnu-ubuntu-18.04/ /opt/clang
{% endhighlight %}

Export to your `$PATH`
{% highlight bash %}
echo 'export PATH="${PATH}:/opt/clang/bin"' | sudo tee -a /etc/profile
source /etc/profile
{% endhighlight %}

Test:

> `vim main.cpp`

{% highlight cpp %}
#include <iostream>

int main( int argc , char **argv ){
   std::cout << "Hello, World!\n";
   return 0;
}
{% endhighlight %}

Compile:
{% highlight bash %}
clang++ main.cpp
{% endhighlight %}

Enjoy and count this new installation to your [GNU Glibc](https://www.gnu.org/software/libc/) by doing the following:

+ **01.** Create a file named `libs.conf` and enter the `lib` path to it:
> `vim libs.conf`

And paste the path below into that file:
{% highlight bash %}
/opt/clang/lib
{% endhighlight %}

+ **02.** Save and move to the *new libs* directory:
{% highlight bash %}
sudo mv libs.conf /etc/ld.so.conf.d/
{% endhighlight %}

+ **03.** Read everything:
{% highlight bash %}
sudo ldconfig
{% endhighlight %}

And be happy! 😃
> Mainly you who use [Gentoo](https://terminalroot.com/tags#gentoo) and **NO** will need to compile **Clang** every time there is a new version!!! It takes time pakas! 😛
