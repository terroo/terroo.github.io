---
layout: post
title: "Listen to music in the cloud right from your Linux Terminal"
date: 2020-06-23 13:47:10
image: '/assets/img/media/tizonia.jpg'
description: 'Spotify, Google Play Music, SoundCloud, YouTube, TuneIn, iHeartRadio, Plex and Chromecast.'
featured-img: ../media/tizonia.jpg
tags:
- audio
- music
- terminal
---

![Listen to music in the cloud right from your Linux Terminal](/assets/img/media/tizonia.jpg)

Tizonia is a powerful cloud music player for the Linux terminal, with support for Spotify (Premium), Google Play Music (free and paid), SoundCloud, YouTube, TuneIn and iHeart radios, Plex servers and Chromecast devices. The world's first implementation of OpenMAX IL 1.2. Tizonia is free software written in C/C++.

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

Tizonia is available in the repository of most Linux distros as well as Ubuntu, Debian, Linux Mint, Arch Linux and others, and it is also possible to install via snap and Docker

If your system is Debian or Ubuntu, just run this command using the curl command:
{% highlight bash %}
curl -kL https://goo.gl/Vu8qGR | bash
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

# Using via Docker
> This step assumes that you already have Docker installed, if you don't, watch this video: [Definitive Docker Tutorial for BEGINNERS](https://en.terminalroot.com.br/definitive-docker-tutorial-for-beginners-ubuntu/)

Tizonia connects as a client directly to the PulseAudio host server and uses its configuration / devices to output the sound. This is possible by mapping the UNIX socket used by PulseAudio on the host in the container and configuring its use.

Save this script to a file named [docker-tizonia](https://github.com/tizonia/docker-tizonia)
{% highlight bash %}
#!/bin/bash
USER_ID=$(id -u);
GROUP_ID=$(id -g);
if uname -s | grep -iq "Darwin" ; then
  pulse_server=docker.for.mac.localhost
  runtime_dir="$HOME"
else
  pulse_server=unix:"${XDG_RUNTIME_DIR}/pulse/native"
  runtime_dir="${XDG_RUNTIME_DIR}/pulse"
fi
docker run -it --rm \
    -e PULSE_SERVER="$pulse_server" \
    --volume="$runtime_dir":"$runtime_dir" \
    --volume="${HOME}/.config/tizonia":/home/tizonia/.config/tizonia \
    --volume="${HOME}/.config/pulse/cookie":/home/tizonia/.config/pulse/cookie \
    --volume="${HOME}/.cache":/home/tizonia/.cache \
    --name tizonia \
    tizonia/docker-tizonia "$@";
{% endhighlight %}
Give permission and install:
{% highlight bash %}
chmod +x docker-tizonia
sudo install docker-tizonia /usr/local/bin
{% endhighlight %}
Example of use:
{% highlight bash %}
docker-tizonia --youtube-audio-mix-search "Queen Official"
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

> There will be a file in `$HOME/.config/tizonia`, if not, create it and give write permissions to it: `chmod a+wrx $HOME/.config/tizonia`

# Overview
+ Google Play Music
{% highlight bash %}
tizonia --help googlemusic
{% endhighlight %}
+ Youtube
{% highlight bash %}
tizonia --help youtube
{% endhighlight %}

# Conclusion

If you like the command line and enjoy listening to music online, you will probably fall in love with Tizonia's simplicity and cleanliness. With the ability to stream music and play local content, this open source software is one of my favorites, although the gapless feature currently does not work with Spotify.

One of the many advantages of command line software is that they are generally more economical with system resources. When playing audio stored locally, Tizonia consumes only 18 MB of RAM. Spotify streaming consumed 34 MB of RAM, while streaming with the official GUI client weighed 612 MB!
Tizonia links

+ Official address: [tizonia.org](https://tizonia.org/)
+ Support: [Documentation](https://docs.tizonia.org/), [GitHub](https://github.com/tizonia/tizonia-openmax-il), [Gitter](https://gitter.im/tizonia/Lobby)
+ Developer: Juan A. Rubio
+ License: GNU Lesser General Public License v3.0


