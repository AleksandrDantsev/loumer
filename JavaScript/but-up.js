"use strict";

const buttonUpMove = document.querySelector('.button-up');
const headerUpMove = document.querySelector('.header');
const allHeight = document.body.scrollHeight;

buttonUpMove.addEventListener('click', moveUp);

function moveUp(event) {
	if (event.target.closest('.button-up')) {
		headerUpMove.scrollIntoView({behavior: 'smooth'})
	}
}

window.addEventListener('scroll', scrolling);

function scrolling() {
	if (window.scrollY < allHeight / 3) {
		buttonUpMove.style.visibility = 'hidden';
	}
	else {
		buttonUpMove.style.visibility = 'unset';
	}
}

