---
layout: post
title: "Use Compile Explorer with VS Code"
date: 2024-04-29 19:36:00
image: '/assets/img/vscode/ce-vscode.jpg'
description: 'A useful extension for various situations!'
tags:
- vscode
- cpp
- assembly
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[Compile Explorer](https://compiler-explorer.com/) is an online tool that allows developers write code in various programming languages, mainly [C++](https://terminalroot.com/tags#cpp), and see how this code is translated into machine instructions by compilers.

It shows the code [Assembly](https://terminalroot.com/how-to-run-assembly-within-cpp-code/) generated for different platforms and optimizations, helping developers understand improve the internal functioning of compilers and optimizers.

This tool is useful for experimenting and comparing different pieces of code and for learning about the compilation process.

Another good news is that you can use it **within [VS CODE](https://terminalroot.com/tags#vscode)** using it as an extension!

---

# Compiler Explorer for VSCode
The [Compiler Explorer for VSCode](https://github.com/16bit-ykiko/vscode-compiler-explorer) extension integrates Compiler Explorer into VSCode based on the API provided by Compiler Explorer, allowing users to directly utilize the features from Compiler Explorer in VSCode.

To install it, simply select the "Extensions" tab in the left sidebar of your [VS Code](https://terminalroot.com.br/tags#vscode) and type: "Compiler Explorer for VSCode", select it and install.

![Compiler Explorer for VSCode](/assets/img/vscode/ce-vscode-1.jpg)

---

# Using
With your file(s) open, simply click the **Compiler Explorer for VSCode** icon in the left sidebar, choose the compiler and click the **▶**(No top of the sidebar) to compile and choose options between: Console, ASM and Stdout in the window on the right that will open!

![Compiler Explorer for VSCode](/assets/img/vscode/ce-vscode-2.jpg)

And you can do all the possible analysis that is done with the online tool!

---

For more information, visit the [extension repository](https://github.com/16bit-ykiko/vscode-compiler-explorer) on GitHub!
