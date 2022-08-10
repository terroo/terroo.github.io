---
layout: post
title: "How to Generate MD5 Hash with C++ and OpenSSL"
date: 2022-08-10 08:46:07
image: '/assets/img/cpp/md5.jpg'
description: 'Indicates only for compatibility with existing applications. In new applications, SHA-1 or RIPEMD-160 should be preferred.'
tags:
- cpp
- openssl
- cryptography
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

We already published about generating [cryptographic hash](https://terminalroot.com/what-is-and-how-to-generate-a-hash/) with the function [SHA256](https://terminalroot.com/how-to-generate-sha256-hash-with-cpp-and-openssl/) . So, to better understand this article, I recommend you read, if you haven’t already, the other article:

## [How to Generate SHA256 Hash with C++ and OpenSSL](https://terminalroot.com/how-to-generate-sha256-hash-with-cpp-and-openssl/)

You will notice many similarities with the previous implementation, the only difference in itself is that the function is different, in this case we will use [MD5](https://en.wikipedia.org/wiki/MD5) .

**MD5** is a cryptographically broken but still widely used hash function, producing a 128-bit hash value. While MD5 was initially designed to be used as a cryptographic hash function, it has been found to suffer from extensive vulnerabilities.

It can still be used as a checksum to verify data integrity, but only against unintentional corruption. It remains suitable for other non-cryptographic purposes, for example to determine the partition of a specific key in a partitioned database, and may be preferred due to lower computational requirements than newer secure hashing algorithms.

In short:
> MD2, MD4 and MD5 are only recommended for compatibility with existing applications. In new applications, SHA-1 or RIPEMD-160 should be preferred.

---

## Installing the OpenSSL library
Before anything you need to install the OpenSSL library, use your distro's package manager for that, example for systems that use APT:
> Note: Generally, most systems already have this library installed.

{% highlight bash %}
sudo apt install libssl-dev
{% endhighlight %}

---

## Using with C++
For this example, we are going to hash the word **Terminal Root** . Follow the code below:
> `md5.cpp`

{% highlight cpp %}
#include <iostream>
#include <iomanip>
#include <sstream>
#include <openssl/md5.h>

std::string md5(const std::string &str){
  unsigned char hash[MD5_DIGEST_LENGTH];

  MD5_CTX md5;
  MD5_Init(&md5);
  MD5_Update(&md5, str.c_str(), str.size());
  MD5_Final(hash, &md5);

  std::stringstream ss;

  for(int i = 0; i < MD5_DIGEST_LENGTH; i++){
    ss << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>( hash[i] );
  }
  return ss.str();
}

int main() {
  std::cout << md5("Terminal Root") << '\n';
  return 0;
}
{% endhighlight %}

---

To compile, run:
{% highlight bash %}
g++ md5.cpp -lcrypto
{% endhighlight %}
The possible and expected output will be:
{% highlight bash %}
a69f0efcca0116a76921947f135ccdac
{% endhighlight %}

To check if it is correct, use the `printf` command:
{% highlight bash %}
printf "Terminal Root" | md5sum
{% endhighlight %}

You can simply replace the `DIGEST_LENGTH` (although the size is the same in the header there will be another macro), and the function names to use for `MD2` and `MD4` (use the headers `md2.h` and `md4. h`, respectively, whereas SHA256 uses `sha.h`) and use to generate hash for these functions as well.

---

# Useful links
+ <https://www.openssl.org/docs/man1.1.1/man3/MD5.html>
+ <https://en.wikipedia.org/wiki/MD5>

