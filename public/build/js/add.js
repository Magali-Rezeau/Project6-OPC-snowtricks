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
  // Recovery of the <div>
  $containerPicture = $('div#trick_pictures'); // Définition of the counter to name the added fiels

  var index = $containerPicture.find('input').length; // Need a new field to each click on the add link

  $('#add_picture').click(function (e) {
    addPicture($containerPicture);
    e.preventDefault();
    return false;
  }); // Adding a first fiels if there is not already one

  if (index == 0) {
    addPicture($containerPicture);
  } else {
    // Adding a delete link
    $containerPicture.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // To Add a PictureType form


  function addPicture($containerPicture) {
    var template = $containerPicture.attr('data-prototype').replace(/__name__/g, index); // Creation of an jQuery object wich contains the template

    $prototype = $(template);
    addDeleteLinkPicture($prototype); // Addition of the prototype at the end of the <div>

    $containerPicture.append($prototype); // Counter increment

    index++;
  } // To add a delete link


  function addDeleteLinkPicture($prototype) {
    // Link creation
    $deleteLinkPicture = $('<button type="button" class="btn-delete-picture">X</button>'); // Added link

    $prototype.append($deleteLinkPicture);
    $deleteLinkPicture.click(function (e) {
      $prototype.remove();
      e.preventDefault();
      return false;
    });
  } // Recovery of the <div>


  $containerVideo = $('div#trick_videos'); // Définition of the counter to name the added fiels

  var index = $containerVideo.find('input').length; // Need a new field to each click on the add link

  $('#add_video').click(function (e) {
    addVideo($containerVideo);
    e.preventDefault();
    return false;
  }); // Adding a first fiels if there is not already one

  if (index == 0) {
    addVideo($containerVideo);
  } else {
    // Adding a delete link
    $containerVideo.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // To Add a VideoType form


  function addVideo($containerVideo) {
    var template = $containerVideo.attr('data-prototype').replace(/__name__/g, index); // Creation of an jQuery object wich contains the template

    $prototype = $(template);
    addDeleteLinkVideo($prototype); // Addition of the prototype at the end of the <div>

    $containerVideo.append($prototype); // Counter increment

    index++;
  } // To add a delete link


  function addDeleteLinkVideo($prototype) {
    // Link creation
    $deleteLinkVideo = $('<button type="button" class="btn-delete-video">X</button>'); // Added link

    $prototype.append($deleteLinkVideo);
    $deleteLinkVideo.click(function (e) {
      $prototype.remove();
      e.preventDefault();
      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/add-trick.js","runtime","vendors~js/add~js/app","vendors~js/add"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkY29udGFpbmVyUGljdHVyZSIsIiQiLCJpbmRleCIsImZpbmQiLCJsZW5ndGgiLCJjbGljayIsImUiLCJhZGRQaWN0dXJlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsImVhY2giLCJhZGREZWxldGVMaW5rIiwidGVtcGxhdGUiLCJhdHRyIiwicmVwbGFjZSIsIiRwcm90b3R5cGUiLCJhZGREZWxldGVMaW5rUGljdHVyZSIsImFwcGVuZCIsIiRkZWxldGVMaW5rUGljdHVyZSIsInJlbW92ZSIsIiRjb250YWluZXJWaWRlbyIsImFkZFZpZGVvIiwiYWRkRGVsZXRlTGlua1ZpZGVvIiwiJGRlbGV0ZUxpbmtWaWRlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFZO0FBRWpDO0FBQ0FDLG1CQUFpQixHQUFHQyxDQUFDLENBQUMsb0JBQUQsQ0FBckIsQ0FIaUMsQ0FLakM7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixpQkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NDLE1BQTVDLENBTmlDLENBUWpDOztBQUNBSCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSSxLQUFsQixDQUF3QixVQUFVQyxDQUFWLEVBQWE7QUFDbkNDLGNBQVUsQ0FBQ1AsaUJBQUQsQ0FBVjtBQUNBTSxLQUFDLENBQUNFLGNBQUY7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQUpELEVBVGlDLENBZWpDOztBQUNBLE1BQUlOLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2RLLGNBQVUsQ0FBQ1AsaUJBQUQsQ0FBVjtBQUNELEdBRkQsTUFFTztBQUNMO0FBQ0FBLHFCQUFpQixDQUFDUyxRQUFsQixDQUEyQixLQUEzQixFQUFrQ0MsSUFBbEMsQ0FBdUMsWUFBWTtBQUNqREMsbUJBQWEsQ0FBQ1YsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFiO0FBQ0QsS0FGRDtBQUdELEdBdkJnQyxDQXlCakM7OztBQUNBLFdBQVNNLFVBQVQsQ0FBb0JQLGlCQUFwQixFQUF1QztBQUNyQyxRQUFJWSxRQUFRLEdBQUdaLGlCQUFpQixDQUFDYSxJQUFsQixDQUF1QixnQkFBdkIsRUFBeUNDLE9BQXpDLENBQWlELFdBQWpELEVBQThEWixLQUE5RCxDQUFmLENBRHFDLENBSXJDOztBQUNBYSxjQUFVLEdBQUdkLENBQUMsQ0FBQ1csUUFBRCxDQUFkO0FBRUFJLHdCQUFvQixDQUFDRCxVQUFELENBQXBCLENBUHFDLENBU3JDOztBQUNBZixxQkFBaUIsQ0FBQ2lCLE1BQWxCLENBQXlCRixVQUF6QixFQVZxQyxDQVlyQzs7QUFDQWIsU0FBSztBQUNOLEdBeENnQyxDQTBDakM7OztBQUNBLFdBQVNjLG9CQUFULENBQThCRCxVQUE5QixFQUEwQztBQUN4QztBQUNBRyxzQkFBa0IsR0FBR2pCLENBQUMsQ0FBQyw2REFBRCxDQUF0QixDQUZ3QyxDQUl4Qzs7QUFDQWMsY0FBVSxDQUFDRSxNQUFYLENBQWtCQyxrQkFBbEI7QUFFQUEsc0JBQWtCLENBQUNiLEtBQW5CLENBQXlCLFVBQVVDLENBQVYsRUFBYTtBQUNwQ1MsZ0JBQVUsQ0FBQ0ksTUFBWDtBQUNBYixPQUFDLENBQUNFLGNBQUY7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUpEO0FBS0QsR0F2RGdDLENBeURqQzs7O0FBQ0FZLGlCQUFlLEdBQUduQixDQUFDLENBQUMsa0JBQUQsQ0FBbkIsQ0ExRGlDLENBNERqQzs7QUFDQSxNQUFJQyxLQUFLLEdBQUdrQixlQUFlLENBQUNqQixJQUFoQixDQUFxQixPQUFyQixFQUE4QkMsTUFBMUMsQ0E3RGlDLENBK0RqQzs7QUFDQUgsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkksS0FBaEIsQ0FBc0IsVUFBVUMsQ0FBVixFQUFhO0FBQ2pDZSxZQUFRLENBQUNELGVBQUQsQ0FBUjtBQUNBZCxLQUFDLENBQUNFLGNBQUY7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQUpELEVBaEVpQyxDQXNFakM7O0FBQ0EsTUFBSU4sS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZG1CLFlBQVEsQ0FBQ0QsZUFBRCxDQUFSO0FBQ0QsR0FGRCxNQUVPO0FBQ0w7QUFDQUEsbUJBQWUsQ0FBQ1gsUUFBaEIsQ0FBeUIsS0FBekIsRUFBZ0NDLElBQWhDLENBQXFDLFlBQVk7QUFDL0NDLG1CQUFhLENBQUNWLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQTlFZ0MsQ0FnRmpDOzs7QUFDQSxXQUFTb0IsUUFBVCxDQUFrQkQsZUFBbEIsRUFBbUM7QUFDakMsUUFBSVIsUUFBUSxHQUFHUSxlQUFlLENBQUNQLElBQWhCLENBQXFCLGdCQUFyQixFQUF1Q0MsT0FBdkMsQ0FBK0MsV0FBL0MsRUFBNERaLEtBQTVELENBQWYsQ0FEaUMsQ0FJakM7O0FBQ0FhLGNBQVUsR0FBR2QsQ0FBQyxDQUFDVyxRQUFELENBQWQ7QUFFQVUsc0JBQWtCLENBQUNQLFVBQUQsQ0FBbEIsQ0FQaUMsQ0FTakM7O0FBQ0FLLG1CQUFlLENBQUNILE1BQWhCLENBQXVCRixVQUF2QixFQVZpQyxDQVlqQzs7QUFDQWIsU0FBSztBQUNOLEdBL0ZnQyxDQWlHakM7OztBQUNBLFdBQVNvQixrQkFBVCxDQUE0QlAsVUFBNUIsRUFBd0M7QUFDdEM7QUFDQVEsb0JBQWdCLEdBQUd0QixDQUFDLENBQUMsMkRBQUQsQ0FBcEIsQ0FGc0MsQ0FJdEM7O0FBQ0FjLGNBQVUsQ0FBQ0UsTUFBWCxDQUFrQk0sZ0JBQWxCO0FBRUFBLG9CQUFnQixDQUFDbEIsS0FBakIsQ0FBdUIsVUFBVUMsQ0FBVixFQUFhO0FBQ2xDUyxnQkFBVSxDQUFDSSxNQUFYO0FBRUFiLE9BQUMsQ0FBQ0UsY0FBRjtBQUNBLGFBQU8sS0FBUDtBQUNELEtBTEQ7QUFNRDtBQUNGLENBaEhELEUiLCJmaWxlIjoianMvYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgLy8gUmVjb3Zlcnkgb2YgdGhlIDxkaXY+XG4gICRjb250YWluZXJQaWN0dXJlID0gJCgnZGl2I3RyaWNrX3BpY3R1cmVzJyk7XG5cbiAgLy8gRMOpZmluaXRpb24gb2YgdGhlIGNvdW50ZXIgdG8gbmFtZSB0aGUgYWRkZWQgZmllbHNcbiAgdmFyIGluZGV4ID0gJGNvbnRhaW5lclBpY3R1cmUuZmluZCgnaW5wdXQnKS5sZW5ndGg7XG5cbiAgLy8gTmVlZCBhIG5ldyBmaWVsZCB0byBlYWNoIGNsaWNrIG9uIHRoZSBhZGQgbGlua1xuICAkKCcjYWRkX3BpY3R1cmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGFkZFBpY3R1cmUoJGNvbnRhaW5lclBpY3R1cmUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIEFkZGluZyBhIGZpcnN0IGZpZWxzIGlmIHRoZXJlIGlzIG5vdCBhbHJlYWR5IG9uZVxuICBpZiAoaW5kZXggPT0gMCkge1xuICAgIGFkZFBpY3R1cmUoJGNvbnRhaW5lclBpY3R1cmUpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFkZGluZyBhIGRlbGV0ZSBsaW5rXG4gICAgJGNvbnRhaW5lclBpY3R1cmUuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgYWRkRGVsZXRlTGluaygkKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRvIEFkZCBhIFBpY3R1cmVUeXBlIGZvcm1cbiAgZnVuY3Rpb24gYWRkUGljdHVyZSgkY29udGFpbmVyUGljdHVyZSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9ICRjb250YWluZXJQaWN0dXJlLmF0dHIoJ2RhdGEtcHJvdG90eXBlJykucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpXG4gICAgICA7XG5cbiAgICAvLyBDcmVhdGlvbiBvZiBhbiBqUXVlcnkgb2JqZWN0IHdpY2ggY29udGFpbnMgdGhlIHRlbXBsYXRlXG4gICAgJHByb3RvdHlwZSA9ICQodGVtcGxhdGUpO1xuXG4gICAgYWRkRGVsZXRlTGlua1BpY3R1cmUoJHByb3RvdHlwZSk7XG5cbiAgICAvLyBBZGRpdGlvbiBvZiB0aGUgcHJvdG90eXBlIGF0IHRoZSBlbmQgb2YgdGhlIDxkaXY+XG4gICAgJGNvbnRhaW5lclBpY3R1cmUuYXBwZW5kKCRwcm90b3R5cGUpO1xuXG4gICAgLy8gQ291bnRlciBpbmNyZW1lbnRcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgLy8gVG8gYWRkIGEgZGVsZXRlIGxpbmtcbiAgZnVuY3Rpb24gYWRkRGVsZXRlTGlua1BpY3R1cmUoJHByb3RvdHlwZSkge1xuICAgIC8vIExpbmsgY3JlYXRpb25cbiAgICAkZGVsZXRlTGlua1BpY3R1cmUgPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1kZWxldGUtcGljdHVyZVwiPlg8L2J1dHRvbj4nKTtcblxuICAgIC8vIEFkZGVkIGxpbmtcbiAgICAkcHJvdG90eXBlLmFwcGVuZCgkZGVsZXRlTGlua1BpY3R1cmUpO1xuXG4gICAgJGRlbGV0ZUxpbmtQaWN0dXJlLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAkcHJvdG90eXBlLnJlbW92ZSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVjb3Zlcnkgb2YgdGhlIDxkaXY+XG4gICRjb250YWluZXJWaWRlbyA9ICQoJ2RpdiN0cmlja192aWRlb3MnKTtcblxuICAvLyBEw6lmaW5pdGlvbiBvZiB0aGUgY291bnRlciB0byBuYW1lIHRoZSBhZGRlZCBmaWVsc1xuICB2YXIgaW5kZXggPSAkY29udGFpbmVyVmlkZW8uZmluZCgnaW5wdXQnKS5sZW5ndGg7XG5cbiAgLy8gTmVlZCBhIG5ldyBmaWVsZCB0byBlYWNoIGNsaWNrIG9uIHRoZSBhZGQgbGlua1xuICAkKCcjYWRkX3ZpZGVvJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBhZGRWaWRlbygkY29udGFpbmVyVmlkZW8pO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIEFkZGluZyBhIGZpcnN0IGZpZWxzIGlmIHRoZXJlIGlzIG5vdCBhbHJlYWR5IG9uZVxuICBpZiAoaW5kZXggPT0gMCkge1xuICAgIGFkZFZpZGVvKCRjb250YWluZXJWaWRlbyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkaW5nIGEgZGVsZXRlIGxpbmtcbiAgICAkY29udGFpbmVyVmlkZW8uY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgYWRkRGVsZXRlTGluaygkKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRvIEFkZCBhIFZpZGVvVHlwZSBmb3JtXG4gIGZ1bmN0aW9uIGFkZFZpZGVvKCRjb250YWluZXJWaWRlbykge1xuICAgIHZhciB0ZW1wbGF0ZSA9ICRjb250YWluZXJWaWRlby5hdHRyKCdkYXRhLXByb3RvdHlwZScpLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KVxuICAgICAgO1xuXG4gICAgLy8gQ3JlYXRpb24gb2YgYW4galF1ZXJ5IG9iamVjdCB3aWNoIGNvbnRhaW5zIHRoZSB0ZW1wbGF0ZVxuICAgICRwcm90b3R5cGUgPSAkKHRlbXBsYXRlKTtcblxuICAgIGFkZERlbGV0ZUxpbmtWaWRlbygkcHJvdG90eXBlKTtcblxuICAgIC8vIEFkZGl0aW9uIG9mIHRoZSBwcm90b3R5cGUgYXQgdGhlIGVuZCBvZiB0aGUgPGRpdj5cbiAgICAkY29udGFpbmVyVmlkZW8uYXBwZW5kKCRwcm90b3R5cGUpO1xuXG4gICAgLy8gQ291bnRlciBpbmNyZW1lbnRcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgLy8gVG8gYWRkIGEgZGVsZXRlIGxpbmtcbiAgZnVuY3Rpb24gYWRkRGVsZXRlTGlua1ZpZGVvKCRwcm90b3R5cGUpIHtcbiAgICAvLyBMaW5rIGNyZWF0aW9uXG4gICAgJGRlbGV0ZUxpbmtWaWRlbyA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWRlbGV0ZS12aWRlb1wiPlg8L2J1dHRvbj4nKTtcblxuICAgIC8vIEFkZGVkIGxpbmtcbiAgICAkcHJvdG90eXBlLmFwcGVuZCgkZGVsZXRlTGlua1ZpZGVvKTtcblxuICAgICRkZWxldGVMaW5rVmlkZW8uY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICRwcm90b3R5cGUucmVtb3ZlKCk7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==