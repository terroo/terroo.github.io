---
layout: post
title: "How to Play MP3 with C++"
date: 2023-09-24 11:07:04
image: '/assets/img/cpp/playmp3.jpg'
description: 'Using libmpg123 and libao!'
tags:
- music
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

In this article/video we will see a code with [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) on how to play [MP3](https://terminalroot.com/tags#multimidia) with [C++](https://terminalroot.com/tags#cpp), there are other libraries that also do this, some others only play [WAV](https://pt.wikipedia.org/wiki/WAV), for example, the [gamedev](https://terminalroot.com/tags#gamedev) libraries.

First of all we need to know which libraries we need to know the differences between: [Mpg123](https://www.mpg123.de/), [LibMPG123](https://www.mpg123.de/api/) and [Libao](https://xiph.org/ao/):

---

## [Mpg123](https://www.mpg123.de/)
It is a free and open source audio player. Supports MPEG audio formats, including MP3. It is an application that works via command line and does not have a graphical interface.

---

## [Libmpg123](https://www.mpg123.de/api/)
It is the library developed and used by the Mpg123 application. It is also the same one used in applications: Audacious, XMMS and Winamp.

---

## [Libao](https://xiph.org/ao/)
It is a cross-platform audio library that allows programs to produce audio using a simple API across a wide variety of platforms.

It is a tool developed by **Xiph.Org**, the same one that created the file type: `ogg` and also the `FLAC` format, which is a free alternative to `mp3` and other formats.

---

# Watch the video

<iframe width="1253" height="705" src="https://www.youtube.com/embed/dufzn5br7WA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard- write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Code created in the video

### Create a project
{% highlight bash %}
mkdir playmp3
cd playmp3
{%endhighlight%}

---

### Add the files with the codes below:

#### `playmp3.hpp`
{% highlight cpp %}
#pragma once

#include <mpg123.h>
#include <ao/ao.h>
#include <memory>
#include <iostream>

class PlayMP3 {
  // Primitive types
  std::size_t buffer_size, done;
  int driver, err, channels, encoding;
  long rate;
  std::string track;

  // LibMPG123 type and smart pointer
  mpg123_handle *mh;
  std::shared_ptr<char> buffer;

  // AO types
  ao_sample_format format;
  ao_device *dev;

  public:
    PlayMP3();
    ~PlayMP3();
    void music(char*);
    void play();
};
{% endhighlight %}

#### `playmp3.cpp`
{% highlight cpp %}
#include "playmp3.hpp"

PlayMP3::PlayMP3(){
  ao_initialize();
  driver = ao_default_driver_id();
  mpg123_init();
  mh = mpg123_new(NULL, &err);
  buffer_size = mpg123_outblock(mh);

  // Dont use make_shared here
  buffer = std::shared_ptr<char>(
    new char[buffer_size], 
    std::default_delete<char[]>()
  );
}

void PlayMP3::music(char* mp3){
  track = mp3;
  mpg123_open(mh, mp3);
  mpg123_getformat(mh, &rate, &channels, &encoding);

  format.bits = mpg123_encsize(encoding) * 8;
  format.rate = rate;
  format.channels = channels;
  format.byte_format = AO_FMT_NATIVE;
  format.matrix = 0;
  dev = ao_open_live(driver, &format, NULL);
}

void PlayMP3::play(){
  std::cout << "\033[33;1m\u25B6 Playing the song: \033[35;1m ";
  std::cout << track << "\033[m\n";

  while(mpg123_read(mh, buffer.get(), buffer_size, &done) == MPG123_OK){
    ao_play(dev, buffer.get(), done);
  }
}

PlayMP3::~PlayMP3(){
  ao_close(dev);
  mpg123_close(mh);
  mpg123_delete(mh);
  mpg123_exit();
  ao_shutdown();
}
{% endhighlight %}

#### `main.cpp`
{% highlight cpp %}
#include "playmp3.hpp"

int main(int argc, char **argv){
  if(argc > 1){
    auto p = std::make_unique<PlayMP3>();
    p->music(argv[1]);
    p->play();
  }else{
    std::cerr << "Enter the song\n";
    return EXIT_FAILURE;
  }
  return 0;
}
{% endhighlight %}


### Compiling and playing an MP3
> Use the song you want as an example, download the song.

<a class="btn btn-lg btn-danger" href="https://terminalroot.com.br/downs/music.mp3" download>music.mp3</a>
> Music: **SAINt JHN - "Trap" ft. Lil Baby** (*Music available at <https://en.mygomp3.com/>*):
>
> `wget -q https://cutt.ly/musicmp3 -O music.mp3`.

{% highlight bash %}
g++ main.cpp playmp3.cpp -o playmp3 -lmpg123 -lao
./playmp3 music.mp3
{%endhighlight%}

---

# Links úteis
+ <https://en.wikipedia.org/wiki/Audio_codec>
+ <https://xiph.org/ao/>
+ <https://en.wikipedia.org/wiki/Mpg123>
+ <https://mpg123.org/api/mpg123__to__out123_8c_source.shtml>
+ <https://mpg123.org/api/mpg123__to__out123_8c.shtml>
+ <https://mpg123.org/api/group__mpg123__examples.shtml>


