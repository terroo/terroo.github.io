---
layout: post
title: "Create Effects in the Terminal LIKE A PRO"
date: 2024-05-30 12:14:57
image: '/assets/img/python/effects.jpg'
description: "🗞️ This is an application written in Python."
tags:
- python
- terminal
- tui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In the previous post: [Easily Create Stylish Letters for Terminal](https://terminalroot.com/easily-create-stylish-letters-for-terminal/), we showed how to generate names with fonts rendered in the terminal.

In this article we will show you how you can combine the previous information and create animations in the terminal.

This might be interesting for you to add to some [command line](https://terminalroot.com/tags#comando) or [TUI](https://terminalroot.com/tags#tui) application that you intend or are developing, to be the introduction or help and even as a boot menu.

See the effects in one of the videos below and right after the video there is a tutorial explaining step by step how you can reproduce it on your machine!

---

<iframe width="436" height="775" src="https://www.youtube.com/embed/KboglemC4TA" title="Crie Efeitos no Terminal LIKE A PRO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

These effects are an application written in [Python](https://terminalroot.com/tags#python) called: **TerminalTextEffects**, or just: **TTE**!

TerminalTextEffects (TTE) is a terminal visual effects engine. TTE can be installed as a system application to produce effects in your terminal or as a Python library to activate effects in your Python scripts/applications.

TTE includes a growing library of built-in effects that showcase the engine's capabilities. These features include:
+ Xterm 256 / RGB hexadecimal color support
+ Complex character movement via paths, landmarks, and motion smoothing, with support for quadratic/cubic Bézier curves.
+ Complex animations through scenes with symbol/color changes, layers, easing, and path-synced progression.
+ Variable stop/step color gradient generation.
+ Event handling for path/scene state changes with custom callback support and many predefined actions.
+ Effect customization exposed through a typed effect configuration data class that is automatically handled as CLI arguments.

Runs inline, preserving terminal state and workflow.

---

# Installation
To install just use [Pip](https://pypi.org/project/pip/) with the following command:

{% highlight bash %}
pip install terminaltexteffects
{%endhighlight%}

If your system presents any criticism during installation, it is probably because it adopts some security policies and you need to install it in a virtual environment.

To do this, run the commands below in order:
{% highlight bash %}
mkdir -p ~/.local/bin/venv
python -m venv ~/.local/bin/venv
. ~/.local/bin/venv/bin/activate
{%endhighlight%}

Now install it in the virtual environment that was started:
{% highlight bash %}
pip install terminaltexteffects
{%endhighlight%}

Continue in this open terminal if you activated `venv` in it to run the effects!

---

# Creating effects
There are several effects, **EFFECT 1** in the videos above is **Beams**. To reproduce it, create a Python file, example: `beams.py` and insert the content below:

```py
from terminaltexteffects.effects.effect_beams import Beams

effect = Beams("YourTextHere")

with effect.terminal_output() as terminal:

 for frame in effect:

 terminal.print(frame)
```

Where there is the *string*: **YourTextHere** is where you should put the text you want to animate. To run:
```bash
python beams.py
```

If you want to use files with ready-made and larger texts, for example, the file I used in the videos:

> `vim content.txt`

```bash
Lorem ipsum dolor sit amet, officia excepteur ex fugiat 
enim labore culpa sint ad nisi Lorem pariatur mollit ex 
esse exercitation amet. Nisi anim cupidatat excepteur 
officia. Reprehenderit nostrud nostrud ipsum Lorem est 
aliquip amet voluptate voluptate dolor minim nulla est 
proident. Nostrud officia pariatur ut officia. Sit irure 
elit esse ea nulla sunt ex occaecat reprehenderit commodo 
officia dolor Lorem duis laboris cupidatat officia 
voluptate. Culpa proident adipisicing id nulla nisi 
laboris ex in Lorem sunt duis officia eiusmod. Aliqua 
reprehenderit commodo ex non excepteur duis sunt velit
enim. Voluptate laboris sint cupidatat ullamco ut ea 
consectetur et est culpa et culpa duis.
```

And change the code in the `beams.py` file so that it loads this file dynamically, leave it like this:
```python
from terminaltexteffects.effects.effect_beams import Beams

with open('./content.txt', 'r') as file:
 content = file.read()

effect = Beams(content)

with effect.terminal_output() as terminal:

 for frame in effect:

 terminal.print(frame)
```

Now run it again and see **EFFECT 1** identical to the one in the video!

---

The other 2 effects are: **BouncyBalls**(EFFECT 2) and **Binarypath**(EFFECT 3).

There are many more effects at [official TTE address](https://chrisbuilds.github.io/terminaltexteffects/).


