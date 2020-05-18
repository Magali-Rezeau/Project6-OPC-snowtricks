(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/add-trick"],{

/***/ "./assets/js/add-trick.js":
/*!********************************!*\
  !*** ./assets/js/add-trick.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

(function () {
  var containerPicture = document.getElementById('trick_pictures');
  var containerVideo = document.getElementById('trick_videos');
  var indexPicture = containerPicture.querySelectorAll('.add-trick-form-row').length;
  var indexVideo = containerVideo.querySelectorAll('.add-trick-form-row').length;

  if (indexPicture == 0) {
    addPictureForm(containerPicture);
  }

  if (indexVideo == 0) {
    addVideoForm(containerVideo);
  }

  document.querySelector('.btn-add-picture').addEventListener('click', function (event) {
    event.preventDefault();
    addPictureForm(containerPicture);
  });
  document.querySelector('.btn-add-video').addEventListener('click', function (event) {
    event.preventDefault();
    addVideoForm(containerVideo);
  });

  function addRemoveBtn() {
    document.querySelectorAll('button.btn-delete-picture.fas.fa-trash-alt').forEach(function (element) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        this.parentNode.remove();
      });
    });
    document.querySelectorAll('button.btn-delete-video.fas.fa-trash-alt').forEach(function (element) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        this.parentNode.remove();
      });
    });
  }

  function addPictureForm(containerPicture) {
    var prototypePicture = containerPicture.getAttribute('data-prototype');
    var templatePicture = prototypePicture.replace(/__name__/g, indexPicture);
    containerPicture.insertAdjacentHTML('beforeend', templatePicture);
    indexPicture++;
    addRemoveBtn();
  }

  function addVideoForm(containerVideo) {
    var prototypeVideo = containerVideo.getAttribute('data-prototype');
    var templateVideo = prototypeVideo.replace(/__name__/g, indexVideo);
    containerVideo.insertAdjacentHTML('beforeend', templateVideo);
    indexVideo++;
    addRemoveBtn();
  }
})();

/***/ })

},[["./assets/js/add-trick.js","runtime","vendors~js/add-trick~js/edit-trick"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbImNvbnRhaW5lclBpY3R1cmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyVmlkZW8iLCJpbmRleFBpY3R1cmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaW5kZXhWaWRlbyIsImFkZFBpY3R1cmVGb3JtIiwiYWRkVmlkZW9Gb3JtIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkUmVtb3ZlQnRuIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwicHJvdG90eXBlUGljdHVyZSIsImdldEF0dHJpYnV0ZSIsInRlbXBsYXRlUGljdHVyZSIsInJlcGxhY2UiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwcm90b3R5cGVWaWRlbyIsInRlbXBsYXRlVmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFZO0FBQ1QsTUFBTUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUF2QjtBQUVBLE1BQUlFLFlBQVksR0FBR0osZ0JBQWdCLENBQUNLLGdCQUFqQixDQUFrQyxxQkFBbEMsRUFBeURDLE1BQTVFO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSixjQUFjLENBQUNFLGdCQUFmLENBQWdDLHFCQUFoQyxFQUF1REMsTUFBeEU7O0FBRUEsTUFBSUYsWUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ25CSSxrQkFBYyxDQUFDUixnQkFBRCxDQUFkO0FBQ0g7O0FBQ0QsTUFBSU8sVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ2pCRSxnQkFBWSxDQUFDTixjQUFELENBQVo7QUFDSDs7QUFFREYsVUFBUSxDQUFDUyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ0MsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFVBQVVDLEtBQVYsRUFBaUI7QUFDbEZBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBTCxrQkFBYyxDQUFDUixnQkFBRCxDQUFkO0FBQ0gsR0FIRDtBQUtBQyxVQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxnQkFBekMsQ0FBMEQsT0FBMUQsRUFBbUUsVUFBVUMsS0FBVixFQUFpQjtBQUNoRkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FKLGdCQUFZLENBQUNOLGNBQUQsQ0FBWjtBQUNILEdBSEQ7O0FBS0EsV0FBU1csWUFBVCxHQUF3QjtBQUNwQmIsWUFBUSxDQUFDSSxnQkFBVCxDQUEwQiw0Q0FBMUIsRUFBd0VVLE9BQXhFLENBQWdGLFVBQUNDLE9BQUQsRUFBYTtBQUN6RkEsYUFBTyxDQUFDTCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxLQUFULEVBQWdCO0FBQzlDQSxhQUFLLENBQUNDLGNBQU47QUFDQSxhQUFLSSxVQUFMLENBQWdCQyxNQUFoQjtBQUNILE9BSEQ7QUFJSCxLQUxEO0FBTUFqQixZQUFRLENBQUNJLGdCQUFULENBQTBCLDBDQUExQixFQUFzRVUsT0FBdEUsQ0FBOEUsVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZGQSxhQUFPLENBQUNMLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVVDLEtBQVYsRUFBaUI7QUFDL0NBLGFBQUssQ0FBQ0MsY0FBTjtBQUNBLGFBQUtJLFVBQUwsQ0FBZ0JDLE1BQWhCO0FBQ0gsT0FIRDtBQUlILEtBTEQ7QUFNSDs7QUFFRCxXQUFTVixjQUFULENBQXdCUixnQkFBeEIsRUFBMEM7QUFDdEMsUUFBTW1CLGdCQUFnQixHQUFHbkIsZ0JBQWdCLENBQUNvQixZQUFqQixDQUE4QixnQkFBOUIsQ0FBekI7QUFDQSxRQUFNQyxlQUFlLEdBQUdGLGdCQUFnQixDQUFDRyxPQUFqQixDQUF5QixXQUF6QixFQUFzQ2xCLFlBQXRDLENBQXhCO0FBQ0FKLG9CQUFnQixDQUFDdUIsa0JBQWpCLENBQW9DLFdBQXBDLEVBQWlERixlQUFqRDtBQUNBakIsZ0JBQVk7QUFDWlUsZ0JBQVk7QUFDZjs7QUFFRixXQUFTTCxZQUFULENBQXNCTixjQUF0QixFQUFzQztBQUNqQyxRQUFNcUIsY0FBYyxHQUFHckIsY0FBYyxDQUFDaUIsWUFBZixDQUE0QixnQkFBNUIsQ0FBdkI7QUFDQSxRQUFNSyxhQUFhLEdBQUdELGNBQWMsQ0FBQ0YsT0FBZixDQUF1QixXQUF2QixFQUFvQ2YsVUFBcEMsQ0FBdEI7QUFDQUosa0JBQWMsQ0FBQ29CLGtCQUFmLENBQWtDLFdBQWxDLEVBQStDRSxhQUEvQztBQUNBbEIsY0FBVTtBQUNWTyxnQkFBWTtBQUNmO0FBRUosQ0F2REQsSSIsImZpbGUiOiJqcy9hZGQtdHJpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpY2tfcGljdHVyZXMnKTtcbiAgICBjb25zdCBjb250YWluZXJWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmlja192aWRlb3MnKTtcblxuICAgIGxldCBpbmRleFBpY3R1cmUgPSBjb250YWluZXJQaWN0dXJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdHJpY2stZm9ybS1yb3cnKS5sZW5ndGg7XG4gICAgbGV0IGluZGV4VmlkZW8gPSBjb250YWluZXJWaWRlby5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRyaWNrLWZvcm0tcm93JykubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4UGljdHVyZSA9PSAwKSB7XG4gICAgICAgIGFkZFBpY3R1cmVGb3JtKGNvbnRhaW5lclBpY3R1cmUpO1xuICAgIH1cbiAgICBpZiAoaW5kZXhWaWRlbyA9PSAwKSB7XG4gICAgICAgIGFkZFZpZGVvRm9ybShjb250YWluZXJWaWRlbyk7XG4gICAgfVxuICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hZGQtcGljdHVyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZFBpY3R1cmVGb3JtKGNvbnRhaW5lclBpY3R1cmUpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWFkZC12aWRlbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZFZpZGVvRm9ybShjb250YWluZXJWaWRlbyk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGFkZFJlbW92ZUJ0bigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmJ0bi1kZWxldGUtcGljdHVyZS5mYXMuZmEtdHJhc2gtYWx0JykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uYnRuLWRlbGV0ZS12aWRlby5mYXMuZmEtdHJhc2gtYWx0JykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQaWN0dXJlRm9ybShjb250YWluZXJQaWN0dXJlKSB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZVBpY3R1cmUgPSBjb250YWluZXJQaWN0dXJlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm90b3R5cGUnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVQaWN0dXJlID0gcHJvdG90eXBlUGljdHVyZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleFBpY3R1cmUpO1xuICAgICAgICBjb250YWluZXJQaWN0dXJlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGVQaWN0dXJlKTtcbiAgICAgICAgaW5kZXhQaWN0dXJlKys7XG4gICAgICAgIGFkZFJlbW92ZUJ0bigpO1xuICAgIH1cblxuICAgZnVuY3Rpb24gYWRkVmlkZW9Gb3JtKGNvbnRhaW5lclZpZGVvKSB7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZVZpZGVvID0gY29udGFpbmVyVmlkZW8uZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZVZpZGVvID0gcHJvdG90eXBlVmlkZW8ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXhWaWRlbyk7XG4gICAgICAgIGNvbnRhaW5lclZpZGVvLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGVWaWRlbyk7XG4gICAgICAgIGluZGV4VmlkZW8rKztcbiAgICAgICAgYWRkUmVtb3ZlQnRuKCk7XG4gICAgfVxuXG59KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9