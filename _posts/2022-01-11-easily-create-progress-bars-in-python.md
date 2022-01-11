---
layout: post
title: "Easily Create Progress Bars in Python"
date: 2022-01-11 14:35:50
image: '/assets/img/python/tqdm.png'
description: 'Fast, easy and elegant!'
tags:
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

After the post about [how to create progress bars with C++](https://terminalroot.com/easily-create-progress-bars-in-cpp/), some people asked me if there was a tool for [Python](https://terminalroot.com/tags#python), and of course there are several!

The simplest and easiest to use is **tqdm** .

**tqdm** derives from the Arabic word taqaddum (تقدّم ), which can mean "progress" and is an abbreviation of "I love you so much" in Spanish (te quiero too).

With it you can quickly create smart progress bars - just wrap any iterable with tqdm and that's it!


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

# Installation
To insta is very simple, just have [pip](https://pypi.org/project/pip/)

And then use it, example:
{% highlight bash %}
pip install tqdm
{% endhighlight %}

If you have a problem with the installation, try only for your user, for example:
{% highlight bash %}
pip install tqdm --user
{% endhighlight %}

There is also the possibility to install from the development [branch](https://terminalroot.com/tags#git)
{% highlight bash %}
pip install "git+https://github.com/tqdm/tqdm.git@devel#egg=tqdm"
{% endhighlight %}

# Basic example
Now just import `tqdm` in your code and implement
> `vim progress.py`

{% highlight python %}
from tqdm import tqdm
from time import sleep
for i in tqdm(range(10000)):
    sleep(0.001)
{% endhighlight %}

And test:
{% highlight bash %}
python progress.py
{% endhighlight %}

The output will be animated, see part of the simplified animation:
{% highlight bash %}
███████████████████████████████████████████████████████████████████ 3034/10000 [00:03<00:08, 815.13it/s]
{% endhighlight %}

And there are still several ways to implement it, for example, directly from the prompt:
{% highlight bash %}
seq 9999999 | tqdm --bytes | toilet -l
{% endhighlight %}


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

Or with the parameters: `--unit_scale` and `--total [N]` combined:
{% highlight bash %}
seq 9999999 | tqdm --unit_scale --total 999999 | toilet -l
{% endhighlight %}

Show, huh?!

For more information, run:
{% highlight bash %}
tqdm --help
{% endhighlight %}

And visit the official website: <https://tqdm.github.io/>


