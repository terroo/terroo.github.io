---
layout: post
title: "Large List of GNU/Linux Commands by Categories"
date: 2019-12-11 09:19:24
image: '/assets/img/linux/commands-gnu-linux.jpg'
description: 'A complete list of GNU/Linux commands.'
featured-img: ../linux/commands-gnu-linux.jpg
tags:
- commands
- linux
- gnu
---

![Large List of GNU/Linux Commands by Categories](/assets/img/linux/commands-gnu-linux.jpg)

> A complete list of GNU/Linux commands.

Control and Access Commands
---------------------------

-   `exit` ➜ End session, ie `shell` (more help typing `man sh` or
    `man csh` )
-   `logout` ➜ Logout, ie log off the current session, but only in
    `C shell` and `bash shell`
-   `passwd` ➜ Change our user `password`
-   `rlogin` ➜ Log in securely to another `Unix/Linux`
-   `ssh` segura Secure session, comes from `secure shell` , and allows
    us to login to a server via `ssh` protocol
-   `slogin` ➜ Safe Version of `rlogin`
-   `yppasswd` ➜ Change our user `password` on `yellow pages`

Communications Commands
-----------------------

-   `mail` ➜ Send and receive emails
-   `mesg` ➜ Allow or deny terminal messages and `talk requests`
-   `pine` ➜ Another way to send and receive emails, a quick and
    convenient tool
-   `talk` ➜ Talk to other users who are currently logged in
-   `write` ➜ Write to other users who are currently logged in

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Help and Documentation Commands
-------------------------------

-   `apropos` ➜ Finds commands by keyword search
-   `find` ➜ Find files, such as
    `find . -name *.txt -print``find . -name *.txt -print` , for
    searching text files among current directory files
-   `info` ➜ Launches the information explorer
-   `man` muito Very complete manual, looks for information about all
    the commands we need to know, such as `man find`
-   `whatis` ➜ Describes what a given command is
-   `whereis` ➜ Find the `man page` , source code, or binary files for a
    given program.

Text Editing Commands
---------------------

-   `emacs` `screen-oriented` text editor
-   `pico` ➜ `screen-oriented` text editor, also called `nano`
-   `sed` ➜ `stream-oriented` text editor
-   `vi` ➜ `full-screen` text editor
-   `vim` ➜ Improved `full-screen` text editor

File and Directory Management Commands
--------------------------------------

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

-   `cd` ➜ Change current directory, such as `cd diretoria` , `cd ..` ,
    `cd /`
-   `chmod` ➜ Change protection of a file or directory, such as
    `chmod 777` , similar to `MS-DOS` `attrib`
-   `chown` ➜ Change the owner or group of a file or directory comes
    from `change owner`
-   `chgrp` ➜ Change the group of a file or directory
-   `cmp` ➜ Compare two files
-   `comm` ➜ Select or reject lines common to two selected files
-   `cp` ➜ Copy files such as `MS-DOS` `copy`
-   `crypt` ➜ Encrypt or Decrypt files ( `CCWF` only)
-   `diff` ➜ Compare the contents of two `ASCII` files.
-   `file` ➜ Determines the file type
-   `grep` ➜ Searches for a file by default, being a very useful and
    used filter, for example a
    `cat a.txt | grep hello``cat a.txt | grep hello` will show us only
    the lines of the a.txt file that contain the word “hello”
-   `gzip` ➜ Compress or expand files
-   `ln` ➜ `link` to a file
-   `ls` ➜ List the contents of a directory, similar to the `dir`
    command in `MS-DOS`
-   `lsof` ➜ Lists open files, comes from `list open files`
-   `mkdir` ➜ Create a board, come from `make diretory”`
-   `mv` ➜ Move or rename files or directories
-   `pwd` ➜ Show us the full path of the board we are in at any given
    time, ie `pathname`
-   `quota` ➜ Show us disk usage and limits
-   `rm` ➜ Delete files, come from `remove` , and similar to `del`
    command in `MS-DOS` , be careful with `rm` \* command as it deletes
    everything without default confirmation
