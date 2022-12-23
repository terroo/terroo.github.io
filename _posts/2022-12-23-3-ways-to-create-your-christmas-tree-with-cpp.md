---
layout: post
title: "3 Ways to Create Your Christmas Tree with C++ 🎄🎁🎅"
date: 2022-12-23 16:18:06
image: '/assets/img/pixelart/christmas-tree-cpp.png'
description: 'Including shapes in the terminal and also with SFML and OpenGL.'
tags:
- cpp
- pixelart
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')
> Don't judge the picture! =) This was one of the first Pixel Art I did with [LibreSprite](https://libresprite.github.io/) ! 😃 

---

[So, it's Christmas!](https://www.youtube.com/watch?v=CoNHlJ_TZLI) How about we take advantage of this unique date of the year to practice a little more of our knowledge in [C++](https:/ /terminalroot.com/tags#cpp)?

In this article we will see three ways to create our Christmas Tree with C++, including forms in the terminal and also with [OpenGL](https://terminalroot.com/tags#opengl) and [SFML](https://terminalroot.com/tags#sfml). 😃 

---

# 1st Form, as basic as possible
If we create a *nested loop* we can draw different geometric shapes, however, the most practiced is a triangle. In the code below, we managed to make a right triangle, that is, for our solution, it would be half of the problem solved.

Note that I put the separate function so that we can customize the size of the triangle we want

> `vim 01-christmas-tree.cpp`

{% highlight cpp %}
#include <iostream>

void drawTree(int min, int max){
  for (int i = min; i <= max; ++i){
    for (int x = 0; x < i; ++x){
      std::cout << "*";
    }
    std::cout << '\n';
  }
}

int main(){
  drawTree(1,4);
  return 0;
}
{% endhighlight %}

After compiling and running we will have the possible output below:
{% highlight bash %}
g++ 01-christmas-tree.cpp && ./a.out

*
**
***
****
{% endhighlight %}

That is, only 4 basic lines! If you want it a little bigger, just change the `drawTree()` function to `1,10` or whatever number you want:

{% highlight cpp %}
drawTree(1, 10);
{% endhighlight %}

And then, we will have a slightly larger size:

{% highlight bash %}
*
**
***
****
*****
******
*******
********
*********
**********
{% endhighlight %}

But we really want to have an equilateral triangle, so we'll add two more *loops* inside the *main loop* with calculations that create the left part of the triangle and give space to the left, in addition to removing the `min` parameter so we can show the entire triangle, see the code to notice the difference:

{% highlight cpp %}
#include <iostream>

void drawTree(int max){
  for (int i {}; i < max; ++i){
    for (int x {}; x < max; ++x){
      std::cout << " ";
    }
    for (int j = max - i; j > 0; j--){
      std::cout << " ";
    }
    for (int k {}; k < 2 * i + 1; ++k){
      std::cout << "*";
    }
    std::cout << '\n';
  }
}

int main(){
  drawTree(10);
  return 0;
}
{% endhighlight %}

Now it's cool! We can still customize the size via `argc` and `argv`, but that's up to you!

---

# 2nd Shape - A more stylish and animated Christmas Tree!
In this other form, we're going to increment a few more **ASCII** characters to make it cooler, we're also going to use the [unistd.h](https://en.wikipedia.org/wiki/Unistd.h) library to get a *lag*(`sleep`) of 1 second when changing the animation .

In addition to adding COLORS! For this we will use a *library* that we created right here on the blog, for more details see the article: [Create your own color library for C++](https://terminalroot.com/2021/05/crie-sua -own-color-library-for-cpp.html) . The cool thing about this library is that it is simple and works well in LSP, see the gif below it informing each `string`, note that it informs: **underscore**, **italics**, **normal**, * *background** and among others:

![LSP Color Lib](/assets/img/pixelart/gif-color-lsp.webp)

That is, copy the post code and save it in a file named `colors.hpp` and leave it in the same directory as the code below!

The code in summary will be:
> `vim 02-christmas-tree.cpp`

{% highlight cpp %}
#include <iostream>
#include <unistd.h>
#include "colors.hpp" // inclui as cores

int main(){
  srand(time(NULL));
  for (;;) {
    for (int x = 0; x < 20; x++) {
      for (int y = 0; y < 22 - x; y++)
        std::cout << " ";

      for (int i = 0; i <= x * 2; i++) {
        int randm = rand() % 40;
        if (randm ==i)
        {
          std::cout << hey::white << "O";
        }
        else if (randm + i % 2 == 0) {
          std::cout << hey::red << "@";
        }
        else {
          std::cout << hey::green << "*";
        }
      }
      std::cout.put('\n');
    }

    for (int t = 0; t < 3; t++) {
      for (int o = 0; o < 19; o++) {
        std::cout << hey::white << " ";
      }
      std::cout << hey::white << "|  |\n";
    }
    sleep(1);
    system("clear");
  }
}
{% endhighlight %}
> Compile and run: `g++ 02-christmas-tree.cpp && ./a.out`

The tree will possibly look like this:

![02-christmas-tree.cpp running...](/assets/img/pixelart/gif-tree-cpp.webp)

---

# 3rd Way - Using C++ with SFML and OpenGL
And finally we have [SFML](https://terminalroot.com/tags#sfml) and [OpenGL](https://terminalroot.com/tags#opengl), this example I found on the internet, I just made some *small modifications*!

Read the code for more details, but first prepare a directory for the files:

{% highlight bash %}
mkdir christmas-tree
cd christmas-tree
vim tree.{hpp,cpp} main.cpp Makefile
{% endhighlight %}

> `tree.hpp`
{% highlight cpp %}
#pragma once

#include <SFML/Graphics.hpp>
#include <SFML/OpenGL.hpp>
#include <unistd.h>
#include <cmath>
#include <memory>

class ChristmasTree {

  std::shared_ptr<sf::RenderWindow> window;

  public:
    ChristmasTree();
    void events();
    void draw();
    void run();

    void lineto(float,float,float,float);
    void tree(float,float,float,float);
};
{% endhighlight %}

> `tree.cpp`
{% highlight cpp %}
#include "tree.hpp"

ChristmasTree::ChristmasTree(){
  window = std::make_shared<sf::RenderWindow>(
    sf::VideoMode(400, 600),
    "Christmas Tree: C++, OpenGL and SFML",
    sf::Style::Titlebar | sf::Style::Close
  );
  window->setPosition(sf::Vector2i(0, 0));
  window->setFramerateLimit(30);
  glOrtho(0.0, window->getSize().x, window->getSize().y, 0.0, 1.0, -1.0);
}

void ChristmasTree::events(){
  auto e = std::make_shared<sf::Event>();
  while( window->pollEvent( *e ) ){
    if( e->type == sf::Event::Closed){
      window->close();
    }
  }
}

void ChristmasTree::draw(){
  window->clear(sf::Color::Black);
  glColor3f(0.0, 1.0, 0.0);
  lineto(210.0, 400.0, 160.0, M_PI/2.0);
  tree(210.0, 400.0, 75.0, -M_PI/2.0);
  window->display();
  usleep(10000);
}

void ChristmasTree::run(){
  while( window->isOpen() ){
    events();
    draw();
  }
}

void ChristmasTree::lineto(float x, float y, float len, float angle) {
  glBegin(GL_LINES);
  glVertex2f(x, y);
  glVertex2f(x+len*cos(angle), y+len*sin(angle));
  glEnd();
}

void ChristmasTree::tree(float x, float y, float len, float angle){
  const float strange_angle = M_PI/24.0;
  lineto(x, y, len, angle+strange_angle);
  lineto(x, y, -len, angle);
  lineto(x, y, len, angle+2*M_PI/3.0+strange_angle);
  lineto(x, y, len, angle-2*M_PI/3.0+strange_angle);

  const float len_min = 2.0;
  if(len > len_min){
    const float len_div = 0.4;

    tree(x+len*cos(angle+strange_angle), 
        y+len*sin(angle+strange_angle),
        2*len*len_div, angle+strange_angle);
    tree(x+len*cos(angle+2*M_PI/3.0+strange_angle), 
        y+len*sin(angle+2*M_PI/3.0+strange_angle), 
        len*len_div, angle+2*M_PI/3.0+strange_angle);
    tree(x+len*cos(angle-2*M_PI/3.0+strange_angle), 
        y+len*sin(angle-2*M_PI/3.0+strange_angle), 
        len*len_div, angle-2*M_PI/3.0+strange_angle);
  }
}
{% endhighlight %}

> `main.cpp`
{% highlight cpp %}
#include "tree.hpp"

int main( int argc , char **argv ){
  auto cmas = std::make_shared<ChristmasTree>();
  cmas->run();
  return 0;
}
{% endhighlight %}

> `Makefile`
{% highlight makefile %}
TARGET=a.out
CXX=g++
DEBUG=-g
OPT=-O0
WARN=-Wall
SFML=-lsfml-graphics -lsfml-window -lsfml-system -lGL
CXXFLAGS=$(DEBUG) $(OPT) $(WARN) $(SFML)
LD=g++
OBJS= main.o tree.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(CXXFLAGS)
	@rm *.o
	@./$(TARGET)

main.o: main.cpp
	$(CXX) -c $(CXXFLAGS) main.cpp -o main.o

tree.o: tree.cpp
	$(CXX) -c $(CXXFLAGS) tree.cpp -o tree.o
{% endhighlight %}

Now just compile and run:
{% highlight bash %}
make
{% endhighlight %}

Output:

![Christmas Tree C++ SFML OpenGL](/assets/img/pixelart/cmas-cpp-sfml-opengl.png)

Really good, right?!

# I wish Merry Christmas to all of you! 🎄 🎁 🎅

---

# Useful links
+ <https://github.com/codeMyDay/christmas_tree>


