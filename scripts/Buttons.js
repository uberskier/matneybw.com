"use strict";
function dropDown() {
    let button = document.querySelector('.dropbtn');
    let drop = document.querySelector('.dropdown-content');
    button.addEventListener('click', () => {
        button.classList.add("active");
        drop.style.display="block";
        $('.dropdown-content').on('mouseleave', () => {
            button.classList.remove("active");
            drop.style.display="none";
        });
    });
}

$(function init() {
    dropDown();

});