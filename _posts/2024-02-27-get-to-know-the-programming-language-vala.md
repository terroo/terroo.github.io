---
layout: post
title: "Get to know the programming language: Vala"
date: 2024-02-27 12:40:35
image: '/assets/img/gnome/vala.jpg'
description: 'Very fast and expert at building graphical interfaces!'
tags:
- gnome
- vala
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Vala** is an object-oriented [programming language](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/), with syntax inspired by [C#](https://terminalroot.com/tags#csharp).

With a self-hosted compiler that generates code in [C](https://terminalroot.com/c) that uses *GObject*, it was created to be used in developing applications for [GNOME](https://terminalroot.com/tags#gnome), and was later adopted by Elementary OS.

In one of the videos we made on [Performance Tests with Programming Languages](https://github.com/terroo/langs-test-loop), Vala was in **1st Place** as the fastest in the Round 2 and in 3rd place in the ranking final second only to [C++](https://terminalroot.com/tags#cpp) and [C](https://terminalroot.com/tahs#clanguage), but it was ahead of languages such as: [Perl](https://terminalroot.com/tags#perl) and [Rust](https://terminalroot.com/tags#rust).

---

# Installation
To install the Vala programming language you can use your operating system's package manager. Example on [Ubuntu](https://terminalroot.com/tags#ubuntu):

{% highlight bash %}
sudo apt install valac
{% endhighlight %}
> The letter **c** at the end refers to the compiler!

---

# Creating a `Hello, World!` in Vala
After the Vala compiler is properly installed, you can test *Hello, World!* with the code below:

Create a file name (example): `main.vala`
> Note that the file extension is `.vala`

And include the code below:
{% highlight csharp %}
void main() {
     print("Hello, World!\n");
}
{% endhighlight %}

To compile, use the `valac` command, but it may be that only this compiler is available along with the version on your system, for example: `valac-0.56`. So, this would be the command for you to compile:

{% highlight bash %}
valac-0.56 main.vala
{% endhighlight %}
> If your system has another version, type `valac` and then press the TAB key for your terminal's auto-complete to show the available version.

Automatically it will compile the binary: `main`, so to run it just use `./`:
{% highlight bash %}
./main
{% endhighlight %}

---

For more information about Vala visit the [official website](https://vala.dev/).

