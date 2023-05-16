const lang__btn = document.querySelector('.lang__selected.selected');
const lang__dropdown = document.querySelector('.lang__dropdown');

lang__dropdown.style.display = "none";
lang__btn.addEventListener("click", () => {
    if (lang__dropdown.style.display == "none") {
        lang__dropdown.style.display = "flex";
    }else{
        lang__dropdown.style.display = "none";
    }
});

const hiddenElements = document.querySelectorAll(".about__content");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const nav__btn = document.querySelector('.hamburger');
const nav__close__btn = document.querySelector('.x-mark');
const nav__BG = document.querySelector('.nav__BG');
const nav = document.querySelector('.nav__conteiner');
const body = document.querySelector('.main');

nav.style.display = "none";
nav__btn.addEventListener("click", () => {
    if (nav.style.display == "none") {
        body.classList.add('scrollOff');
        nav.style.display = "flex";
        nav__BG.style.display = "flex";
        nav.addEventListener("animationend", navOpen);
    }
});

function navOpen() {
    nav__close__btn.addEventListener("click", () => {
        if (nav.style.display == "flex") {
            nav.classList.add('close');
            nav__BG.classList.add('close');
            nav.addEventListener("animationend", navClose);
            nav__BG.addEventListener("animationend", fadeOut);
        }
    });
    nav__BG.addEventListener("click", () => {
        if (nav.style.display == "flex") {
            nav.classList.add('close');
            nav__BG.classList.add('close');
            nav.addEventListener("animationend", navClose);
            nav__BG.addEventListener("animationend", fadeOut);
        }
    });
};

function navClose() {
    nav.style.display = "none";
    nav.classList.remove('close');
    body.classList.remove('scrollOff');
    nav.removeEventListener("animationend", navClose);
};

function fadeOut() {
    nav__BG.style.display = "none";
    nav__BG.classList.remove('close');
    nav__BG.removeEventListener("animationend", fadeOut);
};

const sec__btn = document.getElementById('#security');
const sec__content = document.getElementById('#security__content');

sec__content.style.display = "none";
sec__btn.addEventListener('click', () => {
    if (sec__content.style.display == 'none') {
        sec__content.style.display = 'block';
    }
});