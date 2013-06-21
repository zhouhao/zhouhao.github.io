---
layout: post
title: "Use Perl to deal with Spreadsheet and MySQL"
description: "Use Perl to deal with Spreadsheet and MySQL"
category: 编程语言
tags: [Perl]
---
最近在做一些数据库移植的搬砖活。其实两个数据库是在同一个服务器上了，只是我得把数据从旧的网站移植到我现在正在做的网站（两个数据库的设计差别还是很大的）。

以上是对我最近所干的活的一个总体的概括，下面就说说我作为一个Perl菜鸟，是怎么历经千辛万苦，最后把一个很小的数据库片段移植”成功“的（经有限的观察，应该是成功的，但是80000条数据，我不可能一个个check啦）。

###背景介绍：   
    
1. 我手头有两个Excel文件和一个数据库的数据表（一个Excel文件含有的是82000条产品记录，因为兼容的Excel表格一个sheet只能保存65536条记录，我还得把这82000条记录分成两个sheets；另一个Excel文件含有的是67条分类信息[这只是第一波分类，但是已经能对上15472条产品信息了]）       
<img src="http://farm8.staticflickr.com/7423/9095654243_e5b75d7585.jpg" width="395" height="69" alt="产品">    

    	产品Excel表（第一列是产品ID,第二列是产品名）    
<img src="http://farm4.staticflickr.com/3708/9097886286_4442393e09_m.jpg" width="215" height="54" alt="分类信息">

    	分类Excel表（第一列是分类名,第二列是分类ID） 
<img src="http://farm6.staticflickr.com/5521/9095805255_fb69bf471c_m.jpg" width="240" height="88" alt="products_to_categories数据表">   

		products_to_categories数据表结构
 
2. 在处理之前，所有的产品在`products_to_categories`表中都已经分配了一个默认的分类（产品只有有了归属分类才能在网站显示，所以开始之初，我把所有的产品都归类到了Other类别中了）   
 
3. 如图所示，因为第一波分类都是单一的单词（非词组），所以我的任务就是检索所有的产品名称，如果产品名包含那个分类的单词，就把那个产品归到那个类别（其实就是更新下数据库，把默认的Other分类替换为现在的分类）

4. 第三条有个注意点：如`Ethyl 2-(5-bromobenzofuran-3-yl)acetate`就不能属于`furan`类别，因为`bromobenzofuran != furan`。

###我的方法     
1. 把分类信息加载到一个hash map中   
2. 遍历每个产品，把产品名中非字母的字符替换为空格，然后把产品名根据空格split为数组，然后把数组中的每个单词与步骤1中的hash map匹对，一旦找到相符的，更新分类，并跳到下一个产品。   
3. 把未分类的产品存储到一个新的Excel文件中（其实我是用了两个），方便日后再次归类。    

**你可以在此查看Perl代码。[Github](https://github.com/zhouhao/User_Perl_to_Process_Spreadsheet_and_MySQL/)**     


Perl加载excel表格的时候速度比较慢（害得我开始估计错了时间，整个80000多的记录5分钟不到就跑完了）。      

你可以在次查看代码的最终效果(网站现在还只是半成品)：[效果连接，不支持低版本的额IE哦！](http://zen-cart.achemtek.com/index.php?main_page=products_list&cPath=1_25_140_57)
