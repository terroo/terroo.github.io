---
layout: post
title: "Create Logs with SpdLog C++"
date: 2023-09-11 11:23:38
image: '/assets/img/cpp/spdlog.jpg'
description: 'A fast and useful C++ library for logging your software!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you want to make your software logs LIKE A PRO, then **SpdLog** is the best option!

It is a fast and complete [C++](https://terminalroot.com/tags#cpp) library for creating logs.

---

# Installation
It is already available in the repository of most operating systems, so to install it simply use the package manager corresponding to your case:
+ vcpkg: `vcpkg install spdlog`
+ conan: `spdlog/[>=1.4.1]`
+ Homebrew: `brew install spdlog`
+ MacPorts: `sudo port install spdlog`
+ Debian: `sudo apt install libspdlog-dev`
+ FreeBSD: `pkg install spdlog`
+ Fedora: `dnf install spdlog`
+ Gentoo: `emerge dev-libs/spdlog`
+ Arch Linux: `sudo pacman -S spdlog`
+ openSUSE: `sudo zypper in spdlog-devel`
+ conda: `conda install -c conda-forge spdlog`
+ build2: depends: `spdlog ^1.8.2`

But, if you want to compile and install manually, run the commands below:
> Remembering that you need to have [libfmt](https://github.com/fmtlib/fmt) installed, as SpdLog uses it like addiction!

{% highlight bash %}
git clone https://github.com/gabime/spdlog
cd spdlog
cmake -B build .
cd build && make -j
sudo make install
cd ../..
rm -rf spdlog
{%endhighlight%}

---

# Using
Its use can be applied in different situations, the most basic way is the example below:
> `main.cpp`

{% highlight cpp %}
#include "spdlog/spdlog.h"

int main(){
  spdlog::info("Welcome to spdlog!");
  spdlog::error("Some error message with arg: {}", 1);
 
  spdlog::warn("Easy padding in numbers like {:08d}", 12);
  spdlog::critical("Support for int: {0:d}; hex: {0:x}; oct: {0:o}; bin: {0:b}", 42);
  spdlog::info("Support for floats {:03.2f}", 1.23456);
  spdlog::info("Positional args are {1} {0}..", "too", "supported");
  spdlog::info("{:<30}", "left aligned");
 
  spdlog::set_level(spdlog::level::debug); // Set global log level to debug
  spdlog::debug("This message should be displayed..");
 
  // change log pattern
  spdlog::set_pattern("[%H:%M:%S %z] [%n] [%^---%L---%$] [thread %t] %v");
 
  // Compile time log levels
  // define SPDLOG_ACTIVE_LEVEL to desired level
  SPDLOG_TRACE("Some trace message with param {}", 42);
  SPDLOG_DEBUG("Some debug message");
}

{%endhighlight%}

To compile run without additional flags:
{% highlight cpp %}
g++ main.cpp
./a.out
{%endhighlight%}

For more information, visit the [repository](https://github.com/gabime/spdlog).
