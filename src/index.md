---
layout: "default.njk"
pageTitle: "Home"
---

Design technologist with 20+ years in software engineering and design, specializing in the creation and implementation of design systems to establish consistent user experience standards. Adept at building design system tools for both developers and designers, I bring a strong attention to detail and a passion for driving user experience excellence. I’ve led and advised teams through the adoption of design systems with comprehensive training, clear documentation, and a focus on continuous improvement of workflow and product quality.

<h2>Use Cases</h2>
{%- if collections.use-case.length > 1 -%}
<ul>
	{%- for uc in collections.use-case -%}
		{%- if uc.data.pageType == 'use-case' -%}
		<li><a href="{{ uc.page.url }}">{{ uc.data.pageTitle }}</a></li>
		{%- endif -%}
	{%- endfor -%}
</ul>
{%- else -%}
<p>No use cases found</p>
{%- endif -%}