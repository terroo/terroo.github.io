---
layout: post
title: "RhaiScript, a scripting language written in Rust"
date: 2022-02-25 13:36:26
image: '/assets/img/rust/rhai.jpg'
description: 'Provides a safe and easy way to add scripts to any application.'
tags:
- rust
- programming
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Rhai is simple and similar to JavaScript+Rust with dynamic typing. According to tests performed, it proved to be quite efficient, achieving 1 million iterations in 0.3 seconds on a single-core 2.3 GHz Linux VM.

It has tight integration with native Rust functions and types, including getters/setters, methods, and indexers.

---

# Installation
You will first need the following dependencies:
+ [Git](https://terminalroot.com/tags#git)
+ [Rust](https://terminalroot.com/tags#rust)
+ [Cargo](https://rustup.rs/)

After that, proceed as follows:

Clone the repository:
{% highlight sh %}
git clone https://github.com/rhaiscript/rhai
{% endhighlight %}

Enter the repository and build:
> Before that make sure you have `cargo` in your `$PATH`, example for [Bash](https://terminalroot.com/tags#bash):
{% highlight sh %}
echo 'export PATH="${PATH}:${HOME}/.cargo/bin"' >> ~/.bashrc
source ~/.bashrc
execute $SHELL
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

And then run:
{% highlight sh %}
cd rhai
charge install --path . --bin rhai-run
{% endhighlight %}

After that you can go out and remove the directory:
{% highlight sh %}
cd ..
rm -rf rhai
{% endhighlight %}

---

# Hello, RhaiScript!
To test a **Hello. World!** create a file with the extension `.rhai`, example: `vim hello.rhai`

And add the code below:
{% highlight lol %}
print("Hello, Rhai!");
{% endhighlight %}

To run it use the `rhai-run` command:
{% highlight sh %}
rhai-run hello.rhai
{% endhighlight %}

For more information visit [here](https://rhai.rs/book) .

---

# Useful links
+ [Official Page](https://rhai.rs/)
+ [Repository on GitHub](https://github.com/rhaiscript/rhai)
+ [Documentation](https://rhai.rs/book)
