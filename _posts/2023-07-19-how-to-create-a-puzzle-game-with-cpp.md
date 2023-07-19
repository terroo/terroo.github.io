---
layout: post
title: "How to Create a Puzzle Game with C++"
date: 2023-07-19 20:52:07
image: '/assets/img/gamedev/puzzle.jpg'
description: 'This article describes step by step how to create a PUZZLE GAME.'
tags:
- gamedev
- cpp
- sfml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

This article describes **step by step** how to create a **PUZZLE GAME**. This type of game involves an interesting logic to train our knowledge in [C++](https://terminalroot.com/tags#cpp) and [Game Development](https://terminalroot.com/tags#gamedev).

We are going to use [SFML](https://terminalroot.com/tags#sfml) to create this game, but you can adapt the logic to any [other library](https://terminalroot.com/tags#sdl2) or [game engine](https://terminalroot.com/tags#allegro).

---

# 01. START THE PROJECT
For this game we will use [this image](/assets/img/gamedev/puzzle.png) and also a **Makefile** to compile our project.

```bash
mkdir -p puzzle/assets
cd puzzle
mv ../puzzle.png ../Makefile . # Example
vim puzzle.{hpp,cpp} main.cpp Makefile
```

![Puzzle Numbers](/assets/img/gamedev/puzzle.png) 

---

# 02. CREATING CONTENT FOR ALL CREATED FILES
Rendering the image as a single sprite just to start the project.

File: `puzzle.hpp`
```cpp
#pragma once
#include <SFML/Graphics.hpp>
#include <memory>
#include <array>

class Puzzle {
  std::shared_ptr<sf::RenderWindow> window;
  std::shared_ptr<sf::Event> event;

  sf::Texture texture;
  int w, n,x, y, dx, dy;
  std::array<std::array<int, 6>, 6> grid;
  sf::Sprite sprite;

  protected:
   void events();
   void draw();

  public:
   Puzzle();
   void run();
};
```

File: `puzzle.cpp`
```cpp
#include "puzzle.hpp"

Puzzle::Puzzle(){
  window = std::make_shared<sf::RenderWindow>(
    sf::VideoMode(512, 512),
    "Puzzle::Remix",
    sf::Style::Titlebar | sf::Style::Close
  );
  window->setPosition(sf::Vector2i(50, 50));
  window->setFramerateLimit(60);
  event = std::make_shared<sf::Event>();

  texture.loadFromFile("./assets/puzzle.png");

  w = {128}; n = x = y = dx = dy = {0};
  grid = {0};

  sprite.setTexture(texture);
}

void Puzzle::events(){
  while(window->pollEvent(*event)){
    if(event->type == sf::Event::Closed){
      window->close();
    }
  }
}

void Puzzle::draw(){
  window->clear(sf::Color::Black);
  window->draw(sprite);
  window->display();
}

void Puzzle::run(){
  while(window->isOpen()){
    events();
    draw();
  }
}
```


File: `main.cpp`
```cpp
#include "puzzle.hpp"

int main(){
  auto p = std::make_unique<Puzzle>();
  p->run();
  return 0;
}
```

File: `Makefile`
```makefile
TARGET=a.out
CXX=g++
DEBUG=-g
OPT=-O0
WARN=-Wall
SFML=-lsfml-graphics -lsfml-window -lsfml-system
CXXFLAGS=$(DEBUG) $(OPT) $(WARN) $(SFML)
LD=g++
OBJS= main.o puzzle.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(CXXFLAGS)
	@rm *.o
	@./$(TARGET)

main.o: main.cpp
	$(CXX) -c $(CXXFLAGS) main.cpp -o main.o

puzzle.o: puzzle.cpp
	$(CXX) -c $(CXXFLAGS) puzzle.cpp -o puzzle.o
```

Building and run for first test:
```bash
make
```

---

# 03. SPLIT THE IMAGE INTO 16 SPRITES
Replace the `sf::Sprite` member in the Puzzle class with the `array` of sprites in `puzzle.hpp`:
```cpp
//sf::Sprite sprite;
std::array<sf::Sprite, 17> sprite;
```

And now in the `puzzle.cpp` file instead of just defining the texture we will create multiple sprites according to the region:
```cpp
// CONSTRUCTOR: Puzzle::Puzzle
// sprite.setTexture(texture); // Replace
for (size_t i {}; i < 4; ++i){
  for (size_t j {}; j < 4; ++j){
    ++n;
    sprite[n].setTexture(texture);
    sprite[n].setTextureRect(sf::IntRect(i * w, j * w, w, w));
    grid[i + 1][j + 1] = n;
  }
}
```

And in the member function `void Puzzle::draw()` let's also replace the line that draws the sprite with the corresponding **nested loop** below:
```cpp
// DRAW
// window->draw(sprite);
for (size_t i {}; i < 4; ++i) {
  for (size_t j {}; j < 4; ++j) {
    n = grid[i + 1][j + 1];
    sprite[n].setPosition(i * w, j * w);
    window->draw(sprite[n]);
  } 
}
```

Build and run a **second time** to see if everything is ok:
```bash
make
```

---

# 04. LISTEN TO THE MOUSE CLICK AND MOVING CHANGING POSITIONS
> See the output in the terminal.


In `puzzle.hpp` add this member function as protected
```cpp
void logic();
```

And in `puzzle.cpp` add the execution, 
```cpp
void Puzzle::logic(){
  // Map mouse click position
  sf::Vector2i pos = sf::Mouse::getPosition(*window);
  x = pos.x / w + 1;
  y = pos.y / w + 1;

  // Get empty space position
  if(grid[x + 1][y] == 16){
     dx = 1;
  }
  if(grid[x - 1][y] == 16){
     dx = -1;
  }
  if(grid[x][y + 1] == 16){
     dy = 1;
  }
  if(grid[x][y - 1] == 16){
     dy = -1;
  }
  
  // Swap the position of the number
  n = grid[x][y];
  grid[x][y] = 16;
  grid[x + dx][y + dy] = n;
  dx = 0; dy = 0;
}
```

Call `this->logic();` in `events()`
```cpp
// void Puzzle::events()
if(sf::Mouse::isButtonPressed(sf::Mouse::Left)){
  this->logic();
}
```

Build and run a **third time** to see if everything is ok:
```bash
make
```

---

# 05. SHUFFLEING THE NUMBERS AT THE START OF THE GAME
For this we will use [std::experimental::randint](https://en.cppreference.com/w/cpp/experimental/randint), if on Windows use `<random>` or any other corresponding.

Change the constructor signature in `puzzle.hpp`:
```cpp
// Puzzle();
Puzzle(const std::vector<int>&);
```

Add argument to constructor execution in `puzzle.cpp`:
```cpp
Puzzle(const std::vector<int>& nums);
```

Still in the constructor, change the `grid` line to the content below:
```cpp
//grid[i + 1][j + 1] = n;
grid[i + 1][j + 1] = nums[n - 1];
```

In the `main.cpp` file, add the header for the randint and add the code below to generate 16 non-repeating random numbers and pass the parameter to the object class:

```cpp
#include "puzzle.hpp"
#include <experimental/random>

int main(int argc, char **argv){

  std::srand(std::time(nullptr));
  int x = {0};
  std::vector<int> nums;

  while( nums.size() < 16 ){
    x = std::experimental::randint(1,16);
    if( std::find( nums.begin(), nums.end(), x ) != nums.end() ){
      continue;
    }else{
      nums.push_back(x);
    }
  }

  auto p = std::make_unique<Puzzle>(nums);
  p->run();
  return 0;
}
```

Compile, run and enjoy!
```bash
make
```

---

# WATCH VIDEO
If you want to see all the steps mentioned here on video, watch the video below. 
> Remembering that the video is in Portuguese, however, you can use Youtube's automatic translation or watch without translation, as the code is universal!

<iframe width="1253" height="705" src="https://www.youtube.com/embed/pKqWOObonUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Code on GitHub
### <https://github.com/terroo/puzzle>
> Don't forget to leave a ⭐ there!

