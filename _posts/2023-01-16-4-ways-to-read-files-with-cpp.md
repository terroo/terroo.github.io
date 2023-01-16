---
layout: post
title: "4 Ways to Read Files with C++"
date: 2023-01-16 07:33:03
image: '/assets/img/cpp/readfile-cpp.jpg'
description: 'Among the examples includes: modern, classic, gamefile and parser!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In C/C++ programming and any other programming language, in many situations we need to read external files. Whether to get data, do * parser * and among other features.

In this article we will see **4 Ways to Read File with C++** . Among these forms we will have:
+ **1**. Style [C](https://terminalroot.com/tags#linguagemc) - A classic shape;
+ **2**. *gamefile* style - Generally adopted by game developers, in [Windows](https://terminalroot.com/tags#windows) mainly, usually for `.txt` files;
+ **3**. *parser* style - Many programming languages have this form in their source code;
+ **4**. *POSIX* style - For situations where *tokens* can be created including accented characters.

I'll show you the example code and it's up to you to modify it as needed.

Let's go the list!

---

# 1. Style [C](https://terminalroot.com/tags#clinguage)
As I said at the beginning of the article, this is a classic style, this was the way I used it the most in my life. The first time I posted this code here on the blog was in an article published on [November 9, 2019](https://terminalroot.com/examples-of-functions-fread-fwrite-remove-and-others-in-c/), that is, it's been a while! :) But, as [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/tags#cpp) are stable languages, it works so well like in the old days.

It will read all the lines and show it on the screen. This form is often used for general purposes, for example a `cat`-like command.

{% highlight cpp %}
#include <stdio.h>
#include <stdlib.h>

int main( int argc, char** argv ){
     if( argc > 1 ){
         FILE *pff;
         char content[100];
         pf = fopen(argv[1], "rb");
         fread(&content, sizeof(char), 100,pf);
         printf("\nCONTENT OF FILE IS:\n %s \n", content);
         fclose(pf);
     }else{
         printf("Inform the file. Ex.: ./program file.txt\n");
     }
     return(0);
}
{% endhighlight %}

The file is defined at runtime, passed as an argument: `argv[1]`.

---

# 2. *gamefile* style
In this form I also chose to use Object Orientation, as it is closer to the real way we usually use it. For this example, use a `file.config` similar to the one below:

{% highlight ini %}
The Sandbox Game
1920 1080
120
true
{% endhighlight %}

That is, it is a file that has separate data that will be inserted in any [game](https://terminalroot.com/tags#games) any, examples: Title, Width, Height, Frames per second and a check for some type of validation.

Note that the code below, reads each data separated by `member` of our class. This is the most interesting way when it comes to specific external data.

Data will also be displayed separately according to its member functions. The file is also defined at runtime, passed as an argument: `argv[1]`.
> Example: `./a.out file.config`

{% highlight cpp %}
#include <iostream>
#include <fstream>

class MyGame {

     std::string title;
     int width, height, fps;
     boolcheck;

   public:
     MyGame(){}

     void readfile(std::string str){
       std::ifstream file(str);
       if( file.is_open() ){
         std::getline(file, this->title);
         file >> this->width >> this->height;
         file >> this->fps;
         file >> this->check;
       }
     }

     void show(){
       std::cout << "Name: " << this->title <<
         "\nWidth: " << this->width <<
         "\nHeight: " << this->height <<
         "\nFPS: " << this->fps <<
         "\nCHECK: " << this->check;
       std::cout.put('\n');
     }
};

int main( int argc , char **argv ){
   if( argc > 1 ){
     MyGame game;
     game.readfile(argv[1]);
     game.show();
   }else{
     std::cerr << "Enter the file.\n";
     return 1;
   }
   return 0;
}
{% endhighlight %}

---

# 3. *parser* style
Usually programming languages have this style in their *source codes*. In this example, we are going to *tokenize* all the characters of an example file [JavaScript](https://terminalroot.com/tags#javascript).

Some observations for this code are:

+ If your compiler is [Clang/LLVM](https://terminalroot.com/how-to-install-binary-clang-on-any-gnu-linux-distro/), you will have after changing the line that has `content.data()`, there is a bug in `clang++`, that is, it will only work in [GCC/G++](https://terminalroot.com/tags#gcc).
+ The code only reads files with a `.js` extension.

Here is an example of some basic **JavaScript** code that you can use:

{% highlight js %}
function myfunc(){
   console.log("Hi")
}
{% endhighlight %}

C++ code that will read the `.js` file:

{% highlight cpp %}
#include <iostream>

int main( int argc , char **argv ){

   if( argc > 1 ){
     const std::string filename {argv[1]};
     if( filename.substr( filename.length() - 2, 2 ) != "js" ){
       std::cerr << "Inform only .js files\n";
       return 1;
     }

     std::FILE * file = std::fopen( argv[1], "r" );
     if( !file ){
       std::cerr << "Error reading file.\n";
       return 1;
     }

     std::fseek(file, 0, SEEK_END);
     std::size_t fsize = ftell(file);
     std::fseek(file, 0, SEEK_SET);
     std::string content(fsize, ' ');
     std::fread(content.data(), 1, fsize, file);

     for( char ch : content ){
       std::cout << "TOKEN: " << ch << '\n';
     }

   }else{
     std::cerr << "Use: " << argv[0] << " filename.js" << '\n';
   }
   return 0;
}
{% endhighlight %}

---

#4. *POSIX* style
I can say that this style is **100% my authorship**. In fact, I'm using it for a [programming language](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/) that I'm creating, for now it's still a secret! 😎

It was the way I found to *tokenize* also accented characters, unlike the other example just above. It does not receive arguments via the command line, but you can change it.

If you want to compile and test it, create a file called `file.ter` and put this example(*spoiler*) inside it:

> `vim file.ter`
{% highlight moon %}
** Comment
void: function(int: x){
   mes: "Hello World!";
}
{% endhighlight %}

This is the code I created, a detail that you may find strange is that the `main` function is in a more modern form, that is, some old versions of C++ may not recognize it, if that's the case, change it for the traditional way.
> If you don't create the `file.ter` file, nothing will be displayed!

{% highlight cpp %}
#include <iostream>
#include <locale>
#include <fstream>

auto main() -> int {
   std::locale::global(std::locale(""));
   std::wcout.imbue(std::locale());

   std::wstring line = L"";
   std::wifstream file("file.ter");

   while(std::getline(file, line)){
     for (size_t i {}; i < line.size(); ++i) {
       std::wcout << line[i] << '|';
     }
   }

   return EXIT_SUCCESS;
}
{% endhighlight %}

---

That's all for today, I hope you enjoyed it and we have an appointment in the next article!

---
