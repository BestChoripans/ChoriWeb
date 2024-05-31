var easterEggClicks = 0;

function easterEgg() {
	if (easterEggClicks == 0) {
		document.getElementById("click").play();
		easterEggClicks++;
		document.getElementById("music").loop = true;
		document.getElementById("music").play();
		document.getElementById("easter-egg").setAttribute("style","color: #f700ff");
	} else {
		if (easterEggClicks < 1) {
			document.getElementById("click").play();
		}
		easterEggClicks++;
	}
}
