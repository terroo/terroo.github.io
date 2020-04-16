---
layout: post
title: "How to Convert Your Shell Script to Binary"
date: 2020-04-16 01:23:28
image: '/assets/img/bash/sh2bin.jpg'
description: 'How to create a binary file of your Shell Scripting.'
featured-img: ../bash/sh2bin.jpg
tags:
- bash
- shellscript
- clang
---

This article will help you create a binary file of your Shell Scripting, so that no one can see the source code of your script and we can use it as a command. To create a binary file from a script, we use the SHC compiler .

# Introduction

[shc](https://neurobin.org/projects/softwares/unix/shc/), a Shell Script compiler, produces the source code in C. The generated source code is then compiled and linked to produce a separate binary executable.

The compiled binary will continue to be dependent on the shell specified in the first line of the shell code (ie, shebang) (ie `#!/bin/sh)`, so shc does not create completely independent binaries.

shc itself is not a compiler like [gcc](https://gcc.gnu.org/), it encodes and encrypts a shell script and generates the C source code with the added expiration feature. It then uses the system compiler to compile a separate binary that behaves exactly like the original script. After execution, the compiled binary will decrypt and execute the code with the `shell -c` option. 

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

In Gentoo and similar, use the portage that shc is already available on the tree:
```sh
emerge dev-util/shc
```

For other distributions, for example derived from APT, first install the necessary dependencies:
```sh
sudo apt-get install libc6-dev # Debian, Ubuntu, Mint, ...
sudo yum install glibc-devel # RHEL, CentOS, Fedora, ...
```

Then download the package, decompress and compile the code:
```sh
wget https://github.com/neurobin/shc/archive/release.zip
cd shc-*
make
sudo make install
```

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Use
Create a test file to see how it works: `vim script.sh`:
```sh
#!/bin/bash

echo -e "The first 3 characters of each location file / directory are:\n"
for i in *; do
	echo "$i" | cut -c 1-3 | tr '\n' '\ '
done
echo
```

Then use shc to transform it into binary:
```sh
shc -f script.sh -o binary
```

And just run the program: `./binary`

If you try to see the contents of the binary file, you will see everything encoded, example: `cat binary`
```sh
...
@x@�@�@�@�@�@�@�@�@�@�H�H��/H��t��H���5�/�%�/@�%�
�@����%�/h
          �0����%�/h
�����%r/h�����%j/h������%b/h
...
```

Para mais informações e opções via linha de comando, utilize a ajuda e o manual:
```sh
shc --help
man shc
```

Official page [shc](https://neurobin.org/projects/softwares/unix/shc/): <https://neurobin.org/projects/softwares/unix/shc/>

Thanks for reading!
