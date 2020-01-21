---
layout: post
title: "How to Install macOS on VirtualBox on Linux"
date: 2020-01-21 17:11:07
image: '/assets/img/tips/macos-virtualbox-no-linux.jpg'
description:
featured-img: ../tips/macos-virtualbox-no-linux.jpg
tags:
- macos
- linux
- virtualbox
---

![How to Install macOS on VirtualBox on Linux](/assets/img/tips/macos-virtualbox-no-linux.jpg)

To be able to install [macOS](https://www.apple.com/br/mac/) on [Linux](https://en.wikipedia.org/wiki/Linux) it is important to have [VirtualBox](https://www.virtualbox.org/) installed. Then download the macOS image in .vdi and run a script in Shell.

> Remembering that this tip is for [macOS Sierra](https://www.apple.com/br/macos/high-sierra/).

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# First download the image

<a href="http://bit.ly/2tsHn0B" target="_blank_">
    <button type="button" class="btn btn-primary btn-lg">Download macOS .vdi</button>
</a>

# Run this script
> It is necessary to obey the created name of the virtual machine to work.

Copy and paste in a text editor and save with the name you want, eg `vim script.sh`

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
#!/bin/bash
# Script to make Mac OS X Sierra work on the Virtual Machine on Linux
VBoxManage modifyvm "MacOsSierra" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
VBoxManage setextradata "MacOsSierra" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac11,3"
VBoxManage setextradata "MacOsSierra" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage setextradata "MacOsSierra" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
VBoxManage setextradata "MacOsSierra" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage setextradata "MacOsSierra" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
{% endhighlight %}

# Give execute permission and execute
> Only after creating the virtual machine and adding the .vdi

{% highlight bash %}
chmod +x script.sh
./script.sh
{% endhighlight %}

If it doesn't work try to run one command at a time.

If you have any questions, see the video below. Remembering that the video is in Portuguese, but you can understand the steps just by viewing. Or even enabling subtitles.

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

{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/2B8Q6IWvVa8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
