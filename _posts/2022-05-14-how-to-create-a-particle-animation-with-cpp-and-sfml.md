---
layout: post
title: "How to Create a Particle Animation with C++ and SFML"
date: 2022-05-14 10:47:15
image: '/assets/img/gamedev/particles-system.jpg'
description: 'I created a particle animation based on the SFML documentation tutorial and other tips I found on the internet and    tried to summarize it as much as possible'
tags:
- cpp
- cppdaily
- sfml
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

I created a **particle animation** based on the [SFML documentation](https://www.sfml-dev.org/tutorials/2.5/graphics-vertex-array.php) tutorial and other tips I found on the internet and tried to summarize it as much as possible to make it simpler to understand the whole process.

Knowing how to create a particle animation is important for many situations, for example, if you are creating a game that has a rocket, it could be the combustion animation that will appear in the tail, or a volcano and so on.

> Animations are not only used by games, but also by many other concepts such as: Introduction, Animation in Movies, and among others. I've made the code available on GitHub for anyone who wants to review it. If you want to test on your system, proceed as follows:

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

# Install the dependencies
+ [git](https://terminalroot.com/tags#git)
+ [gcc/g++](https://terminalroot.com/tags#gcc)
+ [GNU Make](https://terminalroot.com/tags#make)
+ [SFML](https://sfml-dev.org/)

---

# Building
Now just clone the repository, enter it and run:

{% highlight sh %}
git clone https://github.com/terroo/particle-system
cd particle-system
make
{% endhighlight %}

I also created a video by writing the code from scratch, however the video is in Brazilian Portuguese. But it is possible for you to watch the development of the code that is universal, or even use Youtube's automatic translation for your language.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/e3OkHPkN95Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


