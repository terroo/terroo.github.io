---
layout: post
title: "Generate Automatic Motivational Phrases in Terminal"
date: 2020-01-16 16:16:49
image: '/assets/img/linux/linus-torvalds-phrase.jpg'
description: 'Was it Linux coaching? Not so much, there's the offensive mode too! 😁️'
featured-img: ../linux/linus-torvalds-phrase.jpg
tags:
- fortune
- terminal
- linux
---

> Was it Linux coaching? Not so much, there's the offensive mode too! 😁️

![Generate Automatic Motivational Phrases in Terminal](/assets/img/linux/linus-torvalds-phrase.jpg)

# Introduction

[fortune](http:www.redellipse.net/code/fortune) is a simple program that displays random, poignant, inspirational, silly or malicious phrases from a citation database. The fortune command line utility is part of the [games-misc/fortune-mod package](https://packages.gentoo.org/packages/games-misc/fortune-mod).

# Installation

Fortune is available from the repository of all **Linux**  distributions and all **BSD**. So to install use the same:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
emerge fortune-mod # Gentoo, Funtoo, ...
sudo apt install fortune # Debian, Ubuntu, Mint, ...
sudo pacman -S fortune-mod # Arch, Manjaro,...
sudo yum install fortune # Red Hat, CentOS, ...
sudo dnf install fortune # Fedora
{% endhighlight %}

On BSDs it is already installed by default! :)

# Use
To generate a sentence just run the command:
{% highlight bash %}
fortune
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

# Some options:

+ `fortune -a` - generates all sorts of sentences: long, short, offensive;
+ `fortune -o` - only generates offensive phrases, for those who like! Observação (Note, in Gentoo and Funtoo, you need to compile with the flag `USE="offensive"` for offensives to appear);
+ `fortune -l` - only long sentences;
+ `fortune -c` - only short sentences;
+ `fortune -m` - Only phrases that contain at least one word that matches the regex you pass; For more options use the manual: `man fortune`

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# More options
+ 1 - If you want every time you open a terminal, a phrase appears, just add it to your `echo 'fortune' >> ~/.bashrc` or the Shell configuration file you use.
+ 2 - If you want a window to appear every time you log in. Example if it is in GNOME:
+ Create a `phrase.desktop` and use, for example, Yad and create a script with `yad --title="Sentence of the day" --text="<big>$(fortune)</big>"` which will be called by **phrase.desktop** and add it to start in the Startup Applications option.
+ 3 - Install other mods that display phrases: [Star Wars](http://www.splitbrain.org/projects/fortunes/starwars), [South Park](http://eol.init1.nl/content/view/44/54/), [Simpsons](http://www.splitbrain.org/projects/fortunes/simpsons), [Linux Kernel](http://www.splitbrain.org/projects/fortunes/simpsons) and more!

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Thanks!
