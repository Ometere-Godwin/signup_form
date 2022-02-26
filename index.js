document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccount = document.querySelector("#createAccount");

    document.querySelector("#creatAccount").addEventListener ("click", e =>{
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAccount.classList.remove("formHidden");
    });

    document.querySelector("#linkSignIn").addEventListener ("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccount.classList.add("formHidden");
    });
});