---
layout: post
title: "Listen to Music in Terminal with Spectrum"
date: 2023-04-25 19:29:29
image: '/assets/img/tui/spectrum.jpg'
description: 'Written with C++ and the FTXUI library.'
tags:
- cpp
- cppdaily
- tui
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

**Spectrum** is a console-based music player written in [C++](https://terminalroot.com/tags#cpp) and with the [FTXUI](https://terminalroot.com/create-graphical-programs-in-terminal-with-ftxui/) library, that is, you will have a [TUI](https://terminalroot.com/tags#tui) environment to view graphically the frequency of each part of your song.

---

# Installation
First of all you will need the following dependencies, example for [Ubuntu](https://terminalroot.com/tags#ubuntu):

{% highlight bash %}
sudo apt install build-essential libasound2-dev libavcodec-dev \
      libavfilter-dev libavformat-dev libfftw3-dev libswresample-dev
{% endhighlight %}

After that just clone the repository and compile:

{% highlight bash %}
git clone https://github.com/v1nns/spectrum.git
cd spectrum
cmake -S . -B build
{% endhighlight %}

Once compiled, you can test it without installing by running the command: `./build/src/spectrum`, but to install it on your system, run:
{% highlight bash %}
sudo cmake --install build
{% endhighlight %}
> Once installed, you can remove the cloned directory: `rm -rf spectrum/`

---

# Usage
To open Spectrum just run the command:
{% highlight bash %}
spectrum
{% endhighlight %}

+ Navigate using the directional arrows in the Box on the left side of the screen to choose and play the song with [ENTER];
+ Also use the *mouse* (if you want) to click on options such as: equalizer, play, stop, advance or rewind the music time and among others;
+ To exit press `q`.

---

# Screenshots
[![Spectrum Play](/assets/img/tui/spectrum-play.png)](/assets/img/tui/spectrum-play.png)
> Click on the image to view it in a higher resolution

---

[![Spectrum Equalizer](/assets/img/tui/spectrum-equalizer.png)](/assets/img/tui/spectrum-equalizer.png)
> Click on the image to view it in a higher resolution

---

We made a video about the [FTXUI](https://terminalroot.com/create-graphical-programs-in-terminal-with-ftxui/) library which can be seen at the address below:
## <https://terminalroot.com/create-graphical-programs-in-terminal-with-ftxui/>

For more information about Spectrum visit the [repository on GitHub](https://github.com/v1nns/spectrum).
