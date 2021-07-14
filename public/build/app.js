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

/***/ "./assets/all.js":
/*!***********************!*\
  !*** ./assets/all.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jscrudmick_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jscrudmick/collection */ "./assets/jscrudmick/collection.js");
/* harmony import */ var _jscrudmick_collection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jscrudmick_collection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jscrudmick_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jscrudmick/upload */ "./assets/jscrudmick/upload.js");
/* harmony import */ var _jscrudmick_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jscrudmick_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jscrudmick_alias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jscrudmick/alias */ "./assets/jscrudmick/alias.js");
/* harmony import */ var _jscrudmick_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jscrudmick/popover */ "./assets/jscrudmick/popover.js");
/* harmony import */ var _jscrudmick_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jscrudmick_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jscrudmick_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jscrudmick/sortable */ "./assets/jscrudmick/sortable.js");
/* harmony import */ var _jscrudmick_sortable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jscrudmick_sortable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jscrudmick_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jscrudmick/tools */ "./assets/jscrudmick/tools.js");
/* harmony import */ var _jscrudmick_tools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jscrudmick_tools__WEBPACK_IMPORTED_MODULE_5__);
//require('../mobile_view/mobile_view.js')







/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all */ "./assets/all.js");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;

 //import "./styles/app.scss";

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js"); // start the Stimulus application




 //import Inputmask from "inputmask"; $(document).ready(function () { Inputmask().mask(document.querySelectorAll("input")); })




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

$('.customNextBtn').on('click', function () {
  owl.trigger('next.owl.carousel');
}); // Go to the previous item

$('.customPrevBtn').on('click', function () {
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel');
});
$(document).on('click', function (event) {
  $('.collapse-menu').collapse('hide');
});
$('.collapse-menu').collapse('hide');

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

/***/ "./assets/jscrudmick/alias.js":
/*!************************************!*\
  !*** ./assets/jscrudmick/alias.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
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
    autoGroup: true,
    digits: 2,
    placeholder: '',
    rightAlign: false,
    greedy: false,
    allowMinus: false
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

/***/ "./assets/jscrudmick/collection.js":
/*!*****************************************!*\
  !*** ./assets/jscrudmick/collection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

// setup an "add a tag" link
init();

function init() {
  $('.collection').each(function (index, element) {
    //pon additione le boutpon supprimer
    $(this).find('.custom-file').each(function () {
      $(this).parent().parent().parent().append('<a href="#" class="remove-tag btn btn-danger" >Supprimer</a>');
    });
    var $collectionHolder = $(element);

    if ($collectionHolder.attr('data-prototype')) {
      collectionName = $collectionHolder.attr('id').split('_').slice(-1)[0]; //on sélectionne le dernier

      var $addTagLink = $('<a href="#" id="add_tag_link_' + collectionName + '" class="add_tag_link btn btn-primary"></a>'); //on vérifie si on a traiter cette collection en vérifiant la présence du bouton ajouter

      if ($('#' + 'add_tag_link_' + collectionName).length == 0) {
        $collectionHolder.append($addTagLink);
        $collectionHolder.data('index', $collectionHolder.find(':input').length);
        $addTagLink.append('Ajouter ' + collectionName);
        $addTagLink.addClass('col-12');
        $addTagLink.on('click', function (e) {
          // prevent the link from creating a "#" on the URL
          e.preventDefault(); // add a new tag form (see code block below)

          addTagForm($collectionHolder, $addTagLink);
        });
      }
    }
  }); // handle the removal, just for this example

  $('.remove-tag').click(function (e) {
    e.preventDefault();
    $(this).parent().remove();
    return false;
  });
}

$tabCol = ['soins', 'planifications']; //au cas ou mettre un tableau avec soins et planification

function addTagForm($collectionHolder, $addTagLink) {
  var prototype = $collectionHolder.data('prototype');
  var index = $collectionHolder.data('index'); // Replace '$$name$$' in the prototype's HTML to
  // instead be a number based on how many items we have

  collectionName = $collectionHolder.attr('id').split('_').slice(-1)[0]; //on sélectionne le dernier
  //soins___name___
  //name="[soins][__name__]
  //détections si s ou pas à prototype

  var protos;
  if (prototype.indexOf(collectionName + '___name___') != -1) protos = collectionName;else protos = collectionName + 's'; //changement des ids
  //str.replace(/abc/g, '');

  var newForm = prototype.replace(protos + '___name___/g', protos + '_' + index + '_'); // Bug

  $tabCol.forEach(function (element) {
    //changement des names
    newForm = newForm.replace(element + ']\[__name__]/g', element + "][" + index + "]");
  });
  console.log(protos + ']\[__name__]'); //newForm = newForm.replaceAll(protos + "]", protos + "][" + index + "]");

  $collectionHolder.data('index', index + 1); // Display the form in the page in an li, before the "Add a tag" link li

  var $newFormLi = $('<div></div>').append(newForm); // also add a remove button, just for this example

  $newFormLi.append('<a href="#" class="remove-tag btn btn-danger" >Supprimer</a>');
  $addTagLink.before($newFormLi); //on véririe qu'il n'y ait pas de nouveau collection à gérer

  init();
}

/***/ }),

