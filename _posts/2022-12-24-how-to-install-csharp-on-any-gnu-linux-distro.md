---
layout: post
title: "How to Install C# on Any GNU/Linux Distro"
date: 2022-12-24 19:29:06
image: '/assets/img/csharp/csharp.jpg'
description: 'CSharp is a strongly typed, multiparadigm programming language developed by Microsoft as part of the .NET platform.'
tags:
- csharp
- gnu
- windows
- linux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[C#](https://terminalroot.com/tags#csharp) is a strong-type, multiparadigm programming language developed by Microsoft as part of the .NET platform.

Its syntax is object-oriented and was based on [C++](https://terminalroot.com/tags#cpp), but it includes many influences from other programming languages, such as Object Pascal and, mainly, [Java]( https://terminalroot.com/tags#java), the latter being its biggest competitor.

In this article we will see how to install on any [Distribution](https://terminalroot.com/tags#distros) [GNU](https://terminalroot.com/tags#gnu)/[Linux](https: //terminalroot.com/tags#linux) .

---

# 01. Download the [Bash](https://terminalroot.com/tags#bash) installation script

With [wget](https://www.gnu.org/software/wget/)
{% highlight bash %}
wget https://dot.net/v1/dotnet-install.sh
{% endhighlight %}

or with [cURL](https://terminalroot.com/12-tips-for-you-to-use-commando-curl-as-a-ninja/)
{% highlight bash %}
curl -LO https://dot.net/v1/dotnet-install.sh
{% endhighlight %}

---

# 02. Give execute permission with `sudo` or `root`
{% highlight bash %}
sudo chmod +x ./dotnet-install.sh
{% endhighlight %}

---

# 03. Run the script to install the latest version
{% highlight bash %}
./dotnet-install.sh --version latest
{% endhighlight %}

---

# 04. Enable CSharp for all users
> Although it's optional, it's good to make the command global, this will be good for many circumstances!

{% highlight bash %}
sudo mv ./.dotnet/ /opt/dotnet
{% endhighlight %}

---

# 05. Enter the binary path to your `$PATH` and for CSharp to find the root document
Run the three commands below in order:
{% highlight bash %}
echo -e '\nexport DOTNET_ROOT=/opt/dotnet' | sudo tee -a /etc/profile
echo 'export PATH=$PATH:/opt/dotnet:/opt/dotnet/tools' | sudo tee -a /etc/profile
source /etc/profile
{% endhighlight %}

---

# 06. Test the `dotnet` command
{% highlight bash %}
dotnet --version
dotnet --help
{% endhighlight %}

---

# 07. Create a test [Hello, World!](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/), and run it!
Create a new project
{% highlight bash %}
dotnet new console -o HelloWorld
{% endhighlight %}

Enter the project, compile and run:
{% highlight bash %}
cd HelloWorld
dotnet build
dotnet run
{% endhighlight %}

---

# Useful links
+ <https://terminalroot.com/how-to-install-csharp-on-ubuntu-and-getting-started/>
+ <https://github.com/terroo/langs-test-loop/blob/main/round2/main.cs>
+ <https://learn.microsoft.com/en-us/dotnet/core/install/linux-scripted-manual>
+ <https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu>
+ <https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/tutorials/>
+ <https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial/intro>
+ <https://docs.microsoft.com/pt-br/dotnet/csharp/>

