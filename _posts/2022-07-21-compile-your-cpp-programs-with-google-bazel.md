---
layout: post
title: "Compile your C++ programs with Google's Bazel"
date: 2022-07-21 10:05:11
image: '/assets/img/cppdaily/bazel.jpg'
description: 'Including programs written in Java and other programming languages.'
tags:
- cpp
- cppdaily
- java
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Bazel** is an open source tool for building automation and testing software developed by [Google](https://google.com) .

That is, Bazel is an alternative to [Make](https://terminalroot.com/tags#make)(from the GNU project) or **Ant** and **Maven**, both to compile programs in Java, developed by the company: Apache .

Bazel was written with the [Starlark](https://bazel.build/rules/language) programming language, a dialect of [Python](https://terminalroot.com/tags#python) .

Bazel builds almost all Google products: Google Search, GMail, Google Docs, ...

### What is the purpose of using Bazel ?
Bazel is designed to work in a standardized way across Google products.

Usually companies tend to create their own solutions for reasons of standardization and it also serves to avoid "free advertising of products from other companies", even more Google that one of its main sources of revenue is precisely: advertising.

But, you can migrate your projects if you want!

---

# Installation
There are several ways you can install it. You can use your operating system's package manager, examples below:

{% highlight bash %}
emerge dev-util/bazel # Gentoo
sudo pacman -S bazel # Arch via AUR
sudo dnf install bazel4 # Fedora após instalar dnf-plugins-core
pkg install devel/bazel # FreeBSD via Ports
{% endhighlight %}

And among others, for a more complete list see [here](https://bazel.build/install) .

You can also use [npm](https://bazel.build/install/bazelisk) regardless of OS:

{% highlight bash %}
sudo npm install -g @bazel/bazelisk
{% endhighlight %}


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

# Usage
The most basic example of all, in this case for [C++](https://terminalroot.com/tags#cpp), would be a project with 3 files:
+ Your program: `main.cpp`
+ The `BUILD` file that would have the macros to be processed
+ And an empty file named `WORKSPACE`, it serves to indicate the root of the project.

In short:
{% highlight bash %}
MYPROJECT/
├── BUILD
├── WORKSPACE
└── main.cpp

0 directories, 3 files
{% endhighlight %}

The example content for `main.cpp`, a basic *Hello, World!*:
{% highlight cpp %}
#include <iostream>

int main(){
  std::cout << "Hello, World!" << '\n';
}
{% endhighlight %}

Contents of `BUILD`:
{% highlight python %}
cc_binary(
    name = "hello-world",
    srcs = ["main.cpp"],
)
{% endhighlight %}

And the contents of `WORKSPACE` empty, to create just use the command:
{% highlight bash %}
> WORKSPACE
{% endhighlight %}

Now to compile, run:
{% highlight bash %}
bazel build hello-world
{% endhighlight %}

It will have an output similar to the one below:
{% highlight bash %}
INFO: Analyzed target //:hello-world (37 packages loaded, 163 targets configured).
INFO: Found 1 target...
Target //:hello-world up-to-date:
  bazel-bin/hello-world
INFO: Elapsed time: 6.229s, Critical Path: 0.55s
INFO: 6 processes: 4 internal, 2 linux-sandbox.
INFO: Build completed successfully, 6 total actions
{% endhighlight %}

To run use the `run` parameter followed by the *target* indicated in `BUILD`, in this case we use the binary name `hello-world`:

{% highlight bash %}
bazel run hello-world
{% endhighlight %}

Similar output:
{% highlight bash %}
INFO: Analyzed target //:hello-world (36 packages loaded, 163 targets configured).
INFO: Found 1 target...
Target //:hello-world up-to-date:
  bazel-bin/hello-world
INFO: Elapsed time: 3.666s, Critical Path: 0.66s
INFO: 6 processes: 4 internal, 2 linux-sandbox.
INFO: Build completed successfully, 6 total actions
INFO: Build completed successfully, 6 total actions
Hello, World!
{% endhighlight %}

Before printing, the tests and analyzes performed are described. If you want to run only the binary, run:
{% highlight bash %}
./bazel-bin/hello-world
{% endhighlight %}

After `build` it creates some directories inside your project, example based above:

{% highlight bash %}
$ ls
📁⠀bazel-MYPROJECT/  📁⠀bazel-bin/  📁⠀bazel-out/  📁⠀bazel-testlogs/  BUILD  main.cpp  WORKSPACE
{% endhighlight %}
> Use the `tree` command (if you have it installed) for more details.

---

# More complete examples
The example we show is an "informal" way to create a project to be compiled with Bazel . The correct way can be found in [Bazel repository](https://github.com/bazelbuild/examples), example:

{% highlight bash %}
git clone https://github.com/bazelbuild/examples
cd bazelbuild
tree cpp-tutorial

examples
└── cpp-tutorial
    ├──stage1
    │  ├── main
    │  │   ├── BUILD
    │  │   └── hello-world.cc
    │  └── WORKSPACE
    ├──stage2
    │  ├── main
    │  │   ├── BUILD
    │  │   ├── hello-world.cc
    │  │   ├── hello-greet.cc
    │  │   └── hello-greet.h
    │  └── WORKSPACE
    └──stage3
       ├── main
       │   ├── BUILD
       │   ├── hello-world.cc
       │   ├── hello-greet.cc
       │   └── hello-greet.h
       ├── lib
       │   ├── BUILD
       │   ├── hello-time.cc
       │   └── hello-time.h
       └── WORKSPACE
{% endhighlight %}

Enter the `stage1` directory that has the most basic example and then analyze and test the others, example for `stage1`:

{% highlight bash %}
cd stage1
bazel build //main:hello-world
{% endhighlight %}
> Note the syntax stating that the `BUILD` file is inside the `📁⠀main` directory

For more information visit the official page: <https://bazel.build/> .

