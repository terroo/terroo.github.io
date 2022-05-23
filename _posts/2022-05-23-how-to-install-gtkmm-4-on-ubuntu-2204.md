---
layout: post
title: "How to install GTKMM 4 on Ubuntu 22.04"
date: 2022-05-23 12:59:58
image: '/assets/img/gtkmm/synfig-gtkmm.png'
description: 'As of the time of this article the only version available in the repository is 3.0 .'
tags:
- gtkmm
- cpp
- cppdaily
---

![Synfig Studio, made with gtkmm]({{ page.image }} '{{ page.description }}')
> [Synfig Studio](https://www.synfig.org/) is one of several software that was made with gtkmm

---

**gtkmm-4.0** has several new improvements and features.

In this article we will see how to compile on [Ubuntu](https://terminalroot.com/tags#ubuntu) 22.04 .
> Before following this tutorial, check if version 4 is already available in the repository, as some distros already have it. But anyway, it will serve as a learning experience or for new versions! 😃

---

# Dependencies
Install build dependencies

By default, GNOME uses [Meson](https://terminalroot.com/tags#meson), but in all packages there is an alternative to compile with [GNU Autotools](https://terminalroot.com/ tags#autotools), in this case we will compile everything with Autotools:
> It's also good to have [gtkmm-3.0](https://terminalroot.com/tags#gtkmm) to solve other dependencies. In addition to [Gtk4](https://www.gtk.org/) .

{% highlight sh %}
sudo apt install build-essential git g++ autotools-dev libgtkmm-3.0-dev \
         libgtkmm-3.0-doc mm-common libgtk-4-bin \
         libgtk-4-common libgtk-4-dev libgtk-4-doc pkg-config
{% endhighlight %}

Now let's use the updated versions, without them you can't continue, click on the links if there is already a newer version, download the latest one. It accepts these versions or higher.

You must have [SigC++-3.07](https://github.com/dbus-cxx/libsigc--3.0):
{% highlight sh %}
wget ftp://ftp.acc.umu.se/pub/gnome/sources/libsigc++/3.0/libsigc++-3.0.7.tar.xz
tar Jxvf libsigc++-3.0.7.tar.xz
cd libsigc++-3.0.7/
./autogen.sh --prefix=/usr/local
make
sudo make install
{% endhighlight %}

It is necessary to have [giomm-2.68](https://gitlab.gnome.org/GNOME/glibmm) and to get it we compile/install [glibmm-2.68](https://gitlab.gnome.org/GNOME /glibmm):
{% highlight sh %}
wget https://download.gnome.org/sources/glibmm/2.68/glibmm-2.68.2.tar.xz
tar Jxvf glibmm-2.68.2.tar.xz
cd glibmm-2.68.2/
./autogen.sh --prefix=/usr
make
sudo make install
{% endhighlight %}

You must have the latest version of [cairomm](https://github.com/freedesktop/cairomm):
{% highlight sh %}
git clone https://github.com/freedesktop/cairomm
cd cairomm
./autogen.sh --prefix=/usr
make
sudo make install
{% endhighlight %}

And finally [pangomm-2.50](https://download.gnome.org/sources/pangomm/2.50/):
{% highlight sh %}
wget https://download.gnome.org/sources/pangomm/2.50/pangomm-2.50.0.tar.xz
tar Jxvf pangomm-2.50.0/
cd pangomm-2.50.o/
./autogen.sh --prefix=/usr
make
sudo make install
{% endhighlight %}

If you want to see the path where they are all installed see [here](https://gist.github.com/terroo/812d4cc385e64058d7f23341fb857aa8) .


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

# Compile and install [gtkmm-4.0](http://www.gtkmm.org/)

Download and check the [hash](https://terminalroot.com/tags#hash)
{% highlight sh %}
wget https://download.gnome.org/sources/gtkmm/4.6/gtkmm-4.6.1.tar.xz
wget https://download.gnome.org/sources/gtkmm/4.6/gtkmm-4.6.1.sha256sum
sha256sum -c --ignore-missing gtkmm-4.6.1.sha256sum
{% endhighlight %}
> If it appears: `gtkmm-4.6.1.tar.xz: SUCCESS`, everything is ok and we can proceed, if not, download the files again.

Unzip, compile and install
{% highlight sh %}
tar Jxvf gtkmm-4.6.1.tar.xz
cd gtkmm-4.6.1
./autogen.sh --prefix=/usr
make
sudo make install
{% endhighlight %}

---

# Checking `libsigc-3.0.so`
Run the command:

{% highlight sh %}
ls /usr/lib/libsigc-3*
{% endhighlight %}

If you don't find anything, CREATE these symlinks:

{% highlight sh %}
sudo ln -s /usr/local/lib/libsigc-3.0.so.0.0.0 /usr/lib/libsigc-3.0.so.0.0.0
sudo ln -s /usr/local/lib/libsigc-3.0.la /usr/lib/libsigc-3.0.la
sudo ln -s /usr/local/lib/libsigc-3.0.so /usr/lib/libsigc-3.0.so
sudo ln -s /usr/local/lib/libsigc-3.0.so.0 /usr/lib/libsigc-3.0.so.0
{% endhighlight %}
> If any of them are not in `/usr/local/lib`, just ignore them and create only the ones that exist.

This will solve problems when running our program!

---

# Testing gtkmm-4.0
Create a file with any name, for example `main.cpp` and insert the content below:

{% highlight cpp %}
#include <gtkmm.h>

class MyWindow : public Gtk::Window {
public:
  MyWindow();
};

MyWindow::MyWindow(){
  set_title("Basic application");
  set_default_size(800, 450);
}

int main(int argc, char ** argv){
  auto app = Gtk::Application::create("org.gtkmm.examples.base");
  return app->make_window_and_run<MyWindow>(argc, argv);
}
{% endhighlight %}

Compile and run:

{% highlight sh %}
g++ main.cpp $(pkg-config gtkmm-4.0 --cflags --libs)
./a.out
{% endhighlight %}

If all steps were followed correctly, this window will appear:

![gtkmm-4.0 running](/assets/img/gtkmm/gtkmm-4-running.png) 

<!-- MINI ADS -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Useful links
+ <http://www.gtkmm.org/>
+ <https://en.wikipedia.org/wiki/Gtkmm>
+ <https://developer-old.gnome.org/gtkmm-tutorial/stable/sec-basics-simple-example.html.en>
+ <https://developer-old.gnome.org/gtkmm-tutorial/stable/sec-install-unix-and-linux.html.en>
+ <https://download.gnome.org/sources/gtkmm/4.6/>
+ <https://github.com/ToshioCP/Gtk4-tutorial/blob/main/gfm/sec2.md>
+ <https://github.com/dbus-cxx/libsigc--3.0>
+ <https://www.linuxfromscratch.org/blfs/view/11.0/general/libsigc3.html>
+ <https://github.com/libsigcplusplus/libsigcplusplus>
+ <https://github.com/ToshioCP/Gtk4-tutorial/blob/main/gfm/sec2.md>
+ <https://github.com/freedesktop/cairomm>
+ <https://download.gnome.org/sources/pangomm/2.50/>



