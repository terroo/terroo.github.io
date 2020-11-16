---
layout: post
title: "Termshark: A Wireshark via Terminal"
date: 2020-11-16 10:52:45
image: '/assets/img/network/termshark.jpg'
description: 'A command line user interface, inspired by Wireshark'
featured-img: ../network/termshark.jpg
tags:
- network
- terminal
- go
---

![Termshark: A Wireshark via Terminal](/assets/img/network/termshark.jpg)

Termshark is a command line user interface, inspired by Wireshark.
Resources

+ Read pcap files or analyze active interfaces (with appropriate permissions)
+ Filter pcaps or live captures using Wireshark display filters
+ Reassemble and inspect TCP and UDP streams
+ View network conversations by protocol
+ Copy package ranges to the terminal clipboard
+ Written in Golang, it compiles into a single executable on each platform - downloads available for Linux, macOS, FreeBSD, Android (termux) and Windows.

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
First you need to install [Go](https://golang.org/), for that use the package manager of your distribution, examples:
{% highlight bash %}
emerge go # Gentoo, Funtoo, ...
sudo apt install go # Debian, Ubuntu, Mint, ...
sudo pacman -S go # Arch, Manjaro, ...
sudo dnf install go # Red Hat, CentOS, Fedora, ...
{% endhighlight %}

Also install the dependencies:

+ [tshark](https://www.wireshark.org/docs/man-pages/tshark.html) - command line network protocol analyzer, part of [Wireshark](https://wireshark.org/)
+ [tcell](https://github.com/gdamore/tcell) - a cell-based terminal management package, inspired by termbox
+ [gowid](https://github.com/gcla/gowid) - composition terminal user interface widgets, inspired by [urwid](http://urwid.org/), built in tcell

After that just use the `go` command to install:
{% highlight bash %}
go get github.com/gcla/termshark/v2/cmd/termshark
{% endhighlight %}

And include the path in your `$PATH` variable, example:
{% highlight bash %}
echo 'export PATH="${PATH}:~/go/bin/' | tee -a ~/.bashrc
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

# Example of use

Capture ping packets on the enp1s0 interface:
{% highlight bash %}
termshark -i eth0 enp1s0
{% endhighlight %}

For more information, run the command:
{% highlight bash %}
termshark -h
{% endhighlight %}

And visit the official address of the project: <https://github.com/gcla/termshark>


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
    
