---
layout: post
title: "COMPILE for C/C++ with LUA-based XMAKE"
date: 2021-09-06 11:19:18
image: '/assets/img/cpp/xmake.jpg'
description: 'A Lua-based cross-platform build utility. Which also works for other programming languages like: Rust, Go and others.'
featured-img: ../cpp/xmake.jpg
tags:
- cpp
- clanguage
- cppdaily
---

![COMPILE for C/C++ with LUA-based XMAKE](/assets/img/cpp/xmake.jpg)

> A Lua-based cross-platform build utility. Which also works for other programming languages like: [Rust](https://en.terminalroot.com.br/redox-os-a-system-written-in-rust-installation-and-concepts/), Go and others.

---

# Introduction
**xmake** is a binary building tool for [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/) and [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) languages with configuration files created with the Lua programming language.

xmake is simple, fast, light and has several tools included that facilitate the installation of binaries and has been adopted very quickly by programmers.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

It has support for architectures: x86 64 and 32-bit, arm64, cross-toolchains and others. And also support for several operating systems, such as:
+ Windows (x86, x64)
+ macOS (i386, x86_64, arm64)
+ Linux (i386, x86_64, cross-toolchains ..)
+ BSD (i386, x86_64) *asterisk*
+ Android (x86, x86_64, armeabi, armeabi-v7a, arm64-v8a)
+ iOS (armv7, armv7s, arm64, i386, x86_64)
+ WatchOS (armv7k, i386)
+ MSYS (i386, x86_64)
+ MinGW (i386, x86_64, arm, arm64)
+ Cygwin (i386, x86_64)
+ Wasm (wasm32)
+ Cross (cross-toolchains ..)

It also supports the varied list of toolchains, such as:
+ Go Programming Language Compiler
+ Zig Programming Language Compiler
+ Rust Programming Language Compiler
+ nasm NASM Assembler
+ emcc A toolchain for compiling to asm.js and WebAssembly
+ icc Intel C/C++ Compiler

And among others!, plus many additional features!

In several tests performed it performed faster than **ninja** and **cmake** .

---

# Installation
It is very easy to install xmake and there are several ways. The simplest is accessing the xmake website: <https://xmake.io> and note that you can install without sudo permission with:
+ [cURL](https://en.terminalroot.com.br/using-curl-with-cpp/):
{% highlight bash %}
bash <(curl -fsSL https://xmake.io/shget.text)
{% endhighlight %}

+ [Wget](https://www.gnu.org/software/wget/):
{% highlight bash %}
bash <(wget https://xmake.io/shget.text -O -)
{% endhighlight %}

+ PowerShell:
{% highlight bash %}
Invoke-Expression (Invoke-Webrequest 'https://xmake.io/psget.text' -UseBasicParsing).Content
{% endhighlight %}


This way of installation is more interesting for you to inform in a *README.md* for the user to install quickly and easily to compile some project of yours that uses `xmake`.

But this way, despite working very well, limits the use of some xmake parameters, for example parameter: `install`.

So let's install via [Git](https://en.terminalroot.com.br/onefetch-generate-a-fetch-from-your-git-repository/) for that we'll need compile-time dependencies:
+ [git](https://en.terminalroot.com.br/how-to-clone-only-a-subdirectory-with-git-or-svn/)
+ [make](https://en.terminalroot.com.br/how-to-create-a-makefile/)
+ [gcc](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/) and [g++](https://en.terminalroot.com.br /5-quick-tips-for-cpp/)

Now let's clone the repository (in the upper right corner of the site there is a link):

{% highlight bash %}
git clone https://github.com/xmake-io/xmake
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


Enter the directory and install the submodule for [LuaJIT](https://luajit.org/):

{% highlight bash %}
cd ./xmake
git submodule update --init
{% endhighlight %}

After finished let's run:
{% highlight bash %}
make build
{% endhighlight %}

At the end we will install:

{% highlight bash %}
sudo make install
{% endhighlight %}

Now let's create the autocomplete for the `xmake` command:

{% highlight bash %}
./scripts/get.sh __local__ __install_only__
{% endhighlight %}

Now let's clean the files:
+ 1st. the last command in addition to creating an autocomplete in our home directory at: `~/.xmake/profile` also installs a binary in `~/.local/bin`, as we installed on the system we don't need it and if you have this path in your `$PATH` variable will cause some problems, so let's remove it:

{% highlight bash %}
rm ~/.local/bin/xmake
{% endhighlight %}

+ And let's remove the repository directory:
{% highlight bash %}
CD ..
rm -rf xcode/
{% endhighlight %}

To make sure the autocomplete runs too:

{% highlight bash %}
source ~/.xmake/profile
{% endhighlight %}

---

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

---

#1. Basic build from scratch
To get started, let's look at the most basic way to use `xmake`.

Let's create a directory of an example project, enter it and create the file: `main.cpp`:
{% highlight bash %}
mkdir my-project
nvim main.cpp
{% endhighlight %}

With the following content:
{% highlight cpp %}
#include <iostream>

int main(){
  std::cout << "Hello xmake!" << '\n';
  return 0;
}
{% endhighlight %}

Now let's create the Lua xmake configuration file: `nvim xmake.lua` and inside it we'll fill it like this:
{% highlight moon %}
target("hello-world")
    set_kind("binary")
    add_files("./main.cpp")
{% endhighlight %}

To compile:
{% highlight bash %}
xmake
{% endhighlight %}

Rotate:
> Parameters auto-complete
{% highlight bash %}
xmake run hello-world
{% endhighlight %}
> Or just: `xmake run`

If you want to install the binary just run the command:
{% highlight bash %}
sudo xmake install
{% endhighlight %}
> Also autocomplete.

The binary will be copied to the default directory: `/usr/local/bin`.

And then just run the binary:
{% highlight bash %}
hello world
{% endhighlight %}

To uninstall, just run:
{% highlight bash %}
sudo xmake uninstall
{% endhighlight %}

---

#2. Basic AUTOMATIC Build
If you find it laborious to create the project files by hand, there is also an option for you to hand over all that work to `xmake`. For that, let's remove this [my-project] that was just an example and let's recreate it dynamically

Exiting and removing:
{% highlight bash %}
CD ..
rm -rf my-project
{% endhighlight %}

And now let's create the project dynamically:
{% highlight bash %}
xmake create my-project
{% endhighlight %}
> If you do not enter the name, but have it inside your project's name directory, a subdirectory of the same name will be automatically created.

Now let's go into the directory and notice that everything is ready, if you want to open the files to see the content.

So let's build:
{% highlight bash %}
xmake
{% endhighlight %}

And now instead of installing, let's automatically generate a [Makefile](https://en.terminalroot.com.br/how-to-create-a-makefile/) for our project:
{% highlight bash %}
xmake project
{% endhighlight %}

We can also generate configuration files for other cross platform tools like ninja and cmake, for example by creating a `CMakeLists.txt`:
{% highlight bash %}
xmake project -k cmake
{% endhighlight %}


We can run `make clean` and then just make to build: `make` . If we run `xmake package` it will generate a package from our binary and from here we can also query the command history, for example, if we run `xmake show` it will display our project data and then we can query the command history rounds:
{% highlight bash %}
cat .xmake/linux/x86_64/cache/history
{% endhighlight %}

---

#3. Compiling multiple files
Just create `xmake.lua` and add the files:
{% highlight lua %}
target("multiple")
  set_kind("binary")
  add_files("main.cpp")
  add_files("project.cpp")
{% endhighlight %}
> Then just run: `xmake` and `xmake run`

---

# 4.1 Compiling for Ncurses
> `mkdir windows && cd windows`
Let's use the example of this link: <https://terminalroot.com.br/ncurses/#8-janelas> . The `xmake.lua` will look like this:
{% highlight lua %}
add_rules("mode.debug", "mode.release")
add_requires("ncurses")

target("window")
  add_packages("ncurses", {links = "ncurses"})
  add_ldflags("-ltinfo", {force = true})
  set_kind("binary")
  add_files("main.cpp")
{% endhighlight %}
> Here: `./windows/`: `xmake && xmake run`

# 4.2 Compiling for Gtkmm
According to the Gtkmm series we made, I updated the repository and the README, that is, just go there, read the README and see the file: `xmake.lua`:
> <https://github.com/terroo/pass-firefox>

The [xmake.lua](https://github.com/terroo/pass-firefox/blob/main/xmake.lua) file from this repository corresponds to the `Makefile`(which we created in the Gtkmm series videos):

If you need to install files like
+ `.md`
+ `.desktop`
+ Images

Use, examples:
{% highlight lua %}
add_installfiles("src/*.h")
add_installfiles("doc/*.md")
{% endhighlight %}

---

#5. Compiling for Rust
{% highlight rust %}
pub fn main() {
    println!("Compiling Rust with xmake!!!");
}
{% endhighlight %}

{% highlight moon %}
target("bin-rust")
  set_kind("binary")
  add_files("./main.rs")
{% endhighlight %}

{% highlight bash %}
xmake
xmake run <TAB>
{% endhighlight %}

In addition to several other programming languages as we said.
---

# 6. Create a template for Doxygen
{% highlight bash %}
xmake create my-project
cd my-project
xmake doxygen
{% endhighlight %}

---

# 7. Compiling for iPhone
{% highlight bash %}
xmake create iphone
cd iphone
xmake config -p iphoneos
{% endhighlight %}

---

# 8. Rotating Moon
Via command line:
{% highlight bash %}
xmake lua -c "print('Hello, Lua via xmake')"
{% endhighlight %}

Running in a subshell:
{% highlight bash %}
xmake lua
{% endhighlight %}
{% highlight lua %}
print(89 + 11)
os.exit()
{% endhighlight %}

---

# 9. Using menu
{% highlight bash %}
xmake config --<TAB>|--menu
{% endhighlight %}

---

#10. Getting more information from commands
{% highlight bash %}
xmake<TAB>` and `xmake --<TAB>
xmake --help
{% endhighlight %}

---

# Watch the video
The video is in Portuguese, but you can see the commands as they are universal!

<iframe width="900" height="380" src="https://www.youtube.com/embed/ydgcsv-hssY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Conclusion
It is a modern and very interesting and promising tool that is worth using.

For more information visit the website and explore the documentation.

# <https://xmake.io>


