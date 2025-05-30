---
layout: post
title: "How to Install the New Version of GCC MinGW on Windows"
date: 2025-05-30 14:32:42
image: '/assets/img/windows/gcc-windows.jpg'
description: "🦬 GCC 15 with a much easier procedure!"
tags:
- gcc
- windows
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We previously published a post about installing [GCC MinGW on Windows](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/), but it has become outdated — it was the old version: ~~8.1.0~~.

In this short article, we’ll see how to update or install it (if you haven’t already) the easy way.


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

### If you installed the version from the previous article

First, remove (or rename) the folder:

> Open [PowerShell](https://terminalroot.com.br/tags#powershell) with administrator privileges.

To rename:

{% highlight powershell %}
Rename-Item -Path "C:\mingw64" -NewName "mingw64-old"
{% endhighlight %}

Or to remove the installation:

{% highlight powershell %}
Remove-Item -Path "C:\mingw64" -Recurse -Force
{% endhighlight %}

### Now just download the compressed file from:

* [https://sourceforge.net/projects/winlibs-mingw/](https://sourceforge.net/projects/winlibs-mingw/)

Or direct download:
[https://sourceforge.net/projects/winlibs-mingw/files/latest/download](https://sourceforge.net/projects/winlibs-mingw/files/latest/download)

### Extract the file

If extracting it didn’t create the `mingw32` folder, it’s because it’s inside the folder:
`winlibs-i686-mcf-dwarf-gcc-15.1.0-mingw-w64ucrt-12.0.0-r1/`.

Move it to drive `C:\`:

{% highlight powershell %}
Move-Item -Path "mingw32" -Destination "C:\"
{% endhighlight %}

Rename it to `mingw64`:

{% highlight powershell %}
Rename-Item -Path "C:\mingw32" -NewName "mingw64"
{% endhighlight %}

### Add to the `PATH` system variable

Do this only if this is your first installation. If you’re updating from the previous article’s procedure, you don’t need to.

> Open the [terminal](https://terminalroot.com.br/2025/05/personalize-seu-powershell-like-a-pro.html) with administrator privileges and run the command below:

{% highlight powershell %}
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\mingw64", "Machine")
{% endhighlight %}

Now check the version by running:

> If this is your first installation, close and reopen the [terminal](https://terminalroot.com.br/2025/05/personalize-seu-powershell-like-a-pro.html)!

{% highlight powershell %}
g++ --version
{% endhighlight %}

> `15.1.0`

The full output will be:

{% highlight powershell %}
g++.exe (MinGW-W64 i686-ucrt-mcf-dwarf, built by Brecht Sanders, r1) 15.1.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
{% endhighlight %}

This version is available at [https://winlibs.com](https://winlibs.com), which links to the same *SourceForge* page, but there are other versions there for different setups.

If you want to use the `make` command, remember to rename it from `C:\mingw64\bin\mingw32-make` to `C:\mingw64\bin\make`.

{% highlight powershell %}
Rename-Item -Path "C:\mingw64\bin\mingw32-make" -NewName "make"
{% endhighlight %}

## See also:

* [How to Install the New Version of Clang/LLVM on Windows]()
* [How to Use Tmxlite for Game Maps (Windows and Linux)](https://terminalroot.com/how-to-use-tmxlite-for-game-maps-windows-and-linux/)


