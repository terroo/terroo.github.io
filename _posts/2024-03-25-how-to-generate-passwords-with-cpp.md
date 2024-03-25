---
layout: post
title: "How to Generate Passwords with C++"
date: 2024-03-25 19:05:55
image: '/assets/img/cpp/genpass.jpg'
description: 'Generating random passwords is one of the initial exercises for anyone who wants to advance in system security.'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Generating random passwords is one of the initial exercises for anyone who wants to advance in system security. We have already written an article explaining how you can generate passwords, for more details read the full post: [23 Ways to Generate and Save STRONG PASSWORDS; see command explanations](https://terminalroot.com/18-ways-to-generate-and-store-strong-passwords/).

In this article we will learn about the logic of generating passwords with [C++](https://terminalroot.com/tags#cpp). It will be a simple code using only alphanumeric passwords, but you can improve it by adding special characters to make the code even more complete.

Let's go step by step!

---

# 01. Create a single *header* file
In this example, we will organize our code so that if we want to add it to a project in the future, we will create a "*header-only*" (just one file: `.hpp`), that is, the class and the execution in the same file:
> `vim genpass.hpp`

{% highlight cpp %}
#pragma once
#include <iostream>
#include <memory> // Optional

class GenPass {};
{% endhighlight %}

---

#02. Adding the content
Let's now add 2 *private* members to use in our member function, they are:
+ `std::string pass` - Which will store the string that will be returned to the object;
+ and `const std::string charset` - The constant that will contain alphanumeric characters, both lowercase and UPPERCASE, in addition to numbers;

{% highlight cpp %}
#pragma once
#include <iostream>
#include <memory>

class GenPass {
   std::string pass;
   const std::string charset = "abcdefghijklmnopqrstuvwxyz"
     "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     "0123456789";
};
{% endhighlight %}

---

#03. Add the member function that will return our password
This member function will receive the length of the password as an argument, you could choose a default minimum value, but I will leave any length possible, but it is good to remember that strong passwords have at least 8 characters!

+ It reserves the number of characters informed in the argument;
+ Initializes the timer to generate the capture of `charset` characters randomly;
+ Increments the character `pass` member until reaching the maximum specified in the argument;
+ Finally returns the member.

{% highlight cpp %}
std::string gen_pass(int length){
   this->pass.reserve(length);
   srand(static_cast<unsigned int>(time(nullptr)));
   for (int i = 0; i < length; ++i) {
     this->pass += this->charset[
       rand() % this->charset.length()
     ];
   }
   return pass;
}
{% endhighlight %}

---

#04. Final `genpass.hpp` file
In the end, our complete file will look like this:

{% highlight cpp %}
#pragma once
#include <iostream>
#include <memory>

class GenPass {
   std::string pass;
   const std::string charset = "abcdefghijklmnopqrstuvwxyz"
     "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     "0123456789";
   public:
   std::string gen_pass(int length){
     this->pass.reserve(length);
     srand(static_cast<unsigned int>(time(nullptr)));
     for (int i = 0; i < length; ++i) {
       this->pass += this->charset[
         rand() % this->charset.length()
       ];
     }
     return pass;
   }
};
{% endhighlight %}

---

# Implementing our *Password Generator* with [C++](https://terminalroot.com/tags#cpp)
Let's create a new file `main.cpp` and include our `genpass.hpp`, and call the member function `gen_pass()` with the number of characters we want our password to have, in this example: Generating an alphanumeric password with 8 characters!

{% highlight cpp %}
#include "genpass.hpp"

int main(){
   auto g = std::make_unique<GenPass>();
   std::cout << g->gen_pass(8) << '\n';
   return 0;
}
{% endhighlight %}
> Compile and run: `g++ main.cpp && ./a.out`. Probable and similar output:
{% highlight bash %}
skkb8Bms
{% endhighlight %}

If you want to generate with: 16, 32, 64 and 128 characters, respectively:
{% highlight cpp %}
std::cout << g->gen_pass(16) << '\n';
std::cout << g->gen_pass(32) << '\n';
std::cout << g->gen_pass(64) << '\n';
std::cout << g->gen_pass(128) << '\n';
{% endhighlight %}

---

Simple and easy, right?! Now you can use this *unique header* and add it to your projects!

