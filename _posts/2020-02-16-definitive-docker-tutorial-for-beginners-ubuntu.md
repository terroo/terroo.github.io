---
layout: post
title: "Definitive Docker Tutorial for BEGINNERS (Ubuntu)"
date: 2020-02-16 19:39:53
image: '/assets/img/server/docker-basic-en.jpg'
description: 'It has the ability to deploy instances of containers that provide virtualization using the host kernel.'
featured-img: ../server/docker-basic-en.jpg
tags:
- docker
- virtualization
- server
---

![Definitive Docker Tutorial for BEGINNERS (Ubuntu)](/assets/img/server/docker-basic-en.jpg)

# Introduction

Docker is a container virtualization environment that can establish development or runtime environments without modifying the base operating system environment. It has the ability to deploy container instances that provide virtualization using the host kernel, which makes it faster and lighter than full hardware virtualization.
Versions

- **Docker.io** - Older versions of Docker were called docker-engine or docker.io. The docker-io package was the name used in Debian / Ubuntu. That reference no longer exists.
- **Docker CE** - It is the free version of Docker that stands for Docker Community Edition.
- **Docker EE** - It is the paid version of Docker and has more features. It means Docker Entreprise Edition.

> Containers that produce Kernel Panic will induce Kernel Panic in the host's operating system.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Installation

To install we will use the snap. Just remembering that the snap is available for several distributions, such as: Arch, Gentoo, Linux Mint and others. The cool thing about it is that we will avoid problems with Docker versions.

- `sudo snap install docker` - Installs Docker
- `ps -A | grep docker` - Check if the daemon is already running
- `sudo docker run hello-world` - Running your first container

The output will be something like:

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
sudo docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete
Digest: sha256:41a65640635299bab090f783209c1e3a3f11934cf7756b09cb2f1e02147c6ed8
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
{% endhighlight %}

---

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

# Running Docker without sudo

+  1. Check which groups are available on your system, run the command: `cat /etc/group | cut -d: -f1` (to display groups beside: `cat /etc/group | cut -d: -f1 | tr '\ n' '' && echo`), if among the groups listed is docker, then that group exists, if you want to run a command that tells you whether or not the group exists, network the command: `[[ $(grep 'docker' /etc/group) ]] && echo 'There is the docker group' || echo 'There is no docker group'`

+  2. Use this step only if the docker group does not exist. Then create the group with the command: `sudo groupadd docker`.

+  3. Now add your user to the docker group with the command: `sudo usermod -aG docker $USER` (or `sudo gpasswd -a $USER docker`) and make sure you are now in the group with the `groups $USER `command.

> If you want to remove the user from the group, run: `sudo gpasswd -d $ USER docker`

+  4. Now you need to restart your computer for the changes to take effect. And after restarting the test without the `sudo docker run hello-world`, if it runs it is all right.

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

# Running a container
> For this example we will use a Shell Script application: [ZZ functions](https://funcoeszz.net/)

First, download the container image to your machine:
> If you aren't part of the docker group as mentioned above, use `sudo` for all the following steps.

{% highlight bash %}
docker pull funcoeszz/zz
{% endhighlight %}

The output will be something like:
{% highlight bash %}
docker pull funcoeszz/zz
Using default tag: latest
latest: Pulling from funcoeszz/zz
386a066cd84a: Pull complete
4e1412bf2f54: Pull complete
9e64dc8a144a: Pull complete
4efdf586deec: Pull complete
856d94476b10: Pull complete
Digest: sha256:23a5e20ceeb907e39652c4b130d5a6a8d77bc25a4aeba003a66871ada88d07dc
Status: Downloaded newer image for funcoeszz/zz:latest
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

List the images that are already on your machine:
{% highlight bash %}
docker images
{% endhighlight %}

Now just run the container and inform which function you want to use, along with its parameters, example: `docker run --rm funcoeszz/zz maiusculas is working`

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Output:
{% highlight bash %}
# --rm is optional
# docker run --rm funcoeszz/zz maiusculas is working
docker run funcoeszz/zz maiusculas is working
IS WORKING
{% endhighlight %}

Search for a container: `docker search nginx`

Commands for information: `docker info` and others, see: `docker --help` or `docker` only

# Stopping and removing images and containers

The docker run command takes the Docker image as a model and produces a container from it.

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

- Listing images and containers: `docker images` or `docker image ls`
- Stopping containers: `docker stop $(docker ps -a -q)`
- Removing all containers: `docker rm $(docker ps -a -q)`
- Removing all images: `docker rmi $(docker images -a -q)` or `docker rmi ID_IMAGE`

# Creating a container
- Create a directory and enter it: `mkdir myshell && cd myshell`
- Create a file named: *Dockerfile*: `vim Dockerfile`
{% highlight bash %}
FROM ubuntu:19.04
ENV PATH=/app:$PATH
COPY myshell.sh /app/
WORKDIR /app
ENTRYPOINT ["./myshell.sh"]
{% endhighlight %}

Create shell script file: `vim myshell.sh`
{% highlight bash %}
#!/bin/bash
echo "Testing this app ... [OK]"
{% endhighlight %}

Or this case for example server, to play for background
{% highlight bash %}
#!/bin/bash
while true; do
    echo -en "Running my script, time is it: $(date +%H:%M:%S)\r\r"
done
{% endhighlight %}

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

+ Execution permission: `chmod +x myshell.sh`
+ Build the App image: `docker build --tag=myshell`.

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

+ Confirm the image: `docker image ls`
+ Running the container: `docker run myshell`
> Container ID: `docker container ls`

# Uploading an image/container

+ Create an account at: <https://hub.docker.com/signup>
+ Confirm your email
+ Log in: <https://hub.docker.com/login>
+ At the root URL, create a repository: <https://hub.docker.com/>
> [Create Repository +], style to create a repository on GitHub: name, description, public..create

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

+ Logging in via the command line: `docker login`, enter your username [ENTER] and then your password [ENTER]
+ Creating an Image Tag: `docker tag myshell terminalroot/myshell:v1` or without tag: `docker tag myshell terminalroot/myshell`
+ Publishing: `docker push terminalroot/myshell: v1` or if you did not enter a tag: `docker push terminalroot/myshell`

If you want to test it, just remove all the images and containers and then pull it out at the beginning and see if it's really working.

# Removing Docker
+ Stop all processes: `docker stop $(docker ps -a -q)`
+ Removing processes: `docker rm $(docker ps -a -q)`
+ List the images: `docker images`
+ Removing all images: `docker rmi IMAGE_ID [nImage_ID ...]`
+ See the groups and remove the docker group:

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight bash %}
groups $USER
sudo groupdel docker
groups $USER
{% endhighlight %}

Listing the snaps and removing the snap:
{% highlight bash %}
snap list
sudo snap remove docker`
snap list
sudo snap refresh
{% endhighlight %}
More information: [snap](https://tutorials.ubuntu.com/tutorial/basic-snap-usage).

<!-- MINI ANÚNCIO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Games Root -->
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Bonus Tip
See all the tips worked in the video below. Remembering that the tutorial is in Portuguese, but you can use the subtitles

{% include youtube-legends-tutorial.html %}

<iframe width="920" height="400" src="https://www.youtube.com/embed/bsGkIKP1OZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
