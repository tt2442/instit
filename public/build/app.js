(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patch_patch_crud_js_alias_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patch/patch_crud/js/alias.js */ "./patch/patch_crud/js/alias.js");
/* harmony import */ var _patch_patch_crud_js_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patch/patch_crud/js/upload */ "./patch/patch_crud/js/upload.js");
/* harmony import */ var _patch_patch_crud_js_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patch_patch_crud_js_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_10__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
// import 'bootstrap';



$(document).ready(function () {
  inputmask__WEBPACK_IMPORTED_MODULE_4___default()().mask(document.querySelectorAll("input"));
});


__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");




 // start the Stimulus application


$('[data-toggle="popover-hover"]').on('click', function () {
  var popup = this;
  setTimeout(function () {
    $(popup).popover('hide');
  }, 5000);
}).popover({
  html: true,
  trigger: 'click',
  placement: 'bottom',
  content: function content() {
    return '';
  }
});
$("html").on("mouseup", function (e) {
  var l = $(e.target);

  if (l[0].className.indexOf("popover") == -1) {
    $(".popover").each(function () {
      $(this).popover("hide");
    });
  }
});
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
  owl.owlCarousel(); // Go to the next item

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  }); // Go to the previous item

  $('.customPrevBtn').click(function () {
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
  });
});
$(function () {
  $(document).click(function (event) {
    $('.collapse-menu').collapse('hide');
  });
});

/***/ }),

/***/ "./patch/patch_crud/js/alias.js":
/*!**************************************!*\
  !*** ./patch/patch_crud/js/alias.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

 //dès qu'un éléménet est inséré on relance input mask

$(document).bind('DOMNodeInserted', function (e) {
  inputmask__WEBPACK_IMPORTED_MODULE_1___default()().mask(document.querySelectorAll("input"));
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'texte_propre': {
    regex: "^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'.-]+$)",
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'texte_numeric_propre': {
    regex: "^([0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'.-]+$)",
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'code_postal': {
    mask: "99 999",
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'adeli': {
    mask: "9999999999",
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'siret': {
    mask: "9999999999",
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'prix': {
    alias: 'numeric',
    digits: 2,
    placeholder: '',
    rightAlign: false
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'metre': {
    alias: 'numeric',
    autoGroup: true,
    digits: 2,
    placeholder: '',
    rightAlign: false,
    greedy: false,
    allowMinus: false
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'centimetre': {
    alias: 'metre'
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'phonefr': {
    mask: '(+99|9)9.99.99.99.99',
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'secu': {
    //regex: '^([1-3]) ?([0-9]{2}) ?([0-9]|[2-35-9][0-9]|[14][0-2]) ?(0[1-9]|[1-8][0-9]|9[0-57-9]|2[ab])[\s\.\-]?(00[1-9]|0[1-9][0-9]|[1-8][0-9]{2}|9[0-8][0-9]|990) ?([0-9]{3}) ?([0-8][0-9]|9[0-7])$',
    mask: "999999999999999",
    placeholder: ''
  }
});
inputmask__WEBPACK_IMPORTED_MODULE_1___default().extendAliases({
  'km': {
    alias: 'numeric',
    autoGroup: true,
    digits: 2,
    placeholder: '',
    rightAlign: false,
    greedy: false,
    allowMinus: false
  }
});

/***/ }),

