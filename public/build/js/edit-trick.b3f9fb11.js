(window.webpackJsonp=window.webpackJsonp||[]).push([["js/edit-trick"],{"8/dG":function(e,t,r){r("QWBl"),r("rB9j"),r("UxlC"),r("FZtP"),function(){var e=document.getElementById("trick_pictures"),t=document.getElementById("trick_videos"),r=e.querySelectorAll(".edit-trick-content-form-row").length,o=t.querySelectorAll(".edit-trick-content-form-row").length;0==r&&l(e),0==o&&a(t);function n(){document.querySelectorAll("button.btn-delete-picture.fas.fa-trash-alt").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.parentNode.parentNode.remove()}))})),document.querySelectorAll("button.btn-delete-video.fas.fa-trash-alt").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.parentNode.parentNode.remove()}))}))}function l(e){var t=e.getAttribute("data-prototype").replace(/__name__/g,r);e.insertAdjacentHTML("beforeend",t),r++,n()}function a(e){var t=e.getAttribute("data-prototype").replace(/__name__/g,o);e.insertAdjacentHTML("beforeend",t),o++,n()}!function(){for(var t=e.querySelectorAll(".edit-trick-content-form-row"),r=document.querySelectorAll(".js-modal-picture"),o=e.querySelectorAll(".modal-none"),n=0;n<t.length;n++)t[n].classList.add("modal"),t[n].setAttribute("id","modal-picture-"+n),t[n].setAttribute("aria-hidden","true"),t[n].setAttribute("role","dialog"),t[n].setAttribute("aria-modal","false");for(var l=0;l<o.length;l++)o[l].insertAdjacentHTML("afterbegin",'<button type="button" class="js-modal-close">X</button>'),o[l].className="modal-wrapper js-modal-stop";for(var a=0;a<r.length;a++)r[a].setAttribute("href","#modal-picture-"+a)}(),function(){for(var e=t.querySelectorAll(".edit-trick-content-form-row"),r=document.querySelectorAll(".js-modal-video"),o=t.querySelectorAll(".modal-none"),n=0;n<e.length;n++)e[n].classList.add("modal"),e[n].setAttribute("id","modal-video-"+n),e[n].setAttribute("aria-hidden","true"),e[n].setAttribute("role","dialog"),e[n].setAttribute("aria-modal","false");for(var l=0;l<o.length;l++)o[l].insertAdjacentHTML("afterbegin",'<button type="button" class="js-modal-close">X</button>'),o[l].className="modal-wrapper js-modal-stop";for(var a=0;a<r.length;a++)r[a].setAttribute("href","#modal-video-"+a)}(),document.querySelector(".btn-add-picture").addEventListener("click",(function(t){t.preventDefault(),l(e)})),document.querySelector(".btn-add-video").addEventListener("click",(function(e){e.preventDefault(),a(t)}));var i=null,c=function(e){e.preventDefault();var t=document.querySelector(e.target.getAttribute("href"));t.querySelector(".fas.fa-trash-alt").style.display="none",t.style.display="block",t.removeAttribute("aria-hidden"),t.setAttribute("aria-modal","true"),(i=t).addEventListener("click",d),i.querySelector(".js-modal-close").addEventListener("click",d),i.querySelector(".js-modal-stop").addEventListener("click",u)},d=function e(t){null!==i&&(t.preventDefault(),i.style.display="none",i.setAttribute("aria-hidden","true"),i.removeAttribute("aria-modal"),i.removeEventListener("click",e),i.querySelector(".js-modal-close").removeEventListener("click",e),i.querySelector(".js-modal-stop").removeEventListener("click",u),i=null)},u=function(e){e.stopPropagation()};document.querySelectorAll(".js-modal-picture").forEach((function(e){e.addEventListener("click",c)})),document.querySelectorAll(".js-modal-video").forEach((function(e){e.addEventListener("click",c)}));for(var s=document.querySelectorAll(".btn-delete-picture.fas.fa-trash-alt"),f=0;f<s.length;f++)s[f].setAttribute("href","#modal-picture-"+f);for(var m=document.querySelectorAll(".btn-delete-video.fas.fa-trash-alt"),v=0;v<m.length;v++)m[v].setAttribute("href","#modal-video-"+v);m.forEach((function(e){e.addEventListener("click",(function(e){var t=document.querySelector(e.target.getAttribute("href"));e.preventDefault(),t&&t.remove(),this.parentNode.parentNode.remove()}))})),s.forEach((function(e){e.addEventListener("click",(function(e){var t=document.querySelector(e.target.getAttribute("href"));e.preventDefault(),t&&t.remove(),this.parentNode.parentNode.remove()}))}))}()}},[["8/dG","runtime",0]]]);