-   `rmdir` ➜ Delete directories, come from `remove diretory`
-   `stat` ➜ Shows the state of a file, useful for knowing for example
    the time and date of last access to it
-   `sync` fl `flush` file system `buffers` , synchronize data on disk
    with memory, ie write all data in memory `buffers` to disk
-   `sort` ➜ Sort, merge or compare text and can be used to extract
    information from text files or even to sort data from other commands
    such as listing files sorted by name
-   `tar` ➜ Create or extract files, often used as a file backup or
    compression program
-   `tee` ➜ Copy `input` to `standard output` and other files
-   `tr` ➜ Translate characters
-   `umask` ➜ Changes default file protections
-   `uncompress` ➜ Restore a compressed file
-   `uniq` ➜ Report or delete repeated lines in a file
-   `wc` ➜ Count lines, words and even characters in a file

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

Viewing or Printing Files
-------------------------

-   `cat` ➜ Shows the contents of a file, such as the `MD-DOS` `type`
    command, and is also
    `cat a.txt b.txt &gt; c.txt” para juntar o arquivo a.txt e b.txt num único de nome c.txt`
    used to concatenate files, such as making
    `cat a.txt b.txt &gt; c.txt” for merge file a.txt e b.txt in a only name c.txt``cat a.txt b.txt &gt; c.txt” for merge file a.txt and b.txt in a only name c.txt`
-   `fold` ➜ Shortens, ie `fold` long lines to fit `output` device
-   `head` ➜ Shows the first lines of a file, such as with
    `head -10 a.txt` , or used as a filter to show only the first `x`
    results of another command.
-   `lpq` ➜ Examine printer `spooling queue`
-   `lpr` ➜ Print a file
-   `lprm` ➜ Remove `jobs` from printer `spooling queue`
-   `more` ➜ Shows the contents of a file, but only one screen at a
    time, or even `output` from other commands, such as
    `ls | more``ls | more`
-   `less` ➜ Works like `more` , but with fewer `features` , fewer
    features and potential uses.
-   `page` ➜ Works similar to `more` command, but displays screens
    reversed to `more` command
-   `pr` ➜ Pages a file for later printing
-   `tail` ➜ works in reverse of the `head` command, shows us the last
    lines of a file or even the `output` of another command when used as
    a filter
-   `zcat` ➜ Show us a compressed file
-   `xv` ➜ Used to display, print or even manipulate images
-   `gv` ➜ Display `ps` and `pdf` files
-   `xpdf` ➜ Display `pdf` files, use `gv`

File Transfer Commands
----------------------

-   `ftp` ➜ Comes from `file transfer protocol` , and allows us, using
    the `ftp` `file transfer protocol` , to transfer files between
    multiple `hosts` on a network, such as uploading to an `ftp` server
    to upload or pull files
    
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

    
-   `rsync` ➜ Quickly and flexibly synchronizes data between two
    computers
-   `scp` ➜ `rcp` secure version

News or Network Commands
------------------------

-   `netstat` ➜ Shows network status
-   `rsh` ➜ Run a `shell` on other `UNIX` systems
-   `ssh` ➜ `rsh` secure version
-   `nmap_port-scan` ➜ to view open ports on a given `host`
-   `ifconfig` ➜ View our machine `ips` , among other `ips` related
    functions
-   `ping` ➜ `ping` a particular `host` , ie send `icmp` packets to a
    given `host` and measure response times, among other things

Process Control Commands
------------------------

-   `kill` ➜ Kills a process, such as `kill -kill 100` or `kill -9 100`
    or `kill -9 %1`
-   `bg` ➜ Put a suspended process in the `background`
-   `fg` ➜ Unlike `bg` , `fg` brings back a process to the `foreground`
-   `jobs` ➜ Allows us to view running `jobs` , when we run a
    `background` application, we can see this `job` with this command,
    and end it with a `kill -9 %1` command, if it's `job` number 1, for
    example
-   `top` ➜ List the processes that most `cpu` use, useful for checking
    which processes are causing excessive memory usage, and how much
    percentage of `cpu` each uses at any given time.
-   `^y` ➜ Suspend process on next `input` request
-   `^z` ➜ Suspend current process

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

