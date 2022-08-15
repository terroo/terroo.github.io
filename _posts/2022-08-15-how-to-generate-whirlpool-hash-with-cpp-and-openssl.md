---
layout: post
title: "How to Generate Whirlpool Hash with C++ and OpenSSL"
date: 2022-08-15 11:20:21
image: '/assets/img/openssl/whirlpool.jpg'
description: 'The Whirlpool Galaxy (M51) inspired the name of the algorithm.'
tags:
- cpp
- cryptography
- openssl
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

In the previous article we showed how to generate [Hash](https://terminalroot.com/what-is-and-how-to-generate-a-hash/) with [MD5](https://terminalroot.com/how-to-generate-md5-hash-with-cpp-and-openssl/), as described there, the concepts will be similar.

Whirlpool (sometimes called WHIRLPOOL ) is a cryptographic hash function based on an [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) block cipher.

It generates a hash of length of 128 characters.

---

# Using with C++
For this example, we are going to hash the word Terminal Root . Follow the code below:

> `whirlpool.cpp`

{% highlight cpp %}
#include <iostream>
#include <iomanip>
#include <sstream>
#include <openssl/whrlpool.h>

std::string whirlpool(const std::string &str){
  unsigned char hash[WHIRLPOOL_DIGEST_LENGTH];

  WHIRLPOOL_CTX whirlpool;
  WHIRLPOOL_Init(&whirlpool);
  WHIRLPOOL_Update(&whirlpool, str.c_str(), str.size());
  WHIRLPOOL_Final(hash, &whirlpool);

  std::stringstream ss;

  for(int i = 0; i < WHIRLPOOL_DIGEST_LENGTH; i++){
    ss << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>( hash[i] );
  }
  return ss.str();
}

int main() {
  std::cout << whirlpool("Terminal Root") << '\n';
  return 0;
}
{% endhighlight %}

To compile, run:
{% highlight bash %}
g++ whirlpool.cpp -lcrypto
{% endhighlight %}

The possible and expected output will be:
{% highlight bash %}
edef01c730c67430584283292a59e3a6e910ecf7c903c0b1040243498c67053a849c0eacc07dfdbd76be36d2d1e50eaa0e0b6324f96743828eccdf8dac471891
{% endhighlight %}

To check if it is correct, use the `rhash` command with the following arguments: 
{% highlight bash %}
rhash --whirlpool -m "Terminal Root"
{% endhighlight %}

---

# Links úteis
+ <https://www.openssl.org/docs/man3.0/man3/EVP_whirlpool.html>
+ <https://en.wikipedia.org/wiki/Whirlpool_(hash_function)>
+ <https://en.wikipedia.org/wiki/Advanced_Encryption_Standard>


