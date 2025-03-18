---
layout: post
title: "5 Language-Independent Extensions for VSCode"
date: 2025-03-18 14:08:48
image: '/assets/img/vscode/5-vscode-ext.jpg'
description: "🚀 And more tips for changing the font and cursor."
tags:
- vscode
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Do you know when you install [VSCode](https://terminalroot.com/tags#vscode) and need to configure it your way? You already start thinking about extensions according to your programming language, however, before that you need to make it functional and pleasant for any situation.

Although I don't use VSCode much, I use [Vim](https://terminalroot.com.br/vim)/[Neovim](https://terminalroot.com/tags#neovim) more, when I need to develop something for the Web, I usually use VSCode.

And below are **5 extensions that I always install when I need to configure VSCode** on any new PC or when I format mine.


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

## 01. [All Autocomplete](https://marketplace.visualstudio.com/items?itemName=Atishay-Jain.All-Autocomplete)
**All Autocomplete** is an extension that expands VSCode's autocomplete functionality by suggesting words from all open files, not just the current file. Useful for maintaining consistency in [large projects](https://terminalroot.com.br/mylang).

![All](https://cdn.rawgit.com/atishay/vscode-allautocomplete/1ea2b07b/images/All-Autocomplete.gif)

---

## 02. [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
Although I use [Sobrio](https://terminalroot.com/top-8-best-color-themes-for-your-vim-neovim#01-sobrio) in Vim and Neovim, in VSCode I prefer **One Dark Pro**. It is a [Visual Theme](https://terminalroot.com.br/2020/04/775-temas-para-seu-vs-code.html) inspired by Atom's *One Dark*, offering a dark and well-contrasted color scheme, ideal for those who prefer elegant and easy-on-the-eye interfaces.

![One Dark](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/editor1.png)

---

## 03. [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
**Markdown All in One** is a complete extension for [Markdown](https://terminalroot.com/tags#markdown) editing, providing shortcuts, preview, table generation and support for *to-do lists*, making writing more efficient.

![Markdown](https://github.com/yzhang-gh/vscode-markdown/raw/master/images/gifs/section-numbers.gif)

---

## 04. [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
We've already made a [video about VSCodeVim](https://terminalroot.com/how-to-use-vim-together-with-vscode/), it's an extension that adds support for Vim mode within VSCode, allowing Vim commands, navigation, and shortcuts for users accustomed to this editing experience.

[![How to Use VIM with VS CODE](https://terminalroot.com.br/assets/img/vscode/vscode-exts/06.jpg)](https://youtu.be/6HAFJu_O7Gk)

---
## 05. [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
And finally, **IntelliCode** is a Microsoft extension that improves code suggestion using [artificial intelligence](https://terminalroot.com/tags#ia), offering intelligent recommendations based on popular code patterns.

![IntelliCode](https://aka.ms/IntelliCodeUsageExamplesv2)

---

In addition to these extensions I also configure the font:

+ I get the name of the font I want, I usually choose the [JetBrains Mono Medium Nerd Font](http://github.com/terroo/fonts), examples:
On Windows with PowerShell:
{% highlight powershell %}
Get-ConsoleFontInfo
{% endhighlight %}

On GNU/Linux or macOS systems:
{% highlight bash %}
fc-list | grep "JetBrains"
{% endhighlight %}

+ I change the font configuration

In `settings.json` (`Ctrl+Shift+P` → "Preferences: Open Settings (JSON)") and set:

{% highlight json %}
"editor.fontFamily": "'JetBrainsMono Nerd Font', 'JetBrains Modo Medium Nerd Font', monospace"
{% endhighlight %}

Then just restart VSCode for the changes to be applied. I also change the cursor in both the editor and the terminal to [I-Beam](https://terminalroot.com/read-files-with-this-cli-app-made-with-cpp/)/Vertical bar.

See also below some articles that may be of interest to you:

+ [How to Use VIM with VS CODE](https://terminalroot.com/how-to-use-vim-together-with-vscode/)
+ [Top 8 Best Extensions for your VSCode](https://terminalroot.com/top-8-best-extensions-for-your-vscode/)
+ [Use Compile Explorer with VS Code](https://terminalroot.com/use-compile-explorer-with-vs-code/)
+ [The 10 Best VSCode Extensions for C/C++](https://terminalroot.com/top-10-vscode-extensions-for-c-cpp/)


