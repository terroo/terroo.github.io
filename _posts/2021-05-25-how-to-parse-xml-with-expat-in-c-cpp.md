---
layout: post
title: "How to parse XML with Expat in C/C++"
date: 2021-05-25 10:45:21
image: '/assets/img/cppdaily/expat.jpg'
description: 'The most used in the world, such as: CMake, Godot, Firefox, LibreOffice and others.'
featured-img: ../cppdaily/expat.jpg
tags:
- cpp
---

![How to parse XML with Expat in C/C++](/assets/img/cppdaily/expat.jpg)

In today's **cpp::daily** we will talk about one of the most used libraries in the world.

There are several libraries to parse **XML** and we will already post a list of the best ones. Each with its pros and cons, but [Expat](https://libexpat.github.io/) has a lot of differentials, starting with the fact that it is nominated by the [W3C](https://www.w3c.br/).

Of course, Expat is the most difficult to implement, but the guarantee of the result is 100%. Besides being the most used of all, projects such as: AbiWord, Android Studio, Apache OpenOffice, Audacity, aria2, [CMake](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/), D-Bus, Electron, Elinks, Firefox, Git, Godot, LibreOffice and many others use it.

Expat can be implemented by several [programming languages](https://en.terminalroot.com.br/tested-the-performance-of-10-programming-languages/), such as: [Python](https://en.terminalroot.com.br/the-30-best-python-libraries-and-packages-for-beginners/), PHP, Perl and others.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

It was written in [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/) and can be intimidating due to the many types of handlers and options you can define. But you only need to learn four functions to do 80% of what you want to do with them:

+ `XML_ParserCreate` - To create a new analyzer object.
+ `XML_SetElementHandler` - To define handlers for start and end tags.
+ `XML_SetCharacterDataHandler` - To define the handler for text.
+ `XML_Parse` - To pass a buffer full of documents to the analyzer

First of all you need to have it installed in your include. It is in all distro repositories, so just use your distro's package manager, examples:
{% highlight bash %}
emerge expat # Gentoo, Funtoo, ...
sudo apt install expat # Debian, Ubuntu, Mint, ...
sudo pacman -S expat # Arch, Manjaro, ...
sudo dnf install expat # Red Hat, Fedora, ...
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

To understand, let's show an example of a code and for more details, I suggest reading the [documentation](https://libexpat.github.io/doc/), which is very concise, because the only thing I missed in the documentation was a simple example to understand in general lines.

So, I created this basic, but already functional example. For didactic purposes the code is not object oriented so that you can use it in both [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/) and [C++](https://en.terminalroot.com.br/how-to-customize-your-vim-from-zero-to-c-cpp-ubuntu-cinnamon/).

For this we are going to use this XML example: `vim programmers.xml`

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<data>
  <programmer>
    <name>Bjarne Stroustroup</name>
    <language>C++</language>
    <birth>December 30, 1950</birth>
    <country>Denmark</country>
    <profession>Computer Scientist</profession>
    <website>https://www.stroustrup.com/</website>
  </programmer>
  <programmer>
    <name>Dennis Ritchie</name>
    <language>C</language>
    <birth>September 9, 1941</birth>
    <country>USA</country>
    <profession>Physicist, Mathematical and BCS</profession>
    <website>https://web.archive.org/</website>
  </programmer>
  <programmer>
    <name>Brian Kernighan</name>
    <language>AWK</language>
    <birth>January 1, 1942</birth>
    <country>Canada</country>
    <profession>Computer Scientist, Engineer and Professor</profession>
    <website>https://www.cs.princeton.edu/~bwk/</website>
  </programmer>
</data>
{% endhighlight %}

And to read this XML we will use this code: `vim main.cpp`

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight cpp %}
#include <iostream>
#include <expat.h>
#include <cstring> // strlen
 
void start(void *userData, const char *name, const char *args[]){
   std::cout << name << ": ";
}
 
void value(void *userData, const char *val, int len){
   int I;
   char cpy[128] = {};
   
   for(I = 0; I < len; I++){
      cpy[I] = val[I];
   }

   cpy[I] = 0;
   
   std::cout << cpy;
}
 
void end(void *userData, const char *name){}
 
int main(){
   XML_Parser parser = XML_ParserCreate(NULL);
 
   XML_SetElementHandler(parser, start, end);
   
   XML_SetCharacterDataHandler(parser, value);
   
   char val[1024] = {};
   FILE *fh = fopen("programmers.xml", "r");

   fread(&val, sizeof(char), 1024, fh);
   fclose( fh );

   XML_Parse(parser, val, strlen( val ), XML_TRUE);
   XML_ParserFree(parser);
   
   return 0;
}
{% endhighlight %}

To compile, run the command:
{% highlight bash %}
g++ main.cpp -lexpat -o parser
{% endhighlight %}

Now just run `./parser` and notice that the tags are displayed by the function `start(void * userData, const char * name, const char * args [])` more precisely by the `name` variable.

And the content of the tags by the `value(void * userData, const char * val, int len)` more precisely by the variable `cpy`. The end function has no content, as it will be used in the XML_SetElementHandler, as stated above.

Try to modify, display in tables and others as an exercise practice, ok ?!

### Useful links
+ <https://www.xml.com/pub/1999/09/expat/index.html>
+ <https://libexpat.github.io/doc/expat-internals-a-simple-parse/>
+ <https://www.xml.com/pub/a/1999/11/cplus/index.html>
+ <https://techybook.in/c-cpp-xml-parsing-using-expat/>
+ <https://stackoverflow.com/questions/27672815/parsing-xml-file-with-expat-library-in-c>

