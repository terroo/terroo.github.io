---
layout: post
title: "Deleting functions in C++"
date: 2024-04-20 21:15:32
image: '/assets/img/cpp/delete-cpp.jpg'
description: 'Avoiding unnecessary overloads'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In [C++](https://terminalroot.com/tags#cpp), the `delete` keyword is used in two different situations, depending on the context:

### 1. `delete` operator can be used to free dynamically allocated memory:
> When you dynamically allocate memory using `new`, you need to free that memory when you no longer need it to avoid memory leaks. The `delete` operator is used to free dynamically allocated memory. On the other hand, for automatic use, you can (and should always use) [smart pointers](https://en.cppreference.com/book/intro/smart_pointers).

### 2. `delete` operator for functions:
When you declare a function using `delete`, you are declaring that this function is deleted and cannot be used. This is useful for classes with member functions that you want to prevent from being called or inherited.

---

# Example of how to delete functions in C++
Suppose you have this function below: `print_num(int)` which takes the primitive type `int` as a parameter:

{% highlight cpp %}
void print_num(int num){
   std::cout << num << '\n';
}
{% endhighlight %}

When calling this function, note that we can pass the types: `char`, `bool` and `float`/`double` that it will receive normally:

{% highlight cpp %}
void print_num(int num){
   std::cout << num << '\n';
}

int main(){
   print_num(9);
   print_num('a');
   print_num(true);
   print_num(3.6);
}
{% endhighlight %}

When compiling, note that it will work normally:
{% highlight bash %}
g++ main.cpp
./a.out
9
97
1
3
{% endhighlight %}

To avoid this *overhead* we use the `delete` statement to nullify some types:

{% highlight cpp %}
void print_num(char) = delete;
{% endhighlight %}
In this case, the types `char` and `float`/`double` will already receive an error when compiling:

{% highlight cpp %}
void print_num(char) = delete; ■ Call to deleted function 'print_num'
{% endhighlight %}
> Remembering that `float`/`double` will already receive a *warning*(if you are using an LSP), but it will compile normally!

We can also use the `bool` type to not overload:
{% highlight cpp %}
void print_num(bool) = delete;
{% endhighlight %}

Therefore, in order to compile our code, we will need to comment the lines referring to the code above, leaving the following at the end:

{% highlight cpp %}
#include <iostream>

void print_num(int num){
   std::cout << num << '\n';
}

void print_num(char) = delete;
void print_num(bool) = delete;

int main(){
   print_num(9);
   //print_num('a'); ■ Call to deleted function 'print_num'
   //print_num(true); ■ Call to deleted function 'print_num'
   //print_num(3.6); ■ Call to 'print_num' is ambiguous
   return 0;
}
{% endhighlight %}

### Remembering that you can still **optimize** your code using `template`, making it *like a boss!*:
{% highlight cpp %}
#include <iostream>

void print_num(int num){
   std::cout << num << '\n';
}

template<typename T>
void print_num(T) = delete;

int main(){
   print_num(9);
   //print_num('a'); ■ Call to deleted function 'print_num'
   //print_num(true); ■ Call to deleted function 'print_num'
   //print_num(3.6); ■ Call to 'print_num' is ambiguous
   return 0;
}
{% endhighlight %}

---

In summary, within this context, Deleting functions in C++:
### `delete` = "*I prohibit this*" or "*This does not exist*"

For more information [access here](https://en.cppreference.com/w/cpp/keyword/delete).
