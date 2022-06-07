
let number1 = prompt('digite o primeiro numero.');
let number2 = prompt('digite o segundo numero.');
let soma = Number(number1) + Number(number2);
alert(`A soma dos dois numeros é: ${Number(number1) + Number(number2)}`);
alert(`A subtração dos dois numeros é: ${Number(number1) - Number(number2)}`);
alert(`A multiplicação dos dois numeros é: ${Number(number1) * Number(number2)}`);
alert(`A divisão dos dois numeros é: ${Number(number1) / Number(number2)}`);
alert(`O resto da divisão dos dois numeros é: ${Number(number1) % Number(number2)}`);

function imparOuPar(soma){
  soma % 2 === 0 ? alert(`O numero ${soma} é par!`): alert(`O numero ${soma} é impar!`)
}

function numerosIgaus(number1, number2){
  if(number1 === number2){
    alert('Os numeros são iguas!');
  }else{
    alert('Os numeros são diferente!');
  }
}

imparOuPar(soma);
numerosIgaus(number1, number2);






