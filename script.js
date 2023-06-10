let allButtons = document.getElementsByTagName('button');
for (let i = 0; i < allButtons.length; i++) {
	let currButton = allButtons[i];
	currButton.addEventListener('click', (e) => {
		let code = e.target.getAttribute('data-key');
		console.log(code);
	});
}
