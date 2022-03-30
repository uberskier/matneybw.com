"use strict";

function currentLi() {
    let li = document.querySelectorAll(".li");
    let a = document.querySelectorAll(".hover");

    li[0].addEventListener('click', () => {
        for (let obj of li) {
            obj.classList.remove("current");
        }
        li[0].classList.add("current");
    });

    li[1].addEventListener('click', () => {
        for (let obj of li) {
            obj.classList.remove("current");
        }
        li[1].classList.add("current");
    });

    a[2].addEventListener('click', () => {
        for (let obj of li) {
            obj.classList.remove("current");
        }
        li[2].classList.add("current");
    });

    a[3].addEventListener('click', () => {
        for (let obj of li) {
            obj.classList.remove("current");
        }
        li[3].classList.add("current");
    });

    a[4].addEventListener('click', () => {
        for (let obj of li) {
            obj.classList.remove("current");
        }
        li[4].classList.add("current");
    });

    li[5].addEventListener('click', () => {
        for (let obj of li) {
            obj.classList.remove("current");
        }
        li[5].classList.add("current");
    });
}

function hover() {
    let links = document.querySelectorAll('i');
    links[0].addEventListener("mouseover", () => {
        links[0].style.color="yellow";
        links[0].style.transition="all .7s";
    });
    links[1].addEventListener("mouseover", () => {
        links[1].style.color="yellow";
        links[1].style.transition="all .7s";
    });
    links[2].addEventListener("mouseover", () => {
        links[2].style.color="yellow";
        links[2].style.transition="all .7s";
    });
    links[3].addEventListener("mouseover", () => {
        links[3].style.color="yellow";
        links[3].style.transition="all .7s";
    });

    $('.fa-github').on("mouseleave",() => {
        links[0].style.color="white";
    });
    $('.fa-linkedin').on("mouseleave",() => {
        links[1].style.color="white";
    });
    $('.fa-envelope').on("mouseleave",() => {
        links[2].style.color="white";
    });
    $('.icon-down-circle').on("mouseleave",() => {
        links[3].style.color="white";
    });
}

function scrolling() {
    let li = document.querySelectorAll(".li");
    window.addEventListener("scroll", () => {
        if (window.scrollY < 180) {
            document.querySelector('.navbar').style.visibility="visible";
            document.querySelector('.navbar').style.opacity="1";
            document.querySelector('.navbar').style.transition="all .5s";
        }
        if (window.scrollY > 180) {
            document.querySelector('.navbar').style.visibility="hidden";
            document.querySelector('.navbar').style.opacity="0";
            document.querySelector('.navbar').style.transition="all .5s";
        }
        if (window.scrollY < 725 && window.scrollY > 180) {
            document.querySelector('.navbar').style.visibility="hidden";
            document.querySelector('.navbar').style.opacity="0";
            document.querySelector('.navbar').style.backgroundColor="transparent";
            document.querySelector('.navbar').style.transition="all .5s";
        }
        if (window.scrollY > 725) {
            document.querySelector('.navbar').style.visibility="visible";
            document.querySelector('.navbar').style.opacity="1";
            document.querySelector('.navbar').style.backgroundColor="rgb(32,32,32)";
            document.querySelector('.navbar').style.transition="all .5s";
        }

    });
}

$(function init() {
    scrolling();
    hover();
});