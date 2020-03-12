/*HEADER */

let navbar = document.getElementById('nav');
let header = document.getElementById('header');
let links = document.querySelectorAll('.nav-link');


let homeLink = document.getElementById('home-link');
let servicesLink = document.getElementById('services-link');
let portfolioLink = document.getElementById('portfolio-link');
let aboutLink = document.getElementById('about-link');
let contactLink = document.getElementById('contact-link');

let servicesBlock = document.getElementById('services');
let portfolioBlock = document.getElementById('portfolio');
let aboutBlock = document.getElementById('about');
let formBlock = document.getElementById('form');
let homeBlock = document.getElementById('home');



navbar.addEventListener("click", (e) =>{
	e.preventDefault();
	let attr = e.target.getAttribute('id');
	links.forEach(element => element.classList.remove('link-active'));
	e.target.classList.add('link-active');

	switch (attr) {
		case "services-link":
			servicesBlock.scrollIntoView({block: "start", behavior: "smooth"});
			break;
		case "portfolio-link":
			portfolioBlock.scrollIntoView({block: "start", behavior: "smooth"});
			break;
		case "about-link":
			aboutBlock.scrollIntoView({block: "start", behavior: "smooth"});
			break;
		case 'contact-link':
			formBlock.scrollIntoView({block: "start", behavior: "smooth"});
			break;
		case 'home-link':
			homeBlock.scrollIntoView({block: "start", behavior: "smooth"});
			
	}
});


window.addEventListener('scroll', () =>{
	switch (true) {
		case window.scrollY > 100:
				header.classList.add('header-sticky');
				break;
		case window.scrollY < 100:
				header.classList.remove('header-sticky');
				break;
}
});

/*CAROUSEL*/

let items = document.querySelectorAll('.slider-container');
let currentItem = 0;
let isEnable = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnable = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n-1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
}

function minusSlide () {
    if (isEnable) {
        previousItem(currentItem);
    }
}

function plusSlide () {
    if (isEnable) {
        nextItem(currentItem);
    }
}


let prev = document.getElementById('prev');
let next = document.getElementById('next')

prev.addEventListener('click', minusSlide);
next.addEventListener('click', plusSlide);

/*OFF MOBILE*/
let firstSlide = document.querySelector('.block1');
let secondSlide = document.querySelector('.block2');

function slideAction(e) {
	e.target.nextElementSibling.classList.toggle('background-off');
}

firstSlide.addEventListener('click', slideAction);
secondSlide.addEventListener('click', slideAction);

