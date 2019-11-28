---
layout: post
title: "Install Veonim - A text editor based on Vim and NeoVim"
date: 2019-11-28 12:45:48
image: '/assets/img/tips/veonim.png'
description:
featured-img: ..tips/veonim.png
tags:
- veonim
- vim
- neovim
---

![Install Veonim - A text editor based on Vim and NeoVim](/assets/img/tips/veonim.png)

[Veonim](https://github.com/veonim/veonim/) is a simple modal IDE built with [Neovim](https://neovim.io/) and [VSCode extensions](https://code.visualstudio.com/docs/editor/extension-gallery). The goal is to create my ideal programming environment.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Resources:

+ Support for VSCode extensions (work in progress, but can be tested today at 0.22.0+)
+ Aims to be 100% compatible with Neovim
+ All vimrc configuration with vimscript/Lua/remote plugins
+ All Veonim features are accepted. Use as many or as few IDE resources as you want and customize your workflow.
+ Fuzzy search files, buffers, buffer text, project text search (powered by ripgrep)
+ Multiple simultaneous instances of Neovim (such as tmux sessions)
+ Fully keyboard driven (no mouse support)
+ But wait, there's more! See the User's Guide.

## Putting Veonim to work

First you will need to have nodejs, npm and Git installed on your system, examples:

{% highlight bash %}
emerge nodejs git # Gentoo, Funtoo, ...
sudo apt install nodejs npm git # Ubuntu, Debian, Mint, ...
sudo pacman -S nodejs npm git # Arch, Manjaro, ...
sudo dnf install nodejs npm git # Fedora
{% endhighlight %}

After this it is necessary to clone [Veonim](https://github.com/veonim/veonim/)

{% highlight bash %}
git clone https://github.com/veonim/veonim
{% endhighlight %}

Next step is to enter directory and install dependencies via [npm](https://www.npmjs.com/)

{% highlight bash %}
cd veonim/
npm i
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Okay, now you can run Veonim, but this is not the most recommended way to use, and being too slow, the settings you set will be lost. This procedure is just to see if everything is right.

{% highlight bash %}
npm start
{% endhighlight %}

## Installing on your system

Still inside the Veonim directory, run the command:

{% highlight bash %}
npm run build
{% endhighlight %}

Now let's build his binary:

> If you want, first test with the command: `npm run start:release`

{% highlight bash %}
npm run package
{% endhighlight %}

The binary will be ready in the directory: `./dist/` . So let's install it in a system directory:

{% highlight bash %}
sudo install dist/veonim*.AppImage /usr/local/bin/veonim
{% endhighlight %}

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

Now let's make it visible to Dashboard and Launcher, run the commands:

> Setting the default software icon

{% highlight bash %}
sudo cp art/icon.png /usr/share/pixmaps/veonim.png
{% endhighlight %}

And we create the call file:

{% highlight bash %}
echo -e "[Desktop Entry]\nType=Application\nEncoding=UTF-8\nName=VeoNim\nIcon=veonim\nTerminal=false\nExec=veonim\nCategories=Development;" | sudo tee -a /usr/share/applications/veonim.desktop
{% endhighlight %}

Now just look for Veonim in Dash, Laucher, or run via terminal to open it:

{% highlight bash %}
veonim
{% endhighlight %}

![Install Veonim - A text editor based on Vim and NeoVim](/assets/img/tips/veonim2.png)

# Using Veonim

+ Set font size (Example if it's Fantasque): `set guifont=SF\ FantasqueSansMono-Regular:h16`
+ Use file explorer: `:Veonim explorer`
+ Using Fuzzer file finder: `:Veonim files`

And many more commands and tips you can find on Veonim's GitHub homepage:

<https://github.com/veonim/veonim/>

Also see the user guide for using your personal settings:

<https://github.com/veonim/veonim/blob/master/docs/readme.md>

Thanks!
