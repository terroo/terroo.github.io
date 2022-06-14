---
layout: post
title: "Compile your C++ projects with Chalet"
date: 2022-06-14 13:31:22
image: '/assets/img/cppdaily/chalet.jpg'
description: 'Another modern and simple to use alternative.'
tags:
- cpp
- cppdaily
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Chalet** is a command line application that reads a JSON project file(*chalet.json*) and compiles your projects [C](https://terminalroot.com/tags#clanguage)/[ C++](https://terminalroot.com/tags#cpp).

Behind the scenes, Chalet generates a build file [Ninja](https://terminalroot.com/tags#ninja) or [Make](https://terminalroot.com/tags#make) and runs some caching.

The Chalet project files focus on an intuitive language designed to be easy to understand while still providing a lot of control. Since projects are JSON, they can be easily integrated into IDEs.

---

# Installation
To install on a [GNU](https://terminalroot.com/tags#gnu)/[Linux](https://terminalroot.com/tags#linux) 64-bit system just download the [latest version](https://github.com/chalet-org/chalet/releases), unzip and move the binary to a `$PATH`, example:

```bash
wget https://github.com/chalet-org/chalet/releases/download/v0.4.2/chalet-x86_64-linux-gnu.zip
unzip chalet-x86_64-linux-gnu.zip
cd chalet-x86_64-linux-gnu/
sudo install -v chalet /usr/local/bin/
```

Also add autocomplete:

```bash
mkdir -p ~/.local/share/completions
install -v chalet-completion.sh ~/.local/share/completions
echo 'source ${HOME}/.local/share/completions/chalet-completion.sh' >> ~/.bashrc
source ~/.bashrc
```

If you want to add other local autocompletes in the future, change the line added to your `~/.bashrc` by this loop:

```bash
for i in ${HOME}/.local/share/completions/*; of
  source ${i}
done
```

---

# Usage
To create a project from scratch, just run:

```bash
chalet init myproject
```

A *wizard* will be started with questions related to your project, answer as desired. And to build and run use the commands:

```bash
cd myproject
chalet build
chalet run
```

For more details use the `--help` parameter and/or access the [official website](https://www.chalet-work.space/) and the [repository](https://github.com/chalet- org/chalet).

