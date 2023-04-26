import validator from './validator.js';

const nmrCartao = document.getElementById("nmr-cartao"); //pega o input
const btn = document.getElementById("btn-enviar"); //pega o botão

btn.addEventListener("click", function (event){
  event.preventDefault(); //impede que o formulário seja enviado
  const texto = nmrCartao.value; //pega o botao
  const maskedNumbers = validator.maskify(texto);  //guarda os números mascarados
  if (validator.isValid(texto)) {  //utiliza a função de validação
    return document.getElementById("resultado").innerHTML = maskedNumbers + ' esse cartão é válido.';
  }
  return document.getElementById("resultado").innerHTML = 'Esse cartão não é válido, tente novamente.';
},

//faz o número do cartão sumir quando clica em validar
function zeraInput(){ 
    document.getElementById("nmr-cartao").value = "";
}
);

console.log(validator);