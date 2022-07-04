---
layout: post
title: "How to Configure LSP for Typescript in Neovim"
date: 2022-07-04 11:34:57
image: '/assets/img/neovim/ts/typescript-neovim.jpg'
description: 'Second post in the series: How to configure LSP for your programming language in Neovim.'
tags:
- neovim
- typescript
- javascript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In [previous post](https://terminalroot.com/how-to-install-lua-lsp-on-neovim/) we showed how easy it is to configure LSP for the programming language [Lua ](https://terminalroot.com/tags#lua) and in this article we will see how to configure LSP for one of the most used languages by web developers which is the famous one: [Typescript](https://www.typescriptlang .org/) .

If you read the previous article you will see that there is no secret, however, having the [Neovim](https://terminalroot.com/tags#neovim) settings as [this other one](https://terminalroot.com/all-about-neovim-with-lua-how-to-customize-from-zero/) series, it's critical!

---

# Install LSP for Typescript
First you need to have **typescript-language-server** installed on your system. For this you can (and should) use [NPM](https://www.npmjs.com/), if you are in systems that use the APT package manager, to install, simply:

{% highlight bash %}
sudo apt install nodejs npm
{% endhighlight %}
> Use `search` from your system's package manager to find the correct name, but usually they are referred to by these same names.

Now use `npm` to install `typescript` and `typescript-language-server`, with the following command:

{% highlight bash %}
sudo npm install -g typescript typescript-language-server
{% endhighlight %}

---

# Configure Neovim
After installing the LSP for Typescript, you now have to "call" it in your Neovim settings. In my case I use the settings I showed in the series mentioned above, which is the `~/.config/nvim/lua/plugins/lsp.lua` file, but if you want to test it, you can try `~/.config/nvim/init .lua` , however, the first case is ideal.

Enter the line below:

{% highlight moon %}
require'lspconfig'.tsserver.setup {}
{% endhighlight %}


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

# Testing
After everything is installed and added as mentioned above, just test!
> Remember that the LSP for Typescript will only work if you have a `package.json` in the directory where you are writing the Typescript code.

Create a project:

{% highlight bash %}
mkdir TEST
cd TEST
npm install typescript --save-dev
nvim index.ts
{% endhighlight %}

Write your code and if everything is ok, you will have: function details, error and warning information, autocomplete and among others. Examples:

![Typescript LSP 1](/assets/img/neovim/ts/typescript-nvim-1.png)
![Typescript LSP 2](/assets/img/neovim/ts/typescript-nvim-2.png)
![Typescript LSP 3](/assets/img/neovim/ts/typescript-nvim-3.png)
![Typescript LSP 4](/assets/img/neovim/ts/typescript-nvim-4.png)
![Typescript LSP 5](/assets/img/neovim/ts/typescript-nvim-5.png)



---

# Useful links
+ <https://www.typescriptlang.org/>
+ <https://github.com/pwntester/nvim-lsp/tree/master/lua/nvim_lsp>
+ <https://github.com/pwntester/nvim-lsp/blob/master/lua/nvim_lsp/tsserver.lua>
