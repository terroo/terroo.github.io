---
layout: post
title: "Parse and edit JSON files via TUI with jqp"
date: 2023-10-21 22:04:32
image: '/assets/img/go/jqp.jpg'
description: 'Made with Golang!'
tags:
- go
- json
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**jpq** is a [TUI](https://terminalroot.com/tags#tui) utility, written in [Golang](https://terminalroot.com/tags#go) for editing and view [JSON](https://terminalroot.com/tags#json) files, in short it is a TUI for the [jq](https://jqlang.github.io/jq/) command.

We have already published a similar utility written in [C++](https://terminalroot.com/tags#cpp), if you are interested in also learning about it, [click here](https://terminalroot.com/view-json-interactively-from-the-terminal/) to learn more!

# Installation
First of all you will need [Go](https://go.dev/) installed on your system.

You can install using some package managers for some operating systems, such as:
{% highlight bash %}
brew install noahgorstein/tap/jqp // Homebrew
sudo port install jqp // Ports
yay -S jqp-bin // AUR
{% endhighlight %}

But, regardless of the operating system, you can clone, build and install, to do so, run the commands below:
{% highlight bash %}
git clone https://github.com/noahgorstein/jqp
cd jqp/
go build
mkdir -p ~/.local/bin
cp ./jqp ~/.local/bin/
echo 'export PATH="${PATH}:${HOME}/.local/bin"'
exec shell
CD ..
rm -rf jqp/
{% endhighlight %}
> Then it is good to remove the downloaded repository: `cd .. && rm -rf jqp` and also the `go/` folder that will be created: `rm -rf go/`.

---

# Usage
Using **jqp** is very simple, just run the `jqp` command, use the `-f` or `--file` parameter and indicate the JSON file as an argument, example:

> `example.json`
{% highlight json %}
{
   "name":"John",
   "age":30,
   "car":null
}
{% endhighlight %}

Opening the file with **jqp**:
{% highlight bash %}
jqp -f example.json
{% endhighlight %}

---

For more information use the help:
{% highlight bash %}
jqp --help
{% endhighlight %}
And access the repository: <https://github.com/noahgorstein/jqp>.

