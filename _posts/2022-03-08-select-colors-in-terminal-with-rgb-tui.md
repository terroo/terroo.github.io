---
layout: post
title: "Select Colors in Terminal with RGB-TUI"
date: 2022-03-08 11:16:56
image: '/assets/img/cpp/rgb-tui.png'
description: 'A terminal color picker written in C++'
tags:
- cpp
- cppdaily
- graphics
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

There are several *online* services and places where you can select colors either **RGB** or **Hexadecimal**, or even using [GIMP](https://terminalroot.com/tags#gimp) or any other similar software. However, having this service in [terminal](https://terminalroot.com/tags#terminal) is really notorious!

**rgb-tui** is a color picker written in [C++](https://terminalroot.com/tags#cpp) that is easy to install and use.

---

# Installation
The cool thing is that you just install the binary and everything is fine.

Just run the commands below:

{% highlight sh %}
wget https://github.com/ArthurSonzogni/rgb-tui/releases/download/v1.1/rgb-tui-1.0.0-Linux.tar.gz
tar zxvf rgb-tui-1.0.0-Linux.tar.gz
sudo install -v rgb-tui-1.0.0-Linux/bin/rgb-tui /usr/local/bin/
{% endhighlight %}

To use it, just run the command:

{% highlight sh %}
rgb-tu
{% endhighlight %}

You can select the color range and copy by holding **Shift** and selecting the Hexadecimal or RGB color to use in your project.

See the GIF below:

![rgb-tui](https://github.com/ArthurSonzogni/rgb-tui/raw/master/demo.webp)

> To exit press **Ctrl + c** .

You can still install using Snap, example:

{% highlight sh %}
sudo snap install rgb-tui
{% endhighlight %}

For more information, visit the [repository](https://github.com/ArthurSonzogni/rgb-tui/) .
