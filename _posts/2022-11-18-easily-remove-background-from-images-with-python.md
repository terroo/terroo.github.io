---
layout: post
title: "Easily remove background from images with Python"
date: 2022-11-18 19:45:51
image: '/assets/img/python/bird.jpg'
description: 'With only 5 lines of code!'
tags:
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

I would like to make a very detailed text, but this tool in [Python](https://terminalroot.com/tags#python) is very simple and straight to the point!

Just install [pip](https://pypi.org/project/pip/) and with `pip` install the `remove` package:

{% highlight bash %}
pip install remove --user
{% endhighlight %}
> The `--user` parameter will make this package/module/library available only to your user: `${HOME}` you must have the directory `~/.local/bin` included in your environment variable `${PATH }`, if not, run the command:

{% highlight bash %}
echo 'export PATH="${PATH}:${HOME}/.local/bin"' >> ~/.bashrc
{% endhighlight %}
> If you want it for all system users, run: `sudo pip install remove`.


Now just create some basic code, example:

> `code.py`
{% highlight python %}
from rembg import remove
from PIL import Image
input = Image.open("bird.png")
output = remove(input)
output.save("output.png")
{% endhighlight %}
> Run: `python code.py`, the backgroundless image will be saved in the directory where you executed the code and its name will be: `output.png`

If you want to test with the image of this example, save it:

![bird.png](/assets/img/python/bird.png)



