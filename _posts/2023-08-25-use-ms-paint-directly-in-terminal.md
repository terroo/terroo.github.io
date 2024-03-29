---
layout: post
title: "Use MS Paint directly in Terminal"
date: 2023-08-25 19:18:51
image: '/assets/img/python/textual-paint.jpg'
description: 'The famous TUI-shaped image editor!'
tags:
- python
- tui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Textual Paint** is an image editor [TUI (Text User Interface)](https://terminalroot.com/tags#tui), inspired by [MS Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H), written in [Python](https://terminalroot.com/tags#python) with the [Textual](https://textual.textualize.io/) library.

How about testing and using this beauty?!

To install it is very simple, just [Pip](https://pip.pypa.io/en/stable/):
{% highlight bash %}
pip install textual-paint
{% endhighlight %}

If your system presents any criticism during the installation, it's probably because it adopts some security policies and you need to install in a **virtual environment**.

To do this, run the commands in order:

+ Create an environment and activate it:
{% highlight bash %}
mkdir -p .local/bin/venv
python -m venv ${HOME}/.local/bin/venv
. .local/bin/venv/bin/activate

{% endhighlight %}

+ Now install `textual-paint`:
{% highlight bash %}
(venv) pip install textual-paint
textual-paint
deactivate
{% endhighlight %}

+ And to run, use the command:
{% highlight bash %}
exec ~/.local/bin/venv/bin/textual-paint
{% endhighlight %}

If you want to add it as a quick command, create an alias:
{% highlight bash %}
echo 'alias textual-paint="${HOME}/.local/bin/venv/bin/textual-paint"' >> ~/.bashrc
exec $SHELL
{% endhighlight %}

Now just use the command:
{% highlight bash %}
textual-paint
{% endhighlight %}

For more information, access the official Textual Paint repository: <https://github.com/1j01/textual-paint>.
