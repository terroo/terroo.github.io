---
layout: post
title: "Create Games for Windows, Linux and Web with Raylib C/C++"
date: 2022-11-16 20:33:37
image: '/assets/img/gamedev/raylib/raylib.jpg'
description: 'Despite having native support for C/C++, it is possible to use it in other programming languages such as: Lua, Golang, C#, Python, PHP, Java and among others.'
tags:
- gamedev
- cpp
- raylib
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

🔊 **Raylib** is a library used for [game development](https://terminalroot.com/tags#gamedev), however, there are other areas of application. Despite having native support for [C](https://terminalroot.com/tags#linguagemc)/[C++](https://terminalroot.com/tags#cpp), it is possible to use it in other programming languages such as: [Lua](https://terminalroot.com/tags#lua), [Golang](https://terminalroot.com/tags#go), [C#](https: //terminalroot.com/tags#csharp), [Python](https://terminalroot.com/tags#python), [PHP](https://terminalroot.com/tags#php) , [Java](https://terminalroot.com/tags#java) and among others.

Some features of Raylib are:
+ It does not have a clickable interface, it is a library for programmers who like to write code;
+ Multiplatform available for: [Windows](https://terminalroot.com/tags#windows), [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux), [macOS](https://terminalroot.com/tags#macos), [Android](https://terminalroot.com/tags#android), [HTML5](https://terminalroot.com/tags#html) and among others;
+ Written in [C99](https://terminalroot.com/tags#clanguage) ;
+ Supports 2D and 3D graphics;
+ It's easy, simple and differentiated!

---

# Installation

## Windows

01. Open your browser
02. Access the address: <https://github.com/raysan5/raylib>
03. Select and click on `Releases` on the right side of the screen
04. Scroll down the course and download the version: [raylib_installer_v4.2.mingw.exe](https://github.com/raysan5/raylib/releases/download/4.2.0/raylib_installer_v4.2.mingw.exe)
05. After the download is finished, double-click on the file, click on *Allow*
06. Install and Finish
07. Open the shortcut: *[Notepad++ for Raylib]*
08. As the example will already be opened, press `F6` and then press **[OK]** to compile

---

## GNU/Linux
### Dependencies:

{% highlight bash %}
# ubuntu
sudo apt install libasound2-dev mesa-common-dev libx11-dev libxrandr-dev libxi-dev xorg-dev libgl1-mesa-dev libglu1-mesa-dev

# fedora
sudo dnf install alsa-lib-devel mesa-libGL-devel libX11-devel libXrandr-devel libXi-devel libXcursor-devel libXinerama-devel libatomic

# Arch Linux
sudo pacman -S alsa-lib mesa libx11 libxrandr libxi libxcursor libxinerama
{% endhighlight %}
> For more information [click here](https://github.com/raysan5/raylib/wiki/Working-on-GNU-Linux#build-raylib-using-cmake).

---

### Installing Raylib:

{% highlight bash %}
git clone https://github.com/raysan5/raylib
cd raylib
mkdir build && cd build
cmake -DBUILD_SHARED_LIBS=ON ..
make up
sudo make install
sudo cp /usr/local/lib/libraylib.so.420 /usr/lib/
{% endhighlight %}
> Now you can remove the cloned directory: `cd ../.. && rm -rf raylib`

### Copy this example:
> `main.cpp`

{% highlight cpp %}
#include "raylib.h"

int main(){
  InitWindow(800, 450, "raylib [core] example - basic window");

  while (!WindowShouldClose()){
    BeginDrawing();
    ClearBackground(RAYWHITE);
    DrawText("Congrats! You created your first window!", 190, 200, 20, LIGHTGRAY);
    EndDrawing();
  }

  CloseWindow();
  return 0;
}
{% endhighlight %}

### Compile:
{% highlight bash %}
g++ main.cpp -lraylib -lGL -lm -lpthread -ldl -lrt -lX11
{% endhighlight %}

---

## Code example 2
> `main.cpp`
{% highlight cpp %}
namespace ray {
  #include <raylib.h>
}

int main(){
  ray::InitWindow(1280, 720, "Getting started with Raylib");

  ray::Texture sprite, bg;
  sprite = ray::LoadTexture("./sprite.png");
  bg = ray::LoadTexture("./bg.png");

  float posx = -sprite.width;

  while( !ray::WindowShouldClose() ){

    posx += 0.9f;
    if( posx > 1280 ){
     posx = -sprite.width;
    }

    ray::BeginDrawing();
    ray::ClearBackground(ray::WHITE);
     ray::DrawText("First steps with Raylib", 50, 100, 50, ray::BLACK);
     ray::DrawTexture(bg, 0, 0, ray::WHITE);
     ray::DrawTexture(sprite, posx, 630 - sprite.height, ray::WHITE);
    ray::EndDrawing();
  }

  ray::CloseWindow();

  return 0;
}
{% endhighlight %}

# Images used in the code example 2

## `sprite.png`
<a href="/assets/img/gamedev/raylib/sprite.png">
 <img src="/assets/img/gamedev/raylib/sprite.png" alt="Basic car">
</a>

## `bg.png`
<a href="/assets/img/gamedev/raylib/bg.png">
 <img src="/assets/img/gamedev/raylib/bg.png" alt="Background for the game">
</a>

---

# Watch the video
> Note: The video is in Portuguese, but it is possible to follow the steps described in this article and the development from scratch of the code used as an example.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/LZUMVdkWWrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Useful links
+ <https://www.raylib.com/>
+ <https://github.com/raysan5/raylib>

---


