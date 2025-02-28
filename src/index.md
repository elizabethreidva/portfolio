---
layout: "default.njk"
pageTitle: "Home"
---

<section class="about">
	<h2>Who is Elizabeth?</h2>
	<div class="tab-control">
		<nav class="tab-set">
			<button class="tab active" onclick="switchTabs(this,'tc-person')">The Person</button>
			<button class="tab" onclick="switchTabs(this,'tc-designer')">The Designer</button>
			<button class="tab" onclick="switchTabs(this,'tc-engineer')">The Engineer</button>
		</nav>
		<section class="tab-content person active" id="tc-person">
			<h3>Elizabeth The Person</h3>
			<p><em>Coming soon</em></p>
		</section>
		<section class="tab-content designer" id="tc-designer">
			<h3>Elizabeth The Designer</h3>
			<p><em>Coming soon</em></p>
		</section>
		<section class="tab-content engineer" id="tc-engineer">
			<h3>Elizabeth The Engineer</h3>
			<p><em>Coming soon</em></p>
		</section>
	</div>
</section>