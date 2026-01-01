---
layout: post
title: "Get to Know GNU Guix: A System for Programmers"
date: 2026-01-01 18:54:50
image: '/assets/img/gnu/gnu-guix/gnu-guix.jpg'
description: "🦬 An operating system from the GNU project that proposes an interesting and different approach."
tags:
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**GNU Guix** is a [distro](https://terminalroot.com/tags#distros), package manager, and operating system from the [GNU](https://terminalroot.com/tags#gnu) project that proposes a radically different approach from most [GNU/Linux](https://terminalroot.com/tags#gnulinux) distributions. It is based on **functional management** (Guix System), focusing on **reproducibility**, **isolation**, and **total system control** by the user.

Similar to [NixOS](https://terminalroot.com.br/2021/12/nixos-um-sistema-operacional-para-programadores.html), it uses the [GNU Guile (Scheme)](https://www.gnu.org/software/guile/) language to define packages, services, and the entire system configuration.

Features:
* The output depends only on the inputs.
* There are no side effects on the system.
* Each package is installed in a unique directory in `/gnu/store`.
* **Nothing overwrites anything.**
* Different versions of the same software coexist without conflict.
* Instant rollback.
* Independent profiles.

GNU Guix is widely used for: <b>Scientific Research</b>, <b>DevOps</b>, and <b>Security Auditing</b>.

Guix strictly adheres to the **Free Software Foundation** guidelines, solidifying: Free Software Freedom.

GNU Guix is not for those who want to "*just install and use*"; it's for those who want **control**, **predictability**, and **truly declarative systems**.

If you see the operating system as code, Guix makes more sense than any traditional distro.


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

## Download and Installation
You can download the `.iso` from the [GNU Guix Downloads page](https://guix.gnu.org/en/download/). Choose the alternative that suits your interest. If you are installing on your physical machine, choose the first option: **GNU Guix System (version)** 64-bit (*x86_64*) or 32-bit (*i686*).

After booting from the `.iso` file, just follow the steps to install, which, by the way, is quite intuitive. The first screen will be this one. If you want ease, just choose the option using **graphical mode**:

![GNU Guix install 01](/assets/img/gnu/gnu-guix/01.png)

GNU Guix does not use the commercial *Linux Kernel* but offers you two types of *Kernels*:
+ [GNU Hurd](https://pt.wikipedia.org/wiki/GNU_Hurd), a kernel that is not yet finished but functional, which *separates tasks*. Since Linux is considered a *systemd* (like a multifunction printer) of kernels—it performs many tasks, which is considered a bad idea by many (including Tanenbaum, the creator of Minix, which inspired Linux);
+ and also [GNU Linux-libre](https://pt.wikipedia.org/wiki/GNU_Linux-libre), an operating system kernel cleaned of all *binary blobs* containing private firmware, some of them even created by the NSA.

The selection screen is this one:

![GNU Guix](/assets/img/gnu/gnu-guix/02.png)

### Choosing the Graphical Environment
During installation, you can also define your [Desktop Environment](https://terminalroot.com.br/2021/09/os-7-melhores-frameworks-cpp-para-criar-interface-grafica.html) or [Window Manager](https://terminalroot.com.br/2022/05/instale-esse-gerenciador-de-janelas-escrito-em-cpp.html), or even install your own (e.g., KDE Plasma), which is not in the list later, but already on this screen there are options: [GNOME](https://terminalroot.com/tags/#gnome), [XFCE](https://terminalroot.com.br/2021/12/nixos-um-sistema-operacional-para-programadores.html), [MATE](https://terminalroot.com.br/2016/05/como-alterar-o-icone-do-painel.html), Icewm, [Openbox](https://terminalroot.com.br/2021/11/os-17-melhores-temas-para-seu-openbox.html), [AwesomeWM](https://awesomewm.org/), [i3](https://github.com/terroo/i3-radius), [Ratpoison](https://www.nongnu.org/ratpoison/), and [Emacs EXWM](https://github.com/emacs-exwm/exwm):

![GNU Guix graphical](/assets/img/gnu/gnu-guix/03.png)

After these basic choices, just partition your disk as desired and start the installation process... and then, after the reboot, just choose the system automatically in GRUB:

![GNU Guix multiple screens](/assets/img/gnu/gnu-guix/04.png)

---

## Usage
To install anything, just use the `guix` command without `sudo`. Example, installing [Vim](https://terminalroot.com.br/vim):

{% highlight bash %}
guix install vim
{% endhighlight %}

Remember that GNU Guix offers independent profiles, so [Vim](https://terminalroot.com/tags#vim) will only be available for your user.

If you want to install globally, add the `vim` package to the `packages` section of `operating-system` in the path: `/etc/config.scm`, example of inclusion on the `append` line:

{% highlight scheme %}
(use-modules (gnu))

(operating-system
  ;; ...
  (packages
   (append
    (list vim)
    %base-packages)))
{% endhighlight %}
> If you need to reconfigure to see it: `sudo guix system reconfigure /etc/config.scm`

Then just install with `sudo`:

{% highlight bash %}
sudo guix install vim
{% endhighlight %}

The package list has everything: [GNU GCC](https://terminalroot.com/tags#gcc), [GNU Make](https://terminalroot.com/tags#make), [Clang/LLVM](https://terminalroot.com/tags#clang), [CMake](https://terminalroot.com/tags#cmake), ... For all packages, see:

### <https://packages.guix.gnu.org/>

Or here: <https://hpc.guix.info/browse>.

![GNU Guix Terminal Root](/assets/img/gnu/gnu-guix/05.png)

---

For more information, visit: <https://guix.gnu.org/>


