"use strict";

const itemAccsess = document.querySelector('.header__bottom-nav');
const brandElem = document.getElementsByClassName('brands-drop');
const dropPhone = document.querySelector('.drop-tel');

itemAccsess.addEventListener('mouseover', openSubmenu);

function openSubmenu(event) {
	if (event.target.id) {
		const idTarget = event.target.id;
		const dropElem = document.getElementsByClassName(`${idTarget}`);
		dropElem[0].classList.add('visible');
		dropPhone.style.visibility = 'hidden';
		let currentElement = dropElem[0];
		if (currentElement.classList.contains('visible')) {
			for (let i = 0; i < brandElem.length; i++) {
				if (brandElem[i].classList.contains('visible')) {
					brandElem[i].classList.remove('visible');
					currentElement.classList.add('visible');
				}
			}
		}
	}
}

//Диактивация подменю при наведении на главный блок;

const mainBlock = document;

mainBlock.addEventListener('mousemove', function(event) {
	if (event.target.closest('main') || event.target.closest('footer')) {
		for (let k = 0; k < brandElem.length; k++) {
			brandElem[k].classList.remove('visible');
		}
		dropPhone.style.visibility = 'unset';
	}
})






