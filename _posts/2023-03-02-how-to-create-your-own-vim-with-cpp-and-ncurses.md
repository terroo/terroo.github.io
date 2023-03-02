---
layout: post
title: "How to Create Your Own VIM with C++ and NCURSES"
date: 2023-03-02 08:20:43
image: '/assets/img/cpp/cpp-plus-ncurses-equals-vim.jpg'
description: 'Step by step for you to create a text editor similar to Vim.'
tags:
- cpp
- ncurses
- vim
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

In this example we will make a [Vim](https://terminalroot.com/tags#vim)-style editor, only simpler, but it will include:

+ File opening;
+ Save files;
+ A Vim Airline style Status Line or Status Bar where we will monitor rows and columns, also file name; 
+ And more: Insert and Normal modes.

Dependencies:
+ [GNU GCC/G++](https://gcc.gnu.org/)
+ [GNU Make](https://www.gnu.org/software/make/)
+ [Ncurses](https://invisible-island.net/ncurses/)

Topics in this article:
+ Starting basic project
+ Get file via command line
+ Display what you type on the screen
+ Create 'modes' (normal, insert and quit) and statusline
+ Display what you type after insert mode
+ Add print organized
+ Create member functions to manipulate the backspace key and other keys
+ Add cursor movement
+ Manipulating the `delete`, `key_enter` and `tab key`:
+ Improving the status line
+ Opening and saving files
+ Watch video
+ Source code on GitHub:

Let's go write the code!

---

# 01. STARTING BASIC PROJECT

Create project and basic files
{% highlight bash %}
mkdir minivim
cd minivim
vim minivim.{hpp,cpp} main.cpp Makefile
{% endhighlight %}

> `minivim.hpp`
{% highlight cpp %}
#pragma once

#include <ncurses.h>
#include <memory>

class MiniVim {
  public:
    MiniVim();
    ~MiniVim();
    void run();
};
{% endhighlight %}

> `minivim.cpp`
{% highlight cpp %}
#include "minivim.hpp"

MiniVim::MiniVim(){
  initscr();
  noecho();
  cbreak();
  keypad(stdscr, true);
}

MiniVim::~MiniVim(){
  refresh();
  endwin();
}

void MiniVim::run(){
  printw("Funcionando!");
  getch();
}
{% endhighlight %}

> `main.cpp`
{% highlight cpp %}
#include "minivim.hpp"

int main (int argc, char **argv){
  auto minivim = std::make_shared<MiniVim>(); 
  minivim->run();
  return 0;
}
{% endhighlight %}

> `Makefile`
{% highlight makefile %}
TARGET=minivim
CXX=g++
DEBUG=-g
OPT=-O0
WARN=-Wall -Wno-unknown-pragmas
NCURSES=-lncurses -ltinfo
CXXFLAGS=$(DEBUG) $(OPT) $(WARN) $(NCURSES) -pipe
LD=g++
LDFLAGS=$(NCURSES)
OBJS= main.o minivim.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(LDFLAGS)
	@rm -rf *.o
 
main.o: main.cpp
	$(CXX) -c $(CXXFLAGS) main.cpp -o main.o
 
minivim.o: minivim.cpp
	$(CXX) -c $(CXXFLAGS) minivim.cpp  -o minivim.o
{% endhighlight %}

Compile and run to test!
{% highlight bash %}
make
./minivim
{% endhighlight %}

---

# 02. GET FILE VIA COMMAND LINE
If there is a file it will be the file name, if not it will be `untitled`.

> `minivim.hpp`
{% highlight cpp %}
#include <string>
std::string filename; // protected
MiniVim(const std::string&); // change constructor signature
{% endhighlight %}

Add to `minivim.cpp` and change the constructor:
{% highlight cpp %}
MiniVim::MiniVim(const std::string& file){

  if(file.empty()){
    filename = "untitled";
  }else{
    filename = file;
  }
...
{% endhighlight %}

Change the `printw`:
{% highlight cpp %}
printw(&filename[0]);
{% endhighlight %}

Change `main.cpp`:
{% highlight cpp %}
#include "minivim.hpp"

int main (int argc, char **argv){
  if(argc > 1){
    auto minivim = std::make_shared<MiniVim>(argv[1]);
    minivim->run();
  }else{
    auto minivim = std::make_shared<MiniVim>("");
    minivim->run();
  }
  return 0;
}
{% endhighlight %}

Compile and run to test!
{% highlight bash %}
make
./minivim
./minivim main.cpp
./minivim filename.js
{% endhighlight %}

---

# 03. DISPLAY WHAT YOU TYPE ON THE SCREEN
Do it this way temporarily just to see if everything is right

Change `minivim.hpp`:
{% highlight cpp %}
#include <vector>
std::vector<std::string> lines; // private
{% endhighlight %}

Change `minivim.cpp`:
{% highlight cpp %}
// add at least one line to not give segmentation fault
lines.push_back(""); // constructor

// COMMENT
//printw(&filename[0]);
//getch();

// RUN
while(getmaxyx(stdscr, LINES, COLS)){
    int ch = getch();
    std::string s(1, (char)ch);
    lines.push_back(s);
    for (size_t i {}; i < lines.size(); ++i) {
        mvprintw(0, i, lines[i].c_str());
    }
}
{% endhighlight %}

Compile and run to test!
{% highlight bash %}
make
./minivim
{% endhighlight %}

---

# 04. CREATE 'MODES' (NORMAL, INSERT and QUIT) and STATUSLINE
Now let's start writing our MiniVim!

Change `minivim.hpp`:
{% highlight cpp %}
// private
int x, y;
char mode;
std::string status;

// protected
void update();
void statusline();
{% endhighlight %}

Change `minivim.cpp`, initialize members:
{% highlight cpp %}
// constructor
x = y = 0;
mode = 'n';
status = "NORMAL";
{% endhighlight %}

Create `MiniVim::update()`:
{% highlight cpp %}
void MiniVim::update(){
  switch (mode){
    case 27:
    case 'n':
      status = "NORMAL";
      break;
    case 'i':
      status = "INSERT";
      break;
    case 'q':
      break;
  }
}
{% endhighlight %}

Create `MiniVim::statusline()`:
{% highlight cpp %}
void MiniVim::statusline(){
  attron(A_REVERSE);
  mvprintw(LINES - 1, 0, status.c_str());
  attroff(A_REVERSE);
}
{% endhighlight %}

Change `MiniVim::run()`:
{% highlight cpp %}
void MiniVim::run(){
  while(mode != 'q'){
    update();
    statusline();
    mode = getch();
  }
}
{% endhighlight %}

Compile and run to test!
{% highlight bash %}
make
./minivim
{% endhighlight %}

---

# 05. DISPLAY WHAT YOU TYPE AFTER INSERT MODE
Manipulate data.

Change `minivim.hpp`:
{% highlight cpp %}
void input(int); // protected
{% endhighlight %}

Change `minivim.cpp`:
{% highlight cpp %}
void MiniVim::input(int c){
  switch (mode){
    case 27:
    case 'n':
      break;
    case 'i':
      status = "INSERT";
      break;
  }
}
{% endhighlight %}

Add a new `switch` inside `case 'n':`
{% highlight cpp %}
switch (c){
  case 'q':
    mode = 'q';
  break;
  case 'i':
    mode = 'i';
  break;
  case 'w':
    mode = 'w';
  break;
}
{% endhighlight %}

Add a `switch` inside `case 'i':`
{% highlight cpp %}
switch (c){
  case 27:
    mode = 'n';
  break;
  default:
    // TEMP
    std::string s(1, c);
    lines.push_back(s);
  break;
}
{% endhighlight %}

Add loop to end of member function:
{% highlight cpp %}
for (size_t i {}; i < lines.size(); ++i) {
  mvprintw(0, i, lines[i].c_str()); 
}
{% endhighlight %}

Change and add to `run()`:
{% highlight cpp %}
int c = getch();
input(c);
{% endhighlight %}

Compile and run to test!
{% highlight bash %}
make
./minivim
{% endhighlight %}

---

# 06. ADD PRINT ORGANIZED
Map keys and coordinates

Change `minivim.hpp`:
{% highlight cpp %}
void print(); // protected
{% endhighlight %}

Remove codes from `minivim.cpp` and then add in place of `push_back()`:
{% highlight cpp %}
// REMOVE and TEMP
std::string s(1, c);
lines.push_back(s);

for (size_t i {}; i < lines.size(); ++i) {
   mvprintw(0, i, lines[i].c_str()); 
}

// change and add
lines[y].insert(x, 1, c);
++x;
{% endhighlight %}

Create content for `MiniVim::print()`:
> In this way, so that there is no segmentation fault when we create the file opening routine
{% highlight cpp %}
void MiniVim::print(){
  for (size_t i {}; i < LINES - 1; ++i) {
   if(i >= lines.size()){
     move(i, 0);
     clrtoeol();
   }else{
     mvprintw(i, 0, lines[i].c_str());
   } 
   clrtoeol();
  }
  move(y, x); // revert
}
{% endhighlight %}

Add to `run()`:
{% highlight cpp %}
print(); // right after: statusline();
{% endhighlight %}

Compile and run to test!
{% highlight bash %}
make
./minivim
{% endhighlight %}

---

# 07. CREATE MEMBER FUNCTIONS TO MANIPULATE THE BACKSPACE KEY AND OTHER KEYS
Change `minivim.hpp` adding member functions:
{% highlight cpp %}
// PRIVATE
void m_remove(int); // remove character
std::string m_tabs(std::string&); // manipulate m_tabs to remove tabs
void m_insert(std::string, int); // insert in the middle
void m_append(std::string&); // add to end of line
{% endhighlight %}

Create execution of all of them:
{% highlight cpp %}
void MiniVim::m_remove(int number){
  lines.erase(lines.begin() + number);
}

std::string MiniVim::m_tabs(std::string& line){
  std::size_t tab = line.find('\t');
  return tab == line.npos ? line : m_tabs(line.replace(tab, 1, "  "));
}

void MiniVim::m_insert(std::string line, int number){
  line = m_tabs(line);
  lines.insert(lines.begin() + number, line);
}

void MiniVim::m_append(std::string& line){
  line = m_tabs(line);
  lines.push_back(line);
}
{% endhighlight %}

Create a case right after `case 'i':`
{% highlight cpp %}
case 'i':
  switch (c){
    case 27:
      mode = 'n';
    break;
    case 127:
    case KEY_BACKSPACE:
      if( x == 0 && y > 0){
        x = lines[y - 1].length();
        lines[y - 1] += lines[y];
        m_remove(y);
        // ADICIONAR up();
      }else if(x > 0){
        lines[y].erase(--x, 1);
      }
    break;
    default:
      lines[y].insert(x, 1, c);
      ++x;
    break;
  }
break;
{% endhighlight %}

---

# 08. ADD CURSOR MOVEMENT
Change `minivim.hpp` adding the member functions:
{% highlight cpp %}
// protected
void up();
void left();
void right();
void down();
{% endhighlight %}

Create content:
{% highlight cpp %}
void MiniVim::up(){
  if(y > 0){
    --y;
  }
  if( x >= lines[y].length()){
    x = lines[y].length();
  }
  move(y, x);
}

void MiniVim::left(){
  if(x > 0){
    --x;
    move(y, x);
  }
}

void MiniVim::right(){
  if( (int)x <= COLS && x <= lines[y].length() - 1){
    ++x;
    move(y, x);
  }
}

void MiniVim::down(){
  if( (int)y < LINES && y < lines.size() - 1){
    ++y;
  }
  if( x >= lines[y].length()){
    x = lines[y].length();
  }
  move(y, x);
}
{% endhighlight %}

Add to start of `input(int c)`:
{% highlight cpp %}
switch (c){
  case KEY_UP:
    up();
    return;
  case KEY_LEFT:
    left();
    return;
  case KEY_RIGHT:
    right();
    return;
  case KEY_DOWN:
    down();
    return;
}
{% endhighlight %}

---

# 09. MANIPULATING THE `DELETE`, `KEY_ENTER` and `TAB KEY`:
Delete key:
{% highlight cpp %}
case KEY_DC:
  if( x == lines[y].length() && y != lines.size() - 1){
    lines[y] += lines[y + 1];
  }else{
    lines[y].erase(x, 1);
  }
break;
default: // before here
{% endhighlight %}

Enter key
{% highlight cpp %}
case KEY_ENTER:
case 10:
  if(x < lines[y].length()){
   m_insert( lines[y].substr(x, lines[y].length() - x), y + 1 ); 
   lines[y].erase(x, lines[y].length() - x);
  }else{
    m_insert("", y + 1);
  }
  x = 0;
  down();
  break;
default: // before here
{% endhighlight %}

Tab key:
{% highlight cpp %}
case KEY_BTAB:
case KEY_CTAB:
case KEY_STAB:
case KEY_CATAB:
case 9:
  lines[y].insert(x, 2, ' ');
  x += 2;
  break;
default: // before here
{% endhighlight %}

---

# 10. IMPROVING THE STATUS LINE
Let's monitor the cursor position and add colors and features!
+ Create a member named `std::string section`
+ Initialize in the constructor as empty: `section = {};`
+ Add to the end of the `update()` function:
{% highlight cpp %}
section = " COLS: " + std::to_string(x) + " | ROWS: " + std::to_string(y) + " | FILE: " + filename;
status.insert(0, " "); // initial SPACE for `status`
{% endhighlight %}

Print on `statusline()`:
{% highlight cpp %}
mvprintw( LINES - 1, COLS - section.length(), &section[0]);
{% endhighlight %}

Make the slash long, add to `statusline()` right after `attron(A_REVERSE);`:
{% highlight cpp %}
for (int i {}; i < COLS; ++i) {
  mvprintw(LINES - 1, i, " "); 
}
{% endhighlight %}

Add colors, include in the constructor after `initscr` and other declarations: `use_default_colors();` and in `statusline()`:
{% highlight cpp %}
void MiniVim::statusline(){
  start_color();
  if( mode == 'n'){
    init_pair(1, COLOR_MAGENTA, COLOR_BLACK);
  }else{
    init_pair(1, COLOR_GREEN, COLOR_BLACK);
  }

  attron(A_REVERSE);
  attron(A_BOLD);
  attron(COLOR_PAIR(1));
  for (int i {}; i < COLS; ++i) {
   mvprintw(LINES - 1, i, " "); 
  }
  mvprintw(LINES - 1, 0, status.c_str());
  mvprintw( LINES - 1, COLS - section.length(), &section[0]);

  attroff(COLOR_PAIR(1));
  attroff(A_BOLD);
  attroff(A_REVERSE);
}
{% endhighlight %}

---

# 11. OPENING and SAVING FILES
Add to `minivim.hpp`:
{% highlight cpp %}
#include <filesystem>
#include <fstream>

void open(); // protected
{% endhighlight %}

Add this code to the constructor before `initscr();`:
{% highlight cpp %}
if(std::filesystem::exists(filename)){
  std::ifstream ifile(filename);
  if(ifile.is_open()){
    while(!ifile.eof()){
      std::string buffer;
      std::getline(ifile, buffer);
      m_append(buffer);
    }
  }else{
    //std::printf("Cannot open file.\n");
    throw std::runtime_error("Cannot open file. Permission denied.");
    //exit(0);
  }
}else{
  std::string str {};
  m_append(str);
}
{% endhighlight %}

To save files first add this member function as `protected` to `minivim.hpp`:
{% highlight cpp %}
void save();
{% endhighlight %}

Create the run in `minivim.cpp`:
{% highlight cpp %}
void MiniVim::save(){
  std::ofstream ofile(filename);
  if( ofile.is_open() ){
    for (size_t i {}; i < lines.size(); ++i) {
     ofile << lines[i]; 
    }
    ofile.close();
  }else{
    refresh();
    endwin();
    std::printf("Cannot to save file.\n");
    exit(0);
  }
}
{% endhighlight %}

And then change in `MiniVim::input(int c)`:
{% highlight cpp %}
case 'w':
  mode = 'w';
  save();
break;
{% endhighlight %}

Now it's ready and you can run all the tests!

---

# Watch video

If you want to see the entire process created here on video, I suggest watching the video below. Despite being in Portuguese, it is possible to follow the step by step regardless of the language.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/p7k2tiGbcwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Source code on GitHub:
## <https://github.com/terroo/minivim>



