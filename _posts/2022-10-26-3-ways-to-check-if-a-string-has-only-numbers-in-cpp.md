---
layout: post
title: "3 Ways to Check if a String Has Only Numbers in C++"
date: 2022-10-26 12:41:12
image: '/assets/img/cpp/only-number.jpg'
description: 'In fact, there are several ways, however, these are the most indicated and/or used.'
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

There are many common tasks in [C++](https://terminalroot.com/tags#cpp) that we often forget about. Therefore, it is interesting to always return to the basics to train and establish knowledge.

This type of check can be used in numerous situations and there are more than 3 ways to check whether or not a `string` has only numbers.

In this article we will see the simplest and most commonly used ways!

---

# 1. The 'Like a BOSS!'
The way I usually use and recommend is using the `std::all_of` function of the header: `<algorithm>` in conjunction with lambda.

I usually call it form: *Like a BOSS!* 😃 , for being more modern and faster, especially at compile time.

The code boils down to:

{% highlight cpp %}
#include <iostream>
#include <algorithm>

int main(){
  bool number {false};
  std::string s {"a123456"};
  if(!s.empty() && std::all_of(s.begin(), s.end(), [](char c){
    return ::isdigit(c);
  })){
   number = true;
  }
  std::cout << ( number 
      ? "Only numbers! =)" 
      : "There are not just numbers :(") << '\n'; 
  return 0;
}
{% endhighlight %}
> Note that `std::string s` has a letter, so the output will be: *There are not only numbers :(* , but if we change and recompile the result will be different.

---

# Using RegEx
Some people think that [RegEx](https://terminalroot.com/tags#regex) is not a good idea, however, it is a standardized form that works for any programming language and is also functional.

The downside of using RegEx in C++ is the compile time, which increases significantly. In summary the code would be:

{% highlight cpp %}
#include <iostream>
#include <regex>

int main(){
  const std::string s {"123456+"};
  std::regex re("^[0-9]+$");
  std::smatch match;
  std::cout << ( std::regex_search(s, match, re) ? 
      "Only numbers! =)" : 
      "There are not just numbers :(") << '\n'; 
  return 0;
}
{% endhighlight %}
> In this case the `string s` has a character that is not a number: **+** at the end.

---

# As basic as possible!
Some people prefer orthodox [C++](https://terminalroot.com/tags#cppp), that is, the oldest and closest to [C](https://terminalroot.com.br/tags#clanguage) as possible.

So this basic code would be:

{% highlight cpp %}
#include <iostream>
#include <string.h>

int main(){
  const std::string s {"123456"};
  bool number {true};
  for (std::size_t i {}; i < s.length(); ++i) {
   if( !::isdigit(s[i])){
     number = false;
   } 
  }
  std::cout << ( number 
      ? "Only numbers! =)" 
      : "There are not just numbersi :(" ) << '\n'; 
  return 0;
}
{% endhighlight %}

---

Very easy, right?


