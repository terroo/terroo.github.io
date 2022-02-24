---
layout: post
title: "Meet sc-im, an 'Excel' for the terminal"
date: 2022-02-24 12:00:56
image: '/assets/img/terminal/sc-im.jpg'
description: 'Lightweight, fast and intuitive.'
tags:
- terminal
- ncurses
- tips
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**sc-im** is a spreadsheet program made with [ncurses](https://terminalroot.com/tags#ncurses) for [terminal](https://terminalroot.com/tags#terminal) .

**sc-im** is based on [sc](https://en.wikipedia.org/wiki/Sc_(spreadsheet_calculator)) a similar application developed by **James Gosling**, the creator of [Java] (https://terminalroot.com/tags#java).

Some of the features of sc-im are:
+ [Vim](https://terminalroot.com/tags#vim) style moves  to move between cells;
+ Undo and redo;
+ The number of lines can be expanded to 1,048,576 if desired;
+ CSV / delimited TAB / XLSX file import and export;
+ Import of ODS. Export from Markdown;
+ Key mappings;
+ Automatic backup;
+ Direct color support;
+ Graphics display;
+ Among many others.

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

# Installation
To install first you will need the dependencies:
+ [ncurses](https://terminalroot.com/tags#ncurses)
+ [bison](https://www.gnu.org/software/bison/)
+ [gcc](https://terminalroot.com/tags#gcc)
+ [make](https://terminalroot.com/tags#make)
+ [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
+ [git](https://terminalroot.com/tags#git)

Once installed, just clone, compile and install:

{% highlight sh %}
https://github.com/andmarti1424/sc-im
cd sc-im
make
sudo make install
{% endhighlight %}

# Some `sc-im` screenhosts

![sc-im 1](https://github.com/andmarti1424/sc-im/raw/main/screenshots/scim-plot-graph.gif?raw=true)

![sc-im 2](https://github.com/andmarti1424/sc-im/raw/main/screenshots/scim4.png?raw=true)

![sc-im 3](https://github.com/andmarti1424/sc-im/raw/main/screenshots/scimp3.png?raw=true)

---

For the installation manual go to [this link](https://github.com/jonnieey/Sc-im-Tutorial) and the [official repository on GitHub](https://github.com/andmarti1424/sc-im) .

