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
      addDeleteLinkPicture($(this));
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
      addDeleteLinkVideo($(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkY29udGFpbmVyUGljdHVyZSIsIiQiLCJpbmRleCIsImZpbmQiLCJsZW5ndGgiLCJjbGljayIsImUiLCJhZGRQaWN0dXJlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsImVhY2giLCJhZGREZWxldGVMaW5rUGljdHVyZSIsInRlbXBsYXRlIiwiYXR0ciIsInJlcGxhY2UiLCIkcHJvdG90eXBlIiwiYXBwZW5kIiwiJGRlbGV0ZUxpbmtQaWN0dXJlIiwicmVtb3ZlIiwiJGNvbnRhaW5lclZpZGVvIiwiYWRkVmlkZW8iLCJhZGREZWxldGVMaW5rVmlkZW8iLCIkZGVsZXRlTGlua1ZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVk7QUFFakM7QUFDQUMsbUJBQWlCLEdBQUdDLENBQUMsQ0FBQyxvQkFBRCxDQUFyQixDQUhpQyxDQUtqQzs7QUFDQSxNQUFJQyxLQUFLLEdBQUdGLGlCQUFpQixDQUFDRyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0MsTUFBNUMsQ0FOaUMsQ0FRakM7O0FBQ0FILEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLEtBQWxCLENBQXdCLFVBQVVDLENBQVYsRUFBYTtBQUNuQ0MsY0FBVSxDQUFDUCxpQkFBRCxDQUFWO0FBQ0FNLEtBQUMsQ0FBQ0UsY0FBRjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBSkQsRUFUaUMsQ0FlakM7O0FBQ0EsTUFBSU4sS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZEssY0FBVSxDQUFDUCxpQkFBRCxDQUFWO0FBQ0QsR0FGRCxNQUVPO0FBQ0w7QUFDQUEscUJBQWlCLENBQUNTLFFBQWxCLENBQTJCLEtBQTNCLEVBQWtDQyxJQUFsQyxDQUF1QyxZQUFZO0FBQ2pEQywwQkFB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Y3Rpb24gKCkge1xuXG4gIC8vIFJlY292ZXJ5IG9mIHRoZSA8ZGl2PlxuICAkY29udGFpbmVyUGljdHVyZSA9ICQoJ2RpdiN0cmlja19waWN0dXJlcycpO1xuXG4gIC8vIETDqWZpbml0aW9uIG9mIHRoZSBjb3VudGVyIHRvIG5hbWUgdGhlIGFkZGVkIGZpZWxzXG4gIHZhciBpbmRleCA9ICRjb250YWluZXJQaWN0dXJlLmZpbmQoJ2lucHV0JykubGVuZ3RoO1xuXG4gIC8vIE5lZWQgYSBuZXcgZmllbGQgdG8gZWFjaCBjbGljayBvbiB0aGUgYWRkIGxpbmtcbiAgJCgnI2FkZF9waWN0dXJlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBhZGRQaWN0dXJlKCRjb250YWluZXJQaWN0dXJlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICAvLyBBZGRpbmcgYSBmaXJzdCBmaWVscyBpZiB0aGVyZSBpcyBub3QgYWxyZWFkeSBvbmVcbiAgaWYgKGluZGV4ID09IDApIHtcbiAgICBhZGRQaWN0dXJlKCRjb250YWluZXJQaWN0dXJlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGRpbmcgYSBkZWxldGUgbGlua1xuICAgICRjb250YWluZXJQaWN0dXJlLmNoaWxkcmVuKCdkaXYnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZERlbGV0ZUxpbmtQaWN0dXJlKCQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVG8gQWRkIGEgUGljdHVyZVR5cGUgZm9ybVxuICBmdW5jdGlvbiBhZGRQaWN0dXJlKCRjb250YWluZXJQaWN0dXJlKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gJGNvbnRhaW5lclBpY3R1cmUuYXR0cignZGF0YS1wcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleClcbiAgICAgIDtcblxuICAgIC8vIENyZWF0aW9uIG9mIGFuIGpRdWVyeSBvYmplY3Qgd2ljaCBjb250YWlucyB0aGUgdGVtcGxhdGVcbiAgICAkcHJvdG90eXBlID0gJCh0ZW1wbGF0ZSk7XG5cbiAgICBhZGREZWxldGVMaW5rUGljdHVyZSgkcHJvdG90eXBlKTtcblxuICAgIC8vIEFkZGl0aW9uIG9mIHRoZSBwcm90b3R5cGUgYXQgdGhlIGVuZCBvZiB0aGUgPGRpdj5cbiAgICAkY29udGFpbmVyUGljdHVyZS5hcHBlbmQoJHByb3RvdHlwZSk7XG5cbiAgICAvLyBDb3VudGVyIGluY3JlbWVudFxuICAgIGluZGV4Kys7XG4gIH1cblxuICAvLyBUbyBhZGQgYSBkZWxldGUgbGlua1xuICBmdW5jdGlvbiBhZGREZWxldGVMaW5rUGljdHVyZSgkcHJvdG90eXBlKSB7XG4gICAgLy8gTGluayBjcmVhdGlvblxuICAgICRkZWxldGVMaW5rUGljdHVyZSA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWRlbGV0ZS1waWN0dXJlXCI+WDwvYnV0dG9uPicpO1xuXG4gICAgLy8gQWRkZWQgbGlua1xuICAgICRwcm90b3R5cGUuYXBwZW5kKCRkZWxldGVMaW5rUGljdHVyZSk7XG5cbiAgICAkZGVsZXRlTGlua1BpY3R1cmUuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICRwcm90b3R5cGUucmVtb3ZlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZWNvdmVyeSBvZiB0aGUgPGRpdj5cbiAgJGNvbnRhaW5lclZpZGVvID0gJCgnZGl2I3RyaWNrX3ZpZGVvcycpO1xuXG4gIC8vIETDqWZpbml0aW9uIG9mIHRoZSBjb3VudGVyIHRvIG5hbWUgdGhlIGFkZGVkIGZpZWxzXG4gIHZhciBpbmRleCA9ICRjb250YWluZXJWaWRlby5maW5kKCdpbnB1dCcpLmxlbmd0aDtcblxuICAvLyBOZWVkIGEgbmV3IGZpZWxkIHRvIGVhY2ggY2xpY2sgb24gdGhlIGFkZCBsaW5rXG4gICQoJyNhZGRfdmlkZW8nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGFkZFZpZGVvKCRjb250YWluZXJWaWRlbyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gQWRkaW5nIGEgZmlyc3QgZmllbHMgaWYgdGhlcmUgaXMgbm90IGFscmVhZHkgb25lXG4gIGlmIChpbmRleCA9PSAwKSB7XG4gICAgYWRkVmlkZW8oJGNvbnRhaW5lclZpZGVvKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGRpbmcgYSBkZWxldGUgbGlua1xuICAgICRjb250YWluZXJWaWRlby5jaGlsZHJlbignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBhZGREZWxldGVMaW5rVmlkZW8oJCh0aGlzKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUbyBBZGQgYSBWaWRlb1R5cGUgZm9ybVxuICBmdW5jdGlvbiBhZGRWaWRlbygkY29udGFpbmVyVmlkZW8pIHtcbiAgICB2YXIgdGVtcGxhdGUgPSAkY29udGFpbmVyVmlkZW8uYXR0cignZGF0YS1wcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleClcbiAgICAgIDtcblxuICAgIC8vIENyZWF0aW9uIG9mIGFuIGpRdWVyeSBvYmplY3Qgd2ljaCBjb250YWlucyB0aGUgdGVtcGxhdGVcbiAgICAkcHJvdG90eXBlID0gJCh0ZW1wbGF0ZSk7XG5cbiAgICBhZGREZWxldGVMaW5rVmlkZW8oJHByb3RvdHlwZSk7XG5cbiAgICAvLyBBZGRpdGlvbiBvZiB0aGUgcHJvdG90eXBlIGF0IHRoZSBlbmQgb2YgdGhlIDxkaXY+XG4gICAgJGNvbnRhaW5lclZpZGVvLmFwcGVuZCgkcHJvdG90eXBlKTtcblxuICAgIC8vIENvdW50ZXIgaW5jcmVtZW50XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIC8vIFRvIGFkZCBhIGRlbGV0ZSBsaW5rXG4gIGZ1bmN0aW9uIGFkZERlbGV0ZUxpbmtWaWRlbygkcHJvdG90eXBlKSB7XG4gICAgLy8gTGluayBjcmVhdGlvblxuICAgICRkZWxldGVMaW5rVmlkZW8gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1kZWxldGUtdmlkZW9cIj5YPC9idXR0b24+Jyk7XG5cbiAgICAvLyBBZGRlZCBsaW5rXG4gICAgJHByb3RvdHlwZS5hcHBlbmQoJGRlbGV0ZUxpbmtWaWRlbyk7XG5cbiAgICAkZGVsZXRlTGlua1ZpZGVvLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAkcHJvdG90eXBlLnJlbW92ZSgpO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=