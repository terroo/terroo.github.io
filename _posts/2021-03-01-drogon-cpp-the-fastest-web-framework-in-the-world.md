---
layout: post
title: "Drogon C ++, The Fastest Web Framework in the World"
date: 2021-03-01 19:10:04
image: '/assets/img/cpp/drogon-cpp.jpe'
description: 'It was first placed in tests with 105 frameworks, among them: Rails, Django, NestJS, Laravel and others.'
featured-img: ../cpp/drogon-cpp.jpe
tags:
- cpp
- webdevelopment
---

![Drogon C ++, The Fastest Web Framework in the World](/assets/img/cpp/drogon-cpp.jpe)

**Drogon** is a Web Framework written with [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) that works on both [C++14](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) and [C++17](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) versions.

The [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) website ([ranking link](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite)) has some benchmark services that test the performance of some technologies and among these tests, it analyzed the performance of Web Frameworks for Back-end and Drogon was the first placed in tests with 105 frameworks, among them: Rails, Django, NestJS, Laravel and others.

+ The name Drogon comes from the dragon called Drogon from the [Game of Thrones](https://en.wikipedia.org/wiki/Game_of_Thrones) series.
+ It is available for [Linux](https://en.terminalroot.com.br/the-6-best-network-scanners-for-linux/), [macOS](https://en.terminalroot.com.br/how-to-install-macos-on-virtualbox-on-linux/), FreeBSD, [OpenBSD](https://en.terminalroot.com.br/openbsd-dual-boot-with-linux-single-partition/) and Windows.
+ Uses an epoll-based non-blocking I/O network library (and in the case for macOS and FreeBSD uses kqueue).
+ It supports the HTTP 1.0 and 1.1 protocol (for both server-side and client-side);
+ It has support for cookies and embedded sessions.
+ It also has support for: HTTPS (with OpenSSL), WebSocket, request and response for JSON format, widely used for Restful API
+ In addition to AOP with joinpoints and among several other features.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Dependencies
To install, you will first need some dependencies at compile time and at run time. They are:
- [Git](https://en.terminalroot.com.br/how-to-clone-only-a-subdirectory-with-git-or-svn/)
- [GCC](https://en.terminalroot.com.br/gcc-vs-llvm-which-is-the-best-compiler/)
- [G++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/)
- [CMAKE](https://en.terminalroot.com.br/how-to-compile-your-programs-with-cmake/)
- [JSONCPP](https://github.com/open-source-parsers/jsoncpp)
- [OSSP-UUID](http://www.ossp.org/pkg/lib/uuid/)
- [OPENSSL](https://en.terminalroot.com.br/18-ways-to-generate-and-store-strong-passwords/)
- [ZLIB](https://zlib.net/)

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

For systems that use APT: [Debian](https://en.terminalroot.com.br/why-i-gave-up-on-debian/), [Ubuntu](https://en.terminalroot.com.br/customize-your-ubuntu-with-wayland-sway-ulauncher-waybar/), [Mint](https://en.terminalroot.com.br/transform-your-mint-ubuntu-or-debian-with-bspwm-polybar-rofi/) and derivatives, just run this command below:
{% highlight bash %}
sudo apt install git gcc g++ cmake libjsoncpp-dev uuid-dev openssl libssl-dev zlib1g-dev
{% endhighlight %}

For systems using Portage: [Gentoo](https://en.terminalroot.com.br/10-fundamental-tips-for-your-gentoo-linux/), Funtoo and derivatives:
{% highlight bash %}
sudo emerge dev-vcs/git jsoncpp ossp-uuid openssl
{% endhighlight %}

For systems that use RPM: [Fedora](https://en.terminalroot.com.br/take-multiple-free-red-hat-linux-courses/), [Red Hat](https://en.terminalroot.com.br/take-multiple-free-red-hat-linux-courses/) and derivatives
{% highlight bash %}
sudo dnf install git gcc gcc-c++ cmake libuuid-devel openssl-devel zlib-devel 
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

# Database
If in the future you will develop applications that use databases (which I believe so), it is extremely important that you install them before installing Drogon. It can be one of those listed below:
+ [Postgres](https://terminalroot.com.br/2019/08/conheca-o-servico-online-para-executar-seus-comandos-sql.html)
+ [MySQL](https://en.terminalroot.com.br/how-to-reset-the-mysql-root-user-password-when-it-can-not-log-in/) / [MariaDB](https://en.terminalroot.com.br/gentoo-cant-connect-to-local-mysql-server-through-socket-solved/)
+ [SQLite](https://terminalroot.com.br/2021/02/como-utilizar-o-sqlite.html)

# Drogon Installation
{% highlight bash %}
git clone https://github.com/an-tao/drogon
cd drogon
git submodule update --init
mkdir build
cd build
cmake ..
make && sudo make install
{% endhighlight %}

# Use
For this basic example we are going to create a static page without querying the database
## 1. Example 1 (The basics of the basics)
### 1.1 - Creating the project
{% highlight bash %}
cd $HOME
drogon_ctl create project my-project
{% endhighlight %}

Now my my-project has the following files:
{% highlight bash %}
my-project/
├── build
├── CMakeLists.txt
├── config.json
├── controllers
├── filters
├── main.cc
├── models
│   └── model.json
├── plugins
└── views

6 directories, 4 files
{% endhighlight %}

### 1.2 - Changing the main.cc file port
The original `main.cc` file is on port `80`, but this could be a conflict on your system. Then change, for example, to port `8080`.
> If you also have a problem with port `8080`, use port `1024` or try a port bigger than it that is not being used, to find out if it is being used use [nmap](https://en.terminalroot.com.br/the-6-best-network-scanners-for-linux/), for example, to find out. Do not use ports less than 1024 as they should only be used for privileged users (`root`, for example).
{% highlight bash %}
cd my-project
vim main.cc
{% endhighlight %}

With the following content:
{% highlight cpp %}
#include <drogon/HttpAppFramework.h>
int main() {
    drogon::app().addListener("0.0.0.0",8080);
    drogon::app().run();
    return 0;
}
{% endhighlight %}

And compile:
{% highlight bash %}
cd build
cmake ..
make
{% endhighlight %}

Now run the binary file that was created inside the directory you are in (`build`). In my case, as I called the project `my-project`, there is a binary with that name, so just run it:
{% highlight bash %}
./my-project
{% endhighlight %}

Access the address: <http://0.0.0.0:8080/> . And accessing it you will already find a beautiful `404`:

![Drogon 404](/assets/img/cpp/404.png)

To "take down" the server's execution, press: `Ctrl + C`. But that means it’s already working. Then just add an HTML page (still inside the `build` directory) and access it again:
{% highlight bash %}
echo '<h1>Server with Drogon C++, running cool!</h1>' > index.html
./my-project
{% endhighlight %}
> And go to: <http://0.0.0.0:8080/>

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

## 2. Creating a Controller
We are going to create a test controller named `ListController` just to display the phrase: "My controller list". At the root of your project, enter the directory: `controller` and run the following command to create the controller.
{% highlight bash %}
cd controller/
drogon_ctl create controller ListController
{% endhighlight %}
> The output should be: `create a http simple controller: ListController.`

Two files were created: `ListController.cc` and `ListController.h`

### 2.1 - Editing the files
First, let's edit the file: `ListController.h` and add these two lines:
{% highlight cpp %}
PATH_ADD("/",Get,Post);
PATH_ADD("/list",Get);
{% endhighlight %}

The final file looks like this:
{% highlight cpp %}
#pragma once
#include <drogon/HttpSimpleController.h>
using namespace drogon;
class ListController:public drogon::HttpSimpleController<ListController>{
  public:
    virtual void asyncHandleHttpRequest(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) override;
    PATH_LIST_BEGIN
    PATH_ADD("/",Get,Post);
    PATH_ADD("/list",Get);
    PATH_LIST_END
};
{% endhighlight %}

And the `ListController.cc` file should look like this:
{% highlight cpp %}
#include "ListController.h"
void ListController::asyncHandleHttpRequest(const HttpRequestPtr& req, 
                                            std::function<void (const HttpResponsePtr &)> &&callback){
    auto resp=HttpResponse::newHttpResponse();
    resp->setStatusCode(k200OK);
    resp->setContentTypeCode(CT_TEXT_HTML);
    resp->setBody("My controller list");
    callback(resp);
}
{% endhighlight %}

Recompile the project and access:
{% highlight bash %}
cd ../build
cmake ..
make
./my-project
{% endhighlight %}

Now both at the root (<http://localhost:8080/> via get or post) and at <http://localhost:8080/list> we will get content.

If you are using [Postman](https://terminalroot.com.br/2021/02/como-instalar-o-postman-no-ubuntu-e-em-qualquer-distro-linux.html) you will notice that the root will return the information for both GET and POST, but the `/list` will only return for GET.

The address of the official [Drogon](https://github.com/an-tao/drogon) on GitHub is: <https://github.com/an-tao/drogon>, there you can get information of all documentation to install and develop your web applications.

### If you want to watch a video featuring all the resources provided in this article, watch the [video](https://youtu.be/5CYX_ZJVASk) below:
> The video is in Brazilian Portuguese, but you can use subtitles and translate into your language.

<iframe width="910" height="390" src="https://www.youtube.com/embed/5CYX_ZJVASk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



