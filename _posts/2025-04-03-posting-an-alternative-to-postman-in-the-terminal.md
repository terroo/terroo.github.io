---
layout: post
title: "Posting: An Alternative to Postman in the Terminal"
date: 2025-04-03 18:53:43
image: '/assets/img/python/posting.jpg'
description: "🚀 Useful for developers who prefer agility and simplicity, while maintaining the flexibility needed to interact with APIs and web services."
tags:
- web
- python
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Posting** is a [command line](https://terminalroot.com/tags#commands) tool for making *HTTP* requests, being a lightweight alternative to [Postman](https://terminalroot.com/drogon-cpp-the-fastest-web-framework-in-the-world/). It allows you to send requests intuitively, without the need for a graphical interface, making it ideal for developers who prefer to work directly in the terminal.


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

--

## Installation
Installing Posting is simple and can be done on different operating systems:

### [Windows](https://terminalroot.com/tags#windows)
Make sure you have [Python 3](https://terminalroot.com/tags#python) installed. In the terminal (cmd or [PowerShell](https://terminalroot.com/tags#powershell)), run:
{% highlight sh %}
pip install posting
{% endhighlight %}

### [macOS](https://terminalroot.com/tags#macos)
Install with [Homebrew](https://terminalroot.com.br/2021/07/homebrew-o-gerenciador-de-pacotes-do-macos-no-gnu-linux.html):
{% highlight sh %}
brew install posting
{% endhighlight %}

### [Ubuntu](https://terminalroot.com/tags#ubuntu)
1. Install with the `pip` manager:
{% highlight sh %}
pip install posting
{% endhighlight %}

Confirm the installation:
> In the [operating system](https://terminalroot.com/tags#so) that you installed

{% highlight sh %}
posting --help
{% endhighlight %}

---

## Usage Example
After installation, Posting can be used to quickly make HTTP requests.

### Making a GET request
{% highlight sh %}
posting get https://jsonplaceholder.typicode.com/posts/1
{% endhighlight %}

### Sending a POST request with [JSON](https://terminalroot.com/tags#json)
{% highlight sh %}
posting post https://jsonplaceholder.typicode.com/posts -d '{"title": "foo", "body": "bar", "userId": 1}' -H "Content-Type: application/json"
{% endhighlight %}

### Adding custom headers
{% highlight sh %}
posting get https://api.example.com/data -H "Authorization: Bearer SEU_TOKEN"
{% endhighlight %}

---

Posting is an efficient tool for making HTTP requests directly from the terminal, dispensing with heavy graphical interfaces.

For more information, visit the [official repository](https://github.com/darrenburns/posting)

