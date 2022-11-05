---
layout: post
title: "Create Graphical Programs in Terminal with FTXUI"
date: 2022-11-05 10:41:17
image: '/assets/img/tui/ftxui.jpg'
description: 'A C++ library for creating graphical applications in the terminal.'
tags:
- cpp
- tui
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# Introduction
**FTXUI** is a library for creating "graphical" applications for the terminal. It is available for [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux), [Windows](https://terminalroot.com/tags#windows) and [macOS](https://terminalroot.com/tags#macos), as well as being able to create apps for [WEB](https://terminalroot.com/tags#web) with WebAssembly.

We have some blog articles with publishing apps that were made with FTXUI:
+ [View JSON interactively from the terminal](https://terminalroot.com/view-json-interactively-from-the-terminal/)
+ [Select Colors in Terminal with RGB-TUI](https://terminalroot.com/select-colors-in-terminal-with-rgb-tui/)

# How to install FTXUI
First of all make sure you have the dependencies, which are: [g++](https://terminalroot.com/tags#gcc), [make](https://terminalroot.com/tags#make), [cmake](https://terminalroot.com/tags#cmake), [ncurses](https://terminalroot.com/tags#ncurses) and [git](https://terminalroot.com/tags#git) .

For example installation in your distro we will use Ubuntu as a reference, example of installation of dependencies in [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt install g++ make cmake libncurses5-dev git
{% endhighlight %}
> Use 'search' in your distro's package manager or operating system to find the corresponding package names.

---

# Installation
The installation will only serve to facilitate the use of Intelissense from your IDE or easier local copies, we will see more details below. To install, first...
{% highlight bash %}
git clone https://github.com/ArthurSonzogni/ftxui
ftxui cd
cmake -B build .
cd build && make
sudo make install
cd ../.. && rm -rf ftxui
{% endhighlight %}

---

# Understanding FTXUI
FTXUI has 3 Modules which are:
+ `dom` - This is the main module, mandatory even if it is a `Hello, World!` of life;
+ `screen` - Display the *elements* defined in the dom to display on the screen, also mandatory for any project;
+ `component` - This module is **optional** and it has components such as: user input, widgets, and so on.

---

# Creating a basic project
Let's create a simple project that will only print "Hello, World!" on the screen and let's call it *01-ftxui*:
{% highlight bash %}
mkdir 01-ftxui
cd 01-ftxui
nvim main.cpp
{% endhighlight %}

Let's add:
1. Example 01:
> Basic Hello, World! with rounded corners.

{% highlight cpp %}
// main.cpp
#include <ftxui/dom/elements.hpp>
#include <ftxui/screen/screen.hpp>
#include <iostream>

int main(){
  const std::string hello {"Hello, World!"};
  ftxui::Element doc = ftxui::hbox(
    ftxui::text( hello ) | ftxui::border
  );
  ftxui::Screen screen = ftxui::Screen::Create(
    ftxui::Dimension::Fixed( hello.length() + 1 ),
    ftxui::Dimension::Fixed(3)
  );

  ftxui::Render(screen, doc);
  screen.Print();
  std::cout << '\n';
  return 0;
}
{% endhighlight %}

Example of `CMakeLists.txt`:

{% highlight lua %}
cmake_minimum_required (VERSION 3.11)
project(a.out
  LANGUAGES CXX
  VERSION 1.0.0
)

include(FetchContent)
 
set(FETCHCONTENT_UPDATES_DISCONNECTED TRUE)
FetchContent_Declare(ftxui
  GIT_REPOSITORY https://github.com/ArthurSonzogni/ftxui
)
 
FetchContent_GetProperties(ftxui)

if(NOT ftxui_POPULATED)
  FetchContent_Populate(ftxui)
  add_subdirectory(${ftxui_SOURCE_DIR} ${ftxui_BINARY_DIR} EXCLUDE_FROM_ALL)
endif()
 
add_executable(${PROJECT_NAME} main.cpp)
target_include_directories(${PROJECT_NAME} PRIVATE src)
 
target_link_libraries(${PROJECT_NAME}
  PRIVATE ftxui::screen
  PRIVATE ftxui::dom
)
{% endhighlight %}

3. Compiling and running
{% highlight bash %}
cmake -B build .
cd build && make
./a.out
{% endhighlight %}

---

# Optimizing repository clone when compiling
Note that the line: `GIT_REPOSITORY https://github.com/ArthurSonzogni/ftxui` it downloads from the repository on GitHub, but suppose you are offline, you can use the repository itself on your machine. Example:

1. First clone the repository to a system directory:
> The installed directory won't work because it doesn't have a `.git` inside it!

{% highlight bash %}
sudo git clone https://github.com/ArthurSonzogni/ftxui /opt/ftxui
{% endhighlight %}
> If you want to save to your normal user, choose a location in `/home/$USER` and don't use `sudo` .

Now change the corresponding line of your `CMakeLists.txt` and indicate the location of the repository you cloned:

{% highlight lua %}
GIT_REPOSITORY /opt/ftxui
{% endhighlight %}

To test from scratch, remove `build/` and redo the process:

{% highlight bash %}
rm -rf build
cmake -B build .
cd build && make
./a.out
{% endhighlight %}

---

# Another example with more than one box
{% highlight bash %}
mkdir example02
cd example02
cp ../example01/main.cpp main.cpp
vim main.cpp
{% endhighlight %}

{% highlight cpp %}
#include <ftxui/dom/elements.hpp>
#include <ftxui/screen/screen.hpp>
#include <iostream>

int main(){
  const std::string hello {"Hello"},
        world {"World"},
        myftxui {"FTXUI"};

  ftxui::Element doc = ftxui::hbox(
    ftxui::text( hello ) | ftxui::border,
    ftxui::text( world ) | ftxui::border,
    ftxui::text( myftxui ) | ftxui::border
  );
  ftxui::Screen screen = ftxui::Screen::Create(
    ftxui::Dimension::Full(),
    ftxui::Dimension::Fit(doc)
  );

  ftxui::Render(screen, doc);
  screen.Print();
  std::cout << '\n';
  return 0;
}
{% endhighlight %}

If you want the *box* to take up the remaining space, send the output to `ftxui::flex`, examples:

{% highlight cpp %}
ftxui::text( world ) | ftxui::border | ftxui::flex
// Or
ftxui::text( world ) | ftxui::border | ftxui::flex,
// Or
ftxui::text( myftxui ) | ftxui::border | ftxui::flex
{% endhighlight %}
> Or all together!

---

# Conclusion
You can still add colors, for example:

{% highlight cpp %}
ftxui::text( hello ) | ftxui::border | ftxui::flex | ftxui::color(ftxui::Color::Green),
ftxui::text( world ) | ftxui::border | ftxui::flex | color(ftxui::Color::Red ),
ftxui::text( myftxui ) | ftxui::border | ftxui::flex | color(ftxui::Color::Blue)
{% endhighlight %}
> Note that for `color()` you can choose not to use the `namespace`, or if you want to specify you can also use it, in addition to also using `bgcolor` for inner padding.

And among several other resources such as: *Button, Input, Checkbox* and among many others that can be found in [documentation](https://arthursonzogni.github.io/FTXUI/examples_2component_2button_8cpp-example.html), in addition to other examples .

---

# Useful links
+ Repository: <https://github.com/ArthurSonzogni/ftxui>
+ Website: <https://arthursonzogni.github.io/FTXUI/>
+ Documentation: <https://arthursonzogni.github.io/FTXUI/index.html#introduction>
+ Examples: <https://arthursonzogni.github.io/FTXUI/examples_2component_2button_8cpp-example.html>

---

# Watch the video
The video below is in Portuguese, but you can see how all the concepts mentioned in this article work.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/OWJhDj-qgDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



