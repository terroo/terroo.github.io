---
layout: post
title: "Install Turbo editor for C/C++ style Turbo Vision"
date: 2021-08-16 20:18:06
image: '/assets/img/cpp/turbo.png'
description: 'For those who like nostalgia!'
featured-img: ../cpp/turbo.png
tags:
- cpp
- cppdaily
---

![Install Turbo editor for C/C++ style Turbo Vision](/assets/img/cpp/turbo.png)

In today's *cpp::daily* I'll give you a hint of a nostalgic text editor!!!

A long time ago I tried to learn [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) and the editor I was referred to was [Turbo Vision](https://en.wikipedia.org/wiki/Turbo_Vision) and that in [Windows XP](https://en.wikipedia.org/wiki/Windows_XP) 😛 !!!

I didn't succeed in studying at that time, but I noticed that Turbo Vision was the darling of the time. Whether you're from that era or if you're not, but you're a [hipster](https://en.wikipedia.org/wiki/Hipster_(contemporary_subculture)) style or a *retro lover*, you'll enjoy Turbo which is an attempt to recreate the look of Turbo Vision.

Turbo is an experimental text editor for the terminal, based on Neil Hodgson's Scintilla code editing component and Turbo Vision application framework and uses the **NCURSES** library.

It was created to demonstrate the new features of Turbo Vision. In particular, it served as a testing ground for Turbo Vision's Unicode features.

As a text editor, Turbo is intended to be intuitive and easy to use. Usability and productivity are its other two big goals, although it hasn't gotten that far yet. And just because it's a Turbo Vision app, it offers a vintage look.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation
I tried to compile as I had in the project's *README.md*, but I got problems. I consulted the [issue](https://github.com/magiblot/turbo/issues/4) related to this and saw that the information is very dispersed and not conclusive.

So, I'm going to show you here in an updated way how I proceeded.

First have the dependencies installed, for example on a system that uses APT, it would be:

{% highlight bash %}
sudo apt install cmake build-essential git \
                 libfmt-dev libmagic-dev libgpm-dev \
                 libncursesw5 libncursesw5-dev clang \
                 pkg-config libxcb1-dev
{% endhighlight %}

Then you need to clone recursively
{% highlight bash %}
git clone --recursive https://github.com/magiblot/turbo
{% endhighlight %}

Next step is to enter the television directory, in the issue they inform the wrong path, so the right one is:
{% highlight bash %}
cd turbo/deps/tvision
{% endhighlight %}

And compile the tvision:
{% highlight bash %}
cmake . -B ./build && cmake --build ./build
{% endhighlight %}

Then go back to the root of the project and compile:
{% highlight bash %}
cd ../../../turbo
{% endhighlight %}

Run [CMake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/):
{% highlight bash %}
cmake .
{% endhighlight %}

And finally compile with [Make](https://en.terminalroot.com.br/how-to-create-a-makefile/):
{% highlight bash %}
make
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

The final torque is turbo and can be run: `./turbo` or installed, for example:
{% highlight bash %}
sudo cp turbo /usr/local/bin
{% endhighlight %}

Summarizing the steps in sequence are:
{% highlight bash %}
git clone --recursive https://github.com/magiblot/turbo
cd turbo/deps/tvision
cmake . -B ./build && cmake --build ./build
cd ../../../turbo
cmake .
make
./turbo
{% endhighlight %}

![Turbo](/assets/img/cpp/tubo-gentoo.png)

Cool, right?!

Turbo Repository: <https://github.com/magiblot/turbo>



    
