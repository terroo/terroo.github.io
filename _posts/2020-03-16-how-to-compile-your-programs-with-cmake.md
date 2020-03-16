---
layout: post
title: "How to Compile your programs with CMake"
date: 2020-03-16 09:28:36
image: '/assets/img/'
description:
featured-img: ../dir/img
tags:
---

![How to Compile your programs with CMake](/assets/img/cpp/cmake.png)

We have already shown here a [Definitive Tutorial for GNU Autotools for Beginners](https://en.terminalroot.com.br/gnu-autotools-ultimate-tutorial-for-beginners/) as well as another tutorial also on [How to Create a Makefile](https://en.terminalroot.com.br/how-to-create-a-makefile/).

But CMake has been widely adopted by the community/companies due to the fact that it is multiplatform and because it is very easy to use.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Introduction
[CMake](https://cmake.org/) is a multiplatform system for performing automated generation. It is comparable with the [Unix Make](https://en.terminalroot.com.br/how-to-create-a-makefile/) program in which the generation process is, in the end, controlled by the configuration files , in the case of CMake called **CMakeLists.txt** files.

Unlike Make, it does not directly generate the final software, but instead generates standard generation files (for example, Unix makefiles and Visual C++ projects/workspaces on Windows) which are used in common ways.

This allows developers familiar with a particular development environment (such as the various IDEs) to use it in standard mode. It is this use of the native generation environment that distinguishes CMake from other better known systems like [SCons](https://en.wikipedia.org/wiki/SCons).

The name "CMake" is an abbreviation for "cross platform make".

## Installation
To install CMake use your distribution's package manager, examples:
> Remembering that you also need to have a compiler installed, example: [gcc/g++](https://gcc.gnu.org/)

{% highlight bash %}
sudo apt install cmake # Debian, Ubuntu, Linux Mint,...
sudo dnf install cmake # Fedora
sudo pacman -S cmake # Arch Linux, Manjaro,...
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

On [Gentoo](https://www.gentoo.org/), [Funtoo](https://www.funtoo.org/) and the like, you don't need to install it, since CMake is already native to these systems.

## Basic example
Assuming you have the following file:
> Example of building a C++ code

{% highlight cpp %}
// main.cpp
#include <iostream>
int main(int argc, char** argv){
    std::cout << "Example for testing with CMake" << std::endl;
    return 0;
}
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

Of course you could compile with the [GCC, the GNU Compiler Collection](https://gcc.gnu.org/) by running the command: `g++ main.cpp -o myexample`.

However, to use CMake you first need to create a file named: ** CMakeLists.txt **: `vim CMakeLists.txt` (necessary to write in this way, respecting the lowercase and uppercase letters).

Within this file (for this basic example, which even works for larger projects) you will need to include 3 lines:
+ The first line will tell you the version of your CMake: `cmake_minimum_required(VERSION 3.10)`, check the version you have to inform it or even a lower version: `cmake --version`.
+ In the second line you must enter the name of your project, example: `project(MyExample)`
+ And in the third line enter the name of the final binary and the file: `add_executable(myexample main.cpp)`
> (if there is more than one file, example if it were directly from g++: `g++ main.cpp other.cpp -o binary`), in CMakeLists it would be:` add_executable (binary main.cpp other.cpp) `, as well as directly the compiler does not need to inform the libraries (**.h** e **.hh**), as they are already part of includes, unless it is not.

{% highlight cmake %}
// CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(MyExample)
add_executable (myexample main.cpp)
{% endhighlight %}

After that, just create a directory and the CMake files will remain and execute the command `cmake`:
> Create a separate directory to keep everything organized and then run cmake pointing to the directory immediately preceding "**..**"

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

{% highlight cpp %}
mkdir build && cd build
cmake ..
{% endhighlight %}

This generated several CMake verification files and also the Makefile, now just compile and test the final binary:
{% highlight cpp%}
make
./myexample
{% endhighlight%}

The output will be similar to the image below:

![CMake example](/assets/img/cpp/example-cmake.png)

## More information

There are more things you can do within CMakeLists.txt, such as: project version control, binaries, conditions and more, but in summary it comes down to that demonstrated here.

If you are interested in learning more, I recommend you to read CMake's own tutorial [clicking here](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)

## Useful links:
+ <https://cmake.org/>
+ <https://en.wikipedia.org/wiki/CMake>
