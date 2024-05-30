---
layout: post
title: "Easily Create Stylish Letters for Terminal"
date: 2024-05-30 12:03:06
image: '/assets/img/go/tdfgo.jpg'
description: "🗞️ A command line application made with Golang"
tags:
- go
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**tdfgo**, initials for "**T**he**D**raw **F**ont renderer in **Go**", that is, it is a: Stylish font renderer in [terminal](https://terminalroot.com/tags#terminal) made with the programming language: [Go](https://terminalroot.com/tags#go)

This utility was inspired by the CLI utility [tdfiglet](https://github.com/tat3r/tdfiglet).

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

# Installation
To install, you need to have the language [Go](https://terminalroot.com/tags#go) installed on your system and [Git](https://terminalroot.com/tags#git).

After that, simply clone and compile with the commands below:

{% highlight bash %}
git clone https://github.com/digitallyserviced/tdfgo.git
cd tdfgo
go build
{% endhighlight %}

Once finished there will be a binary in the same directory you compiled. If you want to test all fonts with the text you choose, for example *word/phrase*: "**Terminal Root**", run:

{% highlight bash %}
./tdfgo/tdfgo fonts -vp -t "Terminal Root" | less
{% endhighlight %}
> `less` is for pagination, as there are many fonts and styles. Keep pressing [Enter] to display them one at a time!

If you want to install the `tdfgo` command on your system, run:
> Still inside the directory you compiled.

{% highlight bash %}
sudo install -v tdfgo /usr/local/bin/
{% endhighlight %}

You can now remove the cloned repository and also remove the `go/` folder that was automatically created in your home directory (with `sudo` or `root`):

{% highlight bash %}
cd ..
rm -rf tdfgo/
sudo rm -rf go/
{% endhighlight %}

---

For more information use `help`:

{% highlight bash %}
tdfgo --help
{% endhighlight %}

And access the [repository on GitHub](https://github.com/digitallyserviced/tdfgo).
