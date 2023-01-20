---
layout: post
title: "4 different ways to use sleep() in C++"
date: 2023-01-20 20:38:21
image: '/assets/img/cpp/time-cpp.png'
description: 'With examples of portability for Linux and Windows.'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

Making a code wait for a certain time is a practice used by many programmers.

[C++](https://terminalroot.com/cpp) has multiple ways. In this article we will see some forms for [Linux](https://terminalroot.com/tags#linux) and also for [Windows](https://terminalroot.com/tags#windows) .

We will show 5 examples in each of them for the code to wait **2 seconds** in some cases also using **microseconds** and **milliseconds** .

---

# 1st Using `unistd.h`
This is perhaps the simplest form of all, using the `#include <unistd.h>` header

{% highlight cpp %}
#include <unistd.h>
int main(){
   // 2 in sleep seconds
   sleep(2);
   return 0;
}
{% endhighlight %}

For more information run the command:
{% highlight bash %}
man 3 sleep
{% endhighlight %}

---

# 2º Using `std::chrono`
`std::chrono` is a flexible collection of types that track time with varying degrees of precision. For this example we will use the function: `std::this_thread::sleep_for`, example:

Entering the time in seconds:

{% highlight cpp %}
#include <chrono>
#include <thread>

int main(){
   // 2 in sleep seconds
   std::this_thread::sleep_for( std::chrono::seconds(2) );
   return 0;
}
{% endhighlight %}

Reporting the time in microseconds

{% highlight cpp %}
#include <chrono>
#include <thread>

int main(){
   // 2 000 000 MICROSECONDS of sleep
   // equates to 2 seconds
   std::this_thread::sleep_for( std::chrono::microseconds( 2000000 ) );
   return 0;
}
{% endhighlight %}

It is still possible to use: `minutes`, `milliseconds` and among others.

---

# 3º Using `Windows.h`
Only for [Windows](https://terminalroot.com/tags#windows) if you want to create portable solutions, it would be something like this:

{% highlight cpp %}
#ifdef _WIN32
#define WINDOWS_SYSTEM
#include <Windows.h>
#else
#include <unistd.h>
#endif

int main(){

#ifdef WINDOWS_SYSTEM
   Sleep( 2000000 );
#else
   usleep( 2000000 );
#endif

   return 0;
}
{% endhighlight %}

---

# 4º Using the `boost` Library
[boost.org](https://www.boost.org/) is a collection of useful libraries for [C++](https://terminalroot.com/tags#cpp) that makes your code more portable.
> Check first if you have it installed on your system, although I find it difficult not to have it, as many things use it.

For this example we use `boost::posix_time`:

{% highlight cpp %}
#include <boost/thread.hpp>

int main(){
     // Added waits 2 seconds

     // wait 1 second
     boost::this_thread::sleep( boost::posix_time::seconds(1) );
     // wait 1000 milliseconds = 1 second
     boost::this_thread::sleep( boost::posix_time::milliseconds(1000) );

     return 0;
}
{% endhighlight %}

To compile use the `-lboost_thread` and `-pthread` flags together, example:
{% highlight bash %}
g++ -lboost_thread -pthread sleep.cpp
{% endhighlight %}

---

That's all for today, small daily doses that will always keep us tuned with [C++](https://terminalroot.com/#tags#cpp) !


