---
layout: post
title: "How to Create a Self-Clocking Code in JavaScript"
date: 2024-07-10 11:54:06
image: '/assets/img/js/clockjs.jpg'
description: "🗞️ The true artist programmer!"
tags:
- javascript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Once I found a website that displayed the clock with its own code [JavaScript](https://terminalroot.com/tags#javascript), I ended up saving the code, because I wanted to understand it without the clock format and I ended up Losing the link with the original code, I saved and formatted it and the code was this:

{% highlight js %}
(r = () => setInterval(t => {
 for (j = o = "\n", y = 5; y--; document.body["inn" +
 "erHTML"] = "<pre>&lt" + (S = "script>\n") + o + "\n\n&lt/" + S)
 for (x = -01; 63 - !y > x++; o += `(r=${r})()` [j++].fontcolor(c ? "#FF0" : "#444")) c = x / 2%
 4 < 3 && parseInt("odRFacb67o2vi5gmOZmwFNteohbOh3sw".slice(i = "9" < (
 D = Date()[16 + (x / 8 | 0)]) ? 30 : D * 3, i + 3), 36) & 1 << (x / 2 | 0) % 4 + 3 * y
}, 100))()
{% endhighlight %}

---

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

Note that it displays and modifies the code itself.

As I had cleared the history, I ended up no longer finding the code, but the original format was this:

{% highlight js %}
(r=()=>setInterval(t=>{for(j=o="\n",y=5;y--;document.body["inn"
                           +"erHTML"]="<pre>&lt"+(S="script>\n")+o+"\n\n&lt/"+S)for(x=-01;
                           63-!y>x++;o+=`(r=${r})()`[j++].fontcolor(c?"#FF0":"#444"))c=x/2
                   %4<3&&parseInt("odRFacb67o2vi5gmOZmwFNteohbOh3sw".slice(i="9"<(
                                   D=Date()[16+(x/8|0)])?30:D*3,i+3),36)&1<<(x/2|0)%4+3*y},100 ))()
{% endhighlight %}

In other words, if you create this file and open it in your browser, you will see the clock that uses the JS code itself to display it:
> `clockjs.html`

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <style>
        html {background: #000;}
        </style>
    </head>
 <body>
 <a href="https://aem1k.com/qlock/">Learn more</a><br><<hr>

 <script>

(r=()=>setInterval(t=>{for(j=o="\n",y=5;y--;document.body["inn"
+"erHTML"]="<pre>&lt"+(S="script>\n")+o+"\n\n&lt/"+S)for(x=-01;
63-!y>x++;o+=`(r=${r})()`[j++].fontcolor(c?"#FF0":"#444"))c=x/2
%4<3&&parseInt("odRFacb67o2vi5gmOZmwFNteohbOh3sw".slice(i="9"<(
D=Date()[16+(x/8|0)])?30:D*3,i+3),36)&1<<(x/2|0)%4+3*y},100 ))()

</script>
 </body>
</html>
{% endhighlight %}

If you want different sizes and styles, use [CSS](https://terminalroot.com/tags#css) to format the `<pre>` tag, example:
{% highlight css %}
pre {font-weight: bold; font-size: 30px;}
{% endhighlight %}

Cool huh?! If you know the link, send it to me so I can give credit to the person! I went!
