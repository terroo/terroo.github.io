---
layout: post
title: "GNU Octave, an alternative to MATLAB"
date: 2023-12-28 23:03:44
image: '/assets/img/gnu/octave/octave.jpg'
description: 'It has its own programming language designed to carry out numerical calculations and simulations.'
tags:
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[GNU Octave](https://octave.org/) is [free software](https://terminalroot.com/tags#freesoftware) written with [C++](https://terminalroot.com/tags#cpp) intended for carrying out numerical calculations and simulations.

It is often used as an open source alternative to [MATLAB](https://en.wikipedia.org/wiki/MATLAB), being compatible with the MATLAB programming language and providing a wide range of functionality for numerical analysis and computation. scientific.

It has several integrated tools for plotting and 2D/3D visualization. It is available for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [GNU/Linux](https://terminalroot.com/tags#gnulinux) and [BSD](https://terminalroot.com/tags#bsd).

---

# Installation
To install GNU Octave you can use your operating system's package manager or download the binary and run, or install, it manually.

Example for recent versions of [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt install octave
{% endhighlight %}

For other systems or distributions see the [GNU Octave download page](https://octave.org/download). In addition to being able to compile from scratch!

---

# Usage
After installing, you can open octave graphically or via [command line](https://terminalroot.com/tags#commands). When running just the command below, a subshell will be launched that will interpret the GNU Octave commands after typing it and pressing enter:
{% highlight bash %}
octave
{% endhighlight %}

If you want to use it graphically, just search for the name **Octave** on your system dashboard, or run it via the command line as well:
{% highlight bash %}
octave --gui
{% endhighlight %}

When opening for the first time it may ask for some configuration data such as those listed below:
[![GNU Octave init config](/assets/img/gnu/octave/start-octave.jpg)](/assets/img/gnu/octave/start-octave.jpg)
> Click on the image to open in a new tab and enlarge it!

[![GNU Octave open](/assets/img/gnu/octave/octave-open.png)](/assets/img/gnu/octave/octave-open.png)

The interface is very intuitive and you can use the tabs in the bottom right corner to choose between:
+ **Command window** - The graphical subshell
+ **Documentation** - Including examples
+ **Variable editor**
+ **Editor**

A basic example of use would be to create a graph that will display `y` as a function of `x`, using the *Command Window* or directly in the [terminal](https://terminalroot.com/tags#terminal) subshell:
{% highlight python %}
x = linspace(0, 2*pi, 100);
y = sin(x);
plot(x, y);
{% endhighlight %}

> This will display the figure:
[![GNU Octave plot example](/assets/img/gnu/octave/plot-subshell.jpg)](/assets/img/gnu/octave/plot-subshell.jpg)

And if it's graphical:
[![GNU Octave plot GUI](/assets/img/gnu/octave/plot-gui.jpg)](/assets/img/gnu/octave/plot-gui.jpg)

---

For more information visit [GitHub repository](https://github.com/gnu-octave/octave), [official website](https://octave.org/) and [wiki](https:// en.wikibooks.org/wiki/Octave_Programming_Tutorial/Getting_started).