/***/ "./assets/jscrudmick/popover.js":
/*!**************************************!*\
  !*** ./assets/jscrudmick/popover.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

/**------------------------------------------------------------------------
 *                           popover pour les images
 *------------------------------------------------------------------------**/

/*
1) possibilité de modifier la largeur par
.popover {
    max-width: 100%;
}

2) possibilité de déinir une fermeture automatique en ms sinon par click si pas défini
var popover_time=2000
*/
$('[data-toggle="popover"]').popover();
$('[data-toggle="popover-hover"]').on('click', function () {
  var popup = this; //fermeture automatique

  if (typeof popover_time !== 'undefined') setTimeout(function () {
    $(popup).popover('hide');
  }, popover_time);
}).popover({
  html: true,
  trigger: 'click',
  placement: 'bottom',
  container: 'body',
  content: function content() {
    return '<img class="img-fluid" src="' + $(this).data('img') + '" />';
  }
});
$("html").on("mouseup", function (e) {
  var l = $(e.target);
  if ($(".popover").length) if (l[0].className.indexOf("popover") == -1) {
    $(".popover").each(function () {
      $(this).popover("hide");
    });
  }
});

/***/ }),

/***/ "./assets/jscrudmick/sortable.js":
/*!***************************************!*\
  !*** ./assets/jscrudmick/sortable.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

//liste sortable en mettant #sortable
__webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");

__webpack_require__(/*! jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js");

__webpack_require__(/*! jquery-ui/ui/disable-selection */ "./node_modules/jquery-ui/ui/disable-selection.js");

$(function () {
  $("#sortable").sortable({
    cursor: "move",
    opacity: 0.5,
    stop: function stop(event, ui) {
      var listElements = $("#sortable").children();
      var listValues = [];
      $.each(listElements, function (index, element) {
        listValues.push(element.dataset.num);
      });
      $.ajax({
        type: "get",
        url: "/sortable",
        data: "entite=" + $('#save_sortable').attr('entite') + '&sortable=' + listValues.join(','),
        dataType: "dataType",
        success: function success(response) {
          console.log('save ok');
        },
        error: function error(_error) {
          console.log(_error);
        }
      });
    }
  }); //on met à jour la liste au démarrage

  if ($('#ex_sortable').val()) {
    var positions = $('#ex_sortable').val().split(',');

    if (positions) {
      $.each(positions, function (i, position) {
        var $target = $("#sortable").find('[data-num=' + position + ']');
        $target.appendTo($("#sortable")); // or prependTo for reverse
      });
      $("#sortable").disableSelection();
    }
  }
});

/***/ }),

/***/ "./assets/jscrudmick/tools.js":
/*!************************************!*\
  !*** ./assets/jscrudmick/tools.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//mise en place d'une animation douce sur les click pour aller sur les ancres
var $root = $("html, body");
$('a[href^="#"]').on("click", function () {
  $root.animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 600);
  return false;
}); //activation des tooltips

$('[data-toggle="tooltip"]').tooltip();

/***/ }),

