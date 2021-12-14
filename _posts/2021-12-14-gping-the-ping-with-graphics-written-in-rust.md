---
layout: post
title: "gping, the ping with graphics, written in Rust"
date: 2021-12-14 10:41:15
image: '/assets/img/commands/gping.jpg'
description: 'Another modern and stylish command!'
featured-img: ../commands/gping.jpg
tags:
- commands
- terminal
---

![gping, the ping with graphics, written in Rust](/assets/img/commands/gping.jpg)

---

Many tech professionals, system administrators or not, use (or have used) almost frequently the `ping` command for several purposes: test connectivity, connection speed, get ip address and so on.

The good news is that we can enjoy the [new generation of commands](https://terminalroot.com.br/2021/08/uma-lista-com-30-alternativas-modernas-para-os-comandos-do-unix .html) and that even `ping` has its successor which is **gping** which outputs with graphics, for a better idea of ​​possible speed variations, and was written in [Rust](https:// terminalroot.com.br/tags#rust) .

---

# Installation
`gping` is already available in most repositories and/or with some basic repository tweaking. But the way I did it and recommend it is using the [position](https://terminalroot.com.br/2021/07/como-criei-meu-primeiro-programa-em-rust.html), use the command below :

{% highlight sh %}
cargo install gping
{% endhighlight %}
> You need to have the local [position](https://rustup.rs/) directory in your `$PATH`, eg:
>
> `echo 'export PATH="${PATH}:${HOME}/.cargo/bin"' >> ~/.bashrc && source ~/.bashrc`

- On Debian, just add `azlux` to your APT list, and install it like this:
{% highlight sh %}
echo "deb http://packages.azlux.fr/debian/buster main" | sudo tee /etc/apt/sources.list.d/azlux.list
wget -qO - https://azlux.fr/repo.gpg.key | sudo apt-key add -
sudo apt update
sudo apt install gping
{% endhighlight %}

- In [Gentoo](https://terminalroot.com.br/tags#gentoo) just add a simple [overlay](https://en.terminalroot.com.br/how-to-install-programs-via -layman-in-gentoo/):
{% highlight sh %}
sudo eselect repository enable dm9pZCAq
sudo emerge --sync dm9pZCAq
sudo emerges net-misc/gping::dm9pZCAq
{% endhighlight %}

- For other systems/distro, use:
  - `brew install gping` for [macOS](https://terminalroot.com.br/tags#macos)
  - `sudo port install gping` macPorts
  - `brew install orf/brew/gping` [Linux Homebrew](https://terminalroot.com.br/2021/07/homebrew-o-gerenciador-de-pacotes-do-macos-no-gnu-linux.html )
  - `scoop install gping` or `choco install gping` for [Windows](https://terminalroot.com.br/tags#windows)


<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2838251107855362"
     crossorigin="anonymous"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2838251107855362"
     data-ad-slot="5351066970"
     data-ad-format="auto"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Use
You can use with a single IP `gping [ip number]` or test performance on many IPs simultaneously. Example, now Terminal Root also owns the domain <https://terminalroot.com> , testing connectivity with address **.br** and **.com** and comparing both with <https:// google.com> would be the command:

{% highlight sh %}
gping terminalroot.com terminalroot.com.br google.com
{% endhighlight %}
The output is precisely the call image of this article.

Show, right?!

For more options use `help`, there will be some parameters for **IPv6** and among others:

{% highlight sh %}
$gping --help
gping 1.2.6
Ping, but with a graph.

USAGE:
    gping [FLAGS] [OPTIONS] <hosts-or-commands>...

FLAGS:
        --cmd Graph the execution time for a list of commands rather than pinging hosts
    -h, --help Prints help information
    -4 Solves ping targets to IPv4 address
    -6 Resolves ping targets to IPv6 address
    -s, --simple-graphics Uses dot characters instead of braille
    -V, --version Prints version information

OPTIONS:
    -b, --buffer <buffer> Determines the number of seconds to display in the graph. [default: 30]
    -n, --watch-interval <watch-interval> Watch interval seconds (provide partial seconds like '0.5'). default for
                                             ping is 0.2, defaults to cmd is 0.5.

ARGS:
    <hosts-or-commands>... Hosts or IPs to ping, or commands to run if --cmd is provided.
{% endhighlight %}

---

# Useful links
+ <https://github.com/orf/gping>
+ <https://en.wikipedia.org/wiki/Ping_(networking_utility)>
+ <https://github.com/iputils/iputils>
+ <https://pt.wikipedia.org/wiki/Ping>