/***/ "./patch/patch_crud/js/upload.js":
/*!***************************************!*\
  !*** ./patch/patch_crud/js/upload.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

var Sname;
var nombre;
execute(); //relance si ajout de files

$(document).bind('DOMNodeInserted', function (e) {
  execute();
}); // //si c'est une collection
// if ($('#' + Sname + 'url').length != 0) {
//     $(document).ready(function () {
//         nombre = $('input[type="file"]').length;
//         if ($('#' + Sname + 'url').length != 0) execute()
//     });
//     $('form').submit(function (e) {
//         e.preventDefault();
//         $('input[type="file"]').each(function () {
//             $(this).parent().remove()
//         });
//         this.submit();
//     })
// }
// else {
//     $('input[type="file"]').on("change", function (e) {
//         $(e.target).next().text(e.target.files[0].name)
//     })
// }

function execute() {
  $('input[type="file"]').each(function (index, element) {
    if (!$(element).hasClass('onchange')) {
      //on vérifie que l'on a pas mis un onchange
      $(element).addClass("onchange"); // on, ajoute une classe

      id = $(element).attr('id');
      url = id.substr(0, id.length - 8) + '_url';
      if ($('#' + url).val()) $(element).parent().append('<span class="exvaleur">' + $('#' + url).val() + '</span>'); //fonctionne que pour la collection

      $(element).on("change", function (e) {
        Sname = this.id.substr(0, this.id.lastIndexOf('_')) + '_';
        var file = $(this)[0].files[0];
        var upload = new Upload(file);
        var barre = $(this).next();
        barre.attr("aria-valuenow", 0); //barre.width('0%');

        barre.text('Envoyé (0%)');
        barre.addClass('progress-bar-animated');
        barre.addClass('bg-info');
        barre.removeClass('bg-warning');
        barre.removeClass('bg-success');
        barre.removeClass('bg-ended');
        upload.doUpload($(this));
      });
    }
  });
}

var Upload = function Upload(file) {
  this.file = file;
};

Upload.prototype.getType = function () {
  return this.file.type;
};

Upload.prototype.getObjet = function () {
  return this.objet;
};

Upload.prototype.setObjet = function (e) {
  this.objet = e;
};

Upload.prototype.getSize = function () {
  return this.file.size;
};

Upload.prototype.getName = function () {
  return this.file.name;
};

Upload.prototype.doUpload = function (e) {
  Upload.prototype.setObjet(e);
  var that = this;
  var formData = new FormData(); // add assoc key values, this will be posts values

  formData.append("file", this.file, this.getName());
  formData.append("token", $('#token').val());
  var bar = Upload.prototype.getObjet().attr('id');
  directory = bar.substr(0, bar.indexOf('_'));
  formData.append("directory", directory);
  var reader = new FileReader();
  reader.readAsDataURL(this.file);

  reader.onload = function (e) {
    Upload.prototype.getObjet().attr('base64', reader.result);
  };

  $.ajax({
    type: "POST",
    url: "/upload",
    xhr: function xhr() {
      var myXhr = $.ajaxSettings.xhr();

      if (myXhr.upload) {
        myXhr.upload.addEventListener('progress', that.progressHandling, false);
      }

      return myXhr;
    },
    success: function success(data) {
      //console.log(data)
      var retour = JSON.parse(data);
      var barre = Upload.prototype.getObjet().next();
      Upload.prototype.getObjet().attr('data-tmp', retour.tmp_name);
      barre.removeClass('progress-bar-animated');
      barre.removeClass('bg-info');
      barre.removeClass('bg-warning');
      barre.addClass('bg-success');
      barre.text(retour.name);
      $('#' + Sname + 'url').val(JSON.stringify(retour));
      setTimeout(function () {
        barre.removeClass('bg-success');
        barre.addClass('bg-ended');
      }, 1000);
    },
    error: function error(_error) {
      //console.log(error)
      var barre = Upload.prototype.getObjet().next();
      barre.removeClass('progress-bar-animated');
      barre.text('Erreur dans l\'envoie');
      barre.removeClass('bg-info');
      barre.removeClass('bg-success');
      barre.addClass('bg-warning');
    },
    async: true,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    timeout: 60000
  });
};

Upload.prototype.progressHandling = function () {
  var percent = 0;
  var position = event.loaded || event.position;
  var total = event.total;

  if (event.lengthComputable) {
    percent = Math.ceil(position / total * 100);
  }

  var barre = Upload.prototype.getObjet().next();
  barre.show();
  barre.attr("aria-valuenow", percent.toFixed(0)); //barre.width(percent.toFixed(0) + '%');

  barre.text('Envoyé (' + percent.toFixed(2) + '%)');
};

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-9d6fdc"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL3BhdGNoL3BhdGNoX2NydWQvanMvYWxpYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0Y2gvcGF0Y2hfY3J1ZC9qcy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIklucHV0bWFzayIsIm1hc2siLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVxdWlyZSIsIm9uIiwicG9wdXAiLCJzZXRUaW1lb3V0IiwicG9wb3ZlciIsImh0bWwiLCJ0cmlnZ2VyIiwicGxhY2VtZW50IiwiY29udGVudCIsImUiLCJsIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImVhY2giLCJvd2xDYXJvdXNlbCIsImNlbnRlciIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmUiLCJvd2wiLCJjbGljayIsImV2ZW50IiwiY29sbGFwc2UiLCJiaW5kIiwicmVnZXgiLCJwbGFjZWhvbGRlciIsImFsaWFzIiwiZGlnaXRzIiwicmlnaHRBbGlnbiIsImF1dG9Hcm91cCIsImdyZWVkeSIsImFsbG93TWludXMiLCJTbmFtZSIsIm5vbWJyZSIsImV4ZWN1dGUiLCJpbmRleCIsImVsZW1lbnQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaWQiLCJhdHRyIiwidXJsIiwic3Vic3RyIiwibGVuZ3RoIiwidmFsIiwicGFyZW50IiwiYXBwZW5kIiwibGFzdEluZGV4T2YiLCJmaWxlIiwiZmlsZXMiLCJ1cGxvYWQiLCJVcGxvYWQiLCJiYXJyZSIsIm5leHQiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCJkb1VwbG9hZCIsInByb3RvdHlwZSIsImdldFR5cGUiLCJ0eXBlIiwiZ2V0T2JqZXQiLCJvYmpldCIsInNldE9iamV0IiwiZ2V0U2l6ZSIsInNpemUiLCJnZXROYW1lIiwibmFtZSIsInRoYXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYmFyIiwiZGlyZWN0b3J5IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJhamF4IiwieGhyIiwibXlYaHIiLCJhamF4U2V0dGluZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZ3Jlc3NIYW5kbGluZyIsInN1Y2Nlc3MiLCJkYXRhIiwicmV0b3VyIiwiSlNPTiIsInBhcnNlIiwidG1wX25hbWUiLCJzdHJpbmdpZnkiLCJlcnJvciIsImFzeW5jIiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwidGltZW91dCIsInBlcmNlbnQiLCJwb3NpdGlvbiIsImxvYWRlZCIsInRvdGFsIiwibGVuZ3RoQ29tcHV0YWJsZSIsIk1hdGgiLCJjZWlsIiwic2hvdyIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFtQ0EsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQUVDLGtEQUFTLEdBQUdDLElBQVosQ0FBaUJILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBakI7QUFBdUQsQ0FBdkY7QUFDbkM7O0FBQ0FDLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBO0FBR0FOLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DTyxFQUFuQyxDQUFzQyxPQUF0QyxFQUErQyxZQUFZO0FBQ3ZELE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0FDLFlBQVUsQ0FBQyxZQUFZO0FBQUVULEtBQUMsQ0FBQ1EsS0FBRCxDQUFELENBQVNFLE9BQVQsQ0FBaUIsTUFBakI7QUFBMkIsR0FBMUMsRUFBNEMsSUFBNUMsQ0FBVjtBQUNILENBSEQsRUFHR0EsT0FI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NUIsRUFBWjtBQUNBRCxPQUFLLENBQUNtRCxJQUFOO0FBQ0FuRCxPQUFLLENBQUNaLElBQU4sQ0FBVyxlQUFYLEVBQTRCd0QsT0FBTyxDQUFDUSxPQUFSLENBQWdCLENBQWhCLENBQTVCLEVBVDRDLENBVTVDOztBQUNBcEQsT0FBSyxDQUFDRSxJQUFOLENBQVcsYUFBYTBDLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQixDQUFoQixDQUFiLEdBQWtDLElBQTdDO0FBQ0gsQ0FaRCxDOzs7Ozs7Ozs7Ozs7QUNwSkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIGltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiOyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7IElucHV0bWFzaygpLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTsgfSlcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUnO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcbmltcG9ydCAnLi4vcGF0Y2gvcGF0Y2hfY3J1ZC9qcy9hbGlhcy5qcyc7XG5pbXBvcnQgJy4uL3BhdGNoL3BhdGNoX2NydWQvanMvdXBsb2FkJztcbmltcG9ydCAnb3dsLmNhcm91c2VsL2Rpc3QvYXNzZXRzL293bC5jYXJvdXNlbC5jc3MnO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluXCI7XG5cblxuJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci1ob3ZlclwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9wdXAgPSB0aGlzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICQocG9wdXApLnBvcG92ZXIoJ2hpZGUnKTsgfSwgNTAwMCk7XG59KS5wb3BvdmVyKHsgaHRtbDogdHJ1ZSwgdHJpZ2dlcjogJ2NsaWNrJywgcGxhY2VtZW50OiAnYm90dG9tJywgY29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH0gfSk7ICQoXCJodG1sXCIpLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZSkgeyB2YXIgbCA9ICQoZS50YXJnZXQpOyBpZiAobFswXS5jbGFzc05hbWUuaW5kZXhPZihcInBvcG92ZXJcIikgPT0gLTEpIHsgJChcIi5wb3BvdmVyXCIpLmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLnBvcG92ZXIoXCJoaWRlXCIpOyB9KTsgfSB9KTtcblxuXG5cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgY2VudGVyOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBvd2wgPSAkKCcub3dsLWNhcm91c2VsJyk7XG4gICAgb3dsLm93bENhcm91c2VsKCk7XG4gICAgLy8gR28gdG8gdGhlIG5leHQgaXRlbVxuICAgICQoJy5jdXN0b21OZXh0QnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBvd2wudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICB9KVxuICAgIC8vIEdvIHRvIHRoZSBwcmV2aW91cyBpdGVtXG4gICAgJCgnLmN1c3RvbVByZXZCdG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBhcmFtZXRlcnMgaGFzIHRvIGJlIGluIHNxdWFyZSBicmFja2V0ICdbXSdcbiAgICAgICAgb3dsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgfSlcbn0pO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJCgnLmNvbGxhcHNlLW1lbnUnKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgIH0pO1xufSk7IiwiaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XG5cbi8vZMOocyBxdSd1biDDqWzDqW3DqW5ldCBlc3QgaW5zw6lyw6kgb24gcmVsYW5jZSBpbnB1dCBtYXNrXG4kKGRvY3VtZW50KS5iaW5kKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgIElucHV0bWFzaygpLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbn0pO1xuXG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICd0ZXh0ZV9wcm9wcmUnOiB7XG4gICAgICAgIHJlZ2V4OiBcIl4oW2EtekEtWsOgw6HDosOkw6PDpcSFxI3Eh8SZw6jDqcOqw6vEl8Svw6zDrcOuw6/FgsWEw7LDs8O0w7bDtcO4w7nDusO7w7zFs8Wrw7/DvcW8xbrDscOnxI3FocW+w4DDgcOCw4TDg8OFxITEhsSMxJbEmMOIw4nDisOLw4zDjcOOw4/ErsWBxYPDksOTw5TDlsOVw5jDmcOaw5vDnMWyxarFuMOdxbvFucORw5/Dh8WSw4bEjMWgxb3iiILDsCAsJy4tXSskKVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3RleHRlX251bWVyaWNfcHJvcHJlJzoge1xuICAgICAgICByZWdleDogXCJeKFswLTlhLXpBLVrDoMOhw6LDpMOjw6XEhcSNxIfEmcOow6nDqsOrxJfEr8Osw63DrsOvxYLFhMOyw7PDtMO2w7XDuMO5w7rDu8O8xbPFq8O/w73FvMW6w7HDp8SNxaHFvsOAw4HDgsOEw4PDhcSExIbEjMSWxJjDiMOJw4rDi8OMw43DjsOPxK7FgcWDw5LDk8OUw5bDlcOYw5nDmsObw5zFssWqxbjDncW7xbnDkcOfw4fFksOGxIzFoMW94oiCw7AgLCcuLV0rJClcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2NvZGVfcG9zdGFsJzoge1xuICAgICAgICBtYXNrOiBcIjk5IDk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnYWRlbGknOiB7XG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NpcmV0Jzoge1xuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdwcml4Jzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG5cblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdtZXRyZSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnY2VudGltZXRyZSc6IHtcbiAgICAgICAgYWxpYXM6ICdtZXRyZScsXG5cblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdwaG9uZWZyJzoge1xuICAgICAgICBtYXNrOiAnKCs5OXw5KTkuOTkuOTkuOTkuOTknLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NlY3UnOiB7XG4gICAgICAgIC8vcmVnZXg6ICdeKFsxLTNdKSA/KFswLTldezJ9KSA/KFswLTldfFsyLTM1LTldWzAtOV18WzE0XVswLTJdKSA/KDBbMS05XXxbMS04XVswLTldfDlbMC01Ny05XXwyW2FiXSlbXFxzXFwuXFwtXT8oMDBbMS05XXwwWzEtOV1bMC05XXxbMS04XVswLTldezJ9fDlbMC04XVswLTldfDk5MCkgPyhbMC05XXszfSkgPyhbMC04XVswLTldfDlbMC03XSkkJyxcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdrbSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlLFxuICAgIH1cbn0pO1xuXG5cbiIsIlxudmFyIFNuYW1lO1xudmFyIG5vbWJyZTtcblxuZXhlY3V0ZSgpO1xuXG4vL3JlbGFuY2Ugc2kgYWpvdXQgZGUgZmlsZXNcbiQoZG9jdW1lbnQpLmJpbmQoJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZXhlY3V0ZSgpO1xuXG59KVxuXG4vLyAvL3NpIGMnZXN0IHVuZSBjb2xsZWN0aW9uXG4vLyBpZiAoJCgnIycgKyBTbmFtZSArICd1cmwnKS5sZW5ndGggIT0gMCkge1xuLy8gICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgbm9tYnJlID0gJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGg7XG4vLyAgICAgICAgIGlmICgkKCcjJyArIFNuYW1lICsgJ3VybCcpLmxlbmd0aCAhPSAwKSBleGVjdXRlKClcbi8vICAgICB9KTtcblxuLy8gICAgICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKVxuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuLy8gICAgIH0pXG5cblxuLy8gfVxuLy8gZWxzZSB7XG4vLyAgICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICAkKGUudGFyZ2V0KS5uZXh0KCkudGV4dChlLnRhcmdldC5maWxlc1swXS5uYW1lKVxuLy8gICAgIH0pXG4vLyB9XG5cblxuXG5mdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKCdvbmNoYW5nZScpKSB7IC8vb24gdsOpcmlmaWUgcXVlIGwnb24gYSBwYXMgbWlzIHVuIG9uY2hhbmdlXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwib25jaGFuZ2VcIik7Ly8gb24sIGFqb3V0ZSB1bmUgY2xhc3NlXG4gICAgICAgICAgICBpZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKVxuICAgICAgICAgICAgdXJsID0gaWQuc3Vic3RyKDAsIGlkLmxlbmd0aCAtIDgpICsgJ191cmwnXG4gICAgICAgICAgICBpZiAoJCgnIycgKyB1cmwpLnZhbCgpKSAkKGVsZW1lbnQpLnBhcmVudCgpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJleHZhbGV1clwiPicgKyAkKCcjJyArIHVybCkudmFsKCkgKyAnPC9zcGFuPicpIC8vZm9uY3Rpb25uZSBxdWUgcG91ciBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAkKGVsZW1lbnQpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgU25hbWUgPSB0aGlzLmlkLnN1YnN0cigwLCB0aGlzLmlkLmxhc3RJbmRleE9mKCdfJykpICsgJ18nO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gJCh0aGlzKVswXS5maWxlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgdXBsb2FkID0gbmV3IFVwbG9hZChmaWxlKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFycmUgPSAkKHRoaXMpLm5leHQoKVxuICAgICAgICAgICAgICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIDApO1xuICAgICAgICAgICAgICAgIC8vYmFycmUud2lkdGgoJzAlJyk7XG4gICAgICAgICAgICAgICAgYmFycmUudGV4dCgnRW52b3nDqSAoMCUpJyk7XG4gICAgICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1lbmRlZCcpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5kb1VwbG9hZCgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG52YXIgVXBsb2FkID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUudHlwZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldE9iamV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamV0O1xufTtcblVwbG9hZC5wcm90b3R5cGUuc2V0T2JqZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMub2JqZXQgPSBlO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmRvVXBsb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBVcGxvYWQucHJvdG90eXBlLnNldE9iamV0KGUpXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy8gYWRkIGFzc29jIGtleSB2YWx1ZXMsIHRoaXMgd2lsbCBiZSBwb3N0cyB2YWx1ZXNcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuZmlsZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsICQoJyN0b2tlbicpLnZhbCgpKTtcbiAgICB2YXIgYmFyID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2lkJylcbiAgICBkaXJlY3RvcnkgPSBiYXIuc3Vic3RyKDAsIGJhci5pbmRleE9mKCdfJykpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRpcmVjdG9yeVwiLCBkaXJlY3RvcnkpO1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdiYXNlNjQnLCByZWFkZXIucmVzdWx0KVxuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL3VwbG9hZFwiLFxuICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVhociA9ICQuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgICAgICAgaWYgKG15WGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIG15WGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHRoYXQucHJvZ3Jlc3NIYW5kbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG15WGhyO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgdmFyIHJldG91ciA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdkYXRhLXRtcCcsIHJldG91ci50bXBfbmFtZSlcblxuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgYmFycmUudGV4dChyZXRvdXIubmFtZSk7XG4gICAgICAgICAgICAkKCcjJyArIFNuYW1lICsgJ3VybCcpLnZhbChKU09OLnN0cmluZ2lmeShyZXRvdXIpKVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctZW5kZWQnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBiYXJyZS50ZXh0KCdFcnJldXIgZGFucyBsXFwnZW52b2llJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogNjAwMDBcbiAgICB9KTtcbn07XG5cblVwbG9hZC5wcm90b3R5cGUucHJvZ3Jlc3NIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGVyY2VudCA9IDA7XG4gICAgdmFyIHBvc2l0aW9uID0gZXZlbnQubG9hZGVkIHx8IGV2ZW50LnBvc2l0aW9uO1xuICAgIHZhciB0b3RhbCA9IGV2ZW50LnRvdGFsO1xuICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgIHBlcmNlbnQgPSBNYXRoLmNlaWwocG9zaXRpb24gLyB0b3RhbCAqIDEwMCk7XG4gICAgfVxuICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICBiYXJyZS5zaG93KCk7XG4gICAgYmFycmUuYXR0cihcImFyaWEtdmFsdWVub3dcIiwgcGVyY2VudC50b0ZpeGVkKDApKTtcbiAgICAvL2JhcnJlLndpZHRoKHBlcmNlbnQudG9GaXhlZCgwKSArICclJyk7XG4gICAgYmFycmUudGV4dCgnRW52b3nDqSAoJyArIHBlcmNlbnQudG9GaXhlZCgyKSArICclKScpO1xufTtcblxuXG5cblxuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9