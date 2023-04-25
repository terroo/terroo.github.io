---
layout: post
title: "Create Terminal Games with olcPixelGameEngine"
date: 2023-04-24 21:47:49
image: '/assets/img/gamedev/olcpixelgameengine.jpg'
description: 'Available for Windows (Visual Studio, MinGW and Code::Blocks), macOS and GNU/Linux (via X11).'
tags:
- cpp
- gamedev
- terminal
- windows
- macos
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**olcPixelGameEngine** is a single file library for [game development](https://terminalroot.com/tags#gamedev) created in [C++](https://terminalroot.com/tags#cpp).

It is cross-platform, compiling on [Windows](https://terminalroot.com/tags#windows) via [Visual Studio](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/#23-visual-studio), [MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) and [Code::Blocks](https://terminalroot.com/the-32-best-ides-text-editors-for-cpp/#09-codeblocks) , and in [GNU/Linux](https://terminalroot.com/tags#gnu) with a [modern g++](https://terminalroot.com/tags#gcc).

The `olcPixelGameEngine` was developed by the legendary programmer [C++](https://terminalroot.com/tags#cpp) and youtuber: [javidx9](http://youtube.com/javidx9).

---

# How to use

On Linux based systems you will need the following dependencies:
+ Compiler: [gcc/g++](https://terminalroot.com/tags#gcc) or [clang](https://terminalroot.com/tags#clang);
+ [X11/Xorg](https://terminalroot.com/tags#xorg) and have logged in with it;
+ [OpenGL](https://terminalroot.com/tags#opengl)

Example of installing dependencies on some GNU/Linux distros:
{% highlight bash %}
# Debian, Ubuntu, Mint and similar
sudo apt install build-essential libglu1-mesa-dev libpng-dev

# Arch Linux, Manjaro and the like
sudo pacman -S gcc glibc libpng table

# Fedora and similar
sudo dnf groupinstall "Development Tools" "Development Libraries"
sudo dnf install gcc-c++ glew-devel glm-devel libpng-devel
{% endhighlight %}

After that just create a basic code (for testing), copy the example code below:

> `main.cpp`

{% highlight cpp %}
#define OLC_PGE_APPLICATION
#include "olcPixelGameEngine.h"

class Example : public olc::PixelGameEngine {
   public:
     Example(){
       sAppName = "Example";
     }

   public:
     bool OnUserCreate() override {
       return true;
     }

     bool OnUserUpdate(float fElapsedTime) override {
       for (int x = 0; x < ScreenWidth(); x++){
         for (int y = 0; y < ScreenHeight(); y++){
           Draw(x, y, olc::Pixel(rand() % 255, rand() % 255, rand()% 255));
         }
       }
       return true;
     }
};


int main() {
   Example demo;
   if (demo.Construct(100, 100, 4, 4)){
     demo.Start();
   }
   return EXIT_SUCCESS;
}
{% endhighlight %}

Now download the file [olcPixelGameEngine.h](https://raw.githubusercontent.com/OneLoneCoder/olcPixelGameEngine/master/olcPixelGameEngine.h):
{% highlight bash %}
wget -q https://raw.githubusercontent.com/OneLoneCoder/olcPixelGameEngine/master/olcPixelGameEngine.h
{% endhighlight %}

And compile with the following command:
{% highlight bash %}
g++ main.cpp -lX11 -lGL -lpthread -lpng -lstdc++fs -std=c++17
{% endhighlight %}

After running `./a.out` if a window appears like "*no channel tuning on old TVs*" like the image below, everything is fine!

![olcPixelGameEngine Running](/assets/img/gamedev/olc-running.png)

---

To run on [Windows](https://terminalroot.com/tags#windows) via Visual Studio, watch the video below:
+ <https://www.youtube.com/watch?v=eTGSTTxR-Ss>

To run on Windows with MinGW:
+ <https://www.youtube.com/watch?v=jnI1gMxtrB4>

To run on Windows with Code::Blocks:
+ <https://www.youtube.com/watch?v=fLXkoR4p_G0>

## Access the [repository](https://github.com/OneLoneCoder/olcPixelGameEngine) and [official documentation on GitHub](https://github.com/OneLoneCoder/olcPixelGameEngine/wiki).

