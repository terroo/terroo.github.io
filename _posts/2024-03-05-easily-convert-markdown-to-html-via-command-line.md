---
layout: post
title: "Easily convert Markdown to HTML via command line"
date: 2024-03-05 13:49:11
image: '/assets/img/markdown/md-to-html.jpg'
description: 'A CLI application written with C++'
tags:
- markdown
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

For those of you who periodically need to convert from [Markdown](https://terminalroot.com/tags#markdown) to [HTML](https://terminalroot.com/tags#html), there is a very intuitive and easy to use for the command line, written in [C++](https://terminalroot.com/tags#cpp) that will help you.

**Markdown-CLI** is a CLI markdown parser that easily converts Markdown to HTML quickly!

---

# Installation
To install, simply use [Git](https://terminalroot.com/tags#git), a [compiler](https://terminalroot.com/tags#gcc) and the command [make]( https://terminalroot.com/tags#make), to do this run:

{% highlight bash %}
git clone https://github.com/margual56/Markdown-CLI
cd Markdown-CLI/
makeup
sudo install -v bin/MarkdownCLI /usr/local/bin/markdown-cli
{% endhighlight %}

---

# Usage
Using Markdown-CLI is very simple. If it is still in the cloned repository, just use the `testing.md` example itself for this, example:
{% highlight bash %}
bin/MarkdownCLI -i testing.md index.html
{% endhighlight %}

Now just open it in the browser and see the result:
> In distros [GNU/LInux](https://terminalroot.com/tags#gnulinux)

{% highlight bash %}
gio open index.html
{% endhighlight %}

If you installed it on the system, run:
{% highlight bash %}
markdown-cli -i testing.md index.html
{% endhighlight %}

---

For more information, visit the [official repository on GitHub](https://github.com/margual56/Markdown-CLI)

