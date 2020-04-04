---
layout: post
title: "Clean up your Social Media and Other Parameter URLs"
date: 2020-04-03 19:37:50
image: '/assets/img/tips/clean-url.jpg'
description: 'Avoid wasting time, space, visual pollution and especially, tracking.'
featured-img: ../tips/clean-url.jpg
tags:
- firefox
- tips
---

![Clean up your Social Media and Other Parameter URLs](/assets/img/tips/clean-url.jpg)

Most always save a lot of links in favorites. The problem is that when you click on that link from a social media (eg Facebook), they add parameters to track your click.

And when you save this link to your favorites, it is saved with these parameters and if you don't pay attention, you will have saved the same link several times because of the parameter that was added to the URL, and that are always different, and then if you do not remember if you have already saved such a link in your favorites, the browser will not display that the link is already in your favorites and you will have repeated links in your favorites, which are no more than the same link.

That is, loss of time, loss of space, visual pollution and especially an increase in the tracking of what you've been reading.

Example WITHOUT a url cleaner:
{% highlight bash %}
https://en.terminalroot.com.br/link-name-url.html?fbclid=IwAR0BkWQyL1JDAm1dl2ECnMHrtb8L32pMIT-nJYZkXp1S8W7wCr-U9ctIIms
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

After clearing the URL:
{% highlight bash %}
https://en.terminalroot.com.br/link-name-url.html
{% endhighlight %}

For this there are several add-ons/programs that are installable in different browsers and that can remove these links automatically when you click. In this example I will quote, and that's what I use at the moment, the [Neat URL](https://addons.mozilla.org/en-US/firefox/addon/neat-url/).

It is available for [Firefox](https://en.terminalroot.com.br/list-with-30-browsers-for-linux/) and Google Chrome, as I use Firefox, I'll show you how to use it. But at the end of the article I will leave links to alternatives to the Neat URL, including also for other browsers, as well as Opera and Vivaldi.

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Installing the Neat URL in Firefox
+ First go to the add-on link: https://addons.mozilla.org/en-US/firefox/addon/neat-url/ and click on **add to Firefox**;
+ Firefox will ask you to confirm that you really want to add, click add;
+ After accepting, automatically the Neat URL will already be added and already working, it will confirm the installation, as well as asking you if you also want it to work in private windows, if you want to check the option and to accept the warning (in the upper right corner) Firefox) click **Ok**, got it;

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

From now on, all URLs that have the parameters, see the list below, will be removed and that includes: Google Analytics, Amazon, LinkedIn and many others:
{% highlight bash %}
utm_source, utm_medium, utm_term, utm_content, utm_campaign, utm_reader, utm_place, utm_userid, 
utm_cid, utm_name, utm_pubreferrer, utm_swu, utm_viz_id, ga_source, ga_medium, ga_term, ga_content, 
ga_campaign, ga_place, yclid, _openstat, fb_action_ids, fb_action_types, fb_ref, fb_source, 
action_object_map, action_type_map, action_ref_map, gs_l, pd_rd_r@amazon.*, pd_rd_w@amazon.*, 
pd_rd_wg@amazon.*, _encoding@amazon.*, psc@amazon.*, ved@google.*, ei@google.*, sei@google.*, 
gws_rd@google.*, cvid@bing.com, form@bing.com, sk@bing.com, sp@bing.com, sc@bing.com, qs@bing.com, 
pq@bing.com, feature@youtube.com, gclid@youtube.com, kw@youtube.com, $/ref@amazon.&ast, _hsenc, mkt_tok, 
hmb_campaign, hmb_source, hmb_medium, spReportId, spJobID, spUserID, spMailingID, utm_mailing, 
utm_brand, CNDID, mbid, trk, trkCampaign, sc_campaign, sc_channel, sc_content, sc_medium, 
sc_outcome, sc_geo, sc_country
{% endhighlight %}

# Configuring the Neat URL in Firefox

Although the list is very long, the Facebook tracking parameter is not included. We will see how to include this and also others you want later.

+ Go to the top right corner of Firefox and click on the icon with three parallel stripes and then go to Extensions and select, or simply press **Ctrl + Shift + A**;
+ After opening a new window, click on the option with three dots ●●● where the Neat URL is located, and then on Preferences;
+ Neat URL preferences will open and in the Blocked Parameteres field, you will see all parameters that are already being blocked by default. You can resize the field and use the scroll bar;
+ Scroll to the end of this field, and at the end of the last parameter, insert a comma **→**, and then the acronym: fbclid, then just click **Save Preferences** at the bottom of this page and that's it, now the links that come out of Facebook too will be automatically cleared of additional parameters.

![Save Preferences](https://terminalroot.com.br/assets/img/firefox/save-preferences.png)

If you want to Pause the Neat URL for some reason, just click on it and it will have a red bar, and that means it will be disabled. When he finds a parameter that is included in the list, he also shows a very small number on top of his icon, stating that he has blocked a parameter.

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

# Conclusion

I sincerely enjoyed it a lot, because I hate these URLs polluted by social media, especially those on Facebook. And I also liked the Neat URL because it did not interfere with anything in the functioning or the speed of Firefox, it remains fast, as always! ✌) But if you don't like it, just remove it through the same Extensions panel → ●●● → remove.

Visit Neat's GitHub URL → <https://github.com/Smile4ever/Neat-URL>
