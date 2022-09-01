---
layout: post
title: "How to Create Tetris Game with C++"
date: 2022-09-01 10:47:45
image: '/assets/img/gamedev/tetris.jpg'
description: 'Step by Step with Score and Game Over and Video tutorial'
tags:
- cpp
- gamedev
- sfml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Tetris** (Russian: Тетрис)[a] is a multimedia franchise originating from a puzzle video game created by Soviet software engineer Alexey Pajitnov in 1984.
> *Video games with Tetris' core mechanics have been published by several companies for multiple platforms, most prominently during a dispute over the appropriation of the rights in the late 1980s. After a significant period of publication by Nintendo, the rights reverted to Pajitnov in 1996, who co-founded the Tetris Company with Henk Rogers to manage licensing. The franchise has since expanded into film, television, books, and music singles.* 

In this article we will create Tetris with [C++](https://terminalroot.com/tags#cpp) and [SFML](https://terminalroot.com/tags#sfml) adding **score** and **game over** .

#### At the end of the article there is a video and also the link to the source code on GitHub .

---

## 01. DRAW THE SQUARES ON THE SCREEN
Basic start files:
{% highlight bash %}
tetris.hpp
tetris.cpp
main.cpp
Makefile
resources/
{% endhighlight %}

<details>
 <summary><code>tetris.hpp</code></summary>

{% highlight cpp %}
#pragma once

#include <SFML/Graphics.hpp>
#include <memory>

class Tetris {
  std::shared_ptr<sf::RenderWindow> window;
  sf::Texture tiles;
  std::shared_ptr<sf::Sprite> sprite;

  protected:
    void events();
    void draw();

  public:
    Tetris();
    void run();
};
{% endhighlight %}
</details>

<details>
 <summary><code>tetris.cpp</code></summary>

{% highlight cpp %}
#include "tetris.hpp"

Tetris::Tetris(){
  window = std::make_shared<sf::RenderWindow>(
    sf::VideoMode(360, 720),
    "Tetris (remix)",
    sf::Style::Titlebar | sf::Style::Close
  );
  window->setPosition(sf::Vector2i(100, 100));

  tiles.loadFromFile("./resources/img/squares.png");
  sprite = std::make_shared<sf::Sprite>();
  sprite->setTexture(tiles);
}

void Tetris::events(){
  auto e = std::make_shared<sf::Event>();
  while( window->pollEvent(*e)){
    if( e->type == sf::Event::Closed){
      window->close();
    }
  }
}

void Tetris::draw(){
  window->clear(sf::Color::Black);
  window->draw(*sprite);
  window->display();
}

void Tetris::run(){
  while( window->isOpen() ){
    events();
    draw();
  }
}
{% endhighlight %}

</details>

<details>
 <summary><code>main.cpp</code></summary>

{% highlight cpp %}
#include "tetris.hpp"

int main( int argc , char **argv ){
  auto tetris = std::make_shared<Tetris>();
  tetris->run();
  return 0;
}
{% endhighlight %}

</details>


<details>
 <summary><code>Makefile</code></summary>

{% highlight bash %}
TARGET=a.out
CXX=g++
DEBUG=-g
OPT=-O0
WARN=-Wall
SFML=-lsfml-graphics -lsfml-window -lsfml-system
CXXFLAGS=$(DEBUG) $(OPT) $(WARN) $(SFML)
LD=g++
OBJS= main.o tetris.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(CXXFLAGS)
	@rm *.o
	@./$(TARGET)

main.o: main.cpp
	$(CXX) -c $(CXXFLAGS) main.cpp -o main.o

tetris.o: tetris.cpp
	$(CXX) -c $(CXXFLAGS) tetris.cpp -o tetris.o
{% endhighlight %}

</details>

Compile and run:
{% highlight bash %}
make
{% endhighlight %}

---

## 02. DRAW SHAPES ON THE SCREEN

> Add to `tetris.hpp`(`private` and first of all)
{% highlight cpp %}
static const std::uint32_t lines   {20};
static const std::uint32_t cols    {10};
static const std::uint32_t squares {4};
static const std::uint32_t shapes  {7};

struct Coords {
  std::uint32_t x, y;
} z[squares], k[squares];

std::vector<std::vector<std::uint32_t>> area;
std::vector<std::vector<std::uint32_t>> forms;
{% endhighlight %}


> Add to `tetris.hpp` the member function: `void moveToDown();`

Shapes:
{% highlight txt %}]
{1,3,5,7}, // I
{2,4,5,7}, // Z
{3,5,4,6}, // S
{3,5,4,7}, // T
{2,3,5,7}, // L
{3,5,7,6}, // J
{2,3,4,5}, // O
{% endhighlight %}

