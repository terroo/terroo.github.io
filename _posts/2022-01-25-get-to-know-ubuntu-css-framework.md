---
layout: post
title: "Get to know Ubuntu's CSS Framework"
date: 2022-01-25 16:15:20
image: '/assets/img/css/ubuntu-css.jpg'
description: 'Makes your website/blog look very nice!'
tags:
- css
- ubuntu
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

title: "Get to know Ubuntu's CSS Framework"
description: ''
tags:

---

![Get to know the Ubuntu CSS Framework](/assets/img/css/ubuntu-css.jpg)

There are numerous [CSS](https://terminalroot.com/solar-system-made-with-html-css-and-pure-javascript/) frameworks throughout the world wide web ecosystem.

But [Ubuntu](https://terminalroot.com/tags#ubuntu) is not far behind. Canonical is the company responsible for this [distribution](https://terminalroot.com/tags#distro) [GNU](https://terminalroot.com/tags#gnu)/[Linux](https: //terminalroot.com/tags#linux) also their framework for you to use the same resources they use on [their website](https://ubuntu.com/).

It's **Vanilla CSS**, a versatile, beautiful and easy-to-use framework.

---

# Installation
You can install via [command line](https://terminalroot.com/tags#commands) for interdependent projects and use one of the package managers below:

> Via [yarn](https://yarnpkg.com/)
{% highlight bash %}
yarn vanilla add-framework
{% endhighlight %}

> Or via npm
{% highlight bash %}
sudo npm install -g vanilla-framework
{% endhighlight %}


There is also the option to use via CDN, just enter the address and version number:
{% highlight html %}
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
{% endhighlight %}

Example for the current version according to the publication date of this article:
{% highlight html %}
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-2.34.0.min.css" />
{% endhighlight %}

You can still download and *link* locally, for example:
{% highlight bash %}
wget https://assets.ubuntu.com/v1/vanilla-framework-version-2.34.0.min.css -O vanilla.css
{% endhighlight %}


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

# Usage
The vanilla [documentation](https://vanillaframework.io/docs) is very good and has search tools and is separated by elements, like Bootstrap.

I made a basic example which is just the image at the top of this article and here is the HTML code:
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Get to know Ubuntu's CSS Framework</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://assets.ubuntu.com/v1/vanilla-framework-version-2.34.0.min.css" rel="stylesheet">
      <style>.a-footer {color: #E95420;}</style>
   </head>
   <body>
      <header id="navigation" class="p-navigation is-dark">
         <div class="p-navigation__row">
            <nav class="p-navigation__nav is-dark" aria-label="Example main navigation">
               <ul class="p-navigation__items">
                  <li class="p-navigation__item is-selected">
                     <a class="p-navigation__link" href="#">Terminal Root</a>
                  </li>
                  <li class="p-navigation__item">
                     <a class="p-navigation__link" href="#">Home</a>
                  </li>
                  <li class="p-navigation__item">
                     <a class="p-navigation__link" href="#">Promotion</a>
                  </li>
                  <li class="p-navigation__item">
                     <a class="p-navigation__link" href="#">Courses</a>
                  </li>
                  <li class="p-navigation__item">
                     <a class="p-navigation__link" href="#">Blog</a>
                  </li>
                  <li class="p-navigation__item">
                     <a class="p-navigation__link" href="#">Search</a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
      <div class="container u-fixed-width">
         <div class="p-heading-icon u-align--center">
            <div class="p-heading-icon__header is-stacked">
               <br>
               <h1 class="p-heading-icon__title">Get to know the Ubuntu CSS Framework</h1>
            </div>
            <p style="text-align:center;margin:auto;">LXD, the Linux container hypervisor, merges the speed and density of containers with the manageability and security of traditional virtual machines. Economics are directly tied to density, and no other virtualization technology is as fast or dense as LXD.</p>
         </div>
         <br>
         <section class="p-strip u-image-position" style="border: 1px solid #cdcdcd;">
            <div class="row">
               <div class="col-6">
                  <h2>Fast, secure and simple, Ubuntu millions of PCs worldwide</h2>
                  <p>Download the latest version of Ubuntu, for desktop PCs and laptops.</p>
               </div>
               <div class="col-6">
                  <img src="https://assets.ubuntu.com/v1/c6504e94-Dell_XPS_Laptop_Front-Desktop.png?h=200" alt="" class="u-image-position--bottom">
               </div>
            </div>
         </section>
         <hr>
         <div class="p-notification--positive">
            <div class="p-notification__content">
               <h5 class="p-notification__title">Success</h5>
               <p class="p-notification__message">The camera is a middle. The landmine of an architecture becomes a racist bit. The permissions could be said to resemble xanthous gases. Though we assume the latter, before fenders, strings were only titles. They were lost without the extant rod that composed their tree. </p>
            </div>
         </div>
         <table aria-label="Table featuring elements that stretch into the cell padding">
            <tbody>
               <tr>
                  <td><button class="u-table-cell-padding-overlap p-button--negative">Select</button></td>
                  <td>Text</td>
               </tr>
               <tr>
                  <td><button class="is-dense u-table-cell-padding-overlapi p-button--positive">Select</button></td>
                  <td>Text not wrapped in a tag</td>
               </tr>
               <tr>
                  <td><button class="u-table-cell-padding-overlap">Select</button></td>
                  <td>
                     <p class="u-no-margin--bottom u-table-cell-padding-overlap">Text in a paragraph</p>
                  </td>
               </tr>
            </tbody>
         </table>
         <hr>
      </div>
      <footer class="l-footer--sticky p-strip--dark">
         <nav class="row" aria-label="Footer navigation">
            <div class="has-cookie">
               <p>© 2021 Terminal Root Ltd. <a class="a-footer">C++</a> and <a class="a-footer">GNU/Linux</a> are registered trademarks .</p>
               <ul class="p-inline-list--middot">
                  <li class="p-inline-list__item">
                     <a class="a-footer"><small>Legal information</small></a>
                  </li>
                  <li class="p-inline-list__item">
                     <a class="a-footer"><small>Report a bug on this site</small></a>
                  </li>
               </ul>
               <span class="u-off-screen"><a class="a-footer">Go to the top of the page</a></span>
            </div>
         </nav>
      </footer>
   </body>
</html>
{% endhighlight %}

---

# [Go to the Vanilla Framework Documentation](https://vanillaframework.io/docs)

---

### Helpful links
+ <https://github.com/canonical-web-and-design/vanilla-framework>
+ <https://ubuntu.com/blog/introducing-vanilla>
+ <https://ubuntu.com/blog/the-lifecycle-of-components-in-your-design-system>
+ <https://github.com/canonical-web-and-design/vanilla-framework/releases>




