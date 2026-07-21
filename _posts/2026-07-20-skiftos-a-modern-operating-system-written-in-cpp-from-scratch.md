---
layout: post
title: "SkiftOS: A Modern Operating System written in C++ from scratch"
date: 2026-07-20 21:24:14
image: '/assets/img/cpp/skiftos.jpg'
description: "🔳 Its main goal is not to compete with Windows or Linux, but to serve as a modern platform for operating system experimentation."
tags:
- os
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**SkiftOS** is an open source operating system developed practically from scratch, without relying on a [Linux kernel](https://terminalroot.com/tags#gnulinux) or [BSD](https://terminalroot.com/tags#bsd).

> **Warning:** the developer himself states that the project is still in its early stages and **should not be used as a primary operating system or in production**.

Developed primarily in **C++20**, it aims to combine:

+ simplicity;
+ modularity;
+ modern design;
+ clean APIs;
+ integrated graphical interface.

Unlike many *hobby OS* that focus only on the kernel, SkiftOS has practically its own entire stack:

* Bootloader
* Microkernel
* Graphics framework
* Standard library
* UI toolkit
* Desktop Environment
* Native applications

All developed specifically for the system.

Main components:

+ Hjert: The system's microkernel.
+ Karm: The project's base library.
+ KarmUI: Reactive graphics framework inspired by modern technologies.
+ Hideo: The graphical environment (Desktop Environment).

Technologies used:

The project makes use of several modern technologies:

* [C++20](https://terminalroot.com/tags#cpp)
* [LLVM/Clang](https://terminalroot.com/tags#clang)
* [Ninja](https://terminalroot.com/tags#ninja)
* [NASM](https://terminalroot.com/tags#asm)
* [Python](https://terminalroot.com/tags#python)
* [QEMU](https://terminalroot.com/tags#qemu)
* x86-64 architecture
* microkernel
* IPC
* Capability-based Security

---

## Installation

Currently the project does not have a traditional installer.

The recommended way is to compile the system from source code.

On Linux or macOS install:

* Git
* Clang (18+)
* LLVM
* Ninja
* NASM
* Python 3.11+
* QEMU
* SDL2
* mtools
* liburing

The official manual provides specific commands for [Ubuntu and Arch Linux](https://docs.skiftos.org/building.html).

In short: clone the project

{% highlight bash %}
git clone https://codeberg.org/skift/os.git

cd skift
{% endhighlight %}

Set up the environment:

{% highlight bash %}
./skift.sh tools setup
{% endhighlight %}

Then check if everything was installed correctly:

{% highlight bash %}
./skift.sh tools doctor
{% endhighlight %}

Install dependencies:

{% highlight bash %}
./skift.sh install
{% endhighlight %}

Build:

To start the system in QEMU:

{% highlight bash %}
./skift.sh boot
{% endhighlight %}

You can also run just the graphical shell:

{% highlight bash %}
./skift.sh run --release hideo-shell
{% endhighlight %}

Or generate a disk image:

{% highlight bash %}
./skift.sh dist --format=hdd
{% endhighlight %}

---

## Usage

After starting the virtual machine, the system loads its own graphical interface.

Available features include:

* window manager;
* terminal;
* text editor;
* image viewer;
* native applications;
* integrated desktop.

There are still several limitations, as the project continues under active development.

---

SkiftOS is one of the most interesting hobby OS projects today. Instead of just implementing a functional kernel, it aims to deliver a complete experience, including microkernel, standard library, graphics framework, desktop, and its own applications.

For more information, visit the [SkiftOS repository](https://codeberg.org/skift/os).
