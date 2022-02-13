---
layout: post
title: "Know the details of Indentation Styles"
date: 2022-02-13 12:38:04
image: '/assets/img/programming/indentation.jpg'
description: 'The indentation style is not mandatory in most programming languages, but it says a lot about the programmer origin.'
tags:
- programming
- clanguage
- development
- haskell
- gnu
- lisp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In computer programming, an Indentation (indentation style) is a convention that governs the indentation of code blocks to convey program structure.

Indentation is not a requirement of most programming languages, where it is used as a secondary notation. Instead, indentation helps to better convey the structure of a program to human readers.

It is used to better visualize the link between control flow constructs, such as conditions or loops, and the code contained inside and outside them.

However, some languages ​​(like [Python](https://terminalroot.com/tags#python) and [occam](https://en.wikipedia.org/wiki/Occam_(programming_language)) ) use indentation to determine structure instead of using curly braces or keywords; this is called the off-side rule, in these languages, indentation is significant (and mandatory) for the compiler or interpreter; it's more than just a matter of style.

---

# Existing patterns
Below we will see standards established by some organizations that develop software:

---

### Style [BSD](https://terminalroot.com/tags#bsd)
This style is also known as **Allman** (Eric Allman, creator of sendmail)
> Notation uses the beginning of the braces after the main instruction and aligned to the beginning of it.
{% highlight c %}
while (x == y)
{
    something();
    somethingelse();
}
{% endhighlight %}


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

### Style [K&R](https://terminalroot.com/tags#linguagemc)
K&R are the initials of the surnames of **K**erningan and **R**itchie, the creators of the languages ​​[AWK](https://terminalroot.com/tags#awk) and [C](https: //terminalroot.com/tags#linguagemc), respectively. Both wrote the best-selling programming book in history: [The C Programming Language](https://en.wikipedia.org/wiki/The_C_Programming_Language) .
> Notation uses the beginning of braces on the same line after the main statement.
{% highlight c %}
while (x == y) {
    something();
    somethingelse();
}
{% endhighlight %}

This pattern can be found, for example, in Kernel [Linux](https://terminalroot.com/tags#linux).

---

### Style [GNU](https://terminalroot.com/tags#gnu)
**GNU** is an organization that develops [Open Source](https://terminalroot.com/tags#opensource) software with licenses that allow you to change the code and redistribute([Free Software](https://terminalroot.com/tags#freesoftware)) . It was started by programmer [Richard Stallman](https://stallman.org/).
> Notation uses the beginning of the braces after the main instruction and misaligned at the beginning of it, with a difference of one *space*.
{% highlight c %}
while (x == y)
  {
    something();
    somethingelse();
  }
{% endhighlight %}

---

### Style [Whitesmiths](https://en.wikipedia.org/wiki/Whitesmiths)
Whitesmiths was the first commercial compiler for the C language. This notation was found in the first version of [Windows](https://terminalroot.com/tags#windows) .
> Similar to GNU, but with 2 *spaces* instead of one .
{% highlight c %}
while (x == y)
    {
    something();
    somethingelse();
    }
{% endhighlight %}

---

### Style [Haskell](https://terminalroot.com/tags#haskell)
**Haskell** is a statically typed and functional programming language.
> The notation is a mixture of the GNU style with the semicolon also aligned with the braces.
{% highlight c %}
while (x == y)
  { something()
  ; somethingelse()
  ;
  }
{% endhighlight %}

---

### Style [Pico](http://pico.vub.ac.be/)
Pico is a programming language created to introduce the fundamentals of programming to non-computer science students.
> The opening brace is not on the same line, but the closing brace is after the last statement of the block and on the same line.
{% highlight c %}
while (x == y)
{ something();
    somethingelse(); }
{% endhighlight %}

---

### Ratliff Style
**Ratliff** was the original programmer(**C. Wayne Ratliff**) behind the popular fourth generation programming languages [dBase](https://en.wikipedia.org/wiki/DBase)-II and -III. This notation was found in the materials of [Digital Research](https://en.wikipedia.org/wiki/Digital_Research) Inc.
> Reminiscent of K&R style, but with double spaces at the beginning of each line in the block.
{% highlight c %}
while (x == y) {
    something();
    somethingelse();
    }
{% endhighlight %}

---

### Style [Lisp](https://terminalroot.com/tags#lisp)
**Lisp** is a programming language and also a family of programming languages that obey the standard created by the first Lisp.
> Similar to Pico, however, with leading spaces before the opening brace pair.
{% highlight c %}
while (x == y)
  { something();
    somethingelse(); }
{% endhighlight %}
> Remembering that this is an illustrative example, Lisps have a greater use of parentheses throughout the code.


<!-- RECTANGLE 2 - OnParagragraph -->
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

---

# What's your style?
My style is more K&R, only more **modern**! 😃 I like to merge the opening of keys too when I create functions. I prefer this style because it lessens the likelihood of typos similar to the one below, when usage is similar to the BSD style:
{% highlight c %}
void myfunction()
   int x = 42; // syntax error
{
   while (x == y)
   int y = 42; // another error
   {
       something();
       somethingelse();
   }
}
{% endhighlight %}

I always prefer to use it like this:
{% highlight cpp %}
void myfunction(){
   int x = 42;
   int y = 42;
   while (x == y) {
       something();
       somethingelse();
   }
}
{% endhighlight %}

I call this style **Like a Boss!** 😃

---

Source: [Wikipedia](https://en.wikipedia.org/wiki/Indentation_style) .

