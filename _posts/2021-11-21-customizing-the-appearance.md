---
layout: post
title: "Customizing the Appearance"
date: 2021-11-21 00:01:12
image: '/assets/img/neovim/appearance.jpg'
description: 'We've added Status Bar, Indent Lines, Color Display plus some extra plugins and configured it from scratch.'
featured-img: ../neovim/appearance.jpg
tags:
- neovim
- lua
---

![Customizing Appearance - All About Neovim with Lua](/assets/img/neovim/appearance.jpg)

In this article we are going to install 6 new plugins including:
+ Status bar
+ Icons
+ Indentation lines
+ Color check
+ Autopairs Neovim version written in Lua that does not pair when there is a character in front.
+ Character exchange

If you haven't seen the previous episodes, follow the links:
+ [All about Neovim with Lua - How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
+ [From init.vim to init.lua - Everything about Neovim with Lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
+ [Installing Plugins - Everything about Neovim with Lua](https://en.terminalroot.com.br/installing-plugins)


<!-- SQUARE -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Installing icons
Before anything else make sure you have the Terminal Root icons installed, the repository address is: <https://github.com/terroo/fonts>, use the `fonts` branch.

Once we have the fonts we will install the icons to use when installing the Status Bar. We will use [Nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons).

To do this, just add the line below to your `lua/plugins/plugins.lua`:
{% highlight lua %}
use 'kyazdani42/nvim-web-devicons'
{% endhighlight %}
> Then just run: `:PackerInstall`

Now create a file inside the directory and name: `~/.config/nvim/lua/plugins/utils.lua` and insert this content:
{% highlight lua %}
-- For nvim-web-devicons
require'nvim-web-devicons'.get_icons()
{% endhighlight %}

We won't see the effect of this yet, only when installing the next step plugin!

---

# Installing Status Bar
The status bar that I use and find it very cool is [staline.nvim](https://github.com/tamton-aquib/staline.nvim) it is very light and written in Lua, besides having several cool themes . To install, we already know in `plugins.lua`:

{% highlight lua %}
use 'tamton-aquib/staline.nvim'
{% endhighlight %}
And then: `:PackerInstall` .

Let's use that function concept we saw, so add this to the end of the `settings.lua` file:

{% highlight lua %}
vim.cmd([[ let extension = expand('%:e') ]])
{% endhighlight %}
> I use this variable for a code I created for my Status Bar.

Now let's go back to the `utils.lua` file and add this code which is in keeping with its theme that I use:
> Note that I'm using `require("lfs")`, I use it because it's easier to check if a directory exists, it's **L**ua **F**ile **S**ystem , a module that requires installation if you don't have it, use your system's package manager or [LuaRocks](https://en.terminalroot.com.br/definitive-guide-to-lua-for-beginners#luarocks) to install it, but try first if there isn't one critical is because it is already installed.

{% highlight lua %}
-- To Status Bar
require("lfs")

local function dot_git_exists()
  local path = "./.git"
  if (lfs.attributes(path, "mode") == "directory") then
    return true
  end
  return false
end

if dot_git_exists() then
  branch = '-branch'
else
  branch = '-📁'
  --branch = '- '
end

local function get_var(my_var_name)
  return vim.api.nvim_get_var(my_var_name)
end

extension = get_var("extension")

if extension == "cpp" or extension == "hpp" or extension == "h" then
  this_lsp = '-lsp_name'
else
  this_lsp = '-file_size'
end


require('staline').setup{
  sections = {
    left = {
      ' ', 'right_sep_double', '-mode', 'left_sep_double', ' ',
      'right_sep', '-file_name', 'left_sep', ' ',
      'right_sep_double', branch, 'left_sep_double', ' ',
    },
    mid = {'-lsp'},
    right= {
      'right_sep', '-cool_symbol', 'left_sep', ' ',
      'right_sep', '- ', this_lsp, '- ', 'left_sep',
      'right_sep_double', '-line_column', 'left_sep_double', ' ',
    }
  },

  defaults={
    fg = "#f7f7f7",
    cool_symbol = "  ",
    left_separator = "",
    right_separator = "",
    line_column = "%l:%c [%L]",
    true_colors = false,
    line_column = "[%l:%c] 並%p%% ",
    stab_start = "",
    stab_end = ""
    --font_active = "bold"
  },
  mode_colors = {
    n = "#921F81",
    i = "#006A6B",
    ic = "#E4BF7B",
    c = "#2a6099",
    v = "#D71B39"
  }
}
{% endhighlight %}
> Colors are in `mode_colors`, change to the colors you want (**n** for **Normal** mode, **i** for **Insert** and so on).


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


If you want your distro icon to appear, download [this file](https://github.com/terroo/dotfiles/blob/main/systems-icons.lua) run it with `lua systems-icons.lua` and see if your distro/system icon appears on the terminal. Copy and replace the Gentoo(`cool_symbol`) icon with what you want!

Another thing is that I only use LSP for [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/), however later we'll detail LSP, then you can change it as you wish, rest assured!

The result of the Status Bar should look similar to this:

[![staline.nvim](/assets/img/neovim/staline.png)](/assets/img/neovim/staline.png)

If you want a different theme see the procedure in the [repository](https://github.com/tamton-aquib/staline.nvim)

---

# Indentation Line
A really cool feature in an IDE is the fact that it has lines that determine where code indentation starts and ends. And a plugin that does this extraordinarily is [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim)

We added to `plugins.lua` and installed:
{% highlight lua %}
use 'lukas-reineke/indent-blankline.nvim'
-- :PackerInstall
{% endhighlight %}

After installing and using `:PackerCompile` (which in our case is automatic, as we did) it already works! Open any file and note that the indentation lines already exist.

You can create new files for each plugin with the same name as the plugin (that's how I do it), but here we'll add the settings to `lua/plugins/utils.lua` to centralize the information.

If you want the indented lines to be colored, add this to your `utils.lua`
{% highlight lua %}
-- FOR THE INDENTATION LINES

vim.opt.listchars:append("space:⋅")
--vim.opt.listchars:append("eol:↴")
vim.cmd [[highlight IndentBlanklineIndent1 guifg=#E06C75 gui=nocombine]]
vim.cmd [[highlight IndentBlanklineIndent2 guifg=#E5C07B gui=nocombine]]
vim.cmd [[highlight IndentBlanklineIndent3 guifg=#98C379 gui=nocombine]]
vim.cmd [[highlight IndentBlanklineIndent4 guifg=#56B6C2 gui=nocombine]]
vim.cmd [[highlight IndentBlanklineIndent5 guifg=#61AFEF gui=nocombine]]
vim.cmd [[highlight IndentBlanklineIndent6 guifg=#C678DD gui=nocombine]]

vim.cmd([[
  hi! MatchParen cterm=NONE,bold gui=NONE,bold guibg=NONE guifg=#FFFFFF
  let g:indentLine_fileTypeExclude = ['dashboard']
]])


require("indent_blankline").setup {
    show_end_off_line = true,
    space_char_blankline = " ",
    char_highlight_list = {
        "IndentBlanklineIndent1",
        "IndentBlanklineIndent2",
        "IndentBlanklineIndent3",
        "IndentBlanklineIndent4",
        "IndentBlanklineIndent5",
        "IndentBlanklineIndent6",
    },
}
{% endhighlight %}

The result will be this:

![indent-blankline.nvim](/assets/img/neovim/indent-blankline.png)

For more information see the [repository](https://github.com/lukas-reineke/indent-blankline.nvim) .

---

# Displaying colors when typed
When working with colors, it is interesting to type the name or code of the hexadecimal or RGB color and then display it so that we know what color it is and how it will be displayed. For example:
<kbd style="color: #554477">#554477</kbd> .

For this we will use [nvim-colorizer.lua](https://github.com/norcalli/nvim-colorizer.lua)

{% highlight lua %}
use 'nvim-colorizer.lua'
--PackerInstall
{% endhighlight %}

And in `utils.lua` just import it and call the `setup` function to load it:
> Add this line:
{% highlight lua %}
-- FOR THE COLORIZER
require'colorizer'.setup()
{% endhighlight %}

Now the colors typed into your Neovim will appear like this:

![nvim-colorizer.lua](/assets/img/neovim/nvim-colorizer.png)

---

# Extra plugins
To finish this episode I recommend two plugins that we talk about them [in this video](https://www.youtube.com/watch?v=PmKJT6SlN-Q) .

Which is [Vim Surround](https://github.com/tpope/vim-surround), to create or replace characters around a word, very useful for those who frequently write in [Markdown](https://terminalroot .com.br/tags#markdown) and [Nvim Autopairs](https://github.com/windwp/nvim-autopairs) , it is superior to *Vim Autopairs*, because if there is a character in front it does not add.

Just install them.
{% highlight lua %}
use 'tpope/vim-surround'
use 'windwp/nvim-autopairs'
-- PackerInstall
{% endhighlight %}

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



Surround is automatically available after installing, Nvim Autopairs needs to add this code to its `utils.lua`:
-- FOR AUTOPAIRS
{% highlight lua %}
require('nvim-autopairs').setup({
  enable_check_bracket_line = false
})
{% endhighlight %}

For more information about these plugins see their repository.

---

### Other articles in the series
## 1. [How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
## 2. [From init.vim to init.lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
## 3. [Installing Plugins](https://en.terminalroot.com.br/installing-plugins)
## 4. [Customizing the Appearance](https://en.terminalroot.com.br/customizing-the-appearance)
# 5. [LSP, Autocomplete and Machine Learning](https://en.terminalroot.com.br/lsp-autocomplete-and-machine-learning)


