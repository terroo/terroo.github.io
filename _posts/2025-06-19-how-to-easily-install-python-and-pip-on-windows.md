---
layout: post
title: "How to Easily Install Python and PIP on Windows"
date: 2025-06-19 20:55:19
image: '/assets/img/windows/python-windows.jpg'
description: "🐍 The latest version!"
tags:
- windows
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

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

The quickest and easiest way to install [Python](https://terminalroot.com/tags#python) on [Windows](https://terminalroot.com/tags#windows) is by using [WinGet](https://winstall.app/apps/Python.Python.3.13).  

Open [PowerShell](https://terminalroot.com/2025/05/personalize-seu-powershell-like-a-pro.html) and run:  

{% highlight powershell %}
winget install -e --id Python.Python.3.11 --scope machine  
{% endhighlight %}  
> If there are newer versions after the recording date of this video: <https://winstall.app/apps?q=tags:%20python3>  

Close PowerShell, reopen it, and run the command:  
{% highlight bash %}
python --version  
{% endhighlight %}  
> If the version appears, everything is working correctly!  

While you're at it, also install [PIP](https://winstall.app/apps/LionelJouin.PiP-Tool):  

**PIP** is a package manager for Python—with it, we can install everything we need for Python:  

{% highlight powershell %}
winget install --id=LionelJouin.PiP-Tool -e  
{% endhighlight %}

Close PowerShell, reopen it, and run the command:  
{% highlight bash %}
pip --version  
{% endhighlight %}
> If the version appears, everything is working correctly!
