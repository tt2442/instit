
const $ = require("jquery");
global.$ = global.jQuery = $;

import "bootstrap";
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
import 'owl.carousel/dist/assets/owl.carousel.css';
import './styles/app.scss';
import './all'






import 'owl.carousel';
// start the Stimulus application


$('[data-toggle="tooltip"]').tooltip()



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
    $('.collapse-menu').collapse('hide');
});