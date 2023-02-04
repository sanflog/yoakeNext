export function dropText() {
	if (typeof document !== 'undefined'){
		if(document.documentElement.scrollTop > 100) {
			document.getElementById(text1).className = 'dropText';
		}
	}
}
