---
layout: post
title: "Learn to Create Libraries for Python with C/C++"
date: 2023-10-02 08:34:49
image: '/assets/img/cpp/libpycpp.jpg'
description: 'Simple and functional!'
tags:
- python
- cpp
- clanguage
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In this article we will see: how to create libraries for [Python](https://terminalroot.com/tags#python) with [C++](https://terminalroot.com/tags#cpp), the process is similar to the [post/video we saw on C++ for Lua](https://terminalroot.com/how-to-embed-c-cpp-functions-in-lua/).

The libraries of several programming languages are written in [C](https://terminalroot.com/tags#clanguage) and [C++](https://terminalroot.com/how-to-edit-images-with-cpp-and-imagemagick/), as the performance is much higher than writing in the language itself.

There are a large number of libraries for Python that are written in C++, the most famous are:
+ [Tensorflow](https://github.com/tensorflow/tensorflow)
+ [OpenCV](https://github.com/opencv/opencv)
+ [Pytorch](https://github.com/pytorch/pytorch)
+ And among others.

---

# Creating a basic Hello World

Let's create a directory (`libpycpp/`) and a `main.cpp` file:
{% highlight bash %}
mkdirlibpycpp
cd libpycpp
vim main.cpp
{% endhighlight %}

## 01. Most basic code of all: Prints: `Hello World`

> `main.cpp`

{% highlight cpp %}
// 01. Include Python.h header
#include <Python.h>

// 02. Register the signature of your function
// and the logical content of your function
int world(){
   printf("Hello, World!\n");
   return 0;
}

// 03. Handles your function arguments
// and return to Python
static PyObject* world(PyObject* self, PyObject* args){
   return Py_BuildValue("s", world());
}

// 04. Creates an array of static type PyMethodDef
// which stores all your functions
static PyMethodDef hello_methods[] = {
   {"world", world, METH_VARARGS, "Print Hello World."},
   {NULL, NULL, 0, NULL} // Enter the end of the list
   // Python function | your role | arguments(METH_VARARGS = 1) | What does she do
};

// 05. Creates the structure with the name of the module you
// want to use in Python
static struct PyModuleDef hello_module = {
   PyModuleDef_HEAD_INIT, // Informs the base
   "hello", // The name of your library
   NULL, // The name of the documentation
   -1, // The module size, -1 is the maximum size
   hello_methods // The module name with underscore and methods at the end
};

// 06. Similar to the main() function, gateway to Python.
// The return type must be: PyMODINIT_FUNC
// The name must be PyInit_ the name of your lib (void arguments)
PyMODINIT_FUNC PyInit_hello(void){
   return PyModule_Create(&hello_module); // Return PyModule_Create and pointer & the PyModuleDef struct
}
{% endhighlight %}

To compile:
{% highlight bash %}
g++ -shared -o hello.so -fpic main.cpp -I /usr/include/python3.12 # Enter the version on your system
{% endhighlight %}

Using:
> `vim script.py`

{% highlight python %}
import hello

hello.world()
{% endhighlight %}

## 02. Using parameters for function

#### 1. Create a new base function:
{% highlight cpp %}
int add(int x, int y){
   return x + y;
}
{% endhighlight %}

#### 2. Create the return
{% highlight cpp %}
// Does not necessarily have to be the same name
static PyObject* add(PyObject* self, PyObject* args){
   int a, b;
   // ii = 2 integers
   if(!PyArg_ParseTuple(args, "ii", &a, &b)){
     return NULL;
   }
   // i = returns an integer
   return Py_BuildValue("i", add(a, b));
}
{% endhighlight %}

#### 3. Add to array
{% highlight cpp %}
static PyMethodDef hello_methods[] = {
   {"world", world, METH_VARARGS, "Print Hello World."},
   {"add", add, METH_VARARGS, "Add two number."}, // Add to list
   {NULL, NULL, 0, NULL} // Enter the end of the list
};
{% endhighlight %}


Using:
> `vim script.py`

{% highlight python %}
import hello

print(hello.add(3, 6))

numb1 = 36
numb2 = 90

print("The sum is: ", hello.add(numb1, numb2))
{% endhighlight %}
> `python script.py`

---

## 03. Creating a function that receives string
1. Let's call this function `echo`:
{% highlight cpp %}
int echo(const char* str){
   printf("%s", str);
   return 0;
}
{% endhighlight %}

2. `PyObject` function:
{% highlight cpp %}
static PyObject* echo(PyObject* self, PyObject* args){
   const char* str;
   if(!PyArg_ParseTuple(args, "s", &str)){
     return NULL;
   }
   return Py_BuildValue("s", echo(str));
}
{% endhighlight %}

3. Add to the array:
{% highlight cpp %}
static PyMethodDef hello_methods[] = {
   {"world", world, METH_VARARGS, "Print Hello World."},
   {"add", add, METH_VARARGS, "Add two number."},
   {"echo", echo, METH_VARARGS, "Print string"}, // HERE
   {NULL, NULL, 0, NULL} // Enter the end of the list
};
{% endhighlight %}

Compile and test:
{% highlight python %}
hello.echo("Thanks, this is cool!\n")
{% endhighlight %}

---

I made the library of that code from [video that plays MP3 with C++]() and created a lib.

If you want to test on your machine, follow the steps:

i1. Copy and create the files (`playmp3.hpp` and `playmp3.cpp`) from the playmp3 video post available at:
[🎶 How to Play MP3 with C++ 🎻 🎼 Code Music](https://terminalroot.com/how-to-play-mp3-with-cpp/)

2. Create `main.cpp` and add the code below:
{% highlight cpp %}
#include <Python.h>
#include "playmp3.hpp"

int mp3(char* song){
  auto p = std::make_unique<PlayMP3>();
  p->music(song);
  p->play();
  return 0;
}

static PyObject* mp3(PyObject* self, PyObject* args){
  char* music;
  if (!PyArg_ParseTuple(args, "s", &music)) {
    return NULL;
  }
  mp3(music);
  return Py_BuildValue("");
}

static PyMethodDef playmp3_methods[] = {
  {"mp3", mp3, METH_VARARGS, "Play MP3"},
  {NULL, NULL, 0, NULL}
};

static struct PyModuleDef playmp3_module = {
  PyModuleDef_HEAD_INIT,
  "playmp3",
  NULL,
  -1,
  playmp3_methods
};

PyMODINIT_FUNC PyInit_playmp3(void) {
  return PyModule_Create(&playmp3_module);
}
{% endhighlight %}

3. Add the libalsa.so path to the environment variable: `LD_LIBRARY_PATH`:
{% highlight bash %}
echo export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$(dirname "$(find /usr/lib* -name "libalsa.so" 2>/dev/null)") >> ~/.bashrc
{% endhighlight %}


4. Close and open the terminal or run the command below:
{% highlight bash %}
source ~/.bashrc
{% endhighlight %}

5. Compile:
{% highlight bash %}
g++ -shared -o playmp3.so -fpic main.cpp playmp3.cpp \
   -I /usr/include/python* \# Change to the path on your system
   -lmpg123 -lao $(find /usr/lib* -name "libalsa.so")
{% endhighlight %}

6. Create a Python file: `player.py`
{% highlight python %}
import playmp3 as play
play.mp3("music.mp3")
{% endhighlight %}
> In `music.mp3` replace with the song you want to listen to!

Then just run:
{% highlight bash %}
python player.py
{% endhighlight %}

> If you want to use the library directly on your system:
{% highlight bash %}
sudo mv playmp3.so /usr/local/lib
echo 'export PYTHONPATH="${PYTHONPATH}:/usr/local/lib"' >> ~/.bashrc
source ~/.bashrc
{% endhighlight %}

> If you want to use a different output plugin for `libao`, such as the “oss” (Open Sound System) plugin, use:
{% highlight bash %}
export AO_DRIVER=oss
python player.py
{% endhighlight %}

---

# Watch the video
> The video is in Portuguese, but it is possible to follow it even without audio.

<iframe width="1100" height="490" src="https://www.youtube.com/embed/prpWqtlBw30" title="Learn to Create Libraries for Python with C/C++" frameborder="0" allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



For more information, visit: <https://docs.python.org/3/c-api/index.html>


