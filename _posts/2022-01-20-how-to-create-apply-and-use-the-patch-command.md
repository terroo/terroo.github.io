---
layout: post
title: "How to Create, Apply and Use the patch command"
date: 2022-01-20 06:58:15
image: '/assets/img/commands/patch.jpg'
description: 'An easy way to add additional features.'
tags:
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# Concept
> [According to wikipedia](https://en.wikipedia.org/wiki/Patch_(computing)):
A patch is a computer program created to update or correct software in order to improve its usability or performance. When patches fix bugs or security vulnerabilities, it is called a bugfix.

This technique can be used as one of the ways to distribute a software release. It is widely used in computer games in order to update the available content.

> The `patch` [UNIX](https://en.wikipedia.org/wiki/Patch_(Unix)) command:
A patch (Unix) is a computer program on the UNIX operating system that applies the textual differences between two programs and, more often, to computer files containing those differences, or diff files.

> According to [manual](https://man7.org/linux/man-pages/man1/patch.1.html):
patch takes a patch file: `patchfile` containing a difference list produced by the diff program and applies those differences to one or more original files, producing versions.

Normally, corrected versions are put in place of the original.


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

# Syntax
{% highlight bash %}
patch [file you want to patch] [the patch]
{% endhighlight %}

# Practical example
Suppose you have the following file in [C++](https://terminalroot.com/tags#cpp):

> `vim hello.cpp`
{% highlight cpp %}
#include <iostream>

int main( int argc , char **argv ){
  std::cout << "Hello World!" << '\n';
  return 0;
}
{% endhighlight %}

And then you create a new one based on it and change a few things:
{% highlight bash %}
cp hello.cpp new_hello.cpp
{% endhighlight %}

> `vim new_hello.cpp`
{% highlight cpp %}
#include <iostream>

int main( int argc , char **argv ){
  std::cout << "Hello World!" << '\n';
  std::cout << "It's a good world to end ..." << '\n';
  return 0;
}
{% endhighlight %}

When you run the command [diff](https://terminalroot.com/meet-meld-an-easier-to-view-diff/) with the parameter `-u` you and generate a patch file: `file.patch`:

{% highlight bash %}
diff -u hello.cpp new_hello.cpp > file.patch
{% endhighlight %}

And then the contents of `file.patch` will have the following code:

{% highlight patch %}
--- hello.cpp 2021-06-29 00:01:27.329937847 -0300
+++ new_hello.cpp 2021-06-29 00:02:08.281947880 -0300
@@ -2.6 +2.7 @@
 
 int main( int argc , char **argv ){
   std::cout << "Hello World!" << '\n';
+ std::cout << "It's a good world to end ..." << '\n';
   return 0;
 }
{% endhighlight %}

Although this example is basic and you can change the line manually, in most cases on larger projects it would be a lot of work.

So, to apply the patch, as we saw in its **Syntax** above, just run the `patch` command:

{% highlight bash %}
patch hello.cpp file.patch
{% endhighlight %}

And if you look at the contents of `hello.cpp` you will now see that it is identical to that of `new_hello.cpp`.

Easy, huh? Of course, there are still a lot of options and it's worth taking a look at the manual and help:
{% highlight bash %}
patch --help
man patch
{% endhighlight %}

### See too
#### [Command cp with Progress Bar](https://terminalroot.com/command-cp-with-progress-bar/)
> Just applying a **patch**.
