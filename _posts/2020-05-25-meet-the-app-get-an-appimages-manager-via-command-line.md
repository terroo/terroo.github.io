---
layout: post
title: "Meet the app-get - An AppImages Manager via Command Line"
date: 2020-05-25 19:51:20
image: '/assets/img/apps/app-get.jpg'
description: 'Manage your AppImages in a practical way and through the terminal.'
featured-img: ../apps/app-get.jpg
tags:
- app-get
- terminal
- linux
---

![Meet the app-get - An AppImages Manager via Command Line](/assets/img/apps/app-get.jpg)
> AppImages manager via command line

## Installation
{% highlight bash %}
git clone https://github.com/terroo/app-get up-app-get
cd up-app-get
./INSTALL && source ~/.bashrc
cd .. && rm -rf up-app-get/
{% endhighlight %}

## Using
{% highlight bash %}
usage: app-get [options] [package]

  Options:
    ---list            Lists all available packages
    --nocolor          Disable colors
    --update           Checks and updates this program
    --info [package]   Describes data for an available package
    --remove [package] Removes the informed package
    -h,--help          Show this content
    -v,--version       Show version

  Example, install qbittorrent: $ app-get qbittorrent
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Contributing
If you want to add a new package to the project, follow these steps:
1. Fork the project
2. Clone your fork
{% highlight bash %}
git clone https://github.com/[YOUR_USER]/app-get up-app-get
{% endhighlight %}
3. Edit the `lib/apps.list` file
{% highlight bash %}
vim up-app-get/lib/apps.list
{% endhighlight %}
4. This file has data separated by spaces per line. And each field has a certain information:

| command | name | category | version | Architecture | AppImage link | website | icon/.desktop automatic
|---|---|---|---|---|---|---|---|
| application command | name (usually with capital letters) | Category based on .desktop | Program version | 64 or 32 | AppImage link, use only the official project link, preferably from a Git repository | Inform the official website of the program | If when you run AppImage for the first time and it opens a box asking if you want to create the .desktop and the icon automatically, check `true`, but after testing it on your machine, it does not generate and is not automatically available from Dash your system, check `false` |

Example for the `FooBar` program:
{% highlight bash %}
foobar FooBar Utility;Graphics 1.0 64 https://github.com/foobar/FooBar.AppImage https://foobar.net false
{% endhighlight %}
> Add only those that you have tested on your machine.
5. Add a program icon in **PNG**, example: `foobar.png` format with **256x256** resolution to the directory: `data/icons/hicolor/256x256`
6. Submit a [Pull Request](https://bit.ly/prenlink)

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Report bugs
<https://github.com/terroo/app-get/issues>

## Uninstalation
{% highlight bash %}
git clone https://github.com/terroo/app-get up-app-get
cd up-app-get
./INSTALL remove
{% endhighlight %}

# Video
### The video does not have an English translation, however, you can enable and try to read the one created automatically by Youtube Artificial Intelligence.

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

<iframe width="1234" height="694" src="https://www.youtube.com/embed/F0rsjX7xoOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    
