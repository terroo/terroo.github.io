---
layout: post
title: "12 TIPS for you to use COMMANDO curl as a NINJA"
date: 2020-02-12 16:21:31
image: '/assets/img/commands/curl.jpg'
description: 'curl is a command/library(libcurl) available on most Unix-based systems.'
featured-img: ../commands/curl.jpg
tags:
- curl
- command
- linux
- unix
---

# Introduction

[curl](https://curl.haxx.se/) is a command/library(libcurl) available on most Unix-based systems. It is used as an abbreviation for “Client URL”. It is used for several purposes such as: navigation, data insertion via the web, download, data transfer and among others. It supports several protocols.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation

To install curl you can use your distro's package manager, but before installing make sure it is already installed with the command: `which curl`, examples:

{% highlight bash %}
emerge curl # Para Gentoo, Funtoo,...
sudo apt install curl # No Debian, Ubuntu, Linux Mint,...
sudo pacman -S curl # Arch Linux, Manjaro,...
sudo yum install curl # Red Hat, CentOS e Fedora (prefira o dnf)
pkg install curl # FreeBSD
pkg_add curl # OpenBSD
pkgin install curl # NetBSD
{% endhighlight %}

After installation, check that everything is ok, for example, by looking at the version: `curl --version`.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Tip 1. Filling out a website form via the command line
{% highlight bash %}
curl -F "mail=nobody@nothing.com" -F "msg=Thanks" http://givingsoup.org/
curl -X POST -F "mail=nobody@nothing.com" -F "msg=Thanks" http://givingsoup.org/
# cat data.txt #mail=nothing@all.com&msg=Anything Message
curl --data "mail=iwanna@yoursoap.com&msg=Nice" http://givingsoup.org/
curl -d "@data.txt" -X POST http://givingsoup.org/
{% endhighlight %}

<!-- RETANGULO LARGO 2 -->
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

# Tip 2. Uploading files via the command line
In this case we need to inform the URL of the file path that will be responsible for receiving the file, in this case I know it is `upload.php`, but it could be at the root of the host, remembering that, as I said, it redirects to 'm/'without changing the URL.
{% highlight bash %}
curl -i -X POST -H "Content-Type: multipart/form-data" -F "data=@TIPS_COMMANDS" http://givingsoup.org/upload.php
curl -F "data=@image.jpg" http://givingsoup.org/upload.php >/dev/null 2>/dev/null
{% endhighlight %}

<!-- RETANGULO LARGO -->
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

# Tip 3. Download Files
Download with the same name as the original file that is on the server: The `-O` or `--remote-name` parameter indicates that the source file is binary, so if you don't pass it, curl will not be able to download it.
{% highlight bash %}
curl -O givingsoup.org/downloads/distro.iso

% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  841M  100  841M    0     0  46.0M      0  0:00:18  0:00:18 --:--:-- 44.0M
{% endhighlight %}

- **%** - Shows the total in PERCENTAGE of the download;
- **Total** - Shows the total in MEGABYTES of the download;
-  …

> If you want it not to show data, use the `--silent` or `-s` parameter: `curl --silent givingsoup.org/downloads/distro.iso`

> If you miss the file name, curl will download the 404 file, so it is always good to check the size of the file `du -lhs distro.iso`, if it is incorrect see what the server's response was: `cat distro.iso` (can be it a server error if it is not 404, for example, 301), so the ideal is to [HASH the post downloaded file](https://en.terminalroot.com.br/what-is-and-how-to-generate-a-hash/)

> Note: There is still no parameter to save without overwriting the file if it exists, so you need to create a solution in the shell, example:

{% highlight bash %}
[ ! -f data.txt ] && curl -O givingsoup.org/downloads/data.txt || echo File already exists
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Tip 4. Download the file saving with a name you defined:
{% highlight bash %}
curl givingsoup.org/downloads/distro.iso -o mydistro.iso
{% endhighlight %}

# Tip 5. Resume an interrupted download
{% highlight bash %}
curl -C - -O http://givingsoup.org/downloads/distro.iso
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Tip 6. Download multiple files
{% highlight bash %}
curl -O http://yoursite.com/mydistro.iso -O http://givingsoup.org/downloads/data.txt
{% endhighlight %}

# Tip 7. Download URLs from a file
{% highlight bash %}
cat urls.txt
givingsoup.org/downloads/distro.iso
givingsoup.org/downloads/data.txt
xargs -n 1 curl -O < urls.txt
{% endhighlight %}

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Tip 8. Limit download speed
{% highlight bash %}
curl --limit-rate 100K http://givingsoup.org/downloads/distro.iso -O
{% endhighlight %}

# Tip 9. Download with progress bar
{% highlight bash %}
curl -# -O givingsoup.org/downloads/distro.iso
{% endhighlight %}

# Tip 10. Query HTTP headers
{% highlight bash %}
curl -I en.terminalroot.com.br
{% endhighlight %}
> Not all sites allow this query.

# Tip 11. Specify a User Agent
{% highlight bash %}
curl https://gnu.terminalroot.com.br/ip.php
# Exemplo Windows 10 Edge:
curl http://localhost --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"
{% endhighlight %}

<!-- RETANGULO LARGO 2 -->
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

# Tip 12. Apache authentication
{% highlight bash %}
curl -u user:pass -O http://givingsoup.org/m/secret/my-secret-files.tar.gz
{% endhighlight %}

# Useful links

- <https://curl.haxx.se/docs/manpage.html>
- <https://curl.haxx.se/docs/httpscripting.html>
- <https://gnu.terminalroot.com.br/>
- <https://gnu.terminalroot.com.br/ip.php>
- <https://developers.whatismybrowser.com/useragents/explore/>
- <https://addons.mozilla.org/pt-BR/firefox/addon/user-agent-switcher-revived/>

<!-- RETANGULO LARGO -->
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

{% highlight bash %}
curl --help
# And/Or
man curl
{% endhighlight %}

# Bonus Tip
See all the tips worked in the video below. Remembering that the tutorial is in Portuguese, but you can use the subtitles (which are not fully translated, but the beginning and several other parts are)

{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/EWWD56ZPVoQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
