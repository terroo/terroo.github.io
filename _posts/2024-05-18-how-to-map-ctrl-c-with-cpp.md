---
layout: post
title: "How to map 'Ctrl + c' with C++"
date: 2024-05-18 21:14:26
image: '/assets/img/cpp/signal.jpg'
description: "Sometimes we need 'to return something to the system' when we finish a program, but it may be that the user 'killed the process' before the end of it without being expected."
icon: 'ion:terminal-sharp'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Sometimes we need to *return* something to the system when we finish a program, but it may be that the user *killed the process* before the end of it without being expected.

It happens a lot in programs that have a *loop* `while` with tasks to be executed to the expected end!

Suppose you have this code that issues a warning at the beginning of the program and after 5 seconds the program ends and issues another warning:

{% highlight cpp %}
#include <iostream>
#include <memory>
#include <chrono>
#include <thread>

void msgOut(){
   std::cout << "The 5 second count has finished." << '\n';
}

class CountTime {

   void m_start_count(){
     std::this_thread::sleep_for(std::chrono::seconds(5));
   }

   public:
     CountTime(){
       std::cout << "The 5 second countdown has started!" << '\n';
       this->m_start_count();
     }

     ~CountTime(){
       msgOut();
     }
};

int main(){
   auto ct = std::make_unique<CountTime>();
   return 0;
}

{% endhighlight %}

After compiling and running, after 5 seconds these two messages appeared in the output:
{% highlight bash %}
The 5 second countdown has started!
The 5 second count has ended.
{% endhighlight %}

Now suppose that before the end of 5 seconds, you press `Ctrl + c`, the second message will not appear and the output will be like this:
{% highlight bash %}
The 5 second countdown has started!
^C
{% endhighlight %}

In other words, if your program has a <u>function to be executed whenever the program ends</u>, then it will generate a silent bug.

To solve this, we can *map* the signal sent and execute a certain task even if the program is interrupted before its normally expected end.

---

# Using `std::signal`
First let's include the header:
{% highlight cpp %}
#include <csignal>
{% endhighlight %}

Create a *callback* function that will handle the signal, outside the *execution* of our class:
{% highlight cpp %}
void signal_handler(int signal) {
   if (signal == SIGINT) {
     msgOut();
     std::exit(EXIT_SUCCESS);
   }
}
{% endhighlight %}

And *start* it in the constructor, or before the start of a supposed `loop` that we will execute!
{% highlight cpp %}
std::signal(SIGINT, signal_handler);
{% endhighlight %}

The final code will be:
{% highlight cpp %}
#include <iostream>
#include <memory>
#include <chrono>
#include <thread>
#include <csignal> // include

void msgOut(){
   std::cout << "The 5 second count has finished." << '\n';
}

// Our function for handling the signal
void signal_handler(int signal) {
   if (signal == SIGINT) {
     msgOut();
     std::exit(EXIT_SUCCESS);
   }
}

class CountTime {

   void m_start_count(){
     std::this_thread::sleep_for(std::chrono::seconds(5));
   }

   public:
     CountTime(){
       std::signal(SIGINT, signal_handler); // Configuring signal handling
       std::cout << "The 5 second countdown has started!" << '\n';
       this->m_start_count();
     }

     ~CountTime(){
       msgOut();
     }
};

int main(){
   auto ct = std::make_unique<CountTime>();
   return 0;
}
{% endhighlight %}

After compiling and running, after pressing `Ctrl + c`, the output will now be:
{% highlight bash %}
The 5 second countdown has started!
^CThe 5 second count has finished.
{% endhighlight %}

Note that after `Ctrl + c`(`^C`) the message appeared normally!

---

# Another example without Object Orientation and with `while`
{% highlight cpp %}
#include <iostream>
#include <csignal>

void signal_handler(int signal) {
   if (signal == SIGINT) {
     std::cout << "You pressed: Ctrl + C\n";
     std::exit(EXIT_SUCCESS);
   }
}

auto main() -> int {
   std::signal(SIGINT, signal_handler);
   while (true){}
}
{% endhighlight %}
> Output after `Ctrl + c`:
{% highlight bash %}
^CDou pressed: Ctrl + C
{% endhighlight %}

---

I hope it helped, for more information visit [documentation about `std::signal`](https://en.cppreference.com/w/cpp/utility/program/signal).
