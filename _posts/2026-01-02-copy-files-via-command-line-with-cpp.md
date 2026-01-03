---
layout: post
title: "Copy Files via Command Line with C++"
date: 2026-01-02 23:05:48
image: '/assets/img/cpp/xclip.jpg'
description: "🕸️ Your custom command, simple and fast!"
tags:
- cpp
- cppdaily
- cli
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

How about the convenience of copying files via the command line? You can quickly create your own command with [C++](https://terminalroot.com/tags#cpp).

See the step-by-step guide below!


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

## Dependencies
Example for distros that use APT as the package manager
> Look for corresponding names for your distro.

{% highlight bash %}
sudo apt install build-essential libx11-dev libxcb1-dev libpng-dev
{% endhighlight %}

Also compile and install [clip](https://github.com/dacap/clip)
{% highlight bash %}
git clone https://github.com/dacap/clip
cd clip
cmake . -B build
cmake --build build
sudo cmake --install build
{% endhighlight %}
---

## Create the Code
Example: `main.cpp`

{% highlight cpp %}
#include <clip.h>
#include <fstream>
#include <iostream>
#include <sstream>
#include <memory>

const auto use = [](){
  std::cerr << "Use: xclip++ <file> [file...]\n";
};

class Xclip {
  public:
    Xclip(int argc, char** argv){
      std::ostringstream buffer;

      for (int i = 1; i < argc; ++i) {
        std::ifstream file(argv[i], std::ios::binary);
        if (!file) {
          std::cerr << "Error opening: " << argv[i] << "\n";
          std::exit(1);
        }

        buffer << file.rdbuf();

        if(i + 1 < argc){
          buffer << '\n';
        }
      }

      clip::set_text(buffer.str());
    }
};

int main(int argc, char** argv){
  if(argc < 2){
    use();
    return 1;
  }

  auto xclip = std::make_unique<Xclip>(argc, argv);
}
{% endhighlight %}

---

## Compile and Install
{% highlight bash %}
g++ main.cpp -o xclip++ -lclip -lxcb -lX11 -lpng -pthread
sudo install -v xclip++ /usr/local/bin/
{% endhighlight %}

---

## Use Easily
{% highlight bash %}
xclip++ file.txt
# Or multiple files
xclip++ file1.txt file2.md file3.cpp # ...
{% endhighlight %}

---

See also: [Copy and Paste via Linux Command Line with xclip](https://terminalroot.com.br/2020/10/copie-e-cole-via-linha-de-comando-do-linux-com-xclip.html)


