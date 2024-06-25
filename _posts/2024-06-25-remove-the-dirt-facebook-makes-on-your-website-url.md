---
layout: post
title: "Remove the dirt Facebook makes on your website URL"
date: 2024-06-25 13:28:03
image: '/assets/img/js/clean-url.jpg'
description: "🗑️ A basic and useful JavaScript code!"
tags:
- javascript
- web
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already published once about an extension that removes several *gets* from any website that dirty your url: [Clean your URLs from Social Network Parameters and Others](https://terminalroot.com/clean-up-your-social-media-and-other-parameter-urls/).

But, today we're going to show you how to use a basic [JavaScript](https://terminalroot.com/tags#javascript) script to remove Facebook's `fbclid` from your website.

Something like this:

{% highlight html %}
https://website.com/index.html?fbclid=IwZXh0bgNhZW0CMTEAAR0-qJHl1VErGqub7nFOmL9OOuFJFJsdnr5yg9xEZA2T1Cc29buSBeBVfzc_aem_qxWU50NfOPAeOYePO2TlzA
{% endhighlight %}

This *filth* that Facebook does, besides being HORRIBLE 🤮, is also disturbing:
+ When you save the URL in favorites, sometimes it is already saved, but as these codes are dynamic, you end up saving a URL that is already there several times;
+ It also disrupts the site's statistics services, such as Google Analytics, for example, duplicate occurrences appear.

Not to mention that this only serves as tracking for them.

To remove, add this code below, before the closing `</head>` tag:

{% highlight html %}
<!-- REMOVE fbclid -->
<script>
 const url = window.location.href
 if(url.match(/fbclid/)){
 const new_url = url.replace( new RegExp("\\\?fbclid.*","gm"),"")
 history.pushState({}, null, nova_url);
 }
</script>
{% endhighlight %}

Then just test and no more dirt!

A quick and useful tip for many.

## See too:
+ [Solar system made with HTML, CSS and pure Javascript](https://terminalroot.com/solar-system-made-with-html-css-and-pure-javascript/)
+ [The 31 Best JavaScript Frameworks and Libraries](https://terminalroot.com/os-31-melhores-frameworks-e-bibliotecas-javascript/)
+ [The 20 Best Engines for Game Development with JavaScript](https://terminalroot.com/the-20-best-engines-for-game-development-with-javascript/)
+ [Create Window for HTML5 with Javascript](https://terminalroot.com/create-window-for-html5-with-javascript/)
