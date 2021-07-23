(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

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
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all */ "./assets/all.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;


__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");




 // start the Stimulus application

$('[data-toggle="tooltip"]').tooltip();
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
  $('.collapse-menu').collapse('hide');
});

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
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

// setup an "add a tag" link
init();

function init() {
  $('.collection').each(function (index, element) {
    // pon additione le boutpon supprimer
    var $collectionHolder = $(element);

    if ($collectionHolder.attr('data-prototype')) {
      collectionName = $collectionHolder.attr('id').split('_').slice(-1)[0]; // on sélectionne le dernier

      var $addTagLink = $('<a href="#" id="add_tag_link_' + collectionName + '" class="add_tag_link btn btn-primary"></a>'); // on vérifie si on a traiter cette collection en vérifiant la présence du bouton ajouter

      if ($('#' + 'add_tag_link_' + collectionName).length == 0) {
        $collectionHolder.append($addTagLink);
        $collectionHolder.data('index', $collectionHolder.find(':input').length);
        $collectionHolder.find('fieldset').append('<a href="#" class="remove-tag btn btn-danger" >Supprimer</a>');
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

$tabCol = ['soins', 'planifications']; // au cas ou mettre un tableau avec soins et planification

function addTagForm($collectionHolder, $addTagLink) {
  var prototype = $collectionHolder.data('prototype');
  var index = $collectionHolder.data('index'); // Replace '$$name$$' in the prototype's HTML to
  // instead be a number based on how many items we have

  collectionName = $collectionHolder.attr('id').split('_').slice(-1)[0]; // on sélectionne le dernier
  // soins___name___
  // name="[soins][__name__]
  // détections si s ou pas à prototype

  var protos;
  if (prototype.indexOf(collectionName + '___name___') != -1) protos = collectionName;else protos = collectionName + 's'; // changement des ids
  // str.replace(/abc/g, '');

  var newForm = prototype.replace(protos + '___name___/g', protos + '_' + index + '_'); // Bug

  $tabCol.forEach(function (element) {
    // changement des names
    newForm = newForm.replace(element + ']\[__name__]/g', element + "][" + index + "]");
  });
  console.log(protos + ']\[__name__]'); // newForm = newForm.replaceAll(protos + "]", protos + "][" + index + "]");

  $collectionHolder.data('index', index + 1); // Display the form in the page in an li, before the "Add a tag" link li

  var $newFormLi = $('<div></div>').append(newForm); // also add a remove button, just for this example

  $newFormLi.append('<a href="#" class="remove-tag btn btn-danger" >Supprimer</a>');
  $addTagLink.before($newFormLi); // on véririe qu'il n'y ait pas de nouveau collection à gérer

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
$('[data-toggle="popover-hover"]');
$('[data-toggle="popover-hover"]').on('shown.bs.popover', function () {}).on('click', function () {
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
    return '<img class="img-fluid mx-auto" src="' + $(this).data('img') + '" />';
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
//activation des tooltips
$('[data-toggle="tooltip"]').tooltip(); //gestion des images qui doivent remplir un div sans se déformer et couper ce qui dépasse

$('.cover').each(function (index, element) {
  $(this).css({
    "object-fit": "cover",
    "height": this.parentNode.clientHeight + 'px',
    "width": this.parentNode.clientWidth + 'px'
  });
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_bootstrap_dist_js_bo-c19991"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWxsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svYWxpYXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNjcnVkbWljay9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3NvcnRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZ2xvYmFsIiwialF1ZXJ5IiwidG9vbHRpcCIsIm93bENhcm91c2VsIiwiY2VudGVyIiwiaXRlbXMiLCJsb29wIiwibWFyZ2luIiwicmVzcG9uc2l2ZSIsIm93bCIsImNsaWNrIiwidHJpZ2dlciIsImRvY3VtZW50IiwiZXZlbnQiLCJjb2xsYXBzZSIsImJpbmQiLCJlIiwiSW5wdXRtYXNrIiwibWFzayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWdleCIsInBsYWNlaG9sZGVyIiwiYWxpYXMiLCJhdXRvR3JvdXAiLCJkaWdpdHMiLCJyaWdodEFsaWduIiwiZ3JlZWR5IiwiYWxsb3dNaW51cyIsImluaXQiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiJGNvbGxlY3Rpb25Ib2xkZXIiLCJhdHRyIiwiY29sbGVjdGlvbk5hbWUiLCJzcGxpdCIsInNsaWNlIiwiJGFkZFRhZ0xpbmsiLCJsZW5ndGgiLCJhcHBlbmQiLCJkYXRhIiwiZmluZCIsImFkZENsYXNzIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRhZ0Zvcm0iLCJwYXJlbnQiLCJyZW1vdmUiLCIkdGFiQ29sIiwicHJvdG90eXBlIiwicHJvdG9zIiwiaW5kZXhPZiIsIm5ld0Zvcm0iLCJyZXBsYWNlIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCIkbmV3Rm9ybUxpIiwiYmVmb3JlIiwicG9wb3ZlciIsInBvcHVwIiwicG9wb3Zlcl90aW1lIiwic2V0VGltZW91dCIsImh0bWwiLCJwbGFjZW1lbnQiLCJjb250YWluZXIiLCJjb250ZW50IiwibCIsInRhcmdldCIsImNsYXNzTmFtZSIsInNvcnRhYmxlIiwiY3Vyc29yIiwib3BhY2l0eSIsInN0b3AiLCJ1aSIsImxpc3RFbGVtZW50cyIsImNoaWxkcmVuIiwibGlzdFZhbHVlcyIsInB1c2giLCJkYXRhc2V0IiwibnVtIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJqb2luIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsInZhbCIsInBvc2l0aW9ucyIsImkiLCJwb3NpdGlvbiIsIiR0YXJnZXQiLCJhcHBlbmRUbyIsImRpc2FibGVTZWxlY3Rpb24iLCJjc3MiLCJwYXJlbnROb2RlIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJTbmFtZSIsIm5vbWJyZSIsImV4ZWN1dGUiLCJoYXNDbGFzcyIsImlkIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJmaWxlIiwiZmlsZXMiLCJ1cGxvYWQiLCJVcGxvYWQiLCJiYXJyZSIsIm5leHQiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCJkb1VwbG9hZCIsImdldFR5cGUiLCJnZXRPYmpldCIsIm9iamV0Iiwic2V0T2JqZXQiLCJnZXRTaXplIiwic2l6ZSIsImdldE5hbWUiLCJuYW1lIiwidGhhdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJiYXIiLCJkaXJlY3RvcnkiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInhociIsIm15WGhyIiwiYWpheFNldHRpbmdzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2dyZXNzSGFuZGxpbmciLCJyZXRvdXIiLCJKU09OIiwicGFyc2UiLCJ0bXBfbmFtZSIsInN0cmluZ2lmeSIsImFzeW5jIiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwidGltZW91dCIsInBlcmNlbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImxlbmd0aENvbXB1dGFibGUiLCJNYXRoIiwiY2VpbCIsInNob3ciLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQUMscUJBQU0sQ0FBQ0YsQ0FBUCxHQUFXRSxxQkFBTSxDQUFDQyxNQUFQLEdBQWdCSCxDQUEzQjtBQUVBOztBQUNBQyxtQkFBTyxDQUFDLG1IQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsdUdBQUQsQ0FBUDs7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFHQUQsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJJLE9BQTdCO0FBSUFKLENBQUMsQ0FBQyxZQUFZO0FBQ1ZBLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJLLFdBQW5CLENBQStCO0FBQzNCQyxVQUFNLEVBQUUsS0FEbUI7QUFFM0JDLFNBQUssRUFBRSxDQUZvQjtBQUczQkMsUUFBSSxFQUFFLElBSHFCO0FBSTNCQyxVQUFNLEVBQUUsRUFKbUI7QUFLM0JDLGNBQVUsRUFBRTtBQUNSLFdBQUs7QUFDREgsYUFBSyxFQUFFO0FBRE47QUFERztBQUxlLEdBQS9CO0FBWUEsTUFBSUksR0FBRyxHQUFHWCxDQUFDLENBQUMsZUFBRCxDQUFYO0FBQ0FXLEtBQUcsQ0FBQ04sV0FBSixHQWRVLENBZVY7O0FBQ0FMLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CWSxLQUFwQixDQUEwQixZQUFZO0FBQ2xDRCxPQUFHLENBQUNFLE9BQUosQ0FBWSxtQkFBWjtBQUNILEdBRkQsRUFoQlUsQ0FtQlY7O0FBQ0FiLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENB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SyxDQUFDckUsUUFBTixDQUFlLFlBQWY7QUFDSCxLQXBDRTtBQXFDSHFHLFNBQUssRUFBRSxJQXJDSjtBQXNDSHZHLFFBQUksRUFBRXFGLFFBdENIO0FBdUNIbUIsU0FBSyxFQUFFLEtBdkNKO0FBd0NIQyxlQUFXLEVBQUUsS0F4Q1Y7QUF5Q0hDLGVBQVcsRUFBRSxLQXpDVjtBQTBDSEMsV0FBTyxFQUFFO0FBMUNOLEdBQVA7QUE0Q0gsQ0E1REQ7O0FBOERBckMsTUFBTSxDQUFDN0QsU0FBUCxDQUFpQndGLGdCQUFqQixHQUFvQyxZQUFZO0FBQzVDLE1BQUlXLE9BQU8sR0FBRyxDQUFkO0FBQ0EsTUFBSXhELFFBQVEsR0FBRy9FLEtBQUssQ0FBQ3dJLE1BQU4sSUFBZ0J4SSxLQUFLLENBQUMrRSxRQUFyQztBQUNBLE1BQUkwRCxLQUFLLEdBQUd6SSxLQUFLLENBQUN5SSxLQUFsQjs7QUFDQSxNQUFJekksS0FBSyxDQUFDMEksZ0JBQVYsRUFBNEI7QUFDeEJILFdBQU8sR0FBR0ksSUFBSSxDQUFDQyxJQUFMLENBQVU3RCxRQUFRLEdBQUcwRCxLQUFYLEdBQW1CLEdBQTdCLENBQVY7QUFDSDs7QUFDRCxNQUFJdkMsS0FBSyxHQUFHRCxNQUFNLENBQUM3RCxTQUFQLENBQWlCb0UsUUFBakIsR0FBNEJMLElBQTVCLEVBQVo7QUFDQUQsT0FBSyxDQUFDMkMsSUFBTjtBQUNBM0MsT0FBSyxDQUFDOUUsSUFBTixDQUFXLGVBQVgsRUFBNEJtSCxPQUFPLENBQUNPLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBNUIsRUFUNEMsQ0FVNUM7O0FBQ0E1QyxPQUFLLENBQUNFLElBQU4sQ0FBVyxhQUFhbUMsT0FBTyxDQUFDTyxPQUFSLENBQWdCLENBQWhCLENBQWIsR0FBa0MsSUFBN0M7QUFDSCxDQVpELEM7Ozs7Ozs7Ozs7OztBQ2xKQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2pzY3J1ZG1pY2svY29sbGVjdGlvblwiO1xuaW1wb3J0IFwiLi9qc2NydWRtaWNrL3VwbG9hZFwiO1xuaW1wb3J0IFwiLi9qc2NydWRtaWNrL2FsaWFzXCI7XG5pbXBvcnQgXCIuL2pzY3J1ZG1pY2svcG9wb3ZlclwiO1xuaW1wb3J0IFwiLi9qc2NydWRtaWNrL3NvcnRhYmxlXCI7XG5pbXBvcnQgXCIuL2pzY3J1ZG1pY2svdG9vbHNcIjtcbiIsIlxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5pbXBvcnQgXCJib290c3RyYXBcIjtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5pbXBvcnQgJ293bC5jYXJvdXNlbC9kaXN0L2Fzc2V0cy9vd2wuY2Fyb3VzZWwuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL2FsbCdcblxuXG5cblxuXG5cbmltcG9ydCAnb3dsLmNhcm91c2VsJztcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuXG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKClcblxuXG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgb3dsID0gJCgnLm93bC1jYXJvdXNlbCcpO1xuICAgIG93bC5vd2xDYXJvdXNlbCgpO1xuICAgIC8vIEdvIHRvIHRoZSBuZXh0IGl0ZW1cbiAgICAkKCcuY3VzdG9tTmV4dEJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3dsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgfSlcbiAgICAvLyBHbyB0byB0aGUgcHJldmlvdXMgaXRlbVxuICAgICQoJy5jdXN0b21QcmV2QnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQYXJhbWV0ZXJzIGhhcyB0byBiZSBpbiBzcXVhcmUgYnJhY2tldCAnW10nXG4gICAgICAgIG93bC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgIH0pXG59KTtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICQoJy5jb2xsYXBzZS1tZW51JykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICB9KTtcbiAgICAkKCcuY29sbGFwc2UtbWVudScpLmNvbGxhcHNlKCdoaWRlJyk7XG59KTsiLCJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjtcblxuLy9kw6hzIHF1J3VuIMOpbMOpbcOpbmV0IGVzdCBpbnPDqXLDqSBvbiByZWxhbmNlIGlucHV0IG1hc2tcbiQoZG9jdW1lbnQpLmJpbmQoJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgSW5wdXRtYXNrKCkubWFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xufSk7XG5cblxuXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3RleHRlX3Byb3ByZSc6IHtcbiAgICAgICAgcmVnZXg6IFwiXihbYS16QS1aw6DDocOiw6TDo8OlxIXEjcSHxJnDqMOpw6rDq8SXxK/DrMOtw67Dr8WCxYTDssOzw7TDtsO1w7jDucO6w7vDvMWzxavDv8O9xbzFusOxw6fEjcWhxb7DgMOBw4LDhMODw4XEhMSGxIzElsSYw4jDicOKw4vDjMONw47Dj8SuxYHFg8OSw5PDlMOWw5XDmMOZw5rDm8OcxbLFqsW4w53Fu8W5w5HDn8OHxZLDhsSMxaDFveKIgsOwICwnLi1dKyQpXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcblxuXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2NvZGVfcG9zdGFsJzoge1xuICAgICAgICBtYXNrOiBcIjk5IDk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnYWRlbGknOiB7XG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NpcmV0Jzoge1xuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdwcml4Jzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBhdXRvR3JvdXA6IHRydWUsXG4gICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICByaWdodEFsaWduOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiBmYWxzZSxcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2VcblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdtZXRyZSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnY2VudGltZXRyZSc6IHtcbiAgICAgICAgYWxpYXM6ICdtZXRyZScsXG5cblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdwaG9uZWZyJzoge1xuICAgICAgICBtYXNrOiAnKCs5OXw5KTkuOTkuOTkuOTkuOTknLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3NlY3UnOiB7XG4gICAgICAgIC8vcmVnZXg6ICdeKFsxLTNdKSA/KFswLTldezJ9KSA/KFswLTldfFsyLTM1LTldWzAtOV18WzE0XVswLTJdKSA/KDBbMS05XXxbMS04XVswLTldfDlbMC01Ny05XXwyW2FiXSlbXFxzXFwuXFwtXT8oMDBbMS05XXwwWzEtOV1bMC05XXxbMS04XVswLTldezJ9fDlbMC04XVswLTldfDk5MCkgPyhbMC05XXszfSkgPyhbMC04XVswLTldfDlbMC03XSkkJyxcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdrbSc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlLFxuICAgIH1cbn0pO1xuXG5cbiIsIi8vIHNldHVwIGFuIFwiYWRkIGEgdGFnXCIgbGlua1xuXG5cbmluaXQoKVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgICQoJy5jb2xsZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHsgLy8gcG9uIGFkZGl0aW9uZSBsZSBib3V0cG9uIHN1cHByaW1lclxuXG4gICAgICAgIHZhciAkY29sbGVjdGlvbkhvbGRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgIGlmICgkY29sbGVjdGlvbkhvbGRlci5hdHRyKCdkYXRhLXByb3RvdHlwZScpKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICRjb2xsZWN0aW9uSG9sZGVyLmF0dHIoJ2lkJykuc3BsaXQoJ18nKS5zbGljZSgtMSlbMF0gLy8gb24gc8OpbGVjdGlvbm5lIGxlIGRlcm5pZXJcbiAgICAgICAgICAgIHZhciAkYWRkVGFnTGluayA9ICQoJzxhIGhyZWY9XCIjXCIgaWQ9XCJhZGRfdGFnX2xpbmtfJyArIGNvbGxlY3Rpb25OYW1lICsgJ1wiIGNsYXNzPVwiYWRkX3RhZ19saW5rIGJ0biBidG4tcHJpbWFyeVwiPjwvYT4nKTtcbiAgICAgICAgICAgIC8vIG9uIHbDqXJpZmllIHNpIG9uIGEgdHJhaXRlciBjZXR0ZSBjb2xsZWN0aW9uIGVuIHbDqXJpZmlhbnQgbGEgcHLDqXNlbmNlIGR1IGJvdXRvbiBham91dGVyXG4gICAgICAgICAgICBpZiAoJCgnIycgKyAnYWRkX3RhZ19saW5rXycgKyBjb2xsZWN0aW9uTmFtZSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAkY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJGFkZFRhZ0xpbmspO1xuICAgICAgICAgICAgICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnOmlucHV0JykubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAkY29sbGVjdGlvbkhvbGRlci5maW5kKCdmaWVsZHNldCcpLmFwcGVuZCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInJlbW92ZS10YWcgYnRuIGJ0bi1kYW5nZXJcIiA+U3VwcHJpbWVyPC9hPicpO1xuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLmFwcGVuZCgnQWpvdXRlciAnICsgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLmFkZENsYXNzKCdjb2wtMTInKVxuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IC8vIHByZXZlbnQgdGhlIGxpbmsgZnJvbSBjcmVhdGluZyBhIFwiI1wiIG9uIHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYSBuZXcgdGFnIGZvcm0gKHNlZSBjb2RlIGJsb2NrIGJlbG93KVxuICAgICAgICAgICAgICAgICAgICBhZGRUYWdGb3JtKCRjb2xsZWN0aW9uSG9sZGVyLCAkYWRkVGFnTGluayk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSB0aGUgcmVtb3ZhbCwganVzdCBmb3IgdGhpcyBleGFtcGxlXG4gICAgJCgnLnJlbW92ZS10YWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5cbiR0YWJDb2wgPSBbJ3NvaW5zJywgJ3BsYW5pZmljYXRpb25zJ11cbi8vIGF1IGNhcyBvdSBtZXR0cmUgdW4gdGFibGVhdSBhdmVjIHNvaW5zIGV0IHBsYW5pZmljYXRpb25cbmZ1bmN0aW9uIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRhZGRUYWdMaW5rKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xuXG4gICAgdmFyIGluZGV4ID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcblxuICAgIC8vIFJlcGxhY2UgJyQkbmFtZSQkJyBpbiB0aGUgcHJvdG90eXBlJ3MgSFRNTCB0b1xuICAgIC8vIGluc3RlYWQgYmUgYSBudW1iZXIgYmFzZWQgb24gaG93IG1hbnkgaXRlbXMgd2UgaGF2ZVxuICAgIGNvbGxlY3Rpb25OYW1lID0gJGNvbGxlY3Rpb25Ib2xkZXIuYXR0cignaWQnKS5zcGxpdCgnXycpLnNsaWNlKC0xKVswXVxuICAgIC8vIG9uIHPDqWxlY3Rpb25uZSBsZSBkZXJuaWVyXG4gICAgLy8gc29pbnNfX19uYW1lX19fXG4gICAgLy8gbmFtZT1cIltzb2luc11bX19uYW1lX19dXG4gICAgLy8gZMOpdGVjdGlvbnMgc2kgcyBvdSBwYXMgw6AgcHJvdG90eXBlXG4gICAgdmFyIHByb3RvcztcbiAgICBpZiAocHJvdG90eXBlLmluZGV4T2YoY29sbGVjdGlvbk5hbWUgKyAnX19fbmFtZV9fXycpICE9IC0xKSBcbiAgICAgICAgcHJvdG9zID0gY29sbGVjdGlvbk5hbWU7XG4gICAgIGVsc2UgXG4gICAgICAgIHByb3RvcyA9IGNvbGxlY3Rpb25OYW1lICsgJ3MnO1xuICAgIFxuICAgIC8vIGNoYW5nZW1lbnQgZGVzIGlkc1xuICAgIC8vIHN0ci5yZXBsYWNlKC9hYmMvZywgJycpO1xuICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlLnJlcGxhY2UocHJvdG9zICsgJ19fX25hbWVfX18vZycsIHByb3RvcyArICdfJyArIGluZGV4ICsgJ18nKTtcbiAgICAvLyBCdWdcbiAgICAkdGFiQ29sLmZvckVhY2goZWxlbWVudCA9PiB7IC8vIGNoYW5nZW1lbnQgZGVzIG5hbWVzXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoZWxlbWVudCArICddXFxbX19uYW1lX19dL2cnLCBlbGVtZW50ICsgXCJdW1wiICsgaW5kZXggKyBcIl1cIik7XG4gICAgfSk7XG5cblxuICAgIGNvbnNvbGUubG9nKHByb3RvcyArICddXFxbX19uYW1lX19dJylcbiAgICAvLyBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlQWxsKHByb3RvcyArIFwiXVwiLCBwcm90b3MgKyBcIl1bXCIgKyBpbmRleCArIFwiXVwiKTtcblxuXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCArIDEpO1xuICAgIC8vIERpc3BsYXkgdGhlIGZvcm0gaW4gdGhlIHBhZ2UgaW4gYW4gbGksIGJlZm9yZSB0aGUgXCJBZGQgYSB0YWdcIiBsaW5rIGxpXG4gICAgdmFyICRuZXdGb3JtTGkgPSAkKCc8ZGl2PjwvZGl2PicpLmFwcGVuZChuZXdGb3JtKTtcblxuICAgIC8vIGFsc28gYWRkIGEgcmVtb3ZlIGJ1dHRvbiwganVzdCBmb3IgdGhpcyBleGFtcGxlXG4gICAgJG5ld0Zvcm1MaS5hcHBlbmQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyZW1vdmUtdGFnIGJ0biBidG4tZGFuZ2VyXCIgPlN1cHByaW1lcjwvYT4nKTtcblxuICAgICRhZGRUYWdMaW5rLmJlZm9yZSgkbmV3Rm9ybUxpKTtcblxuXG4gICAgLy8gb24gdsOpcmlyaWUgcXUnaWwgbid5IGFpdCBwYXMgZGUgbm91dmVhdSBjb2xsZWN0aW9uIMOgIGfDqXJlclxuICAgIGluaXQoKVxuXG59XG4iLCIvKiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wb3ZlciBwb3VyIGxlcyBpbWFnZXNcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKiovXG5cbi8qXG4xKSBwb3NzaWJpbGl0w6kgZGUgbW9kaWZpZXIgbGEgbGFyZ2V1ciBwYXJcbi5wb3BvdmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbjIpIHBvc3NpYmlsaXTDqSBkZSBkw6lpbmlyIHVuZSBmZXJtZXR1cmUgYXV0b21hdGlxdWUgZW4gbXMgc2lub24gcGFyIGNsaWNrIHNpIHBhcyBkw6lmaW5pXG52YXIgcG9wb3Zlcl90aW1lPTIwMDBcbiovXG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG4kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLWhvdmVyXCJdJylcbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXItaG92ZXJcIl0nKVxuICAgIC5vbignc2hvd24uYnMucG9wb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIFxufSlcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9wdXAgPSB0aGlzXG4gICAgICAgIC8vZmVybWV0dXJlIGF1dG9tYXRpcXVlXG4gICAgICAgIGlmICh0eXBlb2YgcG9wb3Zlcl90aW1lICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQocG9wdXApLnBvcG92ZXIoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIHBvcG92ZXJfdGltZSk7XG4gICAgfSlcbiAgICAucG9wb3Zlcih7XG4gICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICBjb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxpbWcgY2xhc3M9XCJpbWctZmx1aWQgbXgtYXV0b1wiIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2ltZycpICsgJ1wiIC8+JztcbiAgICAgICAgfVxuICAgIH0pO1xuJChcImh0bWxcIikub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGwgPSAkKGUudGFyZ2V0KTtcbiAgICBpZiAoJChcIi5wb3BvdmVyXCIpLmxlbmd0aClcbiAgICAgICAgaWYgKGxbMF0uY2xhc3NOYW1lLmluZGV4T2YoXCJwb3BvdmVyXCIpID09IC0xKSB7XG4gICAgICAgICAgICAkKFwiLnBvcG92ZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wb3BvdmVyKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG59KTsiLCIvL2xpc3RlIHNvcnRhYmxlIGVuIG1ldHRhbnQgI3NvcnRhYmxlXG5yZXF1aXJlKCdqcXVlcnktdWknKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvZGlzYWJsZS1zZWxlY3Rpb24nKTtcbiQoZnVuY3Rpb24gKCkge1xuXG4gICAgJChcIiNzb3J0YWJsZVwiKS5zb3J0YWJsZShcbiAgICAgICAge1xuICAgICAgICAgICAgY3Vyc29yOiBcIm1vdmVcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEVsZW1lbnRzID0gJChcIiNzb3J0YWJsZVwiKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0VmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgJC5lYWNoKGxpc3RFbGVtZW50cywgZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RWYWx1ZXMucHVzaChlbGVtZW50LmRhdGFzZXQubnVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL3NvcnRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiZW50aXRlPVwiICsgJCgnI3NhdmVfc29ydGFibGUnKS5hdHRyKCdlbnRpdGUnKSArICcmc29ydGFibGU9JyArIGxpc3RWYWx1ZXMuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJkYXRhVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIG9rJylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4gICAgLy9vbiBtZXQgw6Agam91ciBsYSBsaXN0ZSBhdSBkw6ltYXJyYWdlXG4gICAgaWYgKCQoJyNleF9zb3J0YWJsZScpLnZhbCgpKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSAkKCcjZXhfc29ydGFibGUnKS52YWwoKS5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAocG9zaXRpb25zKSB7XG4gICAgICAgICAgICAkLmVhY2gocG9zaXRpb25zLCBmdW5jdGlvbiAoaSwgcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoXCIjc29ydGFibGVcIikuZmluZCgnW2RhdGEtbnVtPScgKyBwb3NpdGlvbiArICddJyk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hcHBlbmRUbygkKFwiI3NvcnRhYmxlXCIpKTsgLy8gb3IgcHJlcGVuZFRvIGZvciByZXZlcnNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoXCIjc29ydGFibGVcIikuZGlzYWJsZVNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG59KTsiLCIvL21pc2UgZW4gcGxhY2UgZCd1bmUgYW5pbWF0aW9uIGRvdWNlIHN1ciBsZXMgY2xpY2sgcG91ciBhbGxlciBzdXIgbGVzIGFuY3Jlc1xuXG4vL2FjdGl2YXRpb24gZGVzIHRvb2x0aXBzXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4vL2dlc3Rpb24gZGVzIGltYWdlcyBxdWkgZG9pdmVudCByZW1wbGlyIHVuIGRpdiBzYW5zIHNlIGTDqWZvcm1lciBldCBjb3VwZXIgY2UgcXVpIGTDqXBhc3NlXG4kKCcuY292ZXInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAkKHRoaXMpLmNzcyh7IFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCIsIFwiaGVpZ2h0XCI6IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQrJ3B4JyxcIndpZHRoXCI6IHRoaXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aCsncHgnfSk7XG4gIFxufSk7IiwiXG52YXIgU25hbWU7XG52YXIgbm9tYnJlO1xuXG5leGVjdXRlKCk7XG5cbi8vcmVsYW5jZSBzaSBham91dCBkZSBmaWxlc1xuJChkb2N1bWVudCkuYmluZCgnRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICBleGVjdXRlKCk7XG5cbn0pXG5cbi8vIC8vc2kgYydlc3QgdW5lIGNvbGxlY3Rpb25cbi8vIGlmICgkKCcjJyArIFNuYW1lICsgJ3VybCcpLmxlbmd0aCAhPSAwKSB7XG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBub21icmUgPSAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmxlbmd0aDtcbi8vICAgICAgICAgaWYgKCQoJyMnICsgU25hbWUgKyAndXJsJykubGVuZ3RoICE9IDApIGV4ZWN1dGUoKVxuLy8gICAgIH0pO1xuXG4vLyAgICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpXG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4vLyAgICAgfSlcblxuXG4vLyB9XG4vLyBlbHNlIHtcbi8vICAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgICQoZS50YXJnZXQpLm5leHQoKS50ZXh0KGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUpXG4vLyAgICAgfSlcbi8vIH1cblxuXG5mdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKCdvbmNoYW5nZScpKSB7IC8vb24gdsOpcmlmaWUgcXVlIGwnb24gYSBwYXMgbWlzIHVuIG9uY2hhbmdlXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwib25jaGFuZ2VcIik7Ly8gb24sIGFqb3V0ZSB1bmUgY2xhc3NlXG4gICAgICAgICAgICBpZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKVxuICAgICAgICAgICAgdXJsID0gaWQuc3Vic3RyKDAsIGlkLmxlbmd0aCAtIDgpICsgJ191cmwnXG4gICAgICAgICAgICBpZiAoJCgnIycgKyB1cmwpLnZhbCgpKSAkKGVsZW1lbnQpLnBhcmVudCgpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJleHZhbGV1clwiPicgKyAkKCcjJyArIHVybCkudmFsKCkgKyAnPC9zcGFuPicpIC8vZm9uY3Rpb25uZSBxdWUgcG91ciBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAkKGVsZW1lbnQpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgU25hbWUgPSB0aGlzLmlkLnN1YnN0cigwLCB0aGlzLmlkLmxhc3RJbmRleE9mKCdfJykpICsgJ18nO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gJCh0aGlzKVswXS5maWxlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgdXBsb2FkID0gbmV3IFVwbG9hZChmaWxlKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFycmUgPSAkKHRoaXMpLm5leHQoKVxuICAgICAgICAgICAgICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIDApO1xuICAgICAgICAgICAgICAgIC8vYmFycmUud2lkdGgoJzAlJyk7XG4gICAgICAgICAgICAgICAgYmFycmUudGV4dCgnRW52b3nDqSAoMCUpJyk7XG4gICAgICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1lbmRlZCcpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5kb1VwbG9hZCgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG52YXIgVXBsb2FkID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUudHlwZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldE9iamV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamV0O1xufTtcblVwbG9hZC5wcm90b3R5cGUuc2V0T2JqZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMub2JqZXQgPSBlO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmRvVXBsb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBVcGxvYWQucHJvdG90eXBlLnNldE9iamV0KGUpXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy8gYWRkIGFzc29jIGtleSB2YWx1ZXMsIHRoaXMgd2lsbCBiZSBwb3N0cyB2YWx1ZXNcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuZmlsZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsICQoJyN0b2tlbicpLnZhbCgpKTtcbiAgICB2YXIgYmFyID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2lkJylcbiAgICBkaXJlY3RvcnkgPSBiYXIuc3Vic3RyKDAsIGJhci5pbmRleE9mKCdfJykpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRpcmVjdG9yeVwiLCBkaXJlY3RvcnkpO1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2Jhc2U2NCcsIHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL3VwbG9hZFwiLFxuICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVhociA9ICQuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgICAgICAgaWYgKG15WGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIG15WGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHRoYXQucHJvZ3Jlc3NIYW5kbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG15WGhyO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgdmFyIHJldG91ciA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdkYXRhLXRtcCcsIHJldG91ci50bXBfbmFtZSlcblxuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgYmFycmUudGV4dChyZXRvdXIubmFtZSk7XG4gICAgICAgICAgICAkKCcjJyArIFNuYW1lICsgJ3VybCcpLnZhbChKU09OLnN0cmluZ2lmeShyZXRvdXIpKVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctZW5kZWQnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBiYXJyZS50ZXh0KCdFcnJldXIgZGFucyBsXFwnZW52b2llJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogNjAwMDBcbiAgICB9KTtcbn07XG5cblVwbG9hZC5wcm90b3R5cGUucHJvZ3Jlc3NIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGVyY2VudCA9IDA7XG4gICAgdmFyIHBvc2l0aW9uID0gZXZlbnQubG9hZGVkIHx8IGV2ZW50LnBvc2l0aW9uO1xuICAgIHZhciB0b3RhbCA9IGV2ZW50LnRvdGFsO1xuICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgIHBlcmNlbnQgPSBNYXRoLmNlaWwocG9zaXRpb24gLyB0b3RhbCAqIDEwMCk7XG4gICAgfVxuICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICBiYXJyZS5zaG93KCk7XG4gICAgYmFycmUuYXR0cihcImFyaWEtdmFsdWVub3dcIiwgcGVyY2VudC50b0ZpeGVkKDApKTtcbiAgICAvL2JhcnJlLndpZHRoKHBlcmNlbnQudG9GaXhlZCgwKSArICclJyk7XG4gICAgYmFycmUudGV4dCgnRW52b3nDqSAoJyArIHBlcmNlbnQudG9GaXhlZCgyKSArICclKScpO1xufTtcblxuXG5cblxuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9