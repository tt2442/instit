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
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jscrudmick_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jscrudmick/all */ "./assets/jscrudmick/all.js");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_9__);
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

/***/ "./assets/jscrudmick/all.js":
/*!**********************************!*\
  !*** ./assets/jscrudmick/all.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./assets/jscrudmick/collection.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_collection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload */ "./assets/jscrudmick/upload.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alias */ "./assets/jscrudmick/alias.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover */ "./assets/jscrudmick/popover.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable */ "./assets/jscrudmick/sortable.js");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sortable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools */ "./assets/jscrudmick/tools.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tools__WEBPACK_IMPORTED_MODULE_5__);
//require('../mobile_view/mobile_view.js')







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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-69e79f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL2FsaWFzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNjcnVkbWljay9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc2NydWRtaWNrL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svc29ydGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzY3J1ZG1pY2svdXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJJbnB1dG1hc2siLCJtYXNrIiwicXVlcnlTZWxlY3RvckFsbCIsInJlcXVpcmUiLCJvbiIsInBvcHVwIiwic2V0VGltZW91dCIsInBvcG92ZXIiLCJodG1sIiwidHJpZ2dlciIsInBsYWNlbWVudCIsImNvbnRlbnQiLCJlIiwibCIsInRhcmdldCIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJlYWNoIiwib3dsQ2Fyb3VzZWwiLCJjZW50ZXIiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJyZXNwb25zaXZlIiwib3dsIiwiY2xpY2siLCJldmVudCIsImNvbGxhcHNlIiwiYmluZCIsInJlZ2V4IiwicGxhY2Vob2xkZXIiLCJhbGlhcyIsImF1dG9Hcm91cCIsImRpZ2l0cyIsInJpZ2h0QWxpZ24iLCJncmVlZHkiLCJhbGxvd01pbnVzIiwiaW5pdCIsImluZGV4IiwiZWxlbWVudCIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCIkY29sbGVjdGlvbkhvbGRlciIsImF0dHIiLCJjb2xsZWN0aW9uTmFtZSIsInNwbGl0Iiwic2xpY2UiLCIkYWRkVGFnTGluayIsImxlbmd0aCIsImRhdGEiLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiYWRkVGFnRm9ybSIsInJlbW92ZSIsIiR0YWJDb2wiLCJwcm90b3R5cGUiLCJwcm90b3MiLCJuZXdGb3JtIiwicmVwbGFjZSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiJG5ld0Zvcm1MaSIsImJlZm9yZSIsInBvcG92ZXJfdGltZSIsImNvbnRhaW5lciIsInNvcnRhYmxlIiwiY3Vyc29yIiwib3BhY2l0eSIsInN0b3AiLCJ1aSIsImxpc3RFbGVtZW50cyIsImNoaWxkcmVuIiwibGlzdFZhbHVlcyIsInB1c2giLCJkYXRhc2V0IiwibnVtIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJqb2luIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsInZhbCIsInBvc2l0aW9ucyIsImkiLCJwb3NpdGlvbiIsIiR0YXJnZXQiLCJhcHBlbmRUbyIsImRpc2FibGVTZWxlY3Rpb24iLCIkcm9vdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJ0b29sdGlwIiwiU25hbWUiLCJub21icmUiLCJleGVjdXRlIiwiaGFzQ2xhc3MiLCJpZCIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiZmlsZSIsImZpbGVzIiwidXBsb2FkIiwiVXBsb2FkIiwiYmFycmUiLCJuZXh0IiwidGV4dCIsInJlbW92ZUNsYXNzIiwiZG9VcGxvYWQiLCJnZXRUeXBlIiwiZ2V0T2JqZXQiLCJvYmpldCIsInNldE9iamV0IiwiZ2V0U2l6ZSIsInNpemUiLCJnZXROYW1lIiwibmFtZSIsInRoYXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYmFyIiwiZGlyZWN0b3J5IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJ4aHIiLCJteVhociIsImFqYXhTZXR0aW5ncyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9ncmVzc0hhbmRsaW5nIiwicmV0b3VyIiwiSlNPTiIsInBhcnNlIiwidG1wX25hbWUiLCJzdHJpbmdpZnkiLCJhc3luYyIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInRpbWVvdXQiLCJwZXJjZW50IiwibG9hZGVkIiwidG90YWwiLCJsZW5ndGhDb21wdXRhYmxlIiwiTWF0aCIsImNlaWwiLCJzaG93IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFtQ0EsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQUVDLGtEQUFTLEdBQUdDLElBQVosQ0FBaUJILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBakI7QUFBdUQsQ0FBdkY7QUFDbkM7O0FBQ0FDLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUNBO0FBQ0E7Q0FFQTs7QUFFQTtBQUdBTixDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ08sRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBWTtBQUN2RCxNQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBQyxZQUFVLENBQUMsWUFBWTtBQUFFVCxLQUFDLENBQUNRLEtBQUQsQ0FBRCxDQUFTRSxPQUFULENBQWlCLE1BQWpCO0FBQTJCLEdBQTFDLEVBQTRDLElBQTVDLENBQVY7QUFDSCxDQUhELEVBR0dBLE9BSEgsQ0FHVztBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxTQUFPLEVBQUUsT0FBdkI7QUFBZ0NDLFdBQVMsRUFBRSxRQUEzQztBQUFxREMsU0FBTyxFQUFFLG1CQUFZO0FBQUUsV0FBTyxFQUFQO0FBQVk7QUFBeEYsQ0FIWDtBQUd3R2QsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTyxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFVUSxDQUFWLEVBQWE7QUFBRSxNQUFJQyxDQUFDLEdBQUdoQixDQUFD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UUF0Q0g7QUF1Q0htQixTQUFLLEVBQUUsS0F2Q0o7QUF3Q0hDLGVBQVcsRUFBRSxLQXhDVjtBQXlDSEMsZUFBVyxFQUFFLEtBekNWO0FBMENIQyxXQUFPLEVBQUU7QUExQ04sR0FBUDtBQTRDSCxDQTVERDs7QUE4REFyQyxNQUFNLENBQUNyRCxTQUFQLENBQWlCZ0YsZ0JBQWpCLEdBQW9DLFlBQVk7QUFDNUMsTUFBSVcsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJMUQsUUFBUSxHQUFHL0QsS0FBSyxDQUFDMEgsTUFBTixJQUFnQjFILEtBQUssQ0FBQytELFFBQXJDO0FBQ0EsTUFBSTRELEtBQUssR0FBRzNILEtBQUssQ0FBQzJILEtBQWxCOztBQUNBLE1BQUkzSCxLQUFLLENBQUM0SCxnQkFBVixFQUE0QjtBQUN4QkgsV0FBTyxHQUFHSSxJQUFJLENBQUNDLElBQUwsQ0FBVS9ELFFBQVEsR0FBRzRELEtBQVgsR0FBbUIsR0FBN0IsQ0FBVjtBQUNIOztBQUNELE1BQUl2QyxLQUFLLEdBQUdELE1BQU0sQ0FBQ3JELFNBQVAsQ0FBaUI0RCxRQUFqQixHQUE0QkwsSUFBNUIsRUFBWjtBQUNBRCxPQUFLLENBQUMyQyxJQUFOO0FBQ0EzQyxPQUFLLENBQUNsRSxJQUFOLENBQVcsZUFBWCxFQUE0QnVHLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixDQUFoQixDQUE1QixFQVQ0QyxDQVU1Qzs7QUFDQTVDLE9BQUssQ0FBQ0UsSUFBTixDQUFXLGFBQWFtQyxPQUFPLENBQUNPLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBYixHQUFrQyxJQUE3QztBQUNILENBWkQsQzs7Ozs7Ozs7Ozs7O0FDbEpBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjsgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkgeyBJbnB1dG1hc2soKS5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7IH0pXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlJztcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5pbXBvcnQgJy4vanNjcnVkbWljay9hbGwnO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwvZGlzdC9hc3NldHMvb3dsLmNhcm91c2VsLmNzcyc7XG5pbXBvcnQgJ293bC5jYXJvdXNlbCc7XG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW5cIjtcblxuXG4kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLWhvdmVyXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3B1cCA9IHRoaXNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgJChwb3B1cCkucG9wb3ZlcignaGlkZScpOyB9LCA1MDAwKTtcbn0pLnBvcG92ZXIoeyBodG1sOiB0cnVlLCB0cmlnZ2VyOiAnY2xpY2snLCBwbGFjZW1lbnQ6ICdib3R0b20nLCBjb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfSB9KTsgJChcImh0bWxcIikub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChlKSB7IHZhciBsID0gJChlLnRhcmdldCk7IGlmIChsWzBdLmNsYXNzTmFtZS5pbmRleE9mKFwicG9wb3ZlclwiKSA9PSAtMSkgeyAkKFwiLnBvcG92ZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykucG9wb3ZlcihcImhpZGVcIik7IH0pOyB9IH0pO1xuXG5cblxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBjZW50ZXI6IGZhbHNlLFxuICAgICAgICBpdGVtczogNCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIG93bCA9ICQoJy5vd2wtY2Fyb3VzZWwnKTtcbiAgICBvd2wub3dsQ2Fyb3VzZWwoKTtcbiAgICAvLyBHbyB0byB0aGUgbmV4dCBpdGVtXG4gICAgJCgnLmN1c3RvbU5leHRCdG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICAgIH0pXG4gICAgLy8gR28gdG8gdGhlIHByZXZpb3VzIGl0ZW1cbiAgICAkKCcuY3VzdG9tUHJldkJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUGFyYW1ldGVycyBoYXMgdG8gYmUgaW4gc3F1YXJlIGJyYWNrZXQgJ1tdJ1xuICAgICAgICBvd2wudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICB9KVxufSk7XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAkKCcuY29sbGFwc2UtbWVudScpLmNvbGxhcHNlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgJCgnLmNvbGxhcHNlLW1lbnUnKS5jb2xsYXBzZSgnaGlkZScpO1xufSk7IiwiaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XG5cbi8vZMOocyBxdSd1biDDqWzDqW3DqW5ldCBlc3QgaW5zw6lyw6kgb24gcmVsYW5jZSBpbnB1dCBtYXNrXG4kKGRvY3VtZW50KS5iaW5kKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgIElucHV0bWFzaygpLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbn0pO1xuXG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICd0ZXh0ZV9wcm9wcmUnOiB7XG4gICAgICAgIHJlZ2V4OiBcIl4oW2EtekEtWsOgw6HDosOkw6PDpcSFxI3Eh8SZw6jDqcOqw6vEl8Svw6zDrcOuw6/FgsWEw7LDs8O0w7bDtcO4w7nDusO7w7zFs8Wrw7/DvcW8xbrDscOnxI3FocW+w4DDgcOCw4TDg8OFxITEhsSMxJbEmMOIw4nDisOLw4zDjcOOw4/ErsWBxYPDksOTw5TDlsOVw5jDmcOaw5vDnMWyxarFuMOdxbvFucORw5/Dh8WSw4bEjMWgxb3iiILDsCAsJy4tXSskKVwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgfVxufSk7XG5cblxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdjb2RlX3Bvc3RhbCc6IHtcbiAgICAgICAgbWFzazogXCI5OSA5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuXG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2FkZWxpJzoge1xuICAgICAgICBtYXNrOiBcIjk5OTk5OTk5OTlcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdzaXJldCc6IHtcbiAgICAgICAgbWFzazogXCI5OTk5OTk5OTk5XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAncHJpeCc6IHtcbiAgICAgICAgYWxpYXM6ICdudW1lcmljJyxcbiAgICAgICAgYXV0b0dyb3VwOiB0cnVlLFxuICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgcmlnaHRBbGlnbjogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgIGFsbG93TWludXM6IGZhbHNlXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAnbWV0cmUnOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZVxuXG4gICAgfVxufSk7XG5JbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgJ2NlbnRpbWV0cmUnOiB7XG4gICAgICAgIGFsaWFzOiAnbWV0cmUnLFxuXG5cbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAncGhvbmVmcic6IHtcbiAgICAgICAgbWFzazogJygrOTl8OSk5Ljk5Ljk5Ljk5Ljk5JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIH1cbn0pO1xuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICdzZWN1Jzoge1xuICAgICAgICAvL3JlZ2V4OiAnXihbMS0zXSkgPyhbMC05XXsyfSkgPyhbMC05XXxbMi0zNS05XVswLTldfFsxNF1bMC0yXSkgPygwWzEtOV18WzEtOF1bMC05XXw5WzAtNTctOV18MlthYl0pW1xcc1xcLlxcLV0/KDAwWzEtOV18MFsxLTldWzAtOV18WzEtOF1bMC05XXsyfXw5WzAtOF1bMC05XXw5OTApID8oWzAtOV17M30pID8oWzAtOF1bMC05XXw5WzAtN10pJCcsXG4gICAgICAgIG1hc2s6IFwiOTk5OTk5OTk5OTk5OTk5XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB9XG59KTtcbklucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcbiAgICAna20nOiB7XG4gICAgICAgIGFsaWFzOiAnbnVtZXJpYycsXG4gICAgICAgIGF1dG9Hcm91cDogdHJ1ZSxcbiAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHJpZ2h0QWxpZ246IGZhbHNlLFxuICAgICAgICBncmVlZHk6IGZhbHNlLFxuICAgICAgICBhbGxvd01pbnVzOiBmYWxzZSxcbiAgICB9XG59KTtcblxuXG4iLCIvL3JlcXVpcmUoJy4uL21vYmlsZV92aWV3L21vYmlsZV92aWV3LmpzJylcbmltcG9ydCBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IFwiLi91cGxvYWRcIjtcbmltcG9ydCBcIi4vYWxpYXNcIjtcbmltcG9ydCBcIi4vcG9wb3ZlclwiO1xuaW1wb3J0IFwiLi9zb3J0YWJsZVwiO1xuaW1wb3J0IFwiLi90b29sc1wiO1xuIiwiLy8gc2V0dXAgYW4gXCJhZGQgYSB0YWdcIiBsaW5rXG5cblxuaW5pdCgpXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnLmNvbGxlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAvL3BvbiBhZGRpdGlvbmUgbGUgYm91dHBvbiBzdXBwcmltZXJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuY3VzdG9tLWZpbGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYXBwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwicmVtb3ZlLXRhZyBidG4gYnRuLWRhbmdlclwiID5TdXBwcmltZXI8L2E+JylcbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgJGNvbGxlY3Rpb25Ib2xkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICBpZiAoJGNvbGxlY3Rpb25Ib2xkZXIuYXR0cignZGF0YS1wcm90b3R5cGUnKSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSAkY29sbGVjdGlvbkhvbGRlci5hdHRyKCdpZCcpLnNwbGl0KCdfJykuc2xpY2UoLTEpWzBdIC8vb24gc8OpbGVjdGlvbm5lIGxlIGRlcm5pZXJcbiAgICAgICAgICAgIHZhciAkYWRkVGFnTGluayA9ICQoJzxhIGhyZWY9XCIjXCIgaWQ9XCJhZGRfdGFnX2xpbmtfJyArIGNvbGxlY3Rpb25OYW1lICsgJ1wiIGNsYXNzPVwiYWRkX3RhZ19saW5rIGJ0biBidG4tcHJpbWFyeVwiPjwvYT4nKTtcbiAgICAgICAgICAgIC8vb24gdsOpcmlmaWUgc2kgb24gYSB0cmFpdGVyIGNldHRlIGNvbGxlY3Rpb24gZW4gdsOpcmlmaWFudCBsYSBwcsOpc2VuY2UgZHUgYm91dG9uIGFqb3V0ZXJcbiAgICAgICAgICAgIGlmICgkKCcjJyArICdhZGRfdGFnX2xpbmtfJyArIGNvbGxlY3Rpb25OYW1lKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkYWRkVGFnTGluayk7XG4gICAgICAgICAgICAgICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlci5maW5kKCc6aW5wdXQnKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLmFwcGVuZCgnQWpvdXRlciAnICsgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLmFkZENsYXNzKCdjb2wtMTInKVxuICAgICAgICAgICAgICAgICRhZGRUYWdMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgdGhlIGxpbmsgZnJvbSBjcmVhdGluZyBhIFwiI1wiIG9uIHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBhIG5ldyB0YWcgZm9ybSAoc2VlIGNvZGUgYmxvY2sgYmVsb3cpXG4gICAgICAgICAgICAgICAgICAgIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRhZGRUYWdMaW5rKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgdGhlIHJlbW92YWwsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZVxuICAgICQoJy5yZW1vdmUtdGFnJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuXG4kdGFiQ29sID0gWydzb2lucycsICdwbGFuaWZpY2F0aW9ucyddXG4vL2F1IGNhcyBvdSBtZXR0cmUgdW4gdGFibGVhdSBhdmVjIHNvaW5zIGV0IHBsYW5pZmljYXRpb25cbmZ1bmN0aW9uIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRhZGRUYWdMaW5rKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xuXG4gICAgdmFyIGluZGV4ID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcblxuICAgIC8vIFJlcGxhY2UgJyQkbmFtZSQkJyBpbiB0aGUgcHJvdG90eXBlJ3MgSFRNTCB0b1xuICAgIC8vIGluc3RlYWQgYmUgYSBudW1iZXIgYmFzZWQgb24gaG93IG1hbnkgaXRlbXMgd2UgaGF2ZVxuICAgIGNvbGxlY3Rpb25OYW1lID0gJGNvbGxlY3Rpb25Ib2xkZXIuYXR0cignaWQnKS5zcGxpdCgnXycpLnNsaWNlKC0xKVswXSAvL29uIHPDqWxlY3Rpb25uZSBsZSBkZXJuaWVyXG4gICAgLy9zb2luc19fX25hbWVfX19cbiAgICAvL25hbWU9XCJbc29pbnNdW19fbmFtZV9fXVxuICAgIC8vZMOpdGVjdGlvbnMgc2kgcyBvdSBwYXMgw6AgcHJvdG90eXBlXG4gICAgdmFyIHByb3RvcztcbiAgICBpZiAocHJvdG90eXBlLmluZGV4T2YoY29sbGVjdGlvbk5hbWUgKyAnX19fbmFtZV9fXycpICE9IC0xKVxuICAgICAgICBwcm90b3MgPSBjb2xsZWN0aW9uTmFtZTtcbiAgICBlbHNlIHByb3RvcyA9IGNvbGxlY3Rpb25OYW1lICsgJ3MnO1xuICAgIC8vY2hhbmdlbWVudCBkZXMgaWRzXG4gICAgLy9zdHIucmVwbGFjZSgvYWJjL2csICcnKTtcbiAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZS5yZXBsYWNlKHByb3RvcyArICdfX19uYW1lX19fL2cnLCBwcm90b3MgKyAnXycgKyBpbmRleCArICdfJyk7XG4gICAgLy8gQnVnXG4gICAgJHRhYkNvbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvL2NoYW5nZW1lbnQgZGVzIG5hbWVzXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoZWxlbWVudCArICddXFxbX19uYW1lX19dL2cnLCBlbGVtZW50ICsgXCJdW1wiICsgaW5kZXggKyBcIl1cIik7XG4gICAgfSk7XG5cblxuICAgIGNvbnNvbGUubG9nKHByb3RvcyArICddXFxbX19uYW1lX19dJylcbiAgICAvL25ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2VBbGwocHJvdG9zICsgXCJdXCIsIHByb3RvcyArIFwiXVtcIiArIGluZGV4ICsgXCJdXCIpO1xuXG5cbiAgICAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4ICsgMSk7XG4gICAgLy8gRGlzcGxheSB0aGUgZm9ybSBpbiB0aGUgcGFnZSBpbiBhbiBsaSwgYmVmb3JlIHRoZSBcIkFkZCBhIHRhZ1wiIGxpbmsgbGlcbiAgICB2YXIgJG5ld0Zvcm1MaSA9ICQoJzxkaXY+PC9kaXY+JykuYXBwZW5kKG5ld0Zvcm0pO1xuXG4gICAgLy8gYWxzbyBhZGQgYSByZW1vdmUgYnV0dG9uLCBqdXN0IGZvciB0aGlzIGV4YW1wbGVcbiAgICAkbmV3Rm9ybUxpLmFwcGVuZCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInJlbW92ZS10YWcgYnRuIGJ0bi1kYW5nZXJcIiA+U3VwcHJpbWVyPC9hPicpO1xuXG4gICAgJGFkZFRhZ0xpbmsuYmVmb3JlKCRuZXdGb3JtTGkpO1xuXG5cbiAgICAvL29uIHbDqXJpcmllIHF1J2lsIG4neSBhaXQgcGFzIGRlIG5vdXZlYXUgY29sbGVjdGlvbiDDoCBnw6lyZXJcbiAgICBpbml0KClcblxufVxuIiwiLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcG92ZXIgcG91ciBsZXMgaW1hZ2VzXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSoqL1xuXG4vKlxuMSkgcG9zc2liaWxpdMOpIGRlIG1vZGlmaWVyIGxhIGxhcmdldXIgcGFyXG4ucG9wb3ZlciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4yKSBwb3NzaWJpbGl0w6kgZGUgZMOpaW5pciB1bmUgZmVybWV0dXJlIGF1dG9tYXRpcXVlIGVuIG1zIHNpbm9uIHBhciBjbGljayBzaSBwYXMgZMOpZmluaVxudmFyIHBvcG92ZXJfdGltZT0yMDAwXG4qL1xuXG4kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci1ob3ZlclwiXScpXG4gICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvcHVwID0gdGhpc1xuICAgICAgICAvL2Zlcm1ldHVyZSBhdXRvbWF0aXF1ZVxuICAgICAgICBpZiAodHlwZW9mIHBvcG92ZXJfdGltZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHBvcHVwKS5wb3BvdmVyKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCBwb3BvdmVyX3RpbWUpO1xuICAgIH0pXG4gICAgLnBvcG92ZXIoe1xuICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICc8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwiJyArICQodGhpcykuZGF0YSgnaW1nJykgKyAnXCIgLz4nO1xuICAgICAgICB9XG4gICAgfSk7XG4kKFwiaHRtbFwiKS5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbCA9ICQoZS50YXJnZXQpO1xuICAgIGlmICgkKFwiLnBvcG92ZXJcIikubGVuZ3RoKVxuICAgICAgICBpZiAobFswXS5jbGFzc05hbWUuaW5kZXhPZihcInBvcG92ZXJcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICQoXCIucG9wb3ZlclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBvcG92ZXIoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbn0pOyIsIi8vbGlzdGUgc29ydGFibGUgZW4gbWV0dGFudCAjc29ydGFibGVcbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS9kaXNhYmxlLXNlbGVjdGlvbicpO1xuJChmdW5jdGlvbiAoKSB7XG5cbiAgICAkKFwiI3NvcnRhYmxlXCIpLnNvcnRhYmxlKFxuICAgICAgICB7XG4gICAgICAgICAgICBjdXJzb3I6IFwibW92ZVwiLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0RWxlbWVudHMgPSAkKFwiI3NvcnRhYmxlXCIpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAkLmVhY2gobGlzdEVsZW1lbnRzLCBmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdFZhbHVlcy5wdXNoKGVsZW1lbnQuZGF0YXNldC5udW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvc29ydGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJlbnRpdGU9XCIgKyAkKCcjc2F2ZV9zb3J0YWJsZScpLmF0dHIoJ2VudGl0ZScpICsgJyZzb3J0YWJsZT0nICsgbGlzdFZhbHVlcy5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImRhdGFUeXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmUgb2snKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbiAgICAvL29uIG1ldCDDoCBqb3VyIGxhIGxpc3RlIGF1IGTDqW1hcnJhZ2VcbiAgICBpZiAoJCgnI2V4X3NvcnRhYmxlJykudmFsKCkpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9ICQoJyNleF9zb3J0YWJsZScpLnZhbCgpLnNwbGl0KCcsJyk7XG4gICAgICAgIGlmIChwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICQuZWFjaChwb3NpdGlvbnMsIGZ1bmN0aW9uIChpLCBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChcIiNzb3J0YWJsZVwiKS5maW5kKCdbZGF0YS1udW09JyArIHBvc2l0aW9uICsgJ10nKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFwcGVuZFRvKCQoXCIjc29ydGFibGVcIikpOyAvLyBvciBwcmVwZW5kVG8gZm9yIHJldmVyc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChcIiNzb3J0YWJsZVwiKS5kaXNhYmxlU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pOyIsIi8vbWlzZSBlbiBwbGFjZSBkJ3VuZSBhbmltYXRpb24gZG91Y2Ugc3VyIGxlcyBjbGljayBwb3VyIGFsbGVyIHN1ciBsZXMgYW5jcmVzXG52YXIgJHJvb3QgPSAkKFwiaHRtbCwgYm9keVwiKTtcblxuJCgnYVtocmVmXj1cIiNcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJHJvb3QuYW5pbWF0ZShcbiAgICB7XG4gICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsIFwiaHJlZlwiKSkub2Zmc2V0KCkudG9wLFxuICAgIH0sXG4gICAgNjAwXG4gICk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4vL2FjdGl2YXRpb24gZGVzIHRvb2x0aXBzXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuIiwiXG52YXIgU25hbWU7XG52YXIgbm9tYnJlO1xuXG5leGVjdXRlKCk7XG5cbi8vcmVsYW5jZSBzaSBham91dCBkZSBmaWxlc1xuJChkb2N1bWVudCkuYmluZCgnRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICBleGVjdXRlKCk7XG5cbn0pXG5cbi8vIC8vc2kgYydlc3QgdW5lIGNvbGxlY3Rpb25cbi8vIGlmICgkKCcjJyArIFNuYW1lICsgJ3VybCcpLmxlbmd0aCAhPSAwKSB7XG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBub21icmUgPSAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmxlbmd0aDtcbi8vICAgICAgICAgaWYgKCQoJyMnICsgU25hbWUgKyAndXJsJykubGVuZ3RoICE9IDApIGV4ZWN1dGUoKVxuLy8gICAgIH0pO1xuXG4vLyAgICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpXG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4vLyAgICAgfSlcblxuXG4vLyB9XG4vLyBlbHNlIHtcbi8vICAgICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgICQoZS50YXJnZXQpLm5leHQoKS50ZXh0KGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUpXG4vLyAgICAgfSlcbi8vIH1cblxuXG5mdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKCdvbmNoYW5nZScpKSB7IC8vb24gdsOpcmlmaWUgcXVlIGwnb24gYSBwYXMgbWlzIHVuIG9uY2hhbmdlXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwib25jaGFuZ2VcIik7Ly8gb24sIGFqb3V0ZSB1bmUgY2xhc3NlXG4gICAgICAgICAgICBpZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKVxuICAgICAgICAgICAgdXJsID0gaWQuc3Vic3RyKDAsIGlkLmxlbmd0aCAtIDgpICsgJ191cmwnXG4gICAgICAgICAgICBpZiAoJCgnIycgKyB1cmwpLnZhbCgpKSAkKGVsZW1lbnQpLnBhcmVudCgpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJleHZhbGV1clwiPicgKyAkKCcjJyArIHVybCkudmFsKCkgKyAnPC9zcGFuPicpIC8vZm9uY3Rpb25uZSBxdWUgcG91ciBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAkKGVsZW1lbnQpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgU25hbWUgPSB0aGlzLmlkLnN1YnN0cigwLCB0aGlzLmlkLmxhc3RJbmRleE9mKCdfJykpICsgJ18nO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gJCh0aGlzKVswXS5maWxlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgdXBsb2FkID0gbmV3IFVwbG9hZChmaWxlKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFycmUgPSAkKHRoaXMpLm5leHQoKVxuICAgICAgICAgICAgICAgIGJhcnJlLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIsIDApO1xuICAgICAgICAgICAgICAgIC8vYmFycmUud2lkdGgoJzAlJyk7XG4gICAgICAgICAgICAgICAgYmFycmUudGV4dCgnRW52b3nDqSAoMCUpJyk7XG4gICAgICAgICAgICAgICAgYmFycmUuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXdhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy1lbmRlZCcpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC5kb1VwbG9hZCgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG52YXIgVXBsb2FkID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xufTtcblxuVXBsb2FkLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUudHlwZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmdldE9iamV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9iamV0O1xufTtcblVwbG9hZC5wcm90b3R5cGUuc2V0T2JqZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMub2JqZXQgPSBlO1xufTtcblVwbG9hZC5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG59O1xuVXBsb2FkLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbn07XG5VcGxvYWQucHJvdG90eXBlLmRvVXBsb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBVcGxvYWQucHJvdG90eXBlLnNldE9iamV0KGUpXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy8gYWRkIGFzc29jIGtleSB2YWx1ZXMsIHRoaXMgd2lsbCBiZSBwb3N0cyB2YWx1ZXNcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuZmlsZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsICQoJyN0b2tlbicpLnZhbCgpKTtcbiAgICB2YXIgYmFyID0gVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2lkJylcbiAgICBkaXJlY3RvcnkgPSBiYXIuc3Vic3RyKDAsIGJhci5pbmRleE9mKCdfJykpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRpcmVjdG9yeVwiLCBkaXJlY3RvcnkpO1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vVXBsb2FkLnByb3RvdHlwZS5nZXRPYmpldCgpLmF0dHIoJ2Jhc2U2NCcsIHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL3VwbG9hZFwiLFxuICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVhociA9ICQuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgICAgICAgaWYgKG15WGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIG15WGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHRoYXQucHJvZ3Jlc3NIYW5kbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG15WGhyO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgdmFyIHJldG91ciA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICAgICAgICAgIFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5hdHRyKCdkYXRhLXRtcCcsIHJldG91ci50bXBfbmFtZSlcblxuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1hbmltYXRlZCcpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLWluZm8nKTtcbiAgICAgICAgICAgIGJhcnJlLnJlbW92ZUNsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctc3VjY2VzcycpO1xuICAgICAgICAgICAgYmFycmUudGV4dChyZXRvdXIubmFtZSk7XG4gICAgICAgICAgICAkKCcjJyArIFNuYW1lICsgJ3VybCcpLnZhbChKU09OLnN0cmluZ2lmeShyZXRvdXIpKVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBiYXJyZS5hZGRDbGFzcygnYmctZW5kZWQnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB2YXIgYmFycmUgPSBVcGxvYWQucHJvdG90eXBlLmdldE9iamV0KCkubmV4dCgpXG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICBiYXJyZS50ZXh0KCdFcnJldXIgZGFucyBsXFwnZW52b2llJyk7XG4gICAgICAgICAgICBiYXJyZS5yZW1vdmVDbGFzcygnYmctaW5mbycpO1xuICAgICAgICAgICAgYmFycmUucmVtb3ZlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJhcnJlLmFkZENsYXNzKCdiZy13YXJuaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogNjAwMDBcbiAgICB9KTtcbn07XG5cblVwbG9hZC5wcm90b3R5cGUucHJvZ3Jlc3NIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGVyY2VudCA9IDA7XG4gICAgdmFyIHBvc2l0aW9uID0gZXZlbnQubG9hZGVkIHx8IGV2ZW50LnBvc2l0aW9uO1xuICAgIHZhciB0b3RhbCA9IGV2ZW50LnRvdGFsO1xuICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgIHBlcmNlbnQgPSBNYXRoLmNlaWwocG9zaXRpb24gLyB0b3RhbCAqIDEwMCk7XG4gICAgfVxuICAgIHZhciBiYXJyZSA9IFVwbG9hZC5wcm90b3R5cGUuZ2V0T2JqZXQoKS5uZXh0KClcbiAgICBiYXJyZS5zaG93KCk7XG4gICAgYmFycmUuYXR0cihcImFyaWEtdmFsdWVub3dcIiwgcGVyY2VudC50b0ZpeGVkKDApKTtcbiAgICAvL2JhcnJlLndpZHRoKHBlcmNlbnQudG9GaXhlZCgwKSArICclJyk7XG4gICAgYmFycmUudGV4dCgnRW52b3nDqSAoJyArIHBlcmNlbnQudG9GaXhlZCgyKSArICclKScpO1xufTtcblxuXG5cblxuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9