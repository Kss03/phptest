let addTheme = document.querySelector('.add_theme');
let themes = document.querySelectorAll('.themes');
let lists = document.querySelectorAll('.lst');
let listThemes = document.querySelector('.list-themes');


addTheme.onclick = function () {
	let newTheme = document.createElement('li');
	let newUrl = document.querySelector('.url-add');
	let newName = document.querySelector('.name-add');
	let newLink = document.createElement('a');
	newLink.href = newUrl.value;
	newLink.textContent = newName.value;
	console.log(newTheme);
	newTheme.append(newLink);
	for (theme of themes) {
		if (theme.dataset.theme === listThemes.value){
			theme.append(newTheme);
		};
	};
};