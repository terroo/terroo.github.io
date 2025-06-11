---
layout: post
title: "How to install Beef Language on GNU/Linux"
date: 2025-06-11 18:33:59
image: '/assets/img/gamedev/beef.jpg'
description: "🐮 A programming language for game developers and general productivity."
tags:
- gamedev
- programming
- csharp
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

**Beef** is an open-source, compiled, high-performance language specifically designed for real-time applications like games, combining performance with productivity.  

• Syntax inspired by [C#](https://terminalroot.com/tags#csharp), with manual memory management from [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/tags#cpp), and modern ergonomics inspired by [Swift](https://terminalroot.com/tags#swift) and [Go](https://terminalroot.com/tags#go).  

+ Well-designed project with its own IDE (Windows);  
+ CLI compiler (Linux/macOS);  
+ Debugger;  
+ Code assistants;  
+ and Hot-compiling.  

Beef is ideal for those who need rapid development and fine-grained resource control, especially:  
+ Game and Game Engine Developers (console, desktop, WASM).  
+ Projects requiring efficient debugging, hot-reload, and productivity-focused ergonomics.  

Precompiled binaries are available for [Windows](https://terminalroot.com/tags#windows)—just download and run the `.exe`.  

But on [macOS](https://terminalroot.com/tags#macos) and [GNU/Linux](https://terminalroot.com/tags#gnulinux) distros, you’ll need to compile from source.  

Below, we’ll cover the steps to compile and install on [GNU](https://terminalroot.com/tags#gnu)/Linux distros.  


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

## [Dependencies](https://www.beeflang.org/docs/getting-start/building/#building-on-linux-and-macos)  
First, you’ll need the following tools installed on your system:  

+ [CMake](https://terminalroot.com/tags#cmake) version `3.15` or newer  
+ [LLVM](https://terminalroot.com/tags#llvm) version `18` or newer  
+ [Git](https://terminalroot.com/tags#git)  
+ [LibFFI](https://github.com/libffi/libffi)  
+ [LibEdit](https://github.com/cdesjardins/libedit)  
+ [ZLIB](https://terminalroot.com/how-to-use-the-zlib-library-with-cpp/)  
+ [zstd](https://github.com/facebook/zstd)  
+ [LibCurl++](https://terminalroot.com/how-to-consume-apis-with-curl-and-cpp-in-the-terminal/)  
+ and [LibXML2](https://github.com/GNOME/libxml2)  

Example of dependency installation using `APT`:  

{% highlight bash %}  
sudo apt install clang-18 llvm-18 build-essential cmake git \  
  libffi-dev libedit-dev zlib1g-dev zstd libcurlpp-dev libxml2-dev  
{% endhighlight %} 

After that, just clone and [build](https://www.beeflang.org/docs/getting-start/building/#build-steps-1):  

{% highlight bash %}  
git clone https://github.com/beefytech/Beef  
cd Beef  
./bin/build.sh  
{% endhighlight %}  

Before tests, you’ll see:  
{% highlight bash %}  
[******************************]  
TIMING: Beef compiling: 37.2s  
Frontend time: 23.48s  
Comptime execution time: 3.67s  
Linking BeefBuild_bootd...  
SUCCESS  
Building BeefBuild_d  
[******************************]  
Beef compilation time: 41.44s  
Frontend time: 21.56s  
Comptime execution time: 3.49s  
Executing Command: ReadFile("$(WorkspaceDir)/../IDE/dist/IDEHelper_libs_d.txt", "IDEHelperLibs")  
Testing IDEHelper/Tests in BeefBuild_d  
{% endhighlight %}  

After compilation finishes, test a [Hello, World!](https://www.beeflang.org/docs/getting-start/#creating-an-ide-based-hello-world) via command line:  

+ Navigate to the binary folder:  
{% highlight bash %}  
cd IDE/dist  
{% endhighlight %}  

+ Create a [new project](https://www.beeflang.org/docs/ide/commandline/#beef-ide-command-line-arguments):  
{% highlight bash %}  
./BeefBuild -new  
{% endhighlight %}  
> Output: `Created new workspace in '/home/$USER/Beef/IDE/dist'`  

This will generate:  

+ `BeefProj.toml`, with:  
{% highlight toml %}  
FileVersion = 1  

[Project]  
Name = "dist"  
StartupObject = "dist.Program"  
{% endhighlight %}  

+ `BeefSpace.toml`, with:  
{% highlight toml %}  
FileVersion = 1  
Projects = {dist = {Path = "."}}  

[Workspace]  
StartupProject = "dist"  
{% endhighlight %}  

+ `src/` (empty folder)  

To create a file in `src/`, run:  
{% highlight bash %}  
./BeefBuild -generate  
{% endhighlight %}  

This will generate the `build/` folder and `Program.bf` inside `src/`. However, it won’t contain a **Hello, World!** by default.  

Edit the file: `vim src/Program.bf` and insert `Console.WriteLine("Hello, world!");` inside the `Main()` function, like this:  
{% highlight csharp %}  
using System;  

namespace dist;  

class Program  
{  
  public static int Main(String[] args)  
  {  
    Console.WriteLine("Hello, world!");  
    return 0;  
  }  
}  
{% endhighlight %}  

Now run the file with `-run`:  
{% highlight bash %}  
./BeefBuild -run  
{% endhighlight %}  
> Output: `Hello, world!`.  


<!-- RECTANGLE LARGE -->
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

---  

## Installation  
Clean up generated files:  

{% highlight bash %}  
rm -rf src/ BeefSpace.toml build/ BeefProj.toml ../../.git ../../.gitignore  
{% endhighlight %}  

> Actually, you only need these directories:  
+ `📁 BeefLibs/`  
+ `📁 IDE/`  
+ `📁 IDEHelper/`  
+ `📁 jbuild/`  
+ and `📁 jbuild_d/`  

But all of them total `1.4GB` (or `1.6GB` with extras). If you prefer, just remove the test files (*Hello, World!*) and Git files.  

Move to `/opt/`:  
{% highlight bash %}  
cd ..  
sudo mv Beef/ /opt/  
{% endhighlight %}  

Create symbolic links for the *binary* and *libs*:  
{% highlight bash %}  
sudo ln -sf /opt/Beef/IDE/dist/BeefBuild /usr/local/bin/beef  
sudo ln -sf /opt/Beef/jbuild/Release/bin/libhunspell.so /usr/local/lib/libhunspell.so  
sudo ln -sf /opt/Beef/jbuild/Release/bin/libBeefRT.a /usr/local/lib/libBeefRT.a  
sudo ln -sf /opt/Beef/jbuild/Release/bin/libBeefRT.a /opt/Beef/IDE/dist/libBeefRT.a  
sudo ldconfig  
{% endhighlight %}  

Test:  
{% highlight bash %}  
beef -version  
{% endhighlight %}  
> `BeefBuild 0.43.6`  

Test a new project:  
{% highlight bash %}  
mkdir MyGameBeef  
cd MyGameBeef/  
beef -new  
beef -generate  
{% endhighlight %}  

Edit `vim src/Program.bf`:  
> For CSharp-like syntax highlighting in Vim: `:set filetype=cs`  

{% highlight csharp %}  
using System;  

namespace MyGameBeef {  
  class Program {  
    static void Main() {  
      Console.WriteLine("My first game with Beef!");  
    }  
  }  
}  
{% endhighlight %}  

Run:  
{% highlight bash %}  
beef -run  
{% endhighlight %}  

I [tested the performance](https://terminalroot.com/tested-the-performance-of-10-programming-languages/) of a million-loop [for loop](https://www.beeflang.org/docs/language-guide/statements/#for) with this code:  
{% highlight csharp %}  
for(int i = 0; i <= 1000000; ++i){  
  Console.Write(scope $"{i}Ok\r");  
}  
{% endhighlight %}  

Result:  
{% highlight bash %}  
1000000Ok  
real	0m6,767s  
user	0m2,717s  
sys	0m3,292s  
{% endhighlight %}  

---  

For more info, visit the official site: <https://www.beeflang.org/> and the repo: <https://github.com/beefytech/Beef>.  

