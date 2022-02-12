---
layout: post
title: "15 examples of different usage of ffmpeg"
date: 2022-02-12 09:29:28
image: '/assets/img/media/ffmpeg.jpg'
description: 'ffmpeg is an excellent tool. It's a complete video editor via the command line.'
tags:
- multimedia
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[ffmpeg](https://en.wikipedia.org/wiki/FFmpeg) was created by [Fabrice Bellard](https://bellard.org/) the same creator as [QEMU](https://www.qemu.org/) and [QuickJS](https://bellard.org/quickjs/ ), the *engine* behind [JSLinux](https://jslinux.org/).

In addition to the conventional conversion commands that we use on a daily basis, let's see 15 more utilities that can be good for you in many cases.

---

# 1. Finding out how many FPS your video has
{% highlight bash %}
ffmpeg -i output.mp4 2>&1 | egrep -o '[0-9]+ fps'
{% endhighlight %}

---

# 2. Inserting ZOOM into your video
{% highlight bash %}
fmpeg -i input.mp4 -vf "zoompan=z='if(lte(mod(time,10),10),2,1)':d=1:x=iw/2-(iw/zoom/2 ):y=ih/2-(ih/zoom/2):fps=30" output.mp4
{% endhighlight %}

---

# 3. Optimizing your video
Decreasing the size without losing image quality:
{% highlight bash %}
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4
{% endhighlight %}

---

# 4. Resizing video resolution
Leaving it in the resolution: **1280x720**
{% highlight bash %}
ffmpeg -i input.mp4 -vf scale=1280:720 -preset slow -crf 18 output.mp4
{% endhighlight %}


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

# 5. Resizing the width and height will be proportional
Specified for width of **1280** .
{% highlight bash %}
ffmpeg -i input.mp4 -vf scale=1280:-1 output.mp4
{% endhighlight %}

---

# 6. Resizing the height and width will be proportional
Specified for height of **720**
{% highlight bash %}
ffmpeg -i input.mp4 -vf scale=-1:720 output.mp4
{% endhighlight %}

---

# 7. Removing audio from a video
{% highlight bash %}
ffmpeg -i input.mp4 -c copy -an output.mp4
{% endhighlight %}

---

# 8. Rotating a video
It looks like a cell phone screen, the width becomes the height and vice versa


{% highlight bash %}
ffmpeg -i input.mp4 -vf "transpose=clock" output.mp4
{% endhighlight %}

---

# 9. Rotating 180°
If the video is "upside down" you will reverse it
{% highlight bash %}
ffmpeg -i input.mp4 -vf "transpose=2,transpose=2" output.mp4
{% endhighlight %}

---

# 10. Summarizing information output
When you run the command: `ffmpeg -i output.mp4` ffmpeg displays the video data, but the *header* makes it difficult to see this, to ignore that initial data, run:
{% highlight bash %}
ffmpeg -i output.mp4 -hide_banner
{% endhighlight %}


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

---

# 11. Extracting frames from a video
{% highlight bash %}
mkdir frames
ffmpeg -y -ss 00:00 -i input.mp4 -t 10 "frames/filename%05d.jpg"
{% endhighlight %}
> There will be several images in the *frames* directory named *filename00001.jpg* up to the maximum number of images that the video has.

---

# 12. Extract frames from only the initial 10 seconds
{% highlight bash %}
ffmpeg -y -ss 00:00 -i input.mp4 -t 10 "frames/filename%05d.jpg"
{% endhighlight %}

---

# 13. Watching video
{% highlight bash %}
ffplay video.mp4
{% endhighlight %}

---

# 14. Listening to music
{% highlight bash %}
ffplay music.mp3
{% endhighlight %}

---

# 15. Adding subtitles to video
Example caption:
> `vim subtitle.srt`
{% highlight txt %}
1
00:00:00,000 --> 00:00:02,827
- Root Terminal - Systems
Operational, C++ and Development.

two
00:00:02,827 --> 00:00:06,383
15 Examples of different usage
from ffmpeg to help you

3
00:00:06,383 --> 00:00:09,427
Don't forget to also read
the links below. It cost!
{% endhighlight %}

Command:
{% highlight bash %}
ffmpeg -i input.mp4 -i subtitle.srt -c copy -c:s mov_text outfile.mp4
{% endhighlight %}


