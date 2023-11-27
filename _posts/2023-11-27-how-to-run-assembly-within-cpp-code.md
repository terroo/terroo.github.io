---
layout: post
title: "How to Run Assembly within C++ code"
date: 2023-11-27 11:28:23
image: '/assets/img/assembly/asm-cpp.jpg'
description: 'A useful resource for extreme situations.'
tags:
- cpp
- assembly
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

C++ is a comprehensive and powerful programming language, but there are few highly specialized situations that it cannot solve.

For these situations, [C++](https://terminalroot.com/tags#cpp) offers an option that allows you to discard [Assembly](https://terminalroot.com/tags#assembly) code at any time. time.

This option is to use the `__asm__()` instruction or just `asm()`. In other words, the Assembly language can be incorporated directly into the C++ program.

---

# Basic example of use
In this example, it can be seen that through the Assembly code:
+ Moves immediate value `3` to register `eax`
+ Move immediate value 6 to register `ebx`
+ The added value is stored in `sum` for output

> `asm.cpp`
{% highlight cpp %}
#include <iostream>

int main() {
   int sum;
   __asm__ ( "movl $3, %%eax;"
       "movl $6, %%ebx;"
       "addl %%ebx, %%eax ":"=a"(sum));
   std::cout << sum << '\n';
   return 0;
}
{% endhighlight %}

After compiling and running:
{% highlight bash %}
g++ asm.cpp
./a.out
{% endhighlight %}
> The output will be the sum: `9`.

If you want to avoid using *underlines* it will work the same way:
{% highlight cpp %}
#include <iostream>

int main() {
   int sum;
   asm("movl $3, %%eax;"
       "movl $6, %%ebx;"
       "addl %%ebx, %%eax ":"=a"(sum));
   std::cout << sum << '\n';
   return 0;
}
{% endhighlight %}

The fact of using `__asm__` like this is that the programmer has greater control of the native resources of [C++](https://terminalroot.com/cpp).

For more information visit: <https://en.cppreference.com/w/cpp/language/asm>.

