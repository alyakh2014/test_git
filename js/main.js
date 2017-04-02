//function for checking form which user fills in the page of payment
function checkForm(x) {
    var form = x;
    var flag = true;
    for (var i = 0; i < form.length; i++) {
        if (form.elements[i].type != "select-one" && form.elements[i].value == "") {
            flag = false;
            form.elements[i].style.border = "1px solid red";
        }
    }

    if (flag) form.submit();
    else {
        alert("Заполните все поля!");
    }
}