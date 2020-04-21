(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/add"],{

/***/ "./assets/js/add-trick.js":
/*!********************************!*\
  !*** ./assets/js/add-trick.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

// add-collection-widget.js
jQuery(document).ready(function () {
  jQuery('.add-another-collection-widget').click(function (e) {
    var list = jQuery(jQuery(this).attr('data-list-selector')); // Try to find the counter of the list or use the length of the list

    var counter = list.data('widget-counter') || list.children().length; // grab the prototype template

    var newWidget = list.attr('data-prototype'); // replace the "__name__" used in the id and name of the prototype
    // with a number that's unique to your emails
    // end name attribute looks like name="contact[emails][2]"

    newWidget = newWidget.replace(/__name__/g, counter); // Increase the counter

    counter++; // And store it, the length cannot be used if deleting widgets is allowed

    list.data('widget-counter', counter); // create a new list element and add it to the list

    var newElem = jQuery(list.attr('data-widget-tags')).html(newWidget);
    newElem.appendTo(list);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/add-trick.js","runtime","vendors~js/add~js/app","vendors~js/add"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLXRyaWNrLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImUiLCJsaXN0IiwiYXR0ciIsImNvdW50ZXIiLCJkYXRhIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdXaWRnZXQiLCJyZXBsYWNlIiwibmV3RWxlbSIsImh0bWwiLCJhcHBlbmRUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFZO0FBQy9CRixRQUFNLENBQUMsZ0NBQUQsQ0FBTixDQUF5Q0csS0FBekMsQ0FBK0MsVUFBVUMsQ0FBVixFQUFhO0FBQ3hELFFBQUlDLElBQUksR0FBR0wsTUFBTSxDQUFDQSxNQUFNLENBQUMsSUFBRCxDQUFOLENBQWFNLElBQWIsQ0FBa0Isb0JBQWxCLENBQUQsQ0FBakIsQ0FEd0QsQ0FFeEQ7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUwsQ0FBVSxnQkFBVixLQUErQkgsSUFBSSxDQUFDSSxRQUFMLEdBQWdCQyxNQUE3RCxDQUh3RCxDQUt4RDs7QUFDQSxRQUFJQyxTQUFTLEdBQUdOLElBQUksQ0FBQ0MsSUFBTCxDQUFVLGdCQUFWLENBQWhCLENBTndELENBT3hEO0FBQ0E7QUFDQTs7QUFDQUssYUFBUyxHQUFHQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0IsV0FBbEIsRUFBK0JMLE9BQS9CLENBQVosQ0FWd0QsQ0FXeEQ7O0FBQ0FBLFdBQU8sR0FaaUQsQ0FheEQ7O0FBQ0FGLFFBQUksQ0FBQ0csSUFBTCxDQUFVLGdCQUFWLEVBQTRCRCxPQUE1QixFQWR3RCxDQWdCeEQ7O0FBQ0EsUUFBSU0sT0FBTyxHQUFHYixNQUFNLENBQUNLLElBQUksQ0FBQ0MsSUFBTCxDQUFVLGtCQUFWLENBQUQsQ0FBTixDQUFzQ1EsSUFBdEMsQ0FBMkNILFNBQTNDLENBQWQ7QUFDQUUsV0FBTyxDQUFDRSxRQUFSLENBQWlCVixJQUFqQjtBQUlILEdBdEJEO0FBd0JILENBekJELEUiLCJmaWxlIjoianMvYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkLWNvbGxlY3Rpb24td2lkZ2V0LmpzXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBqUXVlcnkoJy5hZGQtYW5vdGhlci1jb2xsZWN0aW9uLXdpZGdldCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsaXN0ID0galF1ZXJ5KGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLWxpc3Qtc2VsZWN0b3InKSk7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3VudGVyIG9mIHRoZSBsaXN0IG9yIHVzZSB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0XG4gICAgICAgIHZhciBjb3VudGVyID0gbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicpIHx8IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXG4gICAgICAgIHZhciBuZXdXaWRnZXQgPSBsaXN0LmF0dHIoJ2RhdGEtcHJvdG90eXBlJyk7XG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIFwiX19uYW1lX19cIiB1c2VkIGluIHRoZSBpZCBhbmQgbmFtZSBvZiB0aGUgcHJvdG90eXBlXG4gICAgICAgIC8vIHdpdGggYSBudW1iZXIgdGhhdCdzIHVuaXF1ZSB0byB5b3VyIGVtYWlsc1xuICAgICAgICAvLyBlbmQgbmFtZSBhdHRyaWJ1dGUgbG9va3MgbGlrZSBuYW1lPVwiY29udGFjdFtlbWFpbHNdWzJdXCJcbiAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGNvdW50ZXIpO1xuICAgICAgICAvLyBJbmNyZWFzZSB0aGUgY291bnRlclxuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIC8vIEFuZCBzdG9yZSBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcbiAgICAgICAgbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicsIGNvdW50ZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBsaXN0IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICB2YXIgbmV3RWxlbSA9IGpRdWVyeShsaXN0LmF0dHIoJ2RhdGEtd2lkZ2V0LXRhZ3MnKSkuaHRtbChuZXdXaWRnZXQpO1xuICAgICAgICBuZXdFbGVtLmFwcGVuZFRvKGxpc3QpO1xuXG4gICAgICBcblxuICAgIH0pO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=