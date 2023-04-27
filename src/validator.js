const validator = {
  isValid: function (nmrCartao) {
    const nmrCartaoInvertido = nmrCartao.split("").reverse(); //guarda o nmr do cartão invertido em uma array
    const posicaoPar = [];
    const posicaoImpar = [];
    let somaDig = 0;

    let somaPar = 0;
    let somaImpar = 0;
    let somaValidacao = 0;

    for (let i = 0; i < nmrCartaoInvertido.length; i++) {
      if (i % 2 !== 0) {  //verifica se o indice é par ou impar

        if (nmrCartaoInvertido[i] * 2 > 9) {   //verifica se o número obtido da posição par, quando multiplicado é maior que 9
          somaDig = nmrCartaoInvertido[i] * 2;
          const temp = somaDig.toString().split('');  //transforma esse número maior que 9 em uma string
          somaDig = parseInt(temp[0]) + parseInt(temp[1]);  //transforma cada um dos números em number e soma eles
          posicaoPar.push(somaDig);  //guarda na array posicaoPar a soma dos dois dígitos
        } else {
          posicaoPar.push(nmrCartaoInvertido[i] * 2);  //guarda na array posicaoPar os números que não eram maiores que 9 no resultado da multiplicação
        }
      } else {
        posicaoImpar.push(parseInt(nmrCartaoInvertido[i]))  //guarda na array posicaoImpar os números que estavam nos indices impares
      }
    }

    for (let i = 0; i < posicaoPar.length; i++) {  //soma os números somados + os números que não eram maiores que nove
      somaPar = somaPar + posicaoPar[i];
    }

    for (let i = 0; i < posicaoImpar.length; i++) {  //guarda os números impares
      somaImpar = somaImpar + posicaoImpar[i];
    }

    somaValidacao = somaPar + somaImpar;  //soma as posições pares e impares para obter o resultado da validação
    return somaValidacao % 10 === 0   //verifica se o resultado da soma é divisivel por 10. True = válido - False = inválido
  },

  maskify: function (nmrCartao) {
    const nmrMascarado = [];
    for (let i = 0; i < nmrCartao.length; i++) {
      if (i < nmrCartao.length - 4) {
        nmrMascarado.push("#");
      }
      else {
        nmrMascarado.push(nmrCartao[i])
      }
    }
    const mascarado = nmrMascarado.join("");
    return mascarado;
  }
}

export default validator;