State Information Commands
--------------------------

-   `clock` ➜ Sets the processor time
-   `date` ➜ Displays the date and time
-   `df` ➜ Displays a summary of free disk space
-   `du` ➜ Displays a summary of disk space usage
-   `env` ➜ Display environment variables
-   `finger` ➜ Search user information
-   `history` ➜ Lists the last commands used, very useful to remember
    also which commands were used to do a certain action in the past or
    what was done at a certain time.
-   `last` ➜ Indicates last user `login`
-   `lpq` ➜ Examine the `spool queue`
-   `manpath` ➜ Shows the search `path` for `man` command pages
-   `printenv` Print environment variables
-   `ps` ➜ List the list of running processes, useful to know the `pid`
    of a process to send it below with the `kill` command, among other
    things
-   `pwd` ➜ Show us the full path of the board we are in at any given
    time, ie `pathname`
-   `set` ➜ Set session variables, ie `shell` , `C shell` , `bash` or
    `ksh`
-   `spend` ➜ List `ACITS UNIX` costs to date
-   `time` ➜ Measure program execution time
-   `uptime` ➜ Tell us how long the system has been up, when it was
    turned on and its `uptime`
-   `w` ➜ Show us who is on the system or what command each `job` is
    running
-   `who` ➜ Show us who is logged in
-   `whois` ➜ Internet domain directory service, lets us know
    information about certain domains on the Internet, when a domain was
    registered, when it expires, etc.
-   `whoami` ➜ Tell us who owns the `shell`

Word Processing Commands
------------------------

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

-   `abiword` ➜ `Open Source` Word Processor
-   `addbib` ➜ Create or modify bibliographic databases
-   `col` ➜ Reverts the filter to `line feeds`
-   `diction` ➜ Identify sentences with words
-   `diffmk` ➜ Mark differences between files
-   `dvips` ➜ Convert `TeX DVI` files to `PostScript` files
-   `explain` ➜ Explains phrases found by `diction` program
-   `grap` `pic` graphics processor used for elementary data analysis
    tasks
-   `hyphen` ➜ Find words with hyphens
-   `ispell` ➜ Check spelling interactively
-   `latex` ➜ Formats text in `LaTeX` , which is based on `TeX`
-   `pdfelatex` ➜ For `LaTeX` documents in `pdf` format
-   `latex2html` ➜ Convert `LaTeX` to `html`
-   `lookbib` ➜ Find bibliographic references
-   `macref` ➜ Create a cross-reference listing `nroff/troff` macro
    files
-   `ndx` ➜ Create an index page for a document.
-   `neqn` ➜ Formats math with `nroff`
-   `nroff` ➜ Formats text for simple display.
-   `pic` ➜ Produces simple images for `troff input`
-   `psdit` ➜ Filters `output` `troff` for `Apple LaserWriter`
-   `ptx` ➜ Create permuted indexing but not `CCWF`
-   `refer` ➜ Insert references from bibliographic databases
-   `roffbib` `run off` a bibliographic database
-   `sortbib` ➜ Sort a bibliographic database
-   `spell` ➜ Spelling errors
-   `style` ➜ Analyzes the surface characteristics of a document
-   `tbl` ➜ Format tables for `nroff/troff`
-   `tex` ➜ Formats text
-   `tpic` ➜ Convert `pic source` files into `TeX` commands
-   `wget` ➜ Allows us to download full web pages with all files easily
    and non-interactively, without requiring user presence, respecting
    the `robots.txt` file.

Web
---

-   `html2ps` ➜ `html` to `ps` converter
-   `latex2html` `LaTeX` to `html` Converter
-   `lynx` ➜ Text mode based `web` browser, ie a `web browser` that
    allows us to open all kinds of pages by viewing only the text and
    `links` , not seeing the images, and therefore quite fast, but it
    requires practice to be handled
-   `netscape` ➜ `Netscape` `web` Browser
-   `sitecopy` ➜ Application that allows us to easily and remotely
    maintain `web sites`
-   `weblint` `html` syntax and style `weblint`


Thanks for reading!
