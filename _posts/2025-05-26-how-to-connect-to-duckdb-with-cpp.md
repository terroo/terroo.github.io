---
layout: post
title: "How to Connect to DuckDB with C++"
date: 2025-05-26 08:52:14
image: '/assets/img/sql/duckdb-cpp.jpg'
description: "🚀 A fast and futuristic database for your projects."
tags:
- duckdb
- sql
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We have already written an initial article about [DuckDB](https://terminalroot.com/meet-duckdb-a-modern-database/) that explains initial concepts, installation and first steps. For more information, access the link:
+ [Meet DuckDB, a modern database](https://terminalroot.com/meet-duckdb-a-modern-database/)

In this article, we will see how to connect to DuckDB using the API with [C++](https://terminalroot.com/tags#cpp)


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

## 01. Download the lib and create a basic code
The [DuckDB API for C++](https://duckdb.org/docs/stable/clients/cpp) is not yet stable, on the API page itself there is this warning:

<figure>
<blockquote class="blockquote p-3 bg-danger bg-opacity-10 rounded">
<p>DuckDB's C++ API is internal. It is not guaranteed to be stable and can change without notice. If you would like to build an application on DuckDB, we recommend using the C API.</p>
</blockquote>
</figure>

That's why they recommend that you use the [C](https://duckdb.org/docs/stable/clients/c/connect) [API](https://terminalroot.com/tags#clanguage) which works perfectly. To do this, just access the page: <https://duckdb.org/docs/installation/> and choose the data according to your system. In my case, I chose:
+ [Stable Release:C/C++:Linux:Direct download:x86\_64](https://duckdb.org/docs/installation/?version=stable&environment=cplusplus&platform=linux&download_method=direct&architecture=x86_64)

Then just click on the `.zip` that will be made available and download it, or download it with [wget](https://www.gnu.org/software/wget/):

{% highlight bash %}
wget -q https://github.com/duckdb/duckdb/releases/download/v1.3.0/libduckdb-linux-amd64.zip
{% endhighlight %}

Unzip:
{% highlight bash %}
unzip libduckdb-linux-amd64.zip -d libduckdb-linux-amd64
{% endhighlight %}

Create a database and table, example: `duckdb terminalroot.db`
{% highlight sql %}
CREATE TABLE terminalroot (id INTEGER, name STRING);
INSERT INTO terminalroot VALUES(1, 'Marcos Oliveira');
INSERT INTO terminalroot VALUES(2, 'Mark Raasveldt');
INSERT INTO terminalroot VALUES(3, 'Hannes Muhleisen');
SELECT * FROM terminalroot;
.exit
{% endhighlight %}

Go into the directory you unzipped and create some basic code: `cd libduckdb-linux-amd64/ && vim main.cpp`
{% highlight cpp %}
#include "duckdb.h"
#include <iostream>

int main(){
    duckdb_database db;
    duckdb_connection con;
    duckdb_result result;

    if(duckdb_open("terminalroot.db", &db) == DuckDBError){
        std::cerr << "Error opening database\n";
        return 1;
    }
    if(duckdb_connect(db, &con) == DuckDBError){
        std::cerr << "Error connecting to database\n";
        return 1; } 

    if(duckdb_query(con, "SELECT * FROM terminalroot;", &result) == DuckDBError){ 
        std::cerr << "Error executing SELECT\n"; 
        duckdb_disconnect(&con); 
        duckdb_close(&db); 
        return 1; 
    } 

    for(idx_t row = 0; row <= result.deprecated_column_count; row++){ 
        int id = duckdb_value_int32(&result, 0, row); 
        const char* name = duckdb_value_varchar(&result, 1, row); 
        std::cout << id << " | " << name << '\n'; 
        duckdb_free((void*)name); // free varchar memory 
    } 

    duckdb_destroy_result(&result); 
    duckdb_disconnect(&con);
    duckdb_close(&db);
}

{% endhighlight %}

Compile and run:
{% highlight bash %}
g++ main.cpp libduckdb.so
LD_LIBRARY_PATH=. ./a.out
{% endhighlight %}

Probable output:
{% highlight txt %}
1 | Marcos Oliveira
2 | Mark Raasveldt
3 | Hannes Muhleisen
{% endhighlight %}

---

## Install on the system
If you want to install on your system and compile with the `-lduckdb` flag, run the commands below:

+ **01**. Move `.h` to `include`:
{% highlight bash %}
sudo mkdir -p /usr/local/include/duckdb
sudo cp duckdb.h /usr/local/include/duckdb/
{% endhighlight %}

+ **02**. Move the [dynamic library](https://terminalroot.com/difference-between-static-and-dynamic-libraries/) to `lib`
> And update the system's shared library cache.
{% highlight bash %}
sudo cp libduckdb.so /usr/local/lib/
sudo ldconfig
{% endhighlight %}

After that, just test with the flag and you don't even need to be in the folder with the downloaded files or use the ~~`LD_LIBRARY_PATH`~~ environment variable:
> But you need `terminalroot.db`, if you put the absolute path, e.g.: `"/home/$USER/.db/terminalroot.db"` your binary will run regardless of where you are in the system!

{% highlight bash %}
g++ main.cpp -lduckdb
./a.out
{% endhighlight %}

If you want to create `.pc` for `pkg-config`, expand the procedure below:

<details> 
<summary>Create the file <code>/usr/local/lib/pkgconfig/duckdb.pc</code> with this content:</summary>

{% highlight pc %}
prefix=/usr/local
exec_prefix=${prefix}
libdir=${exec_prefix}/lib
includedir=${prefix}/include

Name: DuckDB
Description: DuckDB embedded database
Version: 1.2.1
Libs: -L${libdir} -lduckdb
Cflags: -I${includedir}/duckdb
{% endhighlight %}

<p>Save with:</p>

{% highlight bash %}
sudo mkdir -p /usr/local/lib/pkgconfig
sudo vim /usr/local/lib/pkgconfig/duckdb.pc
# paste the above content
{% endhighlight %}

<p>Refresh the cache:</p>

{% highlight bash %}
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH
{% endhighlight %}

</details>


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

I tried the static library `libduckdb_static.a`, but had problems, but if you prefer, try:
{% highlight bash %}
g++ main.cpp libduckdb_static.a -I. -ldl -pthread -lm -lz -static-libstdc++ -static-libgcc
{% endhighlight %}

If you also have problems, check for missing dependencies:
{% highlight bash %}
nm libduckdb_static.a | grep " U "
{% endhighlight %}
> (`"U"` = *undefined symbol*)

Or use `ldd ./a.out` to see if there are still dynamic libs hanging.

In my case none of these steps worked, but see if they apply to you too.

---

## Useful links
+ For `.hpp`: <https://stackoverflow.com/questions/71782764/how-to-add-duckdb-library-in-c-program>
+ <https://duckdb.org/docs/stable/clients/cpp>
+ <https://duckdb.org/docs/stable/clients/c/connect>

