---
layout: post
title: "Meet Orthodox C++"
date: 2023-07-04 12:11:04
image: '/assets/img/cpp/ortodoxo.jpg'
description: 'An anti-modern C++!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Who has never had the (dis)pleasure of reading in some *social media* some "elderly" say: **In my time...**.
> But in his day, elderly weren't on social media! 😃

So it is! **Orthodox C++** is a way of writing that says "*older was better*"! 😮 , or almost. It's about *ignoring* all the new [C++](https://terminalroot.com/tags#cpp) features and writing it like this: NEANDERTAL!

C++ as we all know is a *superset* of the [Language C](https://terminalroot.com/tags#clanguage), but that was just in the old days! Because, nowadays, not everything that is from C works in C++.

But in most cases (99.5% of the time) if you write code in C and use the C++ compiler, it will work fine!

In short, this is orthodox C++:
{% highlight cpp %}
#include <stdio.h>
#define TAM 4

int main(){
   char * fruits[TAM] = {"Orange", "Melon", "Apple", "Banana"};
   for (int i = 0; i < SIZE; ++i)
   {
     printf("%s\n", fruits[i]);
   }
   return 0;
}
{% endhighlight %}

The code equivalent to the one above, but with Modern C++, would be:
{% highlight cpp %}
#include <iostream>
#include <array>

auto main() -> int {
   std::array<std::string, 4> fruits {"Orange", "Melon", "Apple", "Banana"};
   for(auto &f : fruits){
     std::cout << f << '\n';
   }
   return EXIT_SUCCESS;
}
{% endhighlight %}

The problem is that the first code, the orthodox one, doesn't compile anymore without *Warnings*, even if you are using [1998 C++](https://www.wikidata.org/wiki/Q764453). The output might be this:
{% highlight bash %}
g++ -std=c++98 main.cpp
main.c: In function 'int main()':
main.c:5:25: warning: deprecated conversion from string constant to 'char*' [-Wwrite-strings]
     5 | char * fruits[TAM] = {"Orange", "Melon", "Apple", "Banana"};
       | ^~~~~~~~~
main.c:5:36: warning: deprecated conversion from string constant to 'char*' [-Wwrite-strings]
     5 | char * fruits[TAM] = {"Orange", "Melon", "Apple", "Banana"};
       | ^~~~~~~
main.c:5:45: warning: deprecated conversion from string constant to 'char*' [-Wwrite-strings]
     5 | char * fruits[TAM] = {"Orange", "Melon", "Apple", "Banana"};
       | ^~~~~~
main.c:5:53: warning: deprecated conversion from string constant to 'char*' [-Wwrite-strings]
     5 | char * fruits[TAM] = {"Orange", "Melon", "Apple", "Banana"};

{% endhighlight %}
> Even if you use the `.c` extension!

But even so, there is the return of those who didn't go!

---

# What is Orthodox C++?
In other words, orthodox C++, in short, is writing C++ like old C. Or by the very definition of his followers it would be:

> Orthodox C++ (sometimes referred to as **C+**, one + only) is a minimal subset of C++ that improves on C but avoids all the unnecessary stuff of so-called [Modern C++](https://terminalroot.com/how-to-parse-csv-with-modern-cpp/). It's the exact opposite of what modern C++ is supposed to be.

---

# Why be against Modern C++?
According to his own followers:

> In the late 1990's we were also modern C++ hipsters and used the latest features. We told everyone that they should also use these resources. Over time, we've learned that it's unnecessary to use some language features just because they're there, or features we use have proven to be bad (like RTTI, exceptions, and streams), or backfired by unnecessary code complexity. If you think this is nonsense, wait a few more years and you'll hate Modern C++ too ("Why I Don't Spend More Time With Modern C++" archived LinkedIn article).
>
> *Why use orthodox C++?*
>
> Code base written with the limitations of orthodox C++ will be easier to understand, simpler and will be built with older compilers. Projects written in the orthodox C++ subset will be more acceptable to other C++ projects because the subset used by orthodox C++ is unlikely to violate the adopter's C++ subset preferences.

---

# What should you wear?
You may have many criticisms of "new programming languages" (most are front-end for C/C++), but failing to use the new features of languages already consolidated on the market is, to say the least: madness!

Using such concepts as "philosophy" or fun is a valid point yes, but using and sharing the obsolete is a kind of insanity!

I recommend you make your code as modern as possible. Not even today's C is the same as before, **C Modern** has several updates and many of them were inherited from C++.

For more information see more details [here](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b).

