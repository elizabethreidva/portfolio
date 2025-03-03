---
pageTitle: "Use Cases"
pageType: "index"
tags: ""
---
<h2>{{ pageTitle }}</h2>
{%- if collections.use-case.length > 1 -%}
<ul>
	{%- for use-case in collections.use-case -%}
		{%- if use-case.data.pageType == 'use-case' -%}
		<li><a href="{{ use-case.page.url }}">{{ use-case.data.pageTitle }}</a></li>
		{%- endif -%}
	{%- endfor -%}
</ul>
{%- else -%}
<p>No use cases found</p>
{%- endif -%}

