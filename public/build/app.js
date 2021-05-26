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
/* harmony import */ var _patch_patch_crud_alias_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patch/patch_crud/alias.js */ "./patch/patch_crud/alias.js");
/* harmony import */ var _patch_patch_crud_alias_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patch_patch_crud_alias_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patch_patch_crud_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patch/patch_crud/upload */ "./patch/patch_crud/upload.js");
/* harmony import */ var _patch_patch_crud_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patch_patch_crud_upload__WEBPACK_IMPORTED_MODULE_8__);
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

/***/ "./patch/patch_crud/alias.js":
/*!***********************************!*\
  !*** ./patch/patch_crud/alias.js ***!
  \***********************************/
/***/ (() => {

Inputmask.extendAliases({
  'texte_propre': {
    regex: "^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'.-]+$)"
  }
});
Inputmask.extendAliases({
  'code_postal': {
    mask: "99 999"
  }
});
Inputmask.extendAliases({
  'adeli': {
    mask: "9999999999"
  }
});
Inputmask.extendAliases({
  'siret': {
    mask: "9999999999"
  }
});
Inputmask.extendAliases({
  'prix': {
    alias: 'numeric',
    autoGroup: true,
    digits: 2,
    placeholder: '',
    rightAlign: false,
    greedy: false,
    allowMinus: false
  }
});
Inputmask.extendAliases({
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
Inputmask.extendAliases({
  'centimetre': {
    alias: 'metre'
  }
});
Inputmask.extendAliases({
  'phonefr': {
    regex: '^(0|\\+33 )[1-9] ([-. ]?[0-9]{2} ){3}([-. ]?[0-9]{2})$',
    autoGroup: true,
    digits: 2,
    placeholder: '',
    rightAlign: false,
    greedy: false,
    allowMinus: false
  }
});
Inputmask.extendAliases({
  'secu': {
    regex: '^([1-3]) ?([0-9]{2}) ?([0-9]|[2-35-9][0-9]|[14][0-2]) ?(0[1-9]|[1-8][0-9]|9[0-57-9]|2[ab])[\s\.\-]?(00[1-9]|0[1-9][0-9]|[1-8][0-9]{2}|9[0-8][0-9]|990) ?([0-9]{3}) ?([0-8][0-9]|9[0-7])$'
  }
});
Inputmask.extendAliases({
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

/***/ "./patch/patch_crud/upload.js":
/*!************************************!*\
  !*** ./patch/patch_crud/upload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

var Sname;
var nombre; //si c'est une collection

if ($('#' + Sname + 'url').length != 0) {
  $(document).ready(function () {
    nombre = $('input[type="file"]').length;
    if ($('#' + Sname + 'url').length != 0) execute();
  }); //relance si ajout de files

  setInterval(function () {
    if ($('input[type="file"]').length > nombre) {
      nombre = $('input[type="file"]').length;
      execute();
    }
  }, 300);
  $('form').submit(function (e) {
    e.preventDefault();
    $('input[type="file"]').each(function () {
      $(this).parent().remove();
    });
    this.submit();
  }); //nettoyage des collections

  $('.collection').each(function () {
    var texte = $(this).attr('data-prototype');
    texte = texte.replaceAll('col-sm-4', 'col-2').replaceAll('col-sm-8', 'col-10');
    $(this).attr('data-prototype', texte);
    if ($(this).parent().prev().hasClass('col-sm-8')) $(this).parent().addClass('col-11').removeClass('col-sm-8');
    if ($(this).parent().prev().hasClass('col-sm-4')) $(this).parent().prev().addClass('col-1').removeClass('col-sm-4');
  });
} else {
  $('input[type="file"]').on("change", function (e) {
    $(e.target).next().text(e.target.files[0].name);
  });
}

function execute() {
  $('input[type="file"]').on("change", function (e) {
    Sname = this.id.substr(0, this.id.lastIndexOf('_')) + '_';
    $(this).addClass("onchange");
    var file = $(this)[0].files[0];
    var upload = new Upload(file);
    var barre = $(this).next();
    barre.attr("aria-valuenow", 0); //barre.width('0%');

    barre.text('Envoyé (0%)');
    barre.addClass('progress-bar-animated');
    barre.addClass('bg-info');
    barre.removeClass('bg-warning');
    barre.removeClass('bg-success');
    upload.doUpload($(this));
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
      var retour = JSON.parse(data);
      var barre = Upload.prototype.getObjet().next();
      barre.removeClass('progress-bar-animated');
      barre.removeClass('bg-info');
      barre.removeClass('bg-warning');
      barre.addClass('bg-success');
      barre.text(retour.name);
      $('#' + Sname + 'url').val(JSON.stringify(retour));
      setTimeout(function () {
        barre.removeClass('bg-success');
      }, 2000);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-f80610"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9wYXRjaC9wYXRjaF9jcnVkL2FsaWFzLmpzIiwid2VicGFjazovLy8uL3BhdGNoL3BhdGNoX2NydWQvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiZWxlbWVudCIsInRleHRDb250ZW50IiwiQ29udHJvbGxlciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiSW5wdXRtYXNrIiwibWFzayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXF1aXJlIiwib24iLCJwb3B1cCIsInNldFRpbWVvdXQiLCJwb3BvdmVyIiwiaHRtbCIsInRyaWdnZXIiLCJwbGFjZW1lbnQiLCJjb250ZW50IiwiZSIsImwiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiZWFjaCIsIm93bENhcm91c2VsIiwiY2VudGVyIiwiaXRlbXMiLCJsb29wIiwibWFyZ2luIiwicmVzcG9uc2l2ZSIsIm93bCIsImNsaWNrIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsImV4dGVuZEFsaWFzZXMiLCJyZWdleCIsImFsaWFzIiwiYXV0b0dyb3VwIiwiZGlnaXRzIiwicGxhY2Vob2xkZXIiLCJyaWdodEFsaWduIiwiZ3JlZWR5IiwiYWxsb3dNaW51cyIsIlNuYW1lIiwibm9tYnJlIiwibGVuZ3RoIiwiZXhlY3V0ZSIsInNldEludGVydmFsIiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJyZW1vdmUiLCJ0ZXh0ZSIsImF0dHIiLCJyZXBsYWNlQWxsIiwicHJldiIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm5leHQiLCJ0ZXh0IiwiZmlsZXMiLCJuYW1lIiwiaWQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImZpbGUiLCJ1cGxvYWQiLCJVcGxvYWQiLCJiYXJyZSIsImRvVXBsb2FkIiwicHJvdG90eXBlIiwiZ2V0VHlwZSIsInR5cGUiLCJnZXRPYmpldCIsIm9iamV0Iiwic2V0T2JqZXQiLCJnZXRTaXplIiwic2l6ZSIsImdldE5hbWUiLCJ0aGF0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInZhbCIsImJhciIsImRpcmVjdG9yeSIsImFqYXgiLCJ1cmwiLCJ4aHIiLCJteVhociIsImFqYXhTZXR0aW5ncyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9ncmVzc0hhbmRsaW5nIiwic3VjY2VzcyIsImRhdGEiLCJyZXRvdXIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnJvciIsImFzeW5jIiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwidGltZW91dCIsInBlcmNlbnQiLCJwb3NpdGlvbiIsImV2ZW50IiwibG9hZGVkIiwidG90YWwiLCJsZW5ndGhDb21wdXRhYmxlIiwiTWF0aCIsImNlaWwiLCJzaG93IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlO0FBQ2YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBRUksbUJBQVU7QUFDTixXQUFL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TjtBQUNBN0MsT0FBSyxDQUFDaEIsSUFBTixDQUFXLGVBQVgsRUFBNEJxRCxPQUFPLENBQUNTLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBNUIsRUFUNEMsQ0FVNUM7O0FBQ0E5QyxPQUFLLENBQUNULElBQU4sQ0FBVyxhQUFhOEMsT0FBTyxDQUFDUyxPQUFSLENBQWdCLENBQWhCLENBQWIsR0FBa0MsSUFBN0M7QUFDSCxDQVpELEM7Ozs7Ozs7Ozs7OztBQ3pJQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjsgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkgeyBJbnB1dG1hc2soKS5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7IH0pXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlJztcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5pbXBvcnQgJy4uL3BhdGNoL3BhdGNoX2NydWQvYWxpYXMuanMnO1xuaW1wb3J0ICcuLi9wYXRjaC9wYXRjaF9jcnVkL3VwbG9hZCc7XG5pbXBvcnQgJ293bC5jYXJvdXNlbC9kaXN0L2Fzc2V0cy9vd2wuY2Fyb3VzZWwuY3NzJztcbmltcG9ydCAnb3dsLmNhcm91c2VsJztcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pblwiO1xuXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci1ob3ZlclwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9wdXAgPSB0aGlzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICQocG9wdXApLnBvcG92ZXIoJ2hpZGUnKTsgfSwgNTAwMCk7XG59KS5wb3BvdmVyKHsgaHRtbDogdHJ1ZSwgdHJpZ2dlcjogJ2NsaWNrJywgcGxhY2VtZW50OiAnYm90dG9tJywgY29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH0gfSk7ICQoXCJodG1sXCIpLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZSkgeyB2YXIgbCA9ICQoZS50YXJnZXQpOyBpZiAobFswXS5jbGFzc05hbWUuaW5kZXhPZihcInBvcG92ZXJcIikgPT0gLTEpIHsgJChcIi5wb3BvdmVyXCIpLmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLnBvcG92ZXIoXCJoaWRlXCIpOyB9KTsgfSB9KTtcblxuXG5cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgY2VudGVyOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBvd2wgPSAkKCcub3dsLWNhcm91c2VsJyk7XG4gICAgb3dsLm93bENhcm91c2VsKCk7XG4gICAgLy8gR28gdG8gdGhlIG5leHQgaXRlbVxuICAgICQoJy5jdXN0b21OZXh0QnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBvd2wudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICB9KVxuICAgIC8vIEdvIHRvIHRoZSBwcmV2aW91cyBpdGVtXG4gICAgJCgnLmN1c3RvbVByZXZCdG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBhcmFtZXRlcnMgaGFzIHRvIGJlIGluIHNxdWFyZSBicmFja2V0ICdbXSdcbiAgICAgICAgb3dsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgfSlcbn0pO1xuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3RleHRlX3Byb3ByZSc6IHtcbiAgICAgICAgcmVnZXg6IFwiXihbYS16QS1aw6DDocOiw6TDo8OlxIXEjcSHxJnDqMOpw6rDq8SXxK/DrMOtw67Dr8WCxYTDssOzw7TDtsO1w7jDucO6w7vDvMWzxavDv8O9xbzFusOxw6fEjcWhxb7DgMOBw4LDhMODw4XEhMSGxIzElsSYw4jDicOKw4vDjMONw47Dj8SuxYHFg8OSw5PDlMOWw5XDmMOZw5rDm8OcxbLFqsW4w53Fu8W5w5HDn8OHxZLDhsSMxaDFveKIgsOwICwnLi1dKyQpXCIsXG4gICAgfVxufSk7XG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdjb2RlX3Bvc3RhbCc6IHtcbiAgICAgICAgbWFzazogXCI5OSA5OTlcIixcbiAgICB9XG59KTtcblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdhZGVsaSc6IHtcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5XCIsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NpcmV0Jzoge1xuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTlcIixcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAncHJpeCc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnbWV0cmUnOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZVxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2NlbnRpbWV0cmUnOiB7XG4gICAgICAgIGFsaWFzOiAnbWV0cmUnLFxuXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAncGhvbmVmcic6IHtcbiAgICAgICAgcmVnZXg6ICdeKDB8XFxcXCszMyApWzEtOV0gKFstLiBdP1swLTldezJ9ICl7M30oWy0uIF0/WzAtOV17Mn0pJCcsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZSxcblxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NlY3UnOiB7XG4gICAgICAgIHJlZ2V4OiAnXihbMS0zXSkgPyhbMC05XXsyfSkgPyhbMC05XXxbMi0zNS05XVswLTldfFsxNF1bMC0yXSkgPygwWzEtOV18WzEtOF1bMC05XXw5WzAtNTctOV18MlthYl0pW1xcc1xcLlxcLV0/KDAwWzEtOV18MFsxLTldWzAtOV18WzEtOF1bMC05XXsyfXw5WzAtOF1bMC05XXw5OTApID8oWzAtOV17M30pID8oWzAtOF1bMC05XXw5WzAtN10pJCcsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2ttJzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBhdXRvR3JvdXA6IHRydWUsXG4gICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICByaWdodEFsaWduOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiBmYWxzZSxcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2UsXG4gICAgfVxufSk7XG5cblxuIiwiXG52YXIgU25hbWU7XG52YXIgbm9tYnJlO1xuXG4vL3NpIGMnZXN0IHVuZSBjb2xsZWN0aW9uXG5pZiAoJCgnIycgKyBTbmFtZSArICd1cmwnKS5sZW5ndGggIT0gMCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbm9tYnJlID0gJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGg7XG4gICAgICAgIGlmICgkKCcjJyArIFNuYW1lICsgJ3VybCcpLmxlbmd0aCAhPSAwKSBleGVjdXRlKClcbiAgICB9KTtcbiAgICAvL3JlbGFuY2Ugc2kgYWpvdXQgZGUgZmlsZXNcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmxlbmd0aCA+IG5vbWJyZSkge1xuICAgICAgICAgICAgbm9tYnJlID0gJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGhcbiAgICAgICAgICAgIGV4ZWN1dGUoKTtcbiAgICAgICAgfVxuICAgIH0sIDMwMCk7XG5cbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICB9KVxuXG4gICAgLy9uZXR0b3lhZ2UgZGVzIGNvbGxlY3Rpb25zXG5cbiAgICAkKCcuY29sbGVjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGV4dGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtcHJvdG90eXBlJyk7XG4gICAgICAgIHRleHRlID0gdGV4dGUucmVwbGFjZUFsbCgnY29sLXNtLTQnLCAnY29sLTInKS5yZXBsYWNlQWxsKCdjb2wtc20tOCcsICdjb2wtMTAnKVxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtcHJvdG90eXBlJywgdGV4dGUpO1xuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuaGFzQ2xhc3MoJ2NvbC1zbS04JykpICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2NvbC0xMScpLnJlbW92ZUNsYXNzKCdjb2wtc20tOCcpXG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5oYXNDbGFzcygnY29sLXNtLTQnKSkgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuYWRkQ2xhc3MoJ2NvbC0xJykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS00JylcblxuXG4gICAgfSlcbn1cbmVsc2Uge1xuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJChlLnRhcmdldCkubmV4dCgpLnRleHQoZS50YXJnZXQuZmlsZXNbMF0ubmFtZSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgU25hbWUgPSB0aGlzLmlkLnN1YnN0cigwLCB0aGlzLmlkLmxhc3RJbmRleE9mKCdfJykpICsgJ18nO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwib25jaGFuZ2VcIik7XG4gICAgICAgIHZhciBmaWxlID0gJCh0aGlzKVswXS5maWxlc1swXTtcbiAgICAgICAgdmFyIHVwbG9hZCA9IG5ldyBVcGxvYWQoZmlsZSk7XG4gICAgICAgIHZhciBiYXJyZSA9ICQodGhpcykubmV4dCgpXG4gICAgICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIDApO1xuICAgICAgICAvL2JhcnJlLndpZHRoKCcwJScpO1xuICAgICAgICBiYXJyZS50ZXh0KCdFbnZvecOpICgwJSknKTtcbiAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctaW5mbycpO1xuICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctd2FybmluZycpO1xuICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICB1cGxvYWQuZG9VcGxvYWQoJCh0aGlzKSk7XG4gICAgfSk7XG59XG5cblxuXG52YXIgVXBsb2FkID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUudHlwZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldE9iamV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamV0O1xufTtcblVwbG9hZC5wcm90b3R5cGUuc2V0T2JqZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMub2JqZXQgPSBlO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmRvVXBsb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBVcGxvYWQucHJvdG90eXBlLnNldE9iamV0KGUpXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy8gYWRkIGFzc29jIGtleSB2YWx1ZXMsIHRoaXMgd2lsbCBiZSBwb3N0cyB2YWx1ZXNcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuZmlsZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsICQoJyN0b2tlbicpLnZhbCgpKTtcbiAgICB2YXIgYmFyID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2lkJylcbiAgICBkaXJlY3RvcnkgPSBiYXIuc3Vic3RyKDAsIGJhci5pbmRleE9mKCdfJykpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRpcmVjdG9yeVwiLCBkaXJlY3RvcnkpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL3VwbG9hZFwiLFxuICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVhociA9ICQuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgICAgICAgaWYgKG15WGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIG15WGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHRoYXQucHJvZ3Jlc3NIYW5kbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG15WGhyO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJldG91ciA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctd2FybmluZycpO1xuICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJhcnJlLnRleHQocmV0b3VyLm5hbWUpO1xuICAgICAgICAgICAgJCgnIycgKyBTbmFtZSArICd1cmwnKS52YWwoSlNPTi5zdHJpbmdpZnkocmV0b3VyKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgdmFyIGJhcnJlID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLm5leHQoKVxuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgYmFycmUudGV4dCgnRXJyZXVyIGRhbnMgbFxcJ2Vudm9pZScpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctd2FybmluZycpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgIHRpbWVvdXQ6IDYwMDAwXG4gICAgfSk7XG59O1xuXG5VcGxvYWQucHJvdG90eXBlLnByb2dyZXNzSGFuZGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBlcmNlbnQgPSAwO1xuICAgIHZhciBwb3NpdGlvbiA9IGV2ZW50LmxvYWRlZCB8fCBldmVudC5wb3NpdGlvbjtcbiAgICB2YXIgdG90YWwgPSBldmVudC50b3RhbDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICBwZXJjZW50ID0gTWF0aC5jZWlsKHBvc2l0aW9uIC8gdG90YWwgKiAxMDApO1xuICAgIH1cbiAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgYmFycmUuc2hvdygpO1xuICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIHBlcmNlbnQudG9GaXhlZCgwKSk7XG4gICAgLy9iYXJyZS53aWR0aChwZXJjZW50LnRvRml4ZWQoMCkgKyAnJScpO1xuICAgIGJhcnJlLnRleHQoJ0Vudm95w6kgKCcgKyBwZXJjZW50LnRvRml4ZWQoMikgKyAnJSknKTtcbn07XG5cblxuXG5cblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==