---
layout: post
title: "Display the Gedit preferences menu"
date: 2018-07-23 00:43:32
image: '/img/tips/gedit.gif'
description: 'Enable preferences on Gedit.'
main-class: 'tips'
tags:
- gedit
---

When you install the Gedit plugins `emerge --ask app-editors/gedit-plugins` (example on Gentoo) and want to enable it but do not find the preferences menu, you do not know what to do, but the truth is that if you run the command below with the normal user, the preferences menu appears .

Just run:

{% highlight bash %}
gsettings set org.gnome.settings-daemon.plugins.xsettings overrides '@a{sv} {"Gtk/ShellShowsAppMenu": <int32 0>}'
{% endhighlight %}

> __Warning__: If you have gedit open, close and open it again and the preferences menu will appear.

## Ready, enjoy the preferences!

via: [Marcos Oliveira Medium](https://medium.com/@marcosoliveira_17900/display-the-gedit-preferences-menu-4570b0b3369)
