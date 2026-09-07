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

function sair() {
  window.location.href = "../index.html";
}

function buscaCnhOuplaca() {
  const valorSelect = document.getElementById("busca").value;
  const inputdaConsulta = document.getElementById("consultaInput").value;

  const placaCadastrada = "ABC1234";
  const cnh = "00000000000";

  if (inputdaConsulta === cnh && valorSelect === "1") {
    window.location.href = "consulta.html";
    return;
  }
  if (inputdaConsulta === placaCadastrada && valorSelect === "2") {
    window.location.href = "consulta.html";
  } else if (valorSelect === "1") {
    alert("CNH não consta no sistema");
  } else if (valorSelect === "2") {
    alert("Placa não consta no sistema");
  }
}
