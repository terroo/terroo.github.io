---
layout: post
title: "How to Create an ebuild on Gentoo"
date: 2019-01-15 02:10:09
image: '/assets/img/gentoo/diagram.png'
description: 'An ebuild file  is a text file, used by Gentoo package manager.'
main-class: 'gentoo'
tags:
- gentoo
- ebuild
---

![How to Create an ebuild on Gentoo](/assets/img/gentoo/diagram.png "How to Create an ebuild on Gentoo")

An [ebuild](https://wiki.gentoo.org/wiki/Ebuild) file  is a text file, used by Gentoo package managers, that identifies a specific software package, and how the Gentoo package manager should deal with it. It uses a bash syntax style and is standardized through the [EAPI](https://wiki.gentoo.org/wiki/EAPI) version .

## Introduction

Gentoo Linux uses ebuilds as the package management format for individual software titles. These ebuilds contain metadata about the software (the name and version of the software, which the software uses and the home page), dependency information (both at creation time and at run time) and instructions on how to deal with the software ( configure, build, install, test ...).

## Development

When you set up Gentoo, you probably remember that you had to download and decompress a [snapshot](http://distfiles.gentoo.org/snapshots/) Gentoo repository. This snapshot (which you upgrade when you run `emerge --sync`) is full of ebuilds, it's Gentoo's [repository](https://wiki.gentoo.org/wiki/Ebuild_repository) and once it's uncompressed it's usually located at [/usr/portage](https://wiki.gentoo.org/wiki//usr/portage).

> If you decide to create an ebuild inside `/usr/portage`, eg `/usr/portage/hello-world.ebuild`, running `emerge --sync` will automatically delete it, there are rules for it is accepted in the [Portage](https://wiki.gentoo.org/wiki/Portage) directory tree.

### Creating a Basic ebuild

> You must have **sudo** or **root** privileges.

1. Create the directory that will be ebuild (usually it has the same ebuild name):

```ebuild
mkdir -p /usr/local/portage/app-misc/hello-world
```

> Notice that we need to create in **/usr/local/** and not in ~/usr/portage/~

Then use `cd $_` to enter the created directory, variable **$_** saves the last argument executed.

2. In the previously created directory we will create opening a file with [Vim](https://wiki.gentoo.org/wiki/Vim) if you have the plugin <https://github.com/gentoo/gentoo-syntax> installed the file will have the ebuild syntax colorized.

```ebuild
vim ./hello-world-1.0.ebuild
```

> Note that the ebuild header and header has already been autocompleted. The same (header only) could also be created copying from the Portage directory with the following command: 
`cp /usr/portage/header.txt ./hello-world-1.0.ebuild`

```ebuild
# Copyright 2019 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=7

DESCRIPTION=""
HOMEPAGE=""
SRC_URI=""

LICENSE=""
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE=""

DEPEND=""
RDEPEND="${DEPEND}"
BDEPEND=""
```

#### Let's understand each line of Our file

+ **# Copyright ... License v2** - This is the mandatory header in ebuilds, which we talked about earlier, tells you about the authors and the license;
+ **EAPI = 7** - Informs which syntax rule for ebuild to accept. It is actually the [Package Manager Specification (PMS)](https://wiki.gentoo.org/wiki/Package_Manager_Specification) to which the file obeys. EAPI versions (and their meaning) are defined in the Package Manager Specification. Currently, EAPIs from [0 to 7] (https://devmanual.gentoo.org/ebuild-writing/eapi/) are defined and officially supported;
+ **DESCRIPTION** - Briefly describes the contents of ebuild, namely: what is the package that will be installed / compiled;
+ **HOMEPAGE** - Inform the official package page;
+ **SRC_URI** - Informs The source code that we will download, hosted by the developer who wrote this documentation, the path of a compressed file;
+ **LICENSE** - Informs the license of the package;
+ **SLOT** - Informs how many versions can be installed from the same package. This variable can not be empty ( ~SLOT=""~ ) and can also be specified, if it is not used, it must be declared 0, eg `SLOT ="0"`;
+ **KEYWORDS** - Informs which platforms the package can be installed, ex: arm, sparc, ... In the above case, it is possible to install in AMD 64-bit or x86 (32-bit), it is used with the symbol (t) in the front, other examples: `~alpha ~arm ~hppa ~ia64 ~ppc64 ~s390 ~sh ~sparc`;
+ **IUSE** - Informs the flags that can / should be used to compile the package. Usually the user can mention them using the *USE* variable, inhibiting or declaring on the command line or directly in the `make.conf` file;
+ **DEPEND** - List of [depts](https://devmanual.gentoo.org/general-concepts/dependencies/) essential for the package to be built (compile time);
+ **RDEPEND** - List of dependencies for the package to execute (runtime), notice that the *DEPEND* variable is already included;
+ **BDEPEND** - A list of the build dependencies [CBUILD](https://wiki.gentoo.org/wiki/Embedded_Handbook/General/Full#Variables).

> Remember that this is a basic example, there are other variables that can be consulted at: <https://devmanual.gentoo.org/ebuild-writing/variables/>. For more information about schema, see the file: 
`/usr/portage/skel.ebuild`.

Our ebuild got its final version as follows:

```ebuild
# Copyright 2019 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=7

DESCRIPTION="Print Hello world in Shell Script"
HOMEPAGE="http://terminalroot.com.br/"
SRC_URI="http://terminalroot.com.br/downs/hello-world.tar.gz"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~alpha ~amd64 ~arm ~hppa ~ia64 ~ppc ~ppc64 ~s390 ~sh ~sparc ~x86"
```

> Note that variables that have not been declared in our ebuild are not essential to its operation.

Content of our `hello-world` (notice that it is without the *.sh* extension):

```bash
#!/usr/bin/env bash
# Simple examples for ebuild
# terminalroot.com.br

hello_world(){
	printf "%s\n" "Hello world!"
}
hello_world
```

Create a directory named: `hello-world-1.0`, and add the shell script inside it. Then just compress and upload to a web address:
`tar zcvf hello-world-1.0.tar.gz hello-world-1.0 /`

Now run the following command: `ebuild hello-world-1.0.ebuild manifest clean merge`. Note that you first try to download your file from a mirror, but since it is not in the Gentoo mirrors, it will be downloaded from the specified * SRC_URI * value and saved in the `/usr/portage/distfiles/hello-world-1.0.tar.gz`. So when it has the file, it can create a manifest (a `Manifest` name file inside the directory where ebuild is), this contains a hash of our ebuild and that file downloaded to ensure integrity, so that the corruption produces errors.

Then the process emerges, integrity is checked first. So we can see that the file we download is automatically decompressed, which is very useful since we do not need to implement it any more. We can change this behavior by replacing its `src_unpack` function by defining some variables using [eclass](https://wiki.gentoo.org/wiki/Eclass) that define such behavior; but we do not have to do this in this case.

But the installation does not occur, as we need to tell ebuild where to install our file.

#### Final version of ebuild

For ebuild to install the final file, we need to assign an [Ebuild Function](https://devmanual.gentoo.org/ebuild-writing/functions) that defines where it should be installed, for this we will use the `src_install` function together with another function [dobin](https://devmanual.gentoo.org/function-reference/install-functions/) that installs a binary in `/usr/bin`, and sets the file mode to * 0755 * and sets the property to superuser or its equivalent in the system or installation at hand ie `src_install` is required for our shell script hello-world to be later placed in` /usr/bin` and made executable:

```bash
src_install () {
    dobin hello-world
}
```

The final content of our ebuild was:

```ebuild
# Copyright 2019 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI = 7

DESCRIPTION = "Print Hello world in Shell Script"
HOMEPAGE="http://terminalroot.com.br/"
SRC_URI="http://terminalroot.com.br/downs/hello-world.tar.gz"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~alpha ~amd64 ~arm ~hppa ~ia64 ~ppc ~ppc64 ~s390 ~sh ~sparc ~x86"

src_install(){
	dobin hello-world
}
```

After adding the above function to ebuild, let's run the command again:

```bash
ebuild hello-world-1.0.ebuild manifest clean merge
```

If all goes well, just run the terminal: `hello-world` and you will see the output: **Hello world!**.

If you want to uninstall, use emerge: `emerge -C hello-world` and if you also want to clean the distfiles: `rm /usr/portage/hello-world` .

You do not need to remove the `Manifest` file unless you want to.

Learn more: <https://wiki.gentoo.org/wiki/Basic_guide_to_write_Gentoo_Ebuilds>

[Portuguese version](https://gitlab.com/terminalroot/gentoo/blob/master/tutoriais/como-criar-um-ebuild-no-gentoo.md)
