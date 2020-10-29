---
layout: post
title: "8 Interesting Tips for Your Vim"
date: 2020-10-29 13:16:49
image: '/assets/img/vim/vim-tips.jpg'
description: 'Improving Improved.'
featured-img: ../vim/vim-tips.jpg
tags:
- vim
---

![8 Interesting Tips for Your Vim](/assets/img/vim/vim-tips.jpg)


# 1. Create a new file or directory using [NERDTree](https://github.com/preservim/nerdtree)
A lot of people don't know, but it is possible to create files and directories directly through [NERDTree](https://github.com/preservim/nerdtree).

With NERDTree open, position the cursor on the directory you want to create and press `m`, then press a and type the name of the file/directory, if you put a slash `/` at the end it will create a directory, if a file will not be created!

![NERDTree](/assets/img/vim/nerdtree-file-dir.jpg)

To cancel press **ESC**, to update NERDTree after creation press `Shift + r` and for other procedures read the menu as in the image above! 😃, cool, right ?!

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

# 2. [SURROUND](https://github.com/tpope/vim-surround) closing bracket
I use [Vim.surround](https://github.com/tpope/vim-surround) a lot to generate links in MarkDown and usually the word is already typed and that brought me some more work.

When you select a word, key `S` and then key `[` it produces this: `[ word ]`, that is, it creates a space between the brackets and the word, to avoid this, instead of using the opening bracket, use the closing bracket `]` and it will produce: [word] (without spaces), to go to the end of the word just type `W` in command mode 🍺.

---

# 3. List autocomplete with [Bullets.vim](https://github.com/dkarter/bullets.vim)
Problems creating dynamic lists in Vim ?! No more, use Bullets.vim and let it autocomplete your lists for you:

![Bullets.vim](/assets/img/vim/bullets.gif)

---

# 4. Set mouse={a,n,i,c,v,h,r}
Do you like the ease of the `mouse=a` set, but also hate it 😡 when you select it in normal mode ??? Having to keep running the controller all the time is boring!

Use this function in your `~/.vimrc` or in your `~/.config/nvim/init.vim` and change the mode only by pressing `F4`

{% highlight viml %}
function! StatusMouse()
        if &mouse == 'a' 
         set mouse=i
        else
         set mouse=a
        endif
endfunction
nnoremap <silent> <F4> <ESC>:call StatusMouse()<CR>
{% endhighlight %}

Simple and practical! 😃

---

# 5. TAB BUFFER no NERDTree
Let's go again with another tip for NERDTree. Upset about the way NERDTree opens the file when you click directly on it? Force it to load the buffered file with this code:
{% highlight bash %}
nnoremap <C-q> :bp<cr>:bd #<cr>
{% endhighlight %}
For more information see the NERDTree documentation: `:h NERDTree`

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

# 6. Simple and useful emojis
There are several options for automatically inserting emoji into Vim, but many of them also stress the amount of emojis.

So, to get around this problem I created [Vim Simple Emoji](https://github.com/terroo/vim-simple-emoji). To install it use your favorite plugin manager, example:
{% highlight bash %}
Plugin 'terroo/vim-simple-emoji'
{% endhighlight %}

And then run the command: `:PluginInstall`.

And to use, insert the emoji name between two points and press the [space] button and the emoji will be displayed at the cursor position. Example:
{% highlight bash %}
:smile:<space>
{% endhighlight %}

This will result in: 😃

Want to know the name of all the available emojis? Run: `:ShowEmoji`. Some names have been modified to make them more peculiar, example: `:linux` : will display the penguin 🐧

![:ShowEmoji](/assets/img/vim/vim-simple-emoji.jpg)

---

# 7. Define the colors of your Vim your way
Want some cool colors for the background and front for your Vim? Define yourself! For the back alter the hex of the `guibg` value and for the front `guifg`, example:

{% highlight bash %}
highlight Normal guifg=#e0e0e0 guibg=#353945 gui=NONE ctermfg=250 ctermbg=235 cterm=NONE
{% endhighlight %}

If you want a dark or light background, use also: `set bg=dark` or `set bg=light`

Do you also want to highlight the current line? Easy, use: `set cursorline`. 😎

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

# 8. Your coolest vim-airline!
And to finish today's tips, nothing like inserting a cool [unicode](https://pt.wikipedia.org/wiki/Unicode) in your [vim-airline](https://github.com/vim-airline/vim-airline), add the symbol: ◉  the section bar:

![Vim airline](/assets/img/vim/bar-vim-airline.png)

---

These tips were created based on the questions that make me like: How did you do that in your Vim? . If you have a cool question, comment!

There are some videos that I created about Vim. However, they are in Brazilian Portuguese. But if you are interested in watching, follow the videos:

# [Implementing and Using Vim Quick UI](https://www.youtube.com/watch?v=LMKiTPMV4U4&list=PLUJBQEDDLNcnl-1CebtDi6tlt9TtsrkgP&index=7)
# [The 7 Best Plugins for your Vim](https://www.youtube.com/watch?v=PmKJT6SlN-Q&list=PLUJBQEDDLNcnl-1CebtDi6tlt9TtsrkgP&index=5)
# [10 TIPS for You to Use VIM as a NINJA](https://www.youtube.com/watch?v=nFWQJiLvjnk&list=PLUJBQEDDLNcnl-1CebtDi6tlt9TtsrkgP&index=3)
# [10 Interesting Lines for your .vimrc - VIM](https://www.youtube.com/watch?v=XXGk3n1uzPg&list=PLUJBQEDDLNcnl-1CebtDi6tlt9TtsrkgP&index=4)
# [How to Make Your VIM So! Spacevim: Installation and Configuration](https://youtu.be/nfPubmjO5xw?list=PLUJBQEDDLNcnl-1CebtDi6tlt9TtsrkgP)

<iframe width="1100" height="490" src="https://www.youtube.com/embed/nfPubmjO5xw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


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
    
