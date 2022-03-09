---
layout: post
title: "Monitor your system with btop++"
date: 2022-03-09 18:01:33
image: '/assets/img/cpp/btop.png'
description: 'Written in C++'
tags:
- terminal
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**btop++** or simply **btop** is another system monitor via [terminal](https://terminalroot.com/tags#terminal). Similar to some others that we have already published like: [gotop](https://terminalroot.com/install-gotop-a-graphical-terminal-system-monitor/), the difference is that it is written in [C++](https://terminalroot.com/cpp), that is, has better performance.

# Installation
To install you will need a compiler for [C++](https://terminalroot.com/tags#cpp), for example [g++](https://gcc.gnu.org/):
{% highlight sh %}
sudo apt install g++
{% endhighlight %}

Then, just clone and compile [Makefile](https://terminalroot.com/how-to-create-a-makefile/):
{% highlight sh %}
https://github.com/aristocratos/btop
cd btop
make
sudo make install
{% endhighlight %}


# Usage
Once installed to open btop++, just run:
{% highlight sh %}
btop
{% endhighlight %}

By pressing `ESC` you can choose between **Options**, **Help** or exit the program: **Quit** .

See the screenshots below:

When used in TTY:
![btop++ TTY](https://github.com/aristocratos/btop/raw/main/Img/tty.png)

Main menu:
![btop++ menu](https://github.com/aristocratos/btop/raw/main/Img/main-menu.png)

Help menu:
![btop++ help](https://github.com/aristocratos/btop/raw/main/Img/options-menu.png)

---

For more information see the official repository:
## <https://github.com/aristocratos/btop>
