---
layout: post
title: "Get the Syntax of a Hexadecimal Color for the Terminal (ANSI RGB)"
date: 2025-07-01 13:01:45
image: '/assets/img/terminal/hexter-thumb.jpg'
description: "🎨 Easily copy the syntax and use it quickly."
tags:
- cpp
- cli
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

I often create various [CLI](https://terminalroot.com/tags#cli) and [TUI](https://terminalroot.com/tags#tui) applications that heavily use ANSI color resources for the [terminal](https://terminalroot.com/tags#terminal). Usually, I need to pick the color in [GIMP](https://terminalroot.com/tags#gimp) or [rgb-tui](https://terminalroot.com/select-colors-in-terminal-with-rgb-tui/) and then assemble and test it to see how it will look.  

To automate this step in development, I created `hexter`, which allows me to quickly and easily get the syntax of a hexadecimal color for the terminal (ANSI RGB).  

I decided to build a command-line utility and also an [API](https://terminalroot.com/tags#api) to integrate into my projects. And I chose to make it available for anyone interested.  


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

## 📥 Installation  
`hexter` was built with [C++](https://terminalroot.com/tags#cpp), so to compile and install it, you need the following installed on your system:  
+ A C++ compiler: [GCC](https://terminalroot.com/tags#gcc) or [Clang](https://terminalroot.com/tags#clang)  
+ And also [CMake](https://terminalroot.com/tags#cmake)  

Then, just clone, build, and install:  
{% highlight bash %}
git clone https://github.com/terroo/hexter  
cd hexter  
cmake . -B build  
cmake --build build  
sudo cmake --install build  
{% endhighlight %}

---  

## ⚙️ Usage  
The usage is simple and intuitive—just run the `hexter` command and provide the hexadecimal color with or without a *hash* (`#`):  
> When using a *hash*, enclose the color in single or double quotes.  

{% highlight bash %}
hexter '#a6e22e'  
hexter fd6389  
{% endhighlight %}

If you have a file with your [color theme](https://terminalroot.com/top-8-best-color-themes-for-your-vim-neovim/), you can loop through it and get all the colors at once, for example:  

{% highlight bash %}
cat theme.txt  

#121212  
#3a3b3f  
#5f5f5f  
#afafaf  
#eeeeee  
#ffffff  
#d7d7ff  
#7cdce7  
#84afd7  
#d7af87  
#2ec27e  
#fd6389  

for i in $(cat theme.txt); do hexter "$i"; done  
{% endhighlight %}

Output:  

![All hexter colors](./hexter-theme.jpg)  

> This is the [theme](https://sobrio.elvessousa.com/)  
![sobrio](./sobrio-theme.jpg)  

---  

## 🔠 Use the API  
You can also easily use the [API](https://terminalroot.com/tags#api) to get the hexadecimal color—just include the header and use `hexter::color`. There's also `hexter::off` to *turn off* a color, for example:  

{% highlight cpp %}
#include <print>  
#include "hexter-color.hpp"  

int main(){  
  std::println("{}Hello, World!{}", hexter::color("#84afd7"), hexter::off);  
}  
{% endhighlight %}

If you want to install the API to include it more easily directly in your system, run, for example:  
{% highlight bash %}
sudo wget -q \  
  https://raw.githubusercontent.com/terroo/hexter/refs/heads/main/hexter-color.hpp \  
  -O /usr/local/include/hexter-color.hpp  
{% endhighlight %}
> Then you can use it like this: `#include <hexter-color.hpp>`, as it is *header-only*.  

---  

For more information, send a *PR*, and/or report *issues*, visit the repository: <https://github.com/terroo/hexter>.

