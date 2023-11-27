---
layout: post
title: "How to Create a Mini Project with Electron.js"
date: 2023-11-27 11:19:37
image: '/assets/img/js/electronjs.jpg'
description: 'Create graphical applications for Desktop!'
tags:
- javascript
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**Electron** (formerly known as **Atom Shell**) is a free and open-source software framework developed and maintained by [OpenJS Foundation](https://openjsf.org/).

The framework is designed to create desktop applications using web technologies (mainly [HTML](https://terminalroot.com/tags#html), [CSS](https://terminalroot.com/tags#css) and [JavaScript](https://terminalroot.com/tags#javascript), although other technologies such as front-end frameworks and [WebAssembly](https://terminalroot.com/how-to-transform-your-games-into-c-cpp-for-the-web-with-emscripten-sdl2/) are possible) that are rendered using a version of the browser engine [Chromium](https://terminalroot.com/top-10-chrome-extensions-for-developers/) and a back finish using the Node.js execution environment.

It also uses several APIs to enable features such as native integration with [Node.js](https://terminalroot.com/tags#nodejs) services and an inter-process communication module.

Electron was originally built for Atom and is the main [GUI](https://terminalroot.com/tags#gui) framework behind several open source projects, including [Atom](https://pulsar-edit.dev/), [GitHub Desktop](https://desktop.github.com/), [Light Table]( https://github.com/LightTable/LightTable), [Visual Studio Code](https://terminalroot.com/tags#vscode), [WordPress Desktop](https://apps.wordpress.com/desktop /) and [Eclipse Theia](https://theia-ide.org/).

---

# Dependencies
Download directly from the website using the links below or use your operating system's package manager.

+ [Node.js](https://nodejs.org/)
+ [NPM](https://www.npmjs.com/)

Example of installing dependencies on [Ubuntu](https://terminalroot.com/tags#ubuntu):
{% highlight bash %}
sudo apt install nodejs npm
{% endhighlight %}

---

# Creating a basic Window
Let's create the most basic example possible!

### 01. Create a folder and enter it:
{% highlight bash %}
mkdir myapp
cd myapp
{% endhighlight %}

---

### 02. Create a file named: `package.json`:
And insert the content below:
{% highlight json %}
{
   "name": "My First Electron Project",
   "version": "1.0.0",
   "description": "A basic usage example!",
   "main": "main.js",
   "scripts": {
     "start": "electron."
   },
   "author": "Marcos Oliveira",
   "license": "GNU GPLv3"
}
{% endhighlight %}
> This step can be replaced by the command: `npm init` with edits as you wish!

---

### 03. Install Electron to be added to your project:
{% highlight bash %}
npm install --save-dev electron
{% endhighlight %}
> Note that your `package.json` has been changed and added Electron support!

---

### 04. Create a file named: `index.html`
And insert the content below into the file:

{% highlight html %}
<!DOCTYPE html>
<html>
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
     <title>My First Project with Electron</title>
   </head>
   <body>
     <h1>My First Project with Electron</h1>
     <h2>We are using the technologies (and versions):</h2>
     <ul>
       <li>Node.js: <span id="node-version"></span></li>
       <li>Chromium: <span id="chrome-version"></span></li>
       <li>Electron: <span id="electron-version"></span></li>
     </ul>
   </body>
</html>
{% endhighlight %}

---

### 05. Create a file named: `main.js`
And insert the content below into the file:
> In the example below, a window with a resolution of 1280x720 is created.

{% highlight js %}
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow() {
   const win = new BrowserWindow({
     width: 1280,
     height: 720,
     autoHideMenuBar: true, // Hide the Menu Bar: File, ...
     webPreferences: {
       preload: path.join(__dirname, 'preload.js')
     }
   })

   win.loadFile('index.html')
}

app.whenReady().then(() => {
   createWindow()

   app.on('activate', () => {
     if (BrowserWindow.getAllWindows().length === 0) {
       createWindow()
     }
   })
})

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
     app.quit()
   }
})
{% endhighlight %}

---

### 06. Create the `preload.js` file
And insert the content below into the file:

{% highlight js %}
window.addEventListener('DOMContentLoaded', () => {
   const replaceText = (selector, text) => {
     const element = document.getElementById(selector)
     if (element) element.innerText = text
   }

   for (const type of ['chrome', 'node', 'electron']) {
     replaceText(`${type}-version`, process.versions[type])
   }
})
{% endhighlight %}

---

### 07. Now just run the project
When you open the window you can even access the console with: `Ctrl + Shift + i`.
{% highlight bash %}
npm start
{% endhighlight %}
> Example of the App we created running in the image below:

[![My App Electron](/assets/img/js/myapp-electron.jpg)](/assets/img/js/myapp-electron.jpg)
> Click on the image to see in a higher resolution!

---

For more information access:
+ <https://github.com/electron/electron>
+ <https://www.electronjs.org/>



