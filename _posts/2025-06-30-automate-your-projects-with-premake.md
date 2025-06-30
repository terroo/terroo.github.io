---
layout: post
title: "Automate your projects with Premake"
date: 2025-06-30 15:01:09
image: '/assets/img/compilers/premake.jpg'
description: "🚀 Easily generate files for the make command, Visual Studio, Xcode, and more."
tags:
- compilers
- make
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

We’ve previously talked about a similar tool called [Xmake](https://terminalroot.com/compile-for-c-cpp-with-lua-based-xmake/). Premake is similar but automates project files for IDEs like Visual Studio and Xcode.  

**Premake** is an open-source [build automation](https://terminalroot.com/tags#opensource) tool that generates project files (such as [Makefiles](https://terminalroot.com/tags#make), [Visual Studio](https://terminalroot.com/how-to-compile-with-msvc-via-command-line/), Xcode, etc.) from scripts written in **Lua**.  

Premake automates project setup for multiple platforms and [IDEs](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/). It **does not compile** directly but **generates** the appropriate build files for tools like:  

* `make` (GNU)  
* `Visual Studio`  
* `Xcode`  
* `GNU Make`  
* `Code::Blocks`  
* `CMake` (indirectly, with wrappers)  

Most useful for cross-platform [C](https://terminalroot.com/tags#clanguage)/[C++](https://terminalroot.com/tags#cpp) projects.  

Different versions require different configurations in `premakeNUM.lua` files—meaning `premake4.lua` is **not** compatible with `premake5.lua`.  


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

## Installation  
On [Windows](https://terminalroot.com/tags#windows), version 5 is available via [WinGet](https://winget.run/pkg/Premake/Premake). Just run:  

{% highlight powershell %}
winget install --id=Premake.Premake.5.Beta -e  
{% endhighlight %}

However, not all GNU/Linux distros have the latest version in their repositories. For example, Ubuntu only offers version 4:  

{% highlight bash %}
sudo apt install premake4  
{% endhighlight %}

Alternatively, you can clone, compile, and install from source:  

{% highlight sh %}
sudo apt install git build-essential  
git clone --depth=1 https://github.com/premake/premake-core.git  
cd premake-core  
make -f Bootstrap.mak linux  
sudo cp bin/release/premake5 /usr/local/bin/  
premake5 --version  
{% endhighlight %}

---  

## Usage  
The process may vary depending on the Premake version. Example for Premake4:  

{% highlight bash %}
mkdir -p MyProject/src  
cd MyProject  
vim src/main.cpp # Hello, World!  
{% endhighlight %}

Create a Premake4 file (e.g., `vim premake4.lua`):  

{% highlight lua %}
solution "MyProject"  
   configurations { "Debug", "Release" }  

project "MyApp"  
   language "C++"  
   kind "ConsoleApp"  
   location "build"  
   files { "src/**.cpp", "include/**.hpp" }  
   includedirs { "include" }  

configuration "Debug"  
   targetdir "bin/Debug"  

configuration "Release"  
   targetdir "bin/Release"  
{% endhighlight %}

Generate the files with:  
{% highlight bash %}
premake4 gmake # Unix  
{% endhighlight %}

Then compile and run:  
{% highlight bash %}
make  
./bin/Debug/MyApp  
{% endhighlight %}

### Version 5  
Create a file named `premake5.lua` with the following content:  

Basic example:  
{% highlight lua %}
workspace "MyProject"  
   configurations { "Debug", "Release" }  
   language "C++"  
   location "build"  

project "MyApp"  
   kind "ConsoleApp"  
   files { "src/**.cpp", "include/**.h" }  
   includedirs { "include" }  
   targetdir "bin/%{cfg.buildcfg}"  
{% endhighlight %}

Generate project files for an IDE:  
{% highlight sh %}
premake5 vs2022       # Visual Studio 2022  
premake5 gmake2       # Makefiles for Linux  
premake5 xcode4       # Xcode  
{% endhighlight %}

Compile:  
* **Visual Studio**: Open the `.sln` file and build.  
* **Linux**:  
{% highlight sh %}
premake5 gmake2  
cd build  
make config=release  
{% endhighlight %}

---  

For more details, check these links and the help menu:  
* Official site: [https://premake.github.io/](https://premake.github.io/)  
* GitHub: [https://github.com/premake/premake-core](https://github.com/premake/premake-core)  
* List of actions: `premake5 --help`  

