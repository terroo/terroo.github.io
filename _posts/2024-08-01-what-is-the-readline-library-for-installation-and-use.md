---
layout: post
title: "What is the readline library for, installation and use"
date: 2024-08-01 11:09:09
image: '/assets/img/c/readline.jpg'
description: ">_ To make your REPL like a boss!"
tags:
- clanguage
- cpp
- gnu
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The `readline` library is a powerful tool that makes it easier to read and edit user input in command-line programs.

Originally developed for the [GNU Project](https://terminalroot.com/tags#gnu), it offers a number of features that improve the user experience when interacting with terminal applications.

`readline` is used in several popular command-line tools, including the [Bash shell](https://terminalroot.com/tags#bash), the [Python REPL](https://terminalroot.com/tags#python) and many others.

## What is the `readline` library for?
The main purpose of the `readline` library is to improve the text input experience in terminals. Its features include:

1. **Line editing:** Allows users to edit input lines using familiar key combinations, such as moving the cursor left/right, deleting characters, etc.

2. **Command history:** `readline` keeps a history of entered commands, allowing users to navigate and reuse previous commands.

3. **Autocompletion:** Supports autocompletion of commands and arguments, increasing efficiency and reducing errors.

4. **Editing and formatting:** Allows for prompt customization, text coloring, and other formatting options.

---

## Installation
To install the `readline` library you can **use your operating system's package manager**. Example on [Ubuntu](https://terminalroot.com/tags#ubuntu) using *APT*:

{% highlight bash %}
sudo apt install libreadline-dev
{% endhighlight %}

You can also compile and install `readline` directly, click the button below, unzip and follow the instructions inside the unzipped folder to compile and install:

<a href="ftp://ftp.cwru.edu/pub/bash/readline-8.2.tar.gz" class="btn btn-danger btn-lg">Click here to download readline</a>


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

## Examples of Using the `readline` Library
Let's explore some practical examples to illustrate how the `readline` library can be used.

### Example 1: Basic Line Reading
A basic example of how to use `readline` to read a line of user input.
> In this example, the `readline` function is used to read a line of user input with the prompt "Type something: ". The input is then printed to the terminal.

**[C Language](https://terminalroot.com/tags#clanguage)**
{% highlight c %}
#include <stdio.h>
#include <stdlib.h>
#include <readline/readline.h>

int main() {
    char *input;
    input = readline("Type something: ");
    if (input) {
        printf("You typed: %s\n", input);
        free(input);
    }
    return 0;
}
{% endhighlight %}
> Compile using the `-lreadline` *flag*, e.g. `gcc main.c -lreadline`.

**[C++](https://terminalroot.com/tags#cpp)**
{% highlight cpp %}
#include <iostream>
#include <readline/readline.h>

int main() {
    std::string input = readline("Type something: ");
    if(input.c_str()){
        std::cout << "You typed: " << input << '\n';
    }
    return EXIT_SUCCESS;
}
{% endhighlight %}
> Compile using the `-lreadline` *flag*, e.g. `g++ main.cpp -lreadline`.

### Example 2: Using Command History
`readline` also allows you to store and reuse previous commands. See a simple example: 


**[C Language](https://terminalroot.com/tags#clanguage)** 

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>
#include <readline/readline.h>
#include <readline/history.h>

int main() {
  char *input;

  while((input = readline(">>> ")) != NULL) {
    if (*input) {
      add_history(input);
    }

    printf("You typed: %s\n", input);
    if(strcmp(input, "exit") == 0){
      free(input);
      break;
    }
    free(input);
  }

  return 0;
}
{% endhighlight %}

**[C++](https://terminalroot.com/tags#cpp)** 
{% highlight cpp %}
#include <iostream>
#include <readline/readline.h>
#include <readline/history.h>

int main(){
  char* input;
  std::string line {};
  for (;;){
    input = readline(">>> ");
    line = input;
    if(input){
      add_history(input);
    }
    if (line == "exit"){
      free(input);
      break;
    }
    free(input);
  }
  return EXIT_SUCCESS;
}
{% endhighlight %}

In this example, the command entered by the user is added to the history if it is not empty, allowing it to be reused simply by pressing the up arrow key: `↑`, if the `add_history(input)` had not been added, when pressing the key, the event would display literally: `^[[A^`.

---

For more information, visit: <https://tiswww.case.edu/php/chet/readline/rltop.html>


