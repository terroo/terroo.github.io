---
layout: post
title: "Difference between Virtual Functions and Function Overloading in C++"
date: 2024-07-11 12:06:57
image: '/assets/img/cppdaily/virtual-overload.jpg'
description: "🗞️ The concept may hinder the understanding of some."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Virtual functions in [C++](https://terminalroot.com.br/cpp) are <u>member functions of a base class</u> that can be replaced (`overridde`n) by member functions of a derived class .

They are declared using the `virtual` keyword in the base class.

The main purpose of virtual functions is to allow runtime polymorphism, that is, to allow the call to a member function to be resolved at runtime based on the type of the object for which the function is being called, rather than the type of the reference or pointer being used to access the object.

Here are some examples to illustrate the concept of virtual functions:

**Note**: Virtual member functions **DOES NOT WORK WITH TEMPLATE**, and of course, they only work in Object Oriented Programming!


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

## Basic Example of Virtual Functions
See in this example that the `Derived` class inherits the `public` members (and if there were, the `protected` ones too) from the `Base` class.

Note that both have the **member function**: `void show()`, and even using [ponteiros](https://terminalroot.com.br/2022/01/entenda-ponteiros-em-c-cpp -e-como-a-memoria-ram-funciona.html)(regardless of whether or not [smart pointers](https://terminalroot.com.br/2022/08/entenda-ponteiros-inteligentes-em-cpp- smart-pointers.html), it's the same thing) to create the object, when calling `show()`, the content of `Base` is what is displayed:

{% highlight cpp %}
#include <iostream>

class Base {
    public:
        void show() {
            std::cout << "I am the show() of the Base class.\n";
        }
        // Destructor to allow proper cleanup of derived objects
        ~Base() = default;
};

Derived class: public Base {
    public:
        void show() {
            std::cout << "NOW YES! I am the show() of the Derived class.\n";
        }
};

int main() {
    Base * base;
    Derivative derivative;
    base = &derivative;

    // The show() function of the Derived class is called, although the pointer is of type Base*
    base->show();

    return 0;
}
{% endhighlight %}
Output after compiling and running `g++ nao-virtual.cpp && ./a.out`:
{% highlight bash %}
I am the show() of the Base class.
{% endhighlight %}

To be able to display the `show()` of the `Derivative`, we simply had to declare the `show()` of the `Base` as `virtual`, but to know that we are overwriting a virtual member function, the correct thing is to also declare the ` show()` of the `Derivative` with the `overridde` keyword, that is, our code would look like this:

**NOTE**: Only in cases where the object is created with pointers, as stated above!

{% highlight cpp %}
#include <iostream>

class Base {
    public:
        virtual void show() {
            std::cout << "I am the show() of the Base class.\n";
        }
        // Destructor to allow proper cleanup of derived objects
        ~Base() = default;
};

Derived class: public Base {
    public:
        void show() override {
            std::cout << "NOW YES! I am the show() of the Derived class.\n";
        }
};

int main() {
    Base * base;
    Derivative derivative;
    base = &derivative;

    // The show() function of the Derived class is called even though the pointer is of type Base*
    base->show();

    return 0;
}
{% endhighlight %}
Now yes, the output after compiling and running `g++ nao-virtual.cpp && ./a.out` will be the `show()` of the `Derivative`:
{% highlight bash %}
NOW YES! I am the show() of the Derived class.
{% endhighlight %}

This concept is also widely used as **Virtual Destructors**, that is, so your software does not keep calling multiple Destructors recursively. So notice that I declared: `~Base() = default`, but if we had declared it as: `virtual ~Base();`, the `Derivative` destructor, if there was one, would prevail!
> This is also important to avoid *memory leaks* and other problems related to *proper resource cleaning*, especially in cases of multiple class hierarchies, e.g.: `class Shape(); → class RectangleShape(); → class SquareShape();`.

Virtual functions are a fundamental mechanism for polymorphism in C++ and allow you to write more flexible and extensible code.

---

## Function overloading
Another concept in [C++](https://terminalroot.com.br/tags#cpp) is **Function Overloading**, which in short is: "Use functions with the same name, but with different parameter types, but just difference in return type, no!".

Example, note that below we have the `show()` functions with the same name but different types of parameters:
{% highlight cpp %}
#include <iostream>

void show(){
    std::cout << "parameterless void\n";
}

void show(const std::string& str){
    std::cout << "str is: " << str << '\n';
}

std::string show(const std::string& str, int c){
    return str;
}

int main() {
    void();
    void("Hi.");
    std::cout << show("Hello!", 1) << '\n';
}
{% endhighlight %}
This compiles and runs!

However, if we had this function:
{% highlight cpp %}
void show(const std::string& str, int c){ // ■ Functions that differ only in their return type cannot be overloaded
    std::cout << "message" << '\n';
}
{% endhighlight %}

It will not compile, because despite having a different **return type**: `void`, it has the same arguments as a function that already exists, which is: `std::string show(const std::string& str, int c);`.

This also works for member functions in Object Oriented Programming!

---

Note that **Virtual Functions** is TOTALLY different from **Function Overloading**. Perhaps the similarity that some may see is the fact of using the same function name.
