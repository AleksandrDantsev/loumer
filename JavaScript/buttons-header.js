"use strict";

const dropMenu = document.querySelectorAll('.brands-drop');

function chechVisible() {
	for (let i = 0; i < dropMenu.length; i++) {
		if (dropMenu[i].classList.contains('visible')) {
			dropMenu[i].classList.remove('visible');
		}
	}
}



const header = document.querySelector('.header');
const headerSearcPopUp = document.querySelector('.header__search-popup');
const inputSearch = document.querySelector('.search-popup-input');

header.addEventListener('click', openSearch);

function openSearch(event) {
	if (event.target.closest('.search')) {
		headerSearcPopUp.classList.toggle('active-searhHeader');
		chechVisible()

	}
	if (event.target.closest('.search-popup-close')) {
		headerSearcPopUp.classList.remove('active-searhHeader');
	}
}


//Открытие и закарытие окна профиля;

const profilButton = document.querySelector('.profil');
const profilPopUp = document.querySelector('.header__profil-popup');
const basketPopUp = document.querySelector('.header__basket-popup');
const headerCenter = document.querySelector('.header__center');
const headerBottom = document.querySelector('.header__bottom-info');
const elemMain = document.querySelector('.main');

const bd = document.body;

header.addEventListener('click', openProfil);

function openProfil(event) {
	if (event.target.closest('.profil')) {
		profilPopUp.classList.add('visible');
		chechVisible();
		pointEv(true);
	}
	if (event.target.closest('.profil-popup__close')) {
		profilPopUp.classList.remove('visible');
		pointEv(false);
	}
	if (event.target.closest('.basket')) {
		basketPopUp.classList.add('visible');
		chechVisible();
		pointEv(true);
	}
	if (event.target.closest('.header__busket-close')) {
		basketPopUp.classList.remove('visible');
		pointEv(false);
	}
}	


elemMain.addEventListener('click', closeMenuSide); 

function closeMenuSide(event) {
	if (profilPopUp.classList.contains('visible')) {
		if (event.target.closest('.main')) {
			profilPopUp.classList.remove('visible');
			pointEv(false)
		}
	}
	if (basketPopUp.classList.contains('visible')) {
		if (event.target.closest('.main')) {
			basketPopUp.classList.remove('visible');
			pointEv(false)
		}
	}
}


function pointEv(bool) {
	if (bool === true) {
		headerCenter.style.pointerEvents = 'none';
		headerBottom.style.pointerEvents = 'none';
		bd.style.overflow = 'hidden';
	}
	if (bool === false) {
		headerCenter.style.pointerEvents = 'unset';
		headerBottom.style.pointerEvents = 'unset';
		bd.style.overflow = 'unset';
	}
} 

// Обратная анимация элементов шапки;

const linkItem = document.querySelector('.header__bottom-nav')
	linkItem.classList.add('out');

