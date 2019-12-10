---
layout: post
title: "Install colorscheme Terroo Colors on your Vim"
date: 2019-12-10 09:41:53
image: '/assets/img/vim/terroo-colors-min.jpg'
description: 'Terroo Colors is a Material Color Scheme Darker for Vim.'
featured-img: ../vim/terroo-colors-min.jpg
tags:
- vim
- colorscheme
- terroo
---

![Install colorscheme Terroo Colors on your Vim](/assets/img/vim/terroo-colors-min.jpg)

Terroo Colors is a Material Color Scheme Darker for Vim & inspired by [vim-monokai-bold](https://github.com/Mcmartelle/vim-monokai-bold) and [Minimalist](https://github.com/dikiaap/minimalist).

## Installation

To install this color scheme, you can use one of the following ways:

- Use [Vundle](https://github.com/VundleVim/Vundle.vim#quick-start) by adding
to your `.vimrc` Vundle plugin section:

{% highlight viml %}
Plugin 'terroo/terroo-colors'
{% endhighlight %}

Then run `:PluginInstall`.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

OR

- Use [vim-plug](https://github.com/junegunn/vim-plug#installation) by adding
to your `.vimrc` vim-plug section:

{% highlight viml %}
Plug 'terroo/terroo-colors'
{% endhighlight %}

Then run `:PlugInstall`.

OR

- Use [Pathogen](https://github.com/tpope/vim-pathogen#installation):

Run the following in a terminal:

{% highlight bash %}
cd ~/.vim/bundle
git clone https://github.com/terroo/terroo-colors
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

## Usage

After finishing installation, put this code to your `.vimrc`:

{% highlight viml %}
set t_Co=256
syntax on
colorscheme terroo-colors
{% endhighlight %}

This color scheme also built-in with airline theme. If you wanna use:

{% highlight viml %}
let g:airline_theme='terrooairline'
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
{% endhighlight %}

## Support

As you know, color scheme in vim by default supports many programming languages.
At this time `terroo-colors` is looks beautiful & focused on:

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

* C++
* CSS/CSS3
* HTML/HTML5
* JavaScript
* Markdown
* PHP
* Python
* Ruby
* Sass
* Shell
* XML

If you need more syntax highlighting, you can use
[vim-polyglot](https://github.com/sheerun/vim-polyglot).

## Links

[GitHub](https://github.com/terroo/terroo-colors) ·
[Vim.org](https://www.vim.org/) ·
[Blog](https://en.terminalroot.com.br/)

## License

GPLv3 © [Terminal Root](https://terminalroot.com.br/)
