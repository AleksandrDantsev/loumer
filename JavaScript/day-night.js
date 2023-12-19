"use strict";

const nightBlock = document.querySelector('.night-day');
const nightActiveButton = document.querySelector('.night')
const basketColorNight = document.querySelector('.count-basket').firstElementChild;
const idSvg = document.getElementById('surface865280');
const body = document.querySelector('body');

document.querySelector('.night').firstElementChild.style.fill = '#ACACAC';

const res = localStorage.getItem('theme');

if (res == 'dark') {
	document.body.classList.add('allBlack');
}
if (res == 'light') {
	document.body.classList.remove('allBlack');
}


nightBlock.onclick = function(event) {

	if (event.target.closest('.night')) {
	nightActiveButton.style.order = '1';
	document.body.classList.add('allBlack');
	localStorage.theme = 'dark';
	idSvg.children[1].style.fill = '#1B1B1B';
	idSvg.children[3].style.fill = '#1B1B1B';

	}

	if (event.target.closest('.day')) {
	idSvg.children[1].style.fill = '#fff';
	idSvg.children[3].style.fill = '#fff';
	localStorage.theme = 'light';
	nightActiveButton.style.order = '0';
	document.body.classList.remove('allBlack');
	}
}



