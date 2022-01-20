---
layout: post
title: "Customize your prompt with Starship written in Rust"
date: 2022-01-20 06:49:47
image: '/assets/img/rust/starship.jpg'
description: 'Minimalism and speed!'
tags:
- rust
- shellscript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Starship** is a minimalistic, lightning-fast and infinitely customizable prompt for any shell!

# Characteristics
+ Customizable: Configure every aspect of your prompt.
+ Universal: works in any shell, on any operating system.
+ Smart: Shows relevant information quickly.
+ Rich in features: support for all your favorite tools.
+ Easy: quick to install - get started in minutes.

# How to install
First of all you will need to have the [Fira Code font installed](https://github.com/terroo/fonts). Then just run this command in your terminal:
{% highlight bash %}
sh -c "$(curl -fsSL https://starship.rs/install.sh)"
{% endhighlight %}

The output will be something like:


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![Starship installation](/assets/img/rust/startship-installation.jpg)
> Note that `sudo` password was requested

After that, as in the same output of the image above, just run the command:
{% highlight bash %}
eval "$(starship init [YOUR SHELL NAME])"
{% endhighlight %}

Example for ZSH:
{% highlight bash %}
eval "$(starship init zsh)"
{% endhighlight %}

To load Starship automatically when opening the shell enter in your shell's configuration file, example for `~/.zshrc`:
{% highlight bash %}
echo 'eval "$(starship init zsh)"' >> ~/.zshrc
{% endhighlight %}

It is available for [Bash](https://terminalroot.com/tags#shellscript), FISH, [PowerShell](https://terminalroot.com/how-to-install-powershell-on-ubuntu-and-getting-started/), Ion, TCSH and others.

If you want to configure the prompt as you wish, see [this link](https://starship.rs/config/)

Below is an example gif of [Starship](https://starship.rs/)

![Starship GIF](/assets/img/rust/startship.gif)

