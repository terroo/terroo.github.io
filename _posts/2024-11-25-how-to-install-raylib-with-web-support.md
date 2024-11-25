---
layout: post
title: "How to Install Raylib with Web Support"
date: 2024-11-25 08:34:19
image: '/assets/img/raylib/raylib-web.png'
description: "🚀 The union of Raylib and Emscripten!"
tags:
- raylib
- gamedev
- emscripten
- cpp
- web
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already made a [article](https://terminalroot.com/create-games-for-windows-linux-and-web-with-raylib-c-cpp/) that shows how to install (after compiling) the [Raylib](https://terminalroot.com/tags#raylib) library, but that procedure is with a [dynamic](https://terminalroot.com/difference-between-static-and-dynamic-libraries/) library, but it is not suitable for using Raylib for the web.

So, in this post we will show you how to compile and install Raylib, in addition to being able to use it for desktop, also to use your development to run in the browser.

---

## Dependencies
To use as a basis, we will focus on the [Ubuntu](https://terminalroot.com/tags#ubuntu) operating system using *APT*, however, the procedure can be adapted to any other operating system, simply by finding the corresponding package names for your package manager and/or installation paths.

First, you must have the following packages properly installed on your system:
{% highlight bash %}
sudo apt install libasound2-dev mesa-common-dev libx11-dev libxrandr-dev \
libxi-dev xorg-dev libgl1-mesa-dev libglu1-mesa-dev \
build-essential cmake make g++ \
freeglut3-dev libglfw3 libglfw3-dev
{% endhighlight %}
> The session must have been started by X11, if it is on Wayland, end the session and log in again choosing [Xorg](https://terminalroot.com/5-quick-tips-for-cpp/).

Then, it is very important to have [Emscripten](https://terminalroot.com/how-to-transform-your-games-into-c-cpp-for-the-web-with-emscripten-sdl2/) installed, we show you how to do this in a video, but in short, just run these commands below:
> Remember to have [Git](https://terminalroot.com/tags#git) installed and updated.

{% highlight bash %}
cd
git clone https://github.com/emscripten-core/emsdk .emsdk
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
echo 'source "$HOME/.emsdk/emsdk_env.sh" 2>/dev/null >> ~/.bashrc
exec $SHELL
{% endhighlight %}

---

## Compile and install Raylib
After you have the necessary packages and Emscripten, now just compile and install Raylib with the following commands:

{% highlight bash %}
git clone https://github.com/raysan5/raylib
cd raylib
emcmake cmake . -DPLATFORM=Web
emmake make
sudo make install
{% endhighlight %}

<details>
 <summary>Here, a summary of where the files are copied:</summary>

{% highlight bash %}
...
[99%] Built target textures_textured_curve
[100%] Built target textures_to_image
Install the project...
-- Install configuration: "Debug"
-- Installing: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/lib/libraylib.a
-- Installing: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/include/raylib.h
-- Installing: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/include/rlgl.h
-- Installation: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/include/raymath.h
-- Installing: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/lib/pkgconfig/raylib.pc
-- Installing: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/lib/cmake/raylib/raylib-config-version.cmake
-- Installing: /home/marcos/.emsdk/upstream/emscripten/cache/sysroot/lib/cmake/raylib/raylib-config.cmake
{% endhighlight %}

</details>

The above procedure installs the dependencies only for Web, however, it is still necessary to also install for Desktop, using [CMake](https://terminalroot.com/tags#cmake):
> Note that the argument was not used: ~~-DBUILD_SHARED_LIBS=ON~~.

{% highlight bash %}
cmake -B build -DPLATFORM=PLATFORM_DESKTOP -DPLATFORM=Desktop;Web .
cmake --build build
sudo cmake --install build/
{% endhighlight %}
> Note that you do not need to compile the `.so`, as there is none.

<details>
<summary>Here is another summary of where the files are copied to, including the <code>libraylib.a</code> file:</summary>

{% highlight bash %}
[sudo] password for marcos:
-- Install configuration: "Debug"
-- Installing: /usr/local/lib/libraylib.a
-- Installing: /usr/local/include/raylib.h
-- Installing: /usr/local/include/rlgl.h
-- Installing: /usr/local/include/raymath.h
-- Installing: /usr/local/lib/pkgconfig/raylib.pc
-- Installing: /usr/local/lib/cmake/raylib/raylib-config-version.cmake
-- Installing: /usr/local/lib/cmake/raylib/raylib-config.cmake
{% endhighlight %}

</details>

---

## Testing and running
Now just create an example file: `main.cpp` with the [C++](https://terminalroot.com/tags#cpp) and [Raylib](https://terminalroot.com/tags#raylib) code below:

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

To compile, first make sure you have a base HTML file to use, you can [download it from the Raylib repository](https://github.com/raysan5/raylib/blob/master/src/shell.html) with the following command:

{% highlight bash %}
wget https://raw.githubusercontent.com/raysan5/raylib/refs/heads/master/src/shell.html
{% endhighlight %}

After that, just compile with the command:

{% highlight bash %}
em++ -o game.html main.cpp -Os -Wall -I ~/.emsdk/upstream/emscripten/cache/sysroot/include \
-L ~/.emsdk/upstream/emscripten/cache/sysroot/lib/libraylib.a -s USE_GLFW=3 -s ASYNCIFY \
--shell-file shell.html -DPLATFORM_WEB ~/.emsdk/upstream/emscripten/cache/sysroot/lib/libraylib.a
{% endhighlight %}

After that, just run the command below and it will automatically open in your default browser:
{% highlight bash %}
emrun game.html
{% endhighlight %}

![Example running in the browser](/assets/img/raylib/raylib-run-web.png)
> Example running in the browser. Open the image in a new tab to see it in a higher resolution, if you want.

If you want to use the same code to run as a desktop, as you may already know, the command should be: `g++ main.cpp -lraylib -lGL -lm -lpthread -ldl -lrt -lX11 && ./a.out`.

---

Remember that the example is without `ASYNCIFY`, for more information [see here](https://github.com/raysan5/raylib/wiki/Working-for-Web-(HTML5)#42-use-standard-raylib-whilewindowshouldclose-loop).

