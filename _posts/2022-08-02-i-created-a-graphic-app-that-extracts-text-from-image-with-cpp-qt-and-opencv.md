---
layout: post
title: "I created a Graphic App that Extracts Text from Image with C++, Qt and OpenCV"
date: 2022-08-02 20:25:48
image: '/assets/img/qt/img2txt_en_800-min.png'
description: '🔊 Img2Txt is a graphical application that extracts text from an image. Developed with C++, Qt, OpenCV and other libraries.'
tags:
- cpp
- opencv
- qt
- gui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

🔊 **Img2Txt** is a graphical application that extracts text from an image. Developed with [C++](https://terminalroot.com.br/tags#cpp), [Qt](https://terminalroot.com.br/tags#qt), [OpenCV](https://terminalroot.com.br/tags#opencv) and other libraries.

---

# How to install
First you will need the dependencies:

# Dependencies
+ [gcc/g++](https://gcc.gnu.org/)
+ [CMake](https://cmake.org/)
+ [Make](https://www.gnu.org/software/make/)
+ [Qt](https://www.qt.io/)
+ [OpenCV](https://github.com/opencv/opencv)
+ [Leptonica](https://github.com/DanBloomberg/leptonica)
+ [Tesseract](https://github.com/tesseract-ocr/tesseract)

Example of dependencies on [Ubuntu](https://ubuntu.com/):

Download and install **Qt** [from here](https://www.qt.io/download-qt-installer), like this [video](https://www.youtube.com/watch?v=2fXBeN1EUzs) .
> Remember the path where you installed it and add Qt6 support and Qt5 compatibility

And now install the packages:
{% highlight bash %}
sudo apt install build-essential cmake make g++ \
  libtesseract-dev wget unzip libopencv-dev \
  libgtk-3-dev tesseract-ocr tesseract-ocr-por \
  libpng++-dev libpng16-16 libpng-dev
{% endhighlight %}

Install OpenCV:
{% highlight bash %}
wget -O opencv.zip https://github.com/opencv/opencv/archive/master.zip
unzip opencv.zip
mv opencv-master opencv
mkdir -p build && cd build
cmake ../opencv
make
sudo make install
{% endhighlight %}

---

# Building and Install
And then clone, build and install:

> **NOTE**: `[PATH/TO]/Qt/[VERSION]` is the location you installed **Qt** and the **Version** number, example: `${HOME}/Qt/6.3.0`
{% highlight bash %}
git clone https://github.com/terroo/img2txt
cd img2txt
mkdir build && cd build
cmake -DQT_DIR_VER="[PATH/TO]/Qt/[VERSION]" ..
make
sudo make install
sudo chmod +x /usr/local/bin/img2txt # IMPORTANT POS INSTALL
{% endhighlight %}

### Img2Txt source code:
## <https://github.com/terroo/img2txt>

---

# Watch the video
The video is in Portuguese, but in addition to being able to use Youtube's automatic translation, the procedures are universal regardless of the language.

<iframe width="1253" height="705" src="https://www.youtube.com/embed/HpOlfhPgI64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



