---
layout: post
title: "How to Use the Zlib Library with C++a
date: 2021-06-16 14:52:17
image: '/assets/img/cppdaily/zlib.png'
description: 'A library with portability for any operating system.'
featured-img: ../cppdaily/zlib.png
tags:
- cpp
- cppdaily
---

![How to Use the Zlib Library with C++](/assets/img/cppdaily/zlib.png)

[zlib](http://zlib.net/) is a cross-platform data compression library written by **Jean-loup Gailly** and **Mark Adler** as a generalization of the DEFLATE algorithm used in their [gzip](https://en.terminalroot.com.br/how-to-extract-multiple-compressed-formats-with-a-single-command/) data compression program.

The first public version, originally intended for use in the [libpng](http://www.libpng.org/pub/png/libpng.html) library, was released on May 1, 1995. zlib is distributed under an open-source license, the zlib license.

Currently, zlib is a de facto standard for compressing data in portable documents. Hundreds of applications for Unix and similar operating systems (like [Linux](https://en.terminalroot.com.br/the-8-best-icon-themes-for-your-linux/)) use it and its use is increasing in other systems (like Microsoft [Windows](https://en.terminalroot.com.br/top-5-best-git-clients-for-linux-mac-and-windows/) and Palm OS).

Due to its high portability and its low memory requirements, zlib is also used in many embedded devices.

On Zlib's [official website](http://zlib.net/) you can find all documentation on how to implement it in your code. However, the examples are done using C language and the basic example is done using stdin and stdout.

But in this case I created a code in [C++](https://en.terminalroot.com.br/i-created-a-c-financial-management-program-for-linux-and-windows/) with classes and you can use it without stdin and stdout, just invoke it like this:

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installation
First of all you need to have it (the library) on your system, most likely there will already be, but if not you can install it as follows:
> Example of systems using APT.

{% highlight bash %}
sudo apt install zlib1g-dev
{% endhighlight %}

# Use
To COMPACT just run the generated binary and the file you want to compress:
> The `.Z` (uppercase Z) extension file will be generated

{% highlight bash %}
./zpipe file.txt
{% endhighlight %}

Just check in the directory that ran the binary that there will be a file named: compressed `file.txt.Z`.
> To UNZIP, just run the generated binary and the file you want to unzip with a .Z extension: The content will be extracted and will generate the: `file.txt`

{% highlight bash %}
./zpipe -d file.txt.Z
{% endhighlight %}

I actually modified and adapted [this example](https://zlib.net/zlib_how.html) which is a minizip and the most important parts are commented out, but it's easy to understand. I organized it into 4 files that are:


<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

### `zpipe.hpp`
{% highlight cpp %}
#ifndef ZPIPE_H
#define ZPIPE_H
#define SET_BINARY_MODE(file)
#include <iostream>
#include <cstring>
#include <cassert>
#include "zlib.h"

class Zpipe {
  public:
    const long int CHUNK = {16384};
    int def( FILE *, FILE *, int ); // compress
    int inf( FILE *, FILE * ); // decompress
    void zerr( int );
    void usage( char ** );
};
#endif
{% endhighlight %}

### `zpipe.cpp`
{% highlight cpp %}
#include "zpipe.hpp"

int Zpipe::def(FILE *source, FILE *dest, int level){
    int ret, flush;
    unsigned have;
    z_stream strm;
    unsigned char in[CHUNK];
    unsigned char out[CHUNK];

    strm.zalloc = Z_NULL;
    strm.zfree = Z_NULL;
    strm.opaque = Z_NULL;
    ret = deflateInit(&strm, level);
    if (ret != Z_OK)
        return ret;

    do {
        strm.avail_in = fread(in, 1, CHUNK, source);
        if (ferror(source)) {
            (void)deflateEnd(&strm);
            return Z_ERRNO;
        }
        flush = feof(source) ? Z_FINISH : Z_NO_FLUSH;
        strm.next_in = in;

        do {
            strm.avail_out = CHUNK;
            strm.next_out = out;
            ret = deflate(&strm, flush);    /* anyone error value */
            assert(ret != Z_STREAM_ERROR);
            have = CHUNK - strm.avail_out;
            if (fwrite(out, 1, have, dest) != have || ferror(dest)) {
                (void)deflateEnd(&strm);
                return Z_ERRNO;
            }
        } while (strm.avail_out == 0);
        assert(strm.avail_in == 0);

    } while (flush != Z_FINISH);
    assert(ret == Z_STREAM_END);

    /* limpar e retornar */
    (void)deflateEnd(&strm);
    return Z_OK;
}

int Zpipe::inf(FILE *source, FILE *dest){
    int ret;
    unsigned have;
    z_stream strm;
    unsigned char in[CHUNK];
    unsigned char out[CHUNK];

    strm.zalloc = Z_NULL;
    strm.zfree = Z_NULL;
    strm.opaque = Z_NULL;
    strm.avail_in = 0;
    strm.next_in = Z_NULL;
    ret = inflateInit(&strm);
    if (ret != Z_OK)
        return ret;

    do {
        strm.avail_in = fread(in, 1, CHUNK, source);
        if (ferror(source)) {
            (void)inflateEnd(&strm);
            return Z_ERRNO;
        }
        if (strm.avail_in == 0)
            break;
        strm.next_in = in;

        do {
            strm.avail_out = CHUNK;
            strm.next_out = out;
            ret = inflate(&strm, Z_NO_FLUSH);
            assert(ret != Z_STREAM_ERROR);
            switch (ret) {
            case Z_NEED_DICT:
                ret = Z_DATA_ERROR;
            case Z_DATA_ERROR:
            case Z_MEM_ERROR:
                (void)inflateEnd(&strm);
                return ret;
            }
            have = CHUNK - strm.avail_out;
            if (fwrite(out, 1, have, dest) != have || ferror(dest)) {
                (void)inflateEnd(&strm);
                return Z_ERRNO;
            }
        } while (strm.avail_out == 0);

    } while (ret != Z_STREAM_END);

    (void)inflateEnd(&strm);
    return ret == Z_STREAM_END ? Z_OK : Z_DATA_ERROR;
}

void Zpipe::zerr(int ret) {
    std::cerr << "zpipe: ";
    switch (ret) {
    case Z_ERRNO:
        if (ferror(stdin)){
            std::cerr << "Erro ao ler stdin . " << '\n';
        }else if (ferror(stdout)){
            std::cerr << "Error to writing stdout." << '\n';
        }
        break;
    case Z_STREAM_ERROR:
        std::cerr << "Invalid compression level . " << '\n';
        break;
    case Z_DATA_ERROR:
        std::cerr << "Empty data, invalid or incomplete. " << '\n';
        break;
    case Z_MEM_ERROR:
        std::cerr << "No memory. " << '\n';
        break;
    case Z_VERSION_ERROR:
        std::cerr << "zlib version is incompatible. " << '\n';
    }
}

void Zpipe::usage( char ** argv ){
  std::cout << "Compress: " << argv[0] << " file.txt # Generate: file.txt.Z " << '\n';
  std::cout << "Decompress: " << argv[0] << " -d file.txt.Z # Generate: file.txt " << '\n';
}
{% endhighlight %}

### `main.cpp`
{% highlight cpp %}
#include "zpipe.hpp"

int main(int argc, char ** argv){
    Zpipe zpipe;
    int ret;
    FILE *filename, *zipped;
    std::string s;
    
    if( argc == 2 ){
      filename = fopen( argv[1] , "rb");
      s = argv[1];
      s = s + ".Z";
      zipped = fopen( &s[0], "w" );
      ret = zpipe.def( filename, zipped, Z_DEFAULT_COMPRESSION);
      if (ret != Z_OK){
        zpipe.zerr(ret);
      }
      return ret;
    } else if (argc == 3 && strcmp(argv[1], "-d") == 0 ) {
        zipped = fopen( argv[2], "rb");
        s = argv[2];
        s = s.substr( 0, s.length() - 2 );
        filename = fopen( &s[0], "w" );
        ret = zpipe.inf(zipped, filename);
        if (ret != Z_OK){
            zpipe.zerr(ret);
        }
        return ret;
    } else {
        zpipe.usage( argv );
        return 1;
    }
}
{% endhighlight %}

And finally a [Makefile](https://en.terminalroot.com.br/how-to-create-a-makefile/) for us to compile by running only the make command.

{% highlight makefile %}
TARGET=zpipe
CC=g++
DEBUG=-g
OPT=-O2
WARN=-Wall
LZ=-lz
CCFLAGS=$(DEBUG) $(OPT) $(WARN)
LD=g++
OBJS= main.o zpipe.o
all: $(OBJS)
	$(LD) -o $(TARGET) $(OBJS) $(LZ)
	@rm -f *.o

main.o: main.cpp
	$(CC) -c $(CCFLAGS) $(LZ) main.cpp -o main.o
 
zpipe.o: zpipe.cpp
	$(CC) -c $(CCFLAGS) $(LZ) zpipe.cpp -o zpipe.o
{% endhighlight %}

Well, simple, right?! This is just an example for single files, for more details see the documentation:
+ <https://en.wikipedia.org/wiki/Zlib>
+ <http://zlib.net/>
+ <https://github.com/madler/zlib>


