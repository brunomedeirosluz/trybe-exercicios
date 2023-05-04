// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index +=1){
//   result += numbers[index];  
// }

// mediaAritmetica = result / numbers.length;

// if (mediaAritmetica > 20){
//   console.log('O valor da média aritmética é maior que 20')
// }else {
//   console.log('O valor da média aritmética é menor ou igual a 20');
// // }
// let maiorNumero = numbers[0];

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// let menorNumero = numbers[0]

// for (let index = 1; index < numbers.length; index +=1){
//  if (numbers[index] < menorNumero){
//   menorNumero = numbers[index];
//  }
// }

// console.log(menorNumero);

// let numbers = [];

// for (let index = 1; index <= 25; index +=1){
//   numbers.push(index);
// }

// for(let index = 0; index < numbers.length; index +=1){
//   console.log(numbers[index] / 2 );
// };

// let fatorial = 1;

// for (let index = 10; index > 0; index -=1){
//   fatorial *= index;
// }

// console.log(fatorial);

// let word = 'tryber';
// let palavraReversa = '';

// for (let index = 0; index < word.length; index +=1){
//     palavraReversa += word[word.length -1 - index];
// }

// console.log(palavraReversa);

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 1; index < array.length; index+=1){
//  if(array[index]. length > maiorPalavra.length){
//   maiorPalavra = array[index];
//  }
// }

// for (let index = 1; index < array.length; index += 1){
//   if (array[index]. length < menorPalavra.length ){
//     menorPalavra = array[index];
//   }
// }

// console.log(maiorPalavra);
// console.log(menorPalavra);

let biggestPrimeNumber = 0;

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break; 
  }
}

console.log(biggestPrimeNumber);