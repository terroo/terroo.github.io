---
layout: post
title: "Create window immediate-mode in C Language with MicroUI"
date: 2024-06-19 12:43:49
image: '/assets/img/c/microui.jpg'
description: "🪟 A tiny immediate-mode UI library"
tags:
- clanguage
- gui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

For those who already know [Dear ImGui](https://terminalroot.com/tags#imigui), **MicroUI** is a simplistic alternative to [C Language](https://terminalroot.com/tags#clanguage).

Features of **MicroUI**:
+ Tiny: close to `1100 sloc` (Lines of Source Code) of ANSI C;
+ Works in a fixed-size memory region: no additional memory is allocated;
+ Integrated controls: window, scrollable panel, button, slider, text box, label, checkbox, wrapped text;
+ Works with any rendering system that can draw rectangles and text;
+ Designed to allow the user to easily add custom controls;
+ Simple layout system.

---

# Usage
To use MicroUI you will need:
+ [A compiler for the C Language](https://terminalroot.com/list-of-top-10-c-cpp-compilers/)
+ [SDL2](https://terminalroot.com/tags#sdl2)
+ and [OpenGL](https://terminalroot.com/tags#opengl)

Duly installed on your machine or through [Conan](https://terminalroot.com/conan-a-package-manager-for-cc/) or [Vcpkg](https://vcpkg.io/en/), in addition to [Git](https://terminalroot.com/tags#git) to clone the repository:

{% highlight bash %}
git clone https://github.com/rxi/microui
{% endhighlight %}

After cloned. To test, you can enter the example subdirectory:

{% highlight bash %}
cd microui/demo
{% endhighlight %}

Compile and run:
{% highlight bash %}
gcc main.c renderer.c ../src/microui.c -I../src -Wall -std=c11 -pedantic `sdl2-config --libs` -lGL -lm
./a.out # Run
{% endhighlight %}
> Alternatively there is a `build.sh` in the same directory!

The possible and probable display of the demo windows:

[![MicroUI running](/assets/img/c/microui-running.png)](/assets/img/c/microui-running.png)

For more information see [usage.md](https://github.com/rxi/microui/blob/master/doc/usage.md) from the [MicroUI repository on GitHub](https://github.com/ rxi/microui/).



