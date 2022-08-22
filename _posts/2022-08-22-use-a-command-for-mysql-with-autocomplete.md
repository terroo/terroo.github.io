---
layout: post
title: "Use a Command for MySQL with Autocomplete"
date: 2022-08-22 08:49:12
image: '/assets/img/mysql/mycli.jpg'
description: 'Practical and with syntax highlighting!'
tags:
- mysql
- mariadb
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Who never forgot reserved names from [MySQL/MariaDB](https://terminalroot.com/tags#mysql) or typed them incorrectly? To significantly lessen these problems, there is the `mycli` command.

**mycli** is a terminal client for [MySQL](https://terminalroot.com/tags#mysql) with autocomplete and syntax highlighting.

---

# Installation
The fastest and most practical way to install MyCLI is using [pip](https://pypi.org/project/pip/), remember to have it installed on your system first. To do this, just install it as follows:

{% highlight bash %}
pip3 install --user mycli
{% endhighlight %}
> This will install only for your user, and you will need to have the path `${HOME}/.local/bin` in your `${PATH}` .

Other ways and for other operating systems it would be:

{% highlight bash %}
brew update && brew install mycli # macOS
sudo apt install mycli # Debian, Ubuntu, Mint and derivatives
{% endhighlight %}

---

# Usage
After properly installed, you can now log into your MySQL server, with the following command similar to `mysql`:
{% highlight bash %}
mycli -u YOUR_USER -p "YOUR_PASSWORD"
{% endhighlight %}

If you type the SQL commands in uppercase or lowercase it will autocomplete anyway. It also doesn't need a semicolon (`;`) to end commands

![MyCLI](https://github.com/dbcli/mycli/raw/main/screenshots/main.gif)

For more information use the `--help` argument/parameter and refer to the [GitHub repository](https://github.com/dbcli/mycli) .
