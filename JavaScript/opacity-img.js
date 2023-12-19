"use strict";

const imgElems = document.querySelector('.main__banner-block');
const elemsOpacity = document.querySelector('.grid-img').children;

window.addEventListener('scroll', function checkPosition() {
	let positionActive = imgElems.getBoundingClientRect().bottom - imgElems.scrollHeight;
	if (positionActive < 0) {
		window.removeEventListener('scroll', checkPosition);
		opacityDiactive();
	}
})

let count = 0;

function opacityDiactive() {
	if (count < elemsOpacity.length) {
	elemsOpacity[count].classList.add('img-opacity');
	count++;
	}
	else {return}
		setTimeout(opacityDiactive, 350);
}