> Add `tetris.cpp` to the Constructor:
{% highlight cpp %}
 area.resize(lines);
 for (std::size_t i {}; i < area.size(); ++i) {
  area[i].resize(cols); 
 }

 forms = {
   {1,3,5,7}, // I
   {2,4,5,7}, // Z
   {3,5,4,6}, // S
   {3,5,4,7}, // T
   {2,3,5,7}, // L
   {3,5,7,6}, // J
   {2,3,4,5}, // O
 };
{% endhighlight %}


> Add to `tetris.hpp` the member function `void Tetris::moveToDown()` to `tetris.cpp`:
{% highlight cpp %}
void Tetris::moveToDown(){
 std::uint32_t number = {3};
 for (std::size_t i {}; i < squares; ++i) {
  z[i].x = forms[number][i] % 2; 
  z[i].y = forms[number][i] / 2; 
 }
}
{% endhighlight %}

> Add to `tetris.cpp` the `void Tetris::draw()` member function:
{% highlight cpp %}
for (std::size_t i {}; i < squares; ++i) {
  sprite->setPosition(z[i].x * 36, z[i].y * 36); 
  window->draw(*sprite);
}
{% endhighlight %}

> Add to `tetris.cpp` the `void Tetris::run()` member function:
{% highlight cpp %}
...
events();
moveToDown(); // ADD
...
{% endhighlight %}

---

## 03. ROTATE AND MOVE TO THE SIDE
> Add to `tetris.hpp`:
{% highlight cpp %}
int dirx;
bool rotate;

void changePosition();
void setRotate();
void resetValues();
{% endhighlight %}

> Add `tetris.cpp` to the constructor:
{% highlight cpp %}
dirx = {0};
rotate = {false};
{% endhighlight %}

> Add `tetris.cpp` to the `events()` loop
{% highlight cpp %}
if( e->type == sf::Event::KeyPressed ){
  if( e->key.code == sf::Keyboard::Up ){
    rotate = true;
  }else if( e->key.code == sf::Keyboard::Left ){
    --dirx;
  }else if( e->key.code == sf::Keyboard::Right ){
    ++dirx;
  }
}
{% endhighlight %}

> Add `tetris.cpp` contents of the 3 created member functions:
{% highlight cpp %}
void Tetris::changePosition(){
  for (std::size_t i {}; i < squares; ++i) {
   z[i].x += dirx; 
  }
}

void Tetris::setRotate(){
  if( rotate ){
    Coords coord = z[1];
    for (std::size_t i {}; i < squares; ++i) {
     int x = z[i].y - coord.y; // INVERTIDOS
     int y = z[i].x - coord.x; // INVERTIDOS

     z[i].x = coord.x - x;
     z[i].y = coord.y + y; // AQUI É SOMA
    }
  }
}

void Tetris::resetValues(){
  dirx = 0;
  rotate = false;
}
{% endhighlight %}

> Change the `run()` member function into `tetris.cpp` and add the new created member functions in that order:
{% highlight cpp %}
void Tetris::run(){
  while( window->isOpen() ){
    events();

    changePosition();
    setRotate();
    moveToDown();
    resetValues();

    draw();
  }
}
{% endhighlight %}

TO MOVE YOU NEED TO CHANGE `moveToDown()` and add the condition `if( z[0].x == 0 ){}` and put the LOOP inside
{% highlight cpp %}
if( z[0].x == 0 ){ // ADD
  for (std::size_t i {}; i < squares; ++i) {
    z[i].x = forms[number][i] % 2; 
    z[i].y = forms[number][i] / 2; 
  }
}
{% endhighlight %}

COMPILE AND DISPLAY ROTATION AND SIDES MOVEMENT!

---

## 04. MOVE DOWN

> Add to `tetris.hpp`:
{% highlight cpp %}
sf::Clock clock;
float timercount, delay;
{% endhighlight %}

> Adicionar ao construtor:
{% highlight cpp %}
timercount = {0.f};
delay = {0.2f};
{% endhighlight %}

> Adicionar à `void Tetris::events()` antes de `auto e = ...`:
{% highlight cpp %}
float time = clock.getElapsedTime().asSeconds();
clock.restart();
timercount += time;
{% endhighlight %}

> Adicionar à `void Tetris::moveToDown()` antes do `std::uint32_t number = {3}`:
{% highlight cpp %}
if( timercount > delay ){
  for (std::size_t i {}; i < squares; ++i) {
    ++z[i].y; 
  }
  timercount = 0;
}
{% endhighlight %}

> Add to builder:
{% highlight cpp %}
timercount = {0.f};
delay = {0.2f};
{% endhighlight %}

> Add to `void Tetris::events()` before `auto and = ...`:
{% highlight cpp %}
float time = clock.getElapsedTime().asSeconds();
clock.restart();
timercount += time;
{% endhighlight %}

> Add to `void Tetris::moveToDown()` before `std::uint32_t number = {3}`:
{% highlight cpp %}
if( timercount > delay ){
  for (std::size_t i {}; i < squares; ++i) {
    ++z[i].y; 
  }
  timercount = 0;
}
{% endhighlight %}

---

## 05. LIMIT THE PARTS TO THE FLOOR AND FIT ONE ON TOP OF THE OTHER
> Add to `tetris.hpp`:
{% highlight cpp %}
bool maxLimit();
{% endhighlight %}

> Add to `bool Tetris::maxLimit()`:
{% highlight cpp %}
bool Tetris::maxLimit(){
  for (std::size_t i {}; i < squares; ++i) {

    if( z[i].x < 0 || 
        z[i].x >= cols || 
        z[i].y >= lines || 
        area[ z[i].y][ z[i].x ] ){
      return true;
    }
  }
  return false;
}
{% endhighlight %}

> Add the seeder to `main.cpp`:
{% highlight cpp %}
std::srand( std::time( 0 ));
{% endhighlight %}

> Change `changePosition()` to store the value of the moving shape(`z[i]`) to fix it(`k[i]`) and check with `maxLimit()`:
{% highlight cpp %}
void Tetris::changePosition(){
  for (std::size_t i {}; i < squares; ++i) {
   k[i] = z[i];
   z[i].x += dirx; 

   if(maxLimit()){
     for (std::size_t i {}; i < squares; ++i) {
      z[i] = k[i]; 
     }
   }

  }
}
{% endhighlight %}

> Copy the condition from `if( maxLimit() )...` and paste inside the `if( rotate )...`, but outside the `for` loop in `void Tetris::setRotate()`
{% highlight cpp %}
if( maxLimit() ){
  for (std::size_t i {}; i < squares; ++i) {
    z[i] = k[i]; 
  }
}
{% endhighlight %}

> Add to `int color` `tetris.hpp` and initialize it to `1`: `color = {1};`

> Same thing also in `moveToDown()`, but creating random pieces and changing the position of the `number` line into the `if( maxLimit() )` condition, REMOVE CONDITION: `if( z[0 ].x == 0 ){ ...` :
>
> IMPORTANT: create the loop to set the color to a fixed position and make it random;
{% highlight cpp %}
void Tetris::moveToDown(){

  if( timercount > delay ){
    for (std::size_t i {}; i < squares; ++i) {
      k[i] = z[i]; 
      z[i].y += 1; 
    }
    if( maxLimit() ){

      for (std::size_t i {}; i < squares; ++i) { // ADD
       area[ k[i].y ][ k[i].x ] = color;
      }

      color = 1 + std::rand() % shapes;
      std::uint32_t number = std::rand() % shapes;
      for (std::size_t i {}; i < squares; ++i) {
        z[i].x = forms[number][i] % 2; 
        z[i].y = forms[number][i] / 2; 
      }

    }
    timercount = 0;
  }
}
{% endhighlight %}

> Add loop in `void Tetris::draw()`:
{% highlight cpp %}
for (std::size_t i {}; i < lines; ++i) {
  for (std::size_t j {}; j < cols; ++j) {
    if( area[i][j] != 0 ){
      sprite->setPosition( j * 36, i * 36 );
      window->draw( *sprite );
    }
  }
}
{% endhighlight %}

> Add to `events()` outside the loop:
{% highlight cpp %}
if(sf::Keyboard::isKeyPressed(sf::Keyboard::Down)){ // ADD
  delay = 0.05f;
}
{% endhighlight %}

TO MAKE THE FIRST PIECE ALSO RANDOM, add to the constructor:
> Copy from `moveToDown()`
{% highlight cpp %}
std::uint32_t number = std::rand() % shapes; // ADD
for (std::size_t i {}; i < squares; ++i) {
  z[i].x = forms[number][i] % 2; 
  z[i].y = forms[number][i] / 2; 
}
{% endhighlight %}

---

