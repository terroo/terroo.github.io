---
layout: post
title: "Automate SFML Projects with Pro++"
date: 2025-04-09 13:47:38
image: '/assets/img/terlang/pro++.jpg'
description: "🚀 From the C++ series as a Shell Script, a command that saves time." 
tags:
- cpp
- cppdaily
- sfml
- terlang
- cli
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

For a while now, I've been doing a lot of things with [SFML](https://terminalroot.com/tags#sfml) such as tests for the [game](https://terminalroot.com/tags#gamedev) that I'm developing, as well as animations, tests, ... and other things.

And tired of creating projects from scratch, I created a [command](https://terminalroot.com/tags#commands) that automates the creation of [SFML](https://terminalroot.com/tags#sfml) and [C++](https://terminalroot.com/tags#cpp) projects.

This is a basic code that for now only works for SFML, but in the future I intend to expand it to several types of libraries, examples: [Raylib](https://terminalroot.com/tags#raylib), [OpenGL](https://terminalroot.com/tags#opengl)(with **GLFW**), [Dear ImGui](https://terminalroot.com/tags#imgui)(with *OpenGL* with *GLFW*), [SDL](https://terminalroot.com/tags#sdl)(`2` and `3`), [SFML3](https://www.reddit.com/r/sfml/comments/1hjhs2n/sfml_300_released/) and others.

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

## Compile and Install
> The optional dependency is [Terlang](https://github.com/terroo/terlang) to compile and install, but you can compile and install manually if you want.

Download, unzip, enter `pro++/`, compile and install:
{% highlight bash %}
wget https://terminalroot.com/downs/pro++.zip
unzip pro++.zip
cd pro++
ter build.ter
ter install.ter
{% endhighlight %}

---

## Usage
To create your project, just run the command and enter the name of the Project/Class you want as a parameter (if there are spaces in the name, use quotes to indicate it), and then enter and compile with [Terlang](https::github.com/terroo/terlang):
{% highlight bash %}
pro++ "My Project"
cd MyProject
ter build.ter
{% endhighlight %}

In this case, it will create the directory and files:
{% highlight bash %}
MyProject
├── build.ter
├── main.cpp
├── my-project.cpp
└── my-project.hpp
{% endhighlight %}
> The project, after being compiled, will automatically run the binary.

---

> If you want to uninstall: `sudo rm /usr/local/bin/pro++`.

