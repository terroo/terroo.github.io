---
layout: post
title: "Definition of extern in C++"
date: 2021-08-11 15:16:46
image: '/assets/img/cpp/extern.jpg'
description: 'External links.'
featured-img: ../cpp/extern.jpg
tags:
- cpp
- cppdaily
---

![Definition of extern in C++](/assets/img/cpp/extern.jpg)

The `extern` specifier is used in variable and function declarations (except class members or function parameters). It specifies external binding and does not technically affect storage duration, but it cannot be used in a definition of an automatic storage duration object, so all `extern` objects have static or threaded durations.

This is useful when you have global variables and declare their existence in a header so that every source file that includes the header knows about it, but you only need to “set” it once in one of your source files .

Example, Suppose you have 3 files and you will link two files:

`vim global.hpp`

{% highlight cpp %}
#ifndef GLOBAL_H
#define GLOBAL_H

// any file that includes this header will be able to use "var_global"
extern float var_global;

void the_func();

#endif
{% endhighlight %}

`vim global.cpp`

{% highlight cpp %}
#include <iostream>
#include "global.hpp"

void the_func(){
    // print global variable:
    std::cout << var_global << '\n';
}
{% endhighlight %}


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

`vim main.cpp`

{% highlight cpp %}
#include "global.hpp"

// it will be defined here
float var_global;

int main(){
    var_global = 9.36f;
    the_func();
}
{% endhighlight %}

After compiling the output will be: **9.36**, but available for all files.

Another way to use the extern keyword is to compile [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) projects into [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/), for example.

Suppose you are writing a plugin/extension for a program written C, but you are using C++, so you can change the context of your code to C .

Example:

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight cpp %}
#include <iostream>

extern "C" {
  namespace terroo {
    class DarthVader{
      public:
        DarthVader(){
          std::cout << "I am your father." << '\n';
        }
        ~DarthVader(){
          std::cout << "Nooooooooo ..." << '\n';
        }
    };
  }
}

int main( int argc , char ** argv ){
  terroo::DarthVader t;
  return 0;
}
{% endhighlight %}

If a program is written in [C](https://en.terminalroot.com.br/examples-of-functions-fread-fwrite-remove-and-others-in-c/) it will work with this code, even using classes, constructors, destructors, namespace,…

That's all for today, small daily doses that will always keep us in tune with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/)!

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


    
