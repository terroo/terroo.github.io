---
layout: post
title: "Meet RustPython, a Python written in Rust"
date: 2022-03-16 17:32:19
image: '/assets/img/rust/rustpython.jpg'
description: "It's Rust reinventing all possible wheels!"
tags:
- rust
- python
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

With this *secure memory* talk the programmers [Rust](https://terminalroot.com/tags#rust) are reinventing all possible wheels!

Now it's [Python](https://terminalroot.com/tags#python) turn! It's the snake falling into the crab's mouth! 😃

Jokes aside, let's see how to install this project!

---

# Installation

Make sure you already have [Rust](https://terminalroot.com/tags#rust) and [Cargo](https://rustup.rs/) installed on your system:
{% highlight sh %}
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
{% endhighlight %}

For an easier way to install, add the local `~/.cargo` directory to your `$PATH` variable:
> In this case to `.bashrc`
{% highlight sh %}
echo 'export PATH="${PATH}:${HOME}/.cargo/bin"' >> ~/.bashrc
source ~/.bashrc
execute $SHELL
{% endhighlight %}

Now, to install just run this command below:
{% highlight sh %}
cargo install --git https://github.com/RustPython/RustPython
{% endhighlight %}

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

RustPython will be automatically available in your [Shell](https://terminalroot.com/tags#shell) and then just test it:

{% highlight sh %}
rustpython --version
{% endhighlight %}

Test a [Python](https://terminalroot.com/tags#python) script, example:

> `vim script.py`
{% highlight python %}
def terminalroot():
    var = "Hello, I'm Python written in Rust"
    print(var)

terminalroot()
{% endhighlight %}

And run:
{% highlight sh %}
rustpython script.py
{% endhighlight %}
> Likely output: `Hello, I'm Python written in Rust`

You can also run it in a subshell:
{% highlight sh %}
user@host ~ $ rustpython
Welcome to the magnificent Rust Python 0.1.2 interpreter 😱 🖖
>>>>> print("Running in subshell!")
Running in the subshell!
>>>>> exit()
user@host ~ $
{% endhighlight %}

For more information visit the [RustPython repository](https://github.com/RustPython/RustPython) .

<!--
The crab with the safe memory chat now wants to wrap the snake! huahauhua
-->

