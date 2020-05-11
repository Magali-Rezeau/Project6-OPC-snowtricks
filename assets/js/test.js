 // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
 
var containerPicture = document.getElementById('trick_pictures')
  // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
 
var index = 0

document.querySelector('.btn-add-picture').addEventListener('click', function(event) {
    event.preventDefault()   
    addPictureForm(containerPicture)  
    
})
if(index == 0) {
    addPictureForm(containerPicture)  
}

document.querySelector('button[data-action="delete"]').addEventListener('click', function(event) {
    event.preventDefault() 
    console.log(event)
    this.parentNode.remove()
  
})
   


function addPictureForm(containerPicture) {
    var prototype = containerPicture.getAttribute('data-prototype')
    var template = prototype.replace(/__name__/g, index);
    // Addition of the prototype at the end of the <div>
    
    containerPicture.insertAdjacentHTML('beforeend', template)
   
    index ++
   
}



