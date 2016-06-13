function changePage(elem) {
    var navElems = document.querySelectorAll('nav li');
    for (var i in navElems) {
        navElems[i].className = "";
    }

    elem.className = "selected";
}
