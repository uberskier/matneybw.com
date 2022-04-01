"use strict";

function hover() {
    let links = document.querySelectorAll('i');
    links[0].addEventListener("mouseover", () => {
        links[0].style.color="rgb(255, 72, 0)";
        links[0].style.transition="all .7s";
    });
    links[1].addEventListener("mouseover", () => {
        links[1].style.color="rgb(255, 72, 0)";
        links[1].style.transition="all .7s";
    });
    links[2].addEventListener("mouseover", () => {
        links[2].style.color="rgb(255, 72, 0)";
        links[2].style.transition="all .7s";
    });
    links[3].addEventListener("mouseover", () => {
        links[3].style.color="rgb(255, 72, 0)";
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




function fillStart() {
    let h = $(window).height();
    $("#home").css("height", h);
    $(".head").css("margin-top", ((h/100)*15));
    $(".scrolldown").css("margin-top", ((h/100)*25));
}

function fill() {
    window.addEventListener("resize", () => {
        let h = $(window).height();
        $("#home").css("height", h);
        $(".head").css("margin-top", ((h/100)*15));
        $(".scrolldown").css("margin-top", ((h/100)*25));
    });
}

document.onscroll = function() {
    let li = document.querySelectorAll(".li");
    let home = document.querySelector(".head");
    let about = document.querySelector("#about");
    let resume = document.querySelector("#resume");
    let projects = document.querySelector("#projects");
    let nav = document.querySelector('.navbar');
    
    if (home.getBoundingClientRect().top <= 50) {
        nav.style.visibility="hidden";
        nav.style.opacity="0";
        nav.style.transition="all .5s";
    }
    if (home.getBoundingClientRect().top > 50) {
        nav.style.visibility="visible";
        nav.style.opacity="1";
        nav.style.backgroundColor="transparent";
        for (let obj of li) {
            obj.classList.remove("current");
            nav.style.transition="all .5s";
        }
        document.querySelector('.nav-home').classList.add("current");
    }
    if(about.getBoundingClientRect().top <= 0) {
        nav.style.visibility="visible";
        nav.style.opacity="1";
        nav.style.backgroundColor="rgb(42,42,42)";
        for (let obj of li) {
            obj.classList.remove("current");
            nav.style.transition="all .5s";
        }
        document.querySelector('.nav-about').classList.add("current");
    }
    
    if(resume.getBoundingClientRect().top <= 300){
        for (let obj of li) {
            obj.classList.remove("current");
            nav.style.transition="all .5s";
        }
        document.querySelector('.nav-resume').classList.add("current");
    }
    if(projects.getBoundingClientRect().top <= 300){
        for (let obj of li) {
            obj.classList.remove("current");
            nav.style.transition="all .5s";
        }
        document.querySelector('.nav-projects').classList.add("current");
    }


}

function oneOn(){
    document.getElementById("overlayOne").style.display= "block";
}

function oneOff(){
    document.getElementById("overlayOne").style.display= "none";
}

function twoOn(){
    document.getElementById("overlayTwo").style.display= "block";
}

function twoOff(){
    document.getElementById("overlayTwo").style.display= "none";
}

function threeOn(){
    document.getElementById("overlayThree").style.display= "block";
}

function threeOff(){
    document.getElementById("overlayThree").style.display= "none";
}


$(function init() {
    fillStart();
    fill();
    //scrolling();
    hover();
});