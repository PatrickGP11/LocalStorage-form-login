

const btnLogout = document.querySelector("#btn-logout");

const logout = () => {
    localStorage.removeItem("status")
    window.location.href = "../../index.html"
}

btnLogout.addEventListener("click", logout)

