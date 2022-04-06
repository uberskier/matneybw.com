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

    let resume = document.querySelector(".resume-Download");
    resume.addEventListener("mouseover", () => {
        document.querySelector(".download").style.backgroundColor="rgba(46, 46, 46, 0.61)";
        document.querySelector(".download").style.transition="all .7s";
    });
    $('.resume-Download').on("mouseleave", () => {
        document.querySelector(".download").style.backgroundColor="rgba(50, 241, 255, 0.61)";
    });

}

function linkBox() {
    let linkBox = document.querySelectorAll(".linkBox-button");

    linkBox[0].addEventListener("mouseover", () => {
        linkBox[0].style.color="rgb(255, 72, 0)";
        linkBox[0].style.transition="all .7s";
    });
    linkBox[1].addEventListener("mouseover", () => {
        linkBox[1].style.color="rgb(255, 72, 0)";
        linkBox[1].style.transition="all .7s";
    });
    linkBox[2].addEventListener("mouseover", () => {
        linkBox[2].style.color="rgb(255, 72, 0)";
        linkBox[2].style.transition="all .7s";
    });
    linkBox[3].addEventListener("mouseover", () => {
        linkBox[3].style.color="rgb(255, 72, 0)";
        linkBox[3].style.transition="all .7s";
    });
    linkBox[4].addEventListener("mouseover", () => {
        linkBox[4].style.color="rgb(255, 72, 0)";
        linkBox[4].style.transition="all .7s";
    });
    
    $('.lb1').on("mouseleave",() => {
        linkBox[0].style.color="white";
    });
    $('.lb2').on("mouseleave",() => {
        linkBox[1].style.color="white";
    });
    $('.lb3').on("mouseleave",() => {
        linkBox[2].style.color="white";
    });
    $('.lb4').on("mouseleave",() => {
        linkBox[3].style.color="white";
    });
    $('.lb5').on("mouseleave",() => {
        linkBox[4].style.color="white";
    });

}

function emailHover() {
    let email = document.querySelectorAll(".email");
    email[0].addEventListener("mouseover", () => {
        email[0].style.color = "rgba(70, 70, 70, 0.61)";
        email[0].style.transition = "all .7s";
    });
    email[1].addEventListener("mouseover", () => {
        email[1].style.color = "rgba(70, 70, 70, 0.61)";
        email[1].style.transition = "all .7s";
    });
    $("#e1").on("mouseleave",() => {
        email[0].style.color="rgba(50, 241, 255, 0.61)";
    });
    $("#e2").on("mouseleave",() => {
        email[1].style.color="rgba(50, 241, 255, 0.61)";
    });
}

function closeOverlay() {
    let close = document.querySelector(".close");
    close.addEventListener("click", () => {
        oneOff();
        twoOff();
        threeOff();
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
    let activities = document.querySelector("#activities");
    let contact = document.querySelector("#contact");
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

    if(activities.getBoundingClientRect().top <= 300){
        for (let obj of li) {
            obj.classList.remove("current");
            nav.style.transition="all .5s";
        }
        document.querySelector('.nav-activities').classList.add("current");
    }
    if(contact.getBoundingClientRect().top <= 300){
        for (let obj of li) {
            obj.classList.remove("current");
            nav.style.transition="all .5s";
        }
        document.querySelector('.nav-contact').classList.add("current");
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
    hover();
    linkBox();
    closeOverlay();
    emailHover();
});