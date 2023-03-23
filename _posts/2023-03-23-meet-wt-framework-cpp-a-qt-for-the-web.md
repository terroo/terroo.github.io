---
layout: post
title: "Meet Wt Framework C++, a Qt for the Web"
date: 2023-03-23 11:35:29
image: '/assets/img/cpp/wt.jpg'
description: 'Wt Framework is a toolkit library developed with Modern C++ based on and inspired by the Qt framework.'
tags:
- cpp
- web
- qt
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

[Wt Framework](https://www.webtoolkit.eu/) is a toolkit library developed with [Modern C++](https://terminalroot.com/tags#cpp) that replaces the use of [JavaScript]( https://terminalroot.com/tags#javascript) on [Web](https://terminalroot.com/tags#web).

It has native security against [SQL](https://terminalroot.com/tags#sql) Injection, XSS and CSRF attacks. It is available for several platforms and operating systems, such as: [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux), [Android](https://terminalroot.com. br/tags#android), RaspberyPI, [FreeBSD](https://terminalroot.com/tags#freebsd) and OpenSolaris.

---

# Installation
You can install Wt Framework in several ways, using precompiled binaries or compiling source code.
> [See procedure here](https://redmine.webtoolkit.eu/projects/wt/wiki/Wt_Installation) for all supported operating systems and platforms.

Example for [Ubuntu](https://terminalroot.com/tags#ubuntu)

---

### Install dependencies
```bash
sudo apt install gcc g++ libboost-all-dev cmake
```

You can still complement by also installing the optional dependencies:
```bash
sudo apt install doxygen libgraphicsmagick3 libssl-dev libpq-dev libssl-dev libfcgi-dev
```
> In the same link mentioned above there is the procedure for other distros.

### Compile and install on your system
Now just download the package, compile and install. As of this article's publication date, the latest version is: **4.9.1**, but see [here on the web address](https://www.webtoolkit.eu/wt) for more information.

```bash
wget -c https://github.com/emweb/wt/archive/4.9.1.tar.gz
tar zxvf wt-4.9.1.tar.gz
cd wt-4.9.1/
cmake -B build .
cd build && make
sudo make install
sudo ldconfig
```

---

# basic code
[In this example](https://www.webtoolkit.eu/wt/doc/tutorial/wt.html) it is possible to get a type of "*Hello, World!*" to get a sense of how the framework works.

Create a `main.cpp` file and paste the code below:

```cpp
#include <Wt/WApplication.h>
#include <Wt/WBreak.h>
#include <Wt/WContainerWidget.h>
#include <Wt/WLineEdit.h>
#include <Wt/WPushButton.h>
#include <Wt/WText.h>

class HelloApplication : public Wt::WApplication {
  public:
    HelloApplication(const Wt::WEnvironment& env);

  private:
    Wt::WLineEdit *nameEdit_;
    Wt::WText *greeting_;
};

HelloApplication::HelloApplication(const Wt::WEnvironment& env)
  : Wt::WApplication(env){
    setTitle("Hello world");

    root()->addWidget(std::make_unique<Wt::WText>("Your name, please? "));
    nameEdit_ = root()->addWidget(std::make_unique<Wt::WLineEdit>());
    Wt::WPushButton *button = root()->addWidget(std::make_unique<Wt::WPushButton>("Greet me."));
    root()->addWidget(std::make_unique<Wt::WBreak>());
    greeting_ = root()->addWidget(std::make_unique<Wt::WText>());
    auto greet = [this]{
      greeting_->setText("Hello there, " + nameEdit_->text());
    };
    button->clicked().connect(greet);
  }

int main(int argc, char **argv){
  return Wt::WRun(argc, argv, [](const Wt::WEnvironment& env) {
      return std::make_unique<HelloApplication>(env);
      });
}
```

To compile run the following command:
```bash
g++ main.cpp -lwthttp -lwt
```

And to run, run:
```bash


And to run, run:
```bash
./a.out --docroot . --http-address 0.0.0.0 --http-port 9090
```

The application will be available at address and port: <http://0.0.0.0:9090>, open this url in your browser.

---

# For more information, visit the links below:
+ <https://youtu.be/lfZetbL36uw>
+ <https://github.com/emweb/wt>
+ <https://www.webtoolkit.eu/widgets>
+ <https://www.webtoolkit.eu/wt>

