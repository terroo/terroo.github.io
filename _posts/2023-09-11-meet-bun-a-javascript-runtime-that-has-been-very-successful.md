---
layout: post
title: "Meet Bun, a JavaScript runtime that has been very successful!"
date: 2023-09-11 11:18:29
image: '/assets/img/js/bun.jpg'
description: 'Made with Zig and C++'
tags:
- zig
- javascript
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Bun** is a [JavaScript](https://terminalroot.com/tags#javascript) runtime, another alternative between: [Nodejs](https://terminalroot.com/tags#nodejs), QuickJS, Deno and among others.

Although it is still in development, Bun is very successful due to its performance, accelerated flows and execution of simpler production codes in resource-limited environments, such as serverless functions.

Bun is a complete toolkit for JavaScript and TypeScript applications.

It was written in [Zig](https://terminalroot.com/tags#zig) and [C++](https://terminalroot.com/tags#cpp), drastically reducing startup time and memory usage.

---

# Installation
There are a few ways to install, the most common is to use [cURL](https://terminalroot.com/using-curl-with-cpp/) and add it to your [Shell](https://terminalroot.com/tags#shell) configuration file, just run the commands below:

{% highlight bash %}
curl -fsSL https://bun.sh/install | bash
echo 'alias bun="${HOME}/.bun/bin/bun"' >> ~/.bashrc
exec $SHELL
{%endhighlight%}

To test, just create a basic `index.js` code:
{% highlight js %}
console.log("Hello, Bun!")
{%endhighlight%}

And run:
{% highlight bash %}
bun index.js
{%endhighlight%}

Other ways to install can be with [npm](https://terminalroot.com/tags#npm), [Homebrew](https://terminalroot.com/homebrew-the-macos-package-manager-on-gnu-linux/) or [Docker](https://terminalroot.com/tags#docker):
{% highlight bash %}
# With npm
npm install -g bun

# With Homebrew
brew tap oven-sh/bun
brew install bun

# With Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
{%endhighlight%}

---

For more Bun features use `bun --help`, visit [GitHub repository](https://github.com/oven-sh/bun) or web address: <https://bun.sh />.
