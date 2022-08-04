---
layout: post
title: "How to Generate SHA256 Hash with C++ and OpenSSL"
date: 2022-08-04 19:13:52
image: '/assets/img/cpp/crypto-cpp.jpg'
description: 'There are other libraries that can do the same thing, but OpenSSL is the most widely used mainly for code written in C++ and C.'
tags:
- openssl
- cryptography
- cpp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[OpenSSL](https://www.openssl.org/) is a software library for applications that protect communications over computer networks from eavesdropping or the need to identify the party at the other end. It is widely used by Internet servers, including most HTTPS sites.

A **Hash** function is any function that can be used to map data of arbitrary size to values of fixed size. Values are often used to index a fixed-size table called a hash table. We talk more about Hash in this video: [What is it and how to generate a HASH ?](https://terminalroot.com/what-is-and-how-to-generate-a-hash/) .

**SHA-2** ( Secure Hash Algorithm 2 ) is a set of cryptographic hash functions designed by the United States National Security Agency (NSA) and first published in 2001.

SHA-2 includes significant changes from its predecessor, SHA-1. The SHA-2 family consists of six hash functions with digests (hash values) that are 224, 256, 384, or 512 bits: SHA-224, **SHA-256**, SHA-384, SHA-512, SHA-512 /224, SHA -512/256.

# Installing the OpenSSL library
First of all you need to install the **library** OpenSSL, use your distro's package manager for that, example for systems that use APT:
> **Note**: Generally, most systems already have this library installed.

{% highlight sh %}
sudo apt install libssl-dev
{% endhighlight %}

---

# Using with [C++](https://terminalroot.com/tags#cpp)
There are other libraries that can do the same thing, but OpenSSL is the most widely used mainly for code written in [C++](https://terminalroot.com/tags#cpp) and [C](https://terminalroot. com/tags#clanguage).

For this example, we are going to hash the word **Terminal Root** .

> `nvim crypto.cpp`

{% highlight cpp %}
#include <iostream>
#include <iomanip>
#include <sstream>
#include <openssl/sha.h>

std::string sha256(const std::string str){
  unsigned char hash[SHA256_DIGEST_LENGTH];

  SHA256_CTX sha256;
  SHA256_Init(&sha256);
  SHA256_Update(&sha256, str.c_str(), str.size());
  SHA256_Final(hash, &sha256);

  std::stringstream ss;

  for(int i = 0; i < SHA256_DIGEST_LENGTH; i++){
    ss << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>( hash[i] );
  }
  return ss.str();
}

int main() {
  std::cout << sha256("Terminal Root") << '\n';
  return 0;
}
{% endhighlight %}

To compile use:
{% highlight sh %}
g++ -I/usr/include/openssl/ crypto.cpp -lcrypto
{% endhighlight %}

The output will be:
{% highlight sh %}
c01dcc1559af39e445c88200a485f01827a662ff4d03d626593e4792489a32e1
{% endhighlight %}
That is the encrypted **Terminal Root** word.

---

# Checking if the Hash is correct
Do not use ~~`echo 'Terminal Root' | sha256sum`~~ because `echo` has a `\n`.

Use `printf` if you want to compare by [terminal](https://terminalroot.com/tags#terminal), example:

{% highlight sh %}
printf "Terminal Root" | sha256sum
{% endhighlight %}

You can also check if the generated hash is really correct using some online service, for example the website: <https://emn178.github.io/online-tools/sha256.html> . Access the site and write the word you want in the field that has the word **Input**, in the field below it will show the SHA256 hash.

---

# Useful links
+ <https://en.wikipedia.org/wiki/Hash_function>
+ <https://en.wikipedia.org/wiki/OpenSSL>
+ <https://www.openssl.org/>
+ <https://en.wikipedia.org/wiki/SHA-2>

