---
layout: post
title: "From init.vim to init.lua"
date: 2021-11-20 23:21:43
image: '/assets/img/neovim/init-lua.jpg'
description: 'This is the second article in our series, let's find out how things work in migration!'
featured-img: ../neovim/init-lua.jpg
tags:
- neovim
- lua
---

![From init.vim to init.lua - All about Neovim with Lua](/assets/img/neovim/init-lua.jpg)

This is the second article in the series **All about Neovim with Lua**, if you haven't read the previous one follow the link [here]().

> **Tip**: if you have the `nvim` directories in both `~/.local/share` and `~/.config` remove them or backup them because here we will show them from scratch. Example:
{% highlight sh %}
rm -rf ~/.config/nvim ~/.local/share/nvim
{% endhighlight %}

---

# Introduction
We all know that the main configuration file of [Vim](https://en.terminalroot.com.br/8-interesting-tips-for-your-vim/) is `~/.vimrc` and its corresponding file in Neovim is `~/.config/nvim/init.vim` .

That is, if we create a symlink from **vimrc** to **init.vim** your Neovim will work normally as your Vim works and you will also port all settings and plugins to Neovim.

But what if you want to run [Lua](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/) from this **init.vim** is it possible? Yes, for that you will need to use [Here String](https://en.terminalroot.com.br/6-very-interesting-tips-for-your-linux-shell/) .

Example, let's suppose you want to display a message in the footer as soon as you open Neovim, but that message needs to be delivered with the Lua programming language. You just add this code to your `init.vim`:

{% highlight viml %}
lua <<EOF
 print("Hello user! Welcome to Neovim!")
EOF
{% endhighlight %}

<!-- SQUARE -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


Can you do that with Vim too? If you have compiled your vim with Lua support or added the *vim-lua* package for systems offering binaries, yes it is possible! But Vim makes a *bridge* whereas Neovim is native, that is, there is already a good difference and in Vim you should use it like this (as a command): `:lua <<EOF` with two dots in front.

---

# To `init.lua`
But instead of using *Here String* you can use Lua directly, and this must be done in `init.lua`. To use it, remove your `init.vim` and create an `init.lua`.
> *Note*: Don't rename or use both (there will be an error) because now the reverse doesn't work either, that is, VimScript commands don't run directly in `init.lua`.

And to display that same message, just do it like this:
{% highlight lua %}
print("Hello user! Welcome to Neovim!")
{% endhighlight %}

---

# Running VimScript commands in `init.lua`
As we had said in the [previous article in this series](), Neovim uses the [Vim](https://en.terminalroot.com.br/100-tips-for-the-vim-editor/) API to deliver the results or query commands and execute them, and in this case it uses the `vim.cmd` API.

So, with [Lua](https://en.terminalroot.com.br/definitive-guide-to-lua-fo│) just run like this, for example, make the *Beam* cursor in normal mode, add this to your `init.lua`:

{% highlight lua %}
vim.cmd([[ set guicursor= ]])
{% endhighlight %}

You can put all of [your Vim settings](https://en.terminalroot.com.br/how-to-customize-your-vim-from-zero-to-c-cpp-ubuntu-cinnamon/) into this function which will work normally.

If you want to create a separate file with your settings and import it to your `init.lua` it is more organized, for example: create a file `settings.lua` and in your `init.lua` just add this line:

{% highlight lua %}
require("settings")
{% endhighlight %}

The most correct thing is to create a directory with the name **lua/** and inside it put all the files that will be imported by `init.lua`, example:

{% highlight sh %}
mkdir -p ~/.config/nvim/lua
{% endhighlight %}

And move `settings.lua` there:

{% highlight sh %}
mv ~/.config/nvim/settings.lua ~/.config/nvim/lua/
{% endhighlight %}

And `init.lua` will automatically read `settings.lua` even without specifying the directory because this is part of the `'runtimepath'`, that is, this directory named **lua/** is part of the pattern.


<!-- WIDE RECTANGLE 2 -->
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

---

# Organization of directories
You can organize it however you like, but there is a default organization. At the moment we still don't know everything we'll need to create, but in the next articles we'll see more details and Neovim's documentation proposes this hierarchy of organization:

{% highlight sh %}
📂 ~/.config/nvim
├── after
├── 📁 ftplugin
to the lua
│ ├── 🌑 myluamodule.lua
│ └── 📂 other_modules
│ ├── 🌑 anothermodule.lua
│ └── 🌑 init.lua
├── pack
├── 📁 plugin
├── 📁 syntax
└── 🇻 init.vim
{% endhighlight %}
> **Note**: That in this hierarchy the `init.vim` file is kept, but there is an `init.lua` inside the **lua** directory, but this is based on if you are not already using `init .lua` as main, that is, this is for the transition phase and of course this is the default, but not necessarily a rule.

Here in our series we are going to do similar, but not the same, because not all of these files will be used.

---

# Creating your Lua function in Neovim
At this point you are already thinking about how to deliver VimScript results to Lua. For example, [in this article](https://en.terminalroot.com.br/how-to-customize-your-vim-from-zero-to-c-cpp-ubuntu-cinnamon/) we get the extension of the file that opens every time we use the editor to choose which plugin to load.

Well, getting the extension with Lua is one thing, but getting the extension that Neovim will open is another. We know we could use `vim.cmd`, but how to store the output for us to manipulate with Lua ?

Let's create a new file in the **lua/** directory named `nvim lua/tools.lua` and inside it we'll put this code:
> Review the comments in the code for greater understanding.

{% highlight lua %}
vim.cmd([[ let extension = expand('%:e') ]]) -- we create the variable in the API environment

function get_extension( var ) -- takes argument to variable
  return vim.api.nvim_get_var( var ) -- we return the variable
end

local ext = get_extension("extension") -- we say what variable name we want

print("The extension of this file is: " .. ext) -- we use the extension however we want
{% endhighlight %}

Now open your `init.lua` and import `tools.lua` like this only:
> `nvim init.lua`

{% highlight lua %}
require("settings")
require("tools") -- for the new file
{% endhighlight %}

Now any file we open with Neovim it will tell us the extension at the footer. Simple, right?!

This example was very basic and easy, especially if you already know [Lua](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/), but the plugins use a lot of `tables` and `metatables`, however, it doesn't escape much of simplicity!

For more information run on your Neovim: `:h vim.api` .

---

### Other articles in the series
## 1. [How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
## 2. [From init.vim to init.lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
# 3. [Installing Plugins](https://en.terminalroot.com.br/installing-plugins)
## 4. [Customizing the Appearance](https://en.terminalroot.com.br/customizing-the-appearance)
## 5. [LSP, Autocomplete and Machine Learning](https://en.terminalroot.com.br/lsp-autocomplete-and-machine-learning)




