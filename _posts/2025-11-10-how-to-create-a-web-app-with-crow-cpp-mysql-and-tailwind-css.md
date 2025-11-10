---
layout: post
title: "How to Create a Web App with Crow C++, MySQL, and Tailwind CSS"
date: 2025-11-10 18:52:23
image: '/assets/img/cpp/crow-todo.jpg'
description: "🚀 A new video series with step-by-step instructions."
tags:
- cpp
- webdev
- mysql
- tailwind
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Watch the series/playlist containing 9 videos that show step-by-step how to develop a web application for task management with [Crow C++](https://terminalroot.com/tags#crow), [MySQL](https://terminalroot.com/tags#mysql), and [Tailwind CSS](https://terminalroot.com/tags#css).

## [📹 Playlist](https://www.youtube.com/watch?v=8rUIkUj7fjk&list=PLUJBQEDDLNcmn_qxFhZYa02Y_gHDBXfly&index=24)
### [▶︎•၊၊||၊|။||||။၊|။•](https://www.youtube.com/watch?v=8rUIkUj7fjk&list=PLUJBQEDDLNcmn_qxFhZYa02Y_gHDBXfly&index=24)
> The videos are in Portuguese; use YouTube's automatic translation (Audio Track) to find your language.

---

## 💻 Step-by-step to run on your machine ↓
> Windows and Unix-Like (macOS, GNU/Linux, \*BSD, Haiku,...)

---

## 🪟 Windows:

### ▶️ Install:
1. [How to Install Crow and C++ on Windows](https://terminalroot.com/how-to-install-crow-cpp-on-windows/)
2. [Install MySQL on Windows](https://terminalroot.com.br/2023/05/como-instalar-o-apache-php-8-e-mysql-no-windows.html#mysql)
3. [How to Connect to MySQL with C/C++ on Windows](https://terminalroot.com.br/2023/09/como-conectar-ao-mysql-com-c-cpp-no-windows.html)

### ©️ Clone the project:
> Or download it directly and then unzip it.

{% highlight bash %}
git clone https://github.com/terroo/crow-todo
cd crow
{% endhighlight %}

### 🎲 Dump the database:
{% highlight bash %}
mysql -u root -p < cpp.sql
{% endhighlight %}

### 🗄️ Change your MySQL credentials:
> Open the file: `todo.cpp` and change lines **16** (`[YOUR_USER]`) and **17** (`[YOUR_PASS]`):

{% highlight cpp %}
// ...
  connect = mysql_real_connect(
    connect,
    "localhost",
    "[YOUR_USER]",
    "[YOUR_PASS]",
    "cpp",0, NULL, 0
  );
// ...
{% endhighlight %}

### 🏗️ Compile:
{% highlight bash %}
g++ main.cpp -I"C:/Includes/asio/include" -I"C:/Includes/crow/include" -lws2_32 -lmswsock -o app.exe
{% endhighlight %}
> Assuming the `asio` and `crow` libraries are in the path: `C:\Includes`, modify the path if you did not follow the installation tutorial mentioned above.

### 🏃 Run:
{% highlight bash %}
app.exe
{% endhighlight %}

### 🌎 Access via browser:
<http://localhost:18081/>

---

## 🦬 Unix-Like:
> macOS, GNU/Linux, \*BSD, Haiku,...

### ▶️ Install:
1. [How to Install Crow and C++ on Apache](https://terminalroot.com/how-to-run-crow-cpp-with-apache/)
2. [Install MySQL](https://terminalroot.com.br/2023/03/como-instalar-mariadb-mysql-no-ubuntu-2210.html)
3. [Install the C/C++ Connector](https://terminalroot.com.br/2023/10/como-conectar-mysql-com-c-cpp-no-ubuntu-e-qualquer-distro.html)

### ©️ Clone the project:
{% highlight bash %}
git clone https://github.com/terroo/crow-todo
cd crow
{% endhighlight %}

### 🎲 Dump the database:
{% highlight bash %}
mysql -u root -p < cpp.sql
{% endhighlight %}

### 🗄️ Change your MySQL credentials:
> Open the file: `todo.cpp` and change lines **16** (`[YOUR_USER]`) and **17** (`[YOUR_PASS]`):

{% highlight cpp %}
// ...
  connect = mysql_real_connect(
    connect,
    "localhost",
    "[YOUR_USER]",
    "[YOUR_PASS]",
    "cpp",0, NULL, 0
  );
// ...
{% endhighlight %}

### 🏗️ Compile:
> With [CMake](https://terminalroot.com/tags#cmake).

{% highlight bash %}
cmake -B build .
cmake --build build
{% endhighlight %}

### 🏃 Run:
{% highlight bash %}
./build/app-crow-todo
{% endhighlight %}

### 🌎 Access via browser:
<http://localhost:18081/>

Credentials to log into the application:
+ Login: `marcos@cpp.io`
+ Password: `teste123@`

If you want to create your own credentials to log in, insert them via MySQL, for example:
> `mysql -u root -p -D cpp # Then enter your password`

{% highlight sql %}
INSERT INTO `login` VALUES (NULL,'YOUR NAME','LAST NAME','YOUR_USER@EMAIL.COM', SHA2('[YOUR_PASSWORD]', 256),'admin');
{% endhighlight %}
> Replace the uppercase data with your corresponding details.

---

## 📹 [Video Series](https://www.youtube.com/watch?v=8rUIkUj7fjk&list=PLUJBQEDDLNcmn_qxFhZYa02Y_gHDBXfly&index=24) showing how `crow-todo`/ToDo++ was made:
### [▶︎•၊၊||၊|။||||။၊|။•](https://www.youtube.com/watch?v=8rUIkUj7fjk&list=PLUJBQEDDLNcmn_qxFhZYa02Y_gHDBXfly&index=24)
> The videos are in Portuguese; use YouTube's automatic translation (Audio Track) to find your language.

