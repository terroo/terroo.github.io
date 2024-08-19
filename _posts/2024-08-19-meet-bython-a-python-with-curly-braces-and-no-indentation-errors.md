---
layout: post
title: "Meet Bython, a Python with curly braces and no indentation errors"
date: 2024-08-19 10:21:13
image: '/assets/img/python/bython.jpg'
description: "🐍 A Python for Python haters! 😃"
tags:
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you are one of those who like [Python](https://terminalroot.com/tags#python), but find the *indentation errors* and lack of [C-style](https://terminalroot.com/tags#clanguage) with the use of *curly braces* (`{ }`) annoying, then **Bython** is for you.

In other words, Bython is a **B**rackets Python, a Python with curly braces!


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

## Installation
To install you can use [Pip](https://pypi.org/project/pip/): `pip3 install bython`. If your system issued *failure*, then you need to create a `venv`:
{% highlight bash %}
mkdir -p ~/.local/bin
python -m venv ~/.local/bin/venv
. ~/.local/bin/venv/bin/activate
pip install bython
{% endhighlight %}

After that, just test it with a `.py` file, for example: `main.py`:
{% highlight python %}
def cout(str){
print(str)
}
cout("Hello, Bython")

{% endhighlight %}

And run it via command line:
{% highlight bash %}
bython test-bython.py
{% endhighlight %}

Or if it's not in the `venv`, use the full path:
{% highlight bash %}
~/.local/bin/venv/bin/bython test-bython.py
{% endhighlight %}

Strange and cool at the same time, right?! 😃

For more information, visit: <https://github.com/mathialo/bython>.


