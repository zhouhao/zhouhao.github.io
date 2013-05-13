---
layout: post
title: "表单输入框对焦时字体显示灰色的处理"
description: "表单输入框对焦时字体显示灰色的处理"
category: input
tags: [html]
---
  <form>
    <input type="text" name="address" size="60" maxlength="60" style="color:gray" value="Test For Fun" onfocus="if(this.value=='Test For Fun'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='Test For Fun'){this.value='Test For Fun';this.style.color='gray';}">
  </form>

<form>
<input type="text" name="address" size="60" maxlength="60" style="color:gray" value="Test For Fun" onfocus="if(this.value=='Test For Fun'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='Test For Fun'){this.value='Test For Fun';this.style.color='gray';}">
</form>
