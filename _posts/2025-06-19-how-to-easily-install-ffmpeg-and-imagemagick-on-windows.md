---
layout: post
title: "How to Easily Install FFmpeg and ImageMagick on Windows"
date: 2025-06-19 21:07:38
image: '/assets/img/windows/ffmpeg-imagemagick-windows.jpg'
description: "🚀 Along with many others like: MySQL, PHP 8.2, NetBeans, DuckDB, and more!"
tags:
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

Having various utilities via the [command line](https://terminalroot.com/tags#comandos) is useful for daily *workflow*.  

[Command-line](https://terminalroot.com/tags#comandos) applications are fast and easy to access.  

Two important utilities to have on your system are [FFmpeg](https://terminalroot.com/2021/09/15-exemplos-de-uso-diferente-do-ffmpeg.html) and [ImageMagick](https://terminalroot.com/2023/08/como-editar-imagens-com-cpp-e-imagemagick.html).  

**FFmpeg** is a video editor that allows you to: Convert formats, extract frames, trim videos, and much more. For more details, [check here](https://terminalroot.com/2025/06/como-utilizar-o-ffmpeg-com-cpp-windows-e-gnu.html) and [also here]().  

**ImageMagick** is an image editor that lets you: Convert formats, resize images, crop images, and much more. For more details, [check here](https://terminalroot.com/2015/03/tratamento-de-imagens-com-imagemagick.html).  

To install them, simply use `WinGet` (if you don’t have it installed, get it from the [Microsoft Store](https://learn.microsoft.com/pt-br/windows/msix/app-installer/install-update-app-installer)) via [PowerShell](https://terminalroot.com/2025/05/personalize-seu-powershell-like-a-pro.html). Run the following commands:  

+ To install [FFmpeg](https://winstall.app/apps/Gyan.FFmpeg):  

{% highlight powershell %}  
winget install --id=Gyan.FFmpeg -e  
{% endhighlight %}  

After installation, close and reopen the [terminal](https://terminalroot.com/2023/04/melhore-seu-desempenho-utilizando-o-windows-terminal.html) and test it by converting, for example, a `.mp4` video to `.wmv`:  
{% highlight powershell %}  
ffmpeg -i video.mp4 output.wmv  
{% endhighlight %}  

+ To install [ImageMagick](https://winstall.app/apps/ImageMagick.ImageMagick):  
{% highlight powershell %}  
winget install --id=ImageMagick.ImageMagick -e  
{% endhighlight %}  

After installation, close and reopen the [terminal](https://terminalroot.com/2023/04/melhore-seu-desempenho-utilizando-o-windows-terminal.html) and test it by converting, for example, a `.png` image to `.jpg`:  
{% highlight powershell %}  
magick image.png output.jpg  
{% endhighlight %}  
> On [Unix](https://terminalroot.com/tags#unix)-like systems, the command `convert` is used, but this command already exists on Windows. Previously, `magick convert` was used, but after changes, only the `magick` command is used on Windows. Any tutorial you see using `convert` on Windows should be replaced with just `magick`, which is equivalent to `& 'C:\Program Files\ImageMagick-7.1.1-Q16-HDRI\magick.exe'`.  


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

Almost everything is available on `WinGet`. For example, to install the following applications:  

+ [NetBeans](https://winstall.app/apps/Apache.NetBeans):  
{% highlight powershell %}  
winget install --id=Apache.NetBeans -e  
{% endhighlight %}  

+ [MySQL](https://winstall.app/apps/Oracle.MySQL):  
{% highlight powershell %}  
winget install --id=Oracle.MySQL -e  
{% endhighlight %}  
> **NOTE**: MySQL requires some configuration, which you can find [here](https://terminalroot.com/2023/05/como-instalar-o-apache-php-8-e-mysql-no-windows.html#mysql). The method described [here](https://terminalroot.com/2023/05/como-instalar-o-apache-php-8-e-mysql-no-windows.html#mysql) is more interesting.  

+ [PHP 8.2](https://winstall.app/apps/PHP.PHP.8.2):  
{% highlight powershell %}  
winget install --id=PHP.PHP.8.2 -e  
{% endhighlight %}  
> **NOTE**: PHP requires some configuration to work with [Apache](https://terminalroot.com/2023/05/como-instalar-o-apache-php-8-e-mysql-no-windows.html#1º---instale-o-apache), which you can find [here](https://terminalroot.com/2023/05/como-instalar-o-apache-php-8-e-mysql-no-windows.html#php-8). The method described [here](https://terminalroot.com/2023/05/como-instalar-o-apache-php-8-e-mysql-no-windows.html#php-8) is more interesting.  

+ [DuckDB](https://winstall.app/apps/DuckDB.cli) (just run this command):  
> Learn more about DuckDB [here](https://terminalroot.com/2025/03/conheca-um-duckdb-um-banco-de-dados-moderno.html).  

{% highlight powershell %}  
winget install --id=DuckDB.cli -e  
{% endhighlight %}  

---  

Take advantage of `WinGet` and forget the traditional installation process of downloading executables and clicking through multiple *nexts*. To find an app for WinGet, you can use `search`, for example:  

{% highlight powershell %}  
winget search <name>  
{% endhighlight %}  

Or use these websites:  
+ <https://winstall.app/>  
+ <https://winget.run/>  

---
