---
layout: post
title: "How to Install Lua LSP on Neovim"
date: 2022-06-28 10:15:05
image: '/assets/img/neovim/lua-lsp.jpg'
description: 'Series on how to configure LSP for your programming language in Neovim'
tags:
- lua
- neovim
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Today we are going to start a series on how to install Language Server Protocol (LSP) for different programming languages on Neovim.

This article assumes you already know:
- What is an LSP, if you don't know see [here ](https://en.wikipedia.org/wiki/Language_Server_Protocol).
- You already know how to configure your Neovim, if you don't know, see [here](https://terminalroot.com/all-about-neovim-with-lua-how-to-customize-from-zero/) .
- You already have basic knowledge of Lua, if you don't, see [here](https://terminalroot.com/definitive-guide-to-lua-for-beginners/) .

In this first article of the series we will configure the LSP for Lua .

Lua uses the LSP that is in the repository <https://github.com/sumneko/lua-language-server>, the same one used in [VS Code](https://terminalroot.com/tags#vscode) .

For this article we are going to use [Ubuntu 22.04](https://terminalroot.com/tags#ubuntu) , if it is in a different version or different operating system or even in another distribution, just use `search ` from your package manager.

---

# Dependencies
First of all, make sure you have the following packages/software installed on your system:
+ [Ninja Build](https://terminalroot.com/tags#ninja)
+ [GCC](https://terminalroot.com/tags#gcc), [G++](https://terminalroot.com/tags#g++) and [Clang](https://terminalroot.com/tags#clang)

Example:

```bash
sudo apt install gcc g++ clang ninja-build
```

---

# Installation of LSP

### 1st - Prepare a directory where the LSP will be stored
> In this case I will store it in `${HOME}/.config/lsp`, change the path if you are more interested

Create the directory and enter it

```bash
mkdir -p ~/.config/lsp
cd ~/.config/lsp
```

### 2nd - Now clone and compile the `lua-language-server` binary
With the following commands in order:

```bash
git clone --depth=1 https://hub.fastgit.xyz/sumneko/lua-language-server
lua-language-server cd
git submodule update --init --recursive
3rd cd/luamake
compile/install.sh
CD ../..
./3rd/luamake/luamake rebuild

```

### 3rd - Add the binary to your `$PATH`
[Neovim](https://terminalroot.com/tags#neovim) already has several LSPs built in, what is missing is for it to find the path to the binary in its `$PATH`.

To do this, run the commands below:
> If you used a path other than `~/.config/lsp` , change it accordingly.

```bash
echo 'export PATH="${HOME}/.config/lsp/lua-language-server/bin:${PATH}"' >> ~/.bashrc
source ~/.bashrc
execute $SHELL
```

---

# Configuring Neovim
Add LSP support for Lua as per the configuration style you chose. In this case, as an example, let's use `init.lua` .

> `vim ~/.config/nvim/init.lua`

And add the code below
```moon
require'lspconfig'.sumneko_lua.setup {}
```

If everything is ok, you will have: function details, error and warning information, autocomplete according to tables and so on. Examples:

![print LSP Lua](/assets/img/neovim/print-lua.png)
![Autocomplete table LSP Lua](/assets/img/neovim/table-autocomp.png)
![warnings and errors LSP Lua](/assets/img/neovim/warns-errors-lua-lsp.png)

---

# Useful links
+ <https://github.com/sumneko/lua-language-server/wiki/>
+ <https://github.com/sumneko/lua-language-server>
+ <https://jdhao.github.io/2021/08/12/nvim_sumneko_lua_conf/>

