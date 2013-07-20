---
layout: post
title: "How to write a simplest Chrome Plugin"
description: "How to write a simplest Chrome Plugin"
category: HTML, JS, JSON
tags: [Chrome Dev]
---

I thought it would be very hard to write a plugin for chrome, but it seems that I was wrong!    
Below are two pictures for my first plugin of chrome, which is just for fun.   
<a href="http://www.flickr.com/photos/sbzhouhao/9324251274/" title="1 by Zhou Hao, on Flickr"><img src="http://farm4.staticflickr.com/3716/9324251274_37310cab4c_z.jpg" width="640" height="164" alt="1"></a><br><br/>
<a href="http://www.flickr.com/photos/sbzhouhao/9324251284/" title="2 by Zhou Hao, on Flickr"><img src="http://farm6.staticflickr.com/5349/9324251284_44000bd7b3_q.jpg" width="150" height="150" alt="2"></a>

For this demo, there are three important code files:    
1. `manifest.json`  ---- This is a configration file   
2. `background_page.html`      
3. `test.js`  ---- It is called in background_page.html, because for security issue, js file cannot call inline, which means you cannot write your js code in html files.  
4. Some images used for logo   

###code for `manifest.json`:    
<pre><code>{
  "manifest_version": 2,
  "name": "My First Chrome Plugin",
  "description": "My First Chrome Plugin",
  "version": "1.0",
  "icons": {
    "16": "weibo_32.png",
    "48": "weibo_48.png",
    "128": "weibo_128.png"
  },
  "browser_action": {
    "default_icon": "weibo_32.png"
  },
  "background": {"page": "background_page.html"},
  "permissions": ["tabs"]
}
</code></pre>

###code for `background_page.html`:   
<pre><code>
<html>
<head>
<script src="test.js" type="text/javascript"></script>
</head>
</html>
</code></pre>

###code for `test.js`:    
<pre>
<code>  function open() 
  {
    chrome.tabs.update(null, {url:"http://sbzhouhao.net"});
  }
  chrome.browserAction.onClicked.addListener(open);
</code>
</pre>

Find more information here:[https://github.com/zhouhao/My-First-Chrome-Plugin-for-Redirection](https://github.com/zhouhao/My-First-Chrome-Plugin-for-Redirection)
