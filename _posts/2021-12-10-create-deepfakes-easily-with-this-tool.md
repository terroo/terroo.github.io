---
layout: post
title: "Create Deepfakes Easily With This Tool"
date: 2021-12-10 14:34:59
image: '/assets/img/ai/deepfake.jpg'
description: 'Written in Python and works on Linux, Windows and macOS.'
featured-img: ../ai/deepfake.jpg
tags:
- ai
- python
---

![Create Deepfakes Easily With This Tool](/assets/img/ai/deepfake.jpg)

If you want to create some cool **deepfakes** and spread it across the internet, this is definitely the software for you.

Faceswap is the software that create Deepfakes from videos and images, it is cross platform and open source.

# Installation
You can install it on [Linux](https://en.terminalroot.com.br/list-of-30-modern-alternatives-to-unix-commands/), [Windows](https://en.terminalroot.com.br/top-5-best-git-clients-for-linux-mac-and-windows/) and [macOS](https://en.terminalroot.com.br/how-to-install-macos-on-virtualbox-on-linux/).

But first you will need some prerequisites, like:

+ Your machine needs to have a good CPU and amount of memory, the basic would be an **Intel i5** with **8GB** of RAM memory.
+ You will need to install [Anaconda](https://www.anaconda.com/download/);
+ And also [Git](https://en.terminalroot.com.br/onefetch-generate-a-fetch-from-your-git-repository/)

If you are on Windows, restart your computer before opening Anaconda.

After that, open Anaconda and proceed as follows:


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


+ Open Anaconda Navigator
+ Select "Environments" on the left side
+ Select "Create" at the bottom
+ In the pop-up:
  - Name it: change face
  - IMPORTANT: Select python version 3.8
  - Click "Create" (this may take a while as you will need to download Python)

![Anaconda Installer](https://camo.githubusercontent.com/f5fbd98f6a62f3109357571595cc1cc7047652c74e7e3622e9d9e7132bd63cb8/68747470733a2f2f692e696d6775722e636f6d2f434c49444466612e706e67)
To enter the virtual environment:
+ Open Anaconda Navigator
+ Select "Environments" on the left side
+ Click the ">" arrow next to the face change environment and select "Open Terminal"

![Virtual Anaconda](https://camo.githubusercontent.com/40cc838558b8980f58a1c97cec4eb21f94530e08457b6f050c16932e852aae82/68747470733a2f2f692e696d6775722e636f6d2f724b53713250642e706e67)

After that, just clone, run the Faceswap installer:

{% highlight sh %}
git clone --depth 1 https://github.com/deepfakes/faceswap.git
cd faceswap
python setup.py
{% endhighlight %}

# Use
Once installed, just open Faceswap with a graphical interface:

{% highlight sh %}
python faceswap.py gui
{% endhighlight %}

![Faceswap](/assets/img/ai/faceswap.jpg)

The program is very intuitive, but I would advise you to read [these instructions](https://github.com/deepfakes/faceswap/blob/master/USAGE.md) to get better acquainted with Faceswap.

