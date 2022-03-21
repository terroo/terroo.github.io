---
layout: post
title: "How to remove HTML tags in C and C++ with RegEx"
date: 2022-03-21 07:44:00
image: '/assets/img/cppdaily/cpp-c-regex.jpg'
description: 'Regular expressions are a great tool for any programming language.'
tags:
- clanguage
- cpp
- cppdaily
- regex
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The other day I saw a simple but interesting question on the internet. Someone posted wanting to know: *"How to remove HTML tags in C?"* .

It quickly came to my mind [RegEx](https://terminalroot.com/tags#regex), but with [C++](https://terminalroot.com/tags#cpp) .

If you understand [Regular Expressions](https://terminalroot.com/tags#regex) with [C++](https://terminalroot.com/tags#cpp) it is really very easy, just:
+ Include the `<regex>` header;
+ Inform the pattern of the regular expression;
+ And finally use the `regex_replace()` function to replace with the string you want.

In summary the code is this:
{% highlight cpp %}
#include <iostream>
#include <regex>

int main(){
  std::string html = "<a href=\"https://terminalroot.com/\">This is a link</a>";
  std::regex tags("<[^>]*>");
  std::string remove{};
  std::cout << std::regex_replace(html, tags, remove) << '\n';
  return 0;
}
{% endhighlight %}
> Probable output: `This is a link`

But in [Linguagem C](https://terminalroot.com/tags#linguagemc) things are really not that easy.


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

# [Linguagem C](https://terminalroot.com/tags#linguagemc)
You can use `regex.h` in C, but it will only check for patterns, but the replacement will be up to you.

For example, checking if a given *string* has tags in it, we can use it like this:

{% highlight c %}
#include <stdio.h>
#include <regex.h>

int main(){
  regex_t regex;
  int check_regex = regcomp(&regex, "<[^>]*>", REG_EXTENDED);

  check_regex = regexec(&regex, "<p>Tag</p>", 0, NULL, 0);
  !check_regex ? printf("Has tags!\n") : printf("It has no tags.\n");

  regfree(&regex);
  return 0;
}
{% endhighlight %}
> Likely output: `Has tags!`

For more information access the POSIX page of the manual by the command:

{% highlight sh %}
man regex.h
{% endhighlight %}

---

# Removing HTML TAGS in C
After you check if a given *string* has *tags* (saves processing) the next step is to **remove the tags**.

I came up with a solution of my own (and simple 💡 ) that may be contested by *C lovers*, but it works 😎 . The code itself is:

+ Include headers:
  - `stdio.h` to use `printf`;
  - `string.h` to use `strlen`;
  - and `stdbool.h` to use the `bool` type
+ Define a `SIZE` constant to optimize performance
+ Create a `char *` return function for redefining. And that function is as follows:
  - I inserted a `for` loop to go through the *string* according to the number of characters in it;
  - It checks if the opening character of the `<` tag was identified in the *string*;
  - If yes, it makes boolean variable `tag` as `true`
  - Then concatenate the character into a temporary output of the same size: `out[SIZE];`
  - And to continue adding, we change it to `false` only after identifying the `>` closing tag character.

The final code is:

{% highlight c %}
#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#define SIZE 4096

char * remove_tags(char string[]){
  bool tag = false;
  char out[SIZE];
  for(int i = 0; i < strlen(string); i++){
    if( string[i] == '<'){
      tag = true;
    }
    if(!tag){
      strncat(out, &string[i], 1);
    }
    if(string[i] == '>'){
      tag = false;
    }
  }
  string = out;
  return string;
}

int main(){
  char string[SIZE] = "<a href=\"https://terminalroot.com/\">This is a link</a>";
  printf("%s\n", remove_tags(string));
  return 0;
}
{% endhighlight %}
> Probable output: `This is a link`

The right thing would be to allocate space on the heap, because a string that contains a document [HTML](https://terminalroot.com/tags#php) can be huge. But for didactic purposes, and to understand the logic, it's a good size.

