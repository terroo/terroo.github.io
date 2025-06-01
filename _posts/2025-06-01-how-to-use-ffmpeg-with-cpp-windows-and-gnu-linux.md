---
layout: post
title: "How to use FFmpeg with C++ (Windows and GNU/Linux)"
date: 2025-06-01 15:35:27
image: '/assets/img/cpp/ffpp.jpg'
description: "📺 I Created a Dynamic Library with C++ for the FFmpeg C API to Make Integration Easier and Faster for Graphical Applications."
tags:
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

`ffpp` is a dynamic library written in [C++](https://terminalroot.com.br/cpp) with an [API](https://terminalroot.com/tags#api) for most major tasks using [FFmpeg](https://ffmpeg.org). Much faster for GUI applications than using processes.

![ffpp](https://github.com/terroo/ffpp/raw/main/resources/ffpp-running-gnu.png)

> Running on [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#gnulinux).


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

## Usage on [Windows](https://terminalroot.com/tags#windows)

> Requires [Clang](https://terminalroot.com/how-to-install-the-new-version-of-clang-llvm-on-windows/)

1. [Download `libffppwin`](https://bit.ly/libffppwin)

{% highlight powershell %}
Invoke-WebRequest -Uri "https://bit.ly/libffppwin" -OutFile "libffppwin.rar"
{% endhighlight %}

2. Extract the `.rar`

3. Enter the folder:

{% highlight bash %}
cd .\libffppwin
{% endhighlight %}

4. Create a basic code, e.g., `main.cpp`:

{% highlight cpp %}
#include "ffpp/ffpp.hpp"
#include <memory>

int main(){
  auto ffpp = std::make_unique<FFPP>();
  std::cout << "Duration: " 
    << ffpp->ffpp_info(FFPP_INFO::DURATION, "video.mp4") << '\n';
}
{% endhighlight %}

> Optional test video: [video.mp4](https://terminalroot.com/downloads/video.mp4)

5. Compile and run:

{% highlight powershell %}
# PowerShell
pwsh build.ps1 main.cpp # Or more files

# Or: Windows [PowerShell](https://terminalroot.com/tags#powershell)
powershell build.ps1 main.cpp # Or more files

# Or directly
.\build.ps1 main.cpp # Or more files
{% endhighlight %}

If *Windows Defender* blocks execution, allow the script:

{% highlight powershell %}
pwsh -ExecutionPolicy Bypass -File build.ps1 main.cpp # Or more files
{% endhighlight %}

**The `build.ps1` script compiles and runs the generated binary. Output example: `Duration: 00:00:05`**

> To build the *libffmpeg* and compile the DLL from scratch, check: [build-win.md](https://github.com/terroo/ffpp/blob/main/resources/build-win.md)

---

## On [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#gnulinux)

Dependencies:

### On [Arch](https://terminalroot.com/meet-the-arch-hurd/):

{% highlight bash %}
sudo pacman -S gcc ffmpeg make cmake pkg-config git
{% endhighlight %}

### On [Debian/Ubuntu/Mint](https://terminalroot.com/tags#ubuntu):

{% highlight bash %}
sudo apt install build-essential ffmpeg make cmake pkg-config git
{% endhighlight %}

### Build and install

> Run all the commands below:

{% highlight bash %}
git clone https://github.com/terroo/ffpp
cd ffpp
cmake . -B build
cmake --build build
sudo cmake --install build
# Important after install
# Something like: export LD_LIBRARY_PATH=/usr/local/lib
# But system-wide:
echo /usr/local/lib | sudo tee /etc/ld.so.conf.d/ffpp.conf
sudo ldconfig
{% endhighlight %}

Create a basic code, e.g., `main.cpp`:

{% highlight cpp %}
#include <ffpp/ffpp.hpp>
#include <memory>

int main(){
  auto ffpp = std::make_unique<FFPP>();
  std::cout << "Duration: " 
    << ffpp->ffpp_info(FFPP_INFO::DURATION, "video.mp4") << '\n';
}
{% endhighlight %}

> Optional test video: [video.mp4](https://terminalroot.com/downloads/video.mp4)

Compile and run:

{% highlight bash %}
g++ main.cpp -lavformat -lavcodec -lavutil -lswscale -lffpp
./a.out
{% endhighlight %}

> Example output: `Duration: 00:00:05`.


<!-- RECTANGLE LARGE -->
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

## API Examples

Assuming you created the object on the heap (`auto ffpp = std::make_unique<FFPP>();`).

### 01. Convert `MP4` to `WMV`:

{% highlight cpp %}
ffpp->ffpp_convert("video.mp4", "new.wmv");
{% endhighlight %}

> Converts only between these video formats: `.mp4`, `.flv`, `.wmv`, `.mov`

---

### 02. Extract frames:

{% highlight cpp %}
ffpp->ffpp_extract_frames("video.mp4", "my_frames_dir");
{% endhighlight %}

> `.ppm` images will be created inside the given folder (`my_frames_dir/`).

---

### 03. Get video information:

{% highlight cpp %}
std::cout << "Duration: " 
  << ffpp->ffpp_info(FFPP_INFO::DURATION, "video.mp4") << '\n';
std::cout << "Bitrate: " 
  << ffpp->ffpp_info(FFPP_INFO::BITRATE, "video.mp4") << '\n';
std::cout << "FPS: " 
  << ffpp->ffpp_info(FFPP_INFO::FPS, "video.mp4") << '\n';
std::cout << "Audio Frequency: " 
  << ffpp->ffpp_info(FFPP_INFO::AUDIO_FREQUENCY, "video.mp4") << '\n';
std::cout << "Resolution: " 
  << ffpp->ffpp_info(FFPP_INFO::RESOLUTION, "video.mp4") << '\n';  
{% endhighlight %}

---

### 04. Cut a video from a time point with specific duration:

{% highlight cpp %}
ffpp->ffpp_cut("video.mp4", "00:00:10", 6, "output.mp4");
{% endhighlight %}

> Cuts the video starting at 10 seconds for a duration of 6 seconds.

---

## 📹 Watch the Video

### [https://youtu.be/3bm84QckF8E](https://youtu.be/3bm84QckF8E)

> The video is in Brazilian Portuguese, but you can enable YouTube auto-translation or audio track (if available).

---

## 👀 See Also

* 👑 [Learn to Create Your Own Programming Language](https://terminalroot.com.br/mylang)
* ✅ [Learn Game Dev with C++ and SFML](https://terminalroot.com.br/games)
* ✅ [C++ Promotional Package](https://terminalroot.com.br/promo)
* ✅ [Learn C++ and Qt](https://terminalroot.com.br/cpp)
* ✅ [Check Out Our Courses](https://bit.ly/CursosTerminalRoot)
* 🎁 [All Courses on Udemy](https://bit.ly/UdemyTerminalRoot)



