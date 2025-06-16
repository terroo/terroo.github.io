---
layout: post
title: "Transform Your Images into ASCII Easily via Command Line"
date: 2025-06-16 12:47:31
image: '/assets/img/cppdaily/pixcii.jpg'
description: "🚀 Pixcii is an easy-to-use utility written in C++"
tags:
- cpp
- cli
- terminal
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

**Pixcii** is a simple pixel art editor designed to run directly in the [terminal](https://terminalroot.com/tags#terminal) ([CLI](https://terminalroot.com/tags#cli)). Perfect for those who love ASCII art or need a lightweight tool to create minimalist sprites.  

🧰 **Key Features:**  

* Interactive terminal interface  
* Real-time editing with keyboard shortcuts  
* Export to `.txt`  
* Color support via ANSI escape codes  

🛠️ **Built with:** [C++](https://terminalroot.com/tags#cpp)  


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

## 🚀 Quick Installation:  
You’ll need a [C++ compiler](https://terminalroot.com/tags#compilers) and [CMake](https://terminalroot.com/tags#cmake) installed on your system.  

{% highlight bash %}  
git clone https://github.com/ashish0kumar/pixcii  
cd pixcii  
cmake . -B build  
cmake --build build  
mkdir -p ~/.local/bin  
mv build/pixcii ~/.local/bin  
echo 'PATH="${HOME}/.local/bin:${PATH}"' >> ~/.bashrc  
exec $SHELL  
{% endhighlight %} 

---  

## 📢 Usage  
Example using this image:  
> Ideally, use images sized `40x40`, though `pixcii` supports the `--scale` argument for resizing.  

![C++ logo png](/assets/img/cppdaily/cpp-logo.png)  

{% highlight bash %}  
pixcii --color -i cpp-logo.png -o output.txt  
cat output.txt  
{% endhighlight %} 

> If there’s no background color, it looks great, but `JPG` images with black backgrounds will also have their backgrounds ignored.  

💡 Useful for prototyping retro art, [creating apps](https://terminalroot.com/startfetch-a-fetch-that-shows-the-zodiac-constellations/), studying terminal manipulation, or making simple assets for ASCII-style games.  

---  

For more info, use `help`:  
{% highlight bash %}  
pixcii --help  
{% endhighlight %} 

Visit the [official repository](https://github.com/ashish0kumar/pixcii).  


