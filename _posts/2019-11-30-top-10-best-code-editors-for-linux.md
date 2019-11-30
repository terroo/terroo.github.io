---
layout: post
title: "Top 10 Best Code Editors for Linux"
date: 2019-11-30 09:48:41
image: '/assets/img/editors/emacs-min.png'
description: 'Ranking based on my experiences, but worth knowing.'
featured-img: ../editors/emacs-min.png
tags:
- vim
- emacs
- atom
- anjuta
- codeblocks
- visual-studio-code
- neovim
- gedit
- spacemacs
- veonim
---

Code editors (or text editors) are the most widely used programs in the world for n tasks, mainly by developers to write computer code for development. In this article we separated the top 10 in our opinion from the thousands that exist. Come on the list then!

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

***

## 1. [![Vim](/assets/img/editors/vim-logo.png)](/assets/img/editors/vim-logo.png)
![Vim](/assets/img/editors/vim-min.png)

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Vim is an enhanced version of its predecessor Vi editor and works via terminal, so its acronym stands for VI IMproved. It is the most widely used code editor in the world by developers. Its power of customization is the biggest factor of this great adoption, among thousands of other utilities. That's what editor I use most for countless things.

> In addition it has graphic version: Gvim or Vim-gtk

Official Website: <http://www.vim.org/>

To install it use the package manager of your distribution, examples:

{% highlight bash %}
sudo emerge -a vim gvim # Gentoo, Funtoo, ..
sudo apt install vim vim-gtk # Debian, Ubuntu, Mint, ...
sudo pacman -S vim # Arch, Manjaro,...
{% endhighlight %}

***

## 2. [![Emacs](/assets/img/editors/emacs-logo.png)](/assets/img/editors/emacs-logo.png)
![Emacs](/assets/img/editors/emacs-min.png)

Emacs is the second most used code editor in the world by programmers. It is the editor that has the most functionalities in the world, hence the reason that many call it the operating system, almost anything is possible with the same.

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

It is also highly customizable, however, the learning curve is a bit more difficult than Vim, but once you get used to it, there are features you'll find to add, enable, configure,… I've used it a few times mostly for filtering data via Regular Expressions, as it has several really cool tools.

Its major version is graphical, however, if you run it on the terminal with the `-nw` or `--no-window-system parameter`, it will work via terminal.

Official Website: <https://www.gnu.org/software/emacs/>

To install it use the package manager of your distribution, examples:

{% highlight bash %}
sudo emerge -a emacs # Gentoo, Funtoo, ..
sudo apt install emacs # Debian, Ubuntu, Mint, ...
sudo pacman -S emacs # Arch, Manjaro,...
{% endhighlight %}

***

## 3. [![Atom](/assets/img/editors/atom-logo.png)](/assets/img/editors/atom-logo.png)

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![Atom](/assets/img/editors/atom-min.png)

