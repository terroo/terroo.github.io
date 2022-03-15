---
layout: post
title: "How to Connect to SQLite with Python"
date: 2022-03-15 19:03:24
image: '/assets/img/python/sqlite-python.jpg'
description: 'Simple and fast!'
tags:
- python
- sqlite
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In the previous post: [How to Connect to SQLite with Lua](https://terminalroot.com/how-to-connect-to-sqlite-with-lua/) we did the same procedure with [Lua](https://terminalroot.com/tags#lua). 

In this article I will be a little shorter. That is, I will only post the code, as you can get SQLite installation and usage tips [here](https://www.sqlite.org/).

---

# Code ready
The code is very simple, just read it and the comments and you can understand and/or implement it in your project, as follows:

{% highlight python %}
import sqlite3
import datetime
import os

# If the file does not exist, it creates and connects it, otherwise it only connects
con = sqlite3.connect('example.db')
cur = con.cursor()

# Create the table in the database from the above file if the table does not exist
cur.execute('''CREATE TABLE IF NOT EXISTS stocks
               (date text, trans text, symbol text, qty real, price real)''')

# This code block I created just in case you run the script more than once
# it only inserts the data if the /tmp/insertok file does not exist and creates the file
# Only insert data if /tmp/insertok file does not exist
if os.path.isfile('/tmp/insertok'):
    print("", end ="")
else:
    cur.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")
    f = open("/tmp/insertok", "a")
    f.write("insertok")
    f.close()

# validate the changes made
con.commit()

# Select data from database table and print to screen
for row in cur.execute('SELECT * FROM stocks ORDER BY price'):
    print(row[0])
    data = row[0] # I created this just to format the output to dd/mm/yyyy
    print(row[1])
    print(row[2])
    print(row[3])
    print(row[4])
    #print(row)
con.close()

# formatting the date
output = datetime.datetime.strptime(date, '%Y-%m-%d')
print(output.date().strftime("%d/%m/%Y"))
{% endhighlight %}

---

# Useful links
+ <https://docs.python.org/3/library/sqlite3.html>
+ <https://docs.python.org/3/library/datetime.html#datetime.datetime.fromisoformat>
+ <https://docs.python.org/3/library/datetime.html>

