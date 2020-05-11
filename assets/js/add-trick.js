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