---
layout: post
title: "How to Install Crow C++ on Windows"
date: 2025-06-20 10:11:00
image: '/assets/img/web/crow-windows.png'
description: "🐦‍ Create beautiful, fast, and easy web applications."
tags:
- webdev
- windows
- cpp
- crowcpp
- web
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

[Crow C++](https://crowcpp.org/) is a [C++](https://terminalroot.com/tags#cpp) framework for creating [HTTP](https://terminalroot.com/tags#desenvolvimentoweb) web services or Websockets. It uses routing similar to [Flask](https://github.com/pallets/flask) from [Python](https://terminalroot.com/tags#python), making it easy to use.  

For more information, [watch the video we made about Crow](https://youtu.be/5gyQ5MLhVIs).  

The [Crow documentation](https://crowcpp.org/master/) recommends using [Conan](https://terminalroot.com/conan-a-package-manager-for-cc/) or [vcpkg](https://vcpkg.io/en/), but these package managers for [C](https://terminalroot.com.br/c) and [C++](https://terminalroot.com.br/cpp) are not very user-friendly, so...  

In this article, we'll see how to install and run Crow on [Windows](https://terminalroot.com/tags#windows) from scratch—and make it WORK!  


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

## 📦 Dependencies  

Before anything else, you'll need the following tools installed on your system.  
> Click the links for installation tutorials on Windows.  

+ [Git](https://terminalroot.com.br/2023/03/como-instalar-git-e-git-bash-no-windows.html)  
+ [Python](https://terminalroot.com.br/2025/06/como-instalar-facilmente-python-e-pip-no-windows.html)  
+ [GCC](https://terminalroot.com.br/2025/05/como-instalar-a-nova-versao-do-gcc-mingw-no-windows.html)  
+ [Clang](https://terminalroot.com.br/2025/05/como-instalar-a-nova-versao-do-clang-llvm-no-windows.html)  

Using [WinGet](https://learn.microsoft.com/pt-br/windows/msix/app-installer/install-update-app-installer), you can install them via [PowerShell](https://terminalroot.com/tags#powershell) with these commands:  

{% highlight powershell %}
winget install --id Git.Git -e --source winget  
winget install --id=Kitware.CMake -e  
winget install --id=MartinStorsjo.LLVM-MinGW.UCRT -e  
winget install -e --id Python.Python.3.11 --scope machine  
{% endhighlight %}

Only [GCC](https://terminalroot.com.br/2025/05/como-instalar-a-nova-versao-do-gcc-mingw-no-windows.html) requires following the [tutorial](https://terminalroot.com.br/2025/05/como-instalar-a-nova-versao-do-gcc-mingw-no-windows.html).  
> Note: After installing it, there's a [CMake](https://terminalroot.com/tags#cmake) inside the `MinGW` folder. To ensure version compatibility, rename `cmake` to something else.  

Example: If you run `Get-Command cmake` in the [terminal](https://terminalroot.com.br/2023/04/melhore-seu-desempenho-utilizando-o-windows-terminal.html), it will show this path:  

{% highlight powershell %}
Get-Command cmake  

CommandType     Name       Version    Source  
-----------     ----       -------    ------  
Application     cmake.exe  4.0.1.0    C:\mingw64\bin\cmake.exe  
{% endhighlight %}

So, you need to rename it to ensure it uses the other installation (from *Kitware*). For example:  
{% highlight powershell %}
Rename-Item -Path "C:\mingw64\bin\cmake.exe" -NewName "DISABLED-cmake.exe"  
{% endhighlight %}

Now, when you run `Get-Command cmake` again, it should show the correct path: `C:\Program Files\CMake\bin\cmake.exe` and version:  

{% highlight powershell %}
Get-Command cmake  

CommandType     Name       Version    Source  
-----------     ----       -------    ------  
Application     cmake.exe  3.26.0.0   C:\Program Files\CMake\bin\cmake.exe  
{% endhighlight %}

With that done, let's install Crow C++!  

---  

## 📥 Installing Crow  

First, create a folder for your Crow project (e.g., on the `Desktop`) and navigate into it:  

{% highlight powershell %}
cd "$env:USERPROFILE\Desktop"  
New-Item -ItemType Directory "MyProjectCrow"  
Set-Location "MyProjectCrow"  
{% endhighlight %}

Crow depends on the [ASIO](https://think-async.com/Asio/) library at compile-time and runtime, so download ASIO from this link:  
+ <https://think-async.com/Asio/>  

Click the [Download](https://sourceforge.net/projects/asio/files/asio/1.30.2%20%28Stable%29/) option as shown in the image:  
> The current version (as of this article) is `1.30.0`, but if there's a newer one, choose that.  

![ASIO Download](/assets/img/web/asio-download.jpg)  

+ You'll be redirected to [https://sourceforge.net/projects/asio/files/asio/1.30.2](https://sourceforge.net/projects/asio/files/asio/1.30.2%20%28Stable%29/).  

+ On SourceForge, download [asio-1.30.2.zip](https://sourceforge.net/projects/asio/files/asio/1.30.2%20%28Stable%29/asio-1.30.2.zip/download).  

+ After downloading, extract it (`Extract Here`), which will create a folder named `asio-1.30.2`. Rename it to just `asio`.  

+ Cut this `asio/` folder and paste it inside your project.  

Now, inside your `MyProjectCrow` folder, clone the [Crow](https://github.com/CrowCpp/Crow) repository:  

{% highlight powershell %}
git clone https://github.com/CrowCpp/Crow  
{% endhighlight %}

Move the `asio` folder from your project (`MyProjectCrow`) into the cloned `Crow` folder:  
{% highlight powershell %}
Move-Item -Path "asio" -Destination "Crow"  
{% endhighlight %}

Then navigate into the `Crow` folder:  

{% highlight powershell %}
cd Crow  
{% endhighlight %}

### 🛠️ Now Let’s Compile **Crow** Along with **ASIO**  

I organize all my includes in a folder on the `C:\` drive, similar to how Unix uses `/usr/include`. On [Windows](https://terminalroot.com/tags#windows), I store everything (SFML3, SFML2, tmxlite, FFmpeg, etc.) in `C:\Includes`.  

So, create this folder and a subfolder `C:\Includes\crow` with this command, as we'll install Crow and ASIO there:  

{% highlight powershell %}
New-Item -Path "C:/Includes/crow" -ItemType Directory  
{% endhighlight %}

Now, still inside the `Crow` folder in your project, compile with this command:  
> **Note the dot (`.`) at the end—it's important!**  

{% highlight powershell %}
cmake -G "Unix Makefiles" -B build -DCMAKE_INSTALL_PREFIX="C:/Includes/crow" -DASIO_INCLUDE_DIR="./asio" -DCMAKE_CXX_FLAGS="-I./asio" -DCROW_BUILD_EXAMPLES=OFF -DCROW_BUILD_TESTS=OFF .  
{% endhighlight %}

The output should look something like this:  
{% highlight text %}
-- The CXX compiler identification is GNU 15.1.0  
-- Detecting CXX compiler ABI info  
-- Detecting CXX compiler ABI info - done  
-- Check for working CXX compiler: C:/mingw64/bin/c++.exe - skipped  
-- Detecting CXX compile features  
-- Detecting CXX compile features - done  
-- No build type selected, default to Release  
-- Found Python3: C:/Program Files/Python311/python.exe (found version "3.11.9") found components: Interpreter  
-- Found asio: C:/Users/USERNAME/Desktop/MyProjectCrow/Crow/asio  
-- Configuring done (13.6s)  
-- Generating done (0.0s)  
-- Build files have been written to: C:/Users/USERNAME/Desktop/MyProjectCrow/Crow/build  
{% endhighlight %}

This `--build` step is almost insignificant (it doesn’t generate files), but run it just in case:  

{% highlight powershell %}
cmake --build build  
{% endhighlight %}

Now, install:  

{% highlight powershell %}
cmake --install build  
{% endhighlight %}

<details>  
  <summary>It will move files to these paths:</summary>  

{% highlight powershell %}
-- Install configuration: "Release"  
-- Installing: C:/Includes/crow/include  
-- Installing: C:/Includes/crow/include/crow  
-- Installing: C:/Includes/crow/include/crow/app.h  
-- Installing: C:/Includes/crow/include/crow/ci_map.h  
-- Installing: C:/Includes/crow/include/crow/common.h  
-- Installing: C:/Includes/crow/include/crow/compression.h  
-- Installing: C:/Includes/crow/include/crow/exceptions.h  
-- Installing: C:/Includes/crow/include/crow/http_connection.h  
-- Installing: C:/Includes/crow/include/crow/http_parser_merged.h  
-- Installing: C:/Includes/crow/include/crow/http_request.h  
-- Installing: C:/Includes/crow/include/crow/http_response.h  
-- Installing: C:/Includes/crow/include/crow/http_server.h  
-- Installing: C:/Includes/crow/include/crow/json.h  
-- Installing: C:/Includes/crow/include/crow/logging.h  
-- Installing: C:/Includes/crow/include/crow/middleware.h  
-- Installing: C:/Includes/crow/include/crow/middlewares  
-- Installing: C:/Includes/crow/include/crow/middlewares/cookie_parser.h  
-- Installing: C:/Includes/crow/include/crow/middlewares/cors.h  
-- Installing: C:/Includes/crow/include/crow/middlewares/session.h  
-- Installing: C:/Includes/crow/include/crow/middlewares/utf-8.h  
-- Installing: C:/Includes/crow/include/crow/middleware_context.h  
-- Installing: C:/Includes/crow/include/crow/mime_types.h  
-- Installing: C:/Includes/crow/include/crow/multipart.h  
-- Installing: C:/Includes/crow/include/crow/multipart_view.h  
-- Installing: C:/Includes/crow/include/crow/mustache.h  
-- Installing: C:/Includes/crow/include/crow/parser.h  
-- Installing: C:/Includes/crow/include/crow/query_string.h  
-- Installing: C:/Includes/crow/include/crow/returnable.h  
-- Installing: C:/Includes/crow/include/crow/routing.h  
-- Installing: C:/Includes/crow/include/crow/settings.h  
-- Installing: C:/Includes/crow/include/crow/socket_acceptors.h  
-- Installing: C:/Includes/crow/include/crow/socket_adaptors.h  
-- Installing: C:/Includes/crow/include/crow/task_timer.h  
-- Installing: C:/Includes/crow/include/crow/TinySHA1.hpp  
-- Installing: C:/Includes/crow/include/crow/utility.h  
-- Installing: C:/Includes/crow/include/crow/version.h  
-- Installing: C:/Includes/crow/include/crow/websocket.h  
-- Installing: C:/Includes/crow/include/crow.h  
-- Installing: C:/Includes/crow/lib/cmake/Crow/CrowTargets.cmake  
-- Installing: C:/Includes/crow/lib/cmake/Crow/Findasio.cmake  
-- Installing: C:/Includes/crow/lib/cmake/Crow/CrowConfig.cmake  
{% endhighlight %}

</details>  

You also need to move the `asio/` folder from `Crow/` to `C:\Includes\`:  

{% highlight powershell %}
Move-Item -Path "asio" -Destination "C:\Includes\"  
{% endhighlight %}

Finally, exit the `Crow` folder and delete the cloned repository:  

{% highlight powershell %}
cd ..  
Remove-Item -Path "Crow" -Recurse -Force  
{% endhighlight %}

Done! Now let’s test our project!  


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

## ⚙️ Running a `Hello, World!` Server with Crow  

Now your `MyProjectCrow` folder is empty. Let’s create a `main.cpp` file inside it (e.g., using [VSCode](https://terminalroot.com/tags#vscode)):  

{% highlight powershell %}
code main.cpp  
{% endhighlight %}

Paste this inside:  

{% highlight cpp %}
#include "crow.h"  

int main(){  
    crow::SimpleApp app;  

    CROW_ROUTE(app, "/")([](){  
        return "Hello world";  
    });  

    app.port(18080).multithreaded().run();  
}  
{% endhighlight %}

Save the file, return to the terminal, and compile your project with this command:  
> Confirm these paths, as you may have subfolders. Inside `asio`, there should be an `include` folder: `C:/Includes/asio/include`.  

{% highlight powershell %}
g++ main.cpp -I"C:/Includes/asio/include" -I"C:/Includes/crow/include" -lws2_32 -lmswsock -o app.exe  
{% endhighlight %}

This will generate `.\app.exe`. Run it:  

You’ll see this:  
{% highlight powershell %}
.\app.exe  
(2025-06-20 03:58:29) [INFO    ] Crow/master server is running at http://0.0.0.0:18080 using 2 threads  
(2025-06-20 03:58:29) [INFO    ] Call `app.loglevel(crow::LogLevel::Warning)` to hide Info level logs.  
{% endhighlight %}

It suggests accessing ~~http://0.0.0.0:18080~~ in your browser, but this may fail. Instead, visit:  
### <http://localhost:18080>  
> The address **`0.0.0.0`** is a *placeholder* meaning **"all network interfaces"**—so the server listens on all your computer’s interfaces, but **it’s not a valid IP to access directly** in a browser.  

You’ll see this message in the browser:  

![Crow running](/assets/img/web/crow-running.jpg)  
> To stop the server, press `Ctrl + C` in the terminal.  

Everything is working!  

I’ve been doing many things with Crow, like this `Tasks++/ToDO++` using [Crow C++](https://crowcpp.org/), [Databases](https://terminalroot.com/how-to-connect-mysql-with-c-cpp-on-ubuntu-and-any-distro/), [HTMX](https://htmx.org/), and [TailwindCSS](https://terminalroot.com.br/2023/09/como-criar-um-app-pra-web-com-vuejs-tailwindcss-e-cpp.html):  

## 🎥 Watch the Video  

<iframe width="800" height="450" src="https://www.youtube.com/embed/5g060xZyj_0" title="Crow C++, DB, TailwindCSS e HTMX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

---  

## For more information, visit:  
+ <https://terminalroot.com/tags#cpp>  
+ <https://crowcpp.org/>


