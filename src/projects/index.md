---
pageTitle: "Project Stories"
pageType: "index"
tags: ""
permalink: "/{{ page | makePath }}/projects/"
---
<h2>{{ pageTitle }}</h2>
{%- if collections.project.length > 1 -%}
<ul class="card-list">
	{%- for project in collections.project -%}
		{%- if project.data.pageType == 'project' -%}
		<li class="card"><a href="{{ project.page.url }}">{{ project.data.pageTitle }}</a></li>
		{%- endif -%}
	{%- endfor -%}
</ul>
{%- else -%}
<p>No project stories found</p>
{%- endif -%}

