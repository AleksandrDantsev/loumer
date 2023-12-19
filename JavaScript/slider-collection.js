
"use strict";

const bannerConteiner = document.querySelector('.image-block');
const bannerInImages = document.querySelectorAll('.image-block');

let counter = 0;

function showSlider() {
	if (counter < bannerInImages.length) {
		bannerInImages[counter].classList.remove('opac0');
	}
	if (counter > 0) {
		bannerInImages[counter - 1].classList.add('opac0');
		if (counter == bannerInImages.length) {
			counter = 0;
			bannerInImages[counter].classList.remove('opac0');
		}
	}
	counter++;
	setTimeout(showSlider, 35000);
}

showSlider()


const registrVisible = document.querySelector('.registration__visible');
const buttonLinkReg = document.querySelector('.text__link-registration-button');
const registrationHidden = document.querySelector('.registration__hidden-block');
const registrationMain = document.querySelector('.registration');

if (window.innerWidth > 651) {
		registrationMain.style.display = 'block';
}
buttonLinkReg.addEventListener('click', function(event) {
	if (event.target.matches('.text__link-registration-button')) {
		registrVisible.classList.add('regshift');
	}
	if (window.innerWidth < 651) {
		registrationMain.style.display = 'block';
		registrationHidden.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center',
        });
	}
})


if (window.innerWidth < 651) {
	registrationHidden.style.overflow = 'unset';
	registrVisible.style.right = 0;
}


