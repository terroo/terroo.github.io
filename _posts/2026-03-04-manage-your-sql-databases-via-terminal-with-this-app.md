---
layout: post
title: "Manage Your SQL Databases via Terminal with This App"
date: 2026-03-04 08:49:08
image: '/assets/img/go/pam.jpg'
description: "For developers, DBAs, and analysts who need a lightweight, fast, and powerful tool for working with multiple databases in the terminal."
tags:
- go
- sql
- cli
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

Pam is a minimalist command-line interface (CLI) tool written in [Go](https://terminalroot.com/tags#go), designed to simplify managing and executing [SQL](https://terminalroot.com/tags#sql) queries across multiple databases. Inspired by “The Office,” Pam pays homage to the character who organizes everything efficiently.

### Key Features

- **Query Library:** Save and organize your most-used SQL queries for easy access and reuse.
- **Multi-database Support:** Compatible with PostgreSQL, MySQL, SQLite, Oracle, SQL Server, ClickHouse, and Firebird.
- **[TUI (Terminal User Interface)](https://terminalroot.com/tags#tui):** Keyboard-focused navigation with Vim-inspired shortcuts for efficient manipulation of query results.
- **Direct Editing:** Update cells, delete rows, and edit SQL directly in the results table.
- **Data Export:** Export results in formats such as [CSV](https://terminalroot.com/how-to-parse-csv-with-modern-cpp/), [JSON](https://terminalroot.com/how-to-consume-apis-with-curl-and-cpp-in-the-terminal/), SQL, [Markdown](https://terminalroot.com/tags#markdown), or [HTML](https://terminalroot.com/tags#html).
- **Parameterized Queries:** Support for parameterized queries, enabling dynamic searches without rewriting SQL.

## Installation

You can install Pam via Go, by downloading the binary directly from the releases repository, or using [Nix/NixOS](https://terminalroot.com/tags#gnu).

{% highlight bash %}
go install github.com/eduardofuncao/pam/cmd/pam@latest
{% endhighlight %}

---

## Basic Usage

After installation, initialize a connection to your desired database:

{% highlight bash %}
pam init mydb postgres "postgresql://user:pass@localhost:5432/mydb"
{% endhighlight %}

Add queries to your library:

{% highlight bash %}
pam add list_users "SELECT * FROM users"
{% endhighlight %}

And run them interactively:

{% highlight bash %}
pam run list_users
{% endhighlight %}

Example:

![alt text](https://private-user-images.com/45571086/535609147-b62bec1d-2255-4d02-9b7f-1c99afbeb664.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzI0NjAwMDIsIm5iZiI6MTc3MjQ1OTcwMiwicGF0aCI6Ii80NTU3MTA4Ni81MzU2MDkxNDctYjYyYmVjMWQtMjI1NS00ZDAyLTliN2YtMWM5OWFmYmViNjY0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzAyVDEzNTUwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXpTaWduYXR1cmU9ZDBmY2RiMTg4Y2VhYjllOTUwYWYzZDdjN2FhYmE0ZDk3ZWM1NmFhOTQ2MjIwNjY4ODhlZjFiNDcxM2E0OTg3YyZYLUFtei1TaWduZWRIZWFkZXJzPWhostIn0.oihmYpe5xuETxb5WPDYGJl4qRt0qqNCmGTZoP_o3Dd8)

The TUI interface supports Vim-like shortcuts (`j`, `k`, `h`, `l`), copy cell (`y`), export data (`x`), edit cell (`u`), delete row (`D`), and more quick commands.

Pam stores its configuration in `~/.config/pam/config.yaml`, allowing you to adjust row limits, column widths, and color schemes for the interface.

The app provides example commands for easily connecting to various database types, including PostgreSQL, [MySQL](https://terminalroot.com/tags#mysql), SQL Server, Oracle, SQLite, ClickHouse, and Firebird.

---

For more information, visit the [repository](https://github.com/eduardofuncao/pam)
