---
layout: post
title: "List folders with icons with this Go cli"
date: 2025-04-08 10:11:26
image: '/assets/img/go/gtree.jpg'
description: "🚀 Another interesting application made in Go."
tags:
- go
- cli
- command
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[gtree](https://github.com/kitagry/gtree) is a command similar to the `tree` command that works on any [operating system](https://terminalroot.com/tags#so), written in [Go](https://terminalroot.com/tags#go) and that [displays file icons](https://terminalroot.com/install-a-ls-command-that-shows-file-icons/).

---

## Installation
First you need to have the [Go](https://terminalroot.com/tags#series-go) programming language installed on your system, examples of how to install Go:

[Windows](https://terminalroot.com/tags#windows)(with [WinGet](https://winget.run/pkg/GoLang/Go.1.19) in [PowerShell](https://terminalroot.com/tags#powershell)):
{% highlight powershell %}
winget install -e --id GoLang.Go.1.19
{% endhighlight %}

[macOS](https://terminalroot.com/tags#macos)(with [Brew](https://formulaeew.sh/formula/go)):
{% highlight bash %}
brew install go
{% endhighlight %}

[Ubuntu](https://terminalroot.com/tags#ubuntu)(with APT):
{% highlight bash %}
sudo apt install golang-go
{% endhighlight %}

### Also install the [Terminal Root Fonts](https://github.com/terroo/fonts) so that the icons are displayed correctly.


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

Now just clone the repository and run the commands below:
{% highlight bash %}
git clone https://github.com/kitagry/gtree
cd gtree
go get github.com/kitagry/gtree
go build .
{% endhighlight %}

And move it to a folder on your system, for example:
> Example on UNIX-like systems.

{% highlight bash %}
sudo install -v gtree /usr/local/bin/
{% endhighlight %}
> It's good to remove the files and folders made to build, example:
{% highlight bash %}
cd ..
rm -rf gtree/
sudo rm -rf go/
{% endhighlight %}

And test:
{% highlight bash %}
gtree --version
gtree .
{% endhighlight %}

**IMPORTANT TIP:** Avoid using the trailing slash, example:
Instead of:
{% highlight bash %}
gtree mydir/
{% endhighlight %}

Use it like this:
{% highlight bash %}
gtree mydir
{% endhighlight %}

It doesn't display the files in the folders when there is a slash`/` at the end.

For more information, access the [repository on GitHub](https://github.com/kitagry/gtree) and use the help: `gtree --help`.

---

## See also:
### [Install an ls that shows file icons](https://terminalroot.com/install-a-ls-command-that-shows-file-icons/)
+ <https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tree>
+ <https://en.wikipedia.org/wiki/Tree_(command)>
+ <https://github.com/kddnewton/tree>

