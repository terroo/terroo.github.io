---
layout: post
title: "Tree++, a tree command with icons"
date: 2025-04-10 15:41:28
image: '/assets/img/commands/tree++.png'
description: "🚀 It's another tree option, but with icons =)"
tags:
- cli
- commands
- cpp
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

I created another command with Modern [C++](https://terminalroot.com/tags#cpp) just to pass the time. It's another tree option, but with icons =)

---

## 🌳 Build ans install
{% highlight bash %}
git clone https://github.com/terroo/treepp
cmake -B build .
cmake --build build/
sudo cmake --install build/
{% endhighlight %}

---

## ✍️ Using
> Examples
{% highlight bash %}
tree++ .
tree++ /path/to/dir
# or
tree++ /path/to/dir/
{% endhighlight %}
> The slash at the end does not depend on.

---

## 🎄 Default `tree`
If you want it to be your default `tree` command, run:

{% highlight bash %}
sudo apt remove tree
sudo ln -s /usr/local/bin/tree++ /usr/local/bin/tree
{% endhighlight %}

---

## 📝 ToDo
- [ ]  Add colors! =)

