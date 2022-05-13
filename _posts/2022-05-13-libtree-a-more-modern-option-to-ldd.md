---
layout: post
title: "libtree - A more modern option to ldd"
date: 2022-05-13 11:10:13
image: '/assets/img/commands/libtree.png'
description: 'It tells you whether or not a library is installed and why.'
tags:
- cpp
- clanguage
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

If you need to know which libraries a binary uses to later use them in some way, we know that the `ldd` command is one of the most used alternatives, however it has some limitations, that is, there are libraries that are not found and it does not inform.

For that you can replace it with **libtree**

---

# What does `libtree` do ?
+ `deciduous_tree` turns ldd into a tree
+ `point_up` explains why shared libraries are found and why not
+ deploy executables and dependencies in a single directory


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

# Installation
There is no secret, just download the binary, give it execution permission and use it, like this:

{% highlight sh %}
wget -qO libtree https://github.com/haampie/libtree/releases/download/v2.0.0/libtree_x86_64
chmod +x libtree
./libtree $(which man)
{% endhighlight %}

If you want, install on your system:

{% highlight sh %}
sudo install -v libtree /usr/local/bin/
{% endhighlight %}

And use it as `libtree` command.

To deploy binaries and dependencies in a separate directory, use:

{% highlight sh %}
libtree $(which man) -d man.bundle --chrpath --strip
{% endhighlight %}

The output will be similar to the one below:

{% highlight sh %}
$ libtree $(which man) -d man.bundle --chrpath --strip
man
├── libmandb-2.9.1.so [runpath]
│   ├── libman-2.9.1.so [runpath]
│   │   ├── libpipeline.so.1 [ld.so.conf]
│   │   └── libseccomp.so.2 [ld.so.conf]
│   └── libgdbm.so.6 [ld.so.conf]
├── libman-2.9.1.so (collapsed) [runpath]
└── libpipeline.so.1 (collapsed) [ld.so.conf]

Deploying to "man.bundle/usr"
"/usr/bin/man" => "man.bundle/usr/bin/man"
"/usr/lib/man-db/libmandb-2.9.1.so" => "man.bundle/usr/lib/libmandb-2.9.1.so"
"/usr/lib/man-db/libman-2.9.1.so" => "man.bundle/usr/lib/libman-2.9.1.so"
"/usr/lib/x86_64-linux-gnu/libpipeline.so.1.5.2" => "man.bundle/usr/lib/libpipeline.so.1.5.2"
  creating symlink "man.bundle/usr/lib/libpipeline.so.1"
"/usr/lib/x86_64-linux-gnu/libseccomp.so.2.5.1" => "man.bundle/usr/lib/libseccomp.so.2.5.1"
  creating symlink "man.bundle/usr/lib/libseccomp.so.2"
"/usr/lib/x86_64-linux-gnu/libgdbm.so.6.0.0" => "man.bundle/usr/lib/libgdbm.so.6.0.0"
  creating symlink "man.bundle/usr/lib/libgdbm.so.6"

$ tree man.bundle/
man.bundle/
└── usr
    ├── bin
    │   └── man
    └── lib
        ├── libgdbm.so.6 -> libgdbm.so.6.0.0
        ├── libgdbm.so.6.0.0
        ├── libman-2.9.1.so
        ├── libmandb-2.9.1.so
        ├── libpipeline.so.1 -> libpipeline.so.1.5.2
        ├── libpipeline.so.1.5.2
        ├── libseccomp.so.2 -> libseccomp.so.2.5.1
        └── libseccomp.so.2.5.1

3 directories, 9 files
{% endhighlight %}

For more information visit the [repository](https://github.com/haampie/libtree) .

