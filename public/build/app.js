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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWxsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svYWxpYXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNjcnVkbWljay9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3NvcnRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZ2xvYmFsIiwialF1ZXJ5IiwidG9vbHRpcCIsIm93bENhcm91c2VsIiwiY2VudGVyIiwiaXRlbXMiLCJsb29wIiwibWFyZ2luIiwicmVzcG9uc2l2ZSIsIm93bCIsImNsaWNrIiwidHJpZ2dlciIsImRvY3VtZW50IiwiZXZlbnQiLCJjb2xsYXBzZSIsImJpbmQiLCJlIiwiSW5wdXRtYXNrIiwibWFzayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWdleCIsInBsYWNlaG9sZGVyIiwiYWxpYXMiLCJhdXRvR3JvdXAiLCJkaWdpdHMiLCJyaWdodEFsaWduIiwiZ3JlZWR5IiwiYWxsb3dNaW51cyIsImluaXQiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiZmluZCIsInBhcmVudCIsImFwcGVuZCIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiYXR0ciIsImNvbGxlY3Rpb25OYW1lIiwic3BsaXQiLCJzbGljZSIsIiRhZGRUYWdMaW5rIiwibGVuZ3RoIiwiZGF0YSIsImFkZENsYXNzIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRhZ0Zvcm0iLCJyZW1vdmUiLCIkdGFiQ29sIiwicHJvdG90eXBlIiwicHJvdG9zIiwiaW5kZXhPZiIsIm5ld0Zvcm0iLCJyZXBsYWNlIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCIkbmV3Rm9ybUxpIiwiYmVmb3JlIiwicG9wb3ZlciIsInBvcHVwIiwicG9wb3Zlcl90aW1lIiwic2V0VGltZW91dCIsImh0bWwiLCJwbGFjZW1lbnQiLCJjb250YWluZXIiLCJjb250ZW50IiwibCIsInRhcmdldCIsImNsYXNzTmFtZSIsInNvcnRhYmxlIiwiY3Vyc29yIiwib3BhY2l0eSIsInN0b3AiLCJ1aSIsImxpc3RFbGVtZW50cyIsImNoaWxkcmVuIiwibGlzdFZhbHVlcyIsInB1c2giLCJkYXRhc2V0IiwibnVtIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJqb2luIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsInZhbCIsInBvc2l0aW9ucyIsImkiLCJwb3NpdGlvbiIsIiR0YXJnZXQiLCJhcHBlbmRUbyIsImRpc2FibGVTZWxlY3Rpb24iLCJjc3MiLCJwYXJlbnROb2RlIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJTbmFtZSIsIm5vbWJyZSIsImV4ZWN1dGUiLCJoYXNDbGFzcyIsImlkIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJmaWxlIiwiZmlsZXMiLCJ1cGxvYWQiLCJVcGxvYWQiLCJiYXJyZSIsIm5leHQiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCJkb1VwbG9hZCIsImdldFR5cGUiLCJnZXRPYmpldCIsIm9iamV0Iiwic2V0T2JqZXQiLCJnZXRTaXplIiwic2l6ZSIsImdldE5hbWUiLCJuYW1lIiwidGhhdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJiYXIiLCJkaXJlY3RvcnkiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInhociIsIm15WGhyIiwiYWpheFNldHRpbmdzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2dyZXNzSGFuZGxpbmciLCJyZXRvdXIiLCJKU09OIiwicGFyc2UiLCJ0bXBfbmFtZSIsInN0cmluZ2lmeSIsImFzeW5jIiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwidGltZW91dCIsInBlcmNlbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImxlbmd0aENvbXB1dGFibGUiLCJNYXRoIiwiY2VpbCIsInNob3ciLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQUMscUJBQU0sQ0FBQ0YsQ0FBUCxHQUFXRSxxQkFBTSxDQUFDQyxNQUFQLEdBQWdCSCxDQUEzQjtBQUVBOztBQUNBQyxtQkFBTyxDQUFDLG1IQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsdUdBQUQsQ0FBUDs7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFHQUQsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJJLE9BQTdCO0FBSUFKLENBQUMsQ0FBQyxZQUFZO0FBQ1ZBLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJLLFdBQW5CLENBQStCO0FBQzNCQyxVQUFNLEVBQUUsS0FEbUI7QUFFM0JDLFNBQUssRUFBRSxDQUZvQjtBQUczQkMsUUFBSSxFQUFFLElBSHFCO0FBSTNCQyxVQUFNLEVBQUUsRUFKbUI7QUFLM0JDLGNBQVUsRUFBRTtBQUNSLFdBQUs7QUFDREgsYUFBSyxFQUFFO0FBRE47QUFERztBQUxlLEdBQS9CO0FBWUEsTUFBSUksR0FBRyxHQUFHWCxDQUFDLENBQUMsZUFBRCxDQUFYO0FBQ0FXLEtBQUcsQ0FBQ04sV0FBSixHQWRVLENBZVY7O0FBQ0FMLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CWSxLQUFwQixDQUEwQixZQUFZO0FBQ2xDRCxPQUFHLENBQUNFLE9BQUosQ0FBWSxtQkFBWjtBQUNILEdBRkQsRUFoQlUsQ0FtQlY7O0FBQ0FiLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENB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ZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vanNjcnVkbWljay9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgXCIuL2pzY3J1ZG1pY2svdXBsb2FkXCI7XG5pbXBvcnQgXCIuL2pzY3J1ZG1pY2svYWxpYXNcIjtcbmltcG9ydCBcIi4vanNjcnVkbWljay9wb3BvdmVyXCI7XG5pbXBvcnQgXCIuL2pzY3J1ZG1pY2svc29ydGFibGVcIjtcbmltcG9ydCBcIi4vanNjcnVkbWljay90b29sc1wiO1xuIiwiXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbmltcG9ydCBcImJvb3RzdHJhcFwiO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcbmltcG9ydCAnb3dsLmNhcm91c2VsL2Rpc3QvYXNzZXRzL293bC5jYXJvdXNlbC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vYWxsJ1xuXG5cblxuXG5cblxuaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5cblxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG5cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgY2VudGVyOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBvd2wgPSAkKCcub3dsLWNhcm91c2VsJyk7XG4gICAgb3dsLm93bENhcm91c2VsKCk7XG4gICAgLy8gR28gdG8gdGhlIG5leHQgaXRlbVxuICAgICQoJy5jdXN0b21OZXh0QnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBvd2wudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICB9KVxuICAgIC8vIEdvIHRvIHRoZSBwcmV2aW91cyBpdGVtXG4gICAgJCgnLmN1c3RvbVByZXZCdG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBhcmFtZXRlcnMgaGFzIHRvIGJlIGluIHNxdWFyZSBicmFja2V0ICdbXSdcbiAgICAgICAgb3dsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgfSlcbn0pO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJCgnLmNvbGxhcHNlLW1lbnUnKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgIH0pO1xuICAgICQoJy5jb2xsYXBzZS1tZW51JykuY29sbGFwc2UoJ2hpZGUnKTtcbn0pOyIsImltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiO1xuXG4vL2TDqHMgcXUndW4gw6lsw6ltw6luZXQgZXN0IGluc8OpcsOpIG9uIHJlbGFuY2UgaW5wdXQgbWFza1xuJChkb2N1bWVudCkuYmluZCgnRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICBJbnB1dG1hc2soKS5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG59KTtcblxuXG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAndGV4dGVfcHJvcHJlJzoge1xuICAgICAgICByZWdleDogXCJeKFthLXpBLVrDoMOhw6LDpMOjw6XEhcSNxIfEmcOow6nDqsOrxJfEr8Osw63DrsOvxYLFhMOyw7PDtMO2w7XDuMO5w7rDu8O8xbPFq8O/w73FvMW6w7HDp8SNxaHFvsOAw4HDgsOEw4PDhcSExIbEjMSWxJjDiMOJw4rDi8OMw43DjsOPxK7FgcWDw5LDk8OUw5bDlcOYw5nDmsObw5zFssWqxbjDncW7xbnDkcOfw4fFksOGxIzFoMW94oiCw7AgLCcuLV0rJClcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuXG5cbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnY29kZV9wb3N0YWwnOiB7XG4gICAgICAgIG1hc2s6IFwiOTkgOTk5XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdhZGVsaSc6IHtcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnc2lyZXQnOiB7XG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3ByaXgnOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZVxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ21ldHJlJzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBhdXRvR3JvdXA6IHRydWUsXG4gICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICByaWdodEFsaWduOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiBmYWxzZSxcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2VcblxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdjZW50aW1ldHJlJzoge1xuICAgICAgICBhbGlhczogJ21ldHJlJyxcblxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ3Bob25lZnInOiB7XG4gICAgICAgIG1hc2s6ICcoKzk5fDkpOS45OS45OS45OS45OScsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnc2VjdSc6IHtcbiAgICAgICAgLy9yZWdleDogJ14oWzEtM10pID8oWzAtOV17Mn0pID8oWzAtOV18WzItMzUtOV1bMC05XXxbMTRdWzAtMl0pID8oMFsxLTldfFsxLThdWzAtOV18OVswLTU3LTldfDJbYWJdKVtcXHNcXC5cXC1dPygwMFsxLTldfDBbMS05XVswLTldfFsxLThdWzAtOV17Mn18OVswLThdWzAtOV18OTkwKSA/KFswLTldezN9KSA/KFswLThdWzAtOV18OVswLTddKSQnLFxuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTk5OTk5OVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2ttJzoge1xuICAgICAgICBhbGlhczogJ251bWVyaWMnLFxuICAgICAgICBhdXRvR3JvdXA6IHRydWUsXG4gICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICByaWdodEFsaWduOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiBmYWxzZSxcbiAgICAgICAgYWxsb3dNaW51czogZmFsc2UsXG4gICAgfVxufSk7XG5cblxuIiwiLy8gc2V0dXAgYW4gXCJhZGQgYSB0YWdcIiBsaW5rXG5cblxuaW5pdCgpXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnLmNvbGxlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAvL3BvbiBhZGRpdGlvbmUgbGUgYm91dHBvbiBzdXBwcmltZXJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuY3VzdG9tLWZpbGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYXBwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwicmVtb3ZlLXRhZyBidG4gYnRuLWRhbmdlclwiID5TdXBwcmltZXI8L2E+JylcbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgJGNvbGxlY3Rpb25Ib2xkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICBpZiAoJGNvbGxlY3Rpb25Ib2xkZXIuYXR0cignZGF0YS1wcm90b3R5cGUnKSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSAkY29sbGVjdGlvbkhvbGRlci5hdHRyKCdpZCcpLnNwbGl0KCdfJykuc2xpY2UoLTEpWzBdIC8vb24gc8OpbGVjdGlvbm5lIGxlIGRlcm5pZXJcbiAgICAgICAgICAgIHZhciAkYWRkVGFnTGluayA9ICQoJzxhIGhyZWY9XCIjXCIgaWQ9XCJhZGRfdGFnX2xpbmtfJyArIGNvbGxlY3Rpb25OYW1lICsgJ1wiIGNsYXNzPVwiYWRkX3RhZ19saW5rIGJ0biBidG4tcHJpbWFyeVwiPjwvYT4nKTtcbiAgICAgICAgICAgIC8vb24gdsOpcmlmaWUgc2kgb24gYSB0cmFpdGVyIGNldHRlIGNvbGxlY3Rpb24gZW4gdsOpcmlmaWFudCBsYSBwcsOpc2VuY2UgZHUgYm91dG9uIGFqb3V0ZXJcbiAgICAgICAgICAgIGlmICgkKCcjJyArICdhZGRfdGFnX2xpbmtfJyArIGNvbGxlY3Rpb25OYW1lKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkYWRkVGFnTGluayk7XG4gICAgICAgICAgICAgICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlci5maW5kKCc6aW5wdXQnKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLmFwcGVuZCgnQWpvdXRlciAnICsgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLmFkZENsYXNzKCdjb2wtMTInKVxuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgdGhlIGxpbmsgZnJvbSBjcmVhdGluZyBhIFwiI1wiIG9uIHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBhIG5ldyB0YWcgZm9ybSAoc2VlIGNvZGUgYmxvY2sgYmVsb3cpXG4gICAgICAgICAgICAgICAgICAgIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRhZGRUYWdMaW5rKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgdGhlIHJlbW92YWwsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZVxuICAgICQoJy5yZW1vdmUtdGFnJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuXG4kdGFiQ29sID0gWydzb2lucycsICdwbGFuaWZpY2F0aW9ucyddXG4vL2F1IGNhcyBvdSBtZXR0cmUgdW4gdGFibGVhdSBhdmVjIHNvaW5zIGV0IHBsYW5pZmljYXRpb25cbmZ1bmN0aW9uIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRhZGRUYWdMaW5rKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xuXG4gICAgdmFyIGluZGV4ID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcblxuICAgIC8vIFJlcGxhY2UgJyQkbmFtZSQkJyBpbiB0aGUgcHJvdG90eXBlJ3MgSFRNTCB0b1xuICAgIC8vIGluc3RlYWQgYmUgYSBudW1iZXIgYmFzZWQgb24gaG93IG1hbnkgaXRlbXMgd2UgaGF2ZVxuICAgIGNvbGxlY3Rpb25OYW1lID0gJGNvbGxlY3Rpb25Ib2xkZXIuYXR0cignaWQnKS5zcGxpdCgnXycpLnNsaWNlKC0xKVswXSAvL29uIHPDqWxlY3Rpb25uZSBsZSBkZXJuaWVyXG4gICAgLy9zb2luc19fX25hbWVfX19cbiAgICAvL25hbWU9XCJbc29pbnNdW19fbmFtZV9fXVxuICAgIC8vZMOpdGVjdGlvbnMgc2kgcyBvdSBwYXMgw6AgcHJvdG90eXBlXG4gICAgdmFyIHByb3RvcztcbiAgICBpZiAocHJvdG90eXBlLmluZGV4T2YoY29sbGVjdGlvbk5hbWUgKyAnX19fbmFtZV9fXycpICE9IC0xKVxuICAgICAgICBwcm90b3MgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICBlbHNlIHByb3RvcyA9IGNvbGxlY3Rpb25OYW1lICsgJ3MnO1xuICAgIC8vY2hhbmdlbWVudCBkZXMgaWRzXG4gICAgLy9zdHIucmVwbGFjZSgvYWJjL2csICcnKTtcbiAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZS5yZXBsYWNlKHByb3RvcyArICdfX19uYW1lX19fL2cnLCBwcm90b3MgKyAnXycgKyBpbmRleCArICdfJyk7XG4gICAgLy8gQnVnXG4gICAgJHRhYkNvbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvL2NoYW5nZW1lbnQgZGVzIG5hbWVzXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoZWxlbWVudCArICddXFxbX19uYW1lX19dL2cnLCBlbGVtZW50ICsgXCJdW1wiICsgaW5kZXggKyBcIl1cIik7XG4gICAgfSk7XG5cblxuICAgIGNvbnNvbGUubG9nKHByb3RvcyArICddXFxbX19uYW1lX19dJylcbiAgICAvL25ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2VBbGwocHJvdG9zICsgXCJdXCIsIHByb3RvcyArIFwiXVtcIiArIGluZGV4ICsgXCJdXCIpO1xuXG5cbiAgICAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4ICsgMSk7XG4gICAgLy8gRGlzcGxheSB0aGUgZm9ybSBpbiB0aGUgcGFnZSBpbiBhbiBsaSwgYmVmb3JlIHRoZSBcIkFkZCBhIHRhZ1wiIGxpbmsgbGlcbiAgICB2YXIgJG5ld0Zvcm1MaSA9ICQoJzxkaXY+PC9kaXY+JykuYXBwZW5kKG5ld0Zvcm0pO1xuXG4gICAgLy8gYWxzbyBhZGQgYSByZW1vdmUgYnV0dG9uLCBqdXN0IGZvciB0aGlzIGV4YW1wbGVcbiAgICAkbmV3Rm9ybUxpLmFwcGVuZCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInJlbW92ZS10YWcgYnRuIGJ0bi1kYW5nZXJcIiA+U3VwcHJpbWVyPC9hPicpO1xuXG4gICAgJGFkZFRhZ0xpbmsuYmVmb3JlKCRuZXdGb3JtTGkpO1xuXG5cbiAgICAvL29uIHbDqXJpcmllIHF1J2lsIG4neSBhaXQgcGFzIGRlIG5vdXZlYXUgY29sbGVjdGlvbiDDoCBnw6lyZXJcbiAgICBpbml0KClcblxufVxuIiwiLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcG92ZXIgcG91ciBsZXMgaW1hZ2VzXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSoqL1xuXG4vKlxuMSkgcG9zc2liaWxpdMOpIGRlIG1vZGlmaWVyIGxhIGxhcmdldXIgcGFyXG4ucG9wb3ZlciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4yKSBwb3NzaWJpbGl0w6kgZGUgZMOpaW5pciB1bmUgZmVybWV0dXJlIGF1dG9tYXRpcXVlIGVuIG1zIHNpbm9uIHBhciBjbGljayBzaSBwYXMgZMOpZmluaVxudmFyIHBvcG92ZXJfdGltZT0yMDAwXG4qL1xuXG4kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci1ob3ZlclwiXScpXG4kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLWhvdmVyXCJdJylcbiAgICAub24oJ3Nob3duLmJzLnBvcG92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBcbn0pXG4gICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvcHVwID0gdGhpc1xuICAgICAgICAvL2Zlcm1ldHVyZSBhdXRvbWF0aXF1ZVxuICAgICAgICBpZiAodHlwZW9mIHBvcG92ZXJfdGltZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHBvcHVwKS5wb3BvdmVyKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCBwb3BvdmVyX3RpbWUpO1xuICAgIH0pXG4gICAgLnBvcG92ZXIoe1xuICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICc8aW1nIGNsYXNzPVwiaW1nLWZsdWlkIG14LWF1dG9cIiBzcmM9XCInICsgJCh0aGlzKS5kYXRhKCdpbWcnKSArICdcIiAvPic7XG4gICAgICAgIH1cbiAgICB9KTtcbiQoXCJodG1sXCIpLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBsID0gJChlLnRhcmdldCk7XG4gICAgaWYgKCQoXCIucG9wb3ZlclwiKS5sZW5ndGgpXG4gICAgICAgIGlmIChsWzBdLmNsYXNzTmFtZS5pbmRleE9mKFwicG9wb3ZlclwiKSA9PSAtMSkge1xuICAgICAgICAgICAgJChcIi5wb3BvdmVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucG9wb3ZlcihcImhpZGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxufSk7IiwiLy9saXN0ZSBzb3J0YWJsZSBlbiBtZXR0YW50ICNzb3J0YWJsZVxucmVxdWlyZSgnanF1ZXJ5LXVpJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zb3J0YWJsZScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uJyk7XG4kKGZ1bmN0aW9uICgpIHtcblxuICAgICQoXCIjc29ydGFibGVcIikuc29ydGFibGUoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGN1cnNvcjogXCJtb3ZlXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RFbGVtZW50cyA9ICQoXCIjc29ydGFibGVcIikuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgICQuZWFjaChsaXN0RWxlbWVudHMsIGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0VmFsdWVzLnB1c2goZWxlbWVudC5kYXRhc2V0Lm51bSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9zb3J0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImVudGl0ZT1cIiArICQoJyNzYXZlX3NvcnRhYmxlJykuYXR0cignZW50aXRlJykgKyAnJnNvcnRhYmxlPScgKyBsaXN0VmFsdWVzLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiZGF0YVR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZSBvaycpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuICAgIC8vb24gbWV0IMOgIGpvdXIgbGEgbGlzdGUgYXUgZMOpbWFycmFnZVxuICAgIGlmICgkKCcjZXhfc29ydGFibGUnKS52YWwoKSkge1xuICAgICAgICB2YXIgcG9zaXRpb25zID0gJCgnI2V4X3NvcnRhYmxlJykudmFsKCkuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKHBvc2l0aW9ucykge1xuICAgICAgICAgICAgJC5lYWNoKHBvc2l0aW9ucywgZnVuY3Rpb24gKGksIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKFwiI3NvcnRhYmxlXCIpLmZpbmQoJ1tkYXRhLW51bT0nICsgcG9zaXRpb24gKyAnXScpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuYXBwZW5kVG8oJChcIiNzb3J0YWJsZVwiKSk7IC8vIG9yIHByZXBlbmRUbyBmb3IgcmV2ZXJzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiI3NvcnRhYmxlXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7IiwiLy9taXNlIGVuIHBsYWNlIGQndW5lIGFuaW1hdGlvbiBkb3VjZSBzdXIgbGVzIGNsaWNrIHBvdXIgYWxsZXIgc3VyIGxlcyBhbmNyZXNcblxuLy9hY3RpdmF0aW9uIGRlcyB0b29sdGlwc1xuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuLy9nZXN0aW9uIGRlcyBpbWFnZXMgcXVpIGRvaXZlbnQgcmVtcGxpciB1biBkaXYgc2FucyBzZSBkw6lmb3JtZXIgZXQgY291cGVyIGNlIHF1aSBkw6lwYXNzZVxuJCgnLmNvdmVyJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgJCh0aGlzKS5jc3MoeyBcIm9iamVjdC1maXRcIjogXCJjb3ZlclwiLCBcImhlaWdodFwiOiB0aGlzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KydweCcsXCJ3aWR0aFwiOiB0aGlzLnBhcmVudE5vZGUuY2xpZW50V2lkdGgrJ3B4J30pO1xuICBcbn0pOyIsIlxudmFyIFNuYW1lO1xudmFyIG5vbWJyZTtcblxuZXhlY3V0ZSgpO1xuXG4vL3JlbGFuY2Ugc2kgYWpvdXQgZGUgZmlsZXNcbiQoZG9jdW1lbnQpLmJpbmQoJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZXhlY3V0ZSgpO1xuXG59KVxuXG4vLyAvL3NpIGMnZXN0IHVuZSBjb2xsZWN0aW9uXG4vLyBpZiAoJCgnIycgKyBTbmFtZSArICd1cmwnKS5sZW5ndGggIT0gMCkge1xuLy8gICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgbm9tYnJlID0gJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGg7XG4vLyAgICAgICAgIGlmICgkKCcjJyArIFNuYW1lICsgJ3VybCcpLmxlbmd0aCAhPSAwKSBleGVjdXRlKClcbi8vICAgICB9KTtcblxuLy8gICAgICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKVxuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuLy8gICAgIH0pXG5cblxuLy8gfVxuLy8gZWxzZSB7XG4vLyAgICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICAkKGUudGFyZ2V0KS5uZXh0KCkudGV4dChlLnRhcmdldC5maWxlc1swXS5uYW1lKVxuLy8gICAgIH0pXG4vLyB9XG5cblxuZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIGlmICghJChlbGVtZW50KS5oYXNDbGFzcygnb25jaGFuZ2UnKSkgeyAvL29uIHbDqXJpZmllIHF1ZSBsJ29uIGEgcGFzIG1pcyB1biBvbmNoYW5nZVxuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcIm9uY2hhbmdlXCIpOy8vIG9uLCBham91dGUgdW5lIGNsYXNzZVxuICAgICAgICAgICAgaWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJylcbiAgICAgICAgICAgIHVybCA9IGlkLnN1YnN0cigwLCBpZC5sZW5ndGggLSA4KSArICdfdXJsJ1xuICAgICAgICAgICAgaWYgKCQoJyMnICsgdXJsKS52YWwoKSkgJChlbGVtZW50KS5wYXJlbnQoKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZXh2YWxldXJcIj4nICsgJCgnIycgKyB1cmwpLnZhbCgpICsgJzwvc3Bhbj4nKSAvL2ZvbmN0aW9ubmUgcXVlIHBvdXIgbGEgY29sbGVjdGlvblxuICAgICAgICAgICAgJChlbGVtZW50KS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIFNuYW1lID0gdGhpcy5pZC5zdWJzdHIoMCwgdGhpcy5pZC5sYXN0SW5kZXhPZignXycpKSArICdfJztcbiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9ICQodGhpcylbMF0uZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHVwbG9hZCA9IG5ldyBVcGxvYWQoZmlsZSk7XG4gICAgICAgICAgICAgICAgdmFyIGJhcnJlID0gJCh0aGlzKS5uZXh0KClcbiAgICAgICAgICAgICAgICBiYXJyZS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCAwKTtcbiAgICAgICAgICAgICAgICAvL2JhcnJlLndpZHRoKCcwJScpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnRleHQoJ0Vudm95w6kgKDAlKScpO1xuICAgICAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctZW5kZWQnKTtcbiAgICAgICAgICAgICAgICB1cGxvYWQuZG9VcGxvYWQoJCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxudmFyIFVwbG9hZCA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbn07XG5cblVwbG9hZC5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnR5cGU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpldDtcbn07XG5VcGxvYWQucHJvdG90eXBlLnNldE9iamV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLm9iamV0ID0gZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5zaXplO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLm5hbWU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5kb1VwbG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgVXBsb2FkLnByb3RvdHlwZS5zZXRPYmpldChlKVxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIC8vIGFkZCBhc3NvYyBrZXkgdmFsdWVzLCB0aGlzIHdpbGwgYmUgcG9zdHMgdmFsdWVzXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCB0aGlzLmZpbGUsIHRoaXMuZ2V0TmFtZSgpKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0b2tlblwiLCAkKCcjdG9rZW4nKS52YWwoKSk7XG4gICAgdmFyIGJhciA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdpZCcpXG4gICAgZGlyZWN0b3J5ID0gYmFyLnN1YnN0cigwLCBiYXIuaW5kZXhPZignXycpKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkaXJlY3RvcnlcIiwgZGlyZWN0b3J5KTtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL1VwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdiYXNlNjQnLCByZWFkZXIucmVzdWx0KVxuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi91cGxvYWRcIixcbiAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXlYaHIgPSAkLmFqYXhTZXR0aW5ncy54aHIoKTtcbiAgICAgICAgICAgIGlmIChteVhoci51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICBteVhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCB0aGF0LnByb2dyZXNzSGFuZGxpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBteVhocjtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHZhciByZXRvdXIgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgICAgICAgICBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkuYXR0cignZGF0YS10bXAnLCByZXRvdXIudG1wX25hbWUpXG5cbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctd2FybmluZycpO1xuICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJhcnJlLnRleHQocmV0b3VyLm5hbWUpO1xuICAgICAgICAgICAgJCgnIycgKyBTbmFtZSArICd1cmwnKS52YWwoSlNPTi5zdHJpbmdpZnkocmV0b3VyKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ2JnLWVuZGVkJyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgdmFyIGJhcnJlID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLm5leHQoKVxuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgYmFycmUudGV4dCgnRXJyZXVyIGRhbnMgbFxcJ2Vudm9pZScpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctd2FybmluZycpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgIHRpbWVvdXQ6IDYwMDAwXG4gICAgfSk7XG59O1xuXG5VcGxvYWQucHJvdG90eXBlLnByb2dyZXNzSGFuZGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBlcmNlbnQgPSAwO1xuICAgIHZhciBwb3NpdGlvbiA9IGV2ZW50LmxvYWRlZCB8fCBldmVudC5wb3NpdGlvbjtcbiAgICB2YXIgdG90YWwgPSBldmVudC50b3RhbDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICBwZXJjZW50ID0gTWF0aC5jZWlsKHBvc2l0aW9uIC8gdG90YWwgKiAxMDApO1xuICAgIH1cbiAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgYmFycmUuc2hvdygpO1xuICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIHBlcmNlbnQudG9GaXhlZCgwKSk7XG4gICAgLy9iYXJyZS53aWR0aChwZXJjZW50LnRvRml4ZWQoMCkgKyAnJScpO1xuICAgIGJhcnJlLnRleHQoJ0Vudm95w6kgKCcgKyBwZXJjZW50LnRvRml4ZWQoMikgKyAnJSknKTtcbn07XG5cblxuXG5cblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==