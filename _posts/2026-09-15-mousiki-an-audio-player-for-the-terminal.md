---
layout: post
title: "Mousiki: An Audio Player for the Terminal"
date: 2026-09-15 10:40:15
image: '/assets/img/cpp/mousiki.jpg'
description: "🔳 Made with C++"
tags:
- cpp
- tui
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Mousiki** is a **music player based on [TUI (Terminal User Interface)](https://terminalroot.com/tags#tui)**, meaning that instead of opening a traditional graphical interface, the entire experience takes place directly within the terminal.

It was developed in [C++](https://terminalroot.com/tags#cpp) and uses a relatively lean architecture. The project uses [CMake](https://terminalroot.com/tags#cmake) for compilation and C++17 as the language standard.


Among the available features are:

* Playback of locally stored music;
* Search and streaming of music online;
* Synced lyrics;
* Highlighting of the word currently being sung;
* FFT spectrum visualizer;
* Waveform;
* Disc animation;
* Playback queue;
* Shuffle;
* Repeat;
* Search and filtering;
* Volume control;
* Stream downloading;
* Customizable colors;
* Configurable keyboard shortcuts.

---

## Installation

Mousiki currently does not work like those traditional programs where you download an `.exe`, `.dmg`, or `.deb` and simply click "Install."

Installation is mainly based on **compiling the source code**.

The main requirements indicated by the project are:

* [Git](https://terminalroot.com/tags#git);
* [CMake](https://terminalroot.com/tags#cmake);
* [Compiler compatible with C++17](https://terminalroot.com/tags#gcc);
* [FFmpeg](https://terminalroot.com/tags#ffmpeg);
* yt-dlp;
* [Python 3](https://terminalroot.com/python);
* Python package `syncedlyrics`.

---

## [GNU/Linux](https://terminalroot.com/tags#gnulinux)

{% highlight bash %}
sudo apt update
sudo apt install git cmake build-essential ffmpeg yt-dlp python3 python3-pip
{% endhighlight %}

Then install the package used to fetch synced lyrics:

{% highlight bash %}
python3 -m pip install syncedlyrics
{% endhighlight %}

Mousiki's own `setup.sh` essentially performs this dependency installation process and then compiles the program.

Now clone the repository:

{% highlight bash %}
git clone https://github.com/itzender5820/mousiki.git
{% endhighlight %}

Enter the folder:

{% highlight bash %}
cd mousiki
{% endhighlight %}

On Debian/Ubuntu systems, there is a setup script:

{% highlight bash %}
bash setup.sh
{% endhighlight %}

After that, the executable should be located at:

{% highlight text %}
build/mousiki
{% endhighlight %}

To start it:

{% highlight bash %}
./build/mousiki
{% endhighlight %}

You can also install the executable into a system directory using `install, cmake --install, mv, ...` for example:
{% highlight bash %}
sudo mv ./build/mousiki /usr/bin/
{% endhighlight %}
---

## Usage
> Basic controls

The current default configuration defines several important shortcuts:

| Key       | Function                       |
| --------- | ------------------------------ |
| `↑` / `↓` | Navigate through the list      |
| `Enter`   | Play                           |
| `p`       | Play/Pause                     |
| `n`       | Next track                     |
| `b`       | Previous track                 |
| `←` / `→` | Rewind/Fast-forward            |
| `1`       | Increase volume                |
| `2`       | Decrease volume                |
| `r`       | Repeat                         |
| `m`       | Shuffle                        |
| `/`       | Search                         |
| `a`       | Add to queue                   |
| `d`       | Remove from queue              |
| `Tab`     | Switch between cards/panels    |
| `f`       | Filter by folder               |
| `c`       | Clear filter                   |
| `q`       | Quit                           |
| `y`       | Download stream                |

These shortcuts come from the default configuration file and can be modified.

---

For more information, visit the [repository](https://github.com/itzender5820/mousiki).
