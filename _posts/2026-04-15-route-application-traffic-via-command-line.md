---
layout: post
title: "Route application traffic via command line"
date: 2026-04-15 22:03:23
image: '/assets/img/go/tori-cli.jpg'
description: "A tool designed for use with the Tor network."
tags:
- network
- go
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**toricli.sh** is a tool written in [Go](https://terminalroot.com/tags#go), focused on making it easy to route application traffic via the command line. The goal is to simplify the use of anonymization on Linux without relying on complex configurations.

It falls into the same category as tools like `torsocks`, but with a more direct and automated approach.

---

## Installation
> For [Windows](https://terminalroot.com/tags#windows), use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

{% highlight bash %}
# systemd
curl -fsSL https://raw.githubusercontent.com/thobiasn/tori-cli/main/deploy/install.sh | sudo sh

# Arch
yay -S tori-cli-bin

# macOS
curl -fsSL https://raw.githubusercontent.com/thobiasn/tori-cli/main/deploy/install.sh | sh -s -- --client
{% endhighlight %}

Docker:
{% highlight bash %}
docker run -d --name tori \
  --restart unless-stopped \
  --pid host \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  -v /run/tori:/run/tori \
  -v tori-data:/var/lib/tori \
  -v ./config.toml:/etc/tori/config.toml:ro \
  ghcr.io/thobiasn/tori-cli:latest
{% endhighlight %}

## Usage example

{% endhighlight %}
toricli curl example.com
{% endhighlight %}

And the traffic is anonymized.

---

For more information, visit: <https://toricli.sh/>.
