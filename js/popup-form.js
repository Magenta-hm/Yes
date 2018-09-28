var link = document.querySelector(".sign-up-button");
var overlay = document.querySelector(".overlay");
  
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".user-form-close");
  
var form = popup.querySelector("form");
var tel = popup.querySelector("[name=phone]");
  
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("tel");
} 

catch (err) {
    isStorageSupport = false;
}
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if (storage) {
        tel.value = storage;
        tel.focus();
    } 
});
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("modal-error");
});
  
form.addEventListener("submit", function (evt) {
    if (!tel.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } 

    else {
        if (isStorageSupport) {
            localStorage.setItem("tel", tel.value);
        }
    }
});
  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            overlay.classList.remove("overlay-show");
            popup.classList.remove("modal-error");
        }
    }
});
