const inputUser = document.querySelector("#log-usuario");
const inputPassword = document.querySelector("#log-senha");
const inputPasswordConfirm = document.querySelector("#log-confirmar-senha");
const btnRegister = document.querySelector("#SignInBtn");

const cadastroUsuario = () => {
    let user = inputUser.value;
    let password = inputPassword.value;
    let passwordConfirm = inputPasswordConfirm.value;   

    if(user.trim() != "" && password == passwordConfirm) {
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href = "../index.html"
        alert("Usuário cadastrado com sucesso!")
        return;
    }

    alert("Confirmação de senha incorreta!")
}

btnRegister.addEventListener("click", cadastroUsuario);