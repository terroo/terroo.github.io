---
layout: post
title: "Installing Plugins"
date: 2021-11-20 23:58:12
image: '/assets/img/neovim/plugins-lua.jpg'
description: 'We are going to use packer.nvim to install plugins like Telescope and others'
featured-img: ../neovim/plugins-lua.jpg
tags:
- neovim
- lua
---

![Installing Plugins - All About Neovim with Lua](/assets/img/neovim/plugins-lua.jpg)

This is the third episode of the series **All about Neovim with Lua** if you haven't read the previous ones, follow the links:

+ [All about Neovim with Lua - How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
+ [From init.vim to init.lua - All about Neovim with Lua](https://en.terminalroot.com.br/from-initvim-to-initlua)

First of all, let's organize our files and define all the settings (based on mine I use daily).

The `lua/tools.lua` file was just an example, so we can already remove it and the `lua/settings.lua` file we will put inside a directory named `configs/` that we will create to be more organized.

Clean your `init.lua` first to not show errors:

{% highlight sh %}
cd ~/.config/nvim
cat /dev/null > init.lua
{% endhighlight %}

Now let's prepare the environment
{% highlight sh %}
rm lua/tools.lua
mkdir -p lua/configs
mv lua/settings.lua lua/configs/
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


Now open `init.lua` and insert this content:
{% highlight sh %}
require("configs.settings")
{% endhighlight %}
> You could also use it like this: `require("configs/settings")`

Now use my `settings.lua` or modify it however you like:
> `nvim lua/configs/settings.lua`

{% highlight lua %}
vim.cmd([[ set encoding=utf8 ]])
vim.cmd([[ set nu! ]])
vim.cmd([[ set mouse=a ]])
vim.cmd([[ set wildmenu ]])
vim.cmd([[ set confirm ]])
vim.cmd([[ set incsearch ]])
vim.cmd([[ set title ]])
vim.cmd([[ set t_Co=256 ]])
vim.cmd([[ set shiftwidth=2 ]])
vim.cmd([[ set softtabstop=2 ]])
vim.cmd([[ set expandtab ]])
vim.cmd([[ set shiftwidth=2 ]])
vim.cmd([[ set softtabstop=2 ]])
vim.cmd([[ set expandtab ]])
vim.cmd([[ set guicursor= ]])
vim.cmd([[ set cursorline ]])
vim.cmd([[ syntax on ]])
{% endhighlight %}
> Note: You can also use a single `vim.cmd` to run all the settings, but this has no impact on performance.

Most of these settings for those who use **Vim** already know what it is, if you don't know [see this article]() . Then close and reopen your Neovim to see the changes, we'll change just 3 more lines of that file when we install a color theme!

---

# Installing packer.nvim
[packer.nvim](https://github.com/wbthomason/packer.nvim/) is a plugin that installs plugins! It is similar to plugins like [vim-plug](https://github.com/junegunn/vim-plug) and [Vundle](https://github.com/VundleVim/Vundle.vim) that are used in Vim.

Its differential is that it was entirely written in [Lua](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/) in addition to using resources from [LuaJIT](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners#luajit) to compile and features plugin update, removal, more accurate and detailed UI interfaces. For all his resources see the [repository](https://github.com/wbthomason/packer.nvim/) .

It installs plugins written in both Lua and VimScript and runs normally!

To install, just run this command:
> Note: You need to have [Git](https://en.terminalroot.com.br/onefetch-generate-a-fetch-from-your-git-repository/) installed.

For [Unix](https://terminalroot.com.br/tags#unix) and [GNU/Linux](https://en.terminalroot.com.br/take-multiple-free-red-hat-linux-courses/) systems
{% highlight sh %}
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
{% endhighlight %}
> Copy and paste to your terminal and press [ENTER]

After cloning now, let's create a new directory inside `lua/` and let's create two new files with the contents that we will indicate.

Create the sub directory:
{% highlight sh %}
mkdir -p lua/plugins
{% endhighlight %}

Create and open the file that will hold the `packer` installations:
{% highlight sh %}
nvim lua/plugins/plugins.lua
{% endhighlight %}

And insert this content inside:
{% highlight lua %}
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function()
  use 'wbthomason/packer.nvim'
  use 'terroo/vim-simple-emoji'
  use 'navarasu/onedark.nvim'
end)
{% endhighlight %}

The `use` function determines which plugins will be used/handled.

Note that **packer.nvim** handles itself and we take the opportunity to start it by installing two new plugins:

+ [vim-simple-emoji](https://github.com/terroo/vim-simple-emoji)(plugin created by myself using VimScript, in the future I plan to create the version with Lua);
+ [onedark.nvim](https://github.com/navarasu/onedark.nvim) the color theme, written in Lua, but you can install one of your liking.

**packer.nvim** has the following commands:
+ `:PackerCompile` - Generates the compiled file in: `~/.config/nvim/plugins/packer_compiled.lua`(Note that this is a *plugins* directory at the root of `nvim` and not inside the `lua` directory.
+ `PackerClean` - Removes all disabled or unused plugins
+ `PackerInstall` - Installs or Cleans up missing plugins
+ `PackerUpdate` - Cleans, updates and installs plugins
+ `PackerSync` - Same as running `PackerUpdate` and then `PackerCompile`
+ `PackerLoad` - Loads the `opt` plugin immediately
> Some plugins can be installed in the `opt` folder in `~/.local/share/nvim/site/pack/packer/opt` instead of `start` in the same path. For that you need to inform the **table** `{ source = opt }` for the `use` function.


<!-- MINI ANNOUNCEMENT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


Now just open your `init.lua` at the root of your Neovim's configuration directory and add this line:

{% highlight lua %}
require("configs.settings")
require("plugins.plugins") -- To read packer.nvim
{% endhighlight %}

Now close and open `init.lua` again and run the command:
{% highlight viml %}
:packerinstall
{% endhighlight %}
> It saves the files in the directory: `~/.local/share/nvim` and the plugins are in the subdirectory: `site/pack/packer/start` .

And once you finish run: `:PackerCompile`. You can automate `:PackerCompile` for every time there are new installs, if you want to add this line to your `settings.lua`:
{% highlight lua %}
vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerCompile
  augroup end
]])
{% endhighlight %}

It will install the plugins and we can already use them! To activate the color theme open the file: `nvim lua/configs/settings.lua` and add these 3 lines to the end:

{% highlight lua %}
vim.cmd([[ set bg=dark ]])
vim.cmd([[ set termguicolors ]])
vim.cmd([[ colorscheme onedark ]])
{% endhighlight %}
> When closing open any file (Ex.: `nvim main.cpp`) and notice a nicer look! 😃

If you want an even darker background change the line in `settings.lua` that has this content: `vim.cmd([[ colorscheme onedark ]])` with this:

{% highlight lua %}
vim.cmd([[
  let g:onedark_style = 'darker'
  colorscheme onedark
]])
{% endhighlight %}
> For more "sub-themes" tips from **onedark.nvim** (in addition to **darker**) see the [repository](https://github.com/navarasu/onedark.nvim).

To use **vim-simple-emoji** see the tips in the [repository](https://github.com/terroo/vim-simple-emoji).

---

# Installing Telescope.nvim
**Telescope.nvim** is the latest, it is a better alternative to [fzf](https://github.com/junegunn/fzf).

It has a modern interface and serves to: Find, filter, view, select and open files simply and quickly. It was also written entirely in [Lua](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners/).

To install it, add this line to the file: `plugins/plugins.lua`
{% highlight lua %}
use {
  'nvim-telescope/telescope.nvim',
  requires = { {'nvim-lua/plenary.nvim'} }
}
{% endhighlight %}
> Note that `nvim-telescope` has a dependency on `nvim-plenary` so we use `packer.nvim`'s own settings for this!

The new `plugins.lua` settings will look like this:
{% highlight lua %}
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function()
  use 'wbthomason/packer.nvim'
  use 'terroo/vim-simple-emoji'
  use 'navarasu/onedark.nvim'
  use {
    'nvim-telescope/telescope.nvim',
    requires = { {'nvim-lua/plenary.nvim'} }
  }
end)
{% endhighlight %}

Close and open Neovim and run the command: `:PackerInstall`. After closing and opening again, run the command:
{% highlight viml %}
:Telescope
{% endhighlight %}
A "*window*" will open in the bottom combo you can type the name of the file you want to manipulate, for more details see the [repository](https://github.com/nvim-telescope/telescope.nvim) .

See the Telescope output below:

[![Telescope.nvim](/assets/img/neovim/telescope.jpg)](/assets/img/neovim/telescope.jpg)


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

# Mappings
To end this episode, I'll leave the mapping file that I use every day. Create a file:
{% highlight sh %}
vim lua/configs/mappings.lua
{% endhighlight %}

And insert this content inside:
{% highlight lua %}
-- Exit with 'q' , if using macro recording change to <C-q> → Ctrl + q
vim.cmd([[ map q :q<CR> ]])

-- To Save with 'Ctrl + S' in Normal, Insert and Visual modes
-- You need to add the line: stty -ixon , to your ~/.bashrc
vim.cmd([[ nnoremap <C-s> :w<CR> ]])
vim.cmd([[ inoremap <C-s> <Esc>:w<CR>l ]])
vim.cmd([[ vnoremap <C-s> <Esc>:w<CR> ]])

-- Select all with 'Ctrl + A'
vim.cmd([[ map <C-a> ggVG ]])

-- BASH - Auto fills .sh files that don't exist with SheBang
vim.cmd([[ autocmd BufNewFile *.sh :call append(0, '#!/usr/bin/env bash') ]])

-- If the C++ file with .cpp extension does not exist, fill it in as below
-- change to your preferred language(s)
vim.cmd([[
function! AutoCpp()
call append(0, '#include <iostream>')
call append(1, '')
call append(2, 'int main( int argc , char **argv ){')
call append(3, " std::cout << \"Hello World!\" << '\\n';")
call append(4, ' return 0;')
call append(5, '}')
call cursor(4, 17)
endfunction
autocmd BufNewFile *.cpp :call AutoCpp()
]])
{% endhighlight %}
Read the comments and change it any way you like, and then don't forget to call it in your `init.lua`
{% highlight lua %}
require("configs.mappings")
{% endhighlight %}

---

### Other articles in the series
## 1. [How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
## 2. [From init.vim to init.lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
## 3. [Installing Plugins](https://en.terminalroot.com.br/installing-plugins)
# 4. [Customizing the Appearance](https://en.terminalroot.com.br/customizing-the-appearance)
## 5. [LSP, Autocomplete and Machine Learning](https://en.terminalroot.com.br/lsp-autocomplete-and-machine-learning)



