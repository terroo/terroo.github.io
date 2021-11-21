---
layout: post
title: "All about Neovim with Lua - How to Customize from Zero"
date: 2021-11-20 23:17:50
image: '/assets/img/neovim/neovim-lua.jpg'
description: 'All about Neovim with Lua - How to Customize from Zero'
featured-img: ../neovim/neovim-lua.jpg
tags:
- neovim
- lua
---

![All about Neovim with Lua - How to Customize from Zero](/assets/img/neovim/neovim-lua.jpg)

A lot of people have been asking about customizing **Neovim** from scratch, so from this article we're going to start a series of five articles to share with you everything I learned about **Neovim** .

To follow this series, I think it would be very important for you to have a basic knowledge of **Vim**, **Neovim** and [Lua](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/) . I suggest the links below:

+ [100 Tips for the VIM Editor](https://en.terminalroot.com.br/100-tips-for-the-vim-editor/)
+ [Definitive Guide to Lua for Beginners](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/)
+ [How to Customize Your VIM From Zero to C/C++](https://en.terminalroot.com.br/how-to-customize-your-vim-from-zero-to-c-cpp-ubuntu-cinnamon/)
+ [Customize your NEOVIM with LUA Programming Language](https://terminalroot.com.br/2021/08/customize-seu-neovim-com-a-linguagem-de-programacao-lua.html)
+ [VIM vs NEOVIM](https://www.youtube.com/watch?v=lyTI9Sz0V8E)
+ [8 Interesting Tips for Your Vim](https://en.terminalroot.com.br/8-interesting-tips-for-your-vim/)


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

# Why are many people switching to Neovim?
Neovim solved a Vim "*slowness*" issue regarding the use of *plugins* . And the main reason for this was to deliver to the Lua programming language all: calculations, filtering, checks and others, because Vimscript is not a very fast language, because it, until then, was made without optimizations just to run basic tasks.

But things grew and there came a point that she became a "*stone in the shoe*" of Vim . Soon, Neovim appeared in order to solve this problem. In other words, in order not to "reinvent the wheel" and have to change the entire Vimscript (which would be a lot of work) a language was adopted that already has all the necessary optimizations, which is the Lua programming language.

If you want more details about this I suggest [this talk](https://www.youtube.com/watch?v=Bt-vmPC_-Ho) by **Justin M. Keyes** (current Neovim Leader and Maintainer) which was given at [VimConf](https://vimconf.org/) of 2019.

---

# How does Lua manage to modify the editor's settings?
Vim has several [API's](https://www.vim.org/docs.php) that serve the same purpose and they were expanded by Neovim programmers in order to make data manipulation by Lua even easier. We'll see more details, from scratch, on how this happens in the next article. But after the tests, the benchmarks and the use itself, it was noticed a MUCH difference in terms of speed.

---

# What are we going to do for sure with this series?
We are going to customize DO ZERO all our Neovim in an original way without using a distro. Using the best plugins for different situations and creating our own code for particular situations, hence the need to have a basic knowledge of [Lua](https://terminalroot.com.br/lua) .

---

### Other articles in the series
## 1. [How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
# 2. [From init.vim to init.lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
## 3. [Installing Plugins](https://en.terminalroot.com.br/installing-plugins)
## 4. [Customizing the Appearance](https://en.terminalroot.com.br/customizing-the-appearance)
## 5. [LSP, Autocomplete and Machine Learning](https://en.terminalroot.com.br/lsp-autocomplete-and-machine-learning)




