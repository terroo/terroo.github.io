---
layout: post
title: "Meet Cheerp, an alternative to Emscripten"
date: 2023-04-26 11:20:05
image: '/assets/img/web/cheerp.jpg'
description: 'Cheerp is a C/C++ compiler for web applications - Compiles to WebAssembly and JavaScript.'
tags:
- cpp
- C language
- web
- webassembly
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Cheerp** is an open source [C](https://terminalroot.com/tags#clanguage)/[C++](https://terminalroot.com/tags#cpp) compiler, with permissive, enterprise-grade license for [Web](https://terminalroot.com/tags#web) applications. It allows compiling practically any C/C++ code for [WebAssembly](https://terminalroot.com/tags#webassembly) and [JavaScript](https://terminalroot.com/tags#javascript).

It is based on and integrated with the [LLVM](https://terminalroot.com/tags#llvm)/[Clang](https://terminalroot.com/tags#clang) infrastructure, and presents several stages of custom optimizations to maximize performance and minimize the size of compiled JavaScript/WebAssembly output.

Cheerp is primarily used to port existing C/C++ libraries and applications to [HTML5](https://terminalroot.com/tags#html), but can also be used to write high-performance Web applications and WebAssembly components from zero.

![Cheerp](/assets/img/web/cheerp-meta.jpg)

---

# Installation
There are ready-made binaries for [Windows](https://terminalroot.com/tags#windows), [Ubuntu/Debian](https://terminalroot.com/tags#ubuntu) and [macOS](https: //terminalroot.com/tags#macos).

+ For Windows you can download the latest version from the [releases](https://github.com/leaningtech/cheerp-meta/releases) page and run the file `https://github.com/leaningtech/ cheerp-meta/releases/download/cheerp-3.0/Cheerp-3.0-Windows.exe`;

+ For Debian and Ubuntu just add the repository and install via APT:
{% highlight bash %}
# Add the following line to /etc/apt/sources.list
deb http://ppa.launchpad.net/leaningtech-dev/cheerp-ppa/ubuntu focal main

# And import the key to apt with the command
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 84540D4B9BF457D5
sudo apt update

# Then just install
sudo apt install cheerp-core
{% endhighlight %}

+ For macos you can also download the latest version from the [releases](https://github.com/leaningtech/cheerp-meta/releases) page and run the file `https://github.com/leaningtech /cheerp-meta/releases/download/cheerp-3.0/cheerp-macosx-3.0.dmg`;

To build from scratch just follow the instructions [at this link](https://docs.leaningtech.com/cheerp/Linux-build-instructions).

---

# Usage
A basic `Hello, World!` would be:

#### Create a basic file in [C++](https://terminalroot.com/tags#cpp), for example, with the following code:
{% highlight cpp %}
#include <cheerp/clientlib.h>

void webMain(){
   client::console.log("Hello, World Wide Web!");
}
{% endhighlight %}

Compile with the command:
{% highlight bash %}
/opt/cheerp/bin/clang++ -target cheerp hello.cpp -o hello.js
{% endhighlight %}

And run with [Node.js](https://terminalroot.com/tags#nodejs):
{% highlight bash %}
nodejs hello.js
{% endhighlight %}

You can also use your own `index.html` file:
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
   <head>
     <meta charset="utf-8">
     <title>Cheerp example 0: hello</title>
     <script defer src="hello.js"></script>
   </head>
   <body>
   <h1 id="pagetitle">Open the console log
(Ctrl + Shift + J or Ctrl + Option + J)
to read the output</h1>
   </body>
</html>
{% endhighlight %}
> Remembering that some browsers won't run on ~`file:///`~, but you can use `python3 -m http.server` and then open the file.

---

For more information see the links:
+ <https://leaningtech.com/cheerp/>
+ <https://github.com/leaningtech/cheerp-meta>

