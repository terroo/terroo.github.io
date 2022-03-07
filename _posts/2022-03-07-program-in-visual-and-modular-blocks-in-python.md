---
layout: post
title: "Program in Visual and Modular Blocks in Python"
date: 2022-03-07 20:38:15
image: '/assets/img/python/pyflow.jpg'
description: 'An open source tool for interactive development.'
tags:
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

# Program in Visual and Modular Blocks in Python
> 

![PyFlow](/assets/img)

---

**PyFlow** is an interactive [Python](https://terminalroot.com/tags#python) development tool structured in [open source](https://terminalroot.com/tags#opensource) graphs.

With **PyFlow** you can create code blocks in which you can edit and run Python code, you can move and resize blocks in an infinite 2D plane. Just link the blocks to highlight dependencies, Pyflow will automatically run your blocks in the correct order.

---

# Installation
To get PyFlow on your system you need to use [pip](https://pypi.org/project/pip/) and run the following command:
{% highlight sh %}
pip install --user byc-pyflow
{% endhighlight %}

After the installation is complete, to run PyFlow, just run:
{% highlight sh %}
python -m pyflow
{% endhighlight %}

The PyFlow window will open, click on **File** and then on **New** to create a block scheme.

![PyFlow File New](/assets/img/python/pyflow-file-new.jpg)


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

Then right-click on the plane and choose the type of block: [Markdown](https://terminalroot.com/tags#markdown) or `Code` .

![PyFlow Code or Markdown](/assets/img/python/pyflow-code.jpg)

---

Example of a code block:

![PyFlow Code](/assets/img/python/pyflow-run-code-1.jpg)

---

Example of a Markdown block:

![PyFlow Markdown](/assets/img/python/pyflow-markdown.jpg)

---

By clicking on the triangle or square it is possible to create a node and join it to another block. See in this example, I created the variable `example` in one block and printed it in the other:

[![PyFlow We](/assets/img/python/pyflow-run-code-2.jpg)](/assets/img/python/pyflow-run-code-2.jpg)

---

In this other example I created a function that prints a message and in the other node a variable with a URL and in the third node I print the message and I already open the URL in the default browser as soon as I click `>>` to execute the code:
> Click on the image to enlarge and view the code better (it will open in a new tab of your browser).

[![PyFlow We](/assets/img/python/pyflow.jpg)](/assets/img/python/pyflow.jpg)

To save your project press <kbd>Ctrl + s</kbd> .

See the gifs below to learn more about many of the features:

![PyFlow](https://github.com/Bycelium/PyFlow/raw/dev/media/mnist_example.gif)


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

![PyFlow Example 2](https://github.com/Bycelium/PyFlow/raw/dev/media/block_example.gif)

---

![PyFlow Example 3](https://github.com/Bycelium/PyFlow/raw/dev/media/resize_example.gif)

---

# Shortcut keys

## Navigation

| Shortcut                                                             | Description                                     |
| -------------------------------------------------------------------- | ----------------------------------------------- |
| <kbd>Space</kbd>                                                     | Zoom on selection (Center view if no selection) |
| <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>                  | Navigate between blocks / Inside an editor      |
| <kbd>Enter</kbd>                                                     | Enter a block editor                            |
| <kbd>Alt</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> | Navigate between blocks editors                 |
| <kbd>Echap</kbd>                                                     | Clear selection and block focus                 |
| <kbd>Ctrl</kbd> + <kbd>+</kbd>  <kbd>-</kbd>                         | Zoom in/out                                     |

## Edition

| Shortcut                                                  | Description                             |
| --------------------------------------------------------- | --------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd>                            | Create a new graph                      |
| <kbd>Ctrl</kbd> + <kbd>C</kbd>                            | Copy selected blocks to scene clipboard |
| <kbd>Ctrl</kbd> + <kbd>X</kbd>                            | Cut selected blocks to scene clipboard  |
| <kbd>Ctrl</kbd> + <kbd>V</kbd>                            | Paste scene clipboard on mouse location |
| <kbd>Ctrl</kbd> + <kbd>D</kbd>                            | Duplicate selected blocks               |
| <kbd>Shift</kbd> + <kbd>↑</kbd>                           | Quick create a parent block             |
| <kbd>Shift</kbd> + <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> | Quick create a child block              |

## Execution

| Shortcut                            | Description                      |
| ----------------------------------- | -------------------------------- |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | Run block (and its dependencies) |

---

For more information and documentation visit the [repository](https://github.com/Bycelium/PyFlow) .

