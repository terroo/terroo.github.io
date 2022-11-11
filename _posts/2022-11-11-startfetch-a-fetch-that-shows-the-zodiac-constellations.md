---
layout: post
title: "Startfetch - A fetch that shows the Zodiac Constellations"
date: 2022-11-11 11:30:59
image: '/assets/img/terminal/starfetch.jpg'
description: 'A tool written in C++ for the command line.'
tags:
- cpp
- wm
- unixporn
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`starfetch` is a tool that prints a schematic of a given <u>constellation</u> and some information about it:
+ your quadrant,
+ your right ascension,
+ its declension,
+ your area
+ and your number of main stars.

Indicated for those who want to have this data for easy access and also for the [unixporners](https://terminalroot.com/tags#unixporn) on duty!

---

# Installation
`starfetch` was written in [C++](https://terminalroot.com/tags#cpp), so you will need a [compiler](https://terminalroot.com/tags#gcc) and also [Git](https://terminalroot.com/tags#git) to compile and, consequently, install on your system.

To do this, just run the commands below:

{% highlight bash %}
git clone https://github.com/Haruno19/starfetch
starfetch cd
make
sudo make install
{% endhighlight %}
> Remove the cloned directory after installation, eg: `cd .. && rm -rf starfetch`

---

# Using
Once installed, just run the command:

{% highlight bash %}
starfetch
{% endhighlight %}

To get the *fetch* of a specific zodiac constellation use the `-n` parameter and then the name you want, example for Aries:
{% highlight bash %}
starfetch -n aries
{% endhighlight %}

Likely output:
{% highlight txt %}
┌───── A R I E S  ─────┐
│                      │
│                      │      Aries
│    ✦                 │      
│                      │      Quadrant: NQ1
│              ✦       │      Right ascension: 01h 46m 37.3761s to –03h 29m 42.4003s
│                      │      Declination: +31.2213154° to –10.3632069°
│                ✦     │      Area: 441 sq.deg. (39th)
│               ✦      │      Main stars: 4, 9
│                      │
│                      │
└──────────────────────┘
{% endhighlight %}

For more information use `starfetch --help` and access the [repository](https://github.com/Haruno19/starfetch).

---

# See too:
+ [Onefetch - Generate a fetch from your Git repository](https://terminalroot.com/onefetch-generate-a-fetch-from-your-git-repository/)
+ [5 Tools for you to use in your WM](https://terminalroot.com/5-tools-for-you-to-use-on-your-wm/)

