---
layout: post
title: "Display images in Terminal with this application written in C++"
date: 2022-05-05 12:46:19
image: '/assets/img/cppdaily/tiv.jpg'
description: 'Can be implemented in different ideas'
tags:
- cpp
- cppdaily
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you have an idea in mind of some TUI mode app that needs to display images in the terminal, such as similar ones: [Ranger](https://ranger.github.io/), fetch,... the TerminalImageViewer can be a good alternative.

**TerminalImageViewer** is a small program made with [C++](https://terminalroot.com/tags#cpp) to display images in a (modern) terminal using ANSI RGB codes and unicode block graphics characters.

---

# Installation
First you will need the following dependencies installed on your system: [Git](https://terminalroot.com/tags#git), [gcc](https://terminalroot.com/tags#gcc), [GNU Make](https://terminalroot.com/tags#make) and [Image Magick](https://imagemagick.org/).

After that run the commands in order:

{% highlight sh %}
git clone https://github.com/stefanhaustein/TerminalImageViewer
cd TerminalImageViewer/src/main/cpp
make
sudo make install
{% endhighlight %}

You can also install via [Brew](https://terminalroot.com/homebrew-the-macos-package-manager-on-gnu-linux/) and [Snap](https://snapcraft.io/):

{% highlight sh %}
brew install tiv
sudo snap install --edge tiv
{% endhighlight %}

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

# Usage
If you just run the `tiv` command there will be a *help* for all available parameters:
{% highlight sh %}
had
Terminal Image Viewer v1.1.0

usage: tiv [options] <image> [<image>...]

  -0 : No block character adjustment, always use top half block char.
  -256 : Use 256 color mode.
  -c <num> : Number of thumbnail columns in 'dir' mode (3).
  -d : Force 'dir' mode. Automatically selected for more than one input.
  -f : Force 'full' mode. Automatically selected for one input.
  -help : Display this help text.
  -h <num> : Set the maximum height to <num> lines.
  -w <num> : Set the maximum width to <num> characters.
  -x : Use new Unicode Teletext/legacy charactery (experimental)
{% endhighlight %}

The most basic way is to run the `tiv` command and indicate the path of the image, for example:
{% highlight sh %}
I had image.jpg
{% endhighlight %}

Another example, limiting the width to *40px* and the height will be scaled proportionately:

{% highlight sh %}
tiv -w 40 image.jpg
{% endhighlight %}

Example:

![tiv -w 40](/assets/img/cppdaily/tiv-w40.png)

There is also a version in [Java](https://terminalroot.com/tags#java), but it is outdated and not compiling.

For more information go to [repository](https://github.com/stefanhaustein/TerminalImageViewer) .

