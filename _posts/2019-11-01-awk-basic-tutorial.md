---
layout: post
title: "AWK Basic Tutorial"
date: 2019-11-01 10:37:38
image: '/assets/img/dev/awk.jpg'
description:
featured-img: ../dev/awk.jpg
tags:
- awk
- gawk
- linux
- command
- programming
---

![AWK Basic Tutorial](/assets/img/dev/awk.jpg)

## Introduction

[AWK](https://www.gnu.org/software/gawk/manual/gawk.html) is an interpreted programming language that is generally used to make shell scripts more powerful and feature-rich. It is mostly used to process data in text and file operations.

> The name comes from the first letter of the surname of each of the creators: Alfred **A**ho, Peter **W**einberger and Brian **K**ernighan.

This language is considered by many to be an important milestone in the history of programming, having had a great influence on the creation of other programming languages, such as Perl and Python.

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
 
## AWK Variants

+ BWK: Also known as AWK or NAWK refers to the version by Brian Kernighan.
+ GAWK: (GNU AWK) is another open source implementation (OPEN SOURCE)
+ MAWK: It's a much faster AWK implementation version by Mike Brennan (...)

### Example 1
{% highlight bash%}
awk '{ print "Hello, World" }'
awk -f hello.awk
{% endhighlight%}

The **- f** flag says that the following command is a program to execute.

For an executable program, use **/usr/bin/awk**.

For example, create a **world.awk** file with the content
{% highlight bash%}
# !/usr/bin/awk -f
# My first awk script
{ print "Hello, World!" }
{% endhighlight%}

Making this file executable
{% highlight bash%}
chmod +x world.awk
{% endhighlight%}

Running
{% highlight bash%}
./world.awk
{% endhighlight%}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Language Variables

Save the **dogs.txt** File

{% highlight bash%}
rex calm skinny yellow
skinny angry white white
fat white lennon
fat angry white fred
{% endhighlight%}

Print entire file
{% highlight bash%}
awk '{print $0}' dogs.txt
{% endhighlight%}

- `$1` prints the dog's name,
- `$2` a color,
- `$3` your mood,
- `$4` your fitness.

We can use these variables within the print command. In it, whenever we put a comma, we are spacing

{% highlight bash%}
awk '{print "The",$1,"is",$4}' dogs.txt
{% endhighlight%}

Output
{% highlight bash%}
The rex is yellow
The skinny is white
The fat is 
The fat is fred
{% endhighlight%}

Without spaces

{% highlight bash%}
awk '{print "The"$1"is"$4}' dogs.txt
{% endhighlight%}

Output
{% highlight bash%}
Therexisyellow
Theskinnyiswhite
Thefatis
Thefatisfred
{% endhighlight%}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Using `BEGIN`

With `BEGIN`, AWK doesn't wait for an entry (like typing ENTER twice), it executes everything from that block.
{% highlight bash%}
awk 'BEGIN {print "Everything will be\nprinted\nat once"}'
{% endhighlight%}

Output
{% highlight bash%}
Everything will be
printed
at once
{% endhighlight%}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Tips
 
- We use the **- F** flag to tell **AWK** that we will use the **CSV (comma separated values) **.
- As in **language C**, AWK also has the command **printf**, which is much more flexible than **print**.
> The only thing print does that printf doesn't do is automatically put a new line at the end of the string **\\n**.
{% highlight bash%}
awk '{printf "Dog Color% s:% s \n", $1, $2}' dogs.txt
{% endhighlight%}
- **sprintf**: It acts and has the same syntax as **printf**. The difference is that its output is stored in a variable rather than displayed on the screen.

## User Defined Variables

Cannot start variables by digits, they are case sensitive, must not have the same name as AWK variables, or other commands, and do not need to be initialized or declared.

When using the first variable, it is either an empty string ("") or "0", but it is not good to trust your script with these initial values.

AWK is poorly typed, that is, you can assign a number to a variable and then not assign a string, for example.

> Ex .: Save as "**dogs2.awk**"

{% highlight bash%}
BEGIN { namecolor="%-15s %20s\n"; printf namecolor, "Name", "Color\n"}
 { printf namecolor, $1, $2}
{% endhighlight%}

Run: `awk -f dogs2.awk dogs.txt`

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## `if` and comparison operators

These are the control statements that control the flow of program execution in AWK. In AWK, they are similar to C, and have the same looping and interactions as the Shell pattern.

> They are: **if, while, for, do and the like**.

File: **gnu.txt**
{% highlight bash%}
Eric    59 3 2112
Linus    30 5 578
Richard   40 3 2789
Marcos   24 1 134
{% endhighlight%}

{% highlight bash%}
awk '{ if($4 > 2000) print $1 }' gnu.txt
{% endhighlight%}

Output:
{% highlight bash%}
Eric
Richard
{% endhighlight%}

Directing the exit
{% highlight bash%}
awk 'BEGIN {print 1+1 > "result" }' gnu.txt
{% endhighlight%}

View: `cat result`

## `else` and `else if`

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Create a file: `vim conditions.awk` and insert this content:
{% highlight bash%}
#!/usr/bin/awk -f
{
 if ($1 == "Eric")
 printf "The first \n"
 else if ($1 == "Linus")
 printf "the second\n"
 else
 printf "Other person\n"
}
{% endhighlight %}

Run: `awk -f conditions.awk gnu.txt`

***

This was just an introduction to Awk, in the future we'll see more tips.

Thanks for reading!
