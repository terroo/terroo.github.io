---
layout: post
title: "Meet the new Gamma text editor"
date: 2020-08-08 14:00:54
image: '/assets/img/editores/gamma.jpg'
description: 'He intends to be the default GNOME editor.'
featured-img: ../editores/gamma.jpg
tags:
- editor
- linux
---

![Meet the new Gamma text editor](/assets/img/editores/gamma.jpg)

[Gamma (Γ)](https://gitlab.com/hamadmarri/gamma-text-editor) is a lightweight text editor. It is intended to be an alternative to Gedit or Notepad++. Although the current implementation is tested on Linux with a GNOME desktop environment, it can also run on Linux, Windows and Mac if the dependencies are installed (see the Dependencies section below).

Gamma uses GTK3 (cross-platform GUI toolkit) and PyGObject which is a Python package that provides links to GObject-based libraries, such as GTK, GStreamer, WebKitGTK, GLib, GIO and more.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Why a new text editor?

+ Lightweight, no hunger for CPU/RAM
+ No learning curve (easy/familiar shortcuts, easy use of plugins/extensions)
+ Fully customizable from A to Z (even the user interface layout)
+ New UX approach for text editors
+ Easy plugin system
+ Made using Python for python contributors

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Dependencies

+ GTK+ 3
+ GtkSourceview 4 (works for 3.0 but currently need to manually change the version in python files)
+ Python 3
+ gobject-introspection

If you are using Linux with a GNOME desktop, you probably already have these dependencies installed. I'm not sure if the libraries are installed for other desktops, like KDE, XFCE or MATE. But if you have libgtk-3-0 and python3 installed, then Gamma will probably work.

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation

```sh
git clone https://gitlab.com/hamadmarri/gamma-text-editor
cd gamma-text-editor 
chmod +x setup.sh
./setup.sh
```

# Use and configuration

Gamma is a very intuitive text editor, but if you want more information, I suggest you consult the official documentation on their Gitlab at: <https://gitlab.com/hamadmarri/gamma-text-editor>

# Thanks for reading!
    
