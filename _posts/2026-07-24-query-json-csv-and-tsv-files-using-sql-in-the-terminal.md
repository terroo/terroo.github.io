---
layout: post
title: "Query JSON, CSV, and TSV Files Using SQL in the Terminal"
date: 2026-07-24 18:32:04
image: '/assets/img/go/qo.jpg'
description: "🔳 Say goodbye to awk, Python scripts, or importing data into a database."
tags:
- go
- tui
- sql
- commands
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**qo** is a command-line tool written in [Go](https://terminalroot.com/tags#go) that allows you to run [SQL](https://terminalroot.com/tags#sql) queries on structured data. It features an interactive [TUI (Terminal User Interface)](https://terminalroot.com/tags#tui) where you write your query and see results in real time, and it also works seamlessly in [Unix](https://terminalroot.com/tags#unix) pipelines.

Its main features include:

+ Query [JSON](https://terminalroot.com/tags#json), [CSV](https://terminalroot.com/tags#csv), and TSV files.
+ Uses SQL syntax based on [SQLite](https://terminalroot.com/tags#sqlite).
+ Interactive interface for quickly testing queries.
+ Works in pipelines (`stdin` → `stdout`).
+ Open-source project written in Go under the MIT license.

## Installation

Using [brew](https://terminalroot.com/tags#brew):
{% highlight bash %}
brew install qo
{% endhighlight %}

Using Go itself:
{% highlight bash %}
go install github.com/kiki-ki/go-qo/cmd/qo@latest
{% endhighlight %}

You can also compile the project directly from the source code available on GitHub.

## Basic Usage

Imagine a `users.json` file containing a list of users.

You can open the interactive interface:

{% highlight bash %}
qo users.json
{% endhighlight %}

Or run a query directly:

{% highlight bash %}
qo users.json "SELECT name, age FROM data WHERE age >= 18"
{% endhighlight %}

Since the tool works well with pipelines, you can also do:

{% highlight bash %}
cat users.json | qo
{% endhighlight %}

The SQL syntax makes operations like these easy:

* `SELECT`
* `WHERE`
* `ORDER BY`
* `GROUP BY`
* `JOIN` (when applicable to the data)

This makes exploring files much more intuitive for those already familiar with SQL.

---

For more information, visit the [repository](https://github.com/kiki-ki/go-qo).
