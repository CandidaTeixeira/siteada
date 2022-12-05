document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario () {
  if (document.getElementById("nome").value != "" &&         document.getElementById("email").value != ""  &&  document.getElementById("telefone")) {     
    alert("Prontinho! Você receberá as novidades por email.")
  } else {
    alert("Peça a usuária que preencha os campos nome e email")
  }
}


