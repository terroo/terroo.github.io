---
layout: post
title: "Solar system made with HTML, CSS and pure Javascript"
date: 2021-04-26 10:45:38
image: '/assets/img/web/solarsystem.jpg'
description: 'Code ready for you to run in your browser.'
featured-img: ../web/solarsystem.jpg
tags:
- web
- html
- css
- javascript
---

![Solar system made with HTML, CSS and pure Javascript](/assets/img/web/solarsystem.jpg)

Hail, boy! The other day I saw a cool tutorial on Youtube and saved it to my favorites to check it out later. And other day I finished my daily tasks a little earlier and decided to watch and play the video content.

It is the Solar System made with **HTML**, **CSS** and pure **Javascript**!

Although the author of the video did not provide the files and the code, he made a point of stressing the entire procedure in the video, showing the logic of the calculations by written messages.

At the end of this post there is the video and you will notice that you need to have an advanced knowledge of Mathematics more precisely of Geometry:
+ Sine
+ Cosine
+ Radian

I did and I will make the files available right here, there are 3 files (code):
+ index.html
+ main.css
+ script.js

The images (I selected on several internet sites and I don't remember the addresses) are right at the end of the code, you can save as in the same directory where you will create/save the code. I did it that way because the author released a "disclaimer" and I didn't understand it very well. So, in order not to belittle the codeTonight work in addition to posting his video, the files will be made available separately.

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Here are the codes:

Create a folder named example: solarsystem, `mkdir solarsystem`. And save all files, including images inside that folder.

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

# `index.html`
```sh
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta charset="utf-8">
  <title>Solar System</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <img class="object" src="sun.png" alt="" id="sun">
  <img class="object planet" src="mercury.png" alt="" id="mercury">
  <img class="object planet" src="venus.png" alt="" id="venus">
  <img class="object planet" src="earth.png" alt="" id="earth">
  <img class="object planet" src="mars.png" alt="" id="mars">
  <img class="object planet" src="jupiter.png" alt="" id="jupiter">
  <img class="object planet" src="saturn.png" alt="" id="saturn">
  <img class="object planet" src="uranus.png" alt="" id="uranus">
  <img class="object planet" src="neptune.png" alt="" id="neptune">
  <div class="object" id="moon"></div>

  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object p-orbit"></div>
  <div class="object" id="m-orbit"></div>

  <img src="asteroid.png" class="object" alt="" id="belt">
</body>
  <script src="script.js"></script>
</html>
```

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

# `main.css`
```sh
body {
  background: black;
  margin: 0;
  padding: 0;
  height: 200vmin;
}

.object {
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY( 50vmin );
}

.p-orbit, #m-orbit{
  border: 0.1vmin solid lightgrey;
  opacity: 0.5;
  background: transparent;
}

#belt {
  height: 97vmin;
  width: 97vmin;
  animation: spin 50s infinite linear;
  margin-top: 50vmin;
}

@keyframes spin{
  0%{ transform: rotate(0deg) }
  100%{ transform: rotate(360deg) }
}

#m-orbit {
  height: 8vmin;
  width: 8vmin;
}

.planet, #moon {
  z-index: 100;
}

#sun {
  height: 12vmin;
  width: 12vmin;
}

#moon {
  height: 1vmin;
  width: 1vmin;
  background-color: white;
}

#mercury {
  height: 2vmin;
  width: 2vmin;
}

#venus {
  height: 3vmin;
  width: 3vmin;
}

#earth {
  height: 4vmin;
  width: 4vmin;
}

#mars {
  height: 3.5vmin;
  width: 3.5vmin;
}

#jupiter {
  height: 12vmin;
  width: 12vmin;
}

#saturn {
  height: 12vmin;
  width: 12vmin;
  border-radius: 0%;
}

#uranus {
  height: 5vmin;
  width: 5vmin;
}

#neptune {
  height: 4vmin;
  width: 4vmin;
}
```

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

# `script.js`
```sh
const planets = document.querySelectorAll('.planet')
const p_radii = [22,33,50,70,112,138,165,190]
let p_radians = new Array(8).fill(0)
const p_velocities = [1.607, 1.174,1,0.802, 0.434, 0.323, 0.228, 0.182]

const moon = document.querySelector('#moon')
const m_radius = 8
let m_radians = 0
const m_velocity = 10

const p_orbits = document.querySelectorAll('.p-orbit')
const m_orbit = document.querySelector('#m-orbit')

p_orbits.forEach((p_orbit, index)=>{
  p_orbit.style.height = `${p_radii[index]}vmin`
  p_orbit.style.width = `${p_radii[index]}vmin`
})

setInterval( ()=> {
  planets.forEach( (planet, index)=>{
    planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
    planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
    p_radians[index] += p_velocities[index] * 0.02
  })

  moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius )}vmin`
  moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius )}vmin`
  m_radians += m_velocity * 0.02

  m_orbit.style.left = `${earthX()}vmin`
  m_orbit.style.top = `${earthY()}vmin`
}, 1000/60)

function earthX(){
  return Number( planets[2].style.left.split('vmin')[0] )
}

function earthY(){
  return Number( planets[2].style.top.split('vmin')[0] )
}
```

---

# Images
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/asteroid.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/earth.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/jupiter.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/mars.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/mercury.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/neptune.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/saturn.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/sun.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/uranus.png)
![Planet](https://terminalroot.com.br/assets/img/dev-web/solarsystem/venus.png)

---

# CodeTonight video

<iframe width="900" height="380" src="https://www.youtube.com/embed/ZmIHQBMhDiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


