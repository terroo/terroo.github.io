---
layout: post
title: "How to use std::enable_shared_from_this"
date: 2024-08-08 11:58:09
image: '/assets/img/cppdaily/shared_from_this.png'
description: "⚪ Together with the callback function: shared_from_this();"
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`std::enable_shared_from_this` is a [C++](https://terminalroot.com/tags#cpp) functionality, added since **C++11**, that allows a class to create shared *instances* `shared_ptr` of itself.

This mechanism is useful when you need to create a `shared_ptr` inside a method of the class itself, especially to avoid duplication and maintain the correct reference count.


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Usage
First of all, your class needs to **inherit publicly**(`std::enable_shared_from_this<T>`) for your class type, example:

{% highlight cpp %}
class MyClass : public std::enable_shared_from_this<MyClass> {
{% endhighlight %}

The member function of this class that has return type: `shared_ptr` will no longer return `*this` but instead `shared_from_this()`, example:
+ The use of `*this` is not appropriate, because it does not increment the reference count of `shared_ptr`;
+ The use of `*this` can lead to memory management problems and possible *dangling pointers* (or *wild pointers*, which do not point to appropriate locations);
+ The use of `*this` is only appropriate for raw pointers and references.

{% highlight cpp %}
// Bad idea
std::shared_ptr<MyClass> set_info() {
  return *this;
}

// Good idea
std::shared_ptr<MyClass> set_info() {
  return shared_from_this();
}
{% endhighlight %}

---

## Examples
Let's say you have this code that adds and increments members of a class, as we saw [in this video](https://youtu.be/NfymBdyGOss):

{% highlight cpp %}
#include <iostream>

template<class T>
class Vector2 {
    public:
        T x, y;
        Vector2(T xin, T yin) : x(xin), y(yin){}

        Vector2 operator + (const Vector2& rhs){
            return Vector2(x + rhs.x, y + rhs.y); 
        } 

        Vector2 & increment(int number){ 
            x += number;
            y += number;
            return *this;
        } 

        void print(){ 
            std::cout << x << " and " << y << '\n';
        }
};

int main (){ Vector2 v1(1, 2), v2(3, 4);
    Vector2 v3 = v1 + v2;
    std::cout << "v3.x: " << v3.x << '\n'; // 4 
    std::cout << "v3.y: " << v3.y << '\n'; // 6 
    // Or just: 
    v3.print(); // 4 and 6 
    v3.increment(5);
    v3.print(); // 9 and 11 return 0;
}
{% endhighlight %}

Note that the `Vector2` class has a member function: `increment` which is a reference to itself and returns a `*this`!

Translating this code to use `std::enable_shared_from_this`, it would look like this:

{% highlight cpp %}
#include <iostream>
#include <memory>

template<class T>
class Vector2 : public std::enable_shared_from_this<Vector2<T>> {
    public:
        T x, y;
        Vector2(T xin, T yin) : x(xin), y(yin) {}

        Vector2 operator + (const Vector2& rhs) {
            return Vector2(x + rhs.x, y + rhs.y);
        }

        std::shared_ptr<Vector2> increment(int number) {
            x += number;
            y += number; 
            return this->shared_from_this();
        } 

        void print() { 
            std::cout << x << " and " << y << '\n';
        } 
};

int main() { auto v1 = std::make_shared<Vector2<int>>(1, 2);
    auto v2 = std::make_shared<Vector2<int>>(3, 4);
    Vector2<int> v3 = *v1 + *v2;
    std::cout << "v3.x: " << v3.x << '\n'; // 4 
    std::cout << "v3.y: " << v3.y << '\n'; // 6 
    // Or just: v3.print(); // 4 and 6 
    auto v3_ptr = std::make_shared<Vector2<int>>(v3);
    v3_ptr->increment(5);
    v3_ptr->print(); // 9 and 11

    return 0;
}
{% endhighlight %}
Note that we inherited publicly: `std::enable_shared_from_this` and the type of `increment` is now `std::shared_ptr` and returns: `shared_from_this()`.

From this code we have automatic reference management and we can even count them, example:

{% highlight cpp %}
std::cout << "Number of references (how many times we instantiate/create object/pointer) for v1: "
<< v1.use_count() << '\n'; // 1

std::cout << "Number of references (how many times we instantiate/create object/pointer) for v2: "
<< v2.use_count() << '\n'; // 1

std::cout << "Number of references (how many times we instantiate/create an object/pointer) for v3_ptr: "
<< v3_ptr.use_count() << '\n'; // 1
{% endhighlight %}

Much more modern and *like a boss*!

For more information, check out the links below!

---

## Useful links
+ <https://en.cppreference.com/w/cpp/memory/enable_shared_from_this>
+ <https://embeddedartistry.com/blog/2017/01/11/stdshared_ptr-and-shared_from_this/>
+ <https://en.wikipedia.org/wiki/Dangling_pointer>
+ <https://stackoverflow.com/questions/18565167/non-const-lvalue-references-cannot-be-bound-to-an-lvalue-of-different-type>
+ <https://www.google.com/search?q=%E2%96%A0+Non-const+lvalue+reference+to+type+cannot+bind+to+a+temporary+of+type+%27shared_ptr%3CT%3E%27>
