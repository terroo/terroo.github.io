---
layout: post
title: "Running Godot GDScript and CSharp on Xorg with Intel Cards"
date: 2024-06-17 09:08:17
image: '/assets/img/godot/godot-dri-3-glamor.jpg'
description: "🤖 If you have this same problem, try these settings! "
tags:
- godot
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

I usually use [window managers](https://terminalroot.com/tags#wm) on my machine because they consume less computer resources: memory, processing,... And this improves performance.

But, I had a problem related to *Tearing* (the screen was "*cutting in half*"), especially when doing *screencast*.

So, I solved this problem by creating a configuration file in `/etc/X11/xorg.conf.d/20-intel.conf` and inserting the content below:

{% highlight bash %}
Section "Device"
 Identifier "Intel Graphics"
 "Intel" driver
 Option "AccelMethod" "sna"
 Option "DRI" "2"
 Option "TearFree" "true"
EndSection
{% endhighlight %}

However, one day I decided to install [Godot CSharp](https://terminalroot.com/tags#csharp) and when I opened it, or even when I could open it, but after trying to open a project, I got the error :

{% highlight bash %}
Your video card drivers seem not to support the required Vulkan version.

If possible, consider updating your video card drivers or using the OpenGL 3 driver.

You can enable the OpenGL 3 driver by starting the engine from the
command line with the command:

 "godot-csharp" --rendering-driver opengl3

If you recently updated your video card drivers, try rebooting.
{% endhighlight %}
![Godot error](/assets/img/godot/err-godot.png)

Even running via the command line as the message indicated `godot-csharp --rendering-driver opengl3`, it didn't work:
{% highlight bash %}
Godot Engine v4.1.3.stable.mono.official.f06b6836a - https://godotengine.org
vulkan: No DRI3 support detected - required for presentation
Note: you can probably enable DRI3 in your Xorg config
ERROR: None of Vulkan devices supports both graphics and present queues.
 at: _create_physical_device (drivers/vulkan/vulkan_context.cpp:1278)
ERROR: Condition "err != OK" is true. Returning: ERR_CANT_CREATE
 at: _window_create (drivers/vulkan/vulkan_context.cpp:1681)
ERROR: Can't create a Vulkan window
 at: _create_window (platform/linuxbsd/x11/display_server_x11.cpp:5300)
libEGL warning: failed to get driver name for fd -1
...
{% endhighlight %}

But generally we ignore the messages and simply summarize them as: "*- Ahhh! There was an error... :(*"

However, on the second attempt I decided to read the *messages* from the output and notice that they contain the following line:
{% highlight bash %}
vulkan: No DRI3 support detected - required for presentation
{% endhighlight %}
> **Vulkan** needs this configuration!

So I thought to myself: *— Ummm... I know!!*.

I changed the same configuration file to **DRI 3**, but after doing so it was still a bit strange, so I changed the acceleration method from *sna* to **glamor**.

In the end my file: `/etc/X11/xorg.conf.d/20-intel.conf` looked like this:
{% highlight bash %}
Section "Device"
  Identifier "Intel Graphics"
  "Intel" driver
  Option "AccelMethod" "glamor"
  Option "DRI" "3"
  Option "TearFree" "true"
EndSection
{% endhighlight %}

All I had to do was close the session (log out) and log in again and things worked:

![Godot C# running](/assets/img/godot/godot-csharp.jpeg)

If you have this same problem, try these settings!
> Remembering that first you need to have: [Vulkan](https://www.vulkan.org/) installed on your system!

You can still replace some lines like: `Driver` or even add `Backlight` to work with `MESA Intel`:
{% highlight bash %}
...
"modesetting" driver
Option "Backlight" "Intel_backlight"
...
{% endhighlight %}

If it's necessary!

**OBSERVATION**:

Maybe you got here thinking that there would be a solution to another type of problem: a Godot bug that "*crashes*" when you save any modification to your project.

I've already researched this, including from people who have already run [GDB](https://www.onlinegdb.com/) to know exactly where this failure is.

If you use [GNU/Linux](https://terminalroot.com/tags#gnulinux) distros, this is most likely due to your Graphical Interface: [GNOME](https://terminalroot.com/tags#gnome), as well as those based on it: [XFCE](https://xfce.org/), [Cinnamon](https://github.com/linuxmint/cinnamon),... including [window managers ](https://terminalroot.com/tags#wm).

The good news is that if you use [KDE Plasma](https://kde.org/pt-br/plasma-desktop/), you probably won't have this kind of problem!

---

# Useful links
+ <https://godotengine.org/>
+ <https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html>
+ <https://x.com/TerminalRootTV/status/1722975145512280507/photo/1>
