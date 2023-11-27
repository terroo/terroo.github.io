---
layout: post
title: "How to Reverse Engineer with ImHex and hide your assets"
date: 2023-11-27 09:29:42
image: '/assets/img/cpp/imhex.jpg'
description: 'Hide the assets of your Games and Projects in general by transforming them into Hex!'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[ImHex](https://imhex.werwolv.net/) is a hexadecimal editor, written in [C++](https://terminalroot.com/tags#cpp), for reverse engineers, programmers and *people who they value their retinas when they work at 3 am*. 😃

There are a multitude of things that can be done with ImHex. In this video we will see how it can be useful, for example, to "*hide*" the assets (images, fonts, audios, ...) of your games by transforming them into Hex!

As an example, we will show how to implement it in [Game Development](https://terminalroot.com/tags#gamedev) more precisely in [SFML](https://terminalroot.com/tags#sfml).

---

# 💾 How to install ImHex
You can use compressed binary packages available in [Releases in the ImHex GitHub repository](https://github.com/WerWolv/ImHex/releases).

There are packages for: [Windows](https://terminalroot.com/tags#windows) with MSYS2, [macOS](https://terminalroot.com/tags#macos), Debian(suitable for Ubuntu, Mint and among others), Arch and Fedora.

Once downloaded, you can use the package. Example on [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
wget -q https://github.com/WerWolv/ImHex/releases/download/v1.31.0/imhex-1.31.0-Ubuntu-23.04-x86_64.deb
sudo apt install ./imhex-1.31.0-Ubuntu-23.04-x86_64.deb
{% endhighlight %}

Or you can also compile ImHex from scratch, which is how I did it...

---

# 🚀 How to Compile and Install
First of all, make sure you have the dependencies:
### On [Ubuntu](https://terminalroot.com/tags#ubuntu), Debian, Mint:
{% highlight bash %}
apt install -y build-essential gcc-12 g++-12 lld ${PKGCONF:-} cmake ccache \
     libglfw3-dev libglm-dev libmagic-dev libmbedtls-dev libfreetype-dev \
     libdbus-1-dev libcurl4-gnutls-dev libgtk-3-dev ninja-build
{% endhighlight %}

### In Arch:
{% highlight bash %}
pacman -S $@ --needed cmake gcc lld glfw file mbedtls freetype2 dbus gtk3 curl fmt \
     yara nlohmann-json ninja
{% endhighlight %}

### In Fedora:
{% highlight bash %}
dnf install -y cmake dbus-devel file-devel freetype-devel libcurl-devel gcc-c++ git \
     mesa-libGL-devel glfw-devel lld mbedtls-devel gtk3-devel
{% endhighlight %}

### In [Gentoo](https://terminalroot.com/gentoo):
{% highlight bash %}
emerge -n yara mbedtls ccache nlohmann-json glfw fmt gtk
{% endhighlight %}

### In [MSYS2](https://terminalroot.com/tags#windows)
{% highlight bash %}
pacman -S --needed --noconfirm \
   mingw-w64-x86_64-gcc\
   mingw-w64-x86_64-lld\
   mingw-w64-x86_64-cmake\
   mingw-w64-x86_64-ccache\
   mingw-w64-x86_64-glfw\
   mingw-w64-x86_64-file\
   mingw-w64-x86_64-curl-winssl \
   mingw-w64-x86_64-mbedtls\
   mingw-w64-x86_64-freetype\
   mingw-w64-x86_64-dlfcn\
   mingw-w64-x86_64-ninja\
   mingw-w64-x86_64-capstone
{% endhighlight %}

Now recursively clone the repository, compile and install with the commands below:
{% highlight bash %}
git clone --recurse-submodules https://github.com/WerWolv/ImHex
cd ImHex
mkdir build && cd build

CC=gcc CXX=g++ cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_C_COMPILER_LAUNCHER=ccache -DCMAKE_CXX_COMPILER_LAUNCHER=ccache \
        -DCMAKE_C_FLAGS="-fuse-ld=lld" -DCMAKE_CXX_FLAGS="-fuse-ld=lld" \
        -DCMAKE_OBJC_COMPILER_LAUNCHER=ccache -DCMAKE_OBJCXX_COMPILER_LAUNCHER=ccache ..

sudo make install
{% endhighlight %}
> [Click here to see the path where the files are installed](https://gist.github.com/terroo/5bdc66e88777cfbac312154afb954560)


After installation, you can now remove the cloned repository:
{% highlight bash %}
CD ../..
rm -rf ImHex/
{% endhighlight %}

---

# Usage
In this example we will see how to hide your assets with ImHex and as a *guinea pig* we will use [SFML](https://terminalroot.com/tags#sfml). So to do this, follow the steps:

### 01. Choose an image, a font, or any other asset you want to reverse engineer with ImHex.
### 02. Click: File > Open File and select the file you want
### 03. Press: Ctrl + a to select all binary addresses
### 04. Then click: Edit > Copy as... > C++ Array
### 05. Create a file to store your array, example: `img.hpp`
### 06. Paste the copied array and rename the `data` array to `img_data`
### 07. Save and do the same steps for source, for example, or any other binary as said.

After that, include the files in your code and don't forget to include the headers: `#include <cstdint>` (for type `uint8_t`) and also `#include <array>`.

Compile and see that even without static files, your project will render the assets without any problems.
> Tip: the ideal is to store the array on the heap and preferably using smart pointers.

See and test with the example codes below:

### 💫 [Click here to see `img.hpp`](https://gist.github.com/terroo/d1aee0a01fd7c55b1e7de111f951bf73)
### 💫 [Click here to see `font.hpp`](https://gist.github.com/terroo/ba8d99fe1c695ef94690f21b7471da18)
### 💻 C++ SFML code with `data`
{% highlight cpp %}
#include <SFML/Graphics.hpp>
#include <cstdint>
#include <array>
#include "img.hpp"
#include "font.hpp"

int main(){
  sf::RenderWindow window(sf::VideoMode(1280,720), "SFML::Terminal Root"); 

  sf::Image img;
  img.loadFromMemory(img_data.data(), img_data.size());

  sf::Texture texture;
  texture.loadFromImage(img);

  sf::Sprite sprite(texture);

  sf::Font font;
  font.loadFromMemory(data.data(), data.size());

  sf::Text text("Terminal Root", font, 100);
  text.setFillColor(sf::Color::White);
  text.setOutlineColor(sf::Color::Black);
  text.setOutlineThickness(4);
  text.setPosition(100.f, 10.f);


  while( window.isOpen() ){
    sf::Event event;
    while( window.pollEvent(event)){
      if( event.type == sf::Event::Closed ){
        window.close();
      }
    }

    window.clear(sf::Color(55, 44, 77));
    window.draw(text);
    window.draw(sprite);
    window.display();
  }

  return EXIT_SUCCESS;
}
{% endhighlight %}
> Compile: `g++ main.cpp -lsfml-graphics -lsfml-window -lsfml-system`

---

# 🎥 Watch the video
> The video is in Portuguese, however, all the steps described here can be followed regardless of your language. But, if you want to understand what was said, use YouTube's automatic translation.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/H5medsOVNl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard- write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# 📌 Useful links
+ <https://imhex.werwolv.net/>
+ <https://github.com/WerWolv/ImHex>
+ [static assets](https://terminalroot.com/downloads/imhex-assets.tar.7z)


