---
layout: post
title: "Darktile - A GPU-rendered terminal"
date: 2022-04-12 08:07:07
image: '/assets/img/terminal/darktile.jpg'
description: 'Highlights links in the terminal, renders unicode and so on.'
tags:
- terminal
- go
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Darktile](https://github.com/liamg/darktile) is a GPU-rendered terminal emulator (written in [Go](https://terminalroot.com/tags#go)) designed for windows side by side.

Among its features are also:
+ Unicode support
+ Variety of themes available (or create your own!)
+ Compiled powerline font
+ Works with your favorite monospaced TTF/OTF fonts
+ Font ligatures (disable them if you are not a ligature fan)
+ Screenshots with a single key shortcut
+ Window transparency (0-100%)
+ Customizable cursor (most popular image formats supported)

---

# Installation
First, make sure you have the dependencies:
+ [curl](https://terminalroot.com.br/tags#curl)
+ `xorg-dev`
+ `libgl1-mesa-dev`

Then just run the command:
{% highlight sh %}
curl -s "https://raw.githubusercontent.com/liamg/darktile/main/scripts/install.sh" | sudo bash
{% endhighlight %}

Once installed to open just run the command:
{% highlight sh %}
darktile
{% endhighlight %}

Or if you are using [bspwm](https://terminalroot.com.br/tags#bspwm) create an example shortcut in `$HOME/.config/sxhkd/sxhkdrc`:
> Open `darktile` with the key combination: **Super + shift + Enter** .
{% highlight sh %}
# darktile
super + shift + Return
    darktile
{% endhighlight %}

---

# Settings
To change Darktile settings, create/edit a file at the address: `$HOME/.config/darktile/config.yml`.
> Configuration example:
{% highlight sh %}
opacity: 1.0 # Window opacity: 0.0 is fully transparent, 1.0 is fully opaque
font:
  family: "" # Font family. Find possible values ​​for this by running 'darktile list-fonts'
  size: 16# Font size
  dpi: 72 # dpi
  ligatures: true # Enable font ligatures e.g. render '≡' instead of '==='
cursor:
  image: "" # Path to an image to render as your cursor (defaults to standard rectangular cursor)
{% endhighlight %}

Below is an example GIF of using Darktile:
> When hovering over a link, it highlights the link with information.

![Darktile GIF](https://github.com/liamg/darktile/raw/main/demo.gif)

For more information, visit the Darktile repository on GitHub:
### <https://github.com/liamg/darktile>

