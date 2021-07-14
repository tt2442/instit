const $ = require("jquery");
global.$ = global.jQuery = $;
import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";

//import "./styles/app.scss";

require("@fortawesome/fontawesome-free/css/all.min.css");
require("@fortawesome/fontawesome-free/js/all.js");


// start the Stimulus application
import "./bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './styles/app.scss';
//import Inputmask from "inputmask"; $(document).ready(function () { Inputmask().mask(document.querySelectorAll("input")); })
import './all';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


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
$('.customNextBtn').on('click', function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').on('click', function () {
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

$(document).on('click', function (event) {
    $('.collapse-menu').collapse('hide');
});
$('.collapse-menu').collapse('hide');