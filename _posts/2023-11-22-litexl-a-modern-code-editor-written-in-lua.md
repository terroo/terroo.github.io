---
layout: post
title: "LiteXL, a Modern Code Editor written in Lua"
date: 2023-11-22 12:05:03
image: '/assets/img/lua/lite-xl.jpg'
description: 'Typing is lighter and the look is very pleasant!'
tags:
- lua
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Lite XL** is a modern [code editor](https://terminalroot.com/tags#editores) written in [Lua](https://terminalroot.com/tags#lua) and [C Language](https://terminalroot.com/tags#clanguage) with a very elegant design.

It is a fork of **Lite**, but Lite has not had new *commits* for a long time, which is why LiteXL was created.

I did some tests and found it pleasant to type (I even wrote this post on it) and it has a very light interface.

In this article we will see how to install and get started with LiteXL.

---

# Installation
It can be installed in several ways:
+ use your operating system's package manager;
+ compile from scratch (that's how I installed it);
+ download the pre-compiled binary in compressed format, unzip and run and/or install.


If you want to use a package manager:
```bash
choco install lite-xl # chocolatey
scoop bucket add extras && scoop install lite-xl # scoop
sudo port install lite-xl # macports
yay -S lite-xl # AUR
nix-env -i lite-xl # nixos
sudo dnf install lite-xl # fedora
```

---

To download pre-compiled binaries you can download directly from the [releases](https://github.com/lite-xl/lite-xl/releases) page.

---

To compile from scratch, make sure you have the build tools first: [GCC](https://terminalroot.com/tags#gcc), [Git](https://terminalroot.com/tags#git), [Meson](https://terminalroot.com/tags#meson) and [Ninja](https://terminalroot.com/tags#ninja).

Then just run the commands below in order:
> Example in [Distros](https://terminalroot.com/tags#distros) [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux):

```bash
git clone https://github.com/lite-xl/lite-xl
cd lite-xl
meson setup --buildtype=release --prefix /opt build
meson compile -C build
DESTDIR="$(pwd)/lite-xl" meson install --skip-subprojects -C build
sudo mkdir -p /opt/lite-xl
sudo mv ./lite-xl/opt/* /opt/lite-xl/
sudo ln -s /opt/lite-xl/bin/lite-xl /usr/local/bin/lite-xl
```
> Then remove the cloned repository: `cd .. && rm -rf lite-xl/`

Create an icon to easily access the dashboard:
```bash
sudo vim /usr/share/applications/com.lite_xl.LiteXL.desktop
```

Add the content below:
```bash
[Desktop Entry]
Type=Application
Name=Lite XL
Comment=A lightweight text editor written in Lua
Exec=lite-xl %F
Icon=/opt/lite-xl/share/icons/hicolor/scalable/apps/lite-xl.svg
Terminal=false
StartupWMClass=lite-xl
Categories=Development;IDE;
MimeType=text/plain;inode/directory;
```

Update the icon display
```bash
xdg-desktop-menu forceupdate
```

After that, just look for your system’s Dashboard and open it!

---

# Usage
Some shortcuts are similar to other editors and IDEs, examples:
+ `Ctrl + o` - Opens a file, detail: There is no drop-down window, an *input* appears at the bottom of the Editor and you need to type the file path.
+ `Ctrl + s` - Saves a file
+ `Ctrl + z` - Undo an operation
+ `Ctrl + y` - Redo an operation

And among others.

The configuration file is in the path:
```bash
lite-xl ~/.config/lite-xl/init.lua
```

The file has several comments that intuitively help you self-configure it, for example:

Change the font and size:
> Example:
```bash
style.font = renderer.font.load("/home/[USER]/.local/share/fonts/JetBrainsMono-Medium.ttf", 16 * SCALE)
```
> Note: **Replace [USER] with your user name! You need to remove the DATADIR and the concatenation, in addition to putting the full path, that is, do not use SHELL variables or shortcuts: `~`.**

There are several plugins that you can add that serve: Auto-complete, LSP, Snnipets, ColorScheme,...

And it can be purchased at the following addresses:
+ Plugins: <https://github.com/lite-xl/lite-xl-plugins>
+ Color Themes: <https://github.com/lite-xl/lite-xl-colors>

For more information, documentation, tutorials and tips, access the links:
+ Repository on GitHub: <https://github.com/lite-xl/lite-xl>
+ Official Page: <https://lite-xl.com/>
+ Discord server (There are always over 60 people online): <https://discord.gg/UQKnzBhY5H>
+ Documentation: <https://lite-xl.com/en/documentation/usage>
+ Tutorials: <https://lite-xl.com/en/tutorials/simple-plugin>

