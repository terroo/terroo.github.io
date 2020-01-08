---
layout: post
title: "18 Ways to Generate and Store Strong Passwords; see command explanations"
date: 2020-01-08 19:47:26
image: '/assets/img/security/passwords.png'
description: 'Passwords are the tactic for protecting sensitive information.'
featured-img: ../security/passwords.png
tags:
- passwords
- security
- command
---

![18 Ways to Generate and Store Strong Passwords; see command explanations](/assets/img/security/passwords.png)

Systems like **GNU/Linux** and **BSD** generate that sense of security, however, small procedures are ignored because of this sensation. One of the most overlooked ways by users is password types.

And this is adopted by many people, even the great geniuses of technology proceed unevenly about it.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Introduction

Passwords are the most commonly used security tactic in computing and are often used to protect sensitive information, such as your email account or your user account. Choosing a strong password for any application or service that may require one is extremely important. If the password you choose is based on common information, such as a dictionary word, the attacker could use the so-called “dictionary attack” method to determine your password and then compromise the account or data protected with that password.

In this article we will show some ways to generate passwords so that there are no headaches and to save them we can use GPG and some other solutions in the final items of this page.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 01. Using [GNU Privacy Guard](https://www.gnupg.org/)

[GNUPG](https://www.gnupg.org/) that is used by the gpg command is an [OpenPGP](https://www.openpgp.org/) encryption and signature tool that is an open standard encryption based on PGP (Pretty Good Privacy (PGP)), is encryption software that provides authentication. and cryptographic privacy for data communication, works through asymmetric keys.

{% highlight bash %}
gpg --gen-random --armor 1 12
{% endhighlight %}


- O parâmetro `--gen-random` emite a contagem de bytes aleatórios nos níveis de qualidade fornecidos por 0, 1 ou 2. Se a contagem não for fornecida ou zero, uma sequência interminável de bytes aleatórios será emitida. Se usado com `--armor` a saída será codificada em base64 (tipo de codificação).

> Apesar de usar a contagem de 1 até 12 , será gerada uma senha de 16 caracteres por conta dos níveis de qualidade fornecidos.


<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 02. Encrypting the current time

The `date` command is used to display or modify the current date and time (see more detail about it at this link: Setting Date and Time in Linux).

The `md5sum` command generates an `MD5` encryption [hash](https://en.terminalroot.com.br/what-is-and-how-to-generate-a-hash/) and its stdout we send it to the awk command which will print only the first column (`$1`), since the second is a dash (`-`).

{% highlight bash %}
date | md5sum | awk '{print $1}'
{% endhighlight %}

---

<!-- RETANGULO LARGO -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 03. Creating Your Own Random Encode

The output routing **<** coming from `/dev/urandom` is a special file that generates system noise, ie entropy. These noises are used for random number generation and encryption purposes. Just as `random` is native to Unix systems and Unix-like systems like GNU/Linux and others.

The `tr` command is in charge of making substitutions (in this case, deletes the characters from A to Z, lowercase and uppercase, and the numbers from 0 to 9 plus the special underline character). And finally we charge the head command which prints only the initial lines of a file, in this case predefined for a position variable 1 (`$1`) (if parameter 1 is not set, set it to 32, eg `set -- -parameterthis1; echo ${1:-32}` will print `-parameterthis1` and then run this: `set --; echo ${1:32}` will print **32**).

The `-c` parameter of head outputs the first "byte numbers" of each file. The `echo` after semicolon (`;`) command separation serves to skip a line so that stdout is not pasted with the prompt.

{% highlight bash %}
< /dev/urandom tr -dc _A-Z-a-z-0-9_ | head -c${1:-32};echo;
{% endhighlight %}

---

## 04. Using [OpenSSL](https://www.openssl.org/)

[OpenSSL](https://www.openssl.org/) is an open source implementation of the SSL and TLS protocols. The library (written in C language) implements the basic encryption functions and provides various utility functions.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Wrappers are also available that allow the use of this library in various other languages. Due to financial problems, in April 2015 only four programmers took care of the OpenSSL protocol. The low number endangered the security of millions of users (MAKE A PROJECT BY CLICKING ON THIS LINK: https://www.openssl.org/support/donations.html). In February 2017, 15 employees were already listed.

OpenSSL is available for most Unix-type systems, including Linux, Mac OS X, the four versions of open source BSD, and also for Microsoft Windows. OpenSSL is based on the SSLeay of Eric Young and Tim Hudson.

OpenSSL is used to generate service / protocol authentication certificates on servers.

{% highlight bash %}
openssl rand -base64 16
{% endhighlight %}

The above command will generate a random password (rand), base64 encoding for 16 characters, however, after encoding there will be a 24 character output.

---

## 05. One more random encode

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

The `fold` command is part of [GNU CoreUtils](https://www.gnu.org/software/coreutils/). GNU CoreUtils is a package that has several commands, including: `chmod`, `cut`, `dd`, `echo` and many others. These are commands based on Unix commands, but were rewritten without reference to Unix source code, as it had proprietary and patent rights to AT&T.

The `fold` command wraps a line width, the `-w` parameter followed by 30 means that it will capture a maximum width line of 30 columns (characters).

{% highlight bash %}
tr -cd '[:alnum:]' < /dev/urandom | fold -w30 | head -n1
{% endhighlight %}

---

## 06. Random Reversal Encode

The `dd` command is generally used to copy or convert files/devices. The bs parameter indicates the number of bytes (`bs`) it should read and write at one time. The `count` parameter is used for almost the same purpose as `bs`, however, it defines how many blocks at a time.

The `base64` command does encoding and decoding, not to be confused with encryption. Encoding is more or less a swap, eg Replace all occurrences of the letters: e, a and o in the word Terminal Root with the numbers: 3, 4, and 0 (zero): `echo Terminal Root | tr 'eao' '340'` the output will be: **T3rmin4l R00t**. Encryption already has an advanced mathematical calculation for these substitutions, where most encryptions are irreversible.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

And finally the `rev` command that reverses a string, eg `echo ROOT | rev` the output will be **TOOR**, and when you use it again, then it returns to **ROOT**, eg `echo ROOT | rev | rev`.

---

## 07. Randomizing with GNU CoreUtils shuf

The `shuf` command is used to generate random numbers, in this case in a range from 1 to 200. Then we created a cryptographic hash with the `sha512sum` command and stdout had the cut command print only from the first (**1**) to the twentieth (**20**) character position.

{% highlight bash %}
shuf -i 1-200 -n 1 | sha512sum | cut -c1-20
{% endhighlight %}

---

## 08. Although the line has become long, this is the simplest way

Using the `strings` command that prints only printable file characters, we select only alphanumeric occurrences using the `grep` command.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Then we capture only the first 30 lines using the `head` command and delete the “line breaks” with the `-d` parameter of the `tr` command and finally so that stdout doesn't stick to the prompt, separate the conjunction with **;**(semicolon) and we jumped with `echo`

{% highlight bash %}
strings /dev/urandom | grep -o '[[:alnum:]]' | head -n 30 | tr -d '\n'; echo
{% endhighlight %}

---

In addition to being able to `alias` these commands, you can also install CLI applications that do this for you, examples:

## 09. Using pwgen

Pwgen is a small GPL password generator that creates passwords that can be easily memorized by a human being.

> Install it first, eg `sudo emerge -a pwgen`

{% highlight bash %}
# Usage examples
pwgen -s
pwgen -s -1
pwgen -s -1 14
pwgen -s 10 5 -1 -y
{% endhighlight %}

Read more: <https://sourceforge.net/projects/pwgen/>

---

## 10. Using apg

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Apg generates several random passwords. It uses various password generation algorithms and a built-in pseudo random number generator.

> Install it first, eg `sudo apt install apg`

{% highlight bash %}
# Usage examples
apg -a 1
{% endhighlight %}

---

## 11. Using `makepasswd`

The mkpasswd command - easily generates a password via command line, was developed by Don Libes for the National Institute of Standards and Technology.

> Install it first, eg `sudo apt install makepasswd`

{% highlight bash %}
# Usage examples
makepasswd -count 1 -minchars 12
{% endhighlight %}

---

## 12. Using `xkcdpass`

Generate secure multi-word passwords inspired by XKCD

> Install it first using [pip](https://pypi.org/project/xkcdpass/), eg `pip install xkcdpass`

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
xkcdpass -n 10
{% endhighlight %}

---

## 13. Using `diceware`

Diceware is a method for creating passwords and other cryptographic variables using common data as a hardware random number generator. For each word in the password, five rolls of the dice are required.

The numbers 1 through 6 that appear on the rollers are mounted as a five digit number, for example 43146. This number is used to search for a word in a word list. In the English list 43146 corresponds to munch. By generating multiple words in sequence, a long password can be constructed.

> Install it first, eg `sudo apt install diceware`

{% highlight bash %}
# Usage examples
diceware
{% endhighlight %}

Link: <https://github.com/ulif/diceware>

---

> To generate and save your passwords you still have:

## 14. [Bitwarden](https://bitwarden.com/)

You can use Bitwarden on almost any device and operating system. Even Tor Browser, Brave and Vivaldi are supported.

<!-- RETANGULO LARGO 2 -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Link: <https://bitwarden.com/>

---

## 15. [KeePassXC](https://keepassxc.org/)

If you are a former Windows user, you are probably familiar with KeePass, a free and open source password manager, and KeePassXC is a fork of it that makes local database storage.

Link: <https://keepassxc.org/>

---

## 16. [pass](https://www.passwordstore.org/)

The pass combines GPG encryption with Git, a distributed version control system, a [dmenu](https://tools.suckless.org/dmenu/)-based interface to pass, called a passmenu, plus an [Android](https://www.android.com/) app.

Link: <https://www.passwordstore.org/>

---

## 17. [LastPass](https://www.lastpass.com/)

[LastPass](https://www.lastpass.com/) is one of the cloud-based proprietary password managers. It has many two-factor authentication options, works anywhere, a great free version, and a paid version.

Link: <https://www.lastpass.com/>

---

## 18. [1Password](https://1password.com/)

1Password is a paid service for elegant and easy-to-use password management with automatic password synchronization and integrated data breach protection. 1Password complies with the most stringent industry standards and features advanced security features such as PBKDF2 brute force protection, local secret key storage and more.

Link: <https://1password.com/>

## Conclusion

There are several ways you can do this, but the most important thing about this article is to capture the features that generate such passwords so that you don't end up switching “cat for hare” when generating and saving your passwords. Understanding how it works is essential not to be fooled.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

And besides all these services there are several online, but honestly, I would not risk using them, but if you want for a not so important case, search your search engine.

Hugs!

---
