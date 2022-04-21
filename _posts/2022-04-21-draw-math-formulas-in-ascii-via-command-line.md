---
layout: post
title: "Draw math formulas in ASCII via command line"
date: 2022-04-21 11:14:08
image: '/assets/img/cppdaily/diagon.jpg'
description: 'Built with C++ and WebAssembly for the Web.'
tags:
- cpp
- cppdaily
- terminal
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Diagon** is an interactive interpreter. It transforms the expression of markdown style into an ascii art representation.

It was written in [C++](https://terminalroot.com/tags#cpp) and uses WebAssembly, [HTML](https://terminalroot.com/tags#html) and [CSS](https: //terminalroot.com/tags#css) to make a Web application, in addition to being able to use it via the command line.

---

# Installation
Use [Git](https://terminalroot.com/tags#git), [CMake](https://terminalroot.com/tags#cmake), [GNU Make](https://terminalroot .com/tags#make) and of course [GCC](https://terminalroot.com/tags#gcc) or [clang](https://terminalroot.com/tags#clang) to build:

{% highlight sh %}
git clone https://github.com/ArthurSonzogni/Diagon
CD Diagon
mkdir build && cd build
cmake..
make

{% endhighlight %}

Test the binary before installing:
{% highlight sh %}
echo "1+1/2 + sum(i,0,10) = 112/2" | ./diagon-1.0.127 Math
{% endhighlight %}

Likely output:
{% highlight sh %}
        10         
        ___        
    1   ╲       112
1 + ─ + ╱   i = ───
    2   ‾‾‾      2 
         0   
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

Finally, install:
{% highlight sh %}
sudo make install
{% endhighlight %}

It will be installed in the paths:
{% highlight sh %}
-- Install configuration: "Release"
-- Installing: /usr/local/bin/diagon-1.0.127
-- Installing: /usr/local/bin/diagon
{% endhighlight %}

You can also install via: **snap**:
{% highlight sh %}
sudo snap install diagon
{% endhighlight %}

Use `--help` for more information and run the examples.

The web example will open at <http:localhost:8888> . Taking as a reference if you are still inside `build/`.

> Will open in your default browser!
{% highlight sh %}
cd ../src
./run_diagon.sh
{% endhighlight %}

For more information visit the [repository](https://github.com/ArthurSonzogni/Diagon) .

