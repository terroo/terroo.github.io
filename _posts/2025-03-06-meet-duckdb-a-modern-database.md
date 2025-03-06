---
layout: post
title: "Meet DuckDB, a modern database"
date: 2025-03-06 12:09:02
image: '/assets/img/sql/duckdb.jpg'
description: "🚀 And usability comparison with GNU/UNIX commands."
tags:
- sql
- duckdb
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**DuckDB** is an open source column-oriented relational database management system (RDBMS), first released in 2019.

It is designed to <u>provide high performance in complex queries on large databases in embedded configuration</u>, such as combining tables with hundreds of columns and billions of rows. Unlike other embedded databases (e.g. [SQLite](https://terminalroot.com/tags#sql)).

> DuckDB does not compete with traditional DBMS such as **MSSQL**, **PostgreSQL**, etc.

DuckDB uses a *vectorized query* processing engine. DuckDB is unique among database management systems because it has no external dependencies and can be built with just a [C++11](https://terminalroot.com/tags#cpp) compiler.

DuckDB also deviates from the traditional *Client-Server* model by running inside a host process (it has bindings, for example, to a [Python](https://terminalroot.com/tags#python) interpreter with the ability to put data directly into [NumPy](https://terminalroot.com/numcpp-numpy-for-cpp/) arrays).

There are numerous situations in which using DuckDB can be advantageous. Below we will see how to install DuckDB, which can be installed on any [operating system](https://terminalroot.com/tags#operatingsystem), we will see how to install it on [Ubuntu](https://terminalroot.com/tags#ubuntu) and on [Windows](https://terminalroot.com/tags#windows), in addition to usability tips and comparisons with the [commands](https://terminalroot.com/tags#commands) from [GNU](https://terminalroot.com/tags#gnu)/[UNIX](https://terminalroot.com/tags#unix).


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

## Installation

As mentioned, DuckDB can be used on any operating system. The procedure is to download and move it to the system folder responsible for storing the programs, however, it is also possible to install it via [pip](https://pypi.org/project/pip/).

### Example on [Ubuntu](https://terminalroot.com/tags#ubuntu):
#### 01. **Update the system:**
First, it is good practice to update the system before installing new packages. 
{% highlight bash %}
sudo apt update && sudo apt upgrade -y
{% endhighlight %}

#### 02. **Download DuckDB:**
You can download DuckDB directly from the official website or use a package manager like `pip` if you prefer the Python version.
- **Method 1: Download the binary directly:**
> Example based on the current version (v1.2.1) according to the publication date of this article. For more recent versions, visit the releases page on GitHub.

{% highlight bash %}
wget https://github.com/duckdb/duckdb/releases/download/v1.2.1/duckdb_cli-linux-amd64.zip
unzip duckdb_cli-linux-amd64.zip
sudo mv duckdb /usr/local/bin/
{% endhighlight %}

- **Method 2: Install via pip (for use with Python):**
{% highlight bash %}
pip install duckdb
{% endhighlight %}
> Note: `pip` requires a virtual environment, this may make it difficult to use DuckDB.

#### 03. **Verify the installation:**
After installation, you can verify that DuckDB is installed correctly by running:
{% highlight bash %}
duckdb --version
{% endhighlight %}

### Installation on Windows
#### 01. **Download DuckDB:**
- Access the [official DuckDB repository on GitHub](https://github.com/duckdb/duckdb/releases).
- Download the `.zip` file corresponding to the latest version for Windows.

#### 02. **Extract the file:**
- Extract the contents of the `.zip` file to a folder of your choice, for example, `C:\duckdb`.

#### 03. **Add to `PATH`:**
- For ease of use, you can add the path of the folder where DuckDB was extracted to your PATH. - Open "Control Panel" > "System and Security" > "System" > "Advanced system settings" > "Environment variables".
- In the "System variables" section, find the `Path` variable, select it and click "Edit".
- Add the path of the folder where DuckDB was extracted (e.g. `C:\duckdb`).

#### 04. **Verify the installation:**
- Open the Command Prompt or PowerShell and run:
{% highlight bash %}
duckdb --version
{% endhighlight %}


<!-- RECTANGLE 2 - OnParagragraph -->
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

---

## How to use DuckDB
Here are some examples of queries in DuckDB and their approximate equivalents in [GNU](https://terminalroot.com/tags#gnu)/[UNIX](https://terminalroot.com/tags#unix) commands:

#### 01. **Select all rows from a table:**
- **DuckDB:**
{% highlight sql %}
SELECT * FROM table;
{% endhighlight %}

- **GNU/UNIX (using `cat`):**
{% highlight bash %}
cat file.csv
{% endhighlight %}

#### 02. **Filter rows based on a condition:**
- **DuckDB:**
{% highlight sql %}
SELECT * FROM table WHERE column = 'value';
{% endhighlight %}
- **GNU/UNIX (using `grep`):**
{% highlight bash %}
grep 'value' file.csv
{% endhighlight %}

#### 03. **Count the number of rows:**
- **DuckDB:**
{% highlight sql %}
SELECT COUNT(*) FROM table;
{% endhighlight %}
- **GNU/UNIX (using `wc -l`):**
{% highlight bash %}
wc -l file.csv
{% endhighlight %}

#### 04. **Group and count:**
- **DuckDB:**
{% highlight sql %}
SELECT column, COUNT(*) FROM table GROUP BY column;
{% endhighlight %}
- **GNU/UNIX (using `awk` and `sort`):**
{% highlight bash %}
awk -F, '{print $1}' file.csv | sort | uniq -c
{% endhighlight %}

#### 05. **Sort results:**
- **DuckDB:**
{% highlight sql %}
SELECT * FROM table ORDER BY column;
{% endhighlight %}
- **GNU/UNIX (using `sort`):**
{% highlight bash %}
sort -t, -k1 arquivo.csv
{% endhighlight %}

---

## Using DuckDB via [REPL](https://terminalroot.com/create-repl-commands-easily/)
To use DuckDB directly via the command line, simply invoke the `duckdb` command. Below is an example of creating a database, table, update, select, and more:
{% highlight sql %}
v1.2.1 8e52ec4395
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
D SHOW DATABASES;
┌───────────────┐
│ database_name │
│    varchar    │
├───────────────┤
│ memory        │
└───────────────┘
D CREATE TABLE terminalroot (id INTEGER, name STRING);
D INSERT INTO terminalroot VALUES(1, 'Marcos Oliveira');
D INSERT INTO terminalroot VALUES(2, ' Mark Raasveldt');
D INSERT INTO terminalroot VALUES(3, 'Hannes Mühleisen');
D SELECT * FROM terminalroot;
┌───────┬──────────────────┐
│  id   │       name       │
│ int32 │     varchar      │
├───────┼──────────────────┤
│     1 │ Marcos Oliveira  │
│     2 │  Mark Raasveldt  │
│     3 │ Hannes Mühleisen │
└───────┴──────────────────┘
D UPDATE terminalroot SET name='Mark Raasveldt' WHERE id = 2;
D SELECT * FROM terminalroot;
┌───────┬──────────────────┐
│  id   │       name       │
│ int32 │     varchar      │
├───────┼──────────────────┤
│     1 │ Marcos Oliveira  │
│     2 │ Mark Raasveldt   │
│     3 │ Hannes Mühleisen │
└───────┴──────────────────┘
D 
{% endhighlight %}

---

There is a huge ecosystem surrounding DuckDB and you can even test it *online*. Below are some interesting links for you to check out!

+ <https://duckdb.org/>
+ <https://github.com/duckdb/duckdb>
+ <https://duckdb.org/docs/stable/clients/wasm/overview.html>
+ <https://github.com/duckdb/duckdb-web>

