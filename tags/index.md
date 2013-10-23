---
title: Tags
layout: page
---
<script type="text/javascript">
	var tpj=jQuery;
	tpj.noConflict();
	tpj(document).ready(function() {
		tpj('.tag_tab').attr('class', 'current_page_item');})
</script>
<div class="middle_inner">
	<div id='tag_cloud'>
	{% for tag in site.tags %}
	<span style="margin-right:5px; font-size:16px;"><a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a> </span>
	{% endfor %}
	</div>

	<ul class="listing">
	{% for tag in site.tags %}
	  <li class="listing-seperator" id="{{ tag[0] }}"><h3 style="color:red;">{{ tag[0] }}</h3>
	  	<ul>
		{% for post in tag[1] %}
		  <li class="listing-item">
		  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
		  <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
		  </li>
		{% endfor %}
		</ul>
	</li>
	{% endfor %}
	</ul>
</div>
