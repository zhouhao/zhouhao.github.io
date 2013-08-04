---
layout: post
title: "Zen-cart Create new page at front-end"
description: "Zen-cart Create new page at front-end"
category: zen-cart
tags: [zen-cart]
---

###Here I will tell you how to setup a new function page for front-end, which often makes beginners discouraged.    
[http://blog.csdn.net/chenjie3392593/article/details/7654410](http://blog.csdn.net/chenjie3392593/article/details/7654410)      
Method 4 seems a good way, but it is not the best for my needs, as it will make the page you created editable at back-end(Just the file in directory of `/html_includes/`).   
![define_pages_editor.php](/media/images/post/20130725130131.png)    

Three reasons why this is not best:   
1. We won't make it editable at back-end, which may induce troubles for administrator;    
2. If we create too many pages, the pull-down-list will be very long;   
3. Sometimes, developer will wonder in which file I should put my code.  

To eliminate these three shortcomings, you can use my way as below(I will take creating `example` page as a demo):   
  
1. Create a folder named `example` in directory `includes/modules/pages`，then create `header_php.php` in this folder. You can copy the following code into this php file.    

<pre><code>&lt;?php
// This should be first line of the script:
$zco_notifier->notify('NOTIFY_HEADER_START_EXAMPLE');

if (!$_SESSION['customer_id']) 
{
  $_SESSION['navigation']->set_snapshot();
  zen_redirect(zen_href_link(FILENAME_LOGIN, '', 'SSL'));
}
require(DIR_WS_MODULES . zen_get_module_directory('require_languages.php'));
$breadcrumb->add(NAVBAR_TITLE);

//You can load data from Database into variables here. This is M of MVC
$body = "This is the body for Example Page.";

// This should be last line of the script:
$zco_notifier->notify('NOTIFY_HEADER_END_EXAMPLE');
?></code></pre>

2. Open `includes/filenames.php`, then add:    
<pre><code>define('FILENAME_EXAMPLE', 'example');</code></pre>

3. Open `includes/language/english`，create `example.php`:

<pre><code>&lt;?php
define('NAVBAR_TITLE', 'Example page');
define('HEADING_TITLE', 'Example page');
?></code></pre>

4. Open `includes/templates/template_default/templates`, then create `tpl_example_default.php`, and add code: 

<pre><code>&lt;div class="centerColumn" id="exampleDefault"&gt;
&lt;h1 id="exampleDefaultHeading"&gt;&lt;?php echo HEADING_TITLE; ?&gt;&lt;/h1&gt;
 &lt;?php echo $body; ?&gt;
&lt;br class="clearBoth"/&gt;</code></pre>

###Note:  
<del>I think step 3 is not necessary, as I have removed multi-language support, but for **compatibility** reason, I just keep it now in version 1.</del>    
<h4 style="color:blue">I do not create `example.php` for my new page, and it works well!</h4>   

###Now you can browse this page use the link: 
[http://example.com/index.php?main_page=example](http://example.com/index.php?main_page=example)

Good luck.    
Any problem, you can email me: [hzhou@wpi.edu](mailto:hzhou@wpi.edu)
