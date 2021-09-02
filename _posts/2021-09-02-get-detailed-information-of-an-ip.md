---
layout: post
title: "Get detailed information of an IP"
date: 2021-09-02 01:34:02
image: '/assets/img/commands/ipinfo.jpg'
description: 'Country, state, city, if you have a proxy and among others.'
featured-img: ../commands/ipinfo.jpg
tags:
- commands
- network
---

![Get detailed information of an IP](/assets/img/commands/ipinfo.jpg)

ipinfo is the official CLI tool for the IPinfo.io IP address API, allowing you to:

+ Look up IP details in bulk or one by one.
+ Look up the ASN details.
+ Summarize details for up to 1000 IPs at a time.
+ Open a map of IP locations for any set of IPs.
+ Filter the IPv4 and IPv6 addresses from any entry.
+ Print IP lists for any CIDR or IP range.
+ And more!

# Installation

You will need to have the [Go programming language](https://golang.org/) installed on your system in addition to [Git](https://en.terminalroot.com.br/top-5-best-git-clients-for-linux-mac-and-windows/).

After that run the commands:

{% highlight bash %}
git clone https://github.com/ipinfo/cli ipinfo-cli
cd ipinfo-cli/
go build -o ~ ./ipinfo
cd
sudo install -v ipinfo .local/bin/
{% endhighlight %}
> Then remove the cloned directory: *ipinfo-cli*.


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Use
To get a `help` of the parameters, just run the ipinfo command, something like this will appear:

{% highlight bash %}
Usage: ipinfo <cmd> [<opts>] [<args>]

Commands:
  <ip>        look up details for an IP address, e.g. 8.8.8.8.
  <asn>       look up details for an ASN, e.g. AS123 or as123.
  myip        get details for your IP.
  bulk        get details for multiple IPs in bulk.
  summarize   get summarized data for a group of IPs.
...
{% endhighlight %}

To get data from your own IP, run:

{% highlight bash %}
ipinfo myip
{% endhighlight %}

Find out the IP of a given URL and get detailed information with ipinfo:
> Example, get data from the URL: <https://en.terminalroot.com.br/>

{% highlight bash %}
ipinfo $(ping -c1 en.terminalroot.com.br | sed -n '1p' | sed 's/.* (//;s/) .*//')
{% endhighlight %}

Output in JSON format

{% highlight bash %}
ipinfo myip --json
{% endhighlight %}

The parameters must be indicated at the end of the command.

See an example GIF usage:


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![ipinfo](https://terminalroot.com.br/assets/img/comandos/ipinfo.gif)

For more information access the links below:
+ <https://github.com/ipinfo/cli>
+ <https://ipinfo.io/>



    
