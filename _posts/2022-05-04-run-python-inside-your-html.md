---
layout: post
title: "Run Python inside your HTML"
date: 2022-05-04 11:42:42
image: '/assets/img/python/pyscript.png'
description: 'Made with JavaScript!'
tags:
- python
- html
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**PyScript** is a framework that allows users to create and run [Python](https://terminalroot.com/tags#python) in the browser using the HTML interface.

PyScript aims to provide users with a first-class programming language that has consistent style rules, is more expressive, and is easier to learn.

---

# Installation
To implement it is very easy, just include the CDN of [CSS](https://terminalroot.com/tags#css) and [JavaScript](https://terminalroot.com/tags#javascript) in your code [HTML](https://terminalroot.com/tags#html), example:

{% highlight html %}
<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
{% endhighlight %}

And then just use the Python code between the `<py-script>` tags, for example:

{% highlight html %}
<py-script> print('Hello, Python!') </py-script>
{% endhighlight %}

You may notice some slowness, if you want it to be a little faster, please download the files and link locally:

{% highlight sh %}
wget https://pyscript.net/alpha/pyscript.js https://pyscript.net/alpha/pyscript.css
{% endhighlight %}

And the full HTML code here:


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

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PyScript</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./pyscript.css" />
  </head>
  <body>
    <py-script> print('Hello, PyScript!') </py-script>
    <script defer src="./pyscript.js"></script>
  </body>
</html>
{% endhighlight %}

For more information visit the [PyScript official website](https://pyscript.net/) .

