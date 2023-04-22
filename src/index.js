import validator from './validator.js';

console.log(validator);

const btn = document.querySelector("#send"); //guarda o botão

btn.addEventListener("click", function() {

    const nmrCartao = document.querySelector("#number"); //guarda o input
    const value = nmrCartao.value; //guarda o valor digitado no input
    
    document.getElementById("result").innerHTML = value //imprime no <p> o que foi digitado no input
})
