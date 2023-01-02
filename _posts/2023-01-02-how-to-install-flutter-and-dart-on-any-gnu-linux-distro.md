---
layout: post
title: "How to Install Flutter and Dart on Any GNU/Linux Distro"
date: 2023-01-02 14:19:49
image: '/assets/img/dart/flutter-dart.jpg'
description: 'Flutter is a Framework/ToolKit and Dart is a scripting language, both from Google.'
tags:
- flutter
- dart
- programming
- gnu
- linux
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

# What is [Flutter](https://flutter.dev/)?
Flutter (codenamed "*Sky*" during development) is an open source user interface development kit (UI toolkit and framework), created by Google in 2015, based on the Dart programming language, which enables creating natively compiled apps for Android, iOS, Windows, Mac, Linux, and Fuchsia and Web operating systems.

The main components of Flutter include:
+ Dart programming language
+ Flutter Engine
+ Foundation Library
+ Design-specific Widgets with ready implementations for Android (Google Material) and iOS (Cupertino)

The main advantages of the toolkit/framework:
+ High productivity, coming from a cross-platform, you can use the same codebase for your iOS and Android app. ...
+ High performance;
+ Fast development;
+ Simplicity;
+ Compatibility.

Flutter apps are written in the Dart programming language and make use of many of the language's more advanced features.

---

# What is [Dart](https://dart.dev/)?

Dart (originally named Dash) is a web-based scripting language developed by Google. The goal of the Dart language was initially to replace JavaScript as the main language built into browsers. Programs in this language can either run in a virtual machine or be compiled to JavaScript.

In November 2013, the first stable version, Dart 1.0, was released In August 2018, Dart 2.0 was released, a reboot of the language, optimized for client-side development for web and mobile devices.

---

# Installation
> Dart SDK ships with Flutter; it is not necessary to install Dart separately. The Flutter SDK includes the complete Dart SDK and has the `dart` command.

## 01. Download the package that has everything (`flutter` and `dart`):
> Check [here](https://docs.flutter.dev/get-started/install/linux) for a newer version!

{% highlight bash %}
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.3.10-stable.tar.xz
{% endhighlight %}

## 02. Extract the package:
{% highlight bash %}
tar xf flutter_linux_3.3.10-stable.tar.xz
{% endhighlight %}

## 03. Move to optional directory:
{% highlight bash %}
sudo mv flutter/ /opt/
{% endhighlight %}

## 04. Export Flutter's `bin/` to your `$PATH`:
{% highlight bash %}
echo 'export PATH="${PATH}:/opt/flutter/bin"' | sudo tee -a /etc/profile
source /etc/profile
{% endhighlight %}

## 05. Test the commands: `flutter` and `dart`:
{% highlight bash %}
flutter --version
dart --version
{% endhighlight %}

---

# Creating a [Hello, World!](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/) in Dart
Create a file with the name you want and extension: `.dart`, example: `vim main.dart` and insert the content below:

{% highlight dart %}
void main(){
   print("Hello, World!");
}
{% endhighlight %}

To run the code:
{% highlight bash %}
dart main.dart
{% endhighlight %}

To compile and run the binary:
{% highlight bash %}
dart compile exe main.dart -o hello
./hello
{% endhighlight %}

---

# Creating a [Hello, World!](https://terminalroot.com/tags#programming) with Flutter
> <https://docs.flutter.dev/reference/flutter-cli>

{% highlight bash %}
flutter create my_app
cd my_app
flutter run
{% endhighlight %}

There are several ways to display, read the outputs, however the simplest is using [Google Chrome](https://terminalroot.com/tags#chrome). If `flutter run` doesn't list this option, do it like this:
> Example Google Chrome binary path in [Gentoo](https://terminalroot.com/tags#gentoo).

{% highlight bash %}
CHROME_EXECUTABLE=/usr/bin/google-chrome-stable
export CHROME_EXECUTABLE
{% endhighlight %}

For convenience, add this to your `/etc/profile`
{% highlight bash %}
echo 'CHROME_EXECUTABLE=/usr/bin/google-chrome-stable' | sudo tee -a /etc/profile
echo 'export CHROME_EXECUTABLE' | sudo tee -a /etc/profile
source /etc/profile
{% endhighlight %}
> When you run the `flutter doctor` command, it describes this!

It's an app that you click on the `+` button and it adds/adds to the count:

![Flutter App Count Hello World](/assets/img/dart/fluuter-app.png)


The file to edit is: `vim ./my_app/lib/main.dart`

If you choose option 1 (you need to have `clang` and `gtk` installed), it will open in a new window, as in the example below:

[![Flutter/Dart Gentoo BSPWM](/assets/img/dart/flutter-dart-gentoo-bspwm.png)](/assets/img/dart/flutter-dart-gentoo-bspwm.png)

---

Alternatively you can use [snapd](http://snapcraft.io/) to install:
{% highlight bash %}
sudo snap install flutter --classic
{% endhighlight %}
> Although native to [Ubuntu](https://terminalroot.com/tags#ubuntu), it is available for several distros!
>
> For example in Gentoo: `emerge snapd`.

---

+ <https://docs.flutter.dev/get-started/install/linux>
+ <https://dart.dev/get-dart>
+ <https://en.wikipedia.org/wiki/Flutter>
+ <https://en.wikipedia.org/wiki/Dart_(programming_language)>

