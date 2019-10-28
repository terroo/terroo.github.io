---
layout: post
title: "20 find COMMAND Examples"
date: 2019-10-28 19:38:48
image: '/assets/img/commands/find.jpg'
description: 'Search for files in a directory hierarchy.'
featured-img: ../commands/find.jpg
tags:
- find
- command
- shell
- unix
- linux
---

![20 find COMMAND Examples](/assets/img/commands/find.jpg)

> find - search for files in a directory hierarchy.

## 1 - Simple Search
{% highlight bash %}
find . -name file.txt
./file.txt
{% endhighlight %}

* `find` command
* `.` means it will search all the directory you are in and sub directories.
* `-name` will look for that name exactly, if a character is different or upper or lower case, it will ignore it.
* `file.txt` filename

## 2 - Search ignoring case sensitive
{% highlight bash %}
find /home/ -iname file.txt
./file.txt
./File.txt
{% endhighlight %}

* /home/ will only search this directory recursively (sub directories)
* upper or lower case name

## 3 - Search Directories
{% highlight bash %}
find / -type -d -name Photos file.txt
/home/user/Photos
{% endhighlight %}

## 4 - Wildcard Search
{% highlight bash %}
find /home/ -name *ile*
./home/file.txt
./home/File.txt
./home/My_Files-NEWS.txt
./home/file.sh
{% endhighlight %}

* finds all files that have the word **file** at the beginning, middle or end

## 5 - Search by File Type
{% highlight bash %}
find / -type -f -name Photos *.odt
./file.odt
./terminalroot.odt
{% endhighlight %}

* `-f` only files with extension `odt`, in that case, even without `-f` would also find

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

## 6 - Search by permission and find all files that have permission `777`
{% highlight bash %}
find . -type f -perm 0777 -print
{% endhighlight %}

## 7 - Search other than permission finds all files that do not have permission `777`
{% highlight bash %}
find / -type f ! -perm 777
{% endhighlight %}

## 8 - Search for files in empty directories without telling if it is `- type d` or `- type f` it searches both

{% highlight bash %}
find MyDir/ -empty
MyDir/EmptyDir
MyDir/EmptyFile.txt
{% endhighlight %}

* `-type d` search only directories

{% highlight bash %}
find MyDir/ -type d -empty
MyDir/EmptyDir
{% endhighlight %}

* `-type f` looks for files only

{% highlight bash %}
find MyDir/ -type f -empty
MyDir/EmptyFile.txt
{% endhighlight %}

## 9 - Search for hidden folders

{% highlight bash %}
find /tmp -type f -name ".*"
{% endhighlight %}

## 10 - Search by size will find all files larger than 10 MB

{% highlight bash %}
find . -type f -size +10M
{% endhighlight %}

You will find all files smaller than **10MB**

{% highlight bash %}
find. -type f -size -10M
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

## 11 - Search and remove with __- exec__

{% highlight bash %}
find . -type f -name EmptyFile.txt -exec rm -f {} \;
{% endhighlight %}

Or with xargs

{% highlight bash %}
find . -type f -name EmptyFile.txt | xargs rm -f
{% endhighlight %}


## 12 - Search by Name Within File
{% highlight bash %}
find My_Files/ -name "*.*" -exec grep -Hin "Anomalies" {} \;
My_Files/file.txt:1:Anomalies
{% endhighlight %}

## 13 - Searches for ACCESSED (`atime`) files in the last 24 hours (for more than 3 days, use +3)

{% highlight bash %}
find . -type f -atime -1 -exec ls -l {} \;
{% endhighlight %}

## 14 - Searches for ACCESSED (`amin`) files in last 5 minutes
{% highlight bash %}
find . -type f -amin -5
{% endhighlight %}

## 15 - Searches for CREATED (`ctime`) files in the last 12 hours
{% highlight bash %}
find . -type f -ctime -0.5 -exec ls -l {} \;
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

## 16 - Searches for MODIFIED (`mtime`) files in the last 6 hours
{% highlight bash %}
find . -type f -mtime -0.25
{% endhighlight %}

## 17 - Search for Sticky Bit Files with `551` Permission
{% highlight bash %}
find / -perm 1551
{% endhighlight %}

## 18 - Search for SUID Files
{% highlight bash %}
find / -perm /u=s
{% endhighlight %}

## 19 - Search for SGID Files
{% highlight bash %}
find / -perm /g+s
{% endhighlight %}

## 20 - Search for executable files
{% highlight bash %}
find / -perm /a=x
{% endhighlight %}

or read only

{% highlight bash %}
find / -perm /u=r
{% endhighlight %}

There are more possibilities, you can see them all in the command manual:

{% highlight bash %}
man find
find --help
{% endhighlight %}

Thanks for reading!

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
