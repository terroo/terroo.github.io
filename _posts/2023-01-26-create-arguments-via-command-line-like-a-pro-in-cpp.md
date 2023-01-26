---
layout: post
title: "Create Arguments via Command Line LIKE A PRO in C++"
date: 2023-01-26 12:50:50
image: '/assets/img/cpp/argparse.jpg'
description: 'Adding magic to parameters via command line.'
tags:
- cpp
- command
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

The arguments via command line leveraged the [UNIX](https://terminalroot.com/tags#unix) commands making them into high power tools.

Today we are going to meet `argparse` a library written in [Modern C++](https://terminalroot.com/tags#cpp). This tool not only helps you to create arguments in a professional way, but also to create `help` in a practical way.

---

# Installation
Dependencies:
+ [gcc](https://terminalroot.com/tags#gcc), [clang](https://terminalroot.com/tags#clang) or [MSVC](https://learn.microsoft.com/cpp/build/reference/compiler-options?view=msvc-170);
+ [Make](https://terminalroot.com/tags#make)
+ [CMake](https://terminalroot.com/tags#cmake)
+ [Git](https://terminalroot.com/tags#git)

Run the commands in order:

```bash
git clone https://github.com/p-ranav/argparse
cd argparse
mkdir build
cd build
cmake -DARGPARSE_INSTALL=on ..
sudo make install
```

The files will be installed in:

```bash
Install the project...
-- Install configuration: ""
-- Installing: /usr/local/lib64/cmake/argparse/argparseConfig.cmake
-- Installing: /usr/local/include/argparse/argparse.hpp
-- Installing: /usr/local/lib64/cmake/argparse/argparseConfig-version.cmake
-- Installing: /usr/local/lib64/pkgconfig/argparse.pc
```

---

# Usage
To test a basic file would be the example provided in the documentation

```cpp
#include <argparse/argparse.hpp> // header

int main(int argc, char *argv[]) { // important
   argparse::ArgumentParser program("program_name"); // change to your command name, eg "square"

   program.add_argument("square")
     .help("display the square of a given integer") // automatically add to help
     .scan<'i', int>(); // check for parameters that are digits only

   try {
     program.parse_args(argc, argv);
   }
   catch (const std::runtime_error& err) { // note that since it's just checking if the arguments were passed, so it's 'runtime_error'
     std::cerr << err.what() << std::endl;
     std::cerr << program;
     std::exit(1);
   }

   auto input = program.get<int>("square"); // stores the parameter to a variable so we can manipulate it more easily
   std::cout << (input * input) << std::endl; // execute the operation

   return 0;
}
```

Let's see more options by creating a command from scratch.

---

# Creating a Command from Scratch
Let's create a command similar to the [UNIX]() `cat` command, but let's call it: `mycat`.

### 1. Include the header:
```cpp
#include <argparse/argparse.hpp>
```

### 2. Create an instance of `ArgumentParser` and enter the name of our command:
> Remembering that your `main()` function needs to receive parameters, for example: `int main (int argc, char **argv)`.

```cpp
argparse::ArgumentParser app("mycat");
```

### 3. Add your program argument to `help`
Instruct the command to receive at least 1 file as a parameter. And already add this to `--help`.

```cpp
app.add_argument("files")
   .help("Inform the file(s) you want to see the content.");
```


### 4. Check if parameters were passed:
```cpp
try {
   app.parse_args(argc, argv);
}catch (const std::runtime_error &err){ // runtime_error
   std::cerr << err.what() << '\n';
   std::cerr << app;
   std::exit(1);
}
```

### 5. Check if FILES were passed:
```cpp
try{
  auto files = app.get<std::vector<std::string>>("files");
}catch(const std::logic_error &err){ // logic_error
    std::cerr << err.what() << '\n';
   std::cerr << app;
   std::exit(1);
}
```

### 6. Recreate the same variable, but outside the block to use the files
```cpp
auto files = app.get<std::vector<std::string>>("files");
for(auto &file : files){
   std::cout << "FILE: " << file << '\n';
}
```

### 7. Compile and test!
To compile, you don't need any specific flag, just compile and run:
```cpp
g++ mycat.cpp -o mycat
```

Before running let's use this file as an example

> `file.txt`
```txt
Of course life is good
And joy, the only unspeakable emotion
Of course I think you're beautiful
In you I bless the love of simple things
Of course I love you
And I have everything to be happy

But I happen to be sad...
```

If we just run the program/command without informing any files, it already shows the type of error in the first line and then the help already with the customized data for our command:
```bash
$ ./mycat

files: 1 argument(s) expected. 0 provided.
Usage: mycat [--help] [--version] files

Positional arguments:
   files Inform the file(s) you want to see the content.

Optional arguments:
   -h, --help shows help message and exits
   -v, --version prints version information and exits
```

If we pass the file, it already lists:
```bash
./mycat file.txt
```

### 8. Displaying file contents
As we want to display the contents of the file instead of the list, let's just create a function named `mycat()` and of type `void receiving a string as a parameter`:

```cpp
#include <fstream>

void mycat(const std::string &name){
   std::string line{};
   std::ifstream file(name);
   while(std::getline(file, line)){
    std::cout << line << '\n';
   }
}
```

And in our `loop` we will replace `std::cout` with the function passing the name of our file:
```cpp
for(auto &file : files){
   mycat(file);
}
```
> This is a basic example, but it would be right to include the `<filesystem>` and create another `try catch` to check if the `files`(strings) are of type file.

Now if we recompile and run it, it will already display the contents of the file:
```cpp
g++ mycat.cpp -o mycat
./mycat file.txt
```

### 9. Displaying number of lines
The `cat` command has a `-n` or `--number` parameter which displays line numbers. Let's implement this parameter to our `mycat`.

First let's add a new argument:
> There are several union functions that we can add, in this case we will use two:

+ `.default_value(false)` - if you want a default value;
+ `.implicit_value(true);` - does not require specific value;

```cpp
app.add_argument("-n", "--number")
   .help("Display the number of lines")
   .default_value(false)
   .implicit_value(true);
```

### 10. Now let's create a check if this argument is active and pass it to our function:
> leave it like that

```cpp
void mycat(const std::string &name, bool check){
   std::string line{};
   int number {1};
   std::ifstream file(name);
   while(std::getline(file, line)){
     if(check){
       std::cout << number << "." << line << '\n';
       ++number;
     }else{
       std::cout << line << '\n';
     }
   }
}
```

And our check will look like this:

```cpp
bool check{false};
if( app["-n"] == true ){
   check = true;
}

auto files = app.get<std::vector<std::string>>("files");
for(auto &file : files){
   mycat(file, check);
}
```

Recompile and test in several ways:
```bash
g++ mycat.cpp -o mycat
./mycat file.txt
./mycat --number file.txt
./mycat -n file.txt
./mycat file.txt --number
.mycat file.txt -n
```

### 11. We can improve more things like:

+ Change version: `app("mycat", "2.3.0");`
+ Change help and version display text:

```cpp
argparse::ArgumentParser app("mycat", "2.3.0", argparse::default_arguments::none);
app.add_argument("-h", "--help")
  .help("Show this help");

app.add_argument("-v", "--version")
  .help("Show the version");
```
+ Add a description:

```cpp
app.add_description("A minimalist alternative to the 'cat' command.");
```
+ Read multiple files:

```cpp
app.add_argument("files")
  .help("Enter the file(s) you want to see the content.")
  .remaining();
```

And use:
```bash
/mycat file1.txt file2.txt file3.txt
/mycat -n file1.txt file2.txt file3.txt
```

And among several possibilities that can be found in the documentation.

---

# Useful links
+ <https://github.com/p-ranav/argparse>
+ <https://github.com/p-ranav/argparse/issues/241>
+ <https://youtu.be/2JMCqTdhopw>


