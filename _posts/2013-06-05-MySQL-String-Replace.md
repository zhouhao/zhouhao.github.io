---
layout: post
title: "MySQL String Replace"
description: "MySQL字段替换"
category: Database
tags: [MySQL]
---
最近在处理数据库转移的活（把就网站的数据库拷贝到新的网站中），本来想写个脚本的，但是上面催的急，就先手工导入了数据。导入后遇到一个问题就是：原先的图片路径和新的网站中不一致。

    UPDATE `table_name` SET `field_name` = replace (`field_name`,'from_str','to_str') WHERE `field_name` LIKE '%from_str%'

就这么一句话解决了所有的问题！在此感谢博客园。
    
参考页面：[http://www.cnblogs.com/freespider/archive/2011/09/13/2174386.html](http://www.cnblogs.com/freespider/archive/2011/09/13/2174386.html)
