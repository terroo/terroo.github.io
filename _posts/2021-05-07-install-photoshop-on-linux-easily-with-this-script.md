---
layout: post
title: "Install Photoshop on Linux easily with this script"
date: 2021-05-07 12:39:57
image: '/assets/img/tips/setup-photoshopcc.png'
description: 'It may help.'
featured-img: ../tips/setup-photoshopcc.png
tags:
- linux
- tips
---

![Install Photoshop on Linux easily with this script](/assets/img/tips/setup-photoshopcc.png)

Photoshop CC v19 installer for Linux is a [Bash](https://en.terminalroot.com.br/meet-a-docker-written-with-shell-script/) script that helps you install Photoshop CC version 19 on your [Linux](https://en.terminalroot.com.br/the-6-best-network-scanners-for-linux/) machine using WINE behind the scenes and configures some components needed for the best performance.

# Features
+ Download the necessary components and install them (`vcrun`, `atmlib`, `msxml`…)
+ Download installer photoshop.exe
+ Creates the Photoshop command and a desktop shortcut
+ WINE dark mode
+ Supports graphics cards like (intel, Nvidia)
+ Save downloaded files to your cache directory
+ It's free and you won't need any license keys
+ Works on any Linux distribution

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Dependencies
+ `git`
+ `wine`
+ `wine64`
+ `winetricks`
+ `md5sum`
> Example on [Arch Linux](https://en.terminalroot.com.br/customize-lightdm-on-arch-linux/)
{% highlight bash %}
sudo pacman -S wine winetricks
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

# Instalation
Just clone/download, give permission to run and run the script:
{% highlight bash %}
git clone https://github.com/Gictorbit/photoshopCClinux.git
cd photoshopCClinux
chmod +x setup.sh
./setup.sh
{% endhighlight %}

During installation, pay attention to script messages.

> **Note**: Make sure the operating system version in wine is on Windows 7 .

![Install Photoshop on Linux easily with this script](/assets/img/tips/photoshop-no-linux.jpg)

# Analyze
This information was taken from the script repository. I didn't particularly test it and I don't intend to, I feel good about [GIMP](https://www.gimp.org/), but as some people ask me for this tip, I decided to post it. But remember to contribute to the project by reporting [issues](https://github.com/Gictorbit/photoshopCClinux/issues) or even improving the code.

Project link: https://github.com/Gictorbit/photoshopCClinux.

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




