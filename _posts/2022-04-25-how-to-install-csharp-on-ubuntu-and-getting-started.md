---
layout: post
title: "How to Install C# on Ubuntu 22.04 and Getting Started"
date: 2022-04-25 17:44:07
image: '/assets/img/csharp/csharp.jpg'
description: 'C Sharp is a strong-typed, multi-paradigm programming language developed by Microsoft as part of the .NET platform.'
tags:
- csharp
- ubuntu
- windows
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[C#](https://docs.microsoft.com/en-US/dotnet/csharp/) is a strong-typed, multi-paradigm programming language developed by Microsoft as part of the **.NET** platform.

Its syntax is object-oriented and was based on [C++](https://terminalroot.com/tags#cpp) but includes many influences from other programming languages, such as Object Pascal and, mainly, [Java](https://terminalroot.com/tags#java).

In this article we will see how to install on [Ubuntu](https://terminalroot.com/tags#ubuntu) **22.04**, however, you can adapt the instructions for any other version or even another distribution.

---

# Installation

Before installing, register the keys:

{% highlight sh %}
wget https://packages.microsoft.com/config/ubuntu/21.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
{% endhighlight %}

Now install the key:
> **Tip**: *execute one command at a time, if your Ubuntu version is different, find **22.04** for the version corresponding to yours. See [here](https://packages.microsoft.com/config/ubuntu/22.04/) all available versions*.

{% highlight sh %}
sudo apt-get install -y gpg
wget -O - https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o microsoft.asc.gpg
sudo mv microsoft.asc.gpg /etc/apt/trusted.gpg.d/
wget https://packages.microsoft.com/config/ubuntu/22.04/prod.list
sudo mv prod.list /etc/apt/sources.list.d/microsoft-prod.list
sudo chown root:root /etc/apt/trusted.gpg.d/microsoft.asc.gpg
sudo chown root:root /etc/apt/sources.list.d/microsoft-prod.list
{% endhighlight %}

Now install the SDK, *runtime* will also be installed automatically

{% highlight sh %}
sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-6.0
{% endhighlight %}

You can now clean the file: `packages-microsoft-prod.deb`

{% highlight sh %}
rm packages-microsoft-prod.deb
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

# Testing a `Hello, World!`

### 1. Create a project

{% highlight sh %}
dotnet new console -o MyApp
{% endhighlight %}
> If you want to specify the version, use: `dotnet new console -o MyApp -f net6.0`

### 2. Enter the project:

{% highlight sh %}
cd MyApp
{% endhighlight %}

### 3. Edit the `Program.cs` file
Change the output as you wish, example:

{% highlight csharp %}
Console.WriteLine("Hello, C Sharp via Ubuntu 22.04!");
{% endhighlight %}

Now run it at runtime:
{% highlight sh %}
dotnet run
{% endhighlight %}

Note that it will take a while to run, as it was compiled and then executed. If you want to separate tasks:


<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

First build:
{% highlight sh %}
dotnet build
{% endhighlight %}

The likely and similar output will be:
{% highlight sh %}
Microsoft(R) Build Engine version 17.1.1+a02f73656 for .NET
Copyright (C) Microsoft Corporation. All rights reserved.

  Determining the projects to restore...
  All projects are up to date for restoration.
  MyApp -> /home/marcos/MyApp/bin/Debug/net6.0/MyApp.dll

Compile successfully.
    0 Warning(s)
    0 Error(s)

Elapsed Time 00:00:02.30
{% endhighlight %}

Now just run the binary:
{% highlight sh %}
./bin/Debug/net6.0/MyApp
{% endhighlight %}

---

# See too:
## [How to Install PowerShell on Ubuntu and First Steps](https://terminalroot.com/how-to-install-powershell-on-ubuntu-and-getting-started/)

---

# Useful links
+ <https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu>
+ <https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/tutorials/>
+ <https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial/intro>
+ <https://docs.microsoft.com/pt-br/dotnet/csharp/>

