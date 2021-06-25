(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

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
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patch_patch_crud_js_alias_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patch/patch_crud/js/alias.js */ "./patch/patch_crud/js/alias.js");
/* harmony import */ var _patch_patch_crud_js_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patch/patch_crud/js/upload */ "./patch/patch_crud/js/upload.js");
/* harmony import */ var _patch_patch_crud_js_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patch_patch_crud_js_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)




$(document).ready(function () {
  inputmask__WEBPACK_IMPORTED_MODULE_5___default()().mask(document.querySelectorAll("input"));
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

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-7b8ae2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9wYXRjaC9wYXRjaF9jcnVkL2pzL2FsaWFzLmpzIiwid2VicGFjazovLy8uL3BhdGNoL3BhdGNoX2NydWQvanMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiZWxlbWVudCIsInRleHRDb250ZW50IiwiQ29udHJvbGxlciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiSW5wdXRtYXNrIiwibWFzayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXF1aXJlIiwib24iLCJwb3B1cCIsInNldFRpbWVvdXQiLCJwb3BvdmVyIiwiaHRtbCIsInRyaWdnZXIiLCJwbGFjZW1lbnQiLCJjb250ZW50IiwiZSIsImwiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiZWFjaCIsIm93bENhcm91c2VsIiwiY2VudGVyIiwiaXRlbXMiLCJsb29wIiwibWFyZ2luIiwicmVzcG9uc2l2ZSIsIm93bCIsImNsaWNrIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsImJpbmQiLCJyZWdleCIsInBsYWNlaG9sZGVyIiwiYWxpYXMiLCJkaWdpdHMiLCJyaWdodEFsaWduIiwiYXV0b0dyb3VwIiwiZ3JlZWR5IiwiYWxsb3dNaW51cyIsIlNuYW1lIiwibm9tYnJlIiwiZXhlY3V0ZSIsImluZGV4IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImlkIiwiYXR0ciIsInVybCIsInN1YnN0ciIsImxlbmd0aCIsInZhbCIsInBhcmVudCIsImFwcGVuZCIsImxhc3RJbmRleE9mIiwiZmlsZSIsImZpbGVzIiwidXBsb2FkIiwiVXBsb2FkIiwiYmFycmUiLCJuZXh0IiwidGV4dCIsInJlbW92ZUNsYXNzIiwiZG9VcGxvYWQiLCJwcm90b3R5cGUiLCJnZXRUeXBlIiwidHlwZSIsImdldE9iamV0Iiwib2JqZXQiLCJzZXRPYmpldCIsImdldFNpemUiLCJzaXplIiwiZ2V0TmFtZSIsIm5hbWUiLCJ0aGF0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImJhciIsImRpcmVjdG9yeSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0IiwiYWpheCIsInhociIsIm15WGhyIiwiYWpheFNldHRpbmdzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2dyZXNzSGFuZGxpbmciLCJzdWNjZXNzIiwiZGF0YSIsInJldG91ciIsIkpTT04iLCJwYXJzZSIsInRtcF9uYW1lIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJhc3luYyIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInRpbWVvdXQiLCJwZXJjZW50IiwicG9zaXRpb24iLCJldmVudCIsImxvYWRlZCIsInRvdGFsIiwibGVuZ3RoQ29tcHV0YWJsZSIsIk1hdGgiLCJjZWlsIiwic2hvdyIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUVJLG1CQUFVO0FBQ04sV0FBS0EsT0FB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SSxFQUFFaEIsUUF0Q0g7QUF1Q0h3QixTQUFLLEVBQUUsS0F2Q0o7QUF3Q0hDLGVBQVcsRUFBRSxLQXhDVjtBQXlDSEMsZUFBVyxFQUFFLEtBekNWO0FBMENIQyxXQUFPLEVBQUU7QUExQ04sR0FBUDtBQTRDSCxDQTdERDs7QUErREE1QyxNQUFNLENBQUNNLFNBQVAsQ0FBaUJ5QixnQkFBakIsR0FBb0MsWUFBWTtBQUM1QyxNQUFJYyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxNQUFOLElBQWdCRCxLQUFLLENBQUNELFFBQXJDO0FBQ0EsTUFBSUcsS0FBSyxHQUFHRixLQUFLLENBQUNFLEtBQWxCOztBQUNBLE1BQUlGLEtBQUssQ0FBQ0csZ0JBQVYsRUFBNEI7QUFDeEJMLFdBQU8sR0FBR00sSUFBSSxDQUFDQyxJQUFMLENBQVVOLFFBQVEsR0FBR0csS0FBWCxHQUFtQixHQUE3QixDQUFWO0FBQ0g7O0FBQ0QsTUFBSWhELEtBQUssR0FBR0QsTUFBTSxDQUFDTSxTQUFQLENBQWlCRyxRQUFqQixHQUE0QlAsSUFBNUIsRUFBWjtBQUNBRCxPQUFLLENBQUNvRCxJQUFOO0FBQ0FwRCxPQUFLLENBQUNaLElBQU4sQ0FBVyxlQUFYLEVBQTRCd0QsT0FBTyxDQUFDUyxPQUFSLENBQWdCLENBQWhCLENBQTVCLEVBVDRDLENBVTVDOztBQUNBckQsT0FBSyxDQUFDRSxJQUFOLENBQVcsYUFBYTBDLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQixDQUFoQixDQUFiLEdBQWtDLElBQTdDO0FBQ0gsQ0FaRCxDOzs7Ozs7Ozs7Ozs7QUNwSkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7ICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHsgSW5wdXRtYXNrKCkubWFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpOyB9KVxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZSc7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xuaW1wb3J0ICcuLi9wYXRjaC9wYXRjaF9jcnVkL2pzL2FsaWFzLmpzJztcbmltcG9ydCAnLi4vcGF0Y2gvcGF0Y2hfY3J1ZC9qcy91cGxvYWQnO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwvZGlzdC9hc3NldHMvb3dsLmNhcm91c2VsLmNzcyc7XG5pbXBvcnQgJ293bC5jYXJvdXNlbCc7XG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW5cIjtcblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXItaG92ZXJcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvcHVwID0gdGhpc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAkKHBvcHVwKS5wb3BvdmVyKCdoaWRlJyk7IH0sIDUwMDApO1xufSkucG9wb3Zlcih7IGh0bWw6IHRydWUsIHRyaWdnZXI6ICdjbGljaycsIHBsYWNlbWVudDogJ2JvdHRvbScsIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9IH0pOyAkKFwiaHRtbFwiKS5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHsgdmFyIGwgPSAkKGUudGFyZ2V0KTsgaWYgKGxbMF0uY2xhc3NOYW1lLmluZGV4T2YoXCJwb3BvdmVyXCIpID09IC0xKSB7ICQoXCIucG9wb3ZlclwiKS5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5wb3BvdmVyKFwiaGlkZVwiKTsgfSk7IH0gfSk7XG5cblxuXG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgb3dsID0gJCgnLm93bC1jYXJvdXNlbCcpO1xuICAgIG93bC5vd2xDYXJvdXNlbCgpO1xuICAgIC8vIEdvIHRvIHRoZSBuZXh0IGl0ZW1cbiAgICAkKCcuY3VzdG9tTmV4dEJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3dsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgfSlcbiAgICAvLyBHbyB0byB0aGUgcHJldmlvdXMgaXRlbVxuICAgICQoJy5jdXN0b21QcmV2QnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQYXJhbWV0ZXJzIGhhcyB0byBiZSBpbiBzcXVhcmUgYnJhY2tldCAnW10nXG4gICAgICAgIG93bC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgIH0pXG59KTtcblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XG5cbi8vZMOocyBxdSd1biDDqWzDqW3DqW5ldCBlc3QgaW5zw6lyw6kgb24gcmVsYW5jZSBpbnB1dCBtYXNrXG4kKGRvY3VtZW50KS5iaW5kKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgIElucHV0bWFzaygpLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbn0pO1xuXG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICd0ZXh0ZV9wcm9wcmUnOiB7XG4gICAgICAgIHJlZ2V4OiBcIl4oW2EtekEtWsOgw6HDosOkw6PDpcSFxI3Eh8SZw6jDqcOqw6vEl8Svw6zDrcOuw6/FgsWEw7LDs8O0w7bDtcO4w7nDusO7w7zFs8Wrw7/DvcW8xbrDscOnxI3FocW+w4DDgcOCw4TDg8OFxITEhsSMxJbEmMOIw4nDisOLw4zDjcOOw4/ErsWBxYPDksOTw5TDlsOVw5jDmcOaw5vDnMWyxarFuMOdxbvFucORw5/Dh8WSw4bEjMWgxb3iiILDsCAsJy4tXSskKVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3RleHRlX251bWVyaWNfcHJvcHJlJzoge1xuICAgICAgICByZWdleDogXCJeKFswLTlhLXpBLVrDoMOhw6LDpMOjw6XEhcSNxIfEmcOow6nDqsOrxJfEr8Osw63DrsOvxYLFhMOyw7PDtMO2w7XDuMO5w7rDu8O8xbPFq8O/w73FvMW6w7HDp8SNxaHFvsOAw4HDgsOEw4PDhcSExIbEjMSWxJjDiMOJw4rDi8OMw43DjsOPxK7FgcWDw5LDk8OUw5bDlcOYw5nDmsObw5zFssWqxbjDncW7xbnDkcOfw4fFksOGxIzFoMW94oiCw7AgLCcuLV0rJClcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2NvZGVfcG9zdGFsJzoge1xuICAgICAgICBtYXNrOiBcIjk5IDk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnYWRlbGknOiB7XG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NpcmV0Jzoge1xuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdwcml4Jzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG5cblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdtZXRyZSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnY2VudGltZXRyZSc6IHtcbiAgICAgICAgYWxpYXM6ICdtZXRyZScsXG5cblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdwaG9uZWZyJzoge1xuICAgICAgICBtYXNrOiAnKCs5OXw5KTkuOTkuOTkuOTkuOTknLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NlY3UnOiB7XG4gICAgICAgIC8vcmVnZXg6ICdeKFsxLTNdKSA/KFswLTldezJ9KSA/KFswLTldfFsyLTM1LTldWzAtOV18WzE0XVswLTJdKSA/KDBbMS05XXxbMS04XVswLTldfDlbMC01Ny05XXwyW2FiXSlbXFxzXFwuXFwtXT8oMDBbMS05XXwwWzEtOV1bMC05XXxbMS04XVswLTldezJ9fDlbMC04XVswLTldfDk5MCkgPyhbMC05XXszfSkgPyhbMC04XVswLTldfDlbMC03XSkkJyxcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdrbSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlLFxuICAgIH1cbn0pO1xuXG5cbiIsIlxudmFyIFNuYW1lO1xudmFyIG5vbWJyZTtcblxuZXhlY3V0ZSgpO1xuXG4vL3JlbGFuY2Ugc2kgYWpvdXQgZGUgZmlsZXNcbiQoZG9jdW1lbnQpLmJpbmQoJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZXhlY3V0ZSgpO1xuXG59KVxuXG4vLyAvL3NpIGMnZXN0IHVuZSBjb2xsZWN0aW9uXG4vLyBpZiAoJCgnIycgKyBTbmFtZSArICd1cmwnKS5sZW5ndGggIT0gMCkge1xuLy8gICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgbm9tYnJlID0gJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGg7XG4vLyAgICAgICAgIGlmICgkKCcjJyArIFNuYW1lICsgJ3VybCcpLmxlbmd0aCAhPSAwKSBleGVjdXRlKClcbi8vICAgICB9KTtcblxuLy8gICAgICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKVxuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuLy8gICAgIH0pXG5cblxuLy8gfVxuLy8gZWxzZSB7XG4vLyAgICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICAkKGUudGFyZ2V0KS5uZXh0KCkudGV4dChlLnRhcmdldC5maWxlc1swXS5uYW1lKVxuLy8gICAgIH0pXG4vLyB9XG5cblxuXG5mdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKCdvbmNoYW5nZScpKSB7IC8vb24gdsOpcmlmaWUgcXVlIGwnb24gYSBwYXMgbWlzIHVuIG9uY2hhbmdlXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwib25jaGFuZ2VcIik7Ly8gb24sIGFqb3V0ZSB1bmUgY2xhc3NlXG4gICAgICAgICAgICBpZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKVxuICAgICAgICAgICAgdXJsID0gaWQuc3Vic3RyKDAsIGlkLmxlbmd0aCAtIDgpICsgJ191cmwnXG4gICAgICAgICAgICBpZiAoJCgnIycgKyB1cmwpLnZhbCgpKSAkKGVsZW1lbnQpLnBhcmVudCgpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJleHZhbGV1clwiPicgKyAkKCcjJyArIHVybCkudmFsKCkgKyAnPC9zcGFuPicpIC8vZm9uY3Rpb25uZSBxdWUgcG91ciBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAkKGVsZW1lbnQpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgU25hbWUgPSB0aGlzLmlkLnN1YnN0cigwLCB0aGlzLmlkLmxhc3RJbmRleE9mKCdfJykpICsgJ18nO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gJCh0aGlzKVswXS5maWxlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgdXBsb2FkID0gbmV3IFVwbG9hZChmaWxlKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFycmUgPSAkKHRoaXMpLm5leHQoKVxuICAgICAgICAgICAgICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIDApO1xuICAgICAgICAgICAgICAgIC8vYmFycmUud2lkdGgoJzAlJyk7XG4gICAgICAgICAgICAgICAgYmFycmUudGV4dCgnRW52b3nDqSAoMCUpJyk7XG4gICAgICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1lbmRlZCcpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5kb1VwbG9hZCgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG52YXIgVXBsb2FkID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUudHlwZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldE9iamV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamV0O1xufTtcblVwbG9hZC5wcm90b3R5cGUuc2V0T2JqZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMub2JqZXQgPSBlO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmRvVXBsb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBVcGxvYWQucHJvdG90eXBlLnNldE9iamV0KGUpXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy8gYWRkIGFzc29jIGtleSB2YWx1ZXMsIHRoaXMgd2lsbCBiZSBwb3N0cyB2YWx1ZXNcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuZmlsZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsICQoJyN0b2tlbicpLnZhbCgpKTtcbiAgICB2YXIgYmFyID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2lkJylcbiAgICBkaXJlY3RvcnkgPSBiYXIuc3Vic3RyKDAsIGJhci5pbmRleE9mKCdfJykpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRpcmVjdG9yeVwiLCBkaXJlY3RvcnkpO1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdiYXNlNjQnLCByZWFkZXIucmVzdWx0KVxuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL3VwbG9hZFwiLFxuICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVhociA9ICQuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgICAgICAgaWYgKG15WGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIG15WGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHRoYXQucHJvZ3Jlc3NIYW5kbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG15WGhyO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgdmFyIHJldG91ciA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdkYXRhLXRtcCcsIHJldG91ci50bXBfbmFtZSlcblxuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgYmFycmUudGV4dChyZXRvdXIubmFtZSk7XG4gICAgICAgICAgICAkKCcjJyArIFNuYW1lICsgJ3VybCcpLnZhbChKU09OLnN0cmluZ2lmeShyZXRvdXIpKVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctZW5kZWQnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBiYXJyZS50ZXh0KCdFcnJldXIgZGFucyBsXFwnZW52b2llJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogNjAwMDBcbiAgICB9KTtcbn07XG5cblVwbG9hZC5wcm90b3R5cGUucHJvZ3Jlc3NIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGVyY2VudCA9IDA7XG4gICAgdmFyIHBvc2l0aW9uID0gZXZlbnQubG9hZGVkIHx8IGV2ZW50LnBvc2l0aW9uO1xuICAgIHZhciB0b3RhbCA9IGV2ZW50LnRvdGFsO1xuICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgIHBlcmNlbnQgPSBNYXRoLmNlaWwocG9zaXRpb24gLyB0b3RhbCAqIDEwMCk7XG4gICAgfVxuICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICBiYXJyZS5zaG93KCk7XG4gICAgYmFycmUuYXR0cihcImFyaWEtdmFsdWVub3dcIiwgcGVyY2VudC50b0ZpeGVkKDApKTtcbiAgICAvL2JhcnJlLndpZHRoKHBlcmNlbnQudG9GaXhlZCgwKSArICclJyk7XG4gICAgYmFycmUudGV4dCgnRW52b3nDqSAoJyArIHBlcmNlbnQudG9GaXhlZCgyKSArICclKScpO1xufTtcblxuXG5cblxuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9