## 06. ADD RANDOM COLORS
> Add `sprite->setTextureRect(sf::IntRect(color * 36, 0, 36, 36));` to the `squares` loop in `draw()`
{% highlight cpp %}
for (std::size_t i {}; i < squares; ++i) {
  sprite->setTextureRect(sf::IntRect(color * 36, 0, 36, 36));
  sprite->setPosition(z[i].x * 36, z[i].y * 36); 
  window->draw(*sprite);
}
{% endhighlight %}

Note that the fixed part will also change color, so to solve this, just add `sprite->setTextureRect(sf::IntRect(area[i][j] * 36, 0, 36, 36));`(COPY the already existing and modify) to the `lines cols` loop:
{% highlight cpp %}
for (std::size_t i {}; i < lines; ++i) {
  for (std::size_t j {}; j < cols; ++j) {
    if( area[i][j] == 0 ){
      continue;
    } 
    sprite->setTextureRect(sf::IntRect(area[i][j] * 36, 0, 36, 36));
    sprite->setPosition( j * 36, i * 36 );
    window->draw( *sprite );
  } 
}
{% endhighlight %}

---

## 07. ADD SCORE
> Create a new member function in `tetris.hpp` also create score and add as zero to the constructor:
{% highlight cpp %}
void setScore();
{% endhighlight %}

> Add to `tetris.cpp` the execution of `setScore()`:
{% highlight cpp %}
void Tetris::setScore(){
  int match = {lines - 1};
  for (std::size_t i = match; i >= 1; --i) {
   std::uint32_t sum {};
   for (std::size_t j {}; j < cols; ++j) {
    if( area[i][j] ){
      ++sum;
    }
    area[match][j] = area[i][j];
   }
   if( sum < cols ){
     --match;
   }else{
     std::cout << "Score: " << ++score << '\n';
   }
  }
}
{% endhighlight %}

---

## 08. ADD BACKGROUNDS AND TEXT FOR SCORING
+ [GIMP](https://gimp.org) → 360x720 → Filters → Render → Textures → Grid → 36 | 1 | COLOR
+ Export → background.png
+ Add `sf::Texture tiles, bg;` and `std::shared_ptr<sf::Sprite> sprite, background;`
+ Constructor:
{% highlight cpp %}
bg.loadFromFile("./resources/img/background.png");
background = std::make_shared<sf::Sprite>();
background->setTexture(bg);
{% endhighlight %}
+ `draw()` → `window->draw(*background);`

---

## 09. ADD SCORE AND GAMEOVER

> Add to `tetris.hpp`
{% highlight cpp %}
sf::Font font;
sf::Text txtScore, txtGameOver;
bool rotate, gameover;
{% endhighlight %}

> Add to `tetris.cpp`
{% highlight cpp %}
score = {0};
gameover = {false};

font.loadFromFile("./font.ttf");
txtScore.setFont(font);
txtScore.setPosition(100.f, 10.f);
txtScore.setString( "SCORE: " + std::to_string( score ));
txtScore.setStyle(sf::Text::Bold);
txtScore.setCharacterSize(30);
txtScore.setOutlineThickness(3);

txtGameOver.setFont(font);
txtGameOver.setPosition( 30.f , 330.f);
txtGameOver.setString("GAME OVER");
txtGameOver.setStyle(sf::Text::Bold);
txtGameOver.setCharacterSize(50);
txtGameOver.setOutlineThickness(3);
{% endhighlight %}

> `Tetris::draw()`:
{% highlight cpp %}
window->draw( txtScore );

if( gameover ){
  window->draw( txtGameOver );
}
{% endhighlight %}

> `Tetris::run()`
{% highlight cpp %}
if( !gameover ){
  changePosition();
  setRotate();
  moveToDown();
  setScore();
  resetValues();
}
{% endhighlight %}

> `Tetris::setScore`:
{% highlight cpp %}
void Tetris::setScore(){
  int match = {lines - 1};
  for (std::size_t i = match; i >= 1; --i) {
    std::uint32_t sum {};
    for (std::size_t j {}; j < cols; ++j) {
      //if( area[i][j] != 0 ){
      if( area[i][j] ){
        if( i == 1 ){
          gameover = true;
        }
        ++sum;
      }
      area[match][j] = area[i][j]; // FIXA AO CHAO
    }
    if( sum < cols ){
      --match;
    }else{
      txtScore.setString( "SCORE: " + std::to_string( ++score ));
    }
  }
}
{% endhighlight %}

---

# WATCH THE VIDEO
The video is in Portuguese, but you can follow the steps even if you don't understand the language. You can also enable subtitles and use Youtube's automatic translation.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/TRzFKQw-uX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## SOURCE CODE IN GITHUB
### <https://github.com/terroo/tetris>

---


