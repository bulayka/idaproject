var form = document.querySelector(".form");
var owner = form.querySelector("[name=owner]");
var fields = form.querySelectorAll(".form__input");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].classList.add("form__error");
    } else {
      fields[i].classList.remove("form__error");
    }
  }
});
