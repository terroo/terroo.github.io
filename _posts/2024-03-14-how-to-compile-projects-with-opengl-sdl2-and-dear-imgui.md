---
layout: post
title: "How to Compile Projects with OpenGL, SDL2 and Dear ImGui"
date: 2024-03-14 14:53:17
image: '/assets/img/opengl/opengl-sdl2-imgui.jpg'
description: 'To develop modern graphics applications with C++'
tags:
- opengl
- imgui
- sdl2
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

One of the best ways to work with [Dear ImGui](https://terminalroot.com/tags#imgui) is by combining it with [OpenGL](https://terminalroot.com/tags#opengl) and [SDL2](https://terminalroot.com/tags#sdl2).

To be able to follow this tutorial, we will need the tools properly pre-installed on our system. We have all the installation tutorials, they are:

+ [How to Use PNG and JPG Images with SDL2 Images on Windows](https://terminalroot.com/how-to-use-png-and-jpg-images-with-sdl2-images-on-windows/)
+ [Learn to Use Dear ImGui with SDL2](Learn to Use Dear ImGui with SDL2)
+ [OpenGL Tutorial for Beginners](https://terminalroot.com/opengl-tutorial-for-beginners/)

In this article we will see how to compile Dear ImGui with OpenGL and SDL2 on your system, be it [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos) or [GNU/Linux](https://terminalroot.com/tags#gnulinux).

Let's go to the steps!

---

# Steps
### 1. Clone the Dear ImGui repository
{% highlight bash %}
git clone https://github.com/ocornut/imgui/
{% endhighlight %}

### 2. Create a directory and subdirectory for your project
{% highlight bash %}
mkdir -p myproject/imgui
{% endhighlight %}

### 3. Copy all files from the imgui repository listed below to your project subdirectory: imgui
{% highlight bash %}
cp imgui/*.cpp imgui/*.h myproject/imgui/
{% endhighlight %}

### 4. Also copy additional files to compile
{% highlight bash %}
cp imgui/examples/libs/emscripten/emscripten_mainloop_stub.h \
    imgui/backends/imgui_impl_opengl3* \
    imgui/backends/imgui_impl_sdl2* myproject/imgui
{% endhighlight %}

### 5. Create this main.cpp file in the root of your project: `myproject/main.cpp` and insert the content below:

{% highlight cpp %}
#include "imgui/imgui.h"
#include "imgui/imgui_impl_sdl2.h"
#include "imgui/imgui_impl_opengl3.h"
#include <SDL2/SDL.h>
#include <SDL2/SDL_opengles2.h>

#ifdef __EMSCRIPTEN__
#include "imgui/emscripten_mainloop_stub.h"
#endif

int main(){
  SDL_Init(SDL_INIT_VIDEO);
  SDL_Window* window = SDL_CreateWindow(
      "C++, Dear ImGui, SDL2, e OpenGL", 
      SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 
      320, 180, 
      SDL_WINDOW_OPENGL | SDL_WINDOW_RESIZABLE | SDL_WINDOW_ALLOW_HIGHDPI
      );
  SDL_GLContext gl_context = SDL_GL_CreateContext(window);
  SDL_GL_MakeCurrent(window, gl_context);
  SDL_GL_SetSwapInterval(1);

  // ImGui START
  IMGUI_CHECKVERSION();
  ImGui::CreateContext();
  ImGuiIO& io = ImGui::GetIO(); (void)io;
  io.ConfigFlags |= ImGuiConfigFlags_NavEnableKeyboard;
  ImGui::StyleColorsDark();
  ImGui_ImplSDL2_InitForOpenGL(window, gl_context);
  ImGui_ImplOpenGL3_Init("#version 100");

  ImVec4 clear_color = ImVec4(0.45f, 0.55f, 0.60f, 1.00f);

#ifdef __EMSCRIPTEN__
  io.IniFilename = nullptr;
  EMSCRIPTEN_MAINLOOP_BEGIN
#else
    while (true)
#endif
    {

      SDL_Event event;
      while (SDL_PollEvent(&event)) {
        ImGui_ImplSDL2_ProcessEvent(&event);
        if (event.type == SDL_QUIT){
          exit(0);
        }
      }

      ImGui_ImplOpenGL3_NewFrame();
      ImGui_ImplSDL2_NewFrame();
      ImGui::NewFrame();

      ImGui::Begin("Hello, World!");
      ImGui::Text("C++, SDL2, OpenGL e Dear ImGui");
      ImGui::End();

      ImGui::Render();
      glViewport(0, 0, (int)io.DisplaySize.x, (int)io.DisplaySize.y);
      glClearColor(clear_color.x * clear_color.w, clear_color.y * clear_color.w, clear_color.z * clear_color.w, clear_color.w);
      glClear(GL_COLOR_BUFFER_BIT);
      ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
      SDL_GL_SwapWindow(window);
    }
#ifdef __EMSCRIPTEN__
  EMSCRIPTEN_MAINLOOP_END;
#endif

  ImGui_ImplOpenGL3_Shutdown();
  ImGui_ImplSDL2_Shutdown();
  ImGui::DestroyContext();

  SDL_GL_DeleteContext(gl_context);
  SDL_DestroyWindow(window);
  SDL_Quit();

  return 0;
}
{% endhighlight %}

### 6. Create a [Makefile](https://terminalroot.com/tags#make) for us to compile
> `vim Makefile`

And insert the content below:

{% highlight makefile %}
CXX=g++
TARGET=a.out
IMGUI_DIR = imgui
SOURCES = main.cpp
SOURCES += $(IMGUI_DIR)/imgui.cpp $(IMGUI_DIR)/imgui_demo.cpp $(IMGUI_DIR)/imgui_draw.cpp $(IMGUI_DIR)/imgui_tables.cpp $(IMGUI_DIR)/imgui_widgets.cpp
SOURCES += $(IMGUI_DIR)/imgui_impl_sdl2.cpp $(IMGUI_DIR)/imgui_impl_opengl3.cpp
OBJS = $(addsuffix .o, $(basename $(notdir $(SOURCES))))
UNAME_S := $(shell uname -s)
LINUX_GL_LIBS = -lGL
CXXFLAGS = -std=c++11 -I$(IMGUI_DIR) -I$(IMGUI_DIR)
CXXFLAGS += -g -Wall -Wformat
LIBS =

ifeq ($(UNAME_S), Linux) #LINUX
	ECHO_MESSAGE = "Linux"
	LIBS += $(LINUX_GL_LIBS) -ldl `sdl2-config --libs`

	CXXFLAGS += `sdl2-config --cflags`
	CFLAGS = $(CXXFLAGS)
endif

ifeq ($(UNAME_S), Darwin) #APPLE
	ECHO_MESSAGE = "Mac OS X"
	LIBS += -framework OpenGL -framework Cocoa -framework IOKit -framework CoreVideo `sdl2-config --libs`
	LIBS += -L/usr/local/lib -L/opt/local/lib

	CXXFLAGS += `sdl2-config --cflags`
	CXXFLAGS += -I/usr/local/include -I/opt/local/include
	CFLAGS = $(CXXFLAGS)
endif

ifeq ($(OS), Windows_NT)
    ECHO_MESSAGE = "MinGW"
    LIBS += -lgdi32 -lopengl32 -limm32 `pkg-config --static --libs sdl2`

    CXXFLAGS += `pkg-config --cflags sdl2`
    CFLAGS = $(CXXFLAGS)
endif

%.o:%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:$(IMGUI_DIR)/%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

%.o:$(IMGUI_DIR)/%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

all: $(TARGET)
	@echo Build complete for $(ECHO_MESSAGE)

$(TARGET): $(OBJS)
	$(CXX) -o $@ $^ $(CXXFLAGS) $(LIBS)

clean:
	rm -f $(TARGET) $(OBJS)
{% endhighlight %}

### 7. Now just compile:
{% highlight bash %}
make
{% endhighlight %}

### 8. And run the project:
{% highlight bash %}
./a.out
{% endhighlight %}

The possible output will be similar to the image below:

![Running...](/assets/img/opengl/gl-sdl2-imgui-cpp.png) 

---

If you have any questions, review the libs installation paths on your system!
