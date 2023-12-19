"use srtict";
//Ширина блоков в слайдере;
const lineSliderVisible = document.querySelector('.slider__line-visible');
const widthElems = document.querySelectorAll('.element-img');
const sliderChoise = document.querySelector('.slider-choise');
const buttonNumber = document.querySelector('.choise-num1');
const buttonNumberTwo = document.querySelector('.choise-num2');

function returnPosition() {
		countTranslate = 0;
		checkCountBt(countTranslate, null)
		lineSliderVisible.style.transform = `translate3d(${countTranslate}px, 0, 0)`;
}

const buttonBlock = document.querySelector('.slider-buttons');
const leftBt = document.querySelector('.left-bt');
const rightBt = document.querySelector('.right-bt');
const widthWindow = document.documentElement.clientWidth;

let numberOfSliders = 4; //Количество элементов в слайдере;


let countTranslate = 0; //Позиция прокрутки translate;
window.addEventListener('resize', widthElem)



sliderChoise.onclick = function(event) {
	if (event.target) {
		returnPosition();
		if (event.target.closest('.choise-num1')) {
			numberOfSliders = 3;
		}
		if (event.target.closest('.choise-num2')) {
			numberOfSliders = 5;
		}
	}
}
sliderChoise.addEventListener('click', widthElem);


(function widthElem() {
	(widthWindow < 680) ? numberOfSliders = 2 : '';
	(widthWindow < 430) ? numberOfSliders = 1 : '';
	const marginElem = getComputedStyle(widthElems[0]).marginRight;
	const sliderWrapHidden = document.documentElement.clientWidth;
	for (let i = 0; i < widthElems.length; i++) {
		widthElems[i].style.width = `${sliderWrapHidden / numberOfSliders - parseInt(marginElem)}px`;
	}
	returnPosition();
})();

//Подключение кнопок слайдера;

buttonBlock.addEventListener('click', switcherSlider);

function switcherSlider(event) {

	if (event.target.closest('.slider-buttons')) {
			const marginElem = getComputedStyle(widthElems[0]).marginRight;
			let quantityWidthElem = (numberOfSliders == 3) ? 3 : 2; //Сколько слайдеров прокручивать за нажатие;
			if (numberOfSliders == 1) quantityWidthElem = 1
			
			let widthElemsShift = document.querySelector('.element-img').offsetWidth * quantityWidthElem + (parseInt(marginElem) * quantityWidthElem);
			
		if (event.target.closest('.left-bt')) {
			countTranslate += widthElemsShift;
			(countTranslate > 0) ? countTranslate = 0 : '';
			lineSliderVisible.style.transform = `translate3d(${countTranslate}px, 0, 0)`;
			checkCountBt(countTranslate, null)
		}

		if (event.target.closest('.right-bt')) {
			countTranslate -= widthElemsShift;
			if (countTranslate < -(lineSliderVisible.offsetWidth - (widthElems[0].offsetWidth * numberOfSliders))) {
				var result = countTranslate = -(lineSliderVisible.offsetWidth - (widthElems[0].offsetWidth * numberOfSliders))
			}
			lineSliderVisible.style.transform = `translate3d(${countTranslate}px, 0, 0)`;
			checkCountBt(countTranslate, result)
		}	
	}
}

//Затухание(диактивация) кнопок при крайних положениях слайдера;

function checkCountBt(countTr, maxWidth) {
	//Диактивация кнопки;
	(countTr == 0) ? leftBt.classList.add('diactive-bt') : leftBt.classList.remove('diactive-bt');
	(countTr == maxWidth) ? rightBt.classList.add('diactive-bt') : rightBt.classList.remove('diactive-bt');
}	

sliderChoise.addEventListener('click', choiseInxtinct);

function choiseInxtinct(event) {
	if (event.target.closest('.choise-num1')) {
		buttonNumber.classList.add('diactive-bt-ch');
		buttonNumberTwo.classList.remove('diactive-bt-ch');
	}
	if (event.target.closest('.choise-num2')) {
		buttonNumberTwo.classList.add('diactive-bt-ch');
		buttonNumber.classList.remove('diactive-bt-ch');

	}
}

