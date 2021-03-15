---
layout: post
title: "Conan - A package manager for C/C++"
date: 2021-03-15 18:29:26
image: '/assets/img/cpp/conan.jpg'
description: 'Easily install dependencies for your C and C++ projects.'
featured-img: ../cpp/conan.jpg
tags:
- cpp
- c
---

![Conan - A package manager for C/C++](/assets/img/cpp/conan.jpg)

# Introduction
[Conan](https://conan.io/) is a software package manager for [C](https://en.terminalroot.com.br/why-is-the-c-programming-language-still-on-the-rise/) and [C++](https://en.terminalroot.com.br/learn-to-create-a-graphical-application-with-c-and-gtkmm/) developers.

It works on all operating systems, including [Windows](https://en.terminalroot.com.br/top-5-best-git-clients-for-linux-mac-and-windows/), [Linux](https://en.terminalroot.com.br/top-10-best-code-editors-for-linux/), [macOS](https://en.terminalroot.com.br/how-to-install-macos-on-virtualbox-on-linux/), FreeBSD, Solaris and others, and can be targeted to any platform, including desktop, server and cross-construction for embedded and bare metal devices.

It integrates with other tools such as [Docker](https://en.terminalroot.com.br/definitive-docker-tutorial-for-beginners-ubuntu/), MinGW, WSL and with all building systems, such as [CMake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/), MSBuild, [Makefiles](https://en.terminalroot.com.br/how-to-create-a-makefile/), [Meson](https://en.terminalroot.com.br/how-to-compile-programs-with-ninja-and-meson-build/), SCons. It can even integrate with any proprietary building system.

Conan is completely free, open source and fully decentralized. The central [ConanCenter](https://conan.io/center/) repository contains hundreds of popular open source library packages, with many precompiled binaries.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation
There are several ways to install **Conan**. Among the possibilities you can use Portage in [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/) or Funtoo, as follows:
{% highlight bash %}
emerge dev-util/conan
{% endhighlight %}

On [Arch Linux](https://en.terminalroot.com.br/customize-lightdm-on-arch-linux/) you can use [Yay](https://en.terminalroot.com.br/how-to-install-aur-packages-via-yay-on-arch-linux/):
{% highlight bash %}
# no sudo
yay -S conan
{% endhighlight %}

You can also download the `.deb`, `.rpm`, tarball packages directly from here and install:

Or even install via [pip](https://pypi.org/project/pip/), according to them, more recommended:
> Before you will need Pip installed, example for systems that use APT:
{% highlight bash %}
sudo apt install python3-pip
{% endhighlight %}

And just run like this:
{% highlight bash %}
pip3 install conan
{% endhighlight %}
> If you have any problems with the installation, try only for your user: `pip3 install conan --user`


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Use
Let's start with a basic example, let's create an MD5 hash application that uses one of the most popular libraries for C++: [Poco](https://pocoproject.org/). We will use CMake as a build system in this case, but keep in mind that Conan works with any build system and is not limited to using only CMake.

### 1. Create the following source file within a directory.
{% highlight bash %}
mkdir mymd5 && cd mymd5
vim md5.cpp
{% endhighlight %}

This will be the source file of our application:
{% highlight cpp %}
#include "Poco/MD5Engine.h"
#include "Poco/DigestStream.h"

#include <iostream>

int main(int argc, char ** argv){
   Poco::MD5Engine md5;
   Poco::DigestOutputStream ds(md5);
   std::string str = {};
   if( argc > 1 ){
      str = argv[1];
   }else{
     std::cerr << "Enter the word to generate the HASH MD5." << '\n';
     return 1;
   }
   ds << str;
   ds.close();
   std::cout << Poco::DigestEngine::digestToHex(md5.digest()) << '\n';
   return 0;
}
{% endhighlight %}

### 2. Now we are going to install Poco
We can do the search directly through the browser at the link: <https://conan.io/center>, or use conan via the command line:
{% highlight bash %}
conan search poco --remote=conan-center
{% endhighlight %}

The `--remote=conan-center` option prompts you to search online, it can be ignored unless you have the `remotes.json` file properly configured in the directory: `$HOME/.conan/remotes.json`.

The output will look like this:
{% highlight bash %}
user@host ~/mymd5
Existing package recipes:

poco/1.8.1
poco/1.9.3
poco/1.9.4
poco/1.10.0
poco/1.10.1
user@host ~/mymd5
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

Suppose you used the command `conan inspect poco/1.9.4` (Use the help for more information: `conan --help`) to inspect this version and it is just the version you want, so just install it. To do this, create a file named: `conanfile.txt` within your project (in this case, the project: *mymd5*) with the following information:
{% highlight toml %}
[requires]
poco/1.9.4

[generators]
cmake
{% endhighlight %}
> Make sure you have [CMake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/) installed. This will generate the file `conanbuildinfo.cmake`.

### 3. Before installing, let's prepare our profile for Conan
To do this, run the commands:
{% highlight bash %}
conan profile update settings.compiler.libcxx=libstdc++11 default
{% endhighlight %}
> If you want Conan to automatically detect run: `conan profile new default --detect`, if the ABI of your compiler is not compatible you will receive a "beautiful warning" and you will need to run the command indicated just above anyway.

This command will configure the file in the path: `$HOME/.conan/profiles/default`, something like this:
{% highlight toml %}
[settings]
os=Linux
os_build=Linux
arch=x86_64
arch_build=x86_64
compiler=gcc
compiler.version=9
compiler.libcxx=libstdc++11
build_type=Release
[options]
[build_requires]
[env]
{% endhighlight %}

### 4. Now we are going to install the dependencies with Conan
To do this, simply run the commands:
{% highlight bash %}
mkdir build && cd build
conan install ..
{% endhighlight %}

The output will look like this:

![Conan output](/assets/img/cpp/conan-install.jpg)

### 5. Create the build file
Now let's create the `CMakeLists.txt` file based on the file: `conanbuildinfo.cmake`
> `vim CMakeLists.txt` - Outside the `build` directory, at the root of your project.
{% highlight cmake %}
cmake_minimum_required(VERSION 2.8.12)
project(MD5Encrypter)

add_definitions("-std=c++11")

include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
conan_basic_setup()

add_executable(md5 md5.cpp)
target_link_libraries(md5 ${CONAN_LIBS})
{% endhighlight %}

### 6. All set, let's create this!
For Linux or macOS run this command:
{% highlight bash %}
cmake .. -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release
make
{% endhighlight %}

There, the binary `md5` was generated inside the `bin/md5` directory and we can already test it
{% highlight bash %}
$ cd bin/
$ ./md5
Enter the word to generate the HASH MD5.
$ ./md5 "Terminal Root"
a69f0efcca0116a76921947f135ccdac
{% endhighlight %}

Simple, right?!

For more information consult [the official Conan repository](https://github.com/conan-io/conan).

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
    
