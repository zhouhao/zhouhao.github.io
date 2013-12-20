---
layout: post
title: "Fix: sendmail tooo slow"
description: "Fix: sendmail tooo slow"
category: Server
tags: [Server, sendmail]
---
I call `sendmail` in my PHP code, but it seems that the sendmail is toooo slow. When I check the log in `/var/log/mail.err`, it says that:    
<pre>
Dec 20 02:00:01 localhost sm-msp-queue[4742]: My unqualified host name (localhost) unknown; sleeping for retry
Dec 20 02:01:01 localhost sm-msp-queue[4742]: unable to qualify my own domain name (localhost) -- using short name
</pre>   

Then I seach the Internet, some one says that modify `127.0.0.1	localhost CrazyHao` in `/etc/hosts` as `127.0.0.1	localhost localhost.localdomain CrazyHao` [CrazyHao is my host name].     

At last the error is still lying in the error log, but `sendmail` works fast.    


###I don't know why, and what I know is that it works!  --  Still a long way to go!   

**BTW**: I have moved [WPILIFE](http://wpilife.org/) to my VPS from Godaddy shared server. 