---
layout: post
title: "duf - A more complete alternative to the df command"
date: 2021-09-28 12:09:18
image: '/assets/img/commands/duf.jpg'
description: 'A modern utility with TUI output.'
featured-img: ../commands/duf.jpg
tags:
- commands
- terminal
---

![duf - A more complete alternative to the df command](/assets/img/commands/duf.jpg)

If you are used to using `df` and/or the `du` command, but would like something more complete, `duf` is a perfect solution that replaces both in the best possible way.

`duf` meaning free disk/utility usage. It works on Linux, BSD and Windows systems. It has the following features:

+ Easy to use
+ Color display
+ Adjust the height and width according to the terminal's resize movement
+ Sorts data according to our need
+ Filters and groups
+ JSON outputs and others.

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
It is available in the repository of most package managers of various distros, examples:

+ Arch Linux via [AUR](https://en.terminalroot.com.br/how-to-install-aur-packages-via-yay-on-arch-linux/): `yay -S duf`
+ nixOS: `nix-env -iA nixpkgs.duf`
+ [Ubuntu](https://en.terminalroot.com.br/ubuntu-christian-an-ubuntu-linux-for-christians/) or any distro with snap: `sudo snap install duf-utility`
+ FreeBSD: `pkg install duf`
+ [macOS](https://en.terminalroot.com.br/how-to-install-macos-on-virtualbox-on-linux/): `brew install duf`
+ Windows: `choco install duf` or `scoop install duf`
+ Among others that can be found [here](https://github.com/muesli/duf/releases).

Or compiling from source

First of all you will need Go and [Git](https://en.terminalroot.com.br/onefetch-generate-a-fetch-from-your-git-repository/) installed. And then run the following commands:

{% highlight sh %}
git clone https://github.com/muesli/duf
cd duf
go build
sudo cp duf /usr/local/bin/
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

# Use
Usage is as intuitive as `df`, examples:

Show usage of connected devices
{% highlight sh %}
duf
{% endhighlight %}

Show a specific directory
{% highlight sh %}
dub /home/$USER/Downloads
{% endhighlight %}

Use a specific theme
{% highlight sh %}
duf -theme dark
{% endhighlight %}
> Or light.

And for more info run `duf --help`.

Visit the [duf repository](https://github.com/muesli/duf).


    
