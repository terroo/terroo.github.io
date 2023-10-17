---
layout: post
title: "How to Connect MySQL with C/C++ on Ubuntu and Any Distro"
date: 2023-10-17 19:25:47
image: '/assets/img/mysql/mysql-c-cpp-ubuntu-gnu-linux.png'
description: 'Both with Connector C and Connector C++'
tags:
- mysql
- sql
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this article we will see how to connect to [MySQL](https://terminalroot.com/tags#mysql) with [C](https://terminalroot.com/tags#clanguage) and [C++](https: //terminalroot.com/tags#cpp) in [Ubuntu](https://terminalroot.com/tags#ubuntu) and also an installation procedure that works for any [GNU] distro(https:// terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux).

---

# Installation
First of all you need to have [MySQL/MariaDB](https://terminalroot.com/tags#mariadb) installed on your system, we show this in the correct way in the article:
### [How to install MariaDB/MySQL on Ubuntu 22.10](https://terminalroot.com/how-to-install-mariadb-mysql-on-ubuntu-2210/)

You can find other necessary concepts in the article:
### [How to Connect to MySQL with C/C++ on Windows](https://terminalroot.com.br/2023/09/como-conectar-ao-mysql-com-c-cpp-no-windows.html)
> Link in Portuguese!

Which describes the differences between: *MySQL Connector C* and *MySQL Connector C++*!

## MySQL Connector C++ `METHOD 1 | Ubuntu`
To install **MySQL Connector C on Ubuntu** you can use the APT package manager:
{% highlight bash %}
sudo apt install libmysqlcppconn-dev libmysqlcppconn7v5
{% endhighlight %}

---

To test, create a test code:
{% highlight cpp %}
#include <iostream>
#include <cppconn/driver.h>
#include <cppconn/exception.h>
#include <cppconn/prepared_statement.h>
#include <cppconn/resultset.h>
#include <cppconn/statement.h>
#include <mysql_connection.h>

auto main() -> int {
   sql::Driver *driver = get_driver_instance();
   try {
     std::unique_ptr<sql::Connection> con(
         driver->connect("HOST", "USER", "PASSWORD")); // FILL IN HERE
     if (con != NULL) {
       std::cout << "MySQL Connected successfully!\n";
     }
   } catch (sql::SQLException &e) {
     std::cerr << "MySQL was NOT started or Incorrect credentials.\n";
     return 1;
   }
}
{% endhighlight %}

Compile and run:
{% highlight bash %}
g++ main.cc -lmysqlcppconn
./a.out
{% endhighlight %}

---

## MySQL Connector C++ `METHOD 2 | Any Distro`
You can also install manually if you are on another distro, or on a version that has a problem using APT.

#### 01. Remove the packages from your system if any, and clean them later:
{% highlight bash %}
sudo apt remove --purge libmysqlcppconn-dev libmysqlcppconn7v5 -y
sudo apt autoremove
{% endhighlight %}

#### 02. Download the Binary at: <https://dev.mysql.com/downloads/connector/cpp>
   - Choose: **Select Operating System: `Linux - Generic`**
   - And in the *select* below: **Select OS Version: `All`**
   - Click on the file: **Archive**: `(mysql-connector-c++-X.X.X-linux-glibcX.XX-x86-64bit.tar.gz)`
   - Then click: **No thanks, just start my download.** and the download will be carried out!

#### 03. After downloading, unzip the downloaded file:
{% highlight bash %}
tar zxvf mysql-connector-c++-*.tar.gz
{% endhighlight %}

#### 04. Enter the unzipped directory and move the internal directories according to the commands below:
{% highlight bash %}
cd mysql-*
sudo mv include/jdbc/* /usr/include/
sudo mv lib64/* /usr/lib/x86_64-linux-gnu/
{% endhighlight %}
> If you want, choose a different path: `sudo mv lib64/* /usr/lib64/`.

#### 05. Now allow [GNU GlibC](https://www.gnu.org/software/libc/) to understand your installation, to do so, run the command below:
{% highlight bash %}
sudo ldconfig
{% endhighlight %}
> If you chose a different path: `echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/lib64/' >> ~/.bashrc && source ~/.bashrc`.

#### 06. To test, use the same test code:
{% highlight cpp %}
#include <iostream>
#include <cppconn/driver.h>
#include <cppconn/exception.h>
#include <cppconn/prepared_statement.h>
#include <cppconn/resultset.h>
#include <cppconn/statement.h>
#include <mysql_connection.h>

auto main() -> int {
   sql::Driver *driver = get_driver_instance();
   try {
     std::unique_ptr<sql::Connection> con(
         driver->connect("HOST", "USER", "PASSWORD")); // FILL IN HERE
     if (con != NULL) {
       std::cout << "MySQL Connected successfully!\n";
     }
   } catch (sql::SQLException &e) {
     std::cerr << "MySQL was NOT started or Incorrect credentials.\n";
     return 1;
   }
}
{% endhighlight %}

---

#### 07. But to compile and run, use the following command:
{% highlight bash %}
g++ main.cpp -lmysqlcppconn
# Or: g++ main.cpp /usr/lib64/libmysqlcppconn.so.9
./a.out
{% endhighlight %}
> If it doesn't work, try compiling with the flag: `-pthread`.

If you chose an alternative path (`/usr/lib64`) and don't want to add content to `~/.bashrc` you can also create a symbolic link to use the `flag`:
{% highlight bash %}
sudo ln -s /usr/lib64/libmysqlcppconn.so.9 /usr/lib/x86_64-linux-gnu/libmysqlcppconn.so.9
{% endhighlight %}

And also if you want the description for `pkg-config --list-all` to appear, just create this file:
{% highlight bash %}
sudo vim /usr/lib/pkgconfig/mysqlcppconn.pc
{% endhighlight %}

And add this content inside:
{% highlight bash %}
prefix=/usr
exec_prefix=${prefix}
libdir=/usr/lib64
includedir=${prefix}/include

Name: mysqlcppconn
Description: MySQL Connector/C++ is a MySQL database connector for C++.
URL: https://github.com/mysql/mysql-connector-cpp
Version: 8.1.0
Libs: -L"${libdir}" -lpthread
Cflags: -I"${includedir}" -I/usr/local/include
#Requires.private: @GLFW_PKG_DEPS@
#Cflags: -I"${includedir}" -I/usr/local/include
{% endhighlight %}
> See the content: `pkg-config --list-all | grep mysqlcppconn`

You can also compile from scratch, just clone the repository: <https://github.com/mysql/mysql-connector-cpp> and follow the procedure [listed here](https://dev.mysql.com/doc/ connector-cpp/8.1/en/connector-cpp-apps-platform-considerations.html).

If you want to uninstall EVERYTHING:
{% highlight bash %}
sudo unlink /usr/lib/x86_64-linux-gnu/libmysqlcppconn.so.9 2>/dev/null
sed -i '/LD_LIBRARY_PATH/d' ~/.bashrc
cd /usr/include/
sudo rm -rf cppconn/ mysql_*
cd /usr/lib/x86_64-linux-gnu/ # Or if you chose an alternative directory: cd /usr/lib64/
sudo rm -rf libmysqlcppconn8.so libmysqlcppconn8.so.2 libmysqlcppconn8.so.2.8.1.0 \
             libmysqlcppconn.so libmysqlcppconn.so.9 libmysqlcppconn.so.9.8.1.0 plugin private
sudo rm /usr/lib/pkgconfig/mysqlcppconn.pc
{% endhighlight %}

---

## MySQL Connector C `Ubuntu`
To install **MySQL Connector C on Ubuntu** you can use the APT package manager:
{% highlight bash %}
sudo apt install libmysqlclient-dev
{% endhighlight %}

To test the connection, create a test file:

> `main.cpp`
{% highlight cpp %}
#include <iostream>
#include <mysql/mysql.h>

auto main() -> int {
   MYSQL *connect = mysql_init(NULL);
   !connect ? std::cerr << "MySQL has NOT been started.\n"
            : std::cout << "MySQL Connected successfully!\n";
   mysql_close(connect);
}
{% endhighlight %}

Compile and run:
{% highlight bash %}
g++ main.cpp -lmysqlclient
./a.out
{% endhighlight %}

Alternatively you can install directly:
{% highlight bash %}
wget -q https://terminalroot.com.br/downs/libmysqlclient-dev-8.0.34-0ubuntu0.23.04.1-amd64.tar.gz
tar zxvf libmysqlclient-dev-8.0.34-0ubuntu0.23.04.1-amd64.tar.gz
cd libmysqlclient-dev-8.0.34-0ubuntu0.23.04.1-amd64
sudo mv include/mysql/ /usr/include/
sudo mv lib/libmysqlclient.* /usr/lib/x86_64-linux-gnu/
{% endhighlight %}

---

We performed a CRUD, in addition to other tips with C++ using the MySQL Connector C in the [Advanced Modern C++ Course](https://terminalroot.com/cpp). Purchase to get full content!

---

# Useful links
+ https://dev.mysql.com/doc/connector-cpp/1.1/en/connector-cpp-examples-connecting.html
+ https://dev.mysql.com/doc/connector-cpp/8.1/en/connector-cpp-apps-general-considerations.html
+ https://dev.mysql.com/doc/connector-cpp/8.1/en/connector-cpp-installation-binary.html
+ https://dev.mysql.com/downloads/c-api/
+ https://dev.mysql.com/downloads/connector/cpp/
+ https://dev.mysql.com/downloads/installer/
+ https://downloads.mysql.com/archives/c-c/

