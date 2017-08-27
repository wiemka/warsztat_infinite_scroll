"use strict";

$(function () {
    $(window).scroll(function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("test");
        }
    });
});


//scrollY - zwraca tyle pix ile przescrollowaliśmy
//innerheight - zwraca wysokość tak jak jest okno
