---
layout: post
title: "C++ - Loop for ranged-based"
date: 2021-05-12 10:57:01
image: '/assets/img/cppdaily/cpp-daily-episode3.jpg'
description: 'Episode 003'
featured-img: ../cppdaily/cpp-daily-episode3.jpg
tags:
- cppdaily
- cpp
---

![C++ - Loop for ranged-based](/assets/img/cppdaily/cpp-daily-episode3.jpg)

The `for` ranged-based loop was introduced from `C++11` and has a slightly better performance. It is not always a case to be used, but whenever you can use it! For programmers of other languages loop `for` ranged-based can be compared to foreach.

In today's [cpp::daily](https://en.terminalroot.com.br/boolean-logics-with-stl/) we will show you 5 examples that will facilitate your understanding so you can use them whenever necessary!

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# 01. Foreach style
{% highlight cpp %}
for( int i : { 11, 2, 9, 17, 89, 12, 13, 52, 8, 4 } ){
  std::cout << i << '\n';
}
{% endhighlight %}

---

# 02. With vectors and automatic types
{% highlight cpp %}
std::vector<int> vec = { 11, 2, 9, 17, 89, 12, 13, 52, 8, 4 };
for( auto &elem : vec ){
  std::cout << elem << '\n';
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

---

# 03. When switched to function templates
{% highlight cpp %}
#include <iostream>
#include <vector>

template <typename T>
void print( const T& coll ){
  for( auto &elem : coll ){
    std::cout << elem << ' ';
  }
  std::cout << '\n';
}

int main(){
  std::vector<int> vec = { 11, 2, 9, 17, 89, 12, 13, 52, 8, 4 };
  print( vec );
  return 0;
}
{% endhighlight %}

---

# 04. Range based on vector declarations
{% highlight cpp %}
std::vector<int> vec = { 11, 2, 9, 17, 89, 12, 13, 52, 8, 4 };
for ( auto pos = vec.begin(); pos != vec.end(); ++pos) {
 std::cout << *pos << '\n'; 
}
{% endhighlight %}

---

# 05. Adding elements in foreach style
{% highlight cpp %}
int array[] = { 1, 2, 3 };
long sum = 0;
for ( int x : array ) {
 sum += x;
}

for ( auto elem : { sum, sum * 2, sum * 4 } ) {
  std::cout << elem << '\n';
}
{% endhighlight %}

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# To the next!


