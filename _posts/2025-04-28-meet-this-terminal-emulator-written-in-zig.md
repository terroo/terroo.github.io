---
layout: post
title: "Meet this terminal emulator written in Zig"
date: 2025-04-28 13:09:45
image: '/assets/img/terminal/ghostty.png'
description: "🚀 Multiplatform, fast and feature-rich."
tags:
- zig
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Ghostty is a fast and feature-rich multiplatform terminal emulator developed in [Zig](https://terminalroot.com/tags#zig). Its distinguishing feature is that it combines performance, a native interface and compliance with modern standards, without compromising any of these aspects.

### Main Features
- **Performance**: Uses GPU rendering (OpenGL on [GNU/Linux](https://terminalroot.com/tags#gnulinux), Metal on [macOS](https://terminalroot.com/tags#macos)), maintaining *60fps* even under intense load. In benchmarks, it outperforms terminals such as *iTerm* and *Terminal.app* in I/O speed.

- **Native Interface**: On macOS, it is a complete [SwiftUI](https://terminalroot.com/tags#swift) application with support for menus, preferences, and system integration. On Linux, it uses GTK4 and libadwaita, offering a visual experience consistent with the environment.

- **Standards Compliance**: It extensively implements [xterm](https://terminalroot.com/tags#terminal) control sequences, in addition to supporting modern protocols such as [Kitty](https://terminalroot.com/tags#terminal) graphics and keyboard. It is compatible with existing [shells](https://terminalroot.com/tags#shell) and tools.

- **Advanced Features**: Support for multiple windows, tabs, screen splitting, typographic ligatures, and inline graphics rendering.

- **Embeddable Library**: Provides `libghostty`, a [C](https://terminalroot.com/c) library compatible for integration into other projects. The macOS application itself is a consumer of this library.

### Current Status
- Available for macOS and Linux.
- Version 1.0 released after two years of private testing with about 2,000 users.
- Open source code under MIT license.
- Over 30,000 stars on GitHub.
- Windows version still under development.


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

## Installation
On [Ubuntu](https://terminalroot.com/tags#ubuntu) I installed using the AppImage: [Ghostty-1.1.4-main+38445dc-x86_64.AppImage](https://github.com/pkgforge-dev/ghostty-appimage/releases)
{% highlight bash %}
wget https://github.com/pkgforge-dev/ghostty-appimage/releases/download/tip/Ghostty-1.1.4-main+38445dc-x86_64.AppImage
chmod +x Ghostty-1.1.4-main+38445dc-x86_64.AppImage
./Ghostty-1.1.4-main+38445dc-x86_64.AppImage
{% endhighlight %}
> I did this because I tried via snap, but It's bugged!

See below installation for other operating systems:

{% highlight bash %}
brew install --cask ghostty # Brew/macOS
sudo snap install ghostty --classic # Snap/Ubuntu[BUGGED]
sudo pacman -S ghostty # Pacman/Arch
emerge -av ghostty # Gentoo

# Fedora
dnf copr enable pgdev/ghostty
dnf install ghostty
{% endhighlight %}
> More here: <https://ghostty.org/docs/install/binary>

### Building from Scratch
Install [Zig](https://terminalroot.com/tags#zig) via [this post](https://terminalroot.com/2021/11/primeiros-passos-com-a-linguagem-de-programacao-zig.html)
> Use the latest stable version (not the development *branch*) that according to this post until current date is version: `0.14.0`.

To compile Ghostty:

Clone the repository:
{% highlight bash %}
git clone https://github.com/ghostty-org/ghostty
cd ghostty
{% endhighlight %}

Compile:
{% highlight bash %}
zig build -Doptimize=ReleaseSafe
{% endhighlight %}

After compiling Ghostty, install it with:

{% highlight bash %}
zig build install
{% endhighlight %}

By default, it installs in `~/.local/bin`. You can change the location with:

{% highlight bash %}
zig build install --prefix /desired/path
{% endhighlight %}

If you want, you can create an icon for the launch:

Here is a simple example of `.desktop` for Ghostty:

{% highlight ini %}
[Desktop Entry]
Name=Ghostty
Exec=/home/your-username/.local/bin/ghostty
Icon=utilities-terminal
Type=Application
Categories=Utility;TerminalEmulator;
{% endhighlight %}

Save it as `ghostty.desktop` in `~/.local/share/applications/` and run it:

{% highlight bash %}
update-desktop-database ~/.local/share/applications
{% endhighlight %}

---

For more information, visit the [official repository](https://github.com/ghostty-org/ghostty)

