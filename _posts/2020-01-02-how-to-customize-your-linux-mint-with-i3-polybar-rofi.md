---
layout: post
title: "How to Customize Your Linux Mint with i3 + Polybar + Rofi"
date: 2020-01-02 12:19:01
image: '/assets/img/wm/linuxmint-polybar-shellscript-1360.jpg'
description: 'A shell script that transforms automatically.'
featured-img: ../wm/linuxmint-polybar-shellscript-1360.jpg
tags:
- terminalroot
- shellscript
- mint
- ubuntu
- apt
- debian
---

![How to Customize Your Linux Mint with i3 + Polybar + Rofi](/assets/img/wm/linuxmint-polybar-shellscript-1360.jpg)

It also works on Ubuntu and Debian.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

### 1. Installing the dependencies
First you need to install i3, i3-wm and i3status:
{% highlight bash %}
sudo apt install i3 i3-wm i3status
{% endhighlight %}

### 2. Login to i3
After the installation is complete, log out and log into i3 and press ENTER and then ENTER again to accept the default i3 settings if you wish.

Then open the **Super + ENTER** terminal and run the following commands:
{% highlight bash %}
wget terminalroot.com.br/sh/aptporn
chmod +x aptporn
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

### 3. Using the help
{% highlight bash %}
./aptporn

usage: aptporn [flags]

  Options:

    --install          No update system
    --install-all      Update all system
    --dep              Only install dependencies
    --version,-v       Show version
    --help,-h          Show this is message

* Marcos Oliveira - <terminalroot.com.br> - APTPORN 0.1
{% endhighlight %}


### 4. Installation
{% highlight bash %}
./aptporn --install
{% endhighlight %}

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

### 5. Final
Then enter your sudo password and wait for the script to finish executing that everything will be done automatically!

Any questions left? Then watch the video:

{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/EBn5coWv1_g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

More screenshot:

![Ubuntu aptporn](/assets/img/wm/ubuntu.jpg)
