/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);


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

const navPrimary = document.querySelector(".nav--primary");
const navSecondary = document.querySelector(".nav--secondary");
const stickyWrap = document.querySelector(".sticky-wrap");
const contentWrap = document.querySelector('.content-wrap');




$(window).bind('scroll', (function () {
    if ($(window).scrollTop() > 50) {
        $('.header').css('top','0px');
		$('.header').css('margin-top','0px');
    } else {
        $('.header').css('top','10px');
		$('.header').css('margin-top','26px');
    }
}));
