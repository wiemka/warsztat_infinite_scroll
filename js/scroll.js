"use strict";

$(function () {
    $(window).scroll(function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users",
                dataType: "json",
                success: function (response) {
                    console.log(response);
                },
                onerror: function (error) {

                }
            });
        }
    });
});


//scrollY - zwraca tyle pix ile przescrollowaliśmy
//innerheight - zwraca wysokość tak jak jest okno
