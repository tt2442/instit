/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import './styles/app.scss';
import Inputmask from "inputmask"; $(document).ready(function () { Inputmask().mask(document.querySelectorAll("input")); })
import '@fortawesome/fontawesome-free';
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
import '../patch/patch_crud/js/alias.js';
import '../patch/patch_crud/js/upload';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
// start the Stimulus application

import "bootstrap/dist/js/bootstrap.bundle.min";


$('[data-toggle="popover-hover"]').on('click', function () {
    var popup = this
    setTimeout(function () { $(popup).popover('hide'); }, 5000);
}).popover({ html: true, trigger: 'click', placement: 'bottom', content: function () { return ''; } }); $("html").on("mouseup", function (e) { var l = $(e.target); if (l[0].className.indexOf("popover") == -1) { $(".popover").each(function () { $(this).popover("hide"); }); } });




$(function () {
    $('.owl-carousel').owlCarousel({
        center: false,
        items: 4,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 4
            }
        }
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
});

$(function () {
    $(document).click(function (event) {
        $('.collapse-menu').collapse('hide');
    });
});