Atom created by [GitHub](https://github.com/) with the framework they also developed: [ElectronJS](https://electronjs.org/), is a very cool editor, I like the interface colors and also some commands that were also inherited from Vim. I use it to write HTML and CSS code is pretty cool.

Official Website: <https://atom.io/>

> You can also customize it, but in a more limited way compared to Vim and Emacs.

To install it use the package manager of your distribution, examples:

{% highlight bash %}
sudo emerge -a app-editors/atom # Gentoo, Funtoo, ..
sudo apt install atom # Debian, Ubuntu, Mint, ...
sudo pacman -S atom # Arch, Manjaro,...
{% endhighlight %}

In Gentoo it's more interesting to install a binary package via Layman:

> You need to have the layman installed and properly configured, for this see this article: <https://en.terminalroot.com.br/how-to-install-programs-via-layman-in-gentoo/>

{% highlight bash %}
sudo layman -a dev1990-overlay
sudo layman -S
sudo emerge -a app-editors/atom-bin
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

***

## 4. [![Anjuta](/assets/img/editors/anjuta-logo.png)](/assets/img/editors/anjuta-logo.png)
![Anjuta](/assets/img/editors/anjuta-min.png)

Anjuta is a more robust editor, but it is very restricted to specific languages, more suitable for C, C++, Java, Python, Vala and Javascript development. I use it a lot for C++ development.

Official Website: <http://anjuta.org/>

To install it use the package manager of your distribution, examples:

{% highlight bash %}
sudo emerge -a anjuta # Gentoo, Funtoo, ..
sudo apt install anjuta # Debian, Ubuntu, Mint, ...
sudo pacman -S anjuta # Arch, Manjaro,...
{% endhighlight %}

***

## 5. [![Code::Blocks](/assets/img/editors/codeblocks-logo.png)](/assets/img/editors/codeblocks-logo.png)
![Code::Blocks](/assets/img/editors/codeblocks-min.png)

Code::Blocks is a specific editor for the C and C++ languages. Like Anjuta, use for C++ development it is also complex and robust, yet easier to use than Anjuta.

Official Website: <http://www.codeblocks.org/>

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

To install it use the package manager of your distribution, examples:

{% highlight bash %}
sudo emerge -a codeblocks # Gentoo, Funtoo, ..
sudo apt install codeblocks # Debian, Ubuntu, Mint, ...
sudo pacman -S codeblocks # Arch, Manjaro,...
{% endhighlight %}

***

## 6. [![VS Code](/assets/img/editors/code-logo.png)](/assets/img/editors/code-logo.png)
![VS Code](/assets/img/editors/code-min.png)

This is the code editor of Microsoft, since released has gained many supporters in the world. I particularly like it too, although I use very little. Actually the version I have installed is VS Codium which is a third party version.

Official Website: <https://code.visualstudio.com/>

To install it you can download `.deb`, `.rpm`, `tar.gz` or even the `snap` itself.

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

In Gentoo you can also use an overlay, for example:

{% highlight bash %}
sudo layman -a dotnet
sudo layman -S
sudo emerge -a visual-studio-code
{% endhighlight %}

***

## 7. [![NeoVim](/assets/img/editors/neovim-logo.png)](/assets/img/editors/neovim-logo.png)
![NeoVim](/assets/img/editors/neovim-min.png)

Neovim is an improved Vim fork, especially in the organization of plugins. In our Vim course there is also a lot of Neovim content.

Official Website: <https://neovim.io/>

To install it use the package manager of your distribution, examples:

{% highlight bash %}
sudo emerge -a neovim # Gentoo, Funtoo, ..
sudo apt install neovim # Debian, Ubuntu, Mint, ...
sudo pacman -S neovim # Arch, Manjaro,...
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

***

## 8. [![Gedit](/assets/img/editors/gedit-logo.png)](/assets/img/editors/gedit-logo.png)
![Gedit](/assets/img/editors/gedit-min.png)

Gedit is the GNOME editor most distributions that come with GNOME preinstalled already have Gedit, but if you don't have it just install it with your distro's package manager. I really like Gedit, because it was one of the first editors I used in my life and I have some nice plugins, besides being possible to customize them: themes, snippets,…

Official Website: <https://wiki.gnome.org/Apps/Gedit>

***

## 9. [![Spacemacs](/assets/img/editors/spacemacs-logo.png)](/assets/img/editors/spacemacs-logo.png)

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


![Spacemacs](/assets/img/editors/spacemacs-min.png)

Spacemacs is an Emacs customization that has commands and features parallel to Vim, meaning it mixes the two best editors into one. It has a very beautiful and attractive interface.

Official Website: <https://www.spacemacs.org/>

***

## 10. [![Veonim](/assets/img/editors/veonim-logo.png)](/assets/img/editors/veonim-logo.png)
![Veonim](/assets/img/editors/veonim-min.png)

Veonim is a Vim and Neovim based editor and just like Atom was developed with ElectronJS, there is a very cool article about it here on the blog that can be found at the link: Meet and [Install Veonim - A Vim and NeoVim based editor](https://en.terminalroot.com.br/install-veonim-a-text-editor-based-on-vim-and-neovim/)

## Conclusion

Well, alternatives are not lacking, but as Linux distribution, system, graphical interface, window manager, ... code editor is a very personal thing. The interesting thing is to choose the one you feel comfortable with and help you write your code, that is, that brings you that delicious feeling of being excreting (developing) your projects.

Hope you enjoyed the list and the ranking. If you have a better app suggestion or ranking order, feel free to comment!

Hugs!
