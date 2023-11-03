---
layout: post
title: "How to Create Extensions for PHP with C/C++"
date: 2023-11-02 19:28:08
image: '/assets/img//php/ext-php-cpp-shadow.jpg'
description: 'Learn how to create extensions for various C/C++ libraries.'
tags:
- cpp
- clanguage
- php
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

🔊 Knowing how to use and write [PHP](https://terminalroot.com/tags#php) extensions is a critical [PHP](https://terminalroot.com/tags#php) development skill that can save significant time and allow you to quickly add new features to your applications. In this video we will see how to create extensions for [PHP](https://terminalroot.com/php) using [C](https://terminalroot.com/tags#linguagemc)/[C++](https: //terminalroot.com/cpp).

---

## Install dependencies:
> Example on Systems that use APT.

{% highlight bash %}
sudo apt-get install build-essential php php-dev \
              autoconf automake bison flex re2c gdb \
              libtool make pkgconf valgrind git libxml2-dev libsqlite3-dev
{%endhighlight%}

---

### Create an example file with whatever name you want, example: `terminalroot.cpp`:
{% highlight cpp %}
extern "C"{
   #include <php.h>
}

#define PHP_TERMINALROOT_EXTNAME "terminalroot"
#define PHP_TERMINALROOT_VERSION "0.0.1"

PHP_FUNCTION(terminalroot_php);

ZEND_BEGIN_ARG_INFO(arginfo_terminalroot_php, 0)
ZEND_END_ARG_INFO()

zend_function_entry terminalroot_php_functions[] = {
     PHP_FE(terminalroot_php, arginfo_terminalroot_php)
     {NULL, NULL, NULL}
};

zend_module_entry terminalroot_php_module_entry = {
     STANDARD_MODULE_HEADER,
     PHP_TERMINALROOT_EXTNAME,
     terminalroot_php_functions,
     NULL,
     NULL,
     NULL,
     NULL,
     NULL,
     PHP_TERMINALROOT_VERSION,
     STANDARD_MODULE_PROPERTIES
};

ZEND_GET_MODULE(terminalroot)

PHP_FUNCTION(terminalroot){
     printf("My First PHP Extension with C++\n");
}
{% endhighlight %}

Create an example file `.m4`([Autotools](https://terminalroot.com/gnu-autotools-ultimate-tutorial-for-beginners/)): `config.m4`, example:
{% highlight bash %}
PHP_ARG_ENABLE(terminalroot, Just a Basic Example of PHP Extension with C++, [ --enable-terminalroot Enable Support for this Ext])
if test "$TERMINALROOT" != "no"; then
     PHP_NEW_EXTENSION(terminalroot, terminalroot.cpp, $ext_shared)
     PHP_REQUIRE_CXX() # If you are writing in C, ignore this line
fi
{% endhighlight %}

### To compile:
{% highlight bash %}
phpize
./configure --enable-terminalroot
makeup
sudo make install
{% endhighlight %}

---

### Test with a PHP file and call the function created in the example: `script.php`:
{% highlight php %}
<?php
     terminalroot_php();
{% endhighlight %}

### Run the PHP file with the extension:
{% highlight bash %}
php -dextension=terminalroot script.php
{% endhighlight %}

---

# Watch the video
> The video is in Portuguese!

<iframe width="1253" height="705" src="https://www.youtube.com/embed/1LpR2EYxCMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard- write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Useful links
+ <https://terminalroot.com/create-2d-games-with-php-and-raylib/>
+ <https://www.zend.com/resources/writing-php-extensions>


