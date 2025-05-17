---
layout: post
title: "Customize Your PowerShell Like a Pro"
date: 2025-05-17 15:32:06
image: '/assets/img/windows/posh/custom-powershell-thumb.jpg'
description: "🐎 A custom prompt and more icon tips."
tags:
- powershell
- windows
- shell
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you use [PowerShell](https://terminalroot.com/tags#powershell) frequently, you know that the default look leaves something to be desired and productivity could improve with a few tweaks.

In this article, you will learn how to customize your **PowerShell** environment like a pro — from the look to the feel — using tools like **Oh My Posh**, fonts, and more.

Make your terminal beautiful, functional, and your own.


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

## *Windows PowerShell* is DIFFERENT from *PowerShell*
You need to have PowerShell installed. Many people think that **Windows PowerShell** (which is already installed by default on Windows) is the same as **PowerShell**, but they are different! See the comparison table below:

| Feature            | **Windows PowerShell** | **PowerShell (Core)**                  |
| ------------------ | ---------------------- | -------------------------------------- |
| Executable name    | `powershell.exe`       | `pwsh.exe`                             |
| Base               | .NET Framework         | .NET Core / .NET 5+                    |
| Platform           | Windows only           | Cross-platform (Windows, Linux, macOS) |
| Common versions    | 5.1 and earlier        | 6.0+ (Core), 7.x (PowerShell)          |
| Future support     | Maintenance only       | Actively developed                     |

To find out if your PowerShell is the default, run these commands below:
{% highlight powershell %}
$PSVersionTable
{% endhighlight %}
* If `Name` is `Microsoft.PowerShell.Core` and `Version` is **5.1**, you are using **Windows PowerShell**.
* If `Version` is **6.0+ or 7.x**, you are using **PowerShell Core** (the modern one).

**Or**:
{% highlight powershell %}
(Get-Process -Id $PID).Path
{% endhighlight %}
* If the path ends in `powershell.exe`, it is **Windows PowerShell**.
* If it ends in `pwsh.exe`, it is **PowerShell Core**.

Here is an example of Windows PowerShell:
{% highlight powershell %}
> $PSVersionTable

Name                           Value
----                           -----
PSVersion                      5.1.19041.5607
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.19041.5607
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1


> (Get-Process -Id $PID).Path
C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe
{% endhighlight %}

If your output is similar to this: `powershell.exe` then you need to install **PowerShell**.

### Installing PowerShell
You can install it through the [Windows Store - PowerShell](ttps://www.microsoft.com/en-us/p/powershell/9mz1snwt0n5d?SilentAuth=1&wa=wsignin1.0&WT.mc_id=-blog-scottha#activetab=pivot:overviewtab) or just run the command below in Windows PowerShell:
{% highlight powershell %}
winget install Microsoft.PowerShell
{% endhighlight %}
> If you are already in Windows Terminal, close it and open it again!

Another cool (and important) thing is to install [Windows Terminal](https://terminalroot.com/2023/04/melhore-seu-desempenho-utilizando-o-windows-terminal.html), see [this article](https://terminalroot.com/2023/04/melhore-seu-desempenho-utilizando-o-windows-terminal.html) how to install and configure!

After properly installing *Windows Terminal* and *PowerShell*, now just set *Windows Terminal* as **Default Shell** by choosing **PowerShell**, to do this do:

+ Open **Windows Terminal**;

+ Click on the down arrow (**⌵**);

+ Choose **PowerShell** in **Default Profile** as in the image below:

![Default Shell](/assets/img/windows/posh/shell-padrao.jpg)
> Image in Portuguese

Now let's go to the next step!


<!-- RECTANGLE LARGE -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Install Necessary Fonts
You will need fonts to display the unicodes correctly in the [terminal](https://terminalroot.com/tags#terminal). There are two options:

+ Quick and easy way: [Terminal Root Fonts](https://github.com/terroo/fonts), download and install, if you don't know how to do it, [watch this video for how to do it!](https://youtu.be/bs_xTQdgM5s?t=129);
+ More complete: [Nerd Fonts](https://www.nerdfonts.com/), to install them, go to the address: <https://www.nerdfonts.com/>.

After installing the fonts, change the font of your Windows Terminal and choose the font: [Caskaydia Cove Nerd Font](https://www.nerdfonts.com/font-downloads) as follows:
1. Open the Windows Terminal.
2. Click the **⌵** arrow next to the + tab and select **"Settings"** (or press `Ctrl+,`).
3. In the left pane, select the **profile**: **"PowerShell"**.
4. Go to the **"Appearance"** section.
5. In **"Font face"**, type the name of the font: **Caskaydia Cove Nerd Font**.
6. Click **"Save"** in the bottom right corner. See image below:
> Where it says **JetBrainsMonoMedium Ner Font**, change it to **Caskaydia Cove Nerd Font**.

![Change the Windows Terminal font](/assets/img/windows/posh/fonte-pwsh.jpg)
> Image in Portuguese

Now let's change the prompt!

---

## Install *Oh My Posh*
**Oh My Posh** is a prompt customization tool for terminals such as [PowerShell](https://terminalroot.com/tags#powershell), [GNU Bash](https://terminalroot.com/tags#bash), [zsh](https://terminalroot.com/tags#shell), among others. It allows you to create a visually attractive and informative prompt, with ready-made themes and icon support via Nerd Fonts.

### Main features:
* Ready-made and customizable themes in [JSON](https://terminalroot.com/tags#json)
* Support for [Git](https://terminalroot.com/tags#git), job status, active language, among others
* Compatible with [Windows](https://terminalroot.com/tags#windows), [GNU/Linux](https://terminalroot.com/tags#gnulinux) and [macOS](https://terminalroot.com/tags#macos)
* Works with PowerShell, bash, zsh, fish, etc.
* Uses **Nerd Fonts** for icons and symbols

It is ideal for those who want a functional and aesthetically pleasing terminal.

To install, simply run the command below:
{% highlight powershell %}
winget install JanDeDobbeleer.OhMyPosh
{% endhighlight %}
> After that, you need to close and reopen Windows Terminal! If you prefer, you can install it via [Windows Store - OhMyPosh](https://apps.microsoft.com/detail/xp8k0hkjfrxgck?hl=pt-BR&gl=US).

Now, if you run the command below, you will activate the custom prompt:
{% highlight powershell %}
oh-my-posh --init --shell pwsh --config ~/jandedobbeleer.omp.json | Invoke-Expression
{% endhighlight %}

However, when you close and reopen Windows Terminal, you will notice that it will disappear. So, add it to the `$PROFILE` path. If you type this in the terminal, you will notice that it will display the configuration path. However, most likely the subfolders related to the path will not exist.

This is normal. The `$PROFILE` points to **where the file *should* be**, but **it doesn't automatically create the folder or file**.

### To fix:
1. Create the folder:
{% highlight powershell %}
New-Item -ItemType Directory -Path (Split-Path -Parent $PROFILE) -Force
{% endhighlight %}

2. Create the profile file:
{% highlight powershell %}
New-Item -ItemType File -Path $PROFILE -Force
{% endhighlight %}

3. Now you can edit it with:
{% highlight powershell %}
notepad $PROFILE
{% endhighlight %}

In that open file, paste the command you used to enable prompt customization:
{% highlight powershell %}
oh-my-posh --init --shell pwsh --config ~/jandedobbeleer.omp.json | Invoke-Expression
{% endhighlight %}

Save the file and after closing and reopening Windows Terminal, note that the configuration will always be displayed!

There are several configurations that you can add, the documentation has a full explanation: <https://ohmyposh.dev/docs/>.


<!-- RECTANGLE 2 - OnParagragraph -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## Icons for the terminal
And to enhance your terminal even more, add an icon module, just run the command: `Install-Module -Name Terminal-Icons -Repository PSGallery` and then add another line to the same `notepad $PROFILE` file, the one below:
{% highlight powershell %}Import-Module -Name Terminal-Icons
{% endhighlight %}

Close and open Windows Terminal, run the `dir` or `ls` commands and note that the files and folders will be listed with colored icons!

![Windows Terminal with Oh My Posh](/assets/img/windows/posh/custom-powershell.jpg)
> Image in Portuguese

---
Awesome, huh?! For more information, check out [this link](https://learn.microsoft.com/en-us/windows/terminal/tutorials/custom-prompt-setup).

<!--
Via: https://www.hanselman.com/blog/my-ultimate-powershell-prompt-with-oh-my-posh-and-the-windows-terminal
-->

