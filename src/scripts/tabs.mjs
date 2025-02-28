function switchTabs(tabItem,tabContentId) {
	const toggleClass = 'active';
	const tabSet = tabItem.parentElement;
	const tabControl = tabSet.parentElement;
	const isActive = tabItem.classList.contains(toggleClass);

	if ( tabControl && tabSet ) {
		let tabs = tabSet.getElementsByClassName('tab');
		for (let tab of tabs) {
			tab.classList.remove(toggleClass);
		}

		let tabContents = tabControl.getElementsByClassName('tab-content');
		for (let tabContent of tabContents) {
			tabContent.classList.remove(toggleClass);
		}

		tabItem.classList.add(toggleClass);
		document.getElementById(tabContentId).classList.add(toggleClass);
	}
}