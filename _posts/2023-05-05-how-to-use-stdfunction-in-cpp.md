---
layout: post
title: "How to Use std::function in C++"
date: 2023-05-05 10:01:08
image: '/assets/img/cpp/function.jpg'
description: 'A general purpose polymorphic function wrapper.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The `std::function` class template is a general purpose polymorphic function wrapper. Instances of `std::function` can store, copy and invoke any target: lambda expressions, binding expressions or other function objects, as well as pointers to member functions and pointers to data members.

`std::function` is a type of disposal object. This means that it erases the details of how some operations happen and provides a uniform runtime interface for them.

---

# Usage
To use `std::function` it is necessary to include the header: `<functional>`.

## Example 01
The most basic usage would be the example below:
> In this case it stores the `square` function without having to inform the parameters, in this case it takes an `int` inside the *parentheses* and returns an `int` inside the `angle brackets`.

{% highlight cpp %}
#include <iostream>
#include <functional>

int square(int x){
   return x * x;
}

int main(){
   std::function<int(int)> fn = square;
   std::cout << fn(3) << '\n';
}
{% endhighlight %}

---

## Example 02
In this case it stores two `int` and returns a `double`:

{% highlight cpp %}
#include <iostream>
#include <functional>

int sum(int x, int y){
   return x + y;
}

int main(){
   std::function<double(int, int)> fn = sum;
   std::cout << fn(6, 9) << '\n';
}
{% endhighlight %}

---

## Example 03
Similar to above, but now it's a function pointer to the address of `&sum`:

{% highlight cpp %}
#include <iostream>
#include <functional>

int sum(int x, int y){
   return x + y;
}

int main(){
   std::function<double(int, int)> fn = &sum;
   std::cout << fn(6, 9) << '\n';
}
{% endhighlight %}

---

## Example 04
In the `<functional>` header is also available `std::negate`, in this case using `std::negate` it inverts the output value:

{% highlight cpp %}
#include <iostream>
#include <functional>

int main(){
   std::function<int(int)> fn = std::negate<int>();
   std::cout << fn(42) << '\n';
}
{% endhighlight %}
> Output: `-42`.

---

## Example 05
It can also be used in conjunction with lambda, so its signature makes it possible to identify the lambda:

{% highlight cpp %}
#include <iostream>
#include <functional>

int main(){
   std::function<int(int)> fn = [&](int x){
     return x * 2;
   };
   std::cout << fn(9) << '\n';
}
{% endhighlight %}

---

That is, it is another STL feature that can be useful in several cases where performance is fundamental, but debugging is also important. For more information [see this link](https://en.cppreference.com/w/cpp/utility/functional/function).