/***/ "./assets/jscrudmick/upload.js":
/*!*************************************!*\
  !*** ./assets/jscrudmick/upload.js ***!
  \*************************************/
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

  reader.onload = function (e) {//Upload.prototype.getObjet().attr('base64', reader.result)
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_modules-833a8e","vendors-node_modules_core-js_modules_es_array_join_js-node_modules_jquery-ui_ui_disable-selec-1e934f","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-796554","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_symfony_stimulus-bri-14ecb9"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL2FsaWFzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNjcnVkbWljay9zb3J0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNjcnVkbWljay90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNjcnVkbWljay91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJDb250cm9sbGVyIiwiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJvd2xDYXJvdXNlbCIsImNlbnRlciIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmUiLCJvd2wiLCJvbiIsInRyaWdnZXIiLCJkb2N1bWVudCIsImV2ZW50IiwiY29sbGFwc2UiLCJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwiYmluZCIsImUiLCJJbnB1dG1hc2siLCJtYXNrIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZ2V4IiwicGxhY2Vob2xkZXIiLCJhbGlhcyIsImF1dG9Hcm91cCIsImRpZ2l0cyIsInJpZ2h0QWxpZ24iLCJncmVlZHkiLCJhbGxvd01pbnVzIiwiaW5pdCIsImVhY2giLCJpbmRleCIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCIkY29sbGVjdGlvbkhvbGRlciIsImF0dHIiLCJjb2xsZWN0aW9uTmFtZSIsInNwbGl0Iiwic2xpY2UiLCIkYWRkVGFnTGluayIsImxlbmd0aCIsImRhdGEiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYWRkVGFnRm9ybSIsImNsaWNrIiwicmVtb3ZlIiwiJHRhYkNvbCIsInByb3RvdHlwZSIsInByb3RvcyIsImluZGV4T2YiLCJuZXdGb3JtIiwicmVwbGFjZSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiJG5ld0Zvcm1MaSIsImJlZm9yZSIsInBvcG92ZXIiLCJwb3B1cCIsInBvcG92ZXJfdGltZSIsInNldFRpbWVvdXQiLCJodG1sIiwicGxhY2VtZW50IiwiY29udGFpbmVyIiwiY29udGVudCIsImwiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzb3J0YWJsZSIsImN1cnNvciIsIm9wYWNpdHkiLCJzdG9wIiwidWkiLCJsaXN0RWxlbWVudHMiLCJjaGlsZHJlbiIsImxpc3RWYWx1ZXMiLCJwdXNoIiwiZGF0YXNldCIsIm51bSIsImFqYXgiLCJ0eXBlIiwidXJsIiwiam9pbiIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJ2YWwiLCJwb3NpdGlvbnMiLCJpIiwicG9zaXRpb24iLCIkdGFyZ2V0IiwiYXBwZW5kVG8iLCJkaXNhYmxlU2VsZWN0aW9uIiwiJHJvb3QiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwidG9vbHRpcCIsIlNuYW1lIiwibm9tYnJlIiwiZXhlY3V0ZSIsImhhc0NsYXNzIiwiaWQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImZpbGUiLCJmaWxlcyIsInVwbG9hZCIsIlVwbG9hZCIsImJhcnJlIiwibmV4dCIsInRleHQiLCJyZW1vdmVDbGFzcyIsImRvVXBsb2FkIiwiZ2V0VHlwZSIsImdldE9iamV0Iiwib2JqZXQiLCJzZXRPYmpldCIsImdldFNpemUiLCJzaXplIiwiZ2V0TmFtZSIsIm5hbWUiLCJ0aGF0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImJhciIsImRpcmVjdG9yeSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwieGhyIiwibXlYaHIiLCJhamF4U2V0dGluZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZ3Jlc3NIYW5kbGluZyIsInJldG91ciIsIkpTT04iLCJwYXJzZSIsInRtcF9uYW1lIiwic3RyaW5naWZ5IiwiYXN5bmMiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJ0aW1lb3V0IiwicGVyY2VudCIsImxvYWRlZCIsInRvdGFsIiwibGVuZ3RoQ29tcHV0YWJsZSIsIk1hdGgiLCJjZWlsIiwic2hvdyIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUVJLG1CQUFVO0FBQ04sV0FBS0EsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLG1FQUEzQjtBQUNIOzs7O0VBSHdCQyxpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxJQUFNQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0FDLHFCQUFNLENBQUNGLENBQVAsR0FBV0UscUJBQU0sQ0FBQ0Ms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QzVDLE1BQUlXLE9BQU8sR0FBRyxDQUFkO0FBQ0EsTUFBSTFELFFBQVEsR0FBR2hGLEtBQUssQ0FBQzJJLE1BQU4sSUFBZ0IzSSxLQUFLLENBQUNnRixRQUFyQztBQUNBLE1BQUk0RCxLQUFLLEdBQUc1SSxLQUFLLENBQUM0SSxLQUFsQjs7QUFDQSxNQUFJNUksS0FBSyxDQUFDNkksZ0JBQVYsRUFBNEI7QUFDeEJILFdBQU8sR0FBR0ksSUFBSSxDQUFDQyxJQUFMLENBQVUvRCxRQUFRLEdBQUc0RCxLQUFYLEdBQW1CLEdBQTdCLENBQVY7QUFDSDs7QUFDRCxNQUFJdkMsS0FBSyxHQUFHRCxNQUFNLENBQUMvRCxTQUFQLENBQWlCc0UsUUFBakIsR0FBNEJMLElBQTVCLEVBQVo7QUFDQUQsT0FBSyxDQUFDMkMsSUFBTjtBQUNBM0MsT0FBSyxDQUFDN0UsSUFBTixDQUFXLGVBQVgsRUFBNEJrSCxPQUFPLENBQUNPLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBNUIsRUFUNEMsQ0FVNUM7O0FBQ0E1QyxPQUFLLENBQUNFLElBQU4sQ0FBVyxhQUFhbUMsT0FBTyxDQUFDTyxPQUFSLENBQWdCLENBQWhCLENBQWIsR0FBa0MsSUFBN0M7QUFDSCxDQVpELEM7Ozs7Ozs7Ozs7OztBQ2xKQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vcmVxdWlyZSgnLi4vbW9iaWxlX3ZpZXcvbW9iaWxlX3ZpZXcuanMnKVxuaW1wb3J0IFwiLi9qc2NydWRtaWNrL2NvbGxlY3Rpb25cIjtcbmltcG9ydCBcIi4vanNjcnVkbWljay91cGxvYWRcIjtcbmltcG9ydCBcIi4vanNjcnVkbWljay9hbGlhc1wiO1xuaW1wb3J0IFwiLi9qc2NydWRtaWNrL3BvcG92ZXJcIjtcbmltcG9ydCBcIi4vanNjcnVkbWljay9zb3J0YWJsZVwiO1xuaW1wb3J0IFwiLi9qc2NydWRtaWNrL3Rvb2xzXCI7XG4iLCJjb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5pbXBvcnQgXCJib290c3RyYXBcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcblxuLy9pbXBvcnQgXCIuL3N0eWxlcy9hcHAuc2Nzc1wiO1xuXG5yZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCIpO1xucmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qc1wiKTtcblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG4vL2ltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiOyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7IElucHV0bWFzaygpLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTsgfSlcbmltcG9ydCAnLi9hbGwnO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwvZGlzdC9hc3NldHMvb3dsLmNhcm91c2VsLmNzcyc7XG5pbXBvcnQgJ293bC5jYXJvdXNlbCc7XG5cblxuJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIGl0ZW1zOiA0LFxuICAgIGxvb3A6IHRydWUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICByZXNwb25zaXZlOiB7XG4gICAgICAgIDYwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG52YXIgb3dsID0gJCgnLm93bC1jYXJvdXNlbCcpO1xub3dsLm93bENhcm91c2VsKCk7XG4vLyBHbyB0byB0aGUgbmV4dCBpdGVtXG4kKCcuY3VzdG9tTmV4dEJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBvd2wudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbn0pXG4vLyBHbyB0byB0aGUgcHJldmlvdXMgaXRlbVxuJCgnLmN1c3RvbVByZXZCdG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUGFyYW1ldGVycyBoYXMgdG8gYmUgaW4gc3F1YXJlIGJyYWNrZXQgJ1tdJ1xuICAgIG93bC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgJCgnLmNvbGxhcHNlLW1lbnUnKS5jb2xsYXBzZSgnaGlkZScpO1xufSk7XG4kKCcuY29sbGFwc2UtbWVudScpLmNvbGxhcHNlKCdoaWRlJyk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XG5cbi8vZMOocyBxdSd1biDDqWzDqW3DqW5ldCBlc3QgaW5zw6lyw6kgb24gcmVsYW5jZSBpbnB1dCBtYXNrXG4kKGRvY3VtZW50KS5iaW5kKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgIElucHV0bWFzaygpLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbn0pO1xuXG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICd0ZXh0ZV9wcm9wcmUnOiB7XG4gICAgICAgIHJlZ2V4OiBcIl4oW2EtekEtWsOgw6HDosOkw6PDpcSFxI3Eh8SZw6jDqcOqw6vEl8Svw6zDrcOuw6/FgsWEw7LDs8O0w7bDtcO4w7nDusO7w7zFs8Wrw7/DvcW8xbrDscOnxI3FocW+w4DDgcOCw4TDg8OFxITEhsSMxJbEmMOIw4nDisOLw4zDjcOOw4/ErsWBxYPDksOTw5TDlsOVw5jDmcOaw5vDnMWyxarFuMOdxbvFucORw5/Dh8WSw4bEjMWgxb3iiILDsCAsJy4tXSskKVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdjb2RlX3Bvc3RhbCc6IHtcbiAgICAgICAgbWFzazogXCI5OSA5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2FkZWxpJzoge1xuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdzaXJldCc6IHtcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAncHJpeCc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnbWV0cmUnOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZVxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2NlbnRpbWV0cmUnOiB7XG4gICAgICAgIGFsaWFzOiAnbWV0cmUnLFxuXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAncGhvbmVmcic6IHtcbiAgICAgICAgbWFzazogJygrOTl8OSk5Ljk5Ljk5Ljk5Ljk5JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdzZWN1Jzoge1xuICAgICAgICAvL3JlZ2V4OiAnXihbMS0zXSkgPyhbMC05XXsyfSkgPyhbMC05XXxbMi0zNS05XVswLTldfFsxNF1bMC0yXSkgPygwWzEtOV18WzEtOF1bMC05XXw5WzAtNTctOV18MlthYl0pW1xcc1xcLlxcLV0/KDAwWzEtOV18MFsxLTldWzAtOV18WzEtOF1bMC05XXsyfXw5WzAtOF1bMC05XXw5OTApID8oWzAtOV17M30pID8oWzAtOF1bMC05XXw5WzAtN10pJCcsXG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OTk5OTk5XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAna20nOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZSxcbiAgICB9XG59KTtcblxuXG4iLCIvLyBzZXR1cCBhbiBcImFkZCBhIHRhZ1wiIGxpbmtcblxuXG5pbml0KClcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKCcuY29sbGVjdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIC8vcG9uIGFkZGl0aW9uZSBsZSBib3V0cG9uIHN1cHByaW1lclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5jdXN0b20tZmlsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hcHBlbmQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyZW1vdmUtdGFnIGJ0biBidG4tZGFuZ2VyXCIgPlN1cHByaW1lcjwvYT4nKVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciAkY29sbGVjdGlvbkhvbGRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgIGlmICgkY29sbGVjdGlvbkhvbGRlci5hdHRyKCdkYXRhLXByb3RvdHlwZScpKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICRjb2xsZWN0aW9uSG9sZGVyLmF0dHIoJ2lkJykuc3BsaXQoJ18nKS5zbGljZSgtMSlbMF0gLy9vbiBzw6lsZWN0aW9ubmUgbGUgZGVybmllclxuICAgICAgICAgICAgdmFyICRhZGRUYWdMaW5rID0gJCgnPGEgaHJlZj1cIiNcIiBpZD1cImFkZF90YWdfbGlua18nICsgY29sbGVjdGlvbk5hbWUgKyAnXCIgY2xhc3M9XCJhZGRfdGFnX2xpbmsgYnRuIGJ0bi1wcmltYXJ5XCI+PC9hPicpO1xuICAgICAgICAgICAgLy9vbiB2w6lyaWZpZSBzaSBvbiBhIHRyYWl0ZXIgY2V0dGUgY29sbGVjdGlvbiBlbiB2w6lyaWZpYW50IGxhIHByw6lzZW5jZSBkdSBib3V0b24gYWpvdXRlclxuICAgICAgICAgICAgaWYgKCQoJyMnICsgJ2FkZF90YWdfbGlua18nICsgY29sbGVjdGlvbk5hbWUpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kKCRhZGRUYWdMaW5rKTtcbiAgICAgICAgICAgICAgICAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsICRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJzppbnB1dCcpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgJGFkZFRhZ0xpbmsuYXBwZW5kKCdBam91dGVyICcgKyBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgJGFkZFRhZ0xpbmsuYWRkQ2xhc3MoJ2NvbC0xMicpXG4gICAgICAgICAgICAgICAgJGFkZFRhZ0xpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCB0aGUgbGluayBmcm9tIGNyZWF0aW5nIGEgXCIjXCIgb24gdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgbmV3IHRhZyBmb3JtIChzZWUgY29kZSBibG9jayBiZWxvdylcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFnRm9ybSgkY29sbGVjdGlvbkhvbGRlciwgJGFkZFRhZ0xpbmspO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSB0aGUgcmVtb3ZhbCwganVzdCBmb3IgdGhpcyBleGFtcGxlXG4gICAgJCgnLnJlbW92ZS10YWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5cbiR0YWJDb2wgPSBbJ3NvaW5zJywgJ3BsYW5pZmljYXRpb25zJ11cbi8vYXUgY2FzIG91IG1ldHRyZSB1biB0YWJsZWF1IGF2ZWMgc29pbnMgZXQgcGxhbmlmaWNhdGlvblxuZnVuY3Rpb24gYWRkVGFnRm9ybSgkY29sbGVjdGlvbkhvbGRlciwgJGFkZFRhZ0xpbmspIHtcbiAgICB2YXIgcHJvdG90eXBlID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XG5cbiAgICB2YXIgaW5kZXggPSAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcpO1xuXG4gICAgLy8gUmVwbGFjZSAnJCRuYW1lJCQnIGluIHRoZSBwcm90b3R5cGUncyBIVE1MIHRvXG4gICAgLy8gaW5zdGVhZCBiZSBhIG51bWJlciBiYXNlZCBvbiBob3cgbWFueSBpdGVtcyB3ZSBoYXZlXG4gICAgY29sbGVjdGlvbk5hbWUgPSAkY29sbGVjdGlvbkhvbGRlci5hdHRyKCdpZCcpLnNwbGl0KCdfJykuc2xpY2UoLTEpWzBdIC8vb24gc8OpbGVjdGlvbm5lIGxlIGRlcm5pZXJcbiAgICAvL3NvaW5zX19fbmFtZV9fX1xuICAgIC8vbmFtZT1cIltzb2luc11bX19uYW1lX19dXG4gICAgLy9kw6l0ZWN0aW9ucyBzaSBzIG91IHBhcyDDoCBwcm90b3R5cGVcbiAgICB2YXIgcHJvdG9zO1xuICAgIGlmIChwcm90b3R5cGUuaW5kZXhPZihjb2xsZWN0aW9uTmFtZSArICdfX19uYW1lX19fJykgIT0gLTEpXG4gICAgICAgIHByb3RvcyA9IGNvbGxlY3Rpb25OYW1lO1xuICAgIGVsc2UgcHJvdG9zID0gY29sbGVjdGlvbk5hbWUgKyAncyc7XG4gICAgLy9jaGFuZ2VtZW50IGRlcyBpZHNcbiAgICAvL3N0ci5yZXBsYWNlKC9hYmMvZywgJycpO1xuICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlLnJlcGxhY2UocHJvdG9zICsgJ19fX25hbWVfX18vZycsIHByb3RvcyArICdfJyArIGluZGV4ICsgJ18nKTtcbiAgICAvLyBCdWdcbiAgICAkdGFiQ29sLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vY2hhbmdlbWVudCBkZXMgbmFtZXNcbiAgICAgICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZShlbGVtZW50ICsgJ11cXFtfX25hbWVfX10vZycsIGVsZW1lbnQgKyBcIl1bXCIgKyBpbmRleCArIFwiXVwiKTtcbiAgICB9KTtcblxuXG4gICAgY29uc29sZS5sb2cocHJvdG9zICsgJ11cXFtfX25hbWVfX10nKVxuICAgIC8vbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZUFsbChwcm90b3MgKyBcIl1cIiwgcHJvdG9zICsgXCJdW1wiICsgaW5kZXggKyBcIl1cIik7XG5cblxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcbiAgICAvLyBEaXNwbGF5IHRoZSBmb3JtIGluIHRoZSBwYWdlIGluIGFuIGxpLCBiZWZvcmUgdGhlIFwiQWRkIGEgdGFnXCIgbGluayBsaVxuICAgIHZhciAkbmV3Rm9ybUxpID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQobmV3Rm9ybSk7XG5cbiAgICAvLyBhbHNvIGFkZCBhIHJlbW92ZSBidXR0b24sIGp1c3QgZm9yIHRoaXMgZXhhbXBsZVxuICAgICRuZXdGb3JtTGkuYXBwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwicmVtb3ZlLXRhZyBidG4gYnRuLWRhbmdlclwiID5TdXBwcmltZXI8L2E+Jyk7XG5cbiAgICAkYWRkVGFnTGluay5iZWZvcmUoJG5ld0Zvcm1MaSk7XG5cblxuICAgIC8vb24gdsOpcmlyaWUgcXUnaWwgbid5IGFpdCBwYXMgZGUgbm91dmVhdSBjb2xsZWN0aW9uIMOgIGfDqXJlclxuICAgIGluaXQoKVxuXG59XG4iLCIvKiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wb3ZlciBwb3VyIGxlcyBpbWFnZXNcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKiovXG5cbi8qXG4xKSBwb3NzaWJpbGl0w6kgZGUgbW9kaWZpZXIgbGEgbGFyZ2V1ciBwYXJcbi5wb3BvdmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbjIpIHBvc3NpYmlsaXTDqSBkZSBkw6lpbmlyIHVuZSBmZXJtZXR1cmUgYXV0b21hdGlxdWUgZW4gbXMgc2lub24gcGFyIGNsaWNrIHNpIHBhcyBkw6lmaW5pXG52YXIgcG9wb3Zlcl90aW1lPTIwMDBcbiovXG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG4kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLWhvdmVyXCJdJylcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9wdXAgPSB0aGlzXG4gICAgICAgIC8vZmVybWV0dXJlIGF1dG9tYXRpcXVlXG4gICAgICAgIGlmICh0eXBlb2YgcG9wb3Zlcl90aW1lICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQocG9wdXApLnBvcG92ZXIoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIHBvcG92ZXJfdGltZSk7XG4gICAgfSlcbiAgICAucG9wb3Zlcih7XG4gICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICBjb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCInICsgJCh0aGlzKS5kYXRhKCdpbWcnKSArICdcIiAvPic7XG4gICAgICAgIH1cbiAgICB9KTtcbiQoXCJodG1sXCIpLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBsID0gJChlLnRhcmdldCk7XG4gICAgaWYgKCQoXCIucG9wb3ZlclwiKS5sZW5ndGgpXG4gICAgICAgIGlmIChsWzBdLmNsYXNzTmFtZS5pbmRleE9mKFwicG9wb3ZlclwiKSA9PSAtMSkge1xuICAgICAgICAgICAgJChcIi5wb3BvdmVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucG9wb3ZlcihcImhpZGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxufSk7IiwiLy9saXN0ZSBzb3J0YWJsZSBlbiBtZXR0YW50ICNzb3J0YWJsZVxucmVxdWlyZSgnanF1ZXJ5LXVpJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zb3J0YWJsZScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uJyk7XG4kKGZ1bmN0aW9uICgpIHtcblxuICAgICQoXCIjc29ydGFibGVcIikuc29ydGFibGUoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGN1cnNvcjogXCJtb3ZlXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RFbGVtZW50cyA9ICQoXCIjc29ydGFibGVcIikuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgICQuZWFjaChsaXN0RWxlbWVudHMsIGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0VmFsdWVzLnB1c2goZWxlbWVudC5kYXRhc2V0Lm51bSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9zb3J0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImVudGl0ZT1cIiArICQoJyNzYXZlX3NvcnRhYmxlJykuYXR0cignZW50aXRlJykgKyAnJnNvcnRhYmxlPScgKyBsaXN0VmFsdWVzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiZGF0YVR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZSBvaycpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuICAgIC8vb24gbWV0IMOgIGpvdXIgbGEgbGlzdGUgYXUgZMOpbWFycmFnZVxuICAgIGlmICgkKCcjZXhfc29ydGFibGUnKS52YWwoKSkge1xuICAgICAgICB2YXIgcG9zaXRpb25zID0gJCgnI2V4X3NvcnRhYmxlJykudmFsKCkuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKHBvc2l0aW9ucykge1xuICAgICAgICAgICAgJC5lYWNoKHBvc2l0aW9ucywgZnVuY3Rpb24gKGksIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKFwiI3NvcnRhYmxlXCIpLmZpbmQoJ1tkYXRhLW51bT0nICsgcG9zaXRpb24gKyAnXScpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuYXBwZW5kVG8oJChcIiNzb3J0YWJsZVwiKSk7IC8vIG9yIHByZXBlbmRUbyBmb3IgcmV2ZXJzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiI3NvcnRhYmxlXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7IiwiLy9taXNlIGVuIHBsYWNlIGQndW5lIGFuaW1hdGlvbiBkb3VjZSBzdXIgbGVzIGNsaWNrIHBvdXIgYWxsZXIgc3VyIGxlcyBhbmNyZXNcbnZhciAkcm9vdCA9ICQoXCJodG1sLCBib2R5XCIpO1xuXG4kKCdhW2hyZWZePVwiI1wiXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAkcm9vdC5hbmltYXRlKFxuICAgIHtcbiAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgXCJocmVmXCIpKS5vZmZzZXQoKS50b3AsXG4gICAgfSxcbiAgICA2MDBcbiAgKTtcblxuICByZXR1cm4gZmFsc2U7XG59KTtcbi8vYWN0aXZhdGlvbiBkZXMgdG9vbHRpcHNcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4iLCJcbnZhciBTbmFtZTtcbnZhciBub21icmU7XG5cbmV4ZWN1dGUoKTtcblxuLy9yZWxhbmNlIHNpIGFqb3V0IGRlIGZpbGVzXG4kKGRvY3VtZW50KS5iaW5kKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGV4ZWN1dGUoKTtcblxufSlcblxuLy8gLy9zaSBjJ2VzdCB1bmUgY29sbGVjdGlvblxuLy8gaWYgKCQoJyMnICsgU25hbWUgKyAndXJsJykubGVuZ3RoICE9IDApIHtcbi8vICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIG5vbWJyZSA9ICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoO1xuLy8gICAgICAgICBpZiAoJCgnIycgKyBTbmFtZSArICd1cmwnKS5sZW5ndGggIT0gMCkgZXhlY3V0ZSgpXG4vLyAgICAgfSk7XG5cbi8vICAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKClcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgdGhpcy5zdWJtaXQoKTtcbi8vICAgICB9KVxuXG5cbi8vIH1cbi8vIGVsc2Uge1xuLy8gICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgJChlLnRhcmdldCkubmV4dCgpLnRleHQoZS50YXJnZXQuZmlsZXNbMF0ubmFtZSlcbi8vICAgICB9KVxuLy8gfVxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoJ29uY2hhbmdlJykpIHsgLy9vbiB2w6lyaWZpZSBxdWUgbCdvbiBhIHBhcyBtaXMgdW4gb25jaGFuZ2VcbiAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoXCJvbmNoYW5nZVwiKTsvLyBvbiwgYWpvdXRlIHVuZSBjbGFzc2VcbiAgICAgICAgICAgIGlkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpXG4gICAgICAgICAgICB1cmwgPSBpZC5zdWJzdHIoMCwgaWQubGVuZ3RoIC0gOCkgKyAnX3VybCdcbiAgICAgICAgICAgIGlmICgkKCcjJyArIHVybCkudmFsKCkpICQoZWxlbWVudCkucGFyZW50KCkuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImV4dmFsZXVyXCI+JyArICQoJyMnICsgdXJsKS52YWwoKSArICc8L3NwYW4+JykgLy9mb25jdGlvbm5lIHF1ZSBwb3VyIGxhIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICQoZWxlbWVudCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBTbmFtZSA9IHRoaXMuaWQuc3Vic3RyKDAsIHRoaXMuaWQubGFzdEluZGV4T2YoJ18nKSkgKyAnXyc7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGUgPSAkKHRoaXMpWzBdLmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIHZhciB1cGxvYWQgPSBuZXcgVXBsb2FkKGZpbGUpO1xuICAgICAgICAgICAgICAgIHZhciBiYXJyZSA9ICQodGhpcykubmV4dCgpXG4gICAgICAgICAgICAgICAgYmFycmUuYXR0cihcImFyaWEtdmFsdWVub3dcIiwgMCk7XG4gICAgICAgICAgICAgICAgLy9iYXJyZS53aWR0aCgnMCUnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS50ZXh0KCdFbnZvecOpICgwJSknKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctd2FybmluZycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWVuZGVkJyk7XG4gICAgICAgICAgICAgICAgdXBsb2FkLmRvVXBsb2FkKCQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbnZhciBVcGxvYWQgPSBmdW5jdGlvbiAoZmlsZSkge1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG59O1xuXG5VcGxvYWQucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS50eXBlO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZXQ7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5zZXRPYmpldCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5vYmpldCA9IGU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUuc2l6ZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5uYW1lO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZG9VcGxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgIFVwbG9hZC5wcm90b3R5cGUuc2V0T2JqZXQoZSlcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAvLyBhZGQgYXNzb2Mga2V5IHZhbHVlcywgdGhpcyB3aWxsIGJlIHBvc3RzIHZhbHVlc1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgdGhpcy5maWxlLCB0aGlzLmdldE5hbWUoKSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidG9rZW5cIiwgJCgnI3Rva2VuJykudmFsKCkpO1xuICAgIHZhciBiYXIgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkuYXR0cignaWQnKVxuICAgIGRpcmVjdG9yeSA9IGJhci5zdWJzdHIoMCwgYmFyLmluZGV4T2YoJ18nKSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZGlyZWN0b3J5XCIsIGRpcmVjdG9yeSk7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9VcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkuYXR0cignYmFzZTY0JywgcmVhZGVyLnJlc3VsdClcbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvdXBsb2FkXCIsXG4gICAgICAgIHhocjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG15WGhyID0gJC5hamF4U2V0dGluZ3MueGhyKCk7XG4gICAgICAgICAgICBpZiAobXlYaHIudXBsb2FkKSB7XG4gICAgICAgICAgICAgICAgbXlYaHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdGhhdC5wcm9ncmVzc0hhbmRsaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXlYaHI7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICB2YXIgcmV0b3VyID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgdmFyIGJhcnJlID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLm5leHQoKVxuICAgICAgICAgICAgVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2RhdGEtdG1wJywgcmV0b3VyLnRtcF9uYW1lKVxuXG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICBiYXJyZS50ZXh0KHJldG91ci5uYW1lKTtcbiAgICAgICAgICAgICQoJyMnICsgU25hbWUgKyAndXJsJykudmFsKEpTT04uc3RyaW5naWZ5KHJldG91cikpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1lbmRlZCcpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgIGJhcnJlLnRleHQoJ0VycmV1ciBkYW5zIGxcXCdlbnZvaWUnKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICB0aW1lb3V0OiA2MDAwMFxuICAgIH0pO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5wcm9ncmVzc0hhbmRsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwZXJjZW50ID0gMDtcbiAgICB2YXIgcG9zaXRpb24gPSBldmVudC5sb2FkZWQgfHwgZXZlbnQucG9zaXRpb247XG4gICAgdmFyIHRvdGFsID0gZXZlbnQudG90YWw7XG4gICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgcGVyY2VudCA9IE1hdGguY2VpbChwb3NpdGlvbiAvIHRvdGFsICogMTAwKTtcbiAgICB9XG4gICAgdmFyIGJhcnJlID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLm5leHQoKVxuICAgIGJhcnJlLnNob3coKTtcbiAgICBiYXJyZS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCBwZXJjZW50LnRvRml4ZWQoMCkpO1xuICAgIC8vYmFycmUud2lkdGgocGVyY2VudC50b0ZpeGVkKDApICsgJyUnKTtcbiAgICBiYXJyZS50ZXh0KCdFbnZvecOpICgnICsgcGVyY2VudC50b0ZpeGVkKDIpICsgJyUpJyk7XG59O1xuXG5cblxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=