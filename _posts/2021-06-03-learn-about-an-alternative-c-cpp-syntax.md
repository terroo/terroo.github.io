---
layout: post
title: "Learn about an alternative C/C++ syntax"
date: 2021-06-03 22:26:07
image: '/assets/img/cppdaily/alternative-cpp-syntax.jpg'
description:
featured-img: ../cppdaily/alternative-cpp-syntax.jpg
tags:
- cpp
- cppdaily
---

![Learn about an alternative C/C++ syntax](/assets/img/cppdaily/alternative-cpp-syntax.jpg)

C++ (and C) source code may be written in any non-ASCII 7-bit character set that includes the [ISO 646:1983](https://en.wikipedia.org/wiki/ISO_646) invariant character set. However, several C++ operators and punctuators require characters that are outside of the ISO 646 codeset: `{, }, [, ], #, \, ^, |, ~`.

To be able to use character encodings where some or all of these symbols do not exist (such as the German [DIN 66003](http://de.wikipedia.org/wiki/DIN_66003)), C++ defines the following alternatives composed of ISO 646 compatible characters.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Alternative tokens
There are alternative spellings for several operators and other tokens that use non-ISO646 characters. In all respects of the language, each alternative token behaves exactly the same as its primary token, except for its spelling (the stringification operator can make the spelling visible). The two-letter alternative tokens are sometimes called "digraphs". 

| Primary | Alternative |
|--------|-------------|
| && | and |
| &= | and_eq |
| & | bitand |
| \| | bitor |
| ~ | compl |
| ! | not |
| != | not_eq |
| \|\| | or |
| \|= | or_eq |
| ^ | xor |
| ^= | xor_eq |
| { | <% |
| } | %> |
| [ | <: |
| ] | :> |
| # | %: |
| ## | %:%: |


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Knowing this, you can create code in this style: `vim main.cpp`

{% highlight cpp %}
%:include <iostream>
 
struct X
<%
    compl X() <%%> // destructor
    X() <%%>
    X(const X bitand) = delete; // copy constructor
 
    bool operator not_eq(const X bitand other)
    <%
       return this not_eq bitand other;
    %>
%>;
 
int main(int argc, char* argv<::>) 
<%
    auto greet = <:bitand:>(const char* name)
    <%
        std::cout << "Hello " << name
                  << "! You are running the file: " << argv<:0:> << '\n';
    %>;
 
    if (argc > 1 and argv<:1:> not_eq nullptr) <%
        greet(argv<:1:>);
    %> else <%
        greet("Anonymous");
    %>
%>
{% endhighlight %}

If you compile and run, the output will be:
{% highlight bash %}
g++ main.cpp -o alternative
./alternative Marcos
Hello Marcos! You are running the file: ./alternative
{% endhighlight %}

# Compatibility with C
The same words are defined in the C programming language in the `<iso646.h>` include file as macros. Because in C++ they are built into the language.

Example in C language: `vim main.c`

{% highlight c %}
%:include <stdio.h>

int main(int argc, char* argv<::>)
<%
  
  char * name = "Anonymous";
  
  if( argc > 1 ){
   name = argv<:1:>;
  }

  printf("Hello, %s! You are running the file: %s\n", name, argv<:0:>);
  return 0;
%>
{% endhighlight %}

There are still the **Trigraphs** too, but they were taken from **C++17**, they are:

| Primary | Trigraphs |
|----------|---------|
| { | ??< |
| } | ??> |
| [ | ??( |
| ] | ??) |
| # | ??= |
| \ | ??/ |
| ^ | ??' |
| \| | ??! |
| ~ | ??- |


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


# Troll-style curiosity
Macros are a really scary thing, if you create a header like this: `vim troll.hpp`    

{% highlight cpp %}
#include <iostream>
#define troll int
#define fart main
#define haha argc
#define snorts char
#define wtf argv
#define bye std
#define nothing cout
#define i_will_make ::
#define trash "This is the troll syntax!"
#define nonsense endl
#define screw_it return
#define crazy 0
{% endhighlight %}


And include it in your source: `vim main.cpp`:

{% highlight cpp %}
#include "troll.hpp"

troll fart (troll haha, snorts ** wtf) {
  bye i_will_make nothing << trash << bye i_will_make nonsense;
  screw_it crazy;
}
{% endhighlight %}

And compile, it will run your code:

![Troll Language](/assets/img/cppdaily/troll.png)

That's crazy, right?! You can also do it using a single letter, example: `#define e int`, `define ee main`, ... and so on!

# Useful links
+ <https://en.cppreference.com/w/cpp/language/operator_alternative>

