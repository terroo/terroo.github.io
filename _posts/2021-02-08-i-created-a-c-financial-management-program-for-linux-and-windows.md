---
layout: post
title: "I created a C++ Financial Management Program for Linux and Windows"
date: 2021-02-08 14:39:33
image: '/assets/img/cpp/terminal-finances.jpg'
description: 'Suitable for those who want to control their personal accounts in an easy and simple way. Available for Linux and Windows.'
featured-img: ../dir/img/cpp/terminal-finances.jpg
tags:
- cpp
- qt
---

![Manage your personal financial accounts with Terminal Finances](/assets/img/cpp/terminal-finances.jpg)

**Terminal Finances** is indicated for those who want to control their personal [accounts](https://terminalroot.com.br/2015/11/lista-com-30-softwares-de-contabilidade_8.html) easy and simple. Available for [Linux](https://terminalroot.com.br/linux/) and [Windows](https://terminalroot.com.br/tags#windows).

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
If you want to use Terminal Finances without compiling, choose one of the options below to download:

### In [Linux](https://terminalroot.com.br/tags#linux) for any [distribution](https://terminalroot.com.br/tags#distros) through an [AppImage](https : //appimage.org/)
To do this, just download it through [this link](https://github.com/terroo/terminal-finances/releases/download/v1.0.0/Terminal_Finances-x86_64.AppImage), give execution permission and run, example:
{% highlight bash %}
wget https://github.com/terroo/terminal-finances/releases/download/v1.0.0/Terminal_Finances-x86_64.AppImage
chmod +x Terminal_Finances-x86_64.AppImage
./Terminal_Finances-x86_64.AppImage
{% endhighlight%}

Alternatively still on [Linux](https://terminalroot.com.br/tags#linux) you can use [app-get](https://terminalroot.com.br/2020/05/conheca-o-app -get-an-appimages-manager-via-command-line.html), install it as follows:
{% highlight bash %}
app-get terminal-finances
{% endhighlight%}

### In [Windows 10](https://terminalroot.com.br/tags#windows)
+ Just download [from this link](https://github.com/terroo/terminal-finances/releases/download/v1.0.0/TerminalFinances_installer_Win10_64.rar)
+ Unzip the **.rar**
+ Double-click the installation file
+ Follow the installation steps
+ And after finishing, look for **Terminal Finances** in the system's Start Menu.

### Compiling
If you want to build this software on your machine, you will first need to install the following dependencies:
- [git](https://terminalroot.com.br/git/)
- [qmake](https://en.wikipedia.org/wiki/Qmake)
- [g++](https://gcc.gnu.org/)
- [GNU Make](https://www.gnu.org/software/make/)
- libQt5Widgets
- libQt5Gui
- libQt5Core
- libQt5Sql
- libQt5PrintSupport

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

For example, on [Ubuntu](https://terminalroot.com.br/tags#ubuntu), [Linux Mint](https://terminalroot.com.br/tags#mint), [Debian](https://terminalroot.com.br/tags#debian) and [derivatives](https://terminalroot.com.br/2020/04/as-melhores-distros-gnu-linux-para-pcs-antigos.html), [command](https://terminalroot.com.br/tags/#comandos) would be:
{% highlight bash %}
sudo apt install qmake g++ make libqt5widgets5 libqt5gui5 libqt5core5a libqt5sql libqt5printsupport5
{% endhighlight%}
Then just clone the repository and compile as follows:
{% highlight bash%}
git clone https://github.com/terroo/terminal-finances
cd terminal-finances
qmake -qt=qt5 src/TerminalFinances.pro
make
sudo make install
{% endhighlight%}

# Usage
Terminal Finances is very intuitive, it is summarized in 4 basic screens and some additional configuration and customization tools, they are:

- This is the initial screen of the program and has links and shortcut tips and information about its development:
**Terminal Finances**

![Terminal Finances](/assets/img/cpp/terminal-finances-01.jpg)

- To insert credit or debit, as well as edit or delete entries, click on the tab:
** Insert Credit and/or Debit, Edit and Delete Entries**

![Insert Credit and/or Debit, Edit and Delete Entries - Terminal Finances](/assets/img/cpp/terminal-finances-02.jpg)

> If you want to edit or delete a release, double click on the listed release.
 
- To generate reports, send a report by email and print or save to `pdf`, use the tab:
**Launch Reports and Consult Balances**

![Launch Reports and Consult Balances - Terminal Finances](/assets/img/cpp/terminal-finances-03.jpg)

- To search for specific releases, use the tab:
**Search by Description, Values ​​and Accounts**

![Search by Description, Values ​​and Accounts - Terminal Finances](/assets/img/cpp/terminal-finances-04.jpg)

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

# Customization
The system identifies the language of your system (only on Linux) and already opens with the same, however, if you want to change, just access the **Menu Bar** in **Languages** and choose the language you want. 3 languages ​​are available: **English**, **Spanish** and **Brazilian Portuguese**:

![Languages ​​- Terminal Finances](/assets/img/cpp/terminal-finances-05.jpg)

The system also offers 2 themes for you to choose from: **Dark** and **Light**, as we have seen Dark in the previous images, the Light display looks like this:

![Light - Terminal Finances](/assets/img/cpp/terminal-finances-06.jpg)

> This is the default theme displayed as soon as you run Terminal Finances, unless you change the settings they are saved even if you close the program.

# Settings
If you want to backup the database of your releases, click on this icon located in the left sidebar and choose the export location:

![Export Database - Terminal Finances](/assets/img/cpp/terminal-finances-07.jpg)

> The system will save the file with the name `terminalfinances` and the date of the export (` terminalfinances-xx-xx-xxxx.db`), example if it were today: `terminalfinances-08-02-2021.db`.

To import the database, copy the file you want to import and save it in the directory: `~/.config/terminalfinances/terminalfinances.db`, ​​in Windows it will be in the location you chose to install, if you use the default folder offered by installer, it would be: `C: \ Users \ [YOUR_USER] \ TerminalFinances \ terminalfinances.db`.
> Remove the existing database and copy your backup into that directory and rename it only: `terminalfinances.db`

On Linux you just need to use the command:

{% highlight bash %}
cp terminalfinances-xx-xx-xxxx.db ~/.config/terminalfinances/terminalfinances.db
{% endhighlight%}
> This routine is different for the user to decide to overwrite the file explicitly and with his consent.

By default, the software will display the currency symbol in [Brazilian Real], but you can also change in the configuration file, `currency` assign the value of your country's currency symbol, example to [Euro](https://en.wikipedia.org/wiki/Euro):
{% highlight bash %}
currency = EUR
{% endhighlight%}

If you want to watch a video featuring all the resources provided in this article, watch the [video](https://www.youtube.com/watch?v=BF809OoXfjM) below:

> The video is in Brazilian Portuguese, but you can use subtitles and translate into your language.

<iframe width="910" height="390" src="https://www.youtube.com/embed/BF809OoXfjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

# License
Terminal Finances is licensed under the [GNU GPL version 3](https://github.com/terroo/terminal-finances/blob/main/LICENSE)

If you want to report problems or suggest new features, use the [issues](https://github.com/terroo/terminal-finances/issues) of [GitHub](https://github.com/terroo/terminal-finances/)

The official page of [Terminal Finances](https://github.com/terroo/terminal-finances/) is: <https://github.com/terroo/terminal-finances>

If you want to uninstall
- Compiled version
{% highlight bash%}
git clone https://github.com/terroo/terminal-finances
cd terminal-finances
sudo make uninstall
{% endhighlight%}

- In Windows, access the Control Panel and go to Add/Remove Programming, right-click on Terminal Finances and choose: Uninstall.
- If you used [app-get](https://github.com/terroo/app-get) on Linux, just run the command:
{% highlight bash%}
app-get --remove terminal-finances
{% endhighlight%}

Thanks!

