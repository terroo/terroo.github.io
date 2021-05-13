---
layout: post
title: "Create Window for HTML5 with Javascript"
date: 2021-05-13 11:35:16
image: '/assets/img/js/winbox.jpg'
description: 'A modern and very interesting resource!'
featured-img: ../js/winbox.jpg
tags:
- javascript
- html
---

![Create Window for HTML5 with Javascript](/assets/img/js/winbox.jpg)

Creating "Windows" in the DOM is something sensational, especially if you want to create online systems, online terminal or even an operating system prototype! 😃

And doing that now is even simpler with Winbox.js.

![Winbox.js](/assets/img/js/winbox.png)

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

WinBox is a modern HTML5 window manager for the web. Light and excellent performance, without dependencies, fully customizable, free and open source!

There are numerous ways to use it, such as:

Via npm:
{% hightlight bash %}
npm install winbox
{% endhighlight %}

Importing the module via CDN:
{% hightlight bash %}
<script type="module">
  import WinBox from "https://unpkg.com/winbox@0.1.8/src/js/winbox.js";
</script>
{% endhighlight %}

Or by downloading from the [website](https://nextapps-de.github.io/winbox/).

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

talking about website, there you will find several examples of use and demo windows!

# And what is the most basic way to implement it?

Simple! I made a very basic example of use and you just copy the code, open a [html] file!

Open the file in your [browser](https://en.terminalroot.com.br/list-with-30-browsers-for-linux/)!
Code sample:

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

{% hightlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Janelas com Javascript</title>
  <script src="https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/winbox.bundle.js"></script>
<style> #content { display:none; padding: 10px; }</style>
</head>
<body>
 <div id="content">
    <h1>Terminal Root</h1>
    <h3>A little bit about C++, Operating Systems, Programming and Web Development.</h3>
    <p>Consectetur nulla sequi distinctio enim accusantium? Architecto incidunt accusantium aut fugit commodi Autem et saepe aliquid alias hic. Atque in neque tempore animi earum? At maiores ullam quaerat aliquam mollitia</p>
    <p>Elit non vel non quisquam repellendus, consectetur Perspiciatis laboriosam nulla dolor optio vero? Odit placeat nisi pariatur incidunt est Architecto nisi libero sit fugit vitae iusto? Ut quas necessitatibus non</p>
    <h3>Acesse: <a href="https://terminalroot.com.br/">https://terminalroot.com.br/</a></h3>
</div>

<button onclick="OpenWindow()">Abrir janela</button>
<script>

  function OpenWindow(){
    document.getElementById("content").style.display = "block"; 
    var node = document.getElementById("content");

    new WinBox("Mount DOM", {
        mount: node.cloneNode(true)
    });
    document.getElementById("content").style.display = "none"; 
  }

</script>
</body>
</html>
{% endhighlight %}

Winbox.js website: https://nextapps-de.github.io/winbox/

GitHub: https://github.com/nextapps-de/winbox 


