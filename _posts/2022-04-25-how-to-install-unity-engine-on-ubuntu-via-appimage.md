---
layout: post
title: "How to Install Unity Engine on Ubuntu 22.04 via AppImage"
date: 2022-04-25 17:48:06
image: '/assets/img/gamedev/unity3d-ubuntu.jpg'
description: 'Unity is a multiplatform game engine developed by Unity Technologies.'
tags:
- gamedev
- csharp
- ubuntu
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Unity is a multiplatform [game engine](https://terminalroot.com/games) developed by Unity Technologies.

The engine can be used to create three-dimensional (3D) and two-dimensional (2D) games, as well as interactive simulations and other experiences. It is commonly used for game development, but there is activity in other areas.

In this article we will see how to install on [Ubuntu](https://terminalroot.com/tags#ubuntu) **22.04**, however, you can adapt the instructions for any other version or even another distribution.

---

# Installation
First install [FUSE](https://www.kernel.org/doc/html/latest/filesystems/fuse.html):

{% highlight sh %}
sudo apt install fuse libfuse2
{% endhighlight %}

Configure for your user:

{% highlight sh %}
sudo modprobe fuse
sudo groupadd fuse
sudo usermod -a -G fuse $USER
{% endhighlight %}

Download the AppImage from Unity, give execute permission and then run with the commands below:

{% highlight sh %}
wget https://public-cdn.cloud.unity3d.com/hub/prod/UnityHub.AppImage
chmod +x UnityHub.AppImage
./UnityHub.AppImage
{% endhighlight %}
> Or download via your browser nese [link](https://unity3d.com/get-unity/download) .

It will ask you:
+ Accept Terms and Conditions
+ Accept cookies
+ Create a Unity account


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

![01](/assets/img/gamedev/unityhub/unity-hub-01.jpg)


Now create your project in: **← Preferences**, then in the left corner in **Installs** and then in the button in the upper right corner: **ADD** .

After that choose the desired version and click on **Next** . Then check the option **Linux Build Support(IL2CPP)** and then click **DONE** .

![02](/assets/img/gamedev/unityhub/unity-hub-03.jpg)
![03](/assets/img/gamedev/unityhub/unity-hub-04.jpg)
![04](/assets/img/gamedev/unityhub/unity-hub-05.jpg)

After that click on the gears icon in the upper right corner. Then **License Management**, then **Unity Personal** and also select **I don't...** .

![05](/assets/img/gamedev/unityhub/unity-hub-02.jpg)


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

![06](/assets/img/gamedev/unityhub/unity-hub-09.jpg)
![07](/assets/img/gamedev/unityhub/unity-hub-10.jpg)

After Unity appears, note that a blue progress bar will start on top of it, wait for download and install and after finished click **Projects** and then **NEW**, choose **3D** and then **CREATE** create your game!

![08](/assets/img/gamedev/unityhub/unity-hub-06.jpg)


<!-- RECTANGLE 2 - OnParagragraph -->
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
![09](/assets/img/gamedev/unityhub/unity-hub-07.jpg)
![10](/assets/img/gamedev/unityhub/unity-hub-11.jpg)

> It will ask if you want to enter **Safe Mode** click on the **Ignore** button!

---

# Add icon to Dash

Create a directory in `/opt`
{% highlight sh %}
sudo mkdir -p /opt/unity
{% endhighlight %}

Move the `./UnityHub.AppImage` by renaming there:
{% highlight sh %}
sudo mv UnityHub.AppImage /opt/unity/unityhub
{% endhighlight %}

Create a `.desktop` file in `/usr/share/applications`:

{% highlight sh %}
sudo vim /usr/share/applications/unityhub.desktop
{% endhighlight %}

And paste this content inside and save:
{% highlight sh %}
[Desktop Entry]
Name=Unity 3D/2D Engine
GenericName=Game engine
Comment=Multi-platform 2D and 3D game engine with a feature-rich editor
Exec=unityhub
Icon=unityhub
terminal=false
PrefersNonDefaultGPU=true
Type=Application
MimeType=application/x-unity-project;
Categories=Development;IDE;
{% endhighlight %}

Download the icon and save it as `unityhub.png` in `/usr/share/pixmaps`:
{% highlight sh %}
sudo wget -q https://i.redd.it/tu3gt6ysfxq71.png -O /usr/share/pixmaps/unityhub.png
{% endhighlight %}

Create a symbolic link to be a `$PATH` binary:
{% highlight sh %}
sudo ln -s /opt/unity/unityhub /usr/local/bin/unityhub
{% endhighlight %}

Now look in your Dash in Development
> In some cases you will need to reload the panel for the icon to appear: press **Alt + F2** , type the letter **r** and press enter


![11](/assets/img/gamedev/unityhub/unity-hub-15.jpg)


![12](/assets/img/gamedev/unityhub/unity-hub-12.jpg)

Have fun creating!

