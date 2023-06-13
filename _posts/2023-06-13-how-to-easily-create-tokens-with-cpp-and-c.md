---
layout: post
title: "How to Easily Create Tokens with C++ and C"
date: 2023-06-13 11:22:37
image: '/assets/img/cpp/strtok.jpg'
description: 'Using strtok, strtok_r and strsep.'
tags:
- cpp
- clanguage
- gnu
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The word [Token](https://en.wikipedia.org/wiki/Token) and the verb to tokenize have suffered ambiguities in recent decades, and are massively used by financial and crypto markets, but precisely by digital currencies.

However, its origin is in computer programming and in short it would be: reading and separating data, usually from files that have specific codes, such as: programming languages, for example.

Which is exactly what we are going to see here today.

---

Usually, to do this type of reading and data separation, programmers create `classes`, `structs`, `enums` to *TOKENIZE*, however, the [STD](https://en.wikipedia.org/wiki/C_standard_library) and [STL](https://en.wikipedia.org/wiki/C++_Standard_Library) already have a function that does this for us, which is `strtok`. It can be found on page 3 of the manual: `man 3 strtok`.

Let's assume that we are going to make a parser in a programming language, in this case [Python](https://terminalroot.com/tags#python), so we have this string that has this line:

{% highlight cpp %}
std::string str = "number = 3 + 6";
{% endhighlight %}

If we want to separate the data from this string using the space as a token, we would do it like this:

{% highlight cpp %}
#include <iostream>
#include <cstring> // In C use string.h

int main( int argc , char **argv ){

   // In C use char str[]
   std::string str = "number = 3 + 6";
  
   char * pstr = nullptr;

   // In C don't use std and you won't need to convert char[], just pass str
   pstr = std::strtok(&str[0], " ");

   // In C, print %s with printf("%s\n", pstr);
   std::cout << pstr << '\n';
   return 0;
}
{% endhighlight %}

After compiling, note that the output will be just the word number, that is, after the first space the code stops even if we reassign the value to the pointer:

{% highlight cpp %}
pstr = std::strtok(&str[0], " ");
std::cout << pstr << '\n';
{% endhighlight %}

However, in the manual there is this information:

{% highlight bash %}
RETURN VALUE
        The strtok() and strtok_r() functions return a pointer to the next token, or NULL if there are no more tokens.
{% endhighlight %}

That is, to obtain the next token we need to assign NULL to our pointer, so if we do this, right after the first assignment, we will obtain the next value:

{% highlight cpp %}
pstr = std::strtok(NULL, " ");
std::cout << pstr << '\n';
{% endhighlight %}

The next output will be `=`, and to get the next ones, just re-assign `NULL` again!

{% highlight cpp %}
#include <iostream>
#include <cstring>

int main( int argc , char **argv ){
   std::string str = "number = 3 + 6";

   char * pstr = nullptr;

   pstr = std::strtok(&str[0], " ");
   std::cout << pstr << '\n';

   pstr = std::strtok(NULL, " ");
   std::cout << pstr << '\n';

   pstr = std::strtok(NULL, " ");
   std::cout << pstr << '\n';

   return 0;
}
{% endhighlight %}

Soon, we come to the conclusion that it assigns the value of `NULL` to the pointer when it encounters the separator, so to get all the tokenized values we just need to create a while loop that checks while the pointer is different from `NULL`, like this:

It is logical to assign before so that the pointer is not null, but with `NULL` inside our loop to move to the next one!

{% highlight cpp %}
#include <iostream>
#include <cstring>

int main( int argc , char **argv ){
   std::string str = "number = 3 + 6";

   char * pstr = std::strtok(&str[0], " ");

   while(pstr != NULL){
     std::cout << pstr << '\n';
     pstr = std::strtok(NULL, " ");
   }

   return 0;
}
{% endhighlight %}

In this way we tokenize all our code and we can now do a syntax analysis and proceed with all the other compilation/interpretation processes.

But generally programming languages accept that programmers "paste" some characters. That is, let's assume that our file has a new line that has a new variable declaration, example:

That is, after skipping a line there is data not separated by a space.

{% highlight cpp %}
std::string str = "number = 3 + 6\nname='Mark'";
{% endhighlight %}
If we compile this code we will notice that the output will not tokenize the second variable correctly:

{% highlight cpp %}
=
3
+
6
name='Mark'
{% endhighlight %}

However, `strtok` can be used for several characters together, and now we can also separate the equal characters, just add the `=` after the space:

{% highlight cpp %}
#include <iostream>
#include <cstring>

int main( int argc , char **argv ){
   std::string str = "number = 3 + 6\nname='Mark'";

   char * pstr = std::strtok(&str[0], " =");

   while(pstr != NULL){
     std::cout << pstr << '\n';
     pstr = std::strtok(NULL, " =");
   }

   return 0;
}
{% endhighlight %}

Of course, for parsing it would be necessary to separate the tokens individually, but for many other cases strtok is very useful!

The `strtok` function can cause some headaches when the intention is to verify the content, in addition to being insecure when the case is *mult thread* , so there are alternative and more modern functions for this, such as:
+ `strtok_r`
+ and `strsep`

For more information see the manual pages:
{% highlight bash %}
man 3 strtok
man 3 strsep
{% endhighlight %}

---



