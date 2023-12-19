"use strict";

//Открытие и блокировка меню в одном положении;

const headerButtonCatalog = document.querySelector(".header__catalog");
const headerDropMenu = document.querySelector(".header__catalog-drop");
const hiddenPopUp = document.querySelector(".drop-tel");

headerButtonCatalog.addEventListener("click", openMenuCatalog);
document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        headerDropMenu.classList.remove("active");
        toFixMenu();
    }
});
const body = document.body;

const headerSearcPopUpClose = document.querySelector(".header__search-popup");

function openMenuCatalog(event) {
    if (event.target.closest(".header__catalog")) {
        headerDropMenu.classList.toggle("active");
        const navElems = document.querySelectorAll(".brands-drop");
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].className.endsWith("visible")
                ? navElems[i].classList.remove("visible")
                : null;
        }
        if (headerDropMenu.classList.contains("active")) {
            headerSearcPopUpClose.classList.remove("active-searhHeader");
        }
    }
}

function toFixMenu() {
    if (headerDropMenu.classList.contains("active")) {
        body.style.overflow = "hidden";
        hiddenPopUp.style.visibility = "hidden";
    } else {
        body.style.overflow = "unset";
        hiddenPopUp.style.visibility = "unset";
    }
}

//Закрытие меню вне окна;

const mainElementMenu = document.querySelector(".header__catalog-wrap");
const elemsSubMenu = document.getElementsByClassName(
    "header__menu-drop-element"
);

document.addEventListener("click", closeMenuSide);
let eventType;

function closeMenuSide(event) {
    if (
        !event.target.closest(".header__center") &&
        headerDropMenu.classList.contains("active") &&
        !event.target.closest(".header__catalog-wrap")
    ) {
        headerDropMenu.classList.remove("active");
        body.style.overflow = "unset";
    }
    if (eventType == "mousemove") {
        if (!event.target.closest(".header__menu-drop-element")) {
            for (let i = 0; i < elemsSubMenu.length; i++) {
                elemsSubMenu[i].classList.remove("active");
            }
        }
    }
}

//Открытие подменю;

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    eventType = "click";
} else {
    eventType = "mousemove";
}

mainElementMenu.addEventListener(eventType, openSubMenu);

function openSubMenu(event) {
    if (event.target.className.startsWith("catalog")) {
        const target = event.target.className.slice(-1);

        elemsSubMenu[target - 1].classList.add("active");
        const nameElem = elemsSubMenu[target - 1];

        if (nameElem.classList.contains("active")) {
            for (let i = 0; i < elemsSubMenu.length; i++) {
                elemsSubMenu[i].classList.remove("active");
            }
            nameElem.classList.add("active");
        }
    }
}
