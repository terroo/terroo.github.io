---
layout: post
title: "Download Youtube-dl in Two images"
date: 2020-10-24 14:45:43
image: '/assets/img/code/ytdl.jpg'
description: 'They destroyed YouTube-DL, but all is not lost.'
featured-img: ../code/ytdl.jpg
tags:
- hacker
- encrypted
- downloads
---

![Download Youtube-dl in Two images](/assets/img/code/ytdl.jpg)

Yesterday (October 23, 2020), one of the best tools to download almost all videos from the internet has its repository and its forks removed due to copyright, you can see the DMCA bot informing [this link](https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md).

But calm down, all is not lost, there is a way for you to get it by downloading only two images, like this:

# Download the images:
{% highlight bash %}
wget https://terminalroot.com.br/downs/ytdl1.png
wget https://terminalroot.com.br/downs/ytdl2.png
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

# And run these commands:
{% highlight bash %}
convert -depth 8 ytdl1.png rgb:yt_dl1.part
convert -depth 8 ytdl2.png rgb:yt_dl2.part
cat yt_dl1.part yt_dl2.part > yt_dl-2020.9.20.tar.gz
{% endhighlight %}

# A [gzip](https://en.terminalroot.com.br/how-to-extract-multiple-compressed-formats-with-a-single-command/) file will be generated and then just unzip it:
{% highlight bash %}
tar zxvf yt_dl-2020.9.20.tar.gz
{% endhighlight %}

Ready! The Youtube-DL code is already on your machine!

If you want to facilitate use this script: `vim ytdl.sh`
{% highlight bash %}
#!/usr/bin/env bash
convert -depth 8 ytdl1.png rgb:yt_dl1.part
convert -depth 8 ytdl2.png rgb:yt_dl2.part
cat yt_dl1.part yt_dl2.part > yt_dl-2020.9.20.tar.gz
tar zxvf yt_dl-2020.9.20.tar.gz
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

And run: `bash ytdl.sh`

Alternatively you have some repositories on other platforms like the one from GitLab, although it is not as up to date as the images.

This tip was from the hacker: [cat /dev/spooky](https://twitter.com/GalacticFurball/status/1319765986791157761)

# Useful links
+ <https://rawpixels.net/>
+ <https://en.wikipedia.org/wiki/AACS_encryption_key_controversy>
+ <http://decss.zoy.org/>




    
