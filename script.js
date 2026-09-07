function entrar() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "123") {
    window.location.href = "pages/cadastro.html";
  } else {
    document.getElementById("mensagem").textContent =
      "Usuário ou senha incorretos!";
  }
}

function sair(){
  window.location.href = "../index.html";

}
