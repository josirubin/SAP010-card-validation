import validator from '.validator.js';


const nmrCartao = document.getElementById("nmr-cartao"); //pega o input
const botao = document.getElementById("btn-enviar"); //pega o botão

botao.addEventListener("click", function (event) {
  event.preventDefault(); //impede que o formulário seja enviado
  if (nmrCartao.value === ""){
    return document.getElementById("resultado").innerHTML = "Digite o número do cartão";
  }
  const texto = nmrCartao.value; //pega o botao
  const maskedNumbers = validator.maskify(texto);  //guarda os números mascarados
  if (validator.isValid(texto)) {  //utiliza a função de validação
    return document.getElementById("resultado").innerHTML = maskedNumbers + " é um cartão válido.";
  }
  return document.getElementById("resultado").innerHTML = "Esse cartão não é válido, tente novamente.";
}
)

botao.addEventListener("click", function zerarInput(){
  document.getElementById("nmr-cartao").value = "";
})