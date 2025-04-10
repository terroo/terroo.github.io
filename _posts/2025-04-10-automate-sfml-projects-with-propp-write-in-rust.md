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

This article contains the same code, but written in [Rust](https://terminalroot.com/tags#rust). We will see the files and, <u>at the end</u>, how to *download*, *compile* and *install* them on your system.

---

## Step by step
1. Create a directory named `propp/` and subdirectory `src`:
{% highlight bash %}
mkdir -p propp/src
cd propp
{% endhighlight %}

Crie os arquivos:

> `vim src/main.`
{% highlight rs %}
mod propp;

use anyhow::Result;
use std::env;

fn main() -> Result<()> {
    let args: Vec<String> = env::args().collect();

    if args.len() <= 1 {
        eprintln!("Enter the class name.");
        std::process::exit(1);
    }

    let pro = propp::ProPP::new(&args)?;
    pro.run()?;

    Ok(())
}
{% endhighlight %}

---


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

> `vim src/propp.rs`
{% highlight rs %}
use std::fs;
use std::path::PathBuf;
use anyhow::{Context, Result};

pub struct ProPP {
    title: String,
    classname: String,
    filename: String,
    dir: PathBuf,
}

impl ProPP {
    pub fn new(args: &[String]) -> Result<Self> {
        let title = &args[1];
        let mut classname = title.clone();
        let mut filename = Self::str_to_lower(title);

        if Self::has_space(title) {
            Self::change_space(&mut classname, "");
            Self::change_space(&mut filename, "-");
        }

        let dir = PathBuf::from(&classname);

        if dir.exists() {
            eprintln!("Error. Project/Directory already exists.");
            std::process::exit(65);
        }

        fs::create_dir(&dir).context("Failed to create directory")?;

        Ok(Self {
            title: title.clone(),
            classname,
            filename,
            dir,
        })
    }

    pub fn run(&self) -> Result<()> {
        let path_header = self.dir.join(format!("{}.hpp", self.filename));
        let path_cpp = self.dir.join(format!("{}.cpp", self.filename));
        let path_main = self.dir.join("main.cpp");
        let path_build = self.dir.join("build.ter");

        let header_file = self.set_header_file();
        let cpp_file = self.set_cpp_file();
        let main_file = self.set_main_file();
        let build_file = self.set_build_file();

        fs::write(&path_header, header_file).context("Failed to write header file")?;
        fs::write(&path_cpp, cpp_file).context("Failed to write cpp file")?;
        fs::write(&path_main, main_file).context("Failed to write main file")?;
        fs::write(&path_build, build_file).context("Failed to write build file")?;

        Ok(())
    }

    fn str_to_lower(s: &str) -> String {
        s.to_lowercase()
    }

    fn has_space(s: &str) -> bool {
        s.contains(' ')
    }

    fn change_space(s: &mut String, replacement: &str) {
        *s = s.replace(' ', replacement);
    }

    fn set_header_file(&self) -> String {
        format!(
            "#pragma once\n\n\
            #include <SFML/Graphics.hpp>\n\
            #include <memory>\n\n\
            class {} {{\n\
              sf::RenderWindow window;\n\
              void events(), draw();\n\n\
              public:\n\
                {}();\n\
                void run();\n\
            }};\n",
            self.classname, self.classname
        )
    }

    fn set_cpp_file(&self) -> String {
        format!(
            "#include \"{}.hpp\"\n\n\
            {}::{}() : window(\n\
                sf::VideoMode(1280,720),\n\
                \"SFML {}\",\n\
                sf::Style::Titlebar | sf::Style::Close) {{\n\
            }}\n\n\
            void {}::events() {{\n\
              auto event = std::make_unique<sf::Event>();\n\
              while(window.pollEvent(*event)) {{\n\
                if(event->type == sf::Event::Closed) {{\n\
                  window.close();\n\
                }}\n\
              }}\n\
            }}\n\n\
            void {}::draw() {{\n\
              window.clear();\n\
              window.display();\n\
            }}\n\n\
            void {}::run() {{\n\
              while(window.isOpen()) {{\n\
                events();\n\
                draw();\n\
              }}\n\
            }}",
            self.filename,
            self.classname,
            self.classname,
            self.title,
            self.classname,
            self.classname,
            self.classname
        )
    }

    fn set_main_file(&self) -> String {
        format!(
            "#include \"{}.hpp\"\n\n\
            int main() {{\n\
              auto obj = std::make_unique<{}>();\n\
              obj->run();\n\
              return EXIT_SUCCESS;\n\
            }}\n",
            self.filename, self.classname
        )
    }

    fn set_build_file(&self) -> String {
        "auto flags = \"-g -Wall -Werror -Wpedantic -fsanitize=address\"\n\
         flags = \"-Ofast\"\n\n\
         auto build = \"g++ \" + flags + \" *.cpp -lsfml-graphics -lsfml-window -lsfml-system\"\n\
         output(build)\n\n\
         exec(build)\n\
         exec(\"./a.out 2>/dev/null\")\n"
            .to_string()
    }
}
{% endhighlight %}

> `vim src/lib.rs`
{% highlight rs %}
pub mod propp;
{% endhighlight %}

> `vim Cargo.toml`
{% highlight ini %}
[package]
name = "propp"
version = "0.1.0"
edition = "2021"

[dependencies]
anyhow = "1.0"
{% endhighlight %}

And now compile and install:
{% highlight bash %}
cargo build --release
cargo install --path .
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

## Download and install only

If you don't want to create the files manually, just download the .zip, compile and install it:

{% highlight bash %}
wget https://terminalroot.com/downloads/propp.zip
unzip propp
cd propp
cargo build --release
cargo install --path .
{% endhighlight %}

If there is an error installing it is because you do not have the ~/.cargo/bin directory and/or it is not in your PATH, so do this and then try installing again:
{% highlight bash %}
mkdir -p ~/.cargo/bin
echo 'export PATH="${PATH}:${HOME}/.cargo/bin"' >> ~/.bashrc
source ~/.bashrc
cargo build --release
cargo install --path .
{% endhighlight %}

---

## Testing the project
You can test it even before installing (if you haven't already), inside `propp/` run:
> you don't even need to run the build, this command does both

{% highlight bash %}
cargo run -- "My Game"
cd MyGame
ter build.ter
{% endhighlight %}
> The ter command can be installed [here](https://github.com/terroo/terlang).

If you want to uninstall:
{% highlight bash %}
cd propp/
cargo uninstall --bin propp
cd ..
rm -rf propp/
{% endhighlight %}

> Another [app](https://github.com/terroo/lotto/blob/rust-version/loterust/README.md) I made in Rust.
