document.addEventListener('click', function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}, false);


function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");

var myMenu2 = document.querySelector(".fill");
var oppMenu = document.querySelector(".menu-icon");
myMenu2.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);