---
layout: post
title: "How to Customize Your VIM From Zero to C/C++ (Ubuntu Cinnamon)"
date: 2021-04-11 14:01:23
image: '/assets/img/vim/vim-c-cpp-en.jpg'
description: 'These procedures will also apply to other programming languages.'
featured-img: ../vim/vim-c-cpp-en.jpg
tags:
- vim
- cpp
- clanguage
---

![How to Customize Your VIM From Zero to C/C++ (Ubuntu Cinnamon)](/assets/img/vim/vim-c-cpp-en.jpg)

In these article we install plugins for:

+ Autocomplete for [C](https://en.terminalroot.com.br/why-is-the-c-programming-language-still-on-the-rise/)/[C++](https://en.terminalroot.com.br/drogon-cpp-the-fastest-web-framework-in-the-world/)
+ [Color Themes](https://en.terminalroot.com.br/install-colorscheme-terroo-colors-on-your-vim/)
+ [Autocomplete with Articial Intelligence and Machine Learning](https://en.terminalroot.com.br/install-in-your-preferred-editor-an-auto-complete-with-artificial-intelligence/)
+ Powerline for [Vim Airline](https://github.com/vim-airline/vim-airline)
+ Mappings
+ [Vim editor settings](https://en.terminalroot.com.br/100-tips-for-the-vim-editor/)
+ [Snippets](https://en.terminalroot.com.br/best-alternatives-for-sharing-code-snippets/)
+ [Fonts](https://github.com/terroo/fonts)
+ [Language Server](https://github.com/MaskRay/ccls)
+ In addition to additional Tips

> The procedures were performed on [Ubuntu Cinnamon](https://ubuntucinnamon.org/)

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# All settings

---

# 01. Update your system
{% highlight bash %}
sudo apt update && \
  sudo apt upgrade -y && \
  sudo apt clean && \
  sudo apt autoclean && \
  sudo apt autoremove -y
{% endhighlight %}

---

# 02. Install Vim, curl and Git
{% highlight bash %}
sudo apt install vim curl git wget
{% endhighlight %}

---

# 03. Install the [Vim Plug](https://github.com/junegunn/vim-plug)
{% highlight bash %}
curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
{% endhighlight %}
> Add to `~/.vimrc`

> The plugin <https://github.com/terroo/vim-simple-emoji> will be used to test if everything is working.

{% highlight vim %}
call plug#begin('~/.vim/plugged')
" Here will be only plugins

" Sample initial plugin
Plug 'terroo/vim-simple-emoji'

call plug#end()
{% endhighlight %}

Close `~/.vimrc` and open it again and then run:
{% highlight vim %}
:PlugInstall
{% endhighlight %}

Test to see if it's working:
{% highlight bash %}
vim test.md
{% endhighlight %}
Type `:smile:` and give space then, if the face appears: 😃 it's because everything is right! Or run `:ShowEmoji`.


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 04. Install [fonts](https://github.com/terroo/fonts)
{% highlight bash %}
git clone https://github.com/terroo/fonts
cd fonts
mv fonts ~/.local/share/fonts
cd && rm -rf fonts
fc-cache -fv
{% endhighlight %}

---

# 05. Install a vim color theme
> <https://github.com/Matsuuu/pinkmare>
{% highlight vim %}
Plug 'matsuuu/pinkmare'
{% endhighlight %}
> `colorscheme pinkmare " OPTIONAL: hi! MatchParen cterm=NONE,bold gui=NONE,bold guibg=NONE guifg=#FFFF00`

---

# 06. Additional and optional lines of my preference
{% highlight vim %}
set nu!
set mouse=a
set title
set cursorline
set encoding=utf-8 " Important to YCM
{% endhighlight %}

---

# 07. Interesting mappings
{% highlight vim %}
map q :quit<CR> " for quit only type q on command mode

" for save using Ctrl + s on command mode
" Need run this command: echo 'stty -ixon' >> ~/.bashrc && exec $SHELL
map <C-s> :write<CR> 
{% endhighlight %}

---

# 08. Install [YouCompleMe](https://github.com/ycm-core/YouCompleteMe)
> <https://github.com/ycm-core/YouCompleteMe>

+ Install dependencies
{% highlight bash %}
sudo apt install gcc g++ cmake make build-essential vim-nox python3-dev
{% endhighlight %}

+ Add to your `.vimrc`: `Plug 'ycm-core/YouCompleteMe'`
+ Complete the installation:
{% highlight bash %}
cd .vim/plugged/YouCompleteMe/
python3 install.py --clangd-completer # Only C/C++
# python3 install.py --all # Need Go and NPM:
# sudo apt install golang npm
{% endhighlight %}

+ Save this file: [.ycm_extra_conf.py](https://raw.githubusercontent.com/ycm-core/ycmd/66030cd94299114ae316796f3cad181cac8a007c/.ycm_extra_conf.py) in `~/.vim/.ycm_extra_conf.py`
+ Add this for others libs:
> `vim ~/vim/.ycm_extra_conf.py`

{% highlight python %}
'-I/usr/include/gtkmm-3.0',
'-I./',
'-I/usr/include'
{% endhighlight %}

# 09. Settings to YouCompleteMe
{% highlight bash %}
vim test.cpp
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

I came testing.cpp

+ By typing `#include <iostream>` and `#include <vector>` it will autocomplete! If not, add this line to your `~/.vimrc`
{% highlight vim %}
let g:ycm_global_ycm_extra_conf = '~/.vim/.ycm_extra_conf.py'
{% endhighlight %}

+ Removing the drop-down window when using the autocomplete, add this line:
{% highlight vim %}
set completeopt-=preview
{% endhighlight %}

+ To disable write-time diagnostics:
{% highlight vim %}
let g:ycm_show_diagnostics_ui = 0
{% endhighlight %}
> Compiling: `:terminal` and `g++ test.cpp`, to exit the terminal: exit.

---

# 10 Add [Auto-pairs](https://github.com/jiangmiao/auto-pairs)
> <https://github.com/jiangmiao/auto-pairs>

{% highlight vim %}
Plug 'jiangmiao/auto-pairs'
{% endhighlight %}

---

# 11. Installing the [ccls Language Server](https://github.com/MaskRay/ccls)
> <https://github.com/MaskRay/ccls>

{% highlight bash %}
sudo apt install ccls
{% endhighlight %}

Copy this code and paste into your `~/.vimrc`
{% highlight vim %}
let g:ycm_language_server =
  \ [{
  \   'name': 'ccls',
  \   'cmdline': [ 'ccls' ],
  \   'filetypes': [ 'c', 'cpp', 'cc', 'h', 'hpp' ],
  \   'project_root_files': [ '.ccls-root', 'compile_commands.json' ]
  \ }]
{% endhighlight %}
> Note that when autocompleting now it automatically adds a header, if you don't want that to happen, add this line to your `.vimrc`: `let g:ycm_clangd_args=['--header-insertion=never']`

---

# 12. Add [UtilSnips](https://github.com/SirVer/ultisnips) and [SuperTab](https://github.com/ervandew/supertab)
{% highlight vim %}
Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
Plug 'ervandew/supertab'
{% endhighlight %}

To work add this code:
{% highlight vim %}
let g:ycm_key_list_select_completion = ['<C-n>', '<Down>']
let g:ycm_key_list_previous_completion = ['<C-p>', '<Up>']
let g:SuperTabDefaultCompletionType = '<C-n>'
let g:UltiSnipsExpandTrigger = "<tab>"
let g:UltiSnipsJumpForwardTrigger = "<tab>"
let g:UltiSnipsJumpBackwardTrigger = "<s-tab>"
{% endhighlight %}
> Edit snippets in: `.vim/plugged/vim-snippets/UltiSnips/cpp.snippets` or `.vim/plugged/vim-snippets/snippets/cpp.snippets`

---

# Bonus
+ Add Vim Airline
{% highlight vim %}
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

:AirlineTheme
:help AirLineTheme
{% endhighlight %}

+ Install TabNine and make it compatible with YouCompleteMe
{% highlight bash %}
let extension = expand('%:e')

if( extension == "cpp" || extension == "cc" || extension == "h" || extension == "hpp" ) 
Plug 'ycm-core/YouCompleteMe'
else
Plug 'zxqfl/tabnine-vim'
endif
{% endhighlight %}

+ Install [Dracula Theme](https://draculatheme.com/)

---

# Watch the video
If you want to see all the steps above on video I recommend watching the video below. However, the video is in Brazilian Portuguese, but you will be able to follow the commands and settings without any problems.

<iframe width="900" height="380" src="https://www.youtube.com/embed/W8bFxnpJjF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
    
