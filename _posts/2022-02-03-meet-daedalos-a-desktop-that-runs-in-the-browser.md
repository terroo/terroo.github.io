---
layout: post
title: "Meet daedalOS - a Desktop that runs in the browser"
date: 2022-02-03 11:38:55
image: '/assets/img/os/daedalos.jpg'
description: 'A mix of Windows and macOS.'
tags:
- os
- windows
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

![DaedalOS](./)

And the saga of online operating systems continues! After [Windows 93](http://www.windows93.net/) and [ Mikesoft Windows 96](https://windows96.net/) now it's time for **daedalOS** .

DaedalOS is a desktop environment that runs directly in your browser (prefer [Google Chrome]() for compatibility reasons).

To install you will need [Git](https://terminalroot.com.com/tags#git), [Node.js](https://terminalroot.com.com/tags#nodejs) and [Yarn]( https://yarnpkg.com/).

After that just clone, build and run:
{% highlight sh %}
git clone https://github.com/DustinBrett/daedalOS.git
daedalOS cd
yarn
yarn build:fs
yarn dev
{% endhighlight %}

---

# Resources
DaedalOS has several applications and games included, such as:
+ [DOOM](https://terminalroot.com.com/tags#games)
+ [Monaco Editor](https://microsoft.github.io/monaco-editor/) - A leaner [VSCode](https://terminalroot.com.com/tags#vscode).
+ Google Chrome - it's even funny because if you is already in the browser, but you may need downloads in that environment.
+ [Terminal](https://terminalroot.com.com/tags#terminal)
+ Viewer of [MarkDown](https://terminalroot.com.com/tags#markdown)
+ Wallpaper Picker
+ And a lot of other things.

You can also use it online without installing anything. To do this, access the address: <https://dustinbrett.com/> .

For more information see the project's [repository](https://github.com/DustinBrett/daedalOS).

