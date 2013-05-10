---
layout: post
title: "How to disable href property in label a of HTML"
description: "如何让html的超链接属性的href失效"
category: Web
tags: [HTML]
---

Sometimes we just want make `<a>` to change the mouse status to be a "hand" like coin, and we won't make it go to another page when we click it. So, in this case, you can make it possible by `<a href="javascript:void(0)" onclick="false">XXX</a>`.<br/>     
####`javascript:void(0)` means it is a dead link.   
It makes no difference between `<a href="javascript:void(0)" onclick="false">XXX</a>` and `<a href="https://www.google.com" onclick="false">XXX</a>`, as the `href` never works in this case.      
<br/>,br/>
###PS:     
>1. `z-index` only works when you set `position` attribute to that object.    
