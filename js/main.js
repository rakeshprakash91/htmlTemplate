/*To change nav color when clicked*/
function changePage(elem) {
	var navElems = document.querySelectorAll('nav li');
	for (var i in navElems) {
		navElems[i].className = "";
	}

	elem.className = "selected";
}
/*To prevent body scroll when modal is present*/
function stopScroll() {

	setTimeout(function () {
		document.body.style.overflow = "hidden";
	}, 100)
}
/*To enable body scroll when modal is closed*/
function enableScroll() {
	document.body.style.overflow = "auto";
}

function toggleMenu() {
	var currElem = document.querySelectorAll("nav ul")[0];
	if (currElem.offsetHeight) {
		currElem.style.display = "none";
	} else {
		currElem.style.display = "block";
	}
}
