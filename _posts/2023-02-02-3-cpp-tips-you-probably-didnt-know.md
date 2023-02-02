---
layout: post
title: "3 C++ Tips You Probably Didn't Know"
date: 2023-02-02 13:50:20
image: '/assets/img/cpp/tips-cpp.jpg'
description: 'Auto main, args and printf!'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# 1. You can write `main` in a more modern way!
Starting with [C++11](https://terminalroot.com.br/tags#cpp), the auto declaration was implemented, which refers to the fact that a variable obtains the type automatically as long as it is immediately initialized.

And you can also use this in functions as well as in the `main()` function in conjunction with the dash `->` bracket syntax and inform the type.

Your main function can be written like this: `auto main() -> int {}`:

{% highlight cpp %}
#include <iostream>

auto main() -> int {
  auto num = 42;
  auto str = "Hello";
  const auto pi = 3.14; 
  return 0;
}
{% endhighlight %}

Now that you know, I think it's worth using this syntax for your code to look more modern! :)

---

# 2. Main argument names are your choice!
The arguments of the main function must be one of type int and the other a pointer of type char.

And whenever we use it we choose the argc names for the int type and the argv name for the array.

But that's not a rule, you can choose the names you want. If you want to go outside the box, feel free to use your own names!

{% highlight cpp %}
#include <iostream>

int main( int qtt , char** params ){
   if( qtt > 1 ){
     for (size_t i {}; i < qtt; ++i) {
      std::cout << "Argument: " << params[i] << '\n';
     }
   }else{
     std::cout << "Enter at least one parameter!\n";
   }
   return 0;
}
{% endhighlight %}

---

# 3. You don't need to include anything to use `printf()`
Whenever you want to print something on the screen, you need to use `#` and the keyword `include` right after that to include libraries such as: `<stdio.h>`, `<iostream>` to be able to use printf, correct? No, wrong.

You can use `printf` without including anything, just create a function with the same name `printf` inside an `extern "C"` that receives a `const char *` as a parameter and also the parameter three points `...` and your code will print your string smoothly!

{% highlight cpp %}
extern "C" {
   int printf(const char *format, ...);
}
  
int main(){
   printf("Hello World");
   return 0;
}
{% endhighlight %}

---

