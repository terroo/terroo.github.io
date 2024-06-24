---
layout: post
title: "How to use operator overloading in C++"
date: 2024-06-24 11:56:09
image: '/assets/img/cppdaily/operator-cpp.jpg'
description: "🏗️ You can define or redefine the way operators work for user-defined data types."
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In [C++](https://terminalroot.com/tags#cpp), an "`operator`" is a special function that is used to perform operations on objects.

Operators can be overloaded, which means you can set or redefine the way operators work for user-defined data types.

Let's see some common examples of operators and how they can be overloaded in [C++](https://terminalroot.com/cpp)!

---

## Arithmetic Operators
Arithmetic operators perform basic mathematical operations.
> Example of Addition Operator Overloading (`+`)

{% highlight cpp %}
#include <iostream>

class Complex {
 public:
 real float, image;

 Complex(float r = 0, float i = 0) : real(r), imag(i) {}

 // Operator overloading +
 Complex operator + (const Complex& obj) {
 return Complex(real + obj.real, imag + obj.imag);
 }
};

int main() {
 Complex c1(3.0, 4.0), c2(1.0, 2.0);
 Complex c3 = c1 + c2;
 std::cout << "Result: " << c3.real << " + " << c3.imag << "i" << std::endl;
 return 0;
}
{% endhighlight %}


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

## Relational Operators
Relational operators compare two values.
> Equality Operator Overloading Example (`==`)

{% highlight cpp %}
#include <iostream>

class Complex {
 public:
 real float, image;

 Complex(float r = 0, float i = 0) : real(r), imag(i) {}

 // Operator overloading ==
 bool operator == (const Complex& obj) {
 return (real == obj.real && imag == obj.imag);
 }
};

int main() {
 Complex c1(3.0, 4.0), c2(3.0, 4.0);
 if (c1 == c2) {
 std::cout << "Complex numbers are equal." << std::endl;
 } else {
 std::cout << "Complex numbers are different." << std::endl;
 }
 return 0;
}
{% endhighlight %}

---

## Assignment Operators
Assignment operators assign a value to a variable.
> Assignment Operator Overloading Example (`=`)

{% highlight cpp %}
#include <iostream>

class Complex {
 public:
 real float, image;

 Complex(float r = 0, float i = 0) : real(r), imag(i) {}

 // Operator overloading =
 Complex& operator = (const Complex& obj) {
 if (this != &obj) {
 real = obj.real;
 imag = obj.imag;
 }
 return *this;
 }
};

int main() {
 Complex c1(3.0, 4.0), c2;
 c2 = c1;
 std::cout << "c2: " << c2.real << " + " << c2.imag << "i" << std::endl;
 return 0;
}
{% endhighlight %}


<!-- RECTANGLE LARGE -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Insertion and Extraction Operators
The insertion (`<<`) and extraction (`>>`) operators are used for data input and output.
> Example of Insertion Operator Overloading (`<<`)

{% highlight cpp %}
#include <iostream>

class Complex {
 public:
 real float, image;

 Complex(float r = 0, float i = 0) : real(r), imag(i) {}

 // Operator overloading <<
 friend std::ostream& operator << (std::ostream& out, const Complex& obj) {
 out << obj.real << " + " << obj.imag << "i";
 return out;
 }
};

int main() {
 Complex c1(3.0, 4.0);
 std::cout << "Complex number: " << c1 << std::endl;
 return 0;
}
{% endhighlight %}

---

## Unary Operators
Unary operators operate on a single operand.
> Example of Negation Operator Overloading (`-`)

{% highlight cpp %}
#include <iostream>

class Complex {
 public:
 real float, image;

 Complex(float r = 0, float i = 0) : real(r), imag(i) {}

 // Unary operator overloading -
 Complex operator - () const {
 return Complex(-real, -imag);
 }
};

int main() {
 Complex c1(3.0, 4.0);
 Complex c2 = -c1;
 std::cout << "c2: " << c2.real << " + " << c2.imag << "i" << std::endl;
 return 0;
}
{% endhighlight %}

---

These are just some examples of operators in [C++](https://terminalroot.com/tags#cpp) and how they can be overloaded. Operator overloading allows you to define the behavior of operators for custom data types, making your code more intuitive and readable.

---

# Useful links
+ <https://en.cppreference.com/w/cpp/language/operators>
+ <https://en.wikipedia.org/wiki/Operators_in_C_and_C++>
