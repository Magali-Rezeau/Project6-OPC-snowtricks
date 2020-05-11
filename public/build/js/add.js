(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/add"],{

/***/ "./assets/js/add-trick.js":
/*!********************************!*\
  !*** ./assets/js/add-trick.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jQuery(document).ready(function () {

  // Recovery of the <div>
  $containerPicture = $('div#trick_pictures');

  // Définition of the counter to name the added fiels
  var index = $containerPicture.find('input').length;
  
  // Need a new field to each click on the add link
  $('#add_picture').click(function (e) {
    addPicture($containerPicture);
    e.preventDefault();
    return false;
  });

  // Adding a first fiels if there is not already one
  if (index == 0) {
   
    addPicture($containerPicture);
    
  } else {
    // Adding a delete link
    $containerPicture.children('div').each(function () {
      addDeleteLinkPicture($(this));
    });
  }

  // To Add a PictureType form
  function addPicture($containerPicture) {
    var template = $containerPicture.attr('data-prototype').replace(/__name__/g, index)
      ;

    // Creation of an jQuery object wich contains the template
    $prototype = $(template);

    addDeleteLinkPicture($prototype);

    // Addition of the prototype at the end of the <div>
    $containerPicture.append($prototype);

    // Counter increment
    index++;
  }

  // To add a delete link
  function addDeleteLinkPicture($prototype) {
    // Link creation
    $deleteLinkPicture = $('<button type="button" class="btn-delete-picture">X</button>');

    // Added link
    $prototype.append($deleteLinkPicture);

    $deleteLinkPicture.click(function (e) {
      $prototype.remove();
      e.preventDefault();
      return false;
    });
  }

  // Recovery of the <div>
  $containerVideo = $('div#trick_videos');

  // Définition of the counter to name the added fiels
  var index = $containerVideo.find('input').length;

  // Need a new field to each click on the add link
  $('#add_video').click(function (e) {
    addVideo($containerVideo);
    e.preventDefault();
    return false;
  });

  // Adding a first fiels if there is not already one
  if (index == 0) {
    addVideo($containerVideo);
  } else {
    // Adding a delete link
    $containerVideo.children('div').each(function () {
      addDeleteLinkVideo($(this));
    });
  }

  // To Add a VideoType form
  function addVideo($containerVideo) {
    var template = $containerVideo.attr('data-prototype').replace(/__name__/g, index)
      ;

    // Creation of an jQuery object wich contains the template
    $prototype = $(template);

    addDeleteLinkVideo($prototype);

    // Addition of the prototype at the end of the <div>
    $containerVideo.append($prototype);

    // Counter increment
    index++;
  }

  // To add a delete link
  function addDeleteLinkVideo($prototype) {
    // Link creation
    $deleteLinkVideo = $('<button type="button" class="btn-delete-video">X</button>');

    // Added link
    $prototype.append($deleteLinkVideo);

    $deleteLinkVideo.click(function (e) {
      $prototype.remove();

      e.preventDefault();
      return false;
    });
  }

 
});
/*{# src/OC/PlatformBundle/Resources/views/Advert/form.html.twig #}

{# Le formulaire reste globalement le même,
   On ne rajoute que le champ catégorie et le lien pour en ajouter #}
<div class="well">
  {# ... #}
  
  {{ form_row(form.categories) }}
  <a href="#" id="add_category" class="btn btn-default">Ajouter une catégorie</a>
  
  {# ... #}
</div>

{# On charge la bibliothèque jQuery. Ici, je la prends depuis le CDN google
   mais si vous l'avez en local, changez simplement l'adresse. #}
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

{# Voici le script en question : #}
<script type="text/javascript">
  $(document).ready(function() {
    // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
    var $container = $('div#oc_platformbundle_advert_categories');

    // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
    var index = $container.find(':input').length;

    // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.
    $('#add_category').click(function(e) {
      addCategory($container);

      e.preventDefault(); // évite qu'un # apparaisse dans l'URL
      return false;
    });

    // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).
    if (index == 0) {
      addCategory($container);
    } else {
      // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
      $container.children('div').each(function() {
        addDeleteLink($(this));
      });
    }

    // La fonction qui ajoute un formulaire CategoryType
    function addCategory($container) {
      // Dans le contenu de l'attribut « data-prototype », on remplace :
      // - le texte "__name__label__" qu'il contient par le label du champ
      // - le texte "__name__" qu'il contient par le numéro du champ
      var template = $container.attr('data-prototype')
        .replace(/__name__label__/g, 'Catégorie n°' + (index+1))
        .replace(/__name__/g,        index)
      ;

      // On crée un objet jquery qui contient ce template
      var $prototype = $(template);

      // On ajoute au prototype un lien pour pouvoir supprimer la catégorie
      addDeleteLink($prototype);

      // On ajoute le prototype modifié à la fin de la balise <div>
      $container.append($prototype);

      // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro
      index++;
    }

    // La fonction qui ajoute un lien de suppression d'une catégorie
    function addDeleteLink($prototype) {
      // Création du lien
      var $deleteLink = $('<a href="#" class="btn btn-danger">Supprimer</a>');

      // Ajout du lien
      $prototype.append($deleteLink);

      // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie
      $deleteLink.click(function(e) {
        $prototype.remove();

        e.preventDefault(); // évite qu'un # apparaisse dans l'URL
        return false;
      });
    }
  });
</script>*/

/***/ })

},[["./assets/js/add-trick.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6ImpzL2FkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgLy8gUmVjb3Zlcnkgb2YgdGhlIDxkaXY+XG4gICRjb250YWluZXJQaWN0dXJlID0gJCgnZGl2I3RyaWNrX3BpY3R1cmVzJyk7XG5cbiAgLy8gRMOpZmluaXRpb24gb2YgdGhlIGNvdW50ZXIgdG8gbmFtZSB0aGUgYWRkZWQgZmllbHNcbiAgdmFyIGluZGV4ID0gJGNvbnRhaW5lclBpY3R1cmUuZmluZCgnaW5wdXQnKS5sZW5ndGg7XG4gIFxuICAvLyBOZWVkIGEgbmV3IGZpZWxkIHRvIGVhY2ggY2xpY2sgb24gdGhlIGFkZCBsaW5rXG4gICQoJyNhZGRfcGljdHVyZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgYWRkUGljdHVyZSgkY29udGFpbmVyUGljdHVyZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gQWRkaW5nIGEgZmlyc3QgZmllbHMgaWYgdGhlcmUgaXMgbm90IGFscmVhZHkgb25lXG4gIGlmIChpbmRleCA9PSAwKSB7XG4gICBcbiAgICBhZGRQaWN0dXJlKCRjb250YWluZXJQaWN0dXJlKTtcbiAgICBcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGRpbmcgYSBkZWxldGUgbGlua1xuICAgICRjb250YWluZXJQaWN0dXJlLmNoaWxkcmVuKCdkaXYnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZERlbGV0ZUxpbmtQaWN0dXJlKCQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVG8gQWRkIGEgUGljdHVyZVR5cGUgZm9ybVxuICBmdW5jdGlvbiBhZGRQaWN0dXJlKCRjb250YWluZXJQaWN0dXJlKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gJGNvbnRhaW5lclBpY3R1cmUuYXR0cignZGF0YS1wcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleClcbiAgICAgIDtcblxuICAgIC8vIENyZWF0aW9uIG9mIGFuIGpRdWVyeSBvYmplY3Qgd2ljaCBjb250YWlucyB0aGUgdGVtcGxhdGVcbiAgICAkcHJvdG90eXBlID0gJCh0ZW1wbGF0ZSk7XG5cbiAgICBhZGREZWxldGVMaW5rUGljdHVyZSgkcHJvdG90eXBlKTtcblxuICAgIC8vIEFkZGl0aW9uIG9mIHRoZSBwcm90b3R5cGUgYXQgdGhlIGVuZCBvZiB0aGUgPGRpdj5cbiAgICAkY29udGFpbmVyUGljdHVyZS5hcHBlbmQoJHByb3RvdHlwZSk7XG5cbiAgICAvLyBDb3VudGVyIGluY3JlbWVudFxuICAgIGluZGV4Kys7XG4gIH1cblxuICAvLyBUbyBhZGQgYSBkZWxldGUgbGlua1xuICBmdW5jdGlvbiBhZGREZWxldGVMaW5rUGljdHVyZSgkcHJvdG90eXBlKSB7XG4gICAgLy8gTGluayBjcmVhdGlvblxuICAgICRkZWxldGVMaW5rUGljdHVyZSA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWRlbGV0ZS1waWN0dXJlXCI+WDwvYnV0dG9uPicpO1xuXG4gICAgLy8gQWRkZWQgbGlua1xuICAgICRwcm90b3R5cGUuYXBwZW5kKCRkZWxldGVMaW5rUGljdHVyZSk7XG5cbiAgICAkZGVsZXRlTGlua1BpY3R1cmUuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICRwcm90b3R5cGUucmVtb3ZlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZWNvdmVyeSBvZiB0aGUgPGRpdj5cbiAgJGNvbnRhaW5lclZpZGVvID0gJCgnZGl2I3RyaWNrX3ZpZGVvcycpO1xuXG4gIC8vIETDqWZpbml0aW9uIG9mIHRoZSBjb3VudGVyIHRvIG5hbWUgdGhlIGFkZGVkIGZpZWxzXG4gIHZhciBpbmRleCA9ICRjb250YWluZXJWaWRlby5maW5kKCdpbnB1dCcpLmxlbmd0aDtcblxuICAvLyBOZWVkIGEgbmV3IGZpZWxkIHRvIGVhY2ggY2xpY2sgb24gdGhlIGFkZCBsaW5rXG4gICQoJyNhZGRfdmlkZW8nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGFkZFZpZGVvKCRjb250YWluZXJWaWRlbyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gQWRkaW5nIGEgZmlyc3QgZmllbHMgaWYgdGhlcmUgaXMgbm90IGFscmVhZHkgb25lXG4gIGlmIChpbmRleCA9PSAwKSB7XG4gICAgYWRkVmlkZW8oJGNvbnRhaW5lclZpZGVvKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGRpbmcgYSBkZWxldGUgbGlua1xuICAgICRjb250YWluZXJWaWRlby5jaGlsZHJlbignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBhZGREZWxldGVMaW5rVmlkZW8oJCh0aGlzKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUbyBBZGQgYSBWaWRlb1R5cGUgZm9ybVxuICBmdW5jdGlvbiBhZGRWaWRlbygkY29udGFpbmVyVmlkZW8pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSAkY29udGFpbmVyVmlkZW8uYXR0cignZGF0YS1wcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleClcbiAgICAgIDtcblxuICAgIC8vIENyZWF0aW9uIG9mIGFuIGpRdWVyeSBvYmplY3Qgd2ljaCBjb250YWlucyB0aGUgdGVtcGxhdGVcbiAgICAkcHJvdG90eXBlID0gJCh0ZW1wbGF0ZSk7XG5cbiAgICBhZGREZWxldGVMaW5rVmlkZW8oJHByb3RvdHlwZSk7XG5cbiAgICAvLyBBZGRpdGlvbiBvZiB0aGUgcHJvdG90eXBlIGF0IHRoZSBlbmQgb2YgdGhlIDxkaXY+XG4gICAgJGNvbnRhaW5lclZpZGVvLmFwcGVuZCgkcHJvdG90eXBlKTtcblxuICAgIC8vIENvdW50ZXIgaW5jcmVtZW50XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIC8vIFRvIGFkZCBhIGRlbGV0ZSBsaW5rXG4gIGZ1bmN0aW9uIGFkZERlbGV0ZUxpbmtWaWRlbygkcHJvdG90eXBlKSB7XG4gICAgLy8gTGluayBjcmVhdGlvblxuICAgICRkZWxldGVMaW5rVmlkZW8gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1kZWxldGUtdmlkZW9cIj5YPC9idXR0b24+Jyk7XG5cbiAgICAvLyBBZGRlZCBsaW5rXG4gICAgJHByb3RvdHlwZS5hcHBlbmQoJGRlbGV0ZUxpbmtWaWRlbyk7XG5cbiAgICAkZGVsZXRlTGlua1ZpZGVvLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAkcHJvdG90eXBlLnJlbW92ZSgpO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuIFxufSk7XG4vKnsjIHNyYy9PQy9QbGF0Zm9ybUJ1bmRsZS9SZXNvdXJjZXMvdmlld3MvQWR2ZXJ0L2Zvcm0uaHRtbC50d2lnICN9XG5cbnsjIExlIGZvcm11bGFpcmUgcmVzdGUgZ2xvYmFsZW1lbnQgbGUgbcOqbWUsXG4gICBPbiBuZSByYWpvdXRlIHF1ZSBsZSBjaGFtcCBjYXTDqWdvcmllIGV0IGxlIGxpZW4gcG91ciBlbiBham91dGVyICN9XG48ZGl2IGNsYXNzPVwid2VsbFwiPlxuICB7IyAuLi4gI31cbiAgXG4gIHt7IGZvcm1fcm93KGZvcm0uY2F0ZWdvcmllcykgfX1cbiAgPGEgaHJlZj1cIiNcIiBpZD1cImFkZF9jYXRlZ29yeVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+QWpvdXRlciB1bmUgY2F0w6lnb3JpZTwvYT5cbiAgXG4gIHsjIC4uLiAjfVxuPC9kaXY+XG5cbnsjIE9uIGNoYXJnZSBsYSBiaWJsaW90aMOocXVlIGpRdWVyeS4gSWNpLCBqZSBsYSBwcmVuZHMgZGVwdWlzIGxlIENETiBnb29nbGVcbiAgIG1haXMgc2kgdm91cyBsJ2F2ZXogZW4gbG9jYWwsIGNoYW5nZXogc2ltcGxlbWVudCBsJ2FkcmVzc2UuICN9XG48c2NyaXB0IHNyYz1cIi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTEuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG5cbnsjIFZvaWNpIGxlIHNjcmlwdCBlbiBxdWVzdGlvbiA6ICN9XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gT24gcsOpY3Vww6hyZSBsYSBiYWxpc2UgPGRpdj4gZW4gcXVlc3Rpb24gcXVpIGNvbnRpZW50IGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrsgcXVpIG5vdXMgaW50w6lyZXNzZS5cbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJ2RpdiNvY19wbGF0Zm9ybWJ1bmRsZV9hZHZlcnRfY2F0ZWdvcmllcycpO1xuXG4gICAgLy8gT24gZMOpZmluaXQgdW4gY29tcHRldXIgdW5pcXVlIHBvdXIgbm9tbWVyIGxlcyBjaGFtcHMgcXUnb24gdmEgYWpvdXRlciBkeW5hbWlxdWVtZW50XG4gICAgdmFyIGluZGV4ID0gJGNvbnRhaW5lci5maW5kKCc6aW5wdXQnKS5sZW5ndGg7XG5cbiAgICAvLyBPbiBham91dGUgdW4gbm91dmVhdSBjaGFtcCDDoCBjaGFxdWUgY2xpYyBzdXIgbGUgbGllbiBkJ2Fqb3V0LlxuICAgICQoJyNhZGRfY2F0ZWdvcnknKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICBhZGRDYXRlZ29yeSgkY29udGFpbmVyKTtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDDqXZpdGUgcXUndW4gIyBhcHBhcmFpc3NlIGRhbnMgbCdVUkxcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGFqb3V0ZSB1biBwcmVtaWVyIGNoYW1wIGF1dG9tYXRpcXVlbWVudCBzJ2lsIG4nZW4gZXhpc3RlIHBhcyBkw6lqw6AgdW4gKGNhcyBkJ3VuZSBub3V2ZWxsZSBhbm5vbmNlIHBhciBleGVtcGxlKS5cbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgYWRkQ2F0ZWdvcnkoJGNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFMnaWwgZXhpc3RlIGTDqWrDoCBkZXMgY2F0w6lnb3JpZXMsIG9uIGFqb3V0ZSB1biBsaWVuIGRlIHN1cHByZXNzaW9uIHBvdXIgY2hhY3VuZSBkJ2VudHJlIGVsbGVzXG4gICAgICAkY29udGFpbmVyLmNoaWxkcmVuKCdkaXYnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGREZWxldGVMaW5rKCQodGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTGEgZm9uY3Rpb24gcXVpIGFqb3V0ZSB1biBmb3JtdWxhaXJlIENhdGVnb3J5VHlwZVxuICAgIGZ1bmN0aW9uIGFkZENhdGVnb3J5KCRjb250YWluZXIpIHtcbiAgICAgIC8vIERhbnMgbGUgY29udGVudSBkZSBsJ2F0dHJpYnV0IMKrIGRhdGEtcHJvdG90eXBlIMK7LCBvbiByZW1wbGFjZSA6XG4gICAgICAvLyAtIGxlIHRleHRlIFwiX19uYW1lX19sYWJlbF9fXCIgcXUnaWwgY29udGllbnQgcGFyIGxlIGxhYmVsIGR1IGNoYW1wXG4gICAgICAvLyAtIGxlIHRleHRlIFwiX19uYW1lX19cIiBxdSdpbCBjb250aWVudCBwYXIgbGUgbnVtw6lybyBkdSBjaGFtcFxuICAgICAgdmFyIHRlbXBsYXRlID0gJGNvbnRhaW5lci5hdHRyKCdkYXRhLXByb3RvdHlwZScpXG4gICAgICAgIC5yZXBsYWNlKC9fX25hbWVfX2xhYmVsX18vZywgJ0NhdMOpZ29yaWUgbsKwJyArIChpbmRleCsxKSlcbiAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2csICAgICAgICBpbmRleClcbiAgICAgIDtcblxuICAgICAgLy8gT24gY3LDqWUgdW4gb2JqZXQganF1ZXJ5IHF1aSBjb250aWVudCBjZSB0ZW1wbGF0ZVxuICAgICAgdmFyICRwcm90b3R5cGUgPSAkKHRlbXBsYXRlKTtcblxuICAgICAgLy8gT24gYWpvdXRlIGF1IHByb3RvdHlwZSB1biBsaWVuIHBvdXIgcG91dm9pciBzdXBwcmltZXIgbGEgY2F0w6lnb3JpZVxuICAgICAgYWRkRGVsZXRlTGluaygkcHJvdG90eXBlKTtcblxuICAgICAgLy8gT24gYWpvdXRlIGxlIHByb3RvdHlwZSBtb2RpZmnDqSDDoCBsYSBmaW4gZGUgbGEgYmFsaXNlIDxkaXY+XG4gICAgICAkY29udGFpbmVyLmFwcGVuZCgkcHJvdG90eXBlKTtcblxuICAgICAgLy8gRW5maW4sIG9uIGluY3LDqW1lbnRlIGxlIGNvbXB0ZXVyIHBvdXIgcXVlIGxlIHByb2NoYWluIGFqb3V0IHNlIGZhc3NlIGF2ZWMgdW4gYXV0cmUgbnVtw6lyb1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICAvLyBMYSBmb25jdGlvbiBxdWkgYWpvdXRlIHVuIGxpZW4gZGUgc3VwcHJlc3Npb24gZCd1bmUgY2F0w6lnb3JpZVxuICAgIGZ1bmN0aW9uIGFkZERlbGV0ZUxpbmsoJHByb3RvdHlwZSkge1xuICAgICAgLy8gQ3LDqWF0aW9uIGR1IGxpZW5cbiAgICAgIHZhciAkZGVsZXRlTGluayA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlN1cHByaW1lcjwvYT4nKTtcblxuICAgICAgLy8gQWpvdXQgZHUgbGllblxuICAgICAgJHByb3RvdHlwZS5hcHBlbmQoJGRlbGV0ZUxpbmspO1xuXG4gICAgICAvLyBBam91dCBkdSBsaXN0ZW5lciBzdXIgbGUgY2xpYyBkdSBsaWVuIHBvdXIgZWZmZWN0aXZlbWVudCBzdXBwcmltZXIgbGEgY2F0w6lnb3JpZVxuICAgICAgJGRlbGV0ZUxpbmsuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkcHJvdG90eXBlLnJlbW92ZSgpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD4qLyJdLCJzb3VyY2VSb290IjoiIn0=