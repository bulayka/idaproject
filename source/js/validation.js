var form = document.querySelector(".form"),
    owner = form.querySelector("[name=owner]"),
    fields = form.querySelectorAll(".form__input");
form.noValidate = true; // отключаем браузерную валидацию, иначе событие submit не сработает
form.addEventListener("submit", function(e) {
    e.preventDefault();
    for (var r = 0; r < fields.length; r++) {
     // checkValidity() -проверяет, прошёл ли элемент проверку по указанному в параметрах шаблону
     // если проверка не пройдена или значение пустое, то вешаем класс ошибки.
     (!fields[r].checkValidity() || fields[r].value === '') ? fields[r].classList.add("form__error") : fields[r].classList.remove("form__error")
    }
});
