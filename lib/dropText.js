export function dropText() {
	const sct = document.documentElement.scrollTop;
	const card1 = document.getElementById('indexAnimationCard1');
	const card2 = document.getElementById('indexAnimationCard2');
	const vht = window.innerHeight;

	console.log(sct);
	console.log(card1);
	console.log(card2);
	console.log(vht);

	card1.className = 'reveal';
}
