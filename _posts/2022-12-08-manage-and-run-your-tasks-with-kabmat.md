---
layout: post
title: "Manage and Run Your Tasks with Kabmat"
date: 2022-12-08 10:38:56
image: '/assets/img/tui/kabmat.jpg'
description: 'Graphical program that runs on the terminal (TUI) to manage kanban boards with Vim style key combinations.'
tags:
- tui
- cpp
- ncurses
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Kabmat** is a command line software written in [C++](https://terminalroot.com/tags#cpp) that uses the [ncurses](https://terminalroot.com/tags#ncurses) that facilitates the management of Kanban boards.

Kanban is a style of organizing and executing tasks in real time, that is, it avoids the famous: procrastination, in short it would be:
> Scheduled? Knife!

It was developed by Toyota (a multinational automotive manufacturer of Japanese origin).

Kabmat coupled with the terminal, which is easy to access, makes it even easier for you to schedule and run your tasks.

---

# Installation
You will need the following dependencies: [git](https://terminalroot.com/tags#git), [make](https://terminalroot.com/tags#make) and [gcc/g++]( https://terminalroot.com/tags#gcc).

After having all the dependencies, clone the repository, compile and install with the commands:

{% highlight bash %}
git clone https://github.com/PlankCipher/kabmat
cd kabmat
sed -i 's/-lncurses/-lncurses -ltinfo/g' Makefile
make up
sudo make install
cd ..
rm -rf kabmat
{% endhighlight %}

To check if everything is ok, check the version with the command:
{% highlight bash %}
kabmat --version
{% endhighlight %}

---

# Usage
To open Kabmat, just run the command:
{% highlight bash %}
kabmat
{% endhighlight %}

Press keys on your keyboard to:
+ `c` → Create a new frame,
+ `i` → To enter the insert mode(`INSERT`, style [Vim](https://terminalroot.com/tags#vim) and write the name of your quadroi and save with [ENTER].
+ `d` → And then to
+ Use the `j`, `k`, `l` and `h` keys to move one frame.
+ `d` → to delete
+ `q` → twice to exit Kabmat

For more information use `help`:
{% highlight bash %}
kabmat --help
{% endhighlight %}

And check the [Kabmat GitHub repository](https://github.com/PlankCipher/kabmat).


![Kabmat running](https://github.com/PlankCipher/kabmat/raw/master/assets/kabmat.gif)

---

# Useful links
+ <https://en.wikipedia.org/wiki/Kanban>
+ <https://en.wikipedia.org/wiki/Kanban>
