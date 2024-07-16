---
layout: post
title: "Lolcat C++, the lolcat command but faster"
date: 2024-07-16 10:15:55
image: '/assets/img/commands/lolcat-cc.jpg'
description: "🌈 There is a video where you can see the big difference!"
tags:
- commands
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

With the command [lolcat](https://terminalroot.com.br/2015/05/divirta-se-colorindo-seu-terminal.html) you can color your terminal outputs in a fun way.

However, the original `lolcat` command is very slow, but the good news is that there is an alternative: **Lolcat CC**!

In this video you can see the difference between `lolcat` and `lolcat-cc`:

<iframe width="1253" height="705" src="https://www.youtube.com/embed/vGjqibfE2yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard- write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


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

## Installation
To install it, just use [git](https://terminalroot.com.br/tags#git) to clone and a compiler: [gcc](https://terminalroot.com.br/tags#gcc) or [clang](https://terminalroot.com.br/tags#clang) to compile, in addition to [GNU Make](https://terminalroot.com.br/tags#make):

{% highlight bash %}
git clone https://github.com/n-ham/lolcat-cc
cd lolcat-cc
make
{% endhighlight %}

After compiling, install it on your system, for example:
{% highlight bash %}
sudo install -v lolcat-cc /usr/local/bin/
{% endhighlight %}

And test using the output of any command for it, examples:
{% highlight bash %}
cat main.cpp | lolcat-cc
ls | lolcat-cc
ping -c 4 terminalroot.com | lolcat-cc
{% endhighlight %}

For more information use the help:
{% highlight bash %}
lolcat-cc -h
{% endhighlight %}

And also visit the [Lolcat CC GitHub repository](https://github.com/n-ham/lolcat-cc)
