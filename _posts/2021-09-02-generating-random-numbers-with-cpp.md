---
layout: post
title: "Generating Random Numbers with C++"
date: 2021-09-02 01:15:57
image: '/assets/img/cppdaily/cpp-daily-episode31.jpg'
description: 'There are more complex and simpler forms.'
featured-img: ../cppdaily/cpp-daily-episode31.jpg
tags:
- cpp
- cppdaily
---

![Generating Random Numbers with C++](/assets/img/cppdaily/cpp-daily-episode31.jpg)

# About std::rand, std::time, std::srand and std::experimental::randint
`std::srand` takes `std::time`(must `include <ctime>` and uses current time as seed for random generator) as parameter and seeds pseudo-random number generator used by `std::rand()` that by its instead returns a pseudo-random integral value between **0** and `RAND_MAX`, to know its value just print it, example:

{% highlight cpp %}
#include <iostream>
#include <ctime>

int main(){
  std::srand(std::time(nullptr));

  int random_number = std::rand();
  int number_then_60 = std::rand() % 60;
  
  std::cout << "The maximum number is: " << RAND_MAX << '\n';
  std::cout << "Random number up to RAND_MAX: " << random_number << '\n';
  std::cout << "Random number up to 60: " << number_then_60 << '\n';

  return 0;
}
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


Random numbers are generated at runtime, that is, each time it is executed or each time you call a function with generated value from `std::rand()` the numbers will be different unless you remove the line: `std::srand(std::time(nullptr))`; or, in the case of the function, if using static.

If you also want numbers without signs, just make a casting, example: `std::srand(static_cast<unsigned>(time(nullptr)))`, a little useless, but just to inform.

Nice to know that we can limit the size of the random number as in the example we used: `std::rand() % 60`, that is, it prints at most up to 60, but if we wanted a range between: 40 and 60, for example?

Of course we could create a condition and add or subtract according to the result value dynamically.

But that's quite a bit of work, so comes the `std::experimental::randint` task. To use it we need to include the `<experimental/random>` header, example:

{% highlight cpp %}
#include <iostream>
#include <ctime>
#include <experimental/random>

int main(){
  std::srand(std::time(nullptr));

  int value = std::experimental::randint(40,60);
  std::cout << "Random number between 40 and 60: " << value  << '\n';

  return 0;
}
{% endhighlight %}

If you think the name gets too long, try summarizing, eg: `namespace rd = std::experimental;` and implement: `rd::randint(5,10);`.

Alternatively you can use `std::srand` with ZERO time: `std::srand(time(0))`; or even without scope resolution: `srand(time(0));` and `rand() % num`;, for example:

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight cpp %}
#include <iostream>
#include <ctime>

int main(){
  srand(time(0));
  int value = rand() % 10;
  std::cout << "Random number up to 10: " << value  << '\n';
  return 0;
}
{% endhighlight %}

Simple, right?!


    
