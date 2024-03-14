---
layout: post
title: "Learn to Use Dear ImGui with SDL2"
date: 2023-10-26 08:56:02
image: '/assets/img/sdl2/sdlimgui.png'
description: 'Simple and fast!'
tags:
- sdl2
- imgui
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# Introduction
[Dear ImGui](https://terminalroot.com/how-to-create-graphical-interfaces-with-dear-imgui-and-sfml/), in short, for those who don't know it yet, it creates immediate mode.

This means that you don't create graphical interfaces from scratch with Dear ImGui. It uses a library that has graphical windows and overlays its widgets on that window to facilitate changes and configurations without having to leave the screen you are on.

To focus on implementing ImGui in [SDL2](https://terminalroot.com/tags#sdl2), let's reuse that basic code we used [in this article](https://terminalroot.com/how-to-transform-your-games-into-c-cpp-for-the-web-with-emscripten-sdl2/) from SDL2!

Let's start!

---

# Preparing the files
Clone and copy the necessary files.

1. Create a project:
{% highlight bash %}
mkdir MyProject
cd MyProject
{% endhighlight %}

2. Clone Dear ImGui:
{% highlight bash %}
git clone https://github.com/ocornut/imgui
{% endhighlight %}

3. Create a subfolder to organize the location of the files that will be included:
{% highlight bash %}
mkdir sdl2gui
{% endhighlight %}

4. Copy all `.h` and `.cpp` from the root of the cloned Dear ImGui repository to your project:
{% highlight bash %}
cp imgui/*.h sdl2gui/
cp imgui/*.cpp sdl2gui/
{% endhighlight %}

4. Also copy the `impl` to SDL2:
{% highlight bash %}

cp imgui/backends/imgui_impl_sdl2.* sdl2gui/
cp imgui/backends/imgui_impl_sdlrenderer2.* sdl2gui/
{% endhighlight %}

5. You can now remove the Dear ImGui repository:
{% highlight bash %}
rm -rf imgui/
{% endhighlight %}

---

# 02. Basic code
Let's use the code made in the previous video: [How to Install SDL2 on Windows and Linux to Create C/C++ Games and First Steps](https://terminalroot.com/how-to-transform-your-games-into-c-cpp-for-the-web-with-emscripten-sdl2/).
> **Note: Download the image available in the other article**

> `vim main.cpp`:
{% highlight cpp %}
#include <SDL2/SDL.h>

int main(int argc, char** argv) {
   SDL_Init(SDL_INIT_EVERYTHING);

   SDL_Window* window = SDL_CreateWindow(
       "SDL2 It's Works!",
       50, 30,
       1280, 720,
       SDL_WINDOW_SHOWN
       );

   SDL_Renderer * renderer = SDL_CreateRenderer(window, -1, 0);


   SDL_Surface * surface = SDL_LoadBMP("./sdl.bmp");
   SDL_Texture * logo = SDL_CreateTextureFromSurface(renderer, surface);
   SDL_FreeSurface(surface);

   SDL_Rect rect, rect2;
   rect.x = 50;
   rect.y = 20;
   rect.w = surface->w;
   rect.h = surface->h;

   rect2.x = 800;
   rect2.y = 20;
   rect2.w = 300;
   rect2.h = 300;

   while(true){
     SDL_Event event;
     while(SDL_PollEvent(&event)){
       if( event.type == SDL_QUIT ){
         exit(0);
       }else if( event.type == SDL_MOUSEBUTTONDOWN ){
         rect2.x -= 20;
       }
     }

     SDL_RenderClear(renderer);
     SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
     //SDL_RenderDrawRect(renderer, &rect2);
     SDL_RenderFillRect(renderer, &rect2);
     SDL_SetRenderDrawColor(renderer, 9, 20, 33, 255);
     SDL_RenderCopy(renderer, logo, NULL, &rect);
     SDL_RenderPresent(renderer);
   }

   SDL_DestroyTexture(logo);
   SDL_DestroyRenderer(renderer);
   SDL_DestroyWindow(window);
   SDL_Quit();
   return 0;
}
{% endhighlight %}
Compile the code: `g++ main.cpp $(pkg-config --cflags --libs sdl2)` and run: `./a.out`
> To be able to move the Dear ImGui window in this specific example, let's comment out the line that listens to the click event. To do this, comment leaving the lines like this:

{% highlight cpp %}
while(SDL_PollEvent(&event)){
     if( event.type == SDL_QUIT ){
         exit(0);
     }/*else if( event.type == SDL_MOUSEBUTTONDOWN ){
        rect2.x -= 20;
     }*/
}
{% endhighlight %}

1. Add the headers:
{% highlight cpp %}
#include "sdl2imgui/imgui.h"
#include "sdl2imgui/imgui_impl_sdl2.h"
#include "sdl2imgui/imgui_impl_sdlrenderer2.h"
{% endhighlight %}

2. Initialize Dear ImGui
> After initializing the Window (`window`) and the Renderer (`renderer`)

{% highlight cpp %}
IMGUI_CHECKVERSION();
ImGui::CreateContext();
ImGuiIO& io = ImGui::GetIO(); (void)io;
ImGui_ImplSDL2_InitForSDLRenderer(window, renderer);
ImGui_ImplSDLRenderer2_Init(renderer);
{% endhighlight %}

3. Add the SDL2 events for Dear ImGui inside the event loop:
{% highlight cpp %}
ImGui_ImplSDL2_ProcessEvent(&event);
{% endhighlight %}

3. Initialize **Dear ImGui Frame**:
> Inside the loop after the events.

{% highlight cpp %}
ImGui_ImplSDLRenderer2_NewFrame();
ImGui_ImplSDL2_NewFrame();
ImGui::NewFrame();
{% endhighlight %}

4. Create the Dear ImGui windows
> Basic example only displays text similar to Hello World

{% highlight cpp %}
ImGui::Begin("Hello, Dear ImGui with SDL2");
ImGui::Text("This is just a basic Hello World!");
ImGui::End();
ImGui::Render();
{% endhighlight %}

5. Before the last `SDL_RenderClear` add the ImGui window display:
{% highlight cpp %}
ImGui_ImplSDLRenderer2_RenderDrawData(ImGui::GetDrawData());
{% endhighlight %}

6. Release the resources used by Dear ImGui in conjunction with those used by SDL2
> After the main loop at the end of the program execution.

{% highlight cpp %}
ImGui_ImplSDL2_Shutdown();
ImGui::DestroyContext();
{% endhighlight %}

---

# Compiling
The files in the `sdl2gui/` folder must be compiled separately with the `-c` parameter and saving as object: `.o` to only generate the Assembly code without being executed by the Linker. Only later link them to the binary that contains our `main` function.

Note the `Makefile`:
> Check `-I` for some headers for `Impl`.

{% highlight makefile %}
TARGET=a.out
CXX=g++ -std=c++11
DEBUG=-g
OPT=-O0
WARN=-Wall
SDL2=`pkg-config --cflags --libs sdl2`
INCSDL2=-I /usr/include/SDL2
CXXFLAGS=$(DEBUG) $(OPT) $(WARN) $(SDL2)
LD=g++
OBJS= main.o imgui.o imgui_draw.o imgui_impl_sdl2.o imgui_impl_sdlrenderer2.o imgui_tables.o imgui_widgets.o
all: $(OBJS)
$(LD) -o $(TARGET) $(OBJS) $(CXXFLAGS)
# @rm *.o
@./$(TARGET)

main.o: main.cpp
$(CXX) -c $(CXXFLAGS) main.cpp -o main.o

imgui.o: sdl2imgui/imgui.cpp
$(CXX) -c $(DEBUG) $(OPT) sdl2imgui/imgui.cpp -o imgui.o

imgui_draw.o: sdl2imgui/imgui_draw.cpp
$(CXX) -c $(DEBUG) $(OPT) sdl2imgui/imgui_draw.cpp -o imgui_draw.o

imgui_impl_sdl2.o: sdl2imgui/imgui_impl_sdl2.cpp
$(CXX) $(INCSDL2) -c $(DEBUG) $(OPT) sdl2imgui/imgui_impl_sdl2.cpp -o imgui_impl_sdl2.o

imgui_impl_sdlrenderer2.o: sdl2imgui/imgui_impl_sdlrenderer2.cpp
$(CXX) $(INCSDL2) -c $(DEBUG) $(OPT) sdl2imgui/imgui_impl_sdlrenderer2.cpp -o imgui_impl_sdlrenderer2.o

imgui_tables.o: sdl2imgui/imgui_tables.cpp
$(CXX) -c $(DEBUG) $(OPT) sdl2imgui/imgui_tables.cpp -o imgui_tables.o

imgui_widgets.o: sdl2imgui/imgui_widgets.cpp
$(CXX) -c $(DEBUG) $(OPT) sdl2imgui/imgui_widgets.cpp -o imgui_widgets.o
{% endhighlight %}

Then just run the `make` command, in this case the `.o` objects will be automatically deleted by the `Makefile` in addition to the code also being executed by the `Makefile`

---

# Changing the SDL2 window background with Dear ImGui

1. Add this code:
> Outside the main loop.

{% highlight cpp %}
float imcolor[4] = { (float)0 / 255, (float)255 / 255, (float)64 / 255, (float)64 / 255 };
{% endhighlight %}

2. Add ImGui widget to change colors:
{% highlight cpp %}
ImGui::ColorEdit4("Change BG SDL2", imcolor);
{% endhighlight %}

3. Change the Background Color of the SDL2 Window that has the line: `SDL_SetRenderDrawColor(renderer, 9, 20, 33, 255);` with the line below:
{% highlight cpp %}
SDL_SetRenderDrawColor(renderer, imcolor[0] * 255, imcolor[1] * 255, imcolor[2] * 255, imcolor[3] * 255);
{% endhighlight %}
> Multiplying by 255 is essential for the changes made by ImGui to take effect!


---

Then just recompile and test!

