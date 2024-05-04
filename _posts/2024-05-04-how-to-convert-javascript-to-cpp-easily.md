---
layout: post
title: "How to Convert JavaScript to C++ Easily"
date: 2024-05-04 14:49:10
image: '/assets/img/js/js-to-cpp.png'
description: 'Troubleshoot even potential JS issues with C++'
tags:
- javascript
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Many people don't know, but it is possible to convert [C++](https://terminalroot.com/tags#cpp) code to [JavaScript](https://terminalroot.com/tags#javascript) using EmScripten. We have a video that shows how to install and use EmScripten:
### [How to Transform your C/C++ Games into the Web with Emscripten (SDL2)](https://terminalroot.com/how-to-transform-your-games-into-c-cpp-for-the-web- with-emscripten-sdl2/).

However, the process requires a little more skill. For more information, access the Documentation on the Emscripten website about `bind.h`:
+ <https://emscripten.org/docs/api_reference/bind.h.html>

But what many people don't know is that it is also possible to do the opposite process and very easily, which is:

---

## Convert JavaScript to C++
To do this, simply access this address:
### <https://cutt.ly/JsToCpp>

There you can paste your JavaScript code and convert it to C++ and achieve this with just one click.

> Enter the JavaScript code:
{% highlight js %}
console.log("Terminal Root")
{% endhighlight %}

And you will get the equivalent C++ code:
{% highlight cpp %}
#include <iostream>

int main() {
     std::cout << "Terminal Root" << std::endl;
     return 0;
}
{% endhighlight %}

And, look!!! It’s not just about basic codes!!! You can convert complex codes from:
+ Functions
{% highlight js %}
function sum(x, y){
     return x + y;
}

console.log("The sum of x + y is: ", sum)
{% endhighlight %}


---

> C++ output:
{% highlight cpp %}
#include <iostream>

int sum(int x, int y) {
     return x + y;
}

int main() {
     std::cout << "The sum of x + y is: " << sum(x, y) << std::endl;
     return 0;
}
{% endhighlight %}

+ HashMaps:
{% highlight js %}
const fruits = new Map([
   ["Apples", 500],
   ["Bananas", 300],
   ["Oranges", 200]
]);

fruits.set("Melon", 200);

typeof fruits;

console.log(fruits)
{% endhighlight %}
> C++ output:
{% highlight cpp %}
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
     std::unordered_map<std::string, int> fruits = {
         {"Apples", 500},
         {"Bananas", 300},
         {"Oranges", 200}
     };

     fruits["Melon"] = 200;

     std::cout << "Type of fruits: " << typeid(fruits).name() << std::endl;

     for (const auto& pair : fruits) {
         std::cout << pair.first << ": " << pair.second << std::endl;
     }

     return 0;
}
{% endhighlight %}

+ Classes:
{% highlight js %}
class Car {
   constructor(name, year) {
     this.name = name;
     this.year = year;
   }
}

const myCar1 = new Car("BYD", 2024);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name)
console.log(myCar2.name)
{% endhighlight %}
> C++ output:
{% highlight cpp %}
#include <iostream>
#include <string>

class Car {
public:
     Car(std::string name, int year) {
         this->name = name;
         this->year = year;
     }

     std::string name;
     int year;
};

int main() {
     Car myCar1("BYD", 2024);
     Car myCar2("Audi", 2019);

     std::cout << myCar1.name << std::endl;
     std::cout << myCar2.name << std::endl;

     return 0;
}
{% endhighlight %}

And much more!

---

Even confusions that you have difficulty understanding in JS can be clarified with C++:
{% highlight js %}
console.log(1 + 1)
console.log("1" + 1)
{% endhighlight %}
> C++ output:
{% highlight cpp %}
#include <iostream>

int main() {
     std::cout << 1 + 1 << std::endl;
     std::cout << "1" + 1 << std::endl; // This line will produce an error in C++
    
     return 0;
}
{% endhighlight %}
> 😃

There are some other sites that do the same thing, including for several programming languages and also for the reverse process, but they are paid solutions!
