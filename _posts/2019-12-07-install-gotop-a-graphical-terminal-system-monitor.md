---
layout: post
title: "Install gotop - A graphical terminal system monitor"
date: 2019-12-07 12:30:58
image: '/assets/img/terminal/gotop.jpg'
description: 'Written in Go and available for Linux and macOS.'
featured-img: ../terminal/gotop.jpg
tags:
- gotop
- terminal
- linux
- macos
---

![Install gotop - A graphical terminal system monitor](/assets/img/terminal/gotop.jpg)

[gotop](https://github.com/cjbassi/gotop/) is a system monitor that runs through the terminal for Linux and macOS. The software is inspired by gtop and [vtop](https://github.com/MrRio/vtop), but while these two utilities use Node.js, gotop is written in [Go](https://golang.org/).

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

## Installation

There are several ways, see below, the options

+ Debian, Ubuntu and Linux Mint
{% highlight bash %}
wget https://github.com/cjbassi/gotop/releases/download/3.0.0/gotop_3.0.0_linux_amd64.deb
sudo dpkg -i gotop_3.0.0_linux_amd64.deb
{% endhighlight %}

+ RedHat, CentOS e Fedora
{% highlight bash %}
wget https://github.com/cjbassi/gotop/releases/download/3.0.0/gotop_3.0.0_linux_amd64.rpm
sudo rpm -ivh gotop_3.0.0_linux_amd64.rpm
{% endhighlight %}

+ Arch Linux via AUR (gotop, gotop-bin, ou gotop-git)
+ FreeBSD
{% highlight bash %}
pkg install gotop
{% endhighlight %}

Or for any distro, download with wget
{% highlight bash %}
wget https://github.com/cjbassi/gotop/releases/download/3.0.0/gotop_3.0.0_linux_amd64.tgz
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

or with Go itself if you have installed
{% highlight bash %}
go get github.com/cjbassi/gotop
{% endhighlight %}

Unzip the TGZ
{% highlight bash %}
tar zxvf gotop_3.0.0_linux_amd64.tgz
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

You can already run with the command: `./gotop` and if you want it to be executed via command, use your personal dir without sudo, that's how I did it!
{% highlight bash %}
mkdir -p ~/.local/bin
mv gotop ~/.local/bin/
# If this directory is not your PATH, include
echo 'PATH="${PATH}:$HOME/.local/bin/"' >> ~/.bashrc
source ~/.bashrc
gotop
{% endhighlight %}

See help for key shortcuts: `gotop --help`

Official page gotop: <https://github.com/cjbassi/gotop>
![Install gotop - A graphical terminal system monitor](/assets/img/terminal/gotop.gif)

Enjoy!
