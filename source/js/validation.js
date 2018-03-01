form.addEventListener("submit", function (evt) {
   if (!login.value || !password.value) {
     evt.preventDefault();
     popup.classList.remove("modal-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("modal-error");
   } else {
     localStorage.setItem("login", login.value);
   }
 });
