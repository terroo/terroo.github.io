---
layout: post
title: "Play Pac-Man in the Terminal"
date: 2023-11-09 08:41:12
image: '/assets/img/games/myman.jpg'
description: 'Made with C and Ncurses!'
tags:
- terminal
- ncurses
- games
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**MyMan** is an unofficial, unlicensed clone of [the original Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) and Puckman and their sequels and imitators.

MyMan uses [Ncurses](https://terminalroot.com/tags#ncurses) to *design* the game environment. It is possible to play it on [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux), [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos) and among others.

On Windows you will need the [PDCurses](https://pdcurses.org/) library.

---

# Dependencies
> Example on systems that use APT as a package manager.

{% highlight bash %}
sudo apt install git build-essential make autotools-dev autoconf libncurses5-dev libncursesw5-dev
{% endhighlight %}
---

# To compile and install
Clone, compile and test the version:
{% highlight bash %}
git clone https://github.com/kragen/myman
cd myman
sed -i 's/-lcurses/-ltinfo -lncurses/g' Makefile
make
./myman --version
{% endhighlight %}

To install:
{% highlight bash %}
sudo make install
{% endhighlight %}

---

# To play
Open the game by running only:
{% highlight bash %}
myman
{% endhighlight %}
> If you haven't installed it, run: `./myman` inside the folder where you compiled it!

#### 1. Press [SPACE]
#### 2. Press [ENTER] twice
#### 3. You (Pac-Man) are the letter <code style="color:yellom;font-style:bold;">C</code>, just press any directional key to start
#### 4. Use the directional keys to escape the letters `A` and eat the points: `.`
#### 5. To exit, press: `Ctrl + c`

For more information, access the repository: <https://github.com/kragen/myman> and/or use `help`:
{% highlight bash %}
myman --help
{% endhighlight %}

---

If you want to uninstall, inside the post-compiled and installed directory, run:
{% highlight bash %}
sudo make clean uninstall
{% endhighlight %}

