function toggleAccordion(accordionItem) {
	const toggleClass = 'open';
	const isOpen = accordionItem.classList.contains(toggleClass);

	if ( isOpen ) {
		accordionItem.classList.remove(toggleClass);
	}
	else {
		accordionItem.classList.add(toggleClass);
	}
}