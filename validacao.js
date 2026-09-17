const nome = document.querySelector("#nome");
const cnh = document.querySelector("#cnh");
const form = document.querySelector("#form");



form.addEventListener("submit", (evento) => {
  let enviarForm = true;


  if (cnh.value.length !== 11) {
    console.log("A CNH está incorreta");

    enviarForm = false;
    cnh.style.borderColor= "red";
    
  }

  if (!enviarForm) {
    evento.preventDefault();
  }
});
