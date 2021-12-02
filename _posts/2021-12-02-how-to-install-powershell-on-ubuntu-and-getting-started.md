---
layout: post
title: "How to Install PowerShell on Ubuntu and Getting Started"
date: 2021-12-02 14:11:15
image: '/assets/img/terminal/powershell.jpg'
description: 'In addition to a tip on how to proceed with any other Linux distribution.'
featured-img: ../terminal/powershell.jpg
tags:
- shellscript
- terminal
---

![How to Install PowerShell on Ubuntu and Getting Started](/assets/img/terminal/powershell.jpg)

**PowerShell** is a task-based command-line [shell](https://en.terminalroot.com.br/shell-an-object-oriented-shell-script/) and scripting language developed in **.NET**. Initially just a Windows component.

You can install it on any [distribution](https://en.terminalroot.com.br/discover-the-openmandriva-distro/) [Linux](https://en.terminalroot.com.br/introducing-my-linux-desktop-settings-commands-and-programs/) . In this article we'll look at how to do this on Ubuntu **21.04** or higher. And the first steps, plus tips for other distros.

---

# Installation
Run the commands below in that sequence:

{% highlight sh %}
sudo apt update
sudo apt install -y wget apt-transport-https software-properties-common
wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update && sudo apt upgrade
sudo apt install powershell
{% endhighlight %}


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

# Use
Using PowerShell directly from the terminal:
{% highlight sh %}
pwsh
{% endhighlight %}

Will appear:
{% highlight sh %}
PowerShell 7.2.0
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.
{% endhighlight %}

To exit press:
{% highlight sh %}
exit
{% endhighlight %}


<!-- RETANGULO LARGO 2 -->
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

---

# Creating a basic script
Let's run a [Hello, World!](https://en.terminalroot.com.br/hello-world-in-25-programming-languages-proposal-docs-and-links/).

Create the file and insert the content into it:
> `nvim hello-world.pwsh`
{% highlight sh %}
Write-Host 'Hello, World!'
{% endhighlight %}

Rotate:
{% highlight sh %}
pwsh hello-world.pwsh
{% endhighlight %}

Or simply:
> `nvim hello-world.pwsh`

{% highlight sh %}
#!/usr/bin/env pwsh
Write-Host 'Hello, World!'
{% endhighlight %}

Give execution permission and run:
{% highlight sh %}
chmod +x hello-world.pwsh
./hello-world.pwsh
{% endhighlight %}

For other distros see the [here](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2) procedure.

