---
layout: post
title: "LuaKit, a Vim-style Ultra Speed Browser!"
date: 2021-12-13 21:32:01
image: '/assets/img/lua/luakit-min.jpg'
description: 'Luakit is a web browser aimed at advanced users, developers, users who want to better fix Vim/Neovim commands .'
featured-img: ../lua/luakit-min.jpg
tags:
- lua
- vim
---

![LuaKit, a Vim-style Ultra Speed Browser!](/assets/img/lua/luakit-min.jpg)

**Luakit** is a highly configurable web browser based on the [WebKit](https://webkit.org/) engine and the [GTK+](https://en.terminalroot.com.br/learn-to-create-a-graphical-application-with-c-and-gtkmm/) toolkit. It is very fast, extensible with Lua and licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.

It is mainly aimed at advanced users, developers, users who want to evolve and better stick [Vim](https://en.terminalroot.com.br/how-to-customize-your-vim-from-zero-to-c-cpp-ubuntu-cinnamon/)/[Neovim](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero/) commands, and anyone who wants to have fine-grained control over their web browser's behavior and interface.

# Installation
It is possible to use LuaKit on several operating systems, such as: [GNU/Linux](https://en.terminalroot.com.br/large-list-of-gnulinux-commands-by-categories/), Windows, FreeBSD and [OpenBSD](https://en.terminalroot.com.br/openbsd-dual-boot-with-linux-single-partition/).

To install **LuaKit** you can use your distro's package manager, examples:

+ On [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/): `emerge luakit`
+ On [Debian](https://en.terminalroot.com.br/why-i-gave-up-on-debian/) or [Ubuntu](https://en.terminalroot.com.br/definitive-docker-tutorial-for-beginners-ubuntu/): `sudo apt luakit`
+ In [Arch Linux](https://en.terminalroot.com.br/how-to-install-aur-packages-via-yay-on-arch-linux/): `pacman -S luakit`
+ On FreeBSD: `pkg install luakit`
+ On [OpenBSD](https://en.terminalroot.com.br/openbsd-65-usb-disk-installation/): `pkg_add luakit`

And among others.


<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2838251107855362"
     crossorigin="anonymous"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2838251107855362"
     data-ad-slot="5351066970"
     data-ad-format="auto"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>


On [Windows](https://en.terminalroot.com.br/how-to-install-powershell-on-ubuntu-and-getting-started/) you will need to use WSL. Now it's easier because to install anything in WSL, just use [PowerShell](https://en.terminalroot.com.br/how-to-install-powershell-on-ubuntu-and-getting-started/) using the command: `wsl --install`

You can also install on other Linux operating systems/distributions building from scratch, but first you will need to have the dependencies: [Git](https://en.terminalroot.com.br/onefetch-generate-a-fetch-from-your-git-repository/), [GMake](https://en.terminalroot.com.br/how-to-create-a-makefile/), [GCC](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/), [GTK3](https://en.terminalroot.com.br/learn-to-create-a-graphical-application-with-c-and-gtkmm/), WebKit2GTK, [Lua 5.1/LuaJIT](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/), [Lua File System](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/) and [SQLite3](https://www.sqlite.org/index.html) .

After that, just clone the repository, enter it, build and install:

{% highlight sh %}
git clone https://github.com/luakit/luakit.git
luakit cd
make
sudo make install
{% endhighlight %}

Once properly installed, just look for LuaKit on your dashboard and open it, so that the home page is precisely LuaKit's official website. Now let's see some commands and tips for using LuaKit.


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Commands and Shortcuts
LuaKit has the following modes: Command(by pressing `ESC`) and Insertion(by pressing the letter `i`, for example, to type in **input**, **textarea** and others) fields.

+ To navigate the command options press `ESC` to enter command mode and then press TAB to navigate down through the available command hints and `Shift + Tab` to go up through the options.

+ If you choose `:help`, for example, it will open the help page at `luakit://binds/` in a new tab, you can switch between tabs by clicking at the top of each tab or simply hitting `Ctrl + Tab`.

+ To open a URL, run the command `:open <url-name>` or simply type the letter `o google.com` in command mode, it will open the URL in the TAB where you typed the command.

+ If you want to open a URL in a new tab, type: `:tabopen URL` or type `t terminalroot.com.br`

+ To open a new empty TAB (no URL), press: `Ctrl + t` or use the command: `:tabopen` without providing URL.

+ To close a TAB run the command `:close` or the key combination: `Ctrl + w` or just `d`

+ To reopen a closed tab, press `u`

+ You can navigate a page using the mouse or the arrow keys: `k` and `j` for up and down respectively and `h` and `l` for left and right respectively.


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

+ To go to the beginning of the page is identical to Vim, just type: `gg`, and to go to the end `G` .

+ You can also navigate between tabs by pressing `Alt + <tab-order-number>` and to reorder the position of the tabs, use `>` and `<`.

+ Pressing the letter `f` displays and numbers the links on the page and to click on the number you want to type it and then press `Enter`

+ To browse the history backwards press `Shift + h` and forward `Shift + l`

+ If you want to display the history, run the command `:history` or type the letter `u` in command mode. You can clear the history by clicking `Clear All`

+ Searching for some word or content is also the same as Vim, just press `/` and then type what you want to search, typing `n` it finds the next occurrence of what was typed.

+ To refresh a page press `r` which would be the `F5` of conventional browsers.

+ Print a page or a document, use the command: `:print`

+ Bookmark a page run: `:bookmark` and to see your bookmarks use the same plural word: `:bookmarks`

+ To create snippets and run Lua commands, run: `:lua`

+ To inspect the DOM and run commands on the console, use: `:in` → console: `alert("Hello, LuaKit")`

---

# Settings
Settings can be made by running the `:settings` command. It is possible to configure and define values ​​for Lua metatables or just by clicking on the options. Actions such as:
+ Disable or re-enable `:javascript`
+ Enable save session as default
+ Install plugins in `~/.config/luakit/plugins`, plugins can be developed by yourself or cloned from the repository: <https://github.com/luakit/luakit-plugins>

And among several other settings.

+ To exit Luakit, just run `:quit` or simply press `Shift + z` and then `Shift + q`. If you want to exit and save the session of open pages to be reopened as soon as you open again run the command: `:wq` or press `Shift + z` twice.

---

# Conclusion
For more usage tips, commands and settings:
+ Access the official documentation at: `luakit://binds` or via the website: `luakit.github.io/docs`.
+ Or run in the terminal: `luakit --help`
+ Or using the manual with the command in the terminal: `man luakit`.

If you want a guide to the **Lua Programming Language**, go to: `https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/`

# Watch the video
The video is in Brazilian Portuguese, but it is possible to understand the usage, as the commands are universal.

<iframe width="1100" height="490" src="https://www.youtube.com/embed/fPCyfbR9yV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


