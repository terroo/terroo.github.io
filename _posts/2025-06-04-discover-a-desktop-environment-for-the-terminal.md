---
layout: post
title: "Discover a Desktop Environment for the Terminal"
date: 2025-06-04 17:05:21
image: '/assets/img/tui/vtm.jpg'
description: "🚀 This C++ TUI application is impressive!"
tags:
- tui
- terminal
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The **vtm** project is a text-based desktop environment written in [C++](https://terminalroot.com/tags#cpp) that uses a [TUI](https://terminalroot.com/tags#tui) (Text-based User Interface) grid to represent the entire user interface as a mosaic of text cells in the [terminal](https://terminalroot.com/tags#terminal).

**Key Features:**

* **Text-Based Desktop Environment:** Allows running multiple console applications simultaneously, organized in windows within a textual desktop environment.

* **Flexible Rendering:** The TUI grid can be displayed in its own GUI window or in compatible text terminals.

* **Cross-Platform Support:** Compatible with [Windows](https://terminalroot.com/tags#windows) (8.1+), [GNU/Linux](https://terminalroot.com/tags#gnulinux), [macOS](https://terminalroot.com/tags#macos), [FreeBSD](https://terminalroot.com/tags#freebsd), [NetBSD](https://terminalroot.com/tags#bsd), and [OpenBSD](https://terminalroot.com/tags#openbsd).

* **Advanced Configuration:** Uses plain [XML](https://terminalroot.com/how-to-use-tmxlite-for-game-maps-windows-and-linux/) config files, supporting inheritance and dynamic references.

---

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

* **Built-in Applications:** Includes internal apps such as a teletype console, log viewer, and more, all running inside the textual environment.

* **MIT License:** Open-source code under the MIT license.

**Additional Resources:**

* **Documentation:** Available in the repository, covering architecture, [command-line](https://terminalroot.com/tags#comando) options, [UI](https://terminalroot.com/tags#gui), configuration, and more.

* **Binary Downloads:** Available for various platforms, including different Windows architectures, \*nix-like systems, and macOS.

Installation example for [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#gnulinux) `x86_64` distros:

{% highlight bash %}
wget -q https://github.com/directvt/vtm/releases/latest/download/vtm_linux_x86_64.zip
unzip vtm_linux_x86_64.zip
tar xf vtm_linux_x86_64.tar # The .tar is inside the zip
sudo install -v vtm /usr/local/bin/
rm vtm_linux_x86_64.zip vtm_linux_x86_64.tar
{% endhighlight %}

Then run:

{% highlight bash %}
vtm
{% endhighlight %}

![vtm run](./vtm-print.jpg)

For more information, run:

{% highlight bash %}
vtm --help
{% endhighlight %}

---

Project repository: [https://github.com/directvt/vtm](https://github.com/directvt/vtm)

## 🎥 Watch the demo video

<iframe width="800" height="450" src="https://www.youtube.com/embed/kofkoxGjFWQ" title="vtm. Tiling Window Manager with Drag&amp;Drop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 👓 See also

<iframe width="1271" height="715" src="https://www.youtube.com/embed/ucYAJHuSi1A" title="Crie Facilmente Janelas no Terminal com essa Biblioteca C++" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


