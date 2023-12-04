---
layout: post
title: "Install this Terminal Emulator made with TypeScript"
date: 2023-12-04 15:18:06
image: '/assets/img/typescript/tabby.png'
description: 'Easy settings and even uses CSS for customization!'
tags:
- typescript
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')


---

**Tabby** is a [terminal emulator](https://terminalroot.com/the-10-best-terminal-emulators-for-your-linux/) available for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos) and [GNU/Linux](https://terminalroot.com /tags#gnulinux) for several architectures including: `x86` and `ARM`.

It is infinitely customizable to use [Shell](https://terminalroot.com/tags#shell) locally or via [SSH](https://terminalroot.com/tags#ssh) and Telnet.

---

# Installation
You can download it directly from [their repository releases page](https://github.com/Eugeny/tabby/releases/tag/v1.0.205). As I said, there are binaries for different architectures and [operating systems](https://terminalroot.com/tags/#sistemasoperacionais).

For example, in [distros](https://terminalroot.com/tags#distros) [GNU/Linux](https://terminalroot.com/tags#linux) you can use up to one AppImage:
> Example for: `x86_62`
{% highlight bash %}
wget -q https://github.com/Eugeny/tabby/releases/download/v1.0.205/tabby-1.0.205-linux-x64.AppImage
chmod +x tabby-1.0.205-linux-x64.AppImage
./tabby-1.0.205-linux-x64.AppImage
{% endhighlight %}
> It will now open and work!

For Windows, macOS and others you can also install through pre-compiled binaries: `.exe`, `.dmg`, `.deb` and others.

---

# Usage
Absolutely everything you do on other emulators is possible with Tabby, such as:
+ Change cursor type: `I-Beam`, `Block` and `Line`
+ Set color themes
+ Customize font
+...

If you click on the gear icon (⚙️ ) in the top right corner, and then click on `Appearance` at the end there is the possibility of inserting CSS in: `Custom CSS`. For example, to make the background transparent and with an image, add this CSS:
{% highlight css %}
.xterm-viewport {
    background-image: url("/path/to/image.jpg");
    background-repeat: no-repeat;
    background-size: auto 100vh;
    opacity: 0.2;
    z-index: 1;
    filter: blur(8px);
}
{% endhighlight %}

And many other customizations!

I installed it and I'm enjoying it, I even wrote this article on [Neovim](https://terminalroot.com/tags#neovim) opened by **Tabby**.

For more information access:
+ [Official Page](https://tabby.sh/)
+ [Official Tabby Repository](https://github.com/Eugeny/tabby)

