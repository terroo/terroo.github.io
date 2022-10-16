---
layout: post
title: "Make your files unrecoverable before deleting"
date: 2022-10-16 12:17:58
image: '/assets/img/gnu/gnu-shred.jpg'
description: 'You dont even have to destroy the HD like Elliot Alderson did 😃 .'
tags:
- gnu
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**shred** is a [command](https://terminalroot.com/tags#commands) in [operating systems](https://terminalroot.com/how-to-check-which-operating-system-with-cpp/) of type [Unix](https://terminalroot.com/tags#unix) in Portuguese means: *shredding*. It is used to <u>securely delete files and devices</u>, making them extremely difficult to recover, even with specialized hardware and technology; It is part of [GNU](https://terminalroot.com/tags#gnu) Core Utilities .

The process of delete a file from storage using the command [rm](https://terminalroot.com/examples-of-functions-fread-fwrite-remove-and-others-in-c/) usually erases only the file system entry of the file, keeping the contents of the file intact. This often allows commonly available software to recover data from the "*deleted*" file.

If the file data is stored on magnetic media, such as an HDD , even if the file is overwritten, residual magnetic fields may allow [data recovery](https://extundelete.sourceforge.net/) using hardware equipment skilled .

To avoid this, shredding replaces the contents of a file multiple times, using patterns chosen to maximize the destruction of residual data.

---

# How to install `shred`?
If you have a [GNU/Linux](https://terminalroot.com/tags#linux) system, you probably already have `shred` installed on your system. In many cases [BSD](https://terminalroot.com/tags#bsd) and similar systems, such as [macOS](https://terminalroot.com/tags#macos) there is also a great chance to have already installed.

But if you don't have it or if you have another operating system, like [Windows](https://terminalroot.com/tags#windows) for example, you can clone and compile from this address: <https:// www.gnu.org/software/coreutils/> .

In short `shred` is just a file written in [C](https://terminalroot.com/tags#clanguage): [shred.c](https://github.com/wertarbyte/coreutils/blob/master/src/shred.c) .


---

# Using
The basic syntax is similar to several [commands](https://terminalroot.com/tags#commands) which boils down to:
{% highlight bash %}
shred [OPTION]... FILE...
{% endhighlight %}
> The file can also be a device.

### "Removing" a base file:
{% highlight bash %}
shred file.txt
{% endhighlight %}
The file will still not be removed, however the data it contains will no longer exist.

### Getting details of this "removal", use the `-v` parameter
{% highlight bash %}
shred -v file.txt
{% endhighlight %}

### The `-z` parameter assigns *zeros* to the data, in conjunction with `-v` you can see this:
{% highlight bash %}
shred: file.txt: pass 1/4 (random)...
shred: file.txt: pass 2/4 (random)...
shred: file.txt: pass 3/4 (random)...
shred: file.txt: pass 4/4 (000000)...
{% endhighlight %}

### Remove data, reset data and delete file
Note that after running the above commands, the file will still exist. For after destroying and zeroing the data you want to delete the file just use the `-u` command, example using it together with previous parameters:

{% highlight bash %}
shred: file.txt: pass 1/4 (random)...
shred: file.txt: pass 2/4 (random)...
shred: file.txt: pass 3/4 (random)...
shred: file.txt: pass 4/4 (000000)...
shred: file.txt: removing
shred: file.txt: renamed to 00000000
shred: 00000000: renamed to 0000000
shred: 0000000: renamed to 000000
shred: 000000: renamed to 00000
shred: 00000: renamed to 0000
shred: 0000: renamed to 000
shred: 000: renamed to 00
shred: 00: renamed to 0
shred: file.txt: removed
{% endhighlight %}

---

Really good right?! For more information, access the help and manual:
{% highlight bash %}
shred --help
man shred
{% endhighlight %}

---

# Useful links
+ <https://www.gnu.org/software/coreutils/>
+ <https://www.freebsd.org/cgi/man.cgi?query=gshred&manpath=FreeBSD+12-current>
