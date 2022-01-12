---
layout: post
title: "10 examples of using the rsync command"
date: 2022-01-12 14:39:42
image: '/assets/img/commands/rsync.png'
description: 'It is a replacement command, more modern and effective than scp'
tags:
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

[rsync](https://rsync.samba.org/) is a widely used utility for keeping copies of a file on two computer systems at the same time.

It is commonly found on Unix-like systems and in functions such as a file synchronization and file transfer program. The rsync algorithm, a type of delta encoding, is used to minimize network usage.

[Zlib](https://zlib.net/) can be used for additional compression and SSH or stunnel can be used for data security.

**Rsync** is open source under the terms of the GNU GPL Version 2.

To install Rsync on your [Distro](https://terminalroot.com/tags#distros), examples:

{% highlight sh %}
emerge rsync # Gentoo, Funtoo, ...
sudo apt install rsync # Debian, Ubuntu, Mint, ...
sudo pacman -S rsync # Arch, Manjaro, ...
sudo dnf install rsync # Red Hat, Fedora, ...
{% endhighlight %}

Now on to the examples!


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

## 01. Copying local file
Similar to cp command
{% highlight sh %}
rsync ~/Downloads/file.txt .
{% endhighlight %}

---

## 02. Copying verbosely
That is, requiring details of the operation
{% highlight sh %}
rsync -v Downloads/file.txt .

sent 471,766 bytes  received 35 bytes  943,602.00 bytes/sec
total size is 471,560  speedup is 1.00
{% endhighlight %}

---

## 03. Copying directories recursively
The parameter is `-r` or `--recursive`, but now it's good to use all commands with `-v`
{% highlight sh %}
rsync -rv Downloads/my-dir/ .
{% endhighlight %}

---

## 04. Creating directory during copy
The problem with example 03 is that the *my-dir* directory will not be created and the files will be scattered around.

The correct thing is to use it creating the directory:
{% highlight sh %}
rsync -rv Downloads/my-dir/ --mkpath my-dir
{% endhighlight %}

output example:
{% highlight sh %}
sending incremental file list
created 1 directory for my-dir
file-01.txt.jpg
file-02.txt.jpg
file-03.txt.jpg
file-04.txt.jpg
file-05.txt.jpg
file-06.txt.jpg
file-07.txt.jpg
file-08.txt.jpg
file-09.txt.jpg
file-10.txt.jpg
file-11.txt.jpg
file-12.txt.jpg

sent 630,589 bytes  received 286 bytes  1,261,750.00 bytes/sec
total size is 629,625  speedup is 1.00
{% endhighlight %}

---

## 05. Copying a remote file to your system
{% highlight sh %}
rsync 192.168.189.36:~/remote-file.txt .
{% endhighlight %}
Or specifying your username and also verbose:
{% highlight sh %}
rsync -v user@192.168.189.36:~/remote-file.txt .
{% endhighlight %}


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

## 06. Copying a remote directory
Just as in scp you need to use `-r`, for this remote case you don't need `--mkpath`, directories will be created automatically.
{% highlight sh %}
rsync -rv user@192.168.189.36:~/my-dir .
{% endhighlight %}

Output example:
{% highlight sh %}
user@192.168.189.36's password: 
receiving incremental file list
my-dir/
my-dir/file-01.txt
my-dir/file-02.txt
my-dir/file-03.txt
my-dir/file-04.txt
my-dir/subdir/
my-dir/subdir/other-file.txt

sent 135 bytes  received 501 bytes  84.80 bytes/sec
total size is 45  speedup is 0.07
{% endhighlight %}

---

## 07. Copied with wildcards
We know that you can use `*` to copy **glob** style, which is not [regex](https://terminalroot.com/30-examples-of-the-sed-command-with-regex/). So to copy only the txt files from the remote root directory.

Remembering that the directory will not be created.
{% highlight sh %}
rsync -rv user@192.168.189.36:~/my-dir/*.txt .
{% endhighlight %}

---

## 08. Using progress bar
Unlike `scp`, if you cancel the copy the local file will no longer exist, that is, it does not copy pieces, it is always synchronously.

{% highlight sh %}
rsync -rv --progress user@192.168.189.36:~/distro.iso .
{% endhighlight %}

---

## 09. Setting the copy speed
Remote copying within the network also consumes bandwidth based on the speed of your network card, so in order for you to continue using the network or the internet without slowing it down, sometimes it is interesting to limit the speed of the copy, for this you can use the `--bwlimit=[number]` parameter, where the [number] will be in kilobits .

{% highlight sh %}
rsync -rv --bwlimit=64 --progress user@192.168.189.36:~/*.vdi .
{% endhighlight %}

The speed will not be exactly 64k, but it will be around, a little above or below, for example:
{% highlight sh %}
user@192.168.189.36's password: 
receiving incremental file list
distro.iso
        425,984   0%   64.81kB/s   17:04:05
{% endhighlight %}

---

# 10. Manual and help
And finally, we are left with the manual and help, because there are still many parameters!
{% highlight sh %}
man rsync
rsync --help
{% endhighlight %}

