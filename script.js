let allButtons = document.getElementsByTagName('button');
for (let i = 0; i < allButtons.length; i++) {
	let currButton = allButtons[i];
	currButton.addEventListener('click', (e) => {
		let code = e.target.getAttribute('data-key');
		
		playSound(code);
	});
}

let soundObj = {
	65: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
	83: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
	68: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
	70: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
	71: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
	72: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
	74: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
	75: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
	76: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
}
function playSound(key) {
	console.log(key)
	var audio = new Audio(soundObj[key]);
    audio.play();
}
