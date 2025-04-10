---
layout: post
title: "Automate SFML Projects with propp, write in Rust"
date: 2025-04-10 18:03:32
image: '/assets/img/terlang/pro++.jpg'
description: "🚀 The Rust version of the App I made in C++"
tags:
- rust
- sfml
- terlang
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

I had created an [application](https://terminalroot.com/automate-sfml-projects-with-propp/) that automatically generates [C++](https://terminalroot.com/tags#cpp) projects with [SFML](https://terminalroot.com/tags#sfml) and compiles them with the programming language I created: [Terlang](https://github.com/terroo/terlang).

For more information about this command, which is called `pro++`, [see this article](https://terminalroot.com/automate-sfml-projects-with-propp/).

This article contains the same code, but written in [Rust](https://terminalroot.com/tags#rust). We will see how to *download*, *compile* and *install* them on your system.

---

## Download and install only

Just download the `.zip`, compile and install it:

```bash
wget https://terminalroot.com/downloads/propp.zip
unzip propp
cd propp
cargo build --release
cargo install --path .
```

If there is an error installing it is because you do not have the `~/.cargo/bin` directory and/or it is not in your `PATH`, so do this and then try installing again:

```bash
mkdir -p ~/.cargo/bin
echo 'export PATH="${PATH}:${HOME}/.cargo/bin"' >> ~/.bashrc
source ~/.bashrc
cargo build --release
cargo install --path .
```

---

## Testing the project
You can test it even before installing (if you haven't already), inside `propp/` run:
> you don't even need to run the build, this command does both

```bash
cargo run -- "My Game"
cd MyGame
ter build.ter
```
> The ter command can be installed [here](https://github.com/terroo/terlang).

If you want to uninstall:

```bash
cd propp/
cargo uninstall --bin propp
cd ..
rm -rf propp/
```

> Another [app](https://github.com/terroo/lotto/blob/rust-version/loterust/README.md) I made in Rust.


