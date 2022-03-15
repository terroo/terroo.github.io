---
layout: post
title: "How to Connect to SQLite with Lua"
date: 2022-03-15 18:54:55
image: '/assets/img/lua/lua-sqlite.jpg'
description: 'Step by step from installation to database connection.'
tags:
- lua
- sqlite
---

![How to Connect to SQLite with Lua](/assets/img/)

---

Connecting to a database in particular [SQLite](https://www.sqlite.org/) is essential to develop local and even online applications.

We also have a complete guide to using Lua for beginners [at this link](https://terminalroot.com/definitive-guide-to-lua-for-beginners/) .

In this article we will see how to connect to SQLite using Lua using a step by step from installation to database connection.

For this we will use [Ubuntu 21.04](https://terminalroot.com/tags#ubuntu) as a reference, but you can change package names, directory paths according to your [distribution](https://terminalroot.com/tags#distro) or operating system.

---

# Installation

## 1. Required packages
First of all let's install the necessary dependencies
{% highlight sh %}
sudo apt update
sudo apt install sqlite3 libsqlite3-dev lua5.1 lua5.4 luarocks
{% endhighlight %}
> Note: Even if you have already installed it, I recommend reinstalling, for this the parameter: `--reinstall`

Some package names may be different in your distro, use *search* in your package manager for the corresponding names.

### 2. Check that both are working normally:
Check command and version.

{% highlight sh %}
lua -v
#Lua 5.1.2 Copyright (C) 1994-2020 Lua.org, PUC-Rio
luarocks --version
#/usr/bin/luarocks 2.4.2
#LuaRocks main command-line interface
{% endhighlight %}

Change the interpreter to **5.1** by modifying your interpreter's symlink
{% highlight sh %}
sudo ln -sf /usr/bin/lua5.1 /etc/alternatives/lua-interpreter
{% endhighlight %}
> If you are on another Ubuntu distribution or version, create a symlink directly, eg `sudo ln -sf /usr/bin/lua5.1 /usr/bin/lua`


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

### 3. Now let's install LuaSQL with [Luarocks](https://terminalroot.com/definitive-guide-to-lua-for-beginners#luarocks)
{% highlight lua %}
sudo luarocks install luasql-sqlite3
{% endhighlight %}

Check if it was installed normally by listing with `luarocks`
{% highlight sh %}
luarocks list
{% endhighlight %}

Similar output will be:
{% highlight sh %}
Installed rocks:
----------------

luasql-sqlite3
   2.6.0-1 (installed) - /usr/local/lib/luarocks/rocks
{% endhighlight %}
> That is, listed the **luasql-sqlite3** normally and the `sqlite3.so` file is in the path: `/usr/local/lib/luarocks/rocks`

---

### 4. Now let's make it possible for `package.path` to find the SQLite package installed by Luarocks
To do this, create a symbolic link with the command below:
{% highlight sh %}
sudo ln -s /usr/local/lib/lua /usr/lib/lua
{% endhighlight %}

**NOTE**
> If when you run this command: `ls /usr/local/lib/lua` if the output is not **5.1** you will have to change the symbolic link of the `lua` command to the version that appears as we did in step **3**, if more than one appears there will be no problem, but if the version number of your `lua` command does not exist you will only be able to use the interpreter for the corresponding version of those available when listing this cited directory.

---

# Testing
To test we are going to use a test-ready database that I created and to get it just download it with [wget](https://www.gnu.org/software/wget/) with the command below:
{% highlight sh %}
wget -q https://git.io/litelua.db
{% endhighlight %}

Now let's create the `database.lua` file with the code [Lua](https://terminalroot.com/tags#lua) below and then we will explain some parts of it:

{% highlight lua %}
local driver = require('luasql.sqlite3')
local env = driver.sqlite3()
local db = env:connect('./litelua.db')

local results = db:execute[[
  SELECT * FROM example;
]]

local id,mail,url,lang,name = results:fetch()
while id do
  print(id..' | '..mail..' | '..url..' | '..lang ..' | '..name)
  id,mail,url,lang,name = results:fetch()
end

results:close()

db:close()
env:close()
{% endhighlight %}

The output should return data from the fields of the informed table.

+ In `db:execute` you must enter the SQLite command you want, it can be: `CREATE`, `UPDATE`, `DELETE`...
+ The variables have almost the same names as the columns, but this is not a rule.

# Useful links
+ <http://lua.sqlite.org/index.cgi/doc/tip/doc/lsqlite3.wiki>
+ <https://keplerproject.github.io/luasql/manual.html>

