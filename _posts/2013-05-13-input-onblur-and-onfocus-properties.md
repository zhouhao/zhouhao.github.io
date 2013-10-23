---
layout: post
title: "表单输入框对焦时字体显示灰色的处理"
description: "表单输入框对焦时字体显示灰色的处理"
category: input
tags: [html]
---

###要实现的效果：   
>1. 当输入框不对焦时，显示灰色的Test For Fun    
>2. 当鼠标点击输入框时，清空Test For Fun，并以黑色显示输入的文本    

<pre class="brush:php">
  <form>
    <input  type="text" name="address" size="60" maxlength="60" 
    		style="color:gray; background: #fff; border: 1px solid #000;" value="Test For Fun" 
    		onfocus="if(this.value=='Test For Fun'){this.value=''};this.style.color='black';" 
    		onblur="if(this.value==''||this.value=='Test For Fun'){this.value='Test For Fun';this.style.color='gray';}">
  </form>
</pre>
###具体效果如下
<form>
<input type="text" name="address" size="60" maxlength="60" style="color:gray; background: #fff; border: 1px solid #000;" value="Test For Fun" onfocus="if(this.value=='Test For Fun'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='Test For Fun'){this.value='Test For Fun';this.style.color='gray';}">
</form>

###其实可以用jQuery实现，但是为了一个很小的功能导入一个JS库，个人觉得不合适
