---
layout: post
title: "Understand how std::stack works in C++"
date: 2022-08-01 11:01:53
image: '/assets/img/cppdaily/stack.jpg'
description: 'To spice up your code with proper tools!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::stack` is a container library class (of which there are several classes) implemented as `template` .

In English stack means: stack, and that's exactly what it does, it stores the data in a stacked way.

That is, a stack has the data structure **LIFO**(**L**ast-**I**n, **F**irst-**O**ut).

A *stack* is different from a *list*, the stack has the idea as a "*stack of dishes*", if you STACK the dishes and try to get the first one (which is at the bottom of the pile, down there!) , all above fall! In no list, you can take from any position depending on the subset of the type of list you create in structuring the data.

So, on the stack, you can only remove the last element you added.

Some member functions of `std::stack` are similar to or implemented from other classes in the Containers library, such as:
+ `push()`
+ `pop()`
+ `empty()`

And among others.

Let's see how to use them!

---

## Usage and implementation
To use `std::stack` you first need to add the `<stack>` library:
{% highlight cpp %}
#include <stack>
{% endhighlight %}

Declare the stack:
{% highlight cpp %}
std::stack<int> stack;
{% endhighlight %}

Add items/elements to stack:
{% highlight cpp %}
stack.push( 2 );
stack.push( 4 );
stack.push( 12 );
{% endhighlight %}

Know who is on top of the stack, last to be added:
{% highlight cpp %}
std::cout << stack.top() << '\n';
{% endhighlight %}

To delete the last element (the top one)
{% highlight bash %}
stack.pop();
std::cout << stack.top() << '\n';
{% endhighlight %}

Check if it is empty, remove and print:
{% highlight bash %}
while(true){
  if( !stack.empty() ){
    std::cout << stack.top() << '\n';
    stack.pop();
  }else{
    std::cout << "The stack is empty!" << '\n';
    break;
  }
}
{% endhighlight %}

The complete code:
{% highlight cpp %}
#include <iostream>
#include <stack>

int main(){
  std::stack<int> stack;

  stack.push( 2 );
  stack.push( 4 );
  stack.push( 12 );

  stack.pop();
  std::cout << stack.top() << '\n';

  stack.push( 11 );
  stack.push( 13 );
  stack.push( 17 );
  stack.push( 8 );

  while(true){
    if( !pile.empty() ){
      std::cout << stack.top() << '\n';
      stack.pop();
    }else{
      std::cout << "The stack is empty!" << '\n';
      break;
    }
  }

  return 0;
}
{% endhighlight %}

For more tips on `std::stack` go to [here](https://en.cppreference.com/w/cpp/container/stack) .



