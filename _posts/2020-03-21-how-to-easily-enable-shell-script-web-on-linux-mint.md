---
layout: post
title: "How to Easily Enable Shell Script Web on Linux Mint"
date: 2020-03-21 21:32:05
image: '/assets/img/shell/shell.jpg'
description: 'A CGI option for your Web Development.'
featured-img: ../shell/shell.jpg
tags:
- shellscript
- apache
- linuxmint
---

![How to Easily Enable Shell Script Web on Linux Mint - Apache Server](/assets/img/shellpro/shellscript-web.jpg)

One of the facilities for you to use [Shell Script](https://en.terminalroot.com.br/shell) for your web applications is that the implementation of several functionalities (Database Access, libraries, and mainly, availability of all commands UNIX) is very easy!

For many people, configuring the Apache server for this can be complicated, so to resolve this impasse, we developed a script that automatically enables [Shell Script](https://en.terminalroot.com.br/bash) in Apache in a simple and without wasting time!

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Procedure
First download the script
{% highlight bash %}
wget terminalroot.com.br/sh/enable-cgi.sh
{% endhighlight %}

Give execution permission
{% highlight bash %}
chmod + x enable-cgi.sh
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

And run: `./enable-cgi.sh` it will show you a *mini help*:
{% highlight bash %}
usage: enable-cgi.sh [flags]
flags:
     --custom  - For change directory to /var/www/html/sh/ (RECOMMENDED)
     --alias   - For sh alias to cgi-bin
     --default - The file test need to make manually: bit.ly/indexsh
[*]  Don't use 'sudo' and 'root'.
[**] Use this script only systems APT-based.
{% endhighlight %}

Then use it with the `--custom` parameter as **RECOMMENDED**:
{% highlight bash %}
./enable-cgi.sh --custom
{% endhighlight %}

And wait for the script to finish running and wait for it to automatically open your browser and display an example page!

## Watch The Video
{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/JTmYcQpIISU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
