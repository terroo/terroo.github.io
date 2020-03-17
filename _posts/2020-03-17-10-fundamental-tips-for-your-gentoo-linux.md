---
layout: post
title: "10 Fundamental Tips for Your Gentoo Linux"
date: 2020-03-17 13:42:31
image: '/assets/img/gentoo/larry-gentoo.jpg'
description: 'First part of this series.'
featured-img: ../gentoo/larry-gentoo.jpg
tags:
- gentoo
- portage
- shellscript
- cpp
---

![10 Fundamental Tips for Your Gentoo Linux](/assets/img/gentoo/larry-gentoo.jpg)

People ask me for different content about [Gentoo](https://www.gentoo.org/) and [Portage](https://wiki.gentoo.org/wiki/Portage), but these worlds are very biiiiiiigggg!!! 😀️.

So I'm going to post a series of tips from both here on a list of topics like this, although there is no such information in the title of this post, this is the **FIRST PART** of this series. I believe that to start these initial tips are essential, let's go to the list!

---

# 1. Enable **IKCONFIG** in [Kernel](https://www.kernel.org/)
Support for `.config` in the Kernel, also known as [IKCONFIG](https://wiki.gentoo.org/wiki/Kernel/IKCONFIG_Support), allows users to build a copy of the configuration with which the kernel was built inside the kernel itself.

This allows them to inspect the kernel configuration while it is running, without having to worry about whether they changed or cleared the source directory after compilation.
> Enabling in the kernel:
{% highlight bash %}
su
cd /usr/src/linux
make menuconfig
{% endhighlight %}

<pre>
General Setup --->
    <*/M> Kernel .config support
        [*] Enable access to .config through /proc/config.gz
</pre>

And recompile:
{% highlight bash %}
su
make && make modules_install && make install
{% endhighlight %}
> If you have GRUB, also run: `grub-mkconfig -o /boot/grub/grub.cfg`

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# 2. Define a **ACCEPT_KEYWORDS** in your `/etc/portage/make.conf`
If your system is **amd64**, for example, some software requires you to explain this, because the package has code for other architectures, and you will not be able to install it if this variable is not defined, [learn more here]( https://wiki.gentoo.org/wiki/ACCEPT_KEYWORDS/). Example: `ACCEPT_KEYWORDS="~amd64"`, or just run:
{% highlight bash %}
echo 'ACCEPT_KEYWORDS="~amd64"' | sudo tee -a /etc/portage/make.conf
{% endhighlight %}

---

# 3. Know when to use an [Overlay](https://overlays.gentoo.org/)
If you need to compile software that is not in the [Portage](https://wiki.gentoo.org/wiki/Portage) tree, and want more ease of installation, use an Overlay, see here how to install [Layman](https://en.terminalroot.com.br/how-to-install-programs-via-layman-in-gentoo/).

---


# 4. Enable commonly used parameters by default
If you use any `emerge` parameters frequently, it is interesting to add them to the **EMERGE_DEFAULT_OPTS** variable in your `/etc/portage/make.conf`. For example, I use `-a` a lot and my processor only has 2 cores, so I always compile with `--jobs 2` so as not to overload my notebook.
> The `--verbose` option is also very interesting!

---

# 5. Gain more performance in the builds
Make frequent use of the `--quiet` option or just `-q`, the * compiler outputs * not only make the prompt look ugly, they make the compilation take longer, really! I did the test with small and large software and the times approached the gain of **15%** on average.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

I just don't recommend using this parameter in the previous tip variable, as the outputs of `--search` will be suppressed and with less details, [learn more](https://wiki.gentoo.org/wiki/EMERGE_DEFAULT_OPTS).

---

# 6. Know how to use FLAGS correctly
Use the `/etc/portage/package.use/zz-autounmask` file. Do not set ** flags ** directly using the variable [USE](https://wiki.gentoo.org/wiki/USE_flag) in the terminal, eg ~~`sudo USE="network mpd" emerge polybar`~~ , this creates a problem when you update the software, it will recompile without **network** and **mpd** support, without saying that in most cases it is not interesting to add **flags** universally to the **USE** variable in `/etc/portage/make.conf`, only when they are global cases, that is, when any software depends on it, for example: `USE="gnome -kde"`(if your system has GNOME installed and does not has KDE), but this example was very reasonable, because your ** profile ** (see `eselect profile list`) that you defined when installing your Gentoo and chose (`set`) for GNOME, therefore all **flags** for this are already defined for Portage, see with `emerge info | grep ^ USE`.

So the most correct way is to insert the **flag** only for the software you want in the `/etc/portage/package.use/zz-autounmask` file, remember to add with the software version, example: `echo '>=x11-misc/polybar-3.4.2-r1 network mpd' | sudo tee -a /etc/portage/package.use/zz-autounmask` the `>=` option at the beginning of the line says that Portage should include this ** flag ** for any version equal to or greater than the one informed and separated by spaces inform the **flags**.

---

# 7. Explore [Gentoolkit](https://wiki.gentoo.org/wiki/Gentoolkit)
- Before compiling/installing any package, use the command `equery uses [category/package-name]` (always inform with the category to avoid ambiguous package names), you must have [Gentoolkit](https://wiki.gentoo.org/wiki/Gentoolkit) installed (`emerge gentoolkit`) eg: `equery uses x11-misc/polybar`, and see which flags are already enabled for installation and/or also updating and which ones you would like to include in your `package.use/zz-autounmask`.

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

There are several options for the `equery` command (which packages depend on a flag; which packages use a certain flag; ...), run `equery --help` for more details and test each one to better understand each option.

---

# 8. Pay attention to licenses!
Also use the variable __ACCEPT_LICENSE="*"__ in your `make.conf`, in which case it accepts all types of licenses and avoids problems during application installation.

---

# 9. Language packs
Also set the language of your system directly in your `make.conf` using the **L10N** variable, example: **L10N="pt-BR"** in this case if you install software with the language in **Brazilian portuguese**.

To find out which code/name to use for your country [see here](https://en.wikipedia.org/wiki/Language_localisation), if your system is **English United States** this information is not necessary and do not forget to update with the `--changed-use` option, eg `emerge --update --changed-use @world`. Do not use the **LINGUAS** variable it [has been discontinued](https://www.gentoo.org/support/news-items/2016-06-23-l10n-use_expand.html), [see](https://wiki.gentoo.org/wiki/Localization/Guide) as well.

---

# 10. Get faster!
Make package downloads faster by defining a `mirror` for it using the **GENTOO_MIRRORS** variable in your `make.conf`, example for the UFPR Brazil mirror: `GENTOO_MIRRORS="https://gentoo.c3sl.ufpr.br/ http://gentoo.c3sl.ufpr.br/ rsync://gentoo.c3sl.ufpr.br/gentoo/"`, see the list of mirros [here](https://www. gentoo.org/downloads/mirrors/).

If you want more ease to insert, install/use the command [mirrorselect](https://wiki.gentoo.org/wiki/Mirrorselect).

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

---

I hope this first part of this series is useful, if you are interested in knowing how my `make.conf` is doing, here it is:
{% highlight bash %}
# These settings were set by the catalyst build script that automatically
# built this stage.
# Please consult /usr/share/portage/config/make.conf.example for a more
# detailed example.
COMMON_FLAGS="-O2 -pipe"
CFLAGS="${COMMON_FLAGS}"
CXXFLAGS="${COMMON_FLAGS}"
FCFLAGS="${COMMON_FLAGS}"
FFLAGS="${COMMON_FLAGS}"

# NOTE: This stage was built with the bindist Use flag enabled
PORTDIR="/var/db/repos/gentoo"
DISTDIR="/var/cache/distfiles"
PKGDIR="/var/cache/binpkgs"

# This sets the language of build output to English.
# Please keep this setting intact when reporting bugs.
LC_MESSAGES=C
USE="-systemd"
VIDEO_CARDS="intel i965 virtualbox"
GRUB_PLATFORMS="efi-64"
L10N="pt-BR"
ACCEPT_LICENSE="*"
ACCEPT_KEYWORDS="~amd64"
EMERGE_DEFAULT_OPTS="--ask --jobs 2"
GENTOO_MIRRORS="https://gentoo.c3sl.ufpr.br/ http://gentoo.c3sl.ufpr.br/ rsync://gentoo.c3sl.ufpr.br/gentoo/"
source /var/lib/layman/make.conf
{% endhighlight %}

# See too:
+ [How to Create an ebuild on Gentoo](https://en.terminalroot.com.br/how-to-create-an-ebuild-on-gentoo/)
+ [How to install rofi on Gentoo and create shortcut for it on bspwm](https://en.terminalroot.com.br/how-to-install-rofi-in-gentoo-and-create-shortcut-for-it-in-bspwm/)
+ [Installing Lightworks on Gentoo](https://en.terminalroot.com.br/installing-lightworks-on-gentoo/)
+ [How to install bspwm on Gentoo](https://en.terminalroot.com.br/how-to-install-bspwm-on-gentoo/)
+ [How to Enable Webcam Drive and Install Cheese on Gentoo](https://en.terminalroot.com.br/how-to-enable-webcam-drive-and-install-cheese-on-gentoo/)
+ [Installing and Configuring sudo on Gentoo](https://en.terminalroot.com.br/installing-and-configuring-sudo-on-gentoo/)
+ [Configuring Mirrors on Gentoo](https://en.terminalroot.com.br/configuring-mirrors-in-gentoo/)
+ [How to Install Programs via Layman on Gentoo](https://en.terminalroot.com.br/how-to-install-programs-via-layman-in-gentoo/)
+ [How to Install Vivaldi Browser on Gentoo](https://en.terminalroot.com.br/how-to-install-vivaldi-browser-in-gentoo/)
+ [Gentoo - Can't connect to local MySQL server through socket](https://en.terminalroot.com.br/gentoo-cant-connect-to-local-mysql-server-through-socket-solved/)
+ [How to Troubleshoot Audio or Sound on Gentoo](https://en.terminalroot.com.br/how-to-troubleshoot-audio-or-sound-on-gentoo/)
