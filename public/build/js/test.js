(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/test"],{

/***/ "./assets/js/test.js":
/*!***************************!*\
  !*** ./assets/js/test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

// On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
var containerPicture = document.getElementById('trick_pictures'); // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement

var index = 0;
document.querySelector('.btn-add-picture').addEventListener('click', function (event) {
  event.preventDefault();
  addPictureForm(containerPicture);
});

if (index == 0) {
  addPictureForm(containerPicture);
}

document.querySelector('button[data-action="delete"]').addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);
  this.parentNode.remove();
});

function addPictureForm(containerPicture) {
  var prototype = containerPicture.getAttribute('data-prototype');
  var template = prototype.replace(/__name__/g, index); // Addition of the prototype at the end of the <div>

  containerPicture.insertAdjacentHTML('beforeend', template);
  index++;
}

/***/ })

},[["./assets/js/test.js","runtime","vendors~js/test"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGVzdC5qcyJdLCJuYW1lcyI6WyJjb250YWluZXJQaWN0dXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluZGV4IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkUGljdHVyZUZvcm0iLCJjb25zb2xlIiwibG9nIiwicGFyZW50Tm9kZSIsInJlbW92ZSIsInByb3RvdHlwZSIsImdldEF0dHJpYnV0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImluc2VydEFkamFjZW50SFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFDO0FBRUQsSUFBSUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdkIsQyxDQUNFOztBQUVGLElBQUlDLEtBQUssR0FBRyxDQUFaO0FBRUFGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixrQkFBdkIsRUFBMkNDLGdCQUEzQyxDQUE0RCxPQUE1RCxFQUFxRSxVQUFTQyxLQUFULEVBQWdCO0FBQ2pGQSxPQUFLLENBQUNDLGNBQU47QUFDQUMsZ0JBQWMsQ0FBQ1IsZ0JBQUQsQ0FBZDtBQUVILENBSkQ7O0FBS0EsSUFBR0csS0FBSyxJQUFJLENBQVosRUFBZTtBQUNYSyxnQkFBYyxDQUFDUixnQkFBRCxDQUFkO0FBQ0g7O0FBRURDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qiw4QkFBdkIsRUFBdURDLGdCQUF2RCxDQUF3RSxPQUF4RSxFQUFpRixVQUFTQyxLQUFULEVBQWdCO0FBQzdGQSxPQUFLLENBQUNDLGNBQU47QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDRCxPQUFLSyxVQUFMLENBQWdCQyxNQUFoQjtBQUVGLENBTEQ7O0FBU0EsU0FBU0osY0FBVCxDQUF3QlIsZ0JBQXhCLEVBQTBDO0FBQ3RDLE1BQUlhLFNBQVMsR0FBR2IsZ0JBQWdCLENBQUNjLFlBQWpCLENBQThCLGdCQUE5QixDQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBR0YsU0FBUyxDQUFDRyxPQUFWLENBQWtCLFdBQWxCLEVBQStCYixLQUEvQixDQUFmLENBRnNDLENBR3RDOztBQUVBSCxrQkFBZ0IsQ0FBQ2lCLGtCQUFqQixDQUFvQyxXQUFwQyxFQUFpREYsUUFBakQ7QUFFQVosT0FBSztBQUdSLEMiLCJmaWxlIjoianMvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAvLyBPbiByw6ljdXDDqHJlIGxhIGJhbGlzZSA8ZGl2PiBlbiBxdWVzdGlvbiBxdWkgY29udGllbnQgbCdhdHRyaWJ1dCDCqyBkYXRhLXByb3RvdHlwZSDCuyBxdWkgbm91cyBpbnTDqXJlc3NlLlxuIFxudmFyIGNvbnRhaW5lclBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpY2tfcGljdHVyZXMnKVxuICAvLyBPbiBkw6lmaW5pdCB1biBjb21wdGV1ciB1bmlxdWUgcG91ciBub21tZXIgbGVzIGNoYW1wcyBxdSdvbiB2YSBham91dGVyIGR5bmFtaXF1ZW1lbnRcbiBcbnZhciBpbmRleCA9IDBcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hZGQtcGljdHVyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpICAgXG4gICAgYWRkUGljdHVyZUZvcm0oY29udGFpbmVyUGljdHVyZSkgIFxuICAgIFxufSlcbmlmKGluZGV4ID09IDApIHtcbiAgICBhZGRQaWN0dXJlRm9ybShjb250YWluZXJQaWN0dXJlKSAgXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWFjdGlvbj1cImRlbGV0ZVwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIFxuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpXG4gIFxufSlcbiAgIFxuXG5cbmZ1bmN0aW9uIGFkZFBpY3R1cmVGb3JtKGNvbnRhaW5lclBpY3R1cmUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gY29udGFpbmVyUGljdHVyZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdG90eXBlJylcbiAgICB2YXIgdGVtcGxhdGUgPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuICAgIC8vIEFkZGl0aW9uIG9mIHRoZSBwcm90b3R5cGUgYXQgdGhlIGVuZCBvZiB0aGUgPGRpdj5cbiAgICBcbiAgICBjb250YWluZXJQaWN0dXJlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpXG4gICBcbiAgICBpbmRleCArK1xuICAgIFxuICAgIFxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==