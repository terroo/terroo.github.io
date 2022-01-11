---
layout: post
title: "Customize your prompt easily"
date: 2022-01-11 14:44:52
image: '/assets/img/terminal/bash-prompt-generator.jpg'
description: 'An online service that makes it easy to customize your PS1.'
icon: 'ion:terminal-sharp'
iconname: 'Terminal'
tags:
- terminal
- bash
- shellscript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Customizing the prompt is one of the things all geeks love, making it the way you want goes beyond organization!

We know that there are several services that do this for us and we have already published several articles about it, such as:
+ [Meet and Install Oh My Bash!](https://terminalroot.com/discover-and-install-oh-my-bash/)
+ [6 Very Interesting Tips for Your Linux Shell](https://terminalroot.com/6-very-interesting-tips-for-your-linux-shell/)

But things are getting easier and easier, now you can customize your prompt online, that's right!

I'm referring to the **Bash Prompt Generator** .

It is an online service where you can choose with just clicks which items you want to be displayed in your `$PS1` variable.


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

For example, if you want your prompt to display:
+ Date
+ Hour(24H)
+ Bash version
+ command number

Just click on the tags that will be located on the left side of the screen on the site and copy the **Output**, for example:
{% highlight bash %}
PS1='\[\e[0m\]\d\[\e[0m\]\t\[\e[0m\]\v\[\e[0m\] '
{% endhighlight %}
> Example of what it will look like: ** Thu May 1309:26:005.0 **

And then paste it in your terminal and to last the customization, as we already know, just include it in your `~/.bashrc`:
{% highlight bash %}
echo "export PS1='\[\e[0m\]\d\[\e[0m\]\t\[\e[0m\]\v\[\e[0m\] '" >> ~/ .bashrc
{% endhighlight %}

You can even include your PS1 and customize right there!

The website is: <https://scriptim.github.io/bash-prompt-generator/>


