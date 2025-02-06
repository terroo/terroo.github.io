---
layout: post
title: "Meet Ada Programming Language and the First Steps"
date: 2025-02-06 20:51:53
image: '/assets/img/programming/ada.png'
description: "🛰 Precision, safety and reliability for critical systems."
tags:
- programming
- ada
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The **Ada** programming language was the first language that called itself *memory-safe* (which is actually **Memory Sanitize**).

> It was officially released in **1983** as a programming language for critical and real-time systems, with the goal of unifying and improving the reliability of software used by the United States government.

It was designed to solve the problems of portability, reliability and maintainability of software in embedded and real-time systems, especially in areas such as defense and aerospace.

### Examples of software made with Ada:
- **Aircraft control systems** and **aerospace systems** (such as the software that controls the onboard system of the Boeing 787 and the Airbus A380).
- **Space mission control systems**, such as NASA missions.
- **Defense systems** and **weapons**, such as missile and radar systems.

### Where it is most used:
- **Aerospace**
- **Defense and military systems**
- **Transportation systems (airplanes, trains, etc.)**
- **Industrial automation**
- **Medical systems**

### Qualities
- **Strong data types and type checks**, which reduces the risk of type bugs and makes debugging easier.
- **Exception management** and control of **runtime errors**. - **Support for concurrent and multitasking programming** with **Ada Tasking**.

### Purpose for creating Ada:
Ada was created to **replace** previous programming languages, such as **Fortran**, [C](https://terminalroot.com/tags#clanguage), **ALGOL**, and **PL/1**, which were used in the military environment, but with many interoperability and reliability problems. The first version of the Ada compiler was written in [Assembly](https://terminalroot.com/tags#assembly), but, like any modern language, Ada was later implemented by compilers written in it, becoming self-sufficient.

### Additional important features:
- **ANSI/ISO standard**: Ada was standardized by **ANSI** (American National Standards Institute) and **ISO** (International Organization for Standardization) to ensure consistency and portability.

### Additional important features:
- **ANSI/ISO standard**: Ada was standardized by **ANSI** (American National Standards Institute) and **ISO** (International Organization for Standardization) to ensure consistency and portability.

### - **Concurrency**: Ada is specially designed for **concurrent programming** and real-time systems, offering features such as **tasks**, **protected objects** and **rendezvous**, essential resources to ensure the correct execution of systems with multiple simultaneous operations.
- **Quality and Certification**: Ada has a strong **certification** base for systems that require **formal verification**, which is essential in sectors such as defense and aerospace.

---

## Installation
To have *Ada*(GNAT) on your system, simply use your operating system's package manager.

Examples with: [winget](https://learn.microsoft.com/windows/package-manager/winget/), [Chocolatey](https://chocolatey.org/), [Scoop](https://scoop.sh/), APT, Brew and others on [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [Ubuntu](https://terminalroot.com/tags#ubuntu) and other systems. Or even download the pre-compiled binaries for your system directly from the official GNAT website: <https://www.adacore.com/download> (Follow the instructions and add it to your **PATH** to easily use it in the terminal).

Examples:

Chocolatey on Windows:
{% highlight bash %}
choco install gnat
{% endhighlight %}
> To install Chocolatey you can use [PowerShell](https://terminalroot.com/tags#powershell):
> `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`
>

Scoop on Windows:
{% highlight bash %}
scoop bucket add extras
scoop install gnat
{% endhighlight %}
> To install Scoop: `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`.

Brew on macOS:
{% highlight bash %}
brew install gnat
{% endhighlight %}
> If you don't have Brew installed, run: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`.

APT on Ubuntu:
{% highlight bash %}
sudo apt install gnat
{% endhighlight %}

Once properly installed, test the version:
{% highlight bash %}
gnat --version
{% endhighlight %}

Example output:
{% highlight txt %}
GNAT 13.3.0
Copyright (C) 1996-2023, Free Software Foundation, Inc.
This is free software; see the source for copying conditions.
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
{% endhighlight %}

---

## Hello, World!
> Getting started with Ada.

Use the `.adb` extension to create Ada code, for example: `main.adb`
{% highlight ada %}
with Ada.Text_IO;
procedure Hello is
begin
Ada.Text_IO.Put_Line("Hello, Ada!");
end Hello;
{% endhighlight %}

Compile and run:
{% highlight bash %}
gnatmake main.adb
./main
{% endhighlight %}

If you want to have the complete Ada development environment on your system, install the development tools:

+ Text editors;

+ and **Appropriate debuggers**.

You can install additional packages such as `gprbuild` (for compiling Ada projects) and `gnat-gps` (an IDE for Ada):
{% highlight bash %}
sudo apt install gprbuild gnat-gps
{% endhighlight %}

---

For more information, visit the official address: <https://www.adacore.com/> and [Wikipedia](https://en.wikipedia.org/wiki/Ada_(programming_language)).


