---
layout: post
title: "Quickshell: Build Your Own Desktop on Linux"
date: 2026-05-06 09:37:06
image: '/assets/img/qt/img-quick-shell-800.jpg'
description: "🔳 Instead of relying on ready-made solutions (Waybar, Polybar, ...), you create your own."
tags:
- cpp
- qt
- gnulinux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Quickshell** is a modern toolkit built with [C++](https://terminalroot.com/tags#cpp) for creating desktop interface components — bars, widgets, lock screens, launchers, and even complete environments — using [QtQuick + QML](https://terminalroot.com/tags#qt).

+ It is not a "bar program".
+ It is also not a complete, ready-made desktop.

It is a **foundation for building a custom desktop**, running alongside a compositor like Hyprland, Sway, or i3.

In practice, it replaces several pieces:

* status bar
* notifications
* widgets
* lockscreen
* display manager
* system controls

---

## Example

Quickshell uses:

* **QtQuick (UI)**
* **QML (configuration/programming)**
* Hot reload (save → instant update) ([Quickshell][2])

Simple example (bar):

{% highlight qml %}
PanelWindow {
  anchors {
    top: true
    left: true
    right: true
  }

  implicitHeight: 30

  Text {
    anchors.centerIn: parent
    text: "hello world"
  }
}
{% endhighlight %}

### Native integrations:

One of its strengths is that it comes already integrated with the system:

* Wayland + X11 (windowing)
* Hyprland, i3, Sway (workspaces)
* PipeWire (audio)
* BlueZ (Bluetooth)
* UPower (battery)
* MPRIS (media players)
* standard system tray

This eliminates a lot of boilerplate.

---

## Installation
+ Arch Linux / EndeavourOS / Manjaro
{% highlight bash %}
yay -S quickshell
### Or
paru -S quickshell
{% endhighlight %}

Or build from scratch on any system:

Dependencies:
{% highlight bash %}
sudo apt install cmake ninja-build qt6-base-dev qt6-declarative-dev \
qt6-wayland wayland-protocols libpipewire-0.3-dev \
libdbus-1-dev libxkbcommon-dev
{% endhighlight %}

Clone:
{% highlight bash %}
git clone https://github.com/quickshell-mirror/quickshell.git
cd quickshell
{% endhighlight %}

Build:
{% highlight bash %}
cmake -B build -G Ninja
cmake --build build
{% endhighlight %}

Install:
{% highlight bash %}
sudo cmake --install build
{% endhighlight %}

Run:
{% highlight bash %}
quickshell
{% endhighlight %}

Configuration:

{% highlight bash %}
~/.config/quickshell/main.qml
{% endhighlight %}

Minimal example:

{% highlight qml %}
import QtQuick
import Quickshell

PanelWindow {
    anchors.top: true
    anchors.left: true
    anchors.right: true
    implicitHeight: 30

    Text {
        anchors.centerIn: parent
        text: "Quickshell is working"
    }
}
{% endhighlight %}

* Works best on **Wayland** (Hyprland, Sway, etc.)
* May be limited on X11
* Still in development → bugs are normal
* No config = blank screen

---

For more information, visit the [repository](https://github.com/quickshell-mirror/quickshell).

---

## [Learn Qt](https://terminalroot.com.br/qt)
### <https://terminalroot.com.br/qt>
## [Complete C++ Course](https://terminalroot.com.br/promo)
### <https://terminalroot.com.br/promo>
