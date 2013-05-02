---
layout: post
title: "My PHP Journey - PHP学习笔记"
description: "PHP学习笔记"
category: 编程语言
tags: [PHP]
---

最近在帮一个中国化工企业做一个PHP的在线商务网站，用的是PHP的技术，基于[Zen Cart](http://www.zen-cart.com/ "Zen Cart")的。对别人框架的修改真不是一件简单的事，尤其是那个负责人要求巨高，在她看来程序员是万能的，只要她能想到，我就应该能做到，想想蛋就碎了。    

###这篇日志的存在就是方便我针对PHP做一些笔记      

<br/>
####1. 单引号与双引号的区别

  	<?php 
		$test = "PHP"; 
		$str = "I love $test"; 
		$str1 = 'I love $test'; 
		echo $str; //output I love PHP 
		echo $str1; //output I love $test 
	?> 
