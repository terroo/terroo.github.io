---
layout: post
title: "Install this SQL Client which has a Modern Interface"
date: 2022-08-23 09:58:54
image: '/assets/img/mysql/beetkeeper-studio.jpg'
description: 'Made with Vue.js and TypeScript, with an AppImage ready to run on your Desktop.'
tags:
- mariadb
- mysql
- typescript
- vue
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[In the previous post](https://terminalroot.com/use-a-command-for-mysql-with-autocomplete/) we published about a *wrapper* for the *mysql command* for [MySQL or MariaDB](https://terminalroot.com/tags#mariadb) with autocomplete and syntax highlighting.

Today we are going to get to know a graphical alternative that has a friendly and modern interface, it is **Beekeeper Studio** .

With **Beekeeper Studio** you can easily connect to your database, edit your SQL codes and manage your database in an easy way.

It is available for many databases for free, including: MariaDB and MySQL, and others through the paid version.

Also available for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos) and [Linux](https://terminalroot.com/#tagslinux) and made with [Vue.js](https://terminalroot.com/tags#vue) and [TypeScript](https://terminalroot.com/tags#typescript) .

# Installation
To install, just access the [Beekeeper Studio website](https://www.beekeeperstudio.io/), it will recognize your operating system and provide the download link:
> In my case, it recognized for [Linux](https://terminalroot.com/tags#linux) .

Just click on *Download for Linux*

![Download Beekeeper Studio](/assets/img/mysql/download-beetkeeper.png)

You will be redirected to the download page. You can choose the **Ultimate Edition** version which supports more databases, or simply click on the button indicated below which is the **Community Edition** which is free and already supports the following databases: MySQL, MariaDB and a few others.

![AppImage Beekeeper Studio](/assets/img/mysql/appimage-beetkeeper.png)

If you prefer, use [GNU Wget](https://terminalroot.com/#tags#commands) via command line:

{% highlight bash %}
wget https://github.com/beekeeper-studio/beekeeper-studio/releases/download/v3.6.2/Beekeeper-Studio-3.6.2.AppImage
{% endhighlight %}
> Remembering that this is version **3.6.2** for *x86_64* architecture, for different cases, download it manually.

Now just give execute permission and run:

{% highlight bash %}
chmod +x Beekeeper-Studio-3.6.2.AppImage
./Beekeeper-Studio-3.6.2.AppImage
{% endhighlight %}

Inform your connection data: **User**, **Password** and among others.

If you want to add it to your Dash create a `.desktop` with the Beekeeper Studio logo and copy it to `/usr/share/applications` and move the AppImage to `/usr/local/bin` or locally as you prefer.

For more information, visit the [official website](https://www.beekeeperstudio.io/) and the [GitHub repository](https://github.com/beekeeper-studio/beekeeper-studio) .

And enjoy this wonder!

