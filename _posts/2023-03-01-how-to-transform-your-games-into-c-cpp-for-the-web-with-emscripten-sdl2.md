---
layout: post
title: "How to Transform Your Games into C/C++ for the Web with EmScripten (SDL2)"
date: 2023-03-01 19:56:11
image: '/assets/img/gamedev/emscripten.jpg'
description: 'This article shows how to install EmScripten and how to transform it into JavaScript and WebAssembly, we will transform an SDL2 example with C++.'
tags:
- gamedev
- cpp
- sdl2
- web
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

[Emscripten](https://emscripten.org/) is a compiler that translates code written in [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/tags#cpp) to **WebAssembly**, or to a subset of [JavaScript](https://terminalroot.com/tags#javascript) known as `asm.js`).

Applications compiled with Emscripten are more performant and therefore faster than interpreted or dynamically compiled JavaScript.

---

# How to install Emscripten
Dependencies: [CMake](https://terminalroot.com/tags#cmake), [gcc](https://terminalroot.com/tags#gcc) and [Python](https://terminalroot.com/tags#python).

On [Unix](https://terminalroot.com/tags#unix)-based systems:

{% highlight bash %}
git clone https://github.com/emscripten-core/emsdk ~/.emsdk
cd .emsdk
git pull
./emsdk install latest
./emsdk activate latest
echo 'source "${HOME}/.emsdk/emsdk_env.sh" 2>&-' >> ~/.bashrc
exec $SHELL
{% endhighlight %}

Test with the command:
{% highlight bash %}
em++ --version
{% endhighlight %}

If using [Windows](https://terminalroot.com/tags#windows), see [here](https://emscripten.org/docs/getting_started/downloads.html).

---

# Example of use
Suppose you have this [code](https://www.youtube.com/watch?v=9IcIKdjSvfc):

> `main.cpp`

{% highlight cpp %}
#include <SDL2/SDL.h>

int main(int argc, char** argv) {
  SDL_Window* window = NULL;
  window = SDL_CreateWindow(
      "SDL2 It's Work!",
      SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
      640, 480,
      SDL_WINDOW_SHOWN
      );
  SDL_Renderer * renderer = SDL_CreateRenderer(window, -1, 0);
  SDL_SetRenderDrawColor(renderer, 9, 20, 33, 255);
  while(true){
    SDL_Event event;
    while(SDL_PollEvent(&event)){
      if( event.type == SDL_QUIT ){
        exit(0);
      }
    }
    SDL_RenderClear(renderer);
    SDL_RenderPresent(renderer);
  }
  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);
  //SDL_Quit();
  return 0;
}
{% endhighlight %}

Save this image:
![SDL2](https://terminalroot.com.br/assets/img/gamedev/sdl.bmp) 

Compile and run:
> Need [SDL2](https://libsdl.org/) installed!

{% highlight bash %}
g++ main.cpp -lSDL2
./a.out
{% endhighlight %}

## Now let's transform this code to compile for the Web.
Modify the code above and make it look like this:

{% highlight cpp %}
#include <SDL2/SDL.h>
#include <emscripten.h>
#include <iostream>

struct Context {
  std::string title;
  int width, height;
  SDL_Renderer * renderer;
  SDL_Event event;
  SDL_Rect rect, rect2;
  SDL_Texture * logo;
};

void callback(void * arg){
  Context * context = static_cast<Context*>(arg);
    while(SDL_PollEvent(&context->event)){
      if( context->event.type == SDL_QUIT ){
        exit(0);
      }else if( context->event.type == SDL_MOUSEBUTTONDOWN ){
        context->rect2.x -= 20;
      }
    }

    SDL_RenderClear(context->renderer);
    SDL_SetRenderDrawColor(context->renderer, 255, 255, 255, 255);
    //SDL_RenderDrawRect(renderer, &rect2);
    SDL_RenderFillRect(context->renderer, &context->rect2);
    SDL_SetRenderDrawColor(context->renderer, 9, 20, 33, 255);
    SDL_RenderCopy(context->renderer, context->logo, NULL, &context->rect);
    SDL_RenderPresent(context->renderer);
}

int main(int argc, char** argv) {
  Context context;
  SDL_Init(SDL_INIT_EVERYTHING);

  context.title = "SDL2 It's Works!";
  context.width = 1280;
  context.height = 720;

  SDL_Window* window = SDL_CreateWindow(
      context.title.c_str(),
      50, 30,
      context.width, context.height,
      SDL_WINDOW_SHOWN
      );

  SDL_Renderer * renderer = SDL_CreateRenderer(window, -1, 0);
  context.renderer = renderer;


  SDL_Surface * surface = SDL_LoadBMP("./sdl.bmp");
  context.logo = SDL_CreateTextureFromSurface(renderer, surface);
  SDL_FreeSurface(surface);

  context.rect.x = 50;
  context.rect.y = 20;
  context.rect.w = surface->w;
  context.rect.h = surface->h;

  context.rect2.x = 800;
  context.rect2.y = 20;
  context.rect2.w = 300;
  context.rect2.h = 300;

  emscripten_set_main_loop_arg(callback, &context, -1, 1);

  SDL_DestroyTexture(context.logo);
  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);
  SDL_Quit();
  return 0;
}
{% endhighlight %}

Compile with the following command:
{% highlight bash %}
em++ main.cpp -s WASM=1 -s USE_SDL=2 -s USE_SDL_IMAGE=2 -s SDL2_IMAGE_FORMATS='["bmp"]' --preload-files sdl.bmp -o index.js
{% endhighlight %}

Create a new `index.html` file and insert this content:
> If the file already exists, remove all content from it and paste this code inside.

{% highlight html %}
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  <body>
    <center>
      <canvas id="canvas" oncontextmenu="event.preventDefault()"></canvas>
      <script type='text/javascript'>
        var Module = {
          canvas: (function() { return document.getElementById('canvas'); })()
        };
      </script>
      <script src="index.js"></script>
    </center>
  </body>
</html>
{% endhighlight %}

And now view and use in your browser!
> After running this command the game will automatically open in your default browser.

{% highlight bash %}
emrun index.html
{% endhighlight %}

---

For more information visit the official website of Emscripten:
## <https://emscripten.org/>


