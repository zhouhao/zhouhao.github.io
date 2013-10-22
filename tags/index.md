---
title: Tags
layout: page
---

<div class="middle_inner">
	<div id='tag_cloud'>
	{% for tag in site.tags %}
	<span style="margin-right:5px; font-size:16px;"><a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a> </span>
	{% endfor %}
	</div>

	<ul class="listing">
	{% for tag in site.tags %}
	  <li class="listing-seperator" id="{{ tag[0] }}"><h2 style="color:red;">{{ tag[0] }}</h2></li>
	{% for post in tag[1] %}
	  <li class="listing-item">
	  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
	  <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
	  </li>
	{% endfor %}
	{% endfor %}
	</ul>

</div>
<script src="/media/js/jquery.tagclouds.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagclouds.defaults = {
    size: {start: 1, end: 1, unit: 'em'},
      color: {start: '#FFAEB9', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagclouds();
});
</script>
