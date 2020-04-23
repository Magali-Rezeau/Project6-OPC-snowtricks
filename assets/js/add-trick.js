jQuery(document).ready(function() {
   
    // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
    $containerPicture = $('div#trick_pictures');
    console.log($containerPicture);
    // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
    var index = $containerPicture.find('input').length;

    // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.
    $('#add_picture').click(function(e) {
      addPicture($containerPicture);

      e.preventDefault(); // évite qu'un # apparaisse dans l'URL
      return false;
    });

    // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).
    if (index == 0) {
      addPicture($containerPicture);
    } else {
      // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
      $containerPicture.children('div').each(function() {
        addDeleteLink($(this));
      });
    }

    // La fonction qui ajoute un formulaire CategoryType
    function addPicture($containerPicture) {
      // Dans le contenu de l'attribut « data-prototype », on remplace :
      // - le texte "__name__label__" qu'il contient par le label du champ
      // - le texte "__name__" qu'il contient par le numéro du champ
      var template = $containerPicture.attr('data-prototype').replace(/__name__/g,        index)
      ;

      // On crée un objet jquery qui contient ce template
      $prototype = $(template);

      // On ajoute au prototype un lien pour pouvoir supprimer la catégorie
      addDeleteLinkPicture($prototype);

      // On ajoute le prototype modifié à la fin de la balise <div>
      $containerPicture.append($prototype);

      // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro
      index++;
    }

    // La fonction qui ajoute un lien de suppression d'une catégorie
    function addDeleteLinkPicture($prototype) {
      // Création du lien
      $deleteLinkPicture = $('<button type="button" class="btn-delete-picture">X</button>');

      // Ajout du lien
      $prototype.append($deleteLinkPicture);

      // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie
      $deleteLinkPicture.click(function(e) {
        $prototype.remove();

        e.preventDefault(); // évite qu'un # apparaisse dans l'URL
        return false;
      });
    }



    // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
    $containerVideo = $('div#trick_videos');
    console.log($containerVideo);
    // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
    var index = $containerVideo.find('input').length;

    // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.
    $('#add_video').click(function(e) {
      addVideo($containerVideo);

      e.preventDefault(); // évite qu'un # apparaisse dans l'URL
      return false;
    });

    // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).
    if (index == 0) {
      addVideo($containerVideo);
    } else {
      // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
      $containerVideo.children('div').each(function() {
        addDeleteLink($(this));
      });
    }

    // La fonction qui ajoute un formulaire CategoryType
    function addVideo($containerVideo) {
      // Dans le contenu de l'attribut « data-prototype », on remplace :
      // - le texte "__name__label__" qu'il contient par le label du champ
      // - le texte "__name__" qu'il contient par le numéro du champ
      var template = $containerVideo.attr('data-prototype').replace(/__name__/g,        index)
      ;

      // On crée un objet jquery qui contient ce template
      $prototype = $(template);

      // On ajoute au prototype un lien pour pouvoir supprimer la catégorie
      addDeleteLinkVideo($prototype);

      // On ajoute le prototype modifié à la fin de la balise <div>
      $containerVideo.append($prototype);

      // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro
      index++;
    }

    // La fonction qui ajoute un lien de suppression d'une catégorie
    function addDeleteLinkVideo($prototype) {
      // Création du lien
      $deleteLinkVideo = $('<button type="button" class="btn-delete-video">X</button>');

      // Ajout du lien
      $prototype.append($deleteLinkVideo);

      // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie
      $deleteLinkVideo.click(function(e) {
        $prototype.remove();

        e.preventDefault(); // évite qu'un # apparaisse dans l'URL
        return false;
      });
    }
});