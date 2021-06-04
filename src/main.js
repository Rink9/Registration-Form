function createAccount() {
    let inputs = document.getElementsByClassName("formField");
    let errorMessege = "";

    for(let i = 0; i < inputs.length; i++) {
        let value = inputs[i].value;
        if (!value){
            errorMessege = document.getElementsByClassName("formField")
            formField[i].style.backgroundColor = "red";
        }

    } 

    if (!errorMessege) {
        accountCreated();
    }

}

function accountCreated() {

    let submitButton = document.getElementById("accountCreated");
    submitButton.style.backgroundColor = "#34D399";

    submitButton.innerHTML = "Account Created";

    submitButton.disabled = "true";

    let body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "#D1FAE5";

}