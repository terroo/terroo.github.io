---
layout: post
title: "LSP, Autocomplete and Machine Learning"
date: 2021-11-21 00:03:25
image: '/assets/img/neovim/lsp-tabnine-sig.jpg'
description: 'We installed Neovim LSP, function signing, snippets and more and made it much more comfortable!'
featured-img: ../neovim/lsp-tabnine-sig.jpg
tags:
- neovim
- lua
---

![LSP, Autocomplete and Machine Learning - Neovim with Lua](/assets/img/neovim/lsp-tabnine-sig.jpg)

Today we're going to finish our series here on the blog.

If you haven't seen the previous chapters, follow the links:
+ [How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
+ [From init.vim to init.lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
+ [Installing Plugins](https://en.terminalroot.com.br/installing-plugins)
+ [Customizing the Appearance](https://en.terminalroot.com.br/customizing-the-appearance)

And in this article we'll install and configure:

+ [nvim-lsp](https://github.com/neovim/nvim-lspconfig) - A language server (LSP, serves to complete reserved words of the language you are writing) created by the Neovim team itself;
+ [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) - An autocomplete to display language server options and so on;
+ [cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp) - LSP-specific autocomplete;
+ [cmp-buffer](https://github.com/hrsh7th/cmp-buffer) - To get the buffer terms;
+ [cmp-path](https://github.com/hrsh7th/cmp-path/) - To get the system paths (Ex.: `/home/user/file`) when we start typing;
+ [cmp-cmdline](https://github.com/hrsh7th/cmp-cmdline) - For command line;
+ [LuaSnip](https://github.com/L3MON4D3/LuaSnip) - For snnipets;
+ [cmp_luasnip](https://github.com/saadparwaiz1/cmp_luasnip) - Source of snnipets for LuaSnip;
+ [friendly-snippets](https://github.com/rafamadriz/friendly-snippets) - Complete the snippets with `<Tab>`;
+ [lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim) - To obtain the signature of the function we use;
+ [cmp-tabnine](https://github.com/tzachar/cmp-tabnine) - Machine Learning for more advanced autocomplete;
+ [lspkind-nvim](https://github.com/onsails/lspkind-nvim) - When the autocomplete *combo* opens it displays *friendly* icons and information.


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

# Installing LSP and Autocomplete
Right away we'll add all the plugins and then we'll create the configuration files because they'll all be nested.

Add these lines to your `~/.config/nvim/lua/plugins/plugins.lua`:

{% highlight lua %}
use 'neovim/nvim-lspconfig'
use 'hrsh7th/nvim-cmp'
use 'hrsh7th/cmp-nvim-lsp'
use 'hrsh7th/cmp-buffer'
use 'hrsh7th/cmp-path'
use 'hrsh7th/cmp-cmdline'
use 'saadparwaiz1/cmp_luasnip'
use 'L3MON4D3/LuaSnip'
use 'rafamadriz/friendly-snippets'
use 'ray-x/lsp_signature.nvim'
use {'tzachar/cmp-tabnine', run='./install.sh', requires = 'hrsh7th/nvim-cmp'}
use 'onsails/lspkind-nvim'
{% endhighlight %}
> Note that **tabnine** will run a [sh](https://en.terminalroot.com.br/45-examples-of-variables-and-arrays-in-shell-script/) script as soon as it is added and has **nvim-cmp** as a dependency.

And then run: `:PackerInstall` .

---
# Configuring for Tabnine
Now let's create another file in : `~/.config/nvim/lua/plugins/tabnine.lua` and add the code for Machine Learning:

{% highlight lua %}
location has_any_words_before = function()
  if vim.api.nvim_buf_get_option(0, "buftype") == "prompt" then
    return false
  end
  local line, col = unpack(vim.api.nvim_win_get_cursor(0))
  return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match("%s") == nil
end

require'lspconfig'.clangd.setup{}
require "lsp_signature".setup()
vim.o.completeopt = 'menuone,noselect'

local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities = require('cmp_nvim_lsp').update_capabilities(capabilities)

cmp location = require'cmp'
location luasnip = require("luasnip")

cmp.setup({
  mapping = {

    ['<C-n>'] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),
    ['<C-p>'] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),
    ['<Down>'] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Select }),
    ['<Up>'] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Select }),
    ['<C-d>'] = cmp.mapping.scroll_docs(-4),
    ['<C-f>'] = cmp.mapping.scroll_docs(4),
    ['<C-Space>'] = cmp.mapping.complete(),
    ['<C-e>'] = cmp.mapping.close(),
    ['<CR>'] = cmp.mapping.confirm({
      behavior = cmp.ConfirmBehavior.Replace,
      select = true,
    }),

    ['<Tab>'] = function(fallback)
      if cmp.visible() then
        cmp.select_next_item()
      elseif luasnip.expand_or_jumpable() then
        vim.fn.feedkeys(vim.api.nvim_replace_termcodes('<Plug>luasnip-expand-or-jump', true, true, true), '')
      else
        fallback()
      end
    end,
    ['<S-Tab>'] = function(fallback)
      if cmp.visible() then
        cmp.select_prev_item()
      elseif luasnip.jumpable(-1) then
        vim.fn.feedkeys(vim.api.nvim_replace_termcodes('<Plug>luasnip-jump-prev', true, true, true), '')
      else
        fallback()
      end
    end,

  },

  snippet = {
    expand = function(args)
      require('luasnip').lsp_expand(args.body)
    end,
  },
  sources = {
    { name = 'cmp_tabnine' },
    { name = 'luasnip' },
    { name = 'path' },
  },
})
tabnine location = require('cmp_tabnine.config')
tabnine:setup({
  max_lines = 1000;
  max_num_results = 20;
  sort = true;
  run_on_every_keystroke = true;
  snippet_placeholder = '..';
})

require('lspkind').init({
  with_text = true,
  preset = 'codicons',
  symbol_map = {
    Text = "",
    Method = "",
    Function = "",
    Constructor = "",
    Field = "ﰠ",
    Variable = "",
    Class = "ﴯ",
    Interface = "",
    Module = "",
    Property = "ﰠ",
    Unit = "塞",
    Value = "",
    Enum = "",
    Keyword = "",
    Snippet = "",
    Color = "",
    File = "",
    Reference = "",
    Folder = "",
    EnumMember = "",
    Constant = "",
    Struct = "פּ",
    Event = "",
    Operator = "",
    TypeParameter = ""
  },
})

require("luasnip/loaders/from_vscode").load()

lspkind location = require('lspkind')

source_mapping location = {
  buffer = "◉ Buffer",
  nvim_lsp = "👐 LSP",
  nvim_lua = "🌙 Lua",
  cmp_tabnine = "💡 Tabnine",
  path = "🚧 Path",
  luasnip = "🌜 LuaSnip"
}

require'cmp'.setup {
  sources = {
    { name = 'cmp_tabnine' },
    { name = 'luasnip' },
    { name = 'path' }
  },
  formatting = {
    format = function(entry, vim_item)
      vim_item.kind = lspkind.presets.default[vim_item.kind]
      local menu = source_mapping[entry.source.name]
      if entry.source.name == 'cmp_tabnine' then
        if entry.completion_item.data ~= nil and entry.completion_item.data.detail ~= nil then
          menu = entry.completion_item.data.detail .. ' ' .. menu
        end
        vim_item.kind = ''
      end
      vim_item.menu = menu
      return vim_item
    end
  },
}
{% endhighlight %}

Do NOT add it to your `init.lua` yet, as we are going to create a condition.


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

# Settings for LSP
Let's create another file(`~/.config/nvim/lua/plugins/lsp.lua`) with similar code (you might think there will be duplicate code, but we are using all local variables and the file will only load accordingly with the later file we are going to create), but for the LSP:

{% highlight lua %}
location has_any_words_before = function()
  if vim.api.nvim_buf_get_option(0, "buftype") == "prompt" then
    return false
  end
  local line, col = unpack(vim.api.nvim_win_get_cursor(0))
  return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match("%s") == nil
end

require'lspconfig'.clangd.setup{}
require "lsp_signature".setup()
vim.o.completeopt = 'menuone,noselect'

local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities = require('cmp_nvim_lsp').update_capabilities(capabilities)

cmp location = require'cmp'
local luasnip = require("luasnip")

local lspkind = require('lspkind')
source_mapping location = {
  buffer = "◉ Buffer",
  nvim_lsp = "👐 LSP",
  nvim_lua = "🌙 Lua",
  cmp_tabnine = "💡 Tabnine",
  path = "🚧 Path",
  luasnip = "🌜 LuaSnip"
}

cmp.setup({
  sources = {
    { name = 'nvim_lsp' },
    { name = 'luasnip' },
    { name = 'buffer' },
    { name = 'path' },
    { name = 'nvim_lua' },
  },

  formatting = {
    format = function(entry, vim_item)
      vim_item.kind = lspkind.presets.default[vim_item.kind]
      local menu = source_mapping[entry.source.name]
      if entry.source.name == 'cmp_tabnine' then
        if entry.completion_item.data ~= nil and entry.completion_item.data.detail ~= nil then
          menu = entry.completion_item.data.detail .. ' ' .. menu
        end
        vim_item.kind = ''
      end
      vim_item.menu = menu
      return vim_item
    end
  },

  snippet = {
    expand = function(args)
      require('luasnip').lsp_expand(args.body)
    end,
  },
  mapping = {

    ['<C-n>'] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),
    ['<C-p>'] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),
    ['<Down>'] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Select }),
    ['<Up>'] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Select }),
    ['<C-d>'] = cmp.mapping.scroll_docs(-4),
    ['<C-f>'] = cmp.mapping.scroll_docs(4),
    ['<C-Space>'] = cmp.mapping.complete(),
    ['<C-e>'] = cmp.mapping.close(),
    ['<CR>'] = cmp.mapping.confirm({
      behavior = cmp.ConfirmBehavior.Replace,
      select = true,
    }),

    ['<Tab>'] = function(fallback)
      if cmp.visible() then
        cmp.select_next_item()
      elseif luasnip.expand_or_jumpable() then
        vim.fn.feedkeys(vim.api.nvim_replace_termcodes('<Plug>luasnip-expand-or-jump', true, true, true), '')
      else
        fallback()
      end
    end,
    ['<S-Tab>'] = function(fallback)
      if cmp.visible() then
        cmp.select_prev_item()
      elseif luasnip.jumpable(-1) then
        vim.fn.feedkeys(vim.api.nvim_replace_termcodes('<Plug>luasnip-jump-prev', true, true, true), '')
      else
        fallback()
      end
    end,
  },
})

require("luasnip/loaders/from_vscode").load()
{% endhighlight %}

---

# Setting files dynamically
There are a few details to make everyone work normally. **tabnine** is interesting to run when there is no LSP available, I usually include it in [Markdown]() files because it's easier, as when I'm writing code, it can mess up your LSP.

So, to separate let's do the following, let's create a file inside `lua/plugins` named `complete.lua` and insert the following content:

> `vim ~/.config/nvim/lua/plugins/complete.lua`

{% highlight lua %}
if extension == "md" then
  require("plugins.tabnine")
else

  require("plugins.lsp")
end
{% endhighlight %}

And to load this new file, import into your `init.lua`:
{% highlight lua %}
require("plugins.complete")
{% endhighlight %}

---

Now just test!

See below some videos/gif/image of the plugins we installed:

## snippets

![Snippets](https://user-images.githubusercontent.com/67771985/131255342-e393165a-e4b1-401e-9084-a782b9dd3fef.gif)

---

## Signature to Functions


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

![lsp_signature](/assets/img/neovim/signature.gif)
---

## Autocomplete

<iframe width="910" height="390" src="https://user-images.githubusercontent.com/629908/139000570-3ac39587-a88b-43c6-b35e-207489719359.mp4" frameborder="0" allow= "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## LSP Kind

![lspkind](https://github.com/onsails/lspkind-nvim/raw/images/images/screenshot.png)

---

## Other articles in the series
# 1. [How to Customize from Zero](https://en.terminalroot.com.br/all-about-neovim-with-lua-how-to-customize-from-zero)
# 2. [From init.vim to init.lua](https://en.terminalroot.com.br/from-initvim-to-initlua)
# 3. [Installing Plugins](https://en.terminalroot.com.br/installing-plugins)
# 4. [Customizing the Appearance](https://en.terminalroot.com.br/customizing-the-appearance)
# 5. [LSP, Autocomplete and Machine Learning](https://en.terminalroot.com.br/lsp-autocomplete-and-machine-learning)


---




