---
layout: post
title: "How to Compile NEOVIM from Scratch"
date: 2022-05-22 13:09:31
image: '/assets/img/neovim/building-neovim.jpg'
description: 'When some plugin wants the latest version and your operating system repository doesnt have it yet.'
tags:
- neovim
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

When some plugin wants the latest version of [Neovim](https://terminalroot.com/tags#neovim) and your operating system repository doesn't have it yet, the solution is to compile it from scratch or download an AppImage when available.

Let's see that this task is very simple and in this example we will show in [Ubuntu](https://terminalroot.com/tags#ubuntu) **22.04 LTS** and you can adapt to any other system, using *search* from your package manager.

---

# Dependencies
First of all remove Neovim from your system:

{% highlight sh %}
sudo apt remove neovim --purge
sudo apt autoremove autoclean clean
{% endhighlight %}
Now install the necessary dependencies:

{% highlight sh %}
sudo apt update
sudo apt install git build-essential cmake git pkg-config libtool g++ libunibilium4 libunibilium-dev \
ninja-build gettext libtool libtool-bin autoconf automake unzip curl doxygen lua-term lua-term-dev luarocks
{% endhighlight %}

In the case of Ubuntu, when the latest version is already installed, it doesn't reinstall unless you want to indicate the parameter for it.


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

# Building
Now just clone from [repository](https://github.com/neovim/neovim)
> **NOTE**: it is necessary first to use the command `make CMAKE_BUILD_TYPE=RelWithDebInfo` so that there is no *lag* when exiting Neovim, because in this case, we will use [CMake](https://terminalroot.com /tags#cmake) .

{% highlight sh %}
git clone https://github.com/neovim/neovim
neovim cd
make CMAKE_BUILD_TYPE=RelWithDebInfo
sudo make install
{% endhighlight %}
> See [here](https://gist.github.com/terroo/bc9b7a39f5e0a4fbec055e808002bbe2) the path where everything is installed.

---

# Solving possible problems
If you have trouble reading the `lfs` of [Lua](https://terminalroot.com/tags#lua) install with [LuaRocks](https://luarocks.org/):

{% highlight sh %}
sudo luarocks install luafilesystem
{% endhighlight %}

Sometimes the Neovim development team makes an AppImage version available in *releases*, if not, of course, there will be ready-made binaries [here](https://github.com/neovim/neovim/releases), if you prefer .

---

# Useful links
+ <https://github.com/neovim/neovim/wiki/Building-Neovim>
+ <https://github.com/neovim/neovim/issues/8312>
