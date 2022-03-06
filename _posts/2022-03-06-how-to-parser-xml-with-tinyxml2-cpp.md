---
layout: post
title: "How to parser XML with TinyXML2 C++"
date: 2022-03-06 13:32:50
image: '/assets/img/cppdaily/tinyxml2.png'
description: "A simple and functional tool to read your games' tilemaps."
tags:
- cpp
- cppdaily
- devgames
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already published about [Expat XML](https://terminalroot.com/how-to-parse-xml-with-expat-in-c-cpp/) which is also a alternative for parsing [XML](http://en.wikipedia.org/wiki/XML).

However, **TinyXML2** is simpler and just as efficient as Expat .

[TinyXML2](https://github.com/leethomason/tinyxml2) parses an XML document and builds from it a Document Object Model (DOM) that can be read, modified and saved.

TinyXML2 is an improvement of TinyXML 1, but TinyXML2's parser implementation is more suitable for use in [games](https://terminalroot.com/tags#games). It uses less memory, is faster, and uses far fewer memory allocations.

---

# Installing the library in your project
I forked the original project so that the repository has fewer files and takes less time for you to implement, because the library itself is only 2 files: the header(`tinyxml2.hpp`) and the source(`tinyxml2.cpp` ).
> In the original version the header is with `.h` extension I renamed it to `tinyxml2.hpp`, ie `.hpp` extension.

To implement, use [Git](https://terminalroot.com/tags#git) to clone and use the `tinyxml2.hpp` and `tinyxml2.cpp` files for your project.
{% highlight cpp %}
mkdir myproject
cd myproject
git clone https://github.com/terroo/tinyxml2/
{% endhighlight %}

In the examples below we will simulate a blog instead of a game which is easier to understand according to articles.


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 1. Parsing an XML with only one tag
First example of an XML file:
>`first.xml`

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!-- This is a comment and will be ignored by TinyXML2-->
<title>How to parser XML with TinyXML2 C++</title>
{% endhighlight %}

> File with the `main()` function with the code: `first.cpp`

{% highlight cpp %}
#include <iostream>
#include "tinyxml2/tinyxml2.hpp"

int main(){
  tinyxml2::XMLDocument doc;
  doc.LoadFile("first.xml");
  tinyxml2::XMLElement * p_root_element = doc.RootElement();
  std::cout << p_root_element->GetText() << '\n';
  return 0;
}
{% endhighlight %}

> Compile: `g++ first.cpp tinyxml2/tinyxml2.cpp` and run: `./a.out`


Possible and probable output:
{% highlight cpp %}
How to parser XML with TinyXML2 C++
{% endhighlight %}

Note that the **root element**(`*p_root_element`) is the `<title>` .

---

# 2. Parsing an XML with two hierarchical tags
The root element is now the `<article>` tag
> `second.xml`

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<article>
   <title>How to parser XML with TinyXML2 C++</title>
</article>
{% endhighlight %}

Consequently we need to create a **pointer** for the root element and inform the tag
> `second.cpp`

{% highlight cpp %}
#include <iostream>
#include "tinyxml2/tinyxml2.hpp"

int main(){
  tinyxml2::XMLDocument doc;
  doc.LoadFile("second.xml");

  tinyxml2::XMLElement * p_root_element = doc.RootElement();
  tinyxml2::XMLElement * p_title = p_root_element->FirstChildElement("title");

  std::cout << p_title->GetText() << '\n';
  return 0;
}
{% endhighlight %}


Possible and probable output:
{% highlight cpp %}
How to parser XML with TinyXML2 C++
{% endhighlight %}

If your article has multiple elements, for example:
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<article>
   <title>How to parser XML with TinyXML2 C++</title>
   <description>A simple and functional tool to read the tilemaps of your games.</description>
   <date>2022-03-04</date>
   <time>13:40</time>
   <tag>c++</tag>
</article>
{% endhighlight %}

Your code would be like this:
{% highlight cpp %}
#include <iostream>
#include "tinyxml2/tinyxml2.hpp"

int main(){
  tinyxml2::XMLDocument doc;
  doc.LoadFile("segundo.xml");

  tinyxml2::XMLElement * p_root_element = doc.RootElement();
  tinyxml2::XMLElement * p_title = p_root_element->FirstChildElement("title");
  tinyxml2::XMLElement * p_desc = p_root_element->FirstChildElement("description");
  tinyxml2::XMLElement * p_date = p_root_element->FirstChildElement("date");
  tinyxml2::XMLElement * p_time = p_root_element->FirstChildElement("time");
  tinyxml2::XMLElement * p_tag = p_root_element->FirstChildElement("tag");

  std::cout << p_title->GetText() << '\n';
  std::cout << p_desc->GetText() << '\n';
  std::cout << p_date->GetText() << '\n';
  std::cout << p_time->GetText() << '\n';
  std::cout << p_tag->GetText() << '\n';

  return 0;
}
{% endhighlight %}

If you want to make your code more *LIKE A BOSS!*, use a `vector`:

{% highlight cpp %}
#include <iostream>
#include <vector>
#include "tinyxml2/tinyxml2.hpp"

int main(){
  tinyxml2::XMLDocument doc;
  doc.LoadFile("segundo.xml");

  std::vector<const char*> elems = {"title", "description", "date", "time", "tag"};

  tinyxml2::XMLElement * p_root_element = doc.RootElement();

  for (std::size_t i{}; i < elems.size(); ++i){
    tinyxml2::XMLElement * ptr = p_root_element->FirstChildElement(elems[i]); 
    std::cout << ptr->GetText() << '\n';
  }

  return EXIT_SUCCESS;
}
{% endhighlight %}


Possible and probable output:
{% highlight cpp %}
How to parser XML with TinyXML2 C++
A simple and functional tool to read the tilemaps of your games.
2022-03-04
1:40 pm
c++
{% endhighlight %}
> If you use `std::string` in your `vector`, convert the `elems[i]` to `c_str()` like this: `elems[i].c_str()`.

From here we will use this **LIKE A BOSS!** syntax for the next examples!


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 3. Selecting multiple articles
The root element is now the `<blog>`:

> `third.xml`

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<blog>
   <article>
     <title>How to parser XML with TinyXML2 C++</title>
     <description>A simple and functional tool to read the tilemaps of your games.</description>
     <date>2022-03-04</date>
     <time>13:40</time>
     <tag>c++</tag>
   </article>
   <article>
     <title>Learn the details of Indentation Styles</title>
     <description>The indentation style is not required in most programming languages.</description>
     <date>2022-02-13</date>
     <time>08:27</time>
     <tag>code</tag>
   </article>
</blog>
{% endhighlight %}

And the code: `vim third.cpp`

{% highlight cpp %}
#include <iostream>
#include <vector>
#include "tinyxml2/tinyxml2.hpp"

int main(){
  tinyxml2::XMLDocument doc;
  doc.LoadFile("third.xml");

  std::vector<const char*> elems = {"title", "description", "date", "time", "tag"};

  tinyxml2::XMLElement * p_root_element = doc.RootElement();
  tinyxml2::XMLElement * p_article = p_root_element->FirstChildElement("article"); 

  while(p_article){
    for (std::size_t i{}; i < elems.size(); ++i){
      tinyxml2::XMLElement * ptr = p_article->FirstChildElement(elems[i]); 
      std::cout << elems[i] << ": " << ptr->GetText() << '\n';
      std::cout << ( i == elems.size() - 1 ? "\n" : "");
    }
    p_article = p_article->NextSiblingElement("article");
  }

  return EXIT_SUCCESS;
}
{% endhighlight %}

> Note that the `*p_article` pointer gets the first element from root and the `*ptr` gets it. To jump to the next article, we use: `p_article = p_article->NextSiblingElement("article");` inside and at the end of the `while` loop. The ternary condition was just to separate the articles.


Possible and probable output:
{% highlight cpp %}
title: How to parser XML with TinyXML2 C++
description: A simple and functional tool to read the tilemaps of your games.
date: 2022-03-04
time: 13:40
tag: c++

title: Know the details of Indentation Styles
description: The indentation style is not required in most programming languages.
date: 2022-02-13
team: 08:27
tag: code
{% endhighlight %}

---

# 4. Filtering the data inside a sub root element
Imagine if there was one more `<data>` element after root to make a more expressive hierarchy, for example:

> `vim fourth.xml`

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<blog>
  <date>
    <article>
      <title>How to parser XML with TinyXML2 C++</title>
      <description>A simple and functional tool to read the tilemaps of your games.</description>
      <date>2022-03-04</date>
      <time>13:40</time>
      <tag>c++</tag>
    </article>

    <article>
      <title>Learn the details of Indentation Styles</title>
      <description>The indentation style is not required in most programming languages.</description>
      <date>2022-02-13</date>
      <time>08:27</time>
      <tag>code</tag>
    </article>
  </date>

  <date>
    <article>
      <title>First post of the second date</title>
      <description>Just an example description.</description>
      <date>2019-02-11</date>
      <time>00:43</time>
      <tag>c</tag>
    </article>

    <article>
      <title>Second post of the second date</title>
      <description>Example description 2.</description>
      <date>2021-08-04</date>
      <time>10:05</time>
      <tag>more</tag>
    </article>
  </date>
</blog>
{% endhighlight %}

In the code we would have two loops `while` and `*p_article` would now get the `FirstChildElement()` of `*p_data` :

> `vim fourth.cpp`

{% highlight cpp %}
#include <iostream>
#include <vector>
#include "tinyxml2/tinyxml2.hpp"

int main(){
  tinyxml2::XMLDocument doc;
  doc.LoadFile("fourth.xml");

  std::vector<const char*> elems = {"title", "description", "date", "time", "tag"};

  tinyxml2::XMLElement * p_root_element = doc.RootElement();
  tinyxml2::XMLElement * p_data = p_root_element->FirstChildElement("data"); 

  while(p_data){
    tinyxml2::XMLElement * p_article = p_data->FirstChildElement("article"); 
    while(p_article){
      for (std::size_t i{}; i < elems.size(); ++i){
        tinyxml2::XMLElement * ptr = p_article->FirstChildElement(elems[i]); 
        std::cout << elems[i] << ": " << ptr->GetText() << '\n';
        std::cout << ( i == elems.size() - 1 ? "\n" : "");
      }
      p_article = p_article->NextSiblingElement("article");
    }
    p_data = p_data->NextSiblingElement("data");
  }
  return EXIT_SUCCESS;
}
{% endhighlight %}


Possible and probable output:
{% highlight cpp %}
title: How to parser XML with TinyXML2 C++
description: A simple and functional tool to read the tilemaps of your games.
date: 2022-03-04
time: 13:40
tag: c++

title: Know the details of Indentation Styles
description: The indentation style is not required in most programming languages.
date: 2022-02-13
team: 08:27
tag: code

title: First post of the second date
description: Just an example description.
date: 2019-02-11
time: 00:43
tag: c

title: Second post of the second date
description: Example description 2.
date: 2021-08-04
time: 10:05
tag: more

{% endhighlight %}

---

It is still possible to change contents, get tag names, line numbers and other features. For complete documentation see [this link](https://tinyxml2.docsforge.com/) .

# Useful links
+ <https://leethomason.github.io/tinyxml2/>
+ <https://github.com/leethomason/tinyxml2>
+ <https://tinyxml2.docsforge.com/>
+ <https://github.com/terroo/tinyxml2>
+ <https://www.codingpanel.com/a-complete-guide-to-tinyxml-using-cpp/>

