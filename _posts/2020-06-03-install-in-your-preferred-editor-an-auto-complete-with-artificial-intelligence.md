---
layout: post
title: "Install in your Preferred Editor, an Auto-Complete with Artificial Intelligence"
date: 2020-06-03 20:38:58
image: '/assets/img/programming/tabnine.jpg'
description: 'A code auto-complete using Machine Learning.'
featured-img: ../programming/tabnine.jpg
tags:
- vim
- programming
- editors
---

![TabNine](/assets/img/programming/tabnine.jpg)

It was a while ago that I was browsing [Youtube](https://www.youtube.com/TerminalRootTV?sub_confirmation=1) and an ad before the start of the videos caught my attention, because I was a programmer typing a code and the auto-complete were alternatives with huge lines, I decided to click to learn more and I ended up installing it.

When using it on a day-to-day basis, I realized that it was really *powerful*, even the parts that I was going to type, before starting it already suggested to me, both creating code and creating an article for the blog, this auto-complete is **TabNine**.

# Introduction
[Tabnine](https://www.tabnine.com/) is a code auto-complete that uses [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning) to help you write code faster. TabNine uses the language documentation to infer the name of this function, return type and arguments and if you are writing text, it uses forms commonly used by texts and by yourself to help you with the most accurate alternatives.

TabNine is available for:
+ [Visual Studio Code](https://en.terminalroot.com.br/install-this-vs-code-extension-to-comment-out-ascii-blocks/)
+ [Pycharm](https://en.terminalroot.com.br/jython-the-language-that-mixes-java-with-python/) and all editors at IntelliJ Platform;
+ [Sublime Text](https://en.terminalroot.com.br/top-10-best-code-editors-for-linux/);
+ [Vim](https://en.terminalroot.com.br/100-tips-for-the-vim-editor/) with options that can be based on [Deoplete](https://github.com/tbodt/deoplete-tabnine) and [Coc](https://github.com/neoclide/coc-tabnine);
+ [Emacs](https://www.gnu.org/software/emacs/);
+ [Atom](https://en.terminalroot.com.br/top-10-best-code-editors-for-linux/);
+ and [Jupyter Notebook](https://jupyter.org/);

You can use it FREE for 14 days with the [Trial Version](https://www.tabnine.com/trial/). However, after 14 days it will continue to function normally, the difference being that additional functions, which I didn't particularly notice, will not be available. These differences can be seen [here](https://www.tabnine.com/pricing).

# Installing on Vim
The version for [Vim](https://en.terminalroot.com.br/install-veonim-a-text-editor-based-on-vim-and-neovim/) is based on [YouCompleteMe](https://github.com/Valloric/YouCompleteMe) and to add it, you can use [Vundle](https://github.com/VundleVim/Vundle.vim):
+ Add to your `~/.vimrc`:
{% highlight viml %}
Plugin 'zxqfl/tabnine-vim'
{% endhighlight %}

+ And install:
{% highlight viml %}
:PluginInstall
{% endhighlight %}

Or you can also install it in the *vanilla* way:
+ Clone with [Git](https://en.terminalroot.com.br/how-to-clone-only-a-subdirectory-with-git-or-svn/):
{% highlight bash %}
git clone --depth 1 https://github.com/zxqfl/tabnine-vim
{% endhighlight %}

+ And add to your `~/.vimrc`:
{% highlight bash %}
set rtp+=~/tabnine-vim
{% endhighlight %}

> Replace the full path with the one you cloned.

See TabNine in action below:

![TabNine](/assets/img/programming/tabnine.gif)

# Conclusion
I really intend to get the paid version, as I thought that the auto-complete of my **Vim** was even faster and much more complete. Remembering that this article is not a paid post, I daily reject proposals for paid posts when I don't believe in the product. But TabNine, besides being a quality product, remember that you can use it normally even after the trial period.

Thanks and share this post on your social networks!
