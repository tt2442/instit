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
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-b2a4d6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9wYXRjaC9wYXRjaF9jcnVkL2FsaWFzLmpzIiwid2VicGFjazovLy8uL3BhdGNoL3BhdGNoX2NydWQvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiZWxlbWVudCIsInRleHRDb250ZW50IiwiQ29udHJvbGxlciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiSW5wdXRtYXNrIiwibWFzayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXF1aXJlIiwib24iLCJwb3B1cCIsInNldFRpbWVvdXQiLCJwb3BvdmVyIiwiaHRtbCIsInRyaWdnZXIiLCJwbGFjZW1lbnQiLCJjb250ZW50IiwiZSIsImwiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiZWFjaCIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJleHRlbmRBbGlhc2VzIiwicmVnZXgiLCJhbGlhcyIsImF1dG9Hcm91cCIsImRpZ2l0cyIsInBsYWNlaG9sZGVyIiwicmlnaHRBbGlnbiIsImdyZWVkeSIsImFsbG93TWludXMiLCJTbmFtZSIsIm5vbWJyZSIsImxlbmd0aCIsImV4ZWN1dGUiLCJzZXRJbnRlcnZhbCIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwicmVtb3ZlIiwidGV4dGUiLCJhdHRyIiwicmVwbGFjZUFsbCIsInByZXYiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJuZXh0IiwidGV4dCIsImZpbGVzIiwibmFtZSIsImlkIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJmaWxlIiwidXBsb2FkIiwiVXBsb2FkIiwiYmFycmUiLCJkb1VwbG9hZCIsInByb3RvdHlwZSIsImdldFR5cGUiLCJ0eXBlIiwiZ2V0T2JqZXQiLCJvYmpldCIsInNldE9iamV0IiwiZ2V0U2l6ZSIsInNpemUiLCJnZXROYW1lIiwidGhhdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ2YWwiLCJiYXIiLCJkaXJlY3RvcnkiLCJhamF4IiwidXJsIiwieGhyIiwibXlYaHIiLCJhamF4U2V0dGluZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZ3Jlc3NIYW5kbGluZyIsInN1Y2Nlc3MiLCJkYXRhIiwicmV0b3VyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJhc3luYyIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInRpbWVvdXQiLCJwZXJjZW50IiwicG9zaXRpb24iLCJldmVudCIsImxvYWRlZCIsInRvdGFsIiwibGVuZ3RoQ29tcHV0YWJsZSIsIk1hdGgiLCJjZWlsIiwic2hvdyIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUVJLG1CQUFVO0FBQ04sV0FBS0EsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLG1FQUEzQjtBQUNIOzs7O0VBSHdCQyxpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUssQ0FBQ0MsTUFBTixJQUFnQkQsS0FBSyxDQUFDRCxRQUFyQztBQUNBLE1BQUlHLEtBQUssR0FBR0YsS0FBSyxDQUFDRSxLQUFsQjs7QUFDQSxNQUFJRixLQUFLLENBQUNHLGdCQUFWLEVBQTRCO0FBQ3hCTCxXQUFPLEdBQUdNLElBQUksQ0FBQ0MsSUFBTCxDQUFVTixRQUFRLEdBQUdHLEtBQVgsR0FBbUIsR0FBN0IsQ0FBVjtBQUNIOztBQUNELE1BQUl6QyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkcsUUFBakIsR0FBNEJmLElBQTVCLEVBQVo7QUFDQVUsT0FBSyxDQUFDNkMsSUFBTjtBQUNBN0MsT0FBSyxDQUFDaEIsSUFBTixDQUFXLGVBQVgsRUFBNEJxRCxPQUFPLENBQUNTLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBNUIsRUFUNEMsQ0FVNUM7O0FBQ0E5QyxPQUFLLENBQUNULElBQU4sQ0FBVyxhQUFhOEMsT0FBTyxDQUFDUyxPQUFSLENBQWdCLENBQWhCLENBQWIsR0FBa0MsSUFBN0M7QUFDSCxDQVpELEM7Ozs7Ozs7Ozs7OztBQ3pJQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjsgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkgeyBJbnB1dG1hc2soKS5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7IH0pXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlJztcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5pbXBvcnQgJy4uL3BhdGNoL3BhdGNoX2NydWQvYWxpYXMuanMnO1xuaW1wb3J0ICcuLi9wYXRjaC9wYXRjaF9jcnVkL3VwbG9hZCc7XG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW5cIjtcblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXItaG92ZXJcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvcHVwID0gdGhpc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAkKHBvcHVwKS5wb3BvdmVyKCdoaWRlJyk7IH0sIDUwMDApO1xufSkucG9wb3Zlcih7IGh0bWw6IHRydWUsIHRyaWdnZXI6ICdjbGljaycsIHBsYWNlbWVudDogJ2JvdHRvbScsIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9IH0pOyAkKFwiaHRtbFwiKS5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHsgdmFyIGwgPSAkKGUudGFyZ2V0KTsgaWYgKGxbMF0uY2xhc3NOYW1lLmluZGV4T2YoXCJwb3BvdmVyXCIpID09IC0xKSB7ICQoXCIucG9wb3ZlclwiKS5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5wb3BvdmVyKFwiaGlkZVwiKTsgfSk7IH0gfSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICd0ZXh0ZV9wcm9wcmUnOiB7XG4gICAgICAgIHJlZ2V4OiBcIl4oW2EtekEtWsOgw6HDosOkw6PDpcSFxI3Eh8SZw6jDqcOqw6vEl8Svw6zDrcOuw6/FgsWEw7LDs8O0w7bDtcO4w7nDusO7w7zFs8Wrw7/DvcW8xbrDscOnxI3FocW+w4DDgcOCw4TDg8OFxITEhsSMxJbEmMOIw4nDisOLw4zDjcOOw4/ErsWBxYPDksOTw5TDlsOVw5jDmcOaw5vDnMWyxarFuMOdxbvFucORw5/Dh8WSw4bEjMWgxb3iiILDsCAsJy4tXSskKVwiLFxuICAgIH1cbn0pO1xuXG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnY29kZV9wb3N0YWwnOiB7XG4gICAgICAgIG1hc2s6IFwiOTkgOTk5XCIsXG4gICAgfVxufSk7XG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnYWRlbGknOiB7XG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OVwiLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdzaXJldCc6IHtcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5XCIsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3ByaXgnOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZVxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ21ldHJlJzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBhdXRvR3JvdXA6IHRydWUsXG4gICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICByaWdodEFsaWduOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiBmYWxzZSxcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2VcblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdjZW50aW1ldHJlJzoge1xuICAgICAgICBhbGlhczogJ21ldHJlJyxcblxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3Bob25lZnInOiB7XG4gICAgICAgIHJlZ2V4OiAnXigwfFxcXFwrMzMgKVsxLTldIChbLS4gXT9bMC05XXsyfSApezN9KFstLiBdP1swLTldezJ9KSQnLFxuICAgICAgICBhdXRvR3JvdXA6IHRydWUsXG4gICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICByaWdodEFsaWduOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiBmYWxzZSxcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2UsXG5cblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdzZWN1Jzoge1xuICAgICAgICByZWdleDogJ14oWzEtM10pID8oWzAtOV17Mn0pID8oWzAtOV18WzItMzUtOV1bMC05XXxbMTRdWzAtMl0pID8oMFsxLTldfFsxLThdWzAtOV18OVswLTU3LTldfDJbYWJdKVtcXHNcXC5cXC1dPygwMFsxLTldfDBbMS05XVswLTldfFsxLThdWzAtOV17Mn18OVswLThdWzAtOV18OTkwKSA/KFswLTldezN9KSA/KFswLThdWzAtOV18OVswLTddKSQnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdrbSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlLFxuICAgIH1cbn0pO1xuXG5cbiIsIlxudmFyIFNuYW1lO1xudmFyIG5vbWJyZTtcblxuLy9zaSBjJ2VzdCB1bmUgY29sbGVjdGlvblxuaWYgKCQoJyMnICsgU25hbWUgKyAndXJsJykubGVuZ3RoICE9IDApIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5vbWJyZSA9ICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoO1xuICAgICAgICBpZiAoJCgnIycgKyBTbmFtZSArICd1cmwnKS5sZW5ndGggIT0gMCkgZXhlY3V0ZSgpXG4gICAgfSk7XG4gICAgLy9yZWxhbmNlIHNpIGFqb3V0IGRlIGZpbGVzXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGggPiBub21icmUpIHtcbiAgICAgICAgICAgIG5vbWJyZSA9ICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoXG4gICAgICAgICAgICBleGVjdXRlKCk7XG4gICAgICAgIH1cbiAgICB9LCAzMDApO1xuXG4gICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgfSlcblxuICAgIC8vbmV0dG95YWdlIGRlcyBjb2xsZWN0aW9uc1xuXG4gICAgJCgnLmNvbGxlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRleHRlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xuICAgICAgICB0ZXh0ZSA9IHRleHRlLnJlcGxhY2VBbGwoJ2NvbC1zbS00JywgJ2NvbC0yJykucmVwbGFjZUFsbCgnY29sLXNtLTgnLCAnY29sLTEwJylcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLXByb3RvdHlwZScsIHRleHRlKTtcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkucHJldigpLmhhc0NsYXNzKCdjb2wtc20tOCcpKSAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtMTEnKS5yZW1vdmVDbGFzcygnY29sLXNtLTgnKVxuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuaGFzQ2xhc3MoJ2NvbC1zbS00JykpICQodGhpcykucGFyZW50KCkucHJldigpLmFkZENsYXNzKCdjb2wtMScpLnJlbW92ZUNsYXNzKCdjb2wtc20tNCcpXG5cblxuICAgIH0pXG59XG5lbHNlIHtcbiAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoZS50YXJnZXQpLm5leHQoKS50ZXh0KGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIFNuYW1lID0gdGhpcy5pZC5zdWJzdHIoMCwgdGhpcy5pZC5sYXN0SW5kZXhPZignXycpKSArICdfJztcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm9uY2hhbmdlXCIpO1xuICAgICAgICB2YXIgZmlsZSA9ICQodGhpcylbMF0uZmlsZXNbMF07XG4gICAgICAgIHZhciB1cGxvYWQgPSBuZXcgVXBsb2FkKGZpbGUpO1xuICAgICAgICB2YXIgYmFycmUgPSAkKHRoaXMpLm5leHQoKVxuICAgICAgICBiYXJyZS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCAwKTtcbiAgICAgICAgLy9iYXJyZS53aWR0aCgnMCUnKTtcbiAgICAgICAgYmFycmUudGV4dCgnRW52b3nDqSAoMCUpJyk7XG4gICAgICAgIGJhcnJlLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcbiAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgdXBsb2FkLmRvVXBsb2FkKCQodGhpcykpO1xuICAgIH0pO1xufVxuXG5cblxudmFyIFVwbG9hZCA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbn07XG5cblVwbG9hZC5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnR5cGU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpldDtcbn07XG5VcGxvYWQucHJvdG90eXBlLnNldE9iamV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLm9iamV0ID0gZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5zaXplO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLm5hbWU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5kb1VwbG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgVXBsb2FkLnByb3RvdHlwZS5zZXRPYmpldChlKVxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIC8vIGFkZCBhc3NvYyBrZXkgdmFsdWVzLCB0aGlzIHdpbGwgYmUgcG9zdHMgdmFsdWVzXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCB0aGlzLmZpbGUsIHRoaXMuZ2V0TmFtZSgpKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCAkKCcjdG9rZW4nKS52YWwoKSk7XG4gICAgdmFyIGJhciA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdpZCcpXG4gICAgZGlyZWN0b3J5ID0gYmFyLnN1YnN0cigwLCBiYXIuaW5kZXhPZignXycpKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkaXJlY3RvcnlcIiwgZGlyZWN0b3J5KTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi91cGxvYWRcIixcbiAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXlYaHIgPSAkLmFqYXhTZXR0aW5ncy54aHIoKTtcbiAgICAgICAgICAgIGlmIChteVhoci51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICBteVhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCB0aGF0LnByb2dyZXNzSGFuZGxpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBteVhocjtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciByZXRvdXIgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICBiYXJyZS50ZXh0KHJldG91ci5uYW1lKTtcbiAgICAgICAgICAgICQoJyMnICsgU25hbWUgKyAndXJsJykudmFsKEpTT04uc3RyaW5naWZ5KHJldG91cikpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgIGJhcnJlLnRleHQoJ0VycmV1ciBkYW5zIGxcXCdlbnZvaWUnKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICB0aW1lb3V0OiA2MDAwMFxuICAgIH0pO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5wcm9ncmVzc0hhbmRsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwZXJjZW50ID0gMDtcbiAgICB2YXIgcG9zaXRpb24gPSBldmVudC5sb2FkZWQgfHwgZXZlbnQucG9zaXRpb247XG4gICAgdmFyIHRvdGFsID0gZXZlbnQudG90YWw7XG4gICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgcGVyY2VudCA9IE1hdGguY2VpbChwb3NpdGlvbiAvIHRvdGFsICogMTAwKTtcbiAgICB9XG4gICAgdmFyIGJhcnJlID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLm5leHQoKVxuICAgIGJhcnJlLnNob3coKTtcbiAgICBiYXJyZS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCBwZXJjZW50LnRvRml4ZWQoMCkpO1xuICAgIC8vYmFycmUud2lkdGgocGVyY2VudC50b0ZpeGVkKDApICsgJyUnKTtcbiAgICBiYXJyZS50ZXh0KCdFbnZvecOpICgnICsgcGVyY2VudC50b0ZpeGVkKDIpICsgJyUpJyk7XG59O1xuXG5cblxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=