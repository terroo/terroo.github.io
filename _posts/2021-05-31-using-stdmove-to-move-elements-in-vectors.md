---
layout: post
title: "Using std::move to move elements in vectors"
date: 2021-05-31 15:06:46
image: '/assets/img/cppdaily/cpp-daily-episode30.jpg'
description: 'Concept widely used in game development.'
featured-img: ../cppdaily/cpp-daily-episode30.jpg
tags:
- cpp
- cppdaily
---

![Using std::move to move elements in vectors](/assets/img/cppdaily/cpp-daily-episode30.jpg)

# std::move
`std::move` is used to indicate that an object can be "moved from..to", that is, allowing the efficient transfer of resources from t to another object.

In particular, `std::move` produces an `xvalue` expression that identifies its argument `t`. It is exactly equivalent to a `static_cast` for a reference type `rvalue`.

Its syntax is: `std::move(first, last, result)`.

# Usage examples
Let's suppose we are creating a **Tic Tac Toe** game and we have a `namespace` with the following `struct` that stores the coordinates of our game:

{% highlight cpp %}
namespace terroo {
  struct Coordinates {
    int x, y;
  };
}
{% endhighlight %}

And we have the vectors (`v1`, `v2` and `v3`) with the following coordinates:

{% highlight cpp %}
std::vector<terroo::Coordinates> v1 = { {0,0}, {0,1}, {0,2} }, v2, v3;

for (size_t i = 0; i < v1.size(); ++i) {
  v2.push_back({1, v1[i].y}); 
  v3.push_back({2, v1[i].y}); 
}

for (size_t i = 0; i < v1.size(); ++i) {
  std::cout << v1[i].x << ',' << v1[i].y << ' '; 
}
{% endhighlight %}

Output will be:
{% highlight bash %}
0,0 0,1 0,2 
1,0 1,1 1,2 
2,0 2,1 2,2
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

Now let's assume that a player won by marking the diagonal from left to right.

Using `std::move` for us to move **0.0** to **1.1** and to **2.2** we would use this code:

{% highlight cpp %}
std::move(v1.begin(), v1.begin() + 1, v2.begin() + 1); // move 0,0 to 1,1
std::move(v1.begin(), v1.begin() + 1, v3.begin() + 2); // move 0,0 to 2,2
{% endhighlight %}

Running our code and displaying the output after the player wins would be:
{% highlight bash %}
0,0 0,1 0,2 
1,0 1,1 1,2 
2,0 2,1 2,2 
-----------
0,0 0,1 0,2 
1,0 0,0 1,2 
2,0 2,1 0,0 
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

Complete code created for this example:

{% highlight cpp %}
#include <iostream>
#include <vector>

namespace terroo {
  struct Coordinates {
    int x, y;
  };
}

int main(){
  
  std::vector<terroo::Coordinates> v1 = { {0,0}, {0,1}, {0,2} }, v2, v3;

  for (size_t i = 0; i < v1.size(); ++i) {
   v2.push_back({1, v1[i].y}); 
   v3.push_back({2, v1[i].y}); 
  }

  for (size_t i = 0; i < v1.size(); ++i) {
   std::cout << v1[i].x << ',' << v1[i].y << ' '; 
  }
  std::cout << '\n';

  for (size_t i = 0; i < v2.size(); ++i) {
   std::cout << v2[i].x << ',' << v2[i].y << ' '; 
  }
  std::cout << '\n';

  for (size_t i = 0; i < v3.size(); ++i) {
   std::cout << v3[i].x << ',' << v3[i].y << ' '; 
  }
  std::cout << '\n';

  std::cout << "------" << '\n';

  std::move(v1.begin(), v1.begin() + 1, v2.begin() + 1);
  std::move(v1.begin(), v1.begin() + 1, v3.begin() + 2);

  for (size_t i = 0; i < v1.size(); ++i) {
   std::cout << v1[i].x << ',' << v1[i].y << ' '; 
  }
  std::cout << '\n';

  for (size_t i = 0; i < v2.size(); ++i) {
   std::cout << v2[i].x << ',' << v2[i].y << ' '; 
  }
  std::cout << '\n';

  for (size_t i = 0; i < v3.size(); ++i) {
   std::cout << v3[i].x << ',' << v3[i].y << ' '; 
  }
  std::cout << '\n';

  return 0;
}
{% endhighlight %}

Very simple, right ?!

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


    
