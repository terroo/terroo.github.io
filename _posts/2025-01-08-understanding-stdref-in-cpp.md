---
layout: post
title: "Understanding std::ref in C++"
date: 2025-01-08 08:40:23
image: '/assets/img/cppdaily/stdref.jpg'
description: "🚀 References like a boss!"
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::ref` is a powerful and flexible feature in the [C++](https://terminalroot.com/tags#cpp)([STL](https://terminalroot.com/tags#cppdaily)) standard library, introduced in **C++11**.

It is used to create objects that act as references, allowing values to be passed by reference in scenarios where the default behavior is to create copies. This feature is especially useful in contexts such as multithreading, STL algorithms, and lambdas.

---

## Why use std::ref?
In C++, when we pass arguments to functions or higher-order functions (such as [lambdas](https://terminalroot.com/10-examples-of-using-lambda-functions-in-cpp/) or `std::bind`), the values are usually copied. However, in many situations it may be desirable to pass the argument by reference to avoid unnecessary copying or modifying the original variable.

`std::ref` solves this by creating a "wrapped reference" that ensures that the variable is treated as a reference and not a copy.

---

## Syntax and operation
`std::ref` returns an object of type `std::reference_wrapper`, which acts as a container for the reference to the original object. This container complies with the requirements for function arguments and can be used transparently in many situations.

The required header to use `std::ref` is:

{% highlight cpp %}
#include <functional>
{% endhighlight %}

---

## Practical examples

### Example 1: Passing by reference in lambdas

{% highlight cpp %}
#include <iostream>
#include <functional>

void increment(int& value){
    value++; }

    int main(){
        int x = 10;

        // Using std::ref to pass x by reference
        auto lambda = [&](){
            increment(std::ref(x));
        };

        lambda();
        std::cout << "Value of x: " << x << std::endl; // Output: Value of x: 11

        return EXIT_SUCCESS;
    }
{% endhighlight %}

### Example 2: Using `std::ref` with [std::bind](https://terminalroot.com/cppdaily-episode002-stdbind-e-stdplaceholders-10-examples/)
`std::bind` is a higher-order function that allows you to create partially applied functions. By default, it copies the arguments provided. However, we can use `std::ref` to avoid this.

{% highlight cpp %}
#include <iostream>
#include <functional>

void print_and_increment(int& value){
    std::cout << "Value: " << value << '\n';
    ++value;
}

int main(){
    int x = 5;

    auto bound_function = std::bind(print_and_increment, std::ref(x));
    bound_function();

    std::cout << "New value of x: " << x << '\n'; // Output: New value of x: 6

    return EXIT_SUCCESS;
}
{% endhighlight %}

### Example 3: std::ref with STL containers
`std::ref` is useful when working with STL containers that require copies of the elements, such as `std::vector`.

{% highlight cpp %}
#include <iostream>
#include <vector>
#include <functional>

int main(){
    int x = 1, y = 2, z = 3;

    // Creating a vector of references
    std::vector<std::reference_wrapper<int>> refs = {std::ref(x), std::ref(y), std::ref(z)};

    for(auto& ref : refs){
        ref.get() += 10; // Modify the original values
    }

    std::cout << "x: " << x << ", y: " << y << ", z: " << z << '\n';
    // Output: x: 11, y: 12, z: 13

    return EXIT_SUCCESS;
}
{% endhighlight %}

---

## Important considerations
1. **Use with temporary types:**
    - `std::ref` should not be used with temporary types, since the referenced object needs to survive for the lifetime of the encapsulated reference.
2. **std::cref:**
    - To create constant references, there is `std::cref`, which works similarly to `std::ref`, but ensures that the referenced object is treated as `const`.
3. **Interoperability:**
    - The `std::reference_wrapper` can be converted back to a normal reference using the `get()` method.

{% highlight cpp %}
int a = 42;
std::reference_wrapper<int> ref = std::ref(a);
ref.get() = 50; // Modifies the original value
auto b = ref.get(); 
{% endhighlight %}

---

`std::ref` is a powerful tool for flexibly handling references in [C++](https://terminalroot.com/tags#cpp). It helps to <u>avoid unnecessary copies and is essential in scenarios that require the use of arguments by reference</u>. Understanding its use can significantly improve the efficiency and clarity of your code.


