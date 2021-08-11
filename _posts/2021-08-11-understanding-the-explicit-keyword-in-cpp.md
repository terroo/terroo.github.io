---
layout: post
title: "Understanding the explicit keyword in C++"
date: 2021-08-11 17:02:04
image: '/assets/img/cpp/explicit-cpp.png'
description: 'Loads the correct constructor type.'
featured-img: ../cpp/explicit-cpp.png
tags:
- cpp
- cppdaily
---

![Understanding the explicit keyword in C++](/assets/img/cpp/explicit-cpp.png)

Specifies that a constructor or cast function (since C++ 11) is explicit, that is, it cannot be used for implicit casts and copy initialization.

Let's take an example, you have the following code:

> The `do_something` function takes a parameter of type `TerminalRoot`, but the compiler automatically converts it to `int`:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight cpp %}
#include <iostream>

class TerminalRoot {
  public:
    TerminalRoot( int num ) : m_var( num ){}

    int get_var(){
      return m_var;
    }

  private:
    int m_var;
};

void do_something( TerminalRoot terroo ){
  int x = terroo.get_var();
  std::cout << "Type is: " << typeid( x ).name() << '\n';
}

int main(){
  do_something( 963 );
  return 0;
}
{% endhighlight %}

And you don't want that, you want the correct type to be passed, because you want to know if there is a *bug* in that type. So you use the `explicit` keyword, but when compiling there is an error compiling:

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

class TerminalRoot {
  public:
    explicit TerminalRoot( int num ) : m_var( num ){}

    int get_var(){
      return m_var;
    }

  private:
    int m_var;
};

void do_something( TerminalRoot terroo ){
  int x = terroo.get_var();
  std::cout << "Type is: " << typeid( x ).name() << '\n';
}

int main(){
  do_something( 963 );
  return 0;
}
{% endhighlight %}

> And then you get the error:
{% highlight bash %}
error: could not convert ‘963’ from ‘int’ to ‘TerminalRoot’
{% endhighlight %}

Cannot convert `int` to `TerminalRoot`. So you need to pass the correct type now: `do_something( TerminalRoot( 963 ) );`

{% highlight cpp %}
#include <iostream>

class TerminalRoot {
  public:
    explicit TerminalRoot( int num ) : m_var( num ){}

    int get_var(){
      return m_var;
    }

  private:
    int m_var;
};

void do_something( TerminalRoot terroo ){
  int x = terroo.get_var();
  std::cout << "Type is: " << typeid( x ).name() << '\n';
}

int main(){
  do_something( TerminalRoot( 963 ) );
  return 0;
}
{% endhighlight %}

The output is `i`( from `int` ), but you have passed the correct type and verified that it is working . For more information see the link: <https://en.cppreference.com/w/cpp/language/explicit> .

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


    
