---
layout: post
title: "Easily create terminal windows with this C++ library"
date: 2022-07-10 09:41:33
image: '/assets/img/cppdaily/imtui.jpg'
description: 'ImTUI is a library written in C++ with user-friendly and text-based interfaces out of the box.'
tags:
- cpp
- tui
- terminal
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

**ImTUI** is a library written in C++ with user-friendly and text-based interfaces out of the box.
> Available for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#window) and [GNU/Linux](https://terminalroot.com/tags#gnu) .

---

# Dependencies
+ [gcc/g++](https://terminalroot.com/tags#gcc)
+ [Make](https://terminalroot.com/tags#make)
+ [CMake](https://terminalroot.com/tags#cmake)
+ [Ncurses](https://terminalroot.com/tags#ncurses)
+ [Git](https://terminalroot.com/tags#git)

---

# Building
Clone and compile

{% highlight bash %}
git clone https://github.com/ggerganov/imtui --recursive
cd imtui
mkdir build && cd build
cmake ..
make
{% endhighlight %}

Still inside that build directory there are two binaries in `/bin` , just run them to test:
{% highlight bash %}
./bin/imtui-example-ncurses0
./bin/hnterm
{% endhighlight %}
> To exit you can also press `Ctrl + c`

---

For more information, access the official repository or watch a video below in Portuguese.

# <https://github.com/ggerganov/imtui>

---

<iframe width="1227" height="690" src="https://www.youtube.com/embed/ucYAJHuSi1A" title="Crie Facilmente Janelas no Terminal com essa Biblioteca C++" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
