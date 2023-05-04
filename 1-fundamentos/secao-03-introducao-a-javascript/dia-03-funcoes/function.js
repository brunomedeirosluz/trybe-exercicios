// let saldo = 100; 

// function somaSaldo(valor){
//   return valor + saldo;
// };

// function subtraiSaldo(valor){
//     return saldo - valor;
// };

// function multipliqueSaldo(valor){
//     return valor * saldo;
// };

// function divideSaldo(valor){
//     return saldo / valor;
// };

// console.log(somaSaldo(300));
// console.log(subtraiSaldo(50));
// console.log(multipliqueSaldo(2));
// console.log(divideSaldo(5));

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function cumprimentaCliente(cliente) {
//   return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
// }

// console.log(cumprimentaCliente(clientesTrybeBank)); // Olá, Ada,John,Gus. Essa é sua conta do TrybeBank

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaCliente(cliente){
//     if (typeof cliente === 'string'){

//     }else {
//         return 'O parâmetro passado deve ser do tipo"string"';
//     }
// }


let fruits = [3, 4, 1, 1, 1];
let totalFruits = 0;

for (let index = 0; index < fruits.length; index +=1){
  totalFruits += fruits[index];
}

if (totalFruits > 15){
    console.log(totalFruits);
}else {
    console.log('Valor menor que 16');
}