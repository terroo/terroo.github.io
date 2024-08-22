---
layout: post
title: "LLaMA C++ - Use Artificial Intelligence on your computer or smartphone"
date: 2024-08-22 09:24:22
image: '/assets/img/ai/llama-cpp.jpg'
description: "🚀 An LLM inference in C/C++"
tags:
- ai
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**llama.cpp** is an open source software library written in [C++](https://terminalroot.com/tags#cpp) that performs inference in several models of large languages, such as [Llama](https://llama.meta.com/). Along with the library, a [CLI](https://terminalroot.com/tags#cli) and a web server are included. It was developed together with the [GGML](https://github.com/ggerganov/ggml) project, a general-purpose tensor library.

It was developed by **Georgi Gerganov**, a Physics graduate, at the end of 2022 and inspired by `LibNC` which was created by **Fabrice Bellard** inventor of [FFmpeg](https://terminalroot.com/15-examples-of-different-usage-of-ffmpeg/) and [QuickJS](https://github.com/bellard/quickjs).

The difference with `LLaMA C++` is that it has no dependencies and works on computers without GPUs and smartphones. LLaMA.cpp uses the `GGUF` file format which is a binary format that stores tensors and metadata in a single file.


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
You can use pre-compiled binaries for [Windows](https://terminalroot.com/tags#windows), [macOS](https://terminalroot.com/tags#macos), [GNU/Linux](https://terminalroot.com/tags#gnulinux) and [FreeBSD](https://terminalroot.com/tags#freebsd).

Just download it from the releases page. Example for [Ubuntu](https://terminalroot.com/tags#ubuntu)(it works and works on any distro, but you need to have the [cURL](https://terminalroot.com/using-curl-with-cpp/) lib installed):
> Example for build version: `3615`.

{% highlight bash %}
curl -LO https://github.com/ggerganov/llama.cpp/releases/download/b3615/llama-b3615-bin-ubuntu-x64.zip
unzip llama-b3615-bin-ubuntu-x64.zip
cd build
./llama-cli --help
{% endhighlight %}

You can also compile from scratch, that's how I did it, because this way there are optimizations in the build for your hardware. Just clone the GitHub repository and compile with [make](https://terminalroot.com/tags#make):

{% highlight bash %}
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make
./llama-cli --help
{% endhighlight %}

---

## Usage
You will need some example template, there are templates for several purposes: Create a chat conversation, Generate programming language code,... And you can search and download them on the website: [Hugging Face](https://huggingface.co/). Example download for a Chat Template: `Qwen1.5-4B-Chat-GGUF`

{% highlight bash %}
curl -LO 'https://huggingface.co/Qwen/Qwen1.5-4B-Chat-GGUF/resolve/main/qwen1_5-4b-chat-q4_k_m.gguf?download=true'
{% endhighlight %}
> For more information, access the *Files and versions* tab at the link: <https://huggingface.co/Qwen/Qwen1.5-4B-Chat-GGUF>.

Now just use `llama-cli` and run it with the following parameters:
> In this example, let's assume that we want the [AI](https://terminalroot.com/tags#inteligenciaartificial) to answer: *What is C++?* (in English):

{% highlight bash %}
./llama-cli -m qwen1_5-4b-chat-q4_k_m.gguf -p "Whats is C++?" -n 128
{% endhighlight %}
+ `-m` to indicate the path of the model;
+ `-p` to ask the question;
+ and `-n` is used to specify the number of tokens that the model should generate in response to an input. In this case, the value `128` indicates that the model should generate up to `128 tokens`.

Please wait, in some cases, depending on your hardware, it may take a while.


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

## Conclusion
I found the project excellent, mainly because you can use it on your machine at no cost and without any *free* account rules. However, despite all the significant improvements, those who only have a CPU and 2 cores will not have much ease of use, not to mention that this simple question consumed almost 15GB of my RAM.

But that's because my hardware is really outdated, but it still ran!

There are some front-ends for LLaMA C++, including a web server and desktop, among them:
+ [Open Playground](https://github.com/nat/openplayground), with UI made with [TypeScript](https://terminalroot.com/tags#typescript) and generation of scripts and connection to the LLaMA server through [Python](https://terminalroot.com/tags#python); + [LM Stuudio](https://lmstudio.ai/) the desktop application, made with [Electron.js](https://terminalroot.com/how-to-create-a-mini-project-with-electronjs/) available for Windows, macOS and GNU/Linux (via AppImage).

In addition to several others mentioned in the [llama.cpp](https://github.com/ggerganov/llama.cpp) [repository itself), in addition to several other information that you can get there!
