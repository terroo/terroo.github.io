---
layout: post
title: "Termgraph - draw graphics on the terminal"
date: 2021-01-24 13:42:53
image: '/assets/img/python/termgraph.jpg'
description: 'A command line tool that draws basic graphics on the terminal, written in Python.'
featured-img: ../python/termgraph.jpg
tags:
- python
- terminal
---

![Termgraph - draw graphics on the terminal](/assets/img/python/termgraph.jpg)

Several [programming languages](https://en.terminalroot.com.br/hello-world-in-25-programming-languages-proposal-docs-and-links/) are available for creating graphics and [visualizing data](https://en.wikipedia.org/wiki/Data_visualization). [Python](https://en.terminalroot.com.br/basic-python-script-for-learning/) is one of the "[richest](https://en.terminalroot.com.br/the-30-best-python-libraries-and-packages-for-beginners/)" libraries in this regard, [matplotlib](https://en.terminalroot.com.br/the-30-best-python-libraries-and-packages-for-beginners/) is one of the most used. The [R programming language](https://www.r-project.org/) is also one of the best in this regard and we can mention **ggplot2**.

But what if you are looking for an even faster and easier way to view data stored in a plain text file. And maybe you don't want to leave the comfort of the terminal? You may be interested in **Termgraph**.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installing Termgraph
You must use pip to install it, example:
{% highlight bash %}
python -m pip install termgraph
{% endhighlight %}

Alternatively you can use pipx:
{% highlight bash %}
pipx install termgraph
{% endhighlight %}

# Supported chart types

+  Bar Graphs
+  Color charts
+  Multi-variable
+  Stacked charts
+  Histograms
+  Horizontal or Vertical
+  Emoji!

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Usage examples

+  Read data from `data/ex1.dat` file
{% highlight bash %}
termgraph data/ex1.dat

2007: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 183.32
2008: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 231.23
2009: ▇ 16.43
2010: ▇▇▇▇ 50.21
2011: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 508.97
2012: ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 212.05
2014: ▏ 1.00
{% endhighlight %}

+ Using custom colors
![Termgraph example 2](/assets/img/python/termgraph-ex2.jpg)

For more forms of use, run:
{% highlight bash %}
termgraph -h
{% endhighlight %}

And you can still contribute to the project, Termgraph's GitHub: <https://github.com/mkaz/termgraph>.

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


