---
layout: post
title: "Get Bible Verses with This TUI App"
date: 2025-06-25 20:37:27
image: '/assets/img/tui/bible-tui.jpg'
description: "🙏 `bible-tui` is a command-line utility built with C++"
tags:
- cpp
- tui
- cli
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

`bible-tui` is a command-line utility that displays dynamic or selected Bible verses with different borders and color themes.  

Built with [C++20](https://terminalroot.com/tags#cpp) and available in: English and **Portuguese**.  


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
📦 Dependencies  
+ C++ Compiler: [GCC](https://gcc.gnu.org/) or [Clang](https://clang.llvm.org/)  
+ [CMake](https://cmake.org/)  
+ [cURL++](https://www.curlpp.org/)  

Example on Ubuntu:  
{% highlight sh %}
sudo apt install build-essential cmake libcurlpp-dev  
{% endhighlight %}

🚧 Build and Install  
{% highlight bash %}
git clone https://github.com/terroo/bible-tui  
cd bible-tui  
cmake . -B build  
cmake --build build  
sudo cmake --install build  
{% endhighlight %}

---  

## 💼 Usage Examples  

The example outputs in the images are in English, but `bible-tui` automatically detects your system language. You can also use the argument:  

![Examples](/assets/img/tui/en-blible-tui.png)  

---  

For more information, use: `bible-tui --help`  

{% highlight bash %}
Usage:  
bible-tui [options]  

Options:  
  --lang=pt|en                        Set the language.  
  --theme=real|lolcat|atom|style      Set the color theme.  
  --mold=default|double|rounded|empty Set the border style.  
  --book=name:num-num                 Set the book and verse.  
                                         Examples:  
                                           [EN]psalms:23-1 | [PT]salmos:23-1  
  --help, -h                          Show this message.  
  --version, -v                       Show version info.  
{% endhighlight %}

---  

Visit the repository and leave a star ⭐: <https://github.com/terroo/bible-tui>  


