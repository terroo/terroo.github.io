---
layout: post
title: "How to Extract Multiple Compressed Formats with a Single COMMAND"
date: 2019-12-06 11:58:41
image: '/assets/img/terminal/extract.jpg'
description: 'It keeps you from memorizing commands and options.'
featured-img: ../terminal/extract.jpg
tags:
- extract
- terminal
- command
---

![How to Extract Multiple Compressed Formats with a Single COMMAND](/assets/img/terminal/extract.jpg)

This day I was a little stressed with various types of formats that I had to unzip and I remembered a software I had created for the terminalutils package (discontinued) and decided to rewrite the software with more options and optimizations.
Introduction

The extract command automatically recognizes and extracts various types of MIME formats from compressed files if it is installed, otherwise it says 'command not found' and you will need to install the appropriate software later.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Installation

To install it is very simple, just clone the repository, enter it and use the [make](https://ftp.gnu.org/old-gnu/Manuals/make-3.80/html_chapter/make_5.html) command:

{% highlight bash %}
git clone https://github.com/terroo/extract
cd extract
sudo make install
{% endhighlight %}

## Use
Displays a quick help:
{% highlight bash %}
extract --help
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

> Or only: `extract -h`

## Displays the manual:
{% highlight bash %}
man extract
{% endhighlight %}

[![How to Extract Multiple Compressed Formats with a Single COMMAND](/assets/img/terminal/man-extract.jpg)](/assets/img/terminal/man-extract.jpg)

## Extracts a compressed file:

> Example if format is *tbz2*

{% highlight bash %}
extract file.tbz2
{% endhighlight %}

## Extracts a compressed file in VERBOSE mode:

> Example if format is *lzma*

{% highlight bash %}
extract --verbose file.tbz2
{% endhighlight %}
> Or only: `extract -v file.tbz2`

## List a tutorial table for compressing and unpacking directly:
{% highlight bash %}
extract --list
{% endhighlight %}
> Or only: `extract -l`

[![How to Extract Multiple Compressed Formats with a Single COMMAND](/assets/img/terminal/list-extract.jpg)](/assets/img/terminal/list-extract.jpg)

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Solving problems

If you encounter any problems, please report them at: <https://github.com/terroo/extract/issues>

## If you want to uninstall

If you still have the repository on your machine, just enter it and run the command: `sudo make uninstall` , if you no longer have the directory/repository, clone it again.

Hope that helps, hugs!
