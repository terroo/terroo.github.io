---
layout: post
title: "5 Quick Tips for C++"
date: 2021-08-16 21:41:38
image: '/assets/img/cpp/cpp-five-tips.jpg'
description: 'Mini Quick Reference Guide!'
featured-img: ../cpp/cpp-five-tips.jpg
tags:
- cpp
- cppdaily
---

![5 Quick Tips for C++](/assets/img/cpp/cpp-five-tips.jpg)

In today's *cpp::daily* we're going to talk about commonplace issues that take time searching the internet and often find not-so-good solutions for what we want!

There are 5 tips, but we will probably have other parts!

# 01. Print the variable type
To know the type of variable just include the header `#include <typeinfo>` use `tydeid( var ).name()`, example:

{% highlight cpp %}
#include <iostream>
#include <typeinfo>

int main(){
  auto a = 12;
  auto b = true;
  auto c = 'M';
  auto d = 3.14;
  std::cout << "Integer: " << typeid(a).name() << '\n';
  std::cout << "Bool: " << typeid(b).name() << '\n';
  std::cout << "Char: " << typeid(c).name() << '\n';
  std::cout << "Double: " << typeid(d).name() << '\n';
  return 0;
}
{% endhighlight %}
Remembering that the output will be the initial of the type name, for this example it will be: `i` of `int`, `d` of `double` and so on. For some other types you will need to filter the output information.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 02. Get your screen resolution
We know how to get this via the command line, but to use 100% [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) just include the `#include <X11/Xlib.h>` lib, in this example for [X.org](https://x.org/)

{% highlight cpp %}
#include <iostream>
#include <X11/Xlib.h>

int main(){
  Display * d = XOpenDisplay(NULL);
  Screen *  s = DefaultScreenOfDisplay(d);
  std::cout << "Resolution Height: " << s->height << '\n';
  std::cout << "Resolution Width: " << s->width << '\n';
  return 0;
}
{% endhighlight %}
> Compiling: `g++ resolution.cpp -lX11`

# 03. Convert string to char
If you to search in [Google](https://google.com/) this you will see a lot of complex solution worth that [Khaby Lame](https://twitter.com/KhabyLame/header_photo) meme.

But this can be done in a very simple way:
{% highlight cpp %}
std::string str = {"Lorem Ipsum"};
char * chr = &str[0];
std::cout << "The string str now is char: " << chr << '\n';
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

# 04. Converting string to integers
Speaking of converting, to convert integer types to string just use the STL itself, this is very useful when we are developing graphics applications. Examples:
{% highlight cpp %}
#include <iostream>

int main() {
  std::string str = {"30"};
  std::cout << "To int: " << std::stoi( str ) + 6 << '\n';
  std::cout << "To float: " << std::stof( str ) + 1.4f << '\n';
  std::cout << "To double: " << std::stod( str ) + 1.89 << '\n';
  std::cout << "To long int: " << std::stol( str ) * 273 << '\n';
  std::cout << "To long long: " << std::stoll( str ) * 3500 << '\n';
  std::cout << "To long double: " << std::stold( str ) * 189.53254 << '\n';
  return 0;
}
{% endhighlight %}

# 05. Removing whitespace from a string
We know that many [programming languages](https://en.terminalroot.com.br/hello-world-in-25-programming-languages-proposal-docs-and-links/) have the functions` ltrim()`(remove left/start whitespace), `rtrim()`(remove right/end whitespace) and `trim()`(remove left/left whitespace/ start and right/end) .

Se nós usarmos aquela solução default do algorithm , provavelmente iremos remover não somente da esquerda e da direita como entre as letras/caracteres também, exemplo:

{% highlight cpp %}
#include <iostream>
#include <algorithm>

int main(){
  std::string str = " text with blank spaces ";
  str.erase(remove(str.begin(), str.end(), ' '), str.end());
  std::cout << "'" << str << "'" << '\n';
  return 0;
}
{% endhighlight %}
> Output: `'textwithblankspaces'`

So to remove `trim()` style would be:

{% highlight cpp %}
#include <iostream>
#include <algorithm>

int main() {
  std::string str = " text with blank spaces ";
  str.erase(str.begin()); //remove at the beginning(left) 
  str.erase(str.end() -  1); //remove at end(right)
  std::cout << "'" << str << "'" << '\n';
  return 0;
}
{% endhighlight %}
> Output: `'text with blank spaces'`


    
