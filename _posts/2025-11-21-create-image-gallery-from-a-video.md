---
layout: post
title: "Create Image Gallery from a Video"
date: 2025-11-21 20:03:10
image: '/assets/img/cpp/vig.jpg'
description: "🎞️ The application I created with C++ and FFmpeg to make it easier to remember parts of videos."
tags:
- cpp
- ffmpeg
- tips
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

I tend to watch a lot of [movies](https://x.com/TerminalRootTV/status/1974127375618302448). Although I watch many online, there are others that I download from the internet, often because the streaming provider I use doesn't have a specific title I want available.

And I always create an image gallery using software. But there are times when I save movies, watch them, and later want to remember a specific part to confirm if I've really watched it.

When there are many movies and I want to create galleries, I needed to do it manually via a [graphical interface](https://terminalroot.com/tags#gui), which took a lot of time. That's when I got the idea to create: `vig`.

`vig` is a [command-line](https://terminalroot.com/tags#commands) utility written in [C++](https://terminalroot.com/tags#cpp) that uses the libraries: [FFmpeg](https://terminalroot.com/tags#ffmpeg) and [stb](https://github.com/nothings/stb).

It creates galleries easily and quickly. I used to use **Totem** because it had command-line capabilities, but they removed the [terminal](https://terminalroot.com/tags#terminal) utility a few years ago. I even made [this post in 2015](https://terminalroot.com/2015/08/como-criar-uma-galeria-de-fotos-pelo_19.html) showing how to use it, not to mention it has many limitations, such as only creating galleries with a maximum of 30 images and other details.

With `vig`, no: you can create the quantity and combination you want: `1x1` (1 image), `4x4` (16 images), `5x3` (15 images), `10x10` (100 images), and so on.

Currently, it's only available for [Unix-like](https://terminalroot.com/tags#unix) systems, but in the near future I will create a version for [Windows](https://terminalroot.com/tags#windows) using [ffpp](https://terminalroot.com/how-to-use-ffmpeg-with-cpp-windows-and-gnu-linux/). But Windows has a nice alternative, if I'm not mistaken the name is: **MPC-HC**, but I don't know if it also works via command line.

Below we'll see how to compile and install it on your machine!

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

## Dependencies
Obviously, first of all you will need some basic dependencies, besides [C++23](https://terminalroot.com/how-to-install-gcc-14-and-use-cpp23/), [Git](https://terminalroot.com/tags#git), and [CMake](https://terminalroot.com/tags#cmake), the basics really.

What you really need is to use your package manager to install: FFmpeg. The stb library is not needed as it's already incorporated into the code.

Examples:

APT:
{% highlight bash %}
sudo apt update
sudo apt install \
    libavformat-dev \
    libavcodec-dev \
    libavutil-dev \
    libswscale-dev \
    libswresample-dev \
    libavdevice-dev
{% endhighlight %}

Pacman:
{% highlight bash %}
sudo pacman -S ffmpeg
{% endhighlight %}

---

## Compile and Install
Then just use CMake to compile and install:
> After cloning the project!

{% highlight bash %}
git clone https://github.com/terroo/vig
cd vig
cmake . -B build
cmake --build build
sudo cmake --install build
cd ..
rm -rf vig
{% endhighlight %}

---

## Usage
Below are simple examples to generate your galleries.
> The images are generated in the same directory where you executed `vig`, with the following filename format:
>
> **gallery-[date]-[time]-[video-name].jpg**

Examples:

{% highlight bash %}
# Basic
vig video.mp4

# Generate 4 cols and rows = 16 frames
vig --res=4x4 video.mp4

# Generate 5 cols x 3 rows = 15 frames
vig --res=5x3 video.mp4

# Help
vig --help
{% endhighlight %}

---

If you want to uninstall, just run:

{% highlight bash %}
sudo rm $(which vig)
{% endhighlight %}

---

Oh! And don't forget to leave your ⭐ on the [`vig` repository on GitHub](https://github.com/terroo/vig).

