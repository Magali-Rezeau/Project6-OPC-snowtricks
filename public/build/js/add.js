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
  $containerPicture = $('div#trick_pictures');
  console.log($containerPicture); // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement

  var index = $containerPicture.find('input').length; // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.

  $('#add_picture').click(function (e) {
    addPicture($containerPicture);
    e.preventDefault(); // évite qu'un # apparaisse dans l'URL

    return false;
  }); // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).

  if (index == 0) {
    addPicture($containerPicture);
  } else {
    // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
    $containerPicture.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // La fonction qui ajoute un formulaire CategoryType


  function addPicture($containerPicture) {
    // Dans le contenu de l'attribut « data-prototype », on remplace :
    // - le texte "__name__label__" qu'il contient par le label du champ
    // - le texte "__name__" qu'il contient par le numéro du champ
    var template = $containerPicture.attr('data-prototype').replace(/__name__/g, index); // On crée un objet jquery qui contient ce template

    $prototype = $(template); // On ajoute au prototype un lien pour pouvoir supprimer la catégorie

    addDeleteLinkPicture($prototype); // On ajoute le prototype modifié à la fin de la balise <div>

    $containerPicture.append($prototype); // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro

    index++;
  } // La fonction qui ajoute un lien de suppression d'une catégorie


  function addDeleteLinkPicture($prototype) {
    // Création du lien
    $deleteLinkPicture = $('<button type="button" class="btn-delete-picture">X</button>'); // Ajout du lien

    $prototype.append($deleteLinkPicture); // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie

    $deleteLinkPicture.click(function (e) {
      $prototype.remove();
      e.preventDefault(); // évite qu'un # apparaisse dans l'URL

      return false;
    });
  } // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.


  $containerVideo = $('div#trick_videos');
  console.log($containerVideo); // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement

  var index = $containerVideo.find('input').length; // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.

  $('#add_video').click(function (e) {
    addVideo($containerVideo);
    e.preventDefault(); // évite qu'un # apparaisse dans l'URL

    return false;
  }); // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).

  if (index == 0) {
    addVideo($containerVideo);
  } else {
    // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
    $containerVideo.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // La fonction qui ajoute un formulaire CategoryType


  function addVideo($containerVideo) {
    // Dans le contenu de l'attribut « data-prototype », on remplace :
    // - le texte "__name__label__" qu'il contient par le label du champ
    // - le texte "__name__" qu'il contient par le numéro du champ
    var template = $containerVideo.attr('data-prototype').replace(/__name__/g, index); // On crée un objet jquery qui contient ce template

    $prototype = $(template); // On ajoute au prototype un lien pour pouvoir supprimer la catégorie

    addDeleteLinkVideo($prototype); // On ajoute le prototype modifié à la fin de la balise <div>

    $containerVideo.append($prototype); // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro

    index++;
  } // La fonction qui ajoute un lien de suppression d'une catégorie


  function addDeleteLinkVideo($prototype) {
    // Création du lien
    $deleteLinkVideo = $('<button type="button" class="btn-delete-video">X</button>'); // Ajout du lien

    $prototype.append($deleteLinkVideo); // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie

    $deleteLinkVideo.click(function (e) {
      $prototype.remove();
      e.preventDefault(); // évite qu'un # apparaisse dans l'URL

      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/add-trick.js","runtime","vendors~js/add~js/app","vendors~js/add"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkY29udGFpbmVyUGljdHVyZSIsIiQiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJmaW5kIiwibGVuZ3RoIiwiY2xpY2siLCJlIiwiYWRkUGljdHVyZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJlYWNoIiwiYWRkRGVsZXRlTGluayIsInRlbXBsYXRlIiwiYXR0ciIsInJlcGxhY2UiLCIkcHJvdG90eXBlIiwiYWRkRGVsZXRlTGlua1BpY3R1cmUiLCJhcHBlbmQiLCIkZGVsZXRlTGlua1BpY3R1cmUiLCJyZW1vdmUiLCIkY29udGFpbmVyVmlkZW8iLCJhZGRWaWRlbyIsImFkZERlbGV0ZUxpbmtWaWRlbyIsIiRkZWxldGVMaW5rVmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUU5QjtBQUNBQyxtQkFBaUIsR0FBR0MsQ0FBQyxDQUFDLG9CQUFELENBQXJCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxpQkFBWixFQUo4QixDQUs5Qjs7QUFDQSxNQUFJSSxLQUFLLEdBQUdKLGlCQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0MsTUFBNUMsQ0FOOEIsQ0FROUI7O0FBQ0FMLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JNLEtBQWxCLENBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNsQ0MsY0FBVSxDQUFDVCxpQkFBRCxDQUFWO0FBRUFRLEtBQUMsQ0FBQ0UsY0FBRixHQUhrQyxDQUdkOztBQUNwQixXQUFPLEtBQVA7QUFDRCxHQUxELEVBVDhCLENBZ0I5Qjs7QUFDQSxNQUFJTixLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkSyxjQUFVLENBQUNULGlCQUFELENBQVY7QUFDRCxHQUZELE1B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Qk0sZ0JBQWxCLEVBTHNDLENBT3RDOztBQUNBQSxvQkFBZ0IsQ0FBQ2xCLEtBQWpCLENBQXVCLFVBQVNDLENBQVQsRUFBWTtBQUNqQ1MsZ0JBQVUsQ0FBQ0ksTUFBWDtBQUVBYixPQUFDLENBQUNFLGNBQUYsR0FIaUMsQ0FHYjs7QUFDcEIsYUFBTyxLQUFQO0FBQ0QsS0FMRDtBQU1EO0FBQ0osQ0EvSEQsRSIsImZpbGUiOiJqcy9hZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgXG4gICAgLy8gT24gcsOpY3Vww6hyZSBsYSBiYWxpc2UgPGRpdj4gZW4gcXVlc3Rpb24gcXVpIGNvbnRpZW50IGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrsgcXVpIG5vdXMgaW50w6lyZXNzZS5cbiAgICAkY29udGFpbmVyUGljdHVyZSA9ICQoJ2RpdiN0cmlja19waWN0dXJlcycpO1xuICAgIGNvbnNvbGUubG9nKCRjb250YWluZXJQaWN0dXJlKTtcbiAgICAvLyBPbiBkw6lmaW5pdCB1biBjb21wdGV1ciB1bmlxdWUgcG91ciBub21tZXIgbGVzIGNoYW1wcyBxdSdvbiB2YSBham91dGVyIGR5bmFtaXF1ZW1lbnRcbiAgICB2YXIgaW5kZXggPSAkY29udGFpbmVyUGljdHVyZS5maW5kKCdpbnB1dCcpLmxlbmd0aDtcblxuICAgIC8vIE9uIGFqb3V0ZSB1biBub3V2ZWF1IGNoYW1wIMOgIGNoYXF1ZSBjbGljIHN1ciBsZSBsaWVuIGQnYWpvdXQuXG4gICAgJCgnI2FkZF9waWN0dXJlJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgYWRkUGljdHVyZSgkY29udGFpbmVyUGljdHVyZSk7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBham91dGUgdW4gcHJlbWllciBjaGFtcCBhdXRvbWF0aXF1ZW1lbnQgcydpbCBuJ2VuIGV4aXN0ZSBwYXMgZMOpasOgIHVuIChjYXMgZCd1bmUgbm91dmVsbGUgYW5ub25jZSBwYXIgZXhlbXBsZSkuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIGFkZFBpY3R1cmUoJGNvbnRhaW5lclBpY3R1cmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTJ2lsIGV4aXN0ZSBkw6lqw6AgZGVzIGNhdMOpZ29yaWVzLCBvbiBham91dGUgdW4gbGllbiBkZSBzdXBwcmVzc2lvbiBwb3VyIGNoYWN1bmUgZCdlbnRyZSBlbGxlc1xuICAgICAgJGNvbnRhaW5lclBpY3R1cmUuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZERlbGV0ZUxpbmsoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMYSBmb25jdGlvbiBxdWkgYWpvdXRlIHVuIGZvcm11bGFpcmUgQ2F0ZWdvcnlUeXBlXG4gICAgZnVuY3Rpb24gYWRkUGljdHVyZSgkY29udGFpbmVyUGljdHVyZSkge1xuICAgICAgLy8gRGFucyBsZSBjb250ZW51IGRlIGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrssIG9uIHJlbXBsYWNlIDpcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX2xhYmVsX19cIiBxdSdpbCBjb250aWVudCBwYXIgbGUgbGFiZWwgZHUgY2hhbXBcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBudW3DqXJvIGR1IGNoYW1wXG4gICAgICB2YXIgdGVtcGxhdGUgPSAkY29udGFpbmVyUGljdHVyZS5hdHRyKCdkYXRhLXByb3RvdHlwZScpLnJlcGxhY2UoL19fbmFtZV9fL2csICAgICAgICBpbmRleClcbiAgICAgIDtcblxuICAgICAgLy8gT24gY3LDqWUgdW4gb2JqZXQganF1ZXJ5IHF1aSBjb250aWVudCBjZSB0ZW1wbGF0ZVxuICAgICAgJHByb3RvdHlwZSA9ICQodGVtcGxhdGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgYXUgcHJvdG90eXBlIHVuIGxpZW4gcG91ciBwb3V2b2lyIHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICBhZGREZWxldGVMaW5rUGljdHVyZSgkcHJvdG90eXBlKTtcblxuICAgICAgLy8gT24gYWpvdXRlIGxlIHByb3RvdHlwZSBtb2RpZmnDqSDDoCBsYSBmaW4gZGUgbGEgYmFsaXNlIDxkaXY+XG4gICAgICAkY29udGFpbmVyUGljdHVyZS5hcHBlbmQoJHByb3RvdHlwZSk7XG5cbiAgICAgIC8vIEVuZmluLCBvbiBpbmNyw6ltZW50ZSBsZSBjb21wdGV1ciBwb3VyIHF1ZSBsZSBwcm9jaGFpbiBham91dCBzZSBmYXNzZSBhdmVjIHVuIGF1dHJlIG51bcOpcm9cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgLy8gTGEgZm9uY3Rpb24gcXVpIGFqb3V0ZSB1biBsaWVuIGRlIHN1cHByZXNzaW9uIGQndW5lIGNhdMOpZ29yaWVcbiAgICBmdW5jdGlvbiBhZGREZWxldGVMaW5rUGljdHVyZSgkcHJvdG90eXBlKSB7XG4gICAgICAvLyBDcsOpYXRpb24gZHUgbGllblxuICAgICAgJGRlbGV0ZUxpbmtQaWN0dXJlID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tZGVsZXRlLXBpY3R1cmVcIj5YPC9idXR0b24+Jyk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpZW5cbiAgICAgICRwcm90b3R5cGUuYXBwZW5kKCRkZWxldGVMaW5rUGljdHVyZSk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpc3RlbmVyIHN1ciBsZSBjbGljIGR1IGxpZW4gcG91ciBlZmZlY3RpdmVtZW50IHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICAkZGVsZXRlTGlua1BpY3R1cmUuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkcHJvdG90eXBlLnJlbW92ZSgpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvLyBPbiByw6ljdXDDqHJlIGxhIGJhbGlzZSA8ZGl2PiBlbiBxdWVzdGlvbiBxdWkgY29udGllbnQgbCdhdHRyaWJ1dCDCqyBkYXRhLXByb3RvdHlwZSDCuyBxdWkgbm91cyBpbnTDqXJlc3NlLlxuICAgICRjb250YWluZXJWaWRlbyA9ICQoJ2RpdiN0cmlja192aWRlb3MnKTtcbiAgICBjb25zb2xlLmxvZygkY29udGFpbmVyVmlkZW8pO1xuICAgIC8vIE9uIGTDqWZpbml0IHVuIGNvbXB0ZXVyIHVuaXF1ZSBwb3VyIG5vbW1lciBsZXMgY2hhbXBzIHF1J29uIHZhIGFqb3V0ZXIgZHluYW1pcXVlbWVudFxuICAgIHZhciBpbmRleCA9ICRjb250YWluZXJWaWRlby5maW5kKCdpbnB1dCcpLmxlbmd0aDtcblxuICAgIC8vIE9uIGFqb3V0ZSB1biBub3V2ZWF1IGNoYW1wIMOgIGNoYXF1ZSBjbGljIHN1ciBsZSBsaWVuIGQnYWpvdXQuXG4gICAgJCgnI2FkZF92aWRlbycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFkZFZpZGVvKCRjb250YWluZXJWaWRlbyk7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBham91dGUgdW4gcHJlbWllciBjaGFtcCBhdXRvbWF0aXF1ZW1lbnQgcydpbCBuJ2VuIGV4aXN0ZSBwYXMgZMOpasOgIHVuIChjYXMgZCd1bmUgbm91dmVsbGUgYW5ub25jZSBwYXIgZXhlbXBsZSkuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIGFkZFZpZGVvKCRjb250YWluZXJWaWRlbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFMnaWwgZXhpc3RlIGTDqWrDoCBkZXMgY2F0w6lnb3JpZXMsIG9uIGFqb3V0ZSB1biBsaWVuIGRlIHN1cHByZXNzaW9uIHBvdXIgY2hhY3VuZSBkJ2VudHJlIGVsbGVzXG4gICAgICAkY29udGFpbmVyVmlkZW8uY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZERlbGV0ZUxpbmsoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMYSBmb25jdGlvbiBxdWkgYWpvdXRlIHVuIGZvcm11bGFpcmUgQ2F0ZWdvcnlUeXBlXG4gICAgZnVuY3Rpb24gYWRkVmlkZW8oJGNvbnRhaW5lclZpZGVvKSB7XG4gICAgICAvLyBEYW5zIGxlIGNvbnRlbnUgZGUgbCdhdHRyaWJ1dCDCqyBkYXRhLXByb3RvdHlwZSDCuywgb24gcmVtcGxhY2UgOlxuICAgICAgLy8gLSBsZSB0ZXh0ZSBcIl9fbmFtZV9fbGFiZWxfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBsYWJlbCBkdSBjaGFtcFxuICAgICAgLy8gLSBsZSB0ZXh0ZSBcIl9fbmFtZV9fXCIgcXUnaWwgY29udGllbnQgcGFyIGxlIG51bcOpcm8gZHUgY2hhbXBcbiAgICAgIHZhciB0ZW1wbGF0ZSA9ICRjb250YWluZXJWaWRlby5hdHRyKCdkYXRhLXByb3RvdHlwZScpLnJlcGxhY2UoL19fbmFtZV9fL2csICAgICAgICBpbmRleClcbiAgICAgIDtcblxuICAgICAgLy8gT24gY3LDqWUgdW4gb2JqZXQganF1ZXJ5IHF1aSBjb250aWVudCBjZSB0ZW1wbGF0ZVxuICAgICAgJHByb3RvdHlwZSA9ICQodGVtcGxhdGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgYXUgcHJvdG90eXBlIHVuIGxpZW4gcG91ciBwb3V2b2lyIHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICBhZGREZWxldGVMaW5rVmlkZW8oJHByb3RvdHlwZSk7XG5cbiAgICAgIC8vIE9uIGFqb3V0ZSBsZSBwcm90b3R5cGUgbW9kaWZpw6kgw6AgbGEgZmluIGRlIGxhIGJhbGlzZSA8ZGl2PlxuICAgICAgJGNvbnRhaW5lclZpZGVvLmFwcGVuZCgkcHJvdG90eXBlKTtcblxuICAgICAgLy8gRW5maW4sIG9uIGluY3LDqW1lbnRlIGxlIGNvbXB0ZXVyIHBvdXIgcXVlIGxlIHByb2NoYWluIGFqb3V0IHNlIGZhc3NlIGF2ZWMgdW4gYXV0cmUgbnVtw6lyb1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICAvLyBMYSBmb25jdGlvbiBxdWkgYWpvdXRlIHVuIGxpZW4gZGUgc3VwcHJlc3Npb24gZCd1bmUgY2F0w6lnb3JpZVxuICAgIGZ1bmN0aW9uIGFkZERlbGV0ZUxpbmtWaWRlbygkcHJvdG90eXBlKSB7XG4gICAgICAvLyBDcsOpYXRpb24gZHUgbGllblxuICAgICAgJGRlbGV0ZUxpbmtWaWRlbyA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWRlbGV0ZS12aWRlb1wiPlg8L2J1dHRvbj4nKTtcblxuICAgICAgLy8gQWpvdXQgZHUgbGllblxuICAgICAgJHByb3RvdHlwZS5hcHBlbmQoJGRlbGV0ZUxpbmtWaWRlbyk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpc3RlbmVyIHN1ciBsZSBjbGljIGR1IGxpZW4gcG91ciBlZmZlY3RpdmVtZW50IHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICAkZGVsZXRlTGlua1ZpZGVvLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJHByb3RvdHlwZS5yZW1vdmUoKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIMOpdml0ZSBxdSd1biAjIGFwcGFyYWlzc2UgZGFucyBsJ1VSTFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9