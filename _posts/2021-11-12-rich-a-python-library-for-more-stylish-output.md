---
layout: post
title: "Rich, a Python library for more stylish output"
date: 2021-11-12 20:25:00
image: '/assets/img/python/rich-python.jpg'
description: 'Display tables, HTML and more from the terminal.'
featured-img: ../python/rich-python.jpg
tags:
- python
---

![Rich, a Python library for more stylish output](/assets/img/python/rich-python.jpg)

Making context outputs more elegant is the challenge for almost everyone wherever they go: console, web, mobile or graphical.

The Rich library is the most innovative in this regard and your TUI apps will look even more professional!

This API makes it easy to add color and style to terminal output. It can also render beautiful tables, progress bars, markdown, syntax highlighted source code, tracebacks and more - ready to use.

# Installation
To install it is very simple, just use [pip](https://pypi.org/project/pip/), you can install only for your user:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

{% highlight sh %}
pip install rich --user
{% endhighlight %}

Or for your entire system
{% highlight sh %}
sudo pip install rich
{% endhighlight %}

# Use
At first you can see all the formatting possibilities by running the command:
{% highlight sh %}
python -m rich
{% endhighlight %}

The output will be something like:

![Rich](/assets/img/python/rich.png) 

Another basic example of usage, using style and hexadecimal colors: `vim hello.py`

{% highlight python %}
from rich.console import Console

console = Console()
console.print("Terminal", "Root", style="#ccc010 bold")
{% endhighlight %}

Run: python hello.py, exit:

![Rich, a Python library for more stylish output](/assets/img/python/hello-rich.png) 

You can even use HTML-style tags, but with square brackets, for example:

{% highlight python %}
from rich.console import Console

console = Console()
console.print("[bold]Website[/bold]: [bold cyan]Terminal Root[/bold cyan] [u]Linux[/u] [i]and[/i] [bold yellow]Programming[/bold yellow].")
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

In addition to tables, see this gif:

![GIF](https://terminalroot.com.br/assets/img/python/rich-table.gif) 

Access the repository on GitHub and learn more:
## <https://github.com/willmcgugan/rich>


