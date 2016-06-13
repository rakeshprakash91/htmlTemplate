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
	document.body.style.overflow = "hidden";
	console.log('inside')
}
/*To enable body scroll when modal is closed*/
function enableScroll() {
	document.body.style.overflow = "auto";
}
