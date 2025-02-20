---
layout: post
title: "Meet the kat command"
date: 2025-02-20 08:20:00
image: '/assets/img/commands/kat-thumb-800.png'
description: ">_ A cat with syntax highlight"
tags:
- commands
- terminal
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

I created this command: `kat` based on [GNU cat](https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html#cat-invocation), but with syntax highlighting. It was made with [C++](https://terminalroot.com/tags#cpp).

I classified it as:

"**A cat command, but almost with a chocolate flavor**" (slogan)
> A reference to the *KitKat* chocolate! And *almost* because it doesn't have the ~~Kit~~ 😃

The `kat` command is still under development, so not all syntaxes are available. At the end of this article there are those that are already and those that are yet to be implemented, in addition to other features that I want to implement.

It's been a while since I created it, but now I've decided to make it available for anyone who wants to use it. It's based on other similar commands that I've seen, but I didn't like them as much and I needed it to be:
+ **Simple**
+ **Fast**
+ **Beautiful**
+ and **basic**.

The other similar commands were missing something, such as: [source-highlight](https://www.gnu.org/software/src-highlite/)(*also made with C++, but not very nice looking*), `Theldus/kat`(made in [C](https://terminalroot.com/tags#linguagemc), but I didn't like the look either), *bat*(initially made with [Go/Golang](https://terminalroot.com/tags#go), it used to be quite fast, but then it was rewritten in another language and became very slow, besides having too many features for a cat command), [highlight](https://gitlab.com/saalen/highlight)(*made with [Lua](https://terminalroot.com/tags#lua) and [C++](https://terminalroot.com/tags#cpp), it is also more than a simple cat command, it has many other features*).

`Theldus/kat` has also made a comparison with `bat` (very slow) and `cat`. `terroo/kat` is in the same performance line, that is, since it is an immediate utility, it needs to be fast:

![kat performance](https://camo.githubusercontent.com/9bc88617aaf09024725e6bd1c11858844d75508774fe3123d343b604c9281fc9/68747470733a2f2f692e696d6775722e636f6d2f484a48465250642e706e67)

Anyway, I was left with creating my own solution!


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

## How to install `kat`? 
`kat` is currently only available for [UNIX-style](https://terminalroot.com/tags#unix) systems. So, to compile beforehand you need some dependencies, which are:

+ A C++ compiler: [GNU GCC](https://gcc.gnu.org/) or [Clang LLVM](https://clang.llvm.org/)
+ [Boost.Regex](https://www.boost.org/doc/libs/1_87_0/libs/regex/)
+ [CMake](https://cmake.org/)

You can use your system's package manager and install, for example, on [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt update
sudo apt install build-essential cmake libboost-regex-dev
{% endhighlight %}

Then just clone, build and install:
{% highlight bash %}
git clone http://github.com/terroo/kat build-kat
cd build-kat
cmake -B build .
cmake --build build
sudo cmake --install build
{% endhighlight %}
> After installing, you can remove the cloned directory: `cd .. && rm -rf build-kat`.

---

## How to use `kat`?
Just like you use `cat`, the difference is that it already has line numbering, so it doesn't need an additional parameter, examples:

{% highlight bash %}
kat main.cpp # C++
kat main.c # C
kat MyClass.java # Java
kat script.py # Python
kat index.js # JavaScript
kat Main.cs # C#
kat.txt # Text
{% endhighlight %}

The output will be similar to the image below:

![kat C++ example](/assets/img/commands/kat-command-example.png)

As I said, there aren't many parameters available, who uses all the `cat` parameters, for example? I think the most I've ever used in my life was `-n` to see the line numbers.. 😃

So, to see the `kat` `help`, just run:
{% highlight bash %}
kat --help
{% endhighlight %}
> You'll be amazed at the amount of parameters!!! 🤣

---

As I said, it's still under development, so the languages and formats that have **✔** are available and those that have **✖** are yet to be implemented.

But, if you want to speed up the implementation of any of them, submit an [issue](https://github.com/terroo/kat/issues) in the [kat repository](https://github.com/terroo/kat).

+ ✔ [C++](https://terminalroot.com/tags#cpp)
+ ✔ [C](https://terminalroot.com/tags#linguagemc)
+ ✔ [Java](https://terminalroot.com/tags#java)
+ ✔ [Python](https://terminalroot.com/tags#python)
+ ✔ [JavaScript](https://terminalroot.com/tags#javascript)
+ ✔ [C#](https://terminalroot.com/tags#csharp)
+ ✖ HTML
+ ✖ Markdown
+ ✖ CSS
+ ✖ JSON
+ ✖ YAML
+ ✖ XML
+ ✖ Go
+ ✖ Swift
+ ✖ Moon
+ ✖ GNU Assembler
+ ✖ Intel Assembly(NASM)
+ ✖ GNU Bash
+ ✖ Power Shell
> In addition to implementing in the future: Ruby, PHP, Elixir, Perl, Zig, Rust, Erlang, Haskell and others.

I hope you like `kat`, ahhh... leave a **✰** in the repository! 😎
