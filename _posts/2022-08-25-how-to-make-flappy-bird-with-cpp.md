---
layout: post
title: "How to Make Flappy Bird with C++"
date: 2022-08-25 08:55:48
image: '/assets/img/gamedev/flappybird.jpg'
description: 'Step by step code and also video tutorial'
tags:
- cpp
- gamedev
- sfml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Flappy Bird** is a mobile [game developed](https://terminalroot.com.br/tags#gamedev) by Vietnamese video game artist and programmer Dong Nguyen (Vietnamese: *Nguyễn Hà Đông*), under his game development company .Gears.

The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them. Nguyen created the game over the period of several days, using a bird protagonist that he had designed for a cancelled game in 2012.

In this article we will see how to recreate with [C++](https://terminalroot.com/tags#cpp) and [SFML](https://terminalroot.com.br/tags#sfml), at the end of the article there is also a video that demonstrates in video all the steps done here.

---

## 01. DRAW BACKGROUND, FLAPPY AND PIPES ON SCREEN
Declare and initialize core members and member functions.

Create the files:
{% highlight bash %}
Makefile
flappy.cpp
flappy.hpp
main.cpp
./resources/ # img/font 
{% endhighlight %}
Click to expand

<details>
 <summary><code>flappy.hpp</code></summary>

{% highlight cpp %}
#pragma once
#include <SFML/Graphics.hpp>
#include <memory>

class FlappyBird {
  std::shared_ptr<sf::RenderWindow> window; 
  float gravity, frame, space;
  int count;
  sf::Texture bg, flappy, pipe;
  std::shared_ptr<sf::Sprite> background, bird, pipeBottom, pipeTop;
  std::vector<sf::Sprite> pipes; 

  protected:
    void events();
    void draw();

  public:
    FlappyBird();
    void run();
};
{% endhighlight %}

</details>

<details>
 <summary><code>flappy.cpp</code></summary>

{% highlight cpp %}
#include "flappy.hpp"

FlappyBird::FlappyBird(){
  window = std::make_shared<sf::RenderWindow>(
    sf::VideoMode(1000,600),
    "FlappyBird (remix)",
    sf::Style::Titlebar | sf::Style::Close
  );
  window->setFramerateLimit(60);
  window->setPosition(sf::Vector2i(0, 0));

  gravity = frame = {0};
  space = {160.f};
  count = {0};

  bg.loadFromFile("./resources/img/background.png");
  flappy.loadFromFile("./resources/img/flappy.png");
  pipe.loadFromFile("./resources/img/pipe.png");

  background = std::make_shared<sf::Sprite>();
  bird = std::make_shared<sf::Sprite>();
  pipeBottom = std::make_shared<sf::Sprite>();
  pipeTop = std::make_shared<sf::Sprite>();

  background->setTexture(bg);
  bird->setTexture(flappy);
  pipeBottom->setTexture(pipe);
  pipeTop->setTexture(pipe);

  bird->setPosition(
    500.f - flappy.getSize().x / 2.f, 
    300.f - flappy.getSize().y / 2.f 
  );
  bird->setScale(2.f, 2.f);
  bird->setTextureRect(sf::IntRect(0, 0, 34, 24));

  pipeBottom->setScale(1.5f, 1.5f);
  pipeTop->setScale(1.5f, -1.5f);

  // TEMP
  pipeBottom->setPosition(100, 200);
  pipeTop->setPosition(100, 100);
}

void FlappyBird::events(){
  auto e = std::make_shared<sf::Event>(); 
  while(window->pollEvent(*e)){
    if( e->type == sf::Event::Closed){
      window->close();
    }
  }
}

void FlappyBird::draw(){
  window->clear(sf::Color::Black);
  window->draw(*background);
  window->draw(*bird);
  window->draw(*pipeBottom);
  window->draw(*pipeTop);
  window->display();
}

void FlappyBird::run(){
  while(window->isOpen() ){
    events();
    draw();
  }
}
{% endhighlight %}

</details>

<details>
 <summary><code>main.cpp</code></summary>

{% highlight cpp %}
#include "flappy.hpp"

int main(){
  auto flappy = std::make_shared<FlappyBird>(); 
  flappy->run();
  return 0;
}
{% endhighlight %}

</details>

<details>
 <summary><code>Makefile</code></summary>

{% highlight cpp %}
TARGET=a.out
CXX=g++
DEBUG=-g
OPT=-O2
WARN=-Wall
SFML=-lsfml-graphics -lsfml-window -lsfml-system
CXXFLAGS=$(DEBUG) $(OPT) $(WARN) $(SFML)
LD=g++
OBJS=main.o flappy.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(CXXFLAGS)
	@rm *.o
	@./$(TARGET)

main.o: main.cpp
	$(CXX) -c $(CXXFLAGS) main.cpp -o main.o

flappy.o: flappy.cpp
	$(CXX) -c $(CXXFLAGS) flappy.cpp -o flappy.o
{% endhighlight %}

</details>

---

# 02. MOVE THE PIPES

1. Remove from constructor::
{% highlight cpp %}
// TEMP
pipeBottom->setPosition(100, 200);
pipeTop->setPosition(100, 100);
{% endhighlight %}

2. Add to `flappy.hpp`
{% highlight cpp %}
void game();
void movePipes();
{% endhighlight %}

3. Add to `flappy.cpp`
{% highlight cpp %}
...
window->display();
++count;
}

void FlappyBird::movePipes(){
void FlappyBird::game(){
{% endhighlight %}

Add to `main.cpp`
{% highlight cpp %}
std::srand(time(0));
{% endhighlight %}

4. Add to `movePipes()`:
{% highlight cpp %}
void FlappyBird::movePipes(){
  if( count % 150 == 0 ){
    int pos = std::rand() % 275 + 175;

    pipeBottom->setPosition(1000, pos + space);
    pipeTop->setPosition(1000, pos);

    pipes.push_back(*pipeBottom);
    pipes.push_back(*pipeTop);
  }

  for (std::size_t i {}; i < pipes.size(); ++i) {

     if( pipes[i].getPosition().x < -100){
       pipes.erase(pipes.begin() + i);
     }

    pipes[i].move(-3, 0);
  }
}
{% endhighlight %}

5. Add `game()` to `run()`

6. Replace `window->draw(*pipeBottom); window->draw(*pipeTop);` with:
{% highlight cpp %}
for(auto &p : pipes){
  window->draw(p); 
}
{% endhighlight %}

---

# 03. ANIMATE THE FLAPPY BIRD
So he can move his wings

1. Add to `flappy.hpp`:
{% highlight cpp %}
void setAnimeBird();
{% endhighlight %}

2. Add to `flappy.cpp`:
{% highlight cpp %}
void FlappyBird::setAnimeBird(){
  frame += 0.15f;

  if( frame > 3 ){
    frame -= 3;
  }

  bird->setTextureRect(sf::IntRect(34 * (int)frame, 0, 34, 24));
}
{% endhighlight %}

3. And add to `game()`:
{% highlight cpp %}
void FlappyBird::game(){
  setAnimeBird();
  movePipes();
}
{% endhighlight %}

---

# 04. MOVE THE FLAPPY BIRD

1. Add to `flappy.hpp`:
{% highlight cpp %}
void moveBird();
{% endhighlight %}

2. Add to `flappy.cpp`

{% highlight cpp %}
void FlappyBird::moveBird(){
  bird->move(0, gravity);
  gravity += 0.5f;
}
{% endhighlight %}

3. Add to `game()`:
{% highlight cpp %}
setAnimeBird();
moveBird();
movePipes();
{% endhighlight %}


4. Add to `movePipes()` before `if..`:
{% highlight cpp %}
if( sf::Mouse::isButtonPressed(sf::Mouse::Left)){
  gravity = -8.f;
}
{% endhighlight %}


5. So that the bird appears to have its head tilted up and a slight movement as if it is swinging

{% highlight cpp %}
if( sf::Mouse::isButtonPressed(sf::Mouse::Left)){
  gravity = -8.f;
  bird->setRotation(-frame - 10.f);
}else{
  bird->setRotation(frame - 10.f);
}
{% endhighlight %}

---

# 05. COLLIDE WITH THE PIPES

1. Add to `flappy.hpp`
{% highlight cpp %}
bool gameover;
{% endhighlight %}

2. Add to `flappy.cpp`(constructor):
{% highlight cpp %}
gameover = {false};
{% endhighlight %}

4. Add to `movePipes()`:
{% highlight bash %}
...
for (std::size_t i {}; i < pipes.size(); ++i) {

  if(pipes[i].getGlobalBounds().intersects(bird->getGlobalBounds())){
    gameover =  true;
  }
...
{% endhighlight %}

5. Change the `game()`:
{% highlight cpp %}
void FlappyBird::game(){
  if(!gameover){
    setAnimeBird();
    moveBird();
    movePipes();
  }
}
{% endhighlight %}
> This will freeze the screen

6. Change the position of `window->draw(*bird)` to after pipes:
{% highlight cpp %}
for(auto &p : pipes){
  window->draw(p); 
}
window->draw(*bird);
{% endhighlight %}

---

# 06. ADD TEXT TO GAME OVER
1. Add to `flappy.hpp`
{% highlight cpp %}
sf::Font font;
sf::Text txt_score, txt_gameover;
{% endhighlight %}

2. Add to `flappy.cpp`(construtor)
{% highlight cpp %}
font.loadFromFile("./resources/font/flappy-font.ttf");
txt_gameover.setFont(font);
txt_gameover.setString("Press SPACE to restart");
txt_gameover.setPosition(200, 300);
txt_gameover.setCharacterSize(50);
txt_gameover.setOutlineThickness(3);
{% endhighlight %}

3. Add to `draw()`:
{% highlight cpp %}
window->draw(*bird);

if(gameover){
  window->draw(txt_gameover);
}
{% endhighlight %}

4. Add `score` and equal to zero in the constructor.

5. To restart the game. Add to `events()`:
{% highlight cpp %}
if( gameover && sf::Keyboard::isKeyPressed(sf::Keyboard::Space) ){
  score = 0;
  pipes.clear();

  bird->setPosition(
      500.f - flappy.getSize().x / 2.f, 
      300.f - flappy.getSize().y / 2.f 
      );
  gameover = false;
}
{% endhighlight %}

---

# PARTE 7 - ADD SCORE

1. `flappy.hpp`: `int count, score;`
2. constructor:
{% highlight cpp %}
txt_score.setFont(font);
txt_score.setString(std::to_string(score));
txt_score.setPosition(10, 10);
txt_score.setCharacterSize(50);
txt_score.setOutlineThickness(3);
{% endhighlight %}
3. In `movePipes()` after `bird->move(..`
{% highlight cpp %}
...
pipes[i].move(-3, 0);

if( pipes[i].getPosition().x == 298 ){
 txt_score.setString(std::to_string(++score));
}
...
{% endhighlight %}
4. To `draw()`:
{% highlight cpp %}
window->draw(txt_score);
{% endhighlight %}
5. To not add twice, just:
  - `flappy.hpp` → `bool gameover, add;`
  - `flappy.cpp` → `add = {false};` 
  - And in addition do like this:
{% highlight cpp %}
if( pipes[i].getPosition().x == 298 && !add ){
  txt_score.setString(std::to_string(score));
  add = true;
}else{
  add = false;
}
{% endhighlight %}

6. Redraw `score` after `gameover` in `events()` after `score = 0;`:
{% highlight cpp %}
txt_score.setString(std::to_string(++score));
{% endhighlight %}
> Take advantage and reset `gravity = 0.f;` too.

---

# WATCH THE VIDEO
The video is in Portuguese, but you can follow the steps even if you don't understand the language. You can also enable subtitles and use Youtube's automatic translation.


<iframe width="1227" height="690" src="https://www.youtube.com/embed/lPDl6ul8-wg" title="Como Recriar Flappy Bird com C++ em 35 Minutos! 🐦" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Source code on GitHub:
### <https://github.com/terroo/flappybird>

---

Enjoy!




