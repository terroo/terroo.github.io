---
layout: post
title: "Add Videos as Wallpaper on your Linux"
date: 2020-06-19 16:11:08
image: '/assets/img/apps/wallset-post-illustrate.jpg'
description: 'WallSet is a command line utility written in Shell Script that manages your wallpapers and allows you to place videos as wallpaper.'
featured-img: ../apps/wallset-post-illustrate.jpg
tags:
- shellscript
- apps
- linux
- commandline
---

![Add Videos as Wallpaper on your Linux](/assets/img/apps/wallset-post-illustrate.jpg)
> Merely illustrative image

[wallset](https://github.com/terroo/wallset) is a command line utility written in Shell Script that manages your wallpapers and allows you to place videos as wallpaper.

# Installation
First you will need to have the following software installed on your system:
+ [ffmpeg >=4.2.3](https://ffmpeg.org/)
+ [feh >=3.4.1](https://feh.finalrewind.org/)
+ [imagemagick >=7.0.10.16](https://www.imagemagick.org/)
+ [xrandr >=1.5.1](https://gitlab.freedesktop.org/xorg/app/xrandr)
+ [xdg-utils >=1.1.3](https://www.freedesktop.org/wiki/Software/xdg-utils/)

> Some software may work in versions lower than those reported.

After that you will need [Git](https://git-scm.com/) to clone the repository and then install. To do this, simply run the commands below:
{% highlight bash %}
git clone https://github.com/terroo/wallset down-wallset
cd down-wallset
./install.sh
{% endhighlight %}
> Enter your `sudo` password to complete the installation.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Usage
For quick help with the commands, run the `wallset` command with the` --help` parameter or just `-h`, the output will be similar to this:
{% highlight bash %}
usage: wallset [options]
  
  Options:
    -u,--use [N]          Change the Wallpaper to the number entered. Use images with 3 digits, example: 014,003,099
    -a,--add img.jpg ...  Add images
    -S,--set              Use before the -a, --add parameter when you want to add already change       
    -q,--quit             Ends the loop
    -t,--time [N]         Creates an image loop with the time reported in seconds
    -d,--display          Opens the last image added
    -c,--count            Informs how many images there are
    -s,--show             Shows the current image
    -V,--video [video]    Add a video as Wallpaper
    -L,--list-videos      Lists the videos that have already been used
    -I,--set-video [N]    Use the video by the number listed in --list-videos
    -r,--remove           Remove the last image added
    -h,--help             Display this help
    -v,--version          Display the version of this program

  Examples:  
    Add an image → 'wallset -a img.jpg'
    Add and set it as Wallpaper → 'wallset --set --add img.jpg'
    Change to image with this number → 'wallset -u 001'
    Add the video → 'wallset -V video.mp4'
    Use the video already used and listed → 'wallset -I 3'

* [N] Means that you need to use a number
** Only videos in .mp4 format
*** Only the first 10 seconds of the video will be displayed
**** Use 3-digit images, example: 011
{% endhighlight %}

### 01. The first necessary command is to add images, example:
{% highlight bash %}
wallset --add image.jpg
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

You add multiple images at once:
{% highlight bash %}
wallset -a image-1.jpg image-2.jpg image-3.jpg # ...
{% endhighlight %}

If it is in a directory with several images you can also add it like this:
{% highlight bash %}
wallset -a $(ls *.jpg *.png)
{% endhighlight %}

### 02. Setting a Wallpaper
Wallpapers are saved and numbered
{% highlight bash %}
wallset --use 001
{% endhighlight %}
> **TIP**: If you want to change the wallpaper at the time of addition, just use it in conjunction with the `-S` parameter, example:
{% highlight bash %}
wallset -S -a imagem.png
{% endhighlight %}

### 03. Obtaining information on the number of wallpapers that have been added to [wallset](https://github.com/terroo/wallset)
{% highlight bash %}
wallset --count
{% endhighlight %}

### 04. Opening the current image, being able to browse through all using the *[next →]* feature of your image manager:
{% highlight bash %}
wallset --display
{% endhighlight %}

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

### 05. Getting the current image number:
{% highlight bash %}
wallset --show
{% endhighlight %}

### 06. Removing the last image added: `wallset --remove`

It is also possible to make a * loop * of the added images so that the wallpaper is changed according to the pre-set time. To do this, use the `--time` PARAMETER and then enter the time in seconds.
> Assuming you want the wallpapers to be changed every 1 hour, run:

{% highlight bash %}
wallset --time 3600
{% endhighlight %}

Before changing the wallpaper after using the `--time` feature, run the command with the `--quit` parameter, example:
{% highlight bash %}
wallset --quit
{% endhighlight %}
> This is a correct way of using the program. It avoids problems that can be incorrectly classified as ** bug **, but it is just a * misuse *.

# Adding video as wallpaper
One of the most interesting features of [wallset](https://github.com/terroo/wallset) is that you can add videos as a wallpaper. To do this, simply run the command:
{% highlight bash %}
wallset --video seu-video.mp4
{% endhighlight %}
> Or the full video path: `wallset -V path/to/video.mp4`

To stop a video, the procedure is the same as the image loop, just use the `--quit` parameter or just` -q`, example:
{% highlight bash %}
wallset -q
{% endhighlight %}
> The video image will be frozen, becoming the current wallpaper. To change, use the `--use [number]` parameter or just `-u [number]`, as we have seen.

After using a video only once, it is automatically added to the ready-made videos directory, to list all videos, use the `--list-videos` parameter:
{% highlight bash %}
wallset --list-videos
# Or only
wallset -L
{% endhighlight %}
If you want to use a video that is in the video directory, just use the `--set-video` parameter and then enter the number displayed when listing the videos, example:
{% highlight bash %}
wallset --set-video 1
# or only
wallset -I 2
{% endhighlight %}

# Comments
I created this program recently, so it needs more testing. At the time of writing this article, I only tested it on a [window manager](https://en.terminalroot.com.br/5-tools-for-you-to-use-on-your-wm/), more precisely on [bspwm](https://en.terminalroot.com.br/how-to-install-bspwm-on-gentoo/). So feel free to report bugs if you can find it at: <https://github.com/terroo/wallset/issues>.

If you want to uninstall the `wallset`, proceed as follows using the installer itself, however with the `uninstall` parameter:
> Remembering that when performing the uninstallation all images and videos added will also be deleted, in case you intend to reinstall it in the future.

{% highlight bash %}
git clone https://github.com/terroo/wallset down-wallset
cd down-wallset
./install.sh uninstall
{% endhighlight %}

I also created a video showing the main features of the program and using the [examples](https://github.com/terroo/wallset/tree/master/examples) that are part of the [repository](https://github.com/terroo/wallset/tree/master/examples) directory itself.

If you want to watch the video, just click [on this link](https://youtu.be/Mb0SXMft2sw).
**Note**: THE VIDEO IS IN BRAZILIAN PORTUGUESE, BUT YOU CAN TRY TO ENABLE THE SUBTITLES THAT WERE AUTOMATICALLY CREATED BY YOUTUBE'S ARTIFICIAL INTELLIGENCE AND ARE SUBJECT TO FAILURES.

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

## Watch The Video
{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/Mb0SXMft2sw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



