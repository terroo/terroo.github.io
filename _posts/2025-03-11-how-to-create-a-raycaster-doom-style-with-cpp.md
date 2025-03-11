---
layout: post
title: "How to Create a Raycaster (DOOM style) with C++"
date: 2025-03-11 19:56:51
image: '/assets/img/gamedev/raycaster-github.png'
description: "🚀 Ray casting is an algorithm used in image processing, and its objective is to synthesize 3D images"
tags:
- gamedev
- cpp
- sfml
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Ray casting** is an algorithm used in image processing, and its objective is to <u>synthesize 3D images</u>. It can be defined as the first stage of the *Raytracing* algorithm, differing from it in its simplicity since Ray casting is not a recursive method.

> This algorithm fires rays from the observer in order to perceive the distance of the objects that make up the scene, a **camera field of view** style.

Ray casting is actually used by the game: **Wolfenstein 3D**. **DOOM**, in fact, uses "*Column-based rendering*" which is a more advanced approach, where the environment is divided into sectors and lines of sight, but the result is very similar to Ray casting, since both are 2D, but DOOM is more considered a pseudo-3D.

In this tutorial we will see the development from scratch with [C++](https://terminalroot.com/tags#cpp) and [SFML](https://terminalroot.com/tags#sfml) step by step of how **Ray casting** works.

---

## 🎥 Watch the Video
> The video is in Portuguese, however, it is possible to follow the logic, or, use both automatic translation and automatic dubbing from YouTube.

<iframe width="1243" height="699" src="https://www.youtube.com/embed/2JDzJoEscr0" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🚀 Code on GitHub
### <https://github.com/terroo/raycaster>



