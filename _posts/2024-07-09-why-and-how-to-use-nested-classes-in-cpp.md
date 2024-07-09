---
layout: post
title: "Why and how to use Nested Classes in C++"
date: 2024-07-09 12:19:53
image: '/assets/img/cppdaily/nested-class.jpg'
description: "🪺 A class can be declared within the scope of another class."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In [C++](https://terminalroot.com/tags#cpp) a class can be declared within the scope of another class, this practice is known as: "*nested classes*".

Nested classes are considered to be within the scope of the enclosing class and are available for use within that scope. To refer to a nested class from a scope other than its immediate enclosing scope, you must use a fully qualified name.


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

## Basic example of use
See this example, where class `B` is inside class `A`. We can either create the object of class `A` or also create an object of class `B` using the scope resolution of class `A`.

```cpp
#include <iostream>

class A {
    public:
        class B {
            public:
                B(){}
                void print(){
                    std::cout << "I am B\n";
                }
        };
};

int main(){
    A::B b;
    b.print();
}
```

Members and member functions are interchangeable between these two classes, and they can be overloaded. For example, if we had a member function of the same name and type in `A`, I could use it without any problem:

```cpp
#include <iostream>

class A {
    public:
        void print(){
            std::cout << "I am A\n";
        }
        class B {
            public:
                B(){}

                void print(){
                    std::cout << "I am B\n";
                }
        };
};

int main(){
    A a;
    a.print();
    A::B b;
    b.print();
}
```

And of course, access privileges also remain, if one of these member functions were `private`, the non-access rule remains.

---

## Why use nested classes?
The main reason for using nested classes is precisely because it *hides* data, that is, do you know those public APIs where you can instantiate a class through a URL? So, they make use of nested classes, and of course, with all data protection measures too, in addition to not polluting the `namespace`.

---

For more information about nested classes visit:
+ <https://en.cppreference.com/w/cpp/language/nested_types>
+ <https://learn.microsoft.com/en-us/cpp/cpp/nested-class-declarations?view=msvc-170>
