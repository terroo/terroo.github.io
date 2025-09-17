---
layout: post
title: "Manage Docker Graphically via the Terminal"
date: 2025-09-17 11:31:46
image: '/assets/img/docker/lazydocker.jpg'
description: "🐋 A TUI application built in Go."
tags:
- docker
- go
- tui
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**LazyDocker** is an open-source tool written in [Go](https://terminalroot.com.br/tags#go): a [TUI](https://terminalroot.com.br/tags#tui) application that simplifies managing [Docker](https://terminalroot.com.br/tags#docker) containers, images, volumes, and Docker-Compose services directly from the [terminal](https://terminalroot.com.br/tags#terminal), without needing to memorize complex commands.

Features:
* **Live logs and metrics**: Displays real-time logs and stats (CPU/memory) for containers.
* **Keyboard navigation**: Quick commands to move between containers and services.
* **Quick control**: Start, stop, restart, and remove containers with a click/keypress.
* **Docker Compose support**: Detects `docker-compose.yml` and allows managing services in one place.
* **Lightweight and visual interface**: Ideal for remote servers or terminal preferences.
* **Mouse support and customizable UI**: Supports mouse actions and configuration via YAML.

Benefits:
* Avoids memorizing complex Docker commands, streamlining your workflows.
* Useful for local development, microservices, debugging, and remote environments without a graphical interface.
* Lightweight, fast, and efficient compared to heavy GUIs.

---

## Installation

**Homebrew**:
{% highlight bash %}
brew install lazydocker
{% endhighlight %}


**Scoop (Windows)**:
{% highlight bash %}
scoop install lazydocker
{% endhighlight %}

**Install via Go**:
{% highlight bash %}
go install github.com/jesseduffield/lazydocker@latest
{% endhighlight %}

**Docker (as a container)**: Use `docker run` mounting `/var/run/docker.sock`.

---

## Usage

After installation, simply run:

{% highlight bash %}
lazydocker
{% endhighlight %}

Within the UI, you can navigate through the sections:

* <kbd>tab</kbd> or arrow keys to navigate between panels
* <kbd>enter</kbd> to focus
* <kbd>q</kbd> to quit
* Use ⬅/➡ or other shortcuts listed in the documentation for specific actions.

---

For more information, visit the repository: <https://github.com/jesseduffield/lazydocker>.
