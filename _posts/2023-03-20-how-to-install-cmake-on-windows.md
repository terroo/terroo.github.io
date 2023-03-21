---
layout: post
title: "How to install CMake on Windows"
date: 2023-03-20 22:58:50
image: '/assets/img/cmake/cmake-windows.jpg'
description: 'CMake is a SCons for automating compilation tasks.'
tags:
- cmake
- windows
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[CMake](https://terminalroot.com/tags#cmake) is a system to automate compilation tasks of code files created in [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/tags#cpp).

On [Unix](https://terminalroot.com/tags#unix) type systems we can say that it is a "*[Makefile](https://terminalroot.com/tags#make)*" generator. He is classified as a [SCons](https://en.wikipedia.org/wiki/SCons).

We already made a brief introduction [here on the blog](https://terminalroot.com/how-to-compile-your-programs-with-cmake/) about CMake, but it is also possible to generate Makefiles in Windows, although CMake also generates files for [Visual Studio](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/).

Today we will see how to install CMake on [Windows](https://terminalroot.com/tags#windows).

---

# Dependencies
As in this example we will use [GCC](https://terminalroot.com/tags#gcc), it is important that you have it installed on your Windows via [MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/), see [here how to do it](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/).

Now let's go step by step!

---

# Installation

## 01. Download CMake by clicking the button below:
<a href="https://github.com/Kitware/CMake/releases/download/v3.26.0-rc6/cmake-3.26.0-rc6-windows-x86_64.msi" class="btn btn-danger btn- lg">Download CMake for Windows 64-bit</a>

After downloading, double-click on the downloaded file: `cmake-3.26.0-rc6-windows-x86_64.msi` and give administrator permissions to start the installation setup.

---

## 02. Setup presentation
> Just click on `Next`.

[![01](/assets/img/cmake/win/01-cmake.jpg)](/assets/img/cmake/win/01-cmake.jpg)

---

## 03. Accept the license terms
> And then click `Next`.

[![02](/assets/img/cmake/win/02-cmake.jpg)](/assets/img/cmake/win/02-cmake.jpg)

---

## 04. Add CMake to your `PATH`
Check the `Add CMake to the system PATH for all users` option for the command to be available to all system users. And then click on `Next`.

[![03](/assets/img/cmake/win/03-cmake.jpg)](/assets/img/cmake/win/03-cmake.jpg)

---

## 05. Select installation path
> Hint: Keep what already appears and click `Next`.

[![04](/assets/img/cmake/win/04-cmake.jpg)](/assets/img/cmake/win/04-cmake.jpg)

---

## 06. Start the installation
Click on `Install` and wait for the installation to finish.

[![05](/assets/img/cmake/win/05-cmake.jpg)](/assets/img/cmake/win/05-cmake.jpg)

> Installing:
[![06](/assets/img/cmake/win/06-cmake.jpg)](/assets/img/cmake/win/06-cmake.jpg)

> Once finished, click on `Finish`:
[![07](/assets/img/cmake/win/07-cmake.jpg)](/assets/img/cmake/win/07-cmake.jpg)

---

# Testing CMake
Open [PowerShell](https://terminalroot.com/how-to-install-powershell-on-ubuntu-and-getting-started/) or `CMD` and type the command:
{% highlight bash %}
cmake --version
{% endhighlight %}

If the output is similar to the image below, everything is right and installed perfectly:

[![08](/assets/img/cmake/win/08-cmake.jpg)](/assets/img/cmake/win/08-cmake.jpg)

---

## Compiling with CMake

+ Create a folder, for example `MyProject`, enter it (by CMD or PowerShell, `cd MyProject`) and inside it do:

+ Create a file named `CMakeLists.txt` with your [Preferred Code Editor or IDE](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/) and fill it with the code below:

{% highlight cmake %}
cmake_minimum_required(VERSION 3.10)
project(HelloWorld)
add_executable(hello main.cpp)
{% endhighlight %}
[![09](/assets/img/cmake/win/09-cmake.jpg)](/assets/img/cmake/win/09-cmake.jpg)

+ Also create a `main.cpp` file with a basic code, example:

{% highlight cpp %}
#include <iostream>

auto main(int argc, char** argv) -> int {
   std::printf("CMake is working on Windows!\n");
   return EXIT_SUCCESS;
}
{% endhighlight %}
[![12](/assets/img/cmake/win/12-cmake.jpg)](/assets/img/cmake/win/12-cmake.jpg)

At the end your `MyProject` folder will have 2 files: `CMakeLists.txt` and `main.cpp` as shown in the image below:

[![10](/assets/img/cmake/win/10-cmake.jpg)](/assets/img/cmake/win/10-cmake.jpg)

+ Now run the command:
{% highlight bash %}
cmake -G "Unix Makefiles" -B build
{% endhighlight %}
> It will create a folder called `build` inside your project. If you don't say `-G "Unix Makefiles"` it will prepare files for Visual Studio, in which case we want a Unix-like Makefile.

The output will be similar to the image below:

[![11](/assets/img/cmake/win/11-cmake.jpg)](/assets/img/cmake/win/11-cmake.jpg)

+ Once finished, enter the **build** folder (`cd build`) and run the `make` command (if this command does not exist, it is because you did not rename the MinGW file to that name as mentioned in the article about MinGW cited above, then most likely the command will be `mingw32-make`). And then run the final binary: `hello`:

[![13](/assets/img/cmake/win/13-cmake.jpg)](/assets/img/cmake/win/13-cmake.jpg)

That's it, now you can compile your [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/tags#cpp) code with CMake!

---

# Useful links
+ <https://cmake.org/>
+ <https://cmake.org/download/>
+ <https://github.com/Kitware/CMake/>




