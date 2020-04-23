(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/add"],{

/***/ "./assets/js/add-trick.js":
/*!********************************!*\
  !*** ./assets/js/add-trick.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

jQuery(document).ready(function () {
  // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
  var $container = $('div#trick_pictures');
  console.log($container); // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement

  var index = $container.find('input').length; // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.

  $('#add_picture').click(function (e) {
    addPicture($container);
    e.preventDefault(); // évite qu'un # apparaisse dans l'URL

    return false;
  }); // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).

  if (index == 0) {
    addPicture($container);
  } else {
    // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
    $container.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // La fonction qui ajoute un formulaire CategoryType


  function addPicture($container) {
    // Dans le contenu de l'attribut « data-prototype », on remplace :
    // - le texte "__name__label__" qu'il contient par le label du champ
    // - le texte "__name__" qu'il contient par le numéro du champ
    var template = $container.attr('data-prototype').replace(/__name__/g, index); // On crée un objet jquery qui contient ce template

    var $prototype = $(template); // On ajoute au prototype un lien pour pouvoir supprimer la catégorie

    addDeleteLink($prototype); // On ajoute le prototype modifié à la fin de la balise <div>

    $container.append($prototype); // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro

    index++;
  } // La fonction qui ajoute un lien de suppression d'une catégorie


  function addDeleteLink($prototype) {
    // Création du lien
    var $deleteLink = $('<button type="button" class="btn-delete-picture">X</button>'); // Ajout du lien

    $prototype.append($deleteLink); // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie

    $deleteLink.click(function (e) {
      $prototype.remove();
      e.preventDefault(); // évite qu'un # apparaisse dans l'URL

      return false;
    });
  } // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.


  var $container = $('div#trick_videos');
  console.log($container); // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement

  var index = $container.find('input').length; // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.

  $('#add_video').click(function (e) {
    addVideo($container);
    e.preventDefault(); // évite qu'un # apparaisse dans l'URL

    return false;
  }); // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).

  if (index == 0) {
    addVideo($container);
  } else {
    // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
    $container.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // La fonction qui ajoute un formulaire CategoryType


  function addVideo($container) {
    // Dans le contenu de l'attribut « data-prototype », on remplace :
    // - le texte "__name__label__" qu'il contient par le label du champ
    // - le texte "__name__" qu'il contient par le numéro du champ
    var template = $container.attr('data-prototype').replace(/__name__/g, index); // On crée un objet jquery qui contient ce template

    var $prototype = $(template); // On ajoute au prototype un lien pour pouvoir supprimer la catégorie

    addDeleteLink($prototype); // On ajoute le prototype modifié à la fin de la balise <div>

    $container.append($prototype); // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro

    index++;
  } // La fonction qui ajoute un lien de suppression d'une catégorie


  function addDeleteLink($prototype) {
    // Création du lien
    var $deleteLink = $('<button type="button" class="btn-delete-video">X</button>'); // Ajout du lien

    $prototype.append($deleteLink); // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie

    $deleteLink.click(function (e) {
      $prototype.remove();
      e.preventDefault(); // évite qu'un # apparaisse dans l'URL

      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/add-trick.js","runtime","vendors~js/add~js/app","vendors~js/add"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkY29udGFpbmVyIiwiJCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImZpbmQiLCJsZW5ndGgiLCJjbGljayIsImUiLCJhZGRQaWN0dXJlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsImVhY2giLCJhZGREZWxldGVMaW5rIiwidGVtcGxhdGUiLCJhdHRyIiwicmVwbGFjZSIsIiRwcm90b3R5cGUiLCJhcHBlbmQiLCIkZGVsZXRlTGluayIsInJlbW92ZSIsImFkZFZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVc7QUFFOUI7QUFDQSxNQUFJQyxVQUFVLEdBQUdDLENBQUMsQ0FBQyxvQkFBRCxDQUFsQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWixFQUo4QixDQUs5Qjs7QUFDQSxNQUFJSSxLQUFLLEdBQUdKLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQixPQUFoQixFQUF5QkMsTUFBckMsQ0FOOEIsQ0FROUI7O0FBQ0FMLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JNLEtBQWxCLENBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNsQ0MsY0FBVSxDQUFDVCxVQUFELENBQVY7QUFFQVEsS0FBQyxDQUFDRSxjQUFGLEdBSGtDLENBR2Q7O0FBQ3BCLFdBQU8sS0FBUDtBQUNELEdBTEQsRUFUOEIsQ0FnQjlCOztBQUNBLE1BQUlOLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2RLLGNBQVUsQ0FBQ1QsVUFBRCxDQUFWO0FBQ0QsR0FGRCxNQUVPO0FBQ0w7QUFDQUEsY0FBVSxDQUFDVyxRQUFYLENBQW9CLEtBQXBCLEVBQTJCQyxJQUEzQixDQUFnQyxZQUFXO0FBQ3pDQyxtQkFBYSxDQUFDWixDQUFDLENBQUMsSUFB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QUNFLGNBQUYsR0FINEIsQ0FHUjs7QUFDcEIsYUFBTyxLQUFQO0FBQ0QsS0FMRDtBQU1EO0FBQ0osQ0EvSEQsRSIsImZpbGUiOiJqcy9hZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgXG4gICAgLy8gT24gcsOpY3Vww6hyZSBsYSBiYWxpc2UgPGRpdj4gZW4gcXVlc3Rpb24gcXVpIGNvbnRpZW50IGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrsgcXVpIG5vdXMgaW50w6lyZXNzZS5cbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJ2RpdiN0cmlja19waWN0dXJlcycpO1xuICAgIGNvbnNvbGUubG9nKCRjb250YWluZXIpO1xuICAgIC8vIE9uIGTDqWZpbml0IHVuIGNvbXB0ZXVyIHVuaXF1ZSBwb3VyIG5vbW1lciBsZXMgY2hhbXBzIHF1J29uIHZhIGFqb3V0ZXIgZHluYW1pcXVlbWVudFxuICAgIHZhciBpbmRleCA9ICRjb250YWluZXIuZmluZCgnaW5wdXQnKS5sZW5ndGg7XG5cbiAgICAvLyBPbiBham91dGUgdW4gbm91dmVhdSBjaGFtcCDDoCBjaGFxdWUgY2xpYyBzdXIgbGUgbGllbiBkJ2Fqb3V0LlxuICAgICQoJyNhZGRfcGljdHVyZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFkZFBpY3R1cmUoJGNvbnRhaW5lcik7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBham91dGUgdW4gcHJlbWllciBjaGFtcCBhdXRvbWF0aXF1ZW1lbnQgcydpbCBuJ2VuIGV4aXN0ZSBwYXMgZMOpasOgIHVuIChjYXMgZCd1bmUgbm91dmVsbGUgYW5ub25jZSBwYXIgZXhlbXBsZSkuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIGFkZFBpY3R1cmUoJGNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFMnaWwgZXhpc3RlIGTDqWrDoCBkZXMgY2F0w6lnb3JpZXMsIG9uIGFqb3V0ZSB1biBsaWVuIGRlIHN1cHByZXNzaW9uIHBvdXIgY2hhY3VuZSBkJ2VudHJlIGVsbGVzXG4gICAgICAkY29udGFpbmVyLmNoaWxkcmVuKCdkaXYnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGREZWxldGVMaW5rKCQodGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTGEgZm9uY3Rpb24gcXVpIGFqb3V0ZSB1biBmb3JtdWxhaXJlIENhdGVnb3J5VHlwZVxuICAgIGZ1bmN0aW9uIGFkZFBpY3R1cmUoJGNvbnRhaW5lcikge1xuICAgICAgLy8gRGFucyBsZSBjb250ZW51IGRlIGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrssIG9uIHJlbXBsYWNlIDpcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX2xhYmVsX19cIiBxdSdpbCBjb250aWVudCBwYXIgbGUgbGFiZWwgZHUgY2hhbXBcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBudW3DqXJvIGR1IGNoYW1wXG4gICAgICB2YXIgdGVtcGxhdGUgPSAkY29udGFpbmVyLmF0dHIoJ2RhdGEtcHJvdG90eXBlJykucmVwbGFjZSgvX19uYW1lX18vZywgICAgICAgIGluZGV4KVxuICAgICAgO1xuXG4gICAgICAvLyBPbiBjcsOpZSB1biBvYmpldCBqcXVlcnkgcXVpIGNvbnRpZW50IGNlIHRlbXBsYXRlXG4gICAgICB2YXIgJHByb3RvdHlwZSA9ICQodGVtcGxhdGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgYXUgcHJvdG90eXBlIHVuIGxpZW4gcG91ciBwb3V2b2lyIHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICBhZGREZWxldGVMaW5rKCRwcm90b3R5cGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgbGUgcHJvdG90eXBlIG1vZGlmacOpIMOgIGxhIGZpbiBkZSBsYSBiYWxpc2UgPGRpdj5cbiAgICAgICRjb250YWluZXIuYXBwZW5kKCRwcm90b3R5cGUpO1xuXG4gICAgICAvLyBFbmZpbiwgb24gaW5jcsOpbWVudGUgbGUgY29tcHRldXIgcG91ciBxdWUgbGUgcHJvY2hhaW4gYWpvdXQgc2UgZmFzc2UgYXZlYyB1biBhdXRyZSBudW3DqXJvXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIC8vIExhIGZvbmN0aW9uIHF1aSBham91dGUgdW4gbGllbiBkZSBzdXBwcmVzc2lvbiBkJ3VuZSBjYXTDqWdvcmllXG4gICAgZnVuY3Rpb24gYWRkRGVsZXRlTGluaygkcHJvdG90eXBlKSB7XG4gICAgICAvLyBDcsOpYXRpb24gZHUgbGllblxuICAgICAgdmFyICRkZWxldGVMaW5rID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tZGVsZXRlLXBpY3R1cmVcIj5YPC9idXR0b24+Jyk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpZW5cbiAgICAgICRwcm90b3R5cGUuYXBwZW5kKCRkZWxldGVMaW5rKTtcblxuICAgICAgLy8gQWpvdXQgZHUgbGlzdGVuZXIgc3VyIGxlIGNsaWMgZHUgbGllbiBwb3VyIGVmZmVjdGl2ZW1lbnQgc3VwcHJpbWVyIGxhIGNhdMOpZ29yaWVcbiAgICAgICRkZWxldGVMaW5rLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJHByb3RvdHlwZS5yZW1vdmUoKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIMOpdml0ZSBxdSd1biAjIGFwcGFyYWlzc2UgZGFucyBsJ1VSTFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLy8gT24gcsOpY3Vww6hyZSBsYSBiYWxpc2UgPGRpdj4gZW4gcXVlc3Rpb24gcXVpIGNvbnRpZW50IGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrsgcXVpIG5vdXMgaW50w6lyZXNzZS5cbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJ2RpdiN0cmlja192aWRlb3MnKTtcbiAgICBjb25zb2xlLmxvZygkY29udGFpbmVyKTtcbiAgICAvLyBPbiBkw6lmaW5pdCB1biBjb21wdGV1ciB1bmlxdWUgcG91ciBub21tZXIgbGVzIGNoYW1wcyBxdSdvbiB2YSBham91dGVyIGR5bmFtaXF1ZW1lbnRcbiAgICB2YXIgaW5kZXggPSAkY29udGFpbmVyLmZpbmQoJ2lucHV0JykubGVuZ3RoO1xuXG4gICAgLy8gT24gYWpvdXRlIHVuIG5vdXZlYXUgY2hhbXAgw6AgY2hhcXVlIGNsaWMgc3VyIGxlIGxpZW4gZCdham91dC5cbiAgICAkKCcjYWRkX3ZpZGVvJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgYWRkVmlkZW8oJGNvbnRhaW5lcik7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBham91dGUgdW4gcHJlbWllciBjaGFtcCBhdXRvbWF0aXF1ZW1lbnQgcydpbCBuJ2VuIGV4aXN0ZSBwYXMgZMOpasOgIHVuIChjYXMgZCd1bmUgbm91dmVsbGUgYW5ub25jZSBwYXIgZXhlbXBsZSkuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIGFkZFZpZGVvKCRjb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTJ2lsIGV4aXN0ZSBkw6lqw6AgZGVzIGNhdMOpZ29yaWVzLCBvbiBham91dGUgdW4gbGllbiBkZSBzdXBwcmVzc2lvbiBwb3VyIGNoYWN1bmUgZCdlbnRyZSBlbGxlc1xuICAgICAgJGNvbnRhaW5lci5jaGlsZHJlbignZGl2JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgYWRkRGVsZXRlTGluaygkKHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExhIGZvbmN0aW9uIHF1aSBham91dGUgdW4gZm9ybXVsYWlyZSBDYXRlZ29yeVR5cGVcbiAgICBmdW5jdGlvbiBhZGRWaWRlbygkY29udGFpbmVyKSB7XG4gICAgICAvLyBEYW5zIGxlIGNvbnRlbnUgZGUgbCdhdHRyaWJ1dCDCqyBkYXRhLXByb3RvdHlwZSDCuywgb24gcmVtcGxhY2UgOlxuICAgICAgLy8gLSBsZSB0ZXh0ZSBcIl9fbmFtZV9fbGFiZWxfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBsYWJlbCBkdSBjaGFtcFxuICAgICAgLy8gLSBsZSB0ZXh0ZSBcIl9fbmFtZV9fXCIgcXUnaWwgY29udGllbnQgcGFyIGxlIG51bcOpcm8gZHUgY2hhbXBcbiAgICAgIHZhciB0ZW1wbGF0ZSA9ICRjb250YWluZXIuYXR0cignZGF0YS1wcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCAgICAgICAgaW5kZXgpXG4gICAgICA7XG5cbiAgICAgIC8vIE9uIGNyw6llIHVuIG9iamV0IGpxdWVyeSBxdWkgY29udGllbnQgY2UgdGVtcGxhdGVcbiAgICAgIHZhciAkcHJvdG90eXBlID0gJCh0ZW1wbGF0ZSk7XG5cbiAgICAgIC8vIE9uIGFqb3V0ZSBhdSBwcm90b3R5cGUgdW4gbGllbiBwb3VyIHBvdXZvaXIgc3VwcHJpbWVyIGxhIGNhdMOpZ29yaWVcbiAgICAgIGFkZERlbGV0ZUxpbmsoJHByb3RvdHlwZSk7XG5cbiAgICAgIC8vIE9uIGFqb3V0ZSBsZSBwcm90b3R5cGUgbW9kaWZpw6kgw6AgbGEgZmluIGRlIGxhIGJhbGlzZSA8ZGl2PlxuICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJHByb3RvdHlwZSk7XG5cbiAgICAgIC8vIEVuZmluLCBvbiBpbmNyw6ltZW50ZSBsZSBjb21wdGV1ciBwb3VyIHF1ZSBsZSBwcm9jaGFpbiBham91dCBzZSBmYXNzZSBhdmVjIHVuIGF1dHJlIG51bcOpcm9cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgLy8gTGEgZm9uY3Rpb24gcXVpIGFqb3V0ZSB1biBsaWVuIGRlIHN1cHByZXNzaW9uIGQndW5lIGNhdMOpZ29yaWVcbiAgICBmdW5jdGlvbiBhZGREZWxldGVMaW5rKCRwcm90b3R5cGUpIHtcbiAgICAgIC8vIENyw6lhdGlvbiBkdSBsaWVuXG4gICAgICB2YXIgJGRlbGV0ZUxpbmsgPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1kZWxldGUtdmlkZW9cIj5YPC9idXR0b24+Jyk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpZW5cbiAgICAgICRwcm90b3R5cGUuYXBwZW5kKCRkZWxldGVMaW5rKTtcblxuICAgICAgLy8gQWpvdXQgZHUgbGlzdGVuZXIgc3VyIGxlIGNsaWMgZHUgbGllbiBwb3VyIGVmZmVjdGl2ZW1lbnQgc3VwcHJpbWVyIGxhIGNhdMOpZ29yaWVcbiAgICAgICRkZWxldGVMaW5rLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJHByb3RvdHlwZS5yZW1vdmUoKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIMOpdml0ZSBxdSd1biAjIGFwcGFyYWlzc2UgZGFucyBsJ1VSTFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9