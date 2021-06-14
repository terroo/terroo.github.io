---
layout: post
title: "Daily C++ - Number of Elements in an Interval"
date: 2021-06-14 18:29:07
image: '/assets/img/cppdaily/cpp-daily-episode6.jpg'
description: 'cpp::daily Episode 006.'
featured-img: ../cppdaily/cpp-daily-episode6.jpg
tags:
- cpp
- cppdaily
---

![Daily C++ - Number of Elements in an Interval](/assets/img/cppdaily/cpp-daily-episode6.jpg)

`std::count_if` returns the number of elements in the range [first, last) meeting specific criteria, that is, number of elements that satisfy the condition. Exceptions

### Syntax
![count_if](/assets/img/cppdaily/count_if.jpg)

### Example
Know how many elements in vector vec have zero remainder when divided by 2!

{% highlight cpp %}
#include <iostream>
#include <vector>
#include <algorithm>

bool resto_zero( int &i ){
  return ( i % 2 == 0 );
}

int main( int argc, char ** argv ){

  std::vector<int> vec {  11, 20, 9, 36, 88, 54, 55 };
  int pares = std::count_if( vec.begin(), vec.end(), resto_zero );
  std::cout << pares << '\n'; // 4

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

### Other example
How many words from our group are there in the sentence: "*That day everything was very quiet.*"

{% highlight cpp %}
#include <iostream>
#include <vector>
#include <algorithm>

bool grep( const std::string &word ){
  const std::string phrase {"That day everything was very quiet."};
  int pos = phrase.find( word );
  return ( pos >= 0 );
}

int main( int argc, char ** argv ){

  std::vector<std::string> word {"very", "nothing", "cool", "day", "everything", "thanks"};
  int send = std::count_if( word.begin(), word.end(), grep );
  std::cout << send << '\n'; // 3 → very, everything and day

  return 0;
}
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Simple, right?!


    
