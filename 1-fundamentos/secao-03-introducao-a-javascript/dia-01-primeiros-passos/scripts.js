// // exercicio 1  


// let a = 10; 
// let b = 5;


// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log (a / b);
// console.log (a % b);


// // exercicio 2 


// let c = 50;
// let d = 60;

// if (c > d){
// console.log('c é maior que d')
// }
// else {
// console.log('d é maior que c')
// }

// // exercicio 3
// let e = 80;
// let f = 60; 
// let g = 90;


// if (e > f && e > g){
//     console.log('e é o maior numero')
// }
// else if (f > e && f > g){
//     console.log('f é o maior numero')
// }
// else {
//     console.log('g é o maior numero')
// }

// exercicio 4

// let parametro = 10;

// if (parametro > 0){
//     console.log('positive');
// }else if (parametro < 0){
//     console.log('negative')
// }else {
//     console.log('zero');
// }

// exercicio 5

// let angulo1 = 60;
// let angulo2 = 60;
// let angulo3 = 60;

// let somaTodosAngulos = angulo1 + angulo2 + angulo3; 

// let todosAngulosPositivo;

// if (todosAngulosPositivo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
//   if(somaTodosAngulos === 180){
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//     console.log('Erro: ângulo inválido');
// }
  
// exercicio 6

// let pecaXadrez = 'DAMA';

// switch (pecaXadrez.toLowerCase()){
//     case 'peao':
//     console.log ('Peão -> Movimenta uma casa pra frente.');
//     break;

//     case 'cavalo':
//     console.log ('Cavalo -> Movimenta em formato de L.');
//     break;

//     case 'rei':
//     console.log ('Rei -> Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
//     break;

//     case 'dama':
//     console.log ('Dama -> Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
//     break

//     case 'torre':
//     console.log ('Torre -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
//     break

//     case 'bispo':
//     console.log('Bispo -> Move-se na diagonal, quantas casas quiser.');

//     default:
//     console.log('Peça inválida!!')
// }

//exercicio 7 

// let nota = 95;

// if (nota < 0 || nota > 100){
//     console.log('ERRO!!!');
// }else if (nota >= 90){
//     console.log('A');
// }else if (nota >= 80){
//     console.log('B');
// }else if (nota >= 70){
//     console.log('C');
// }else if (nota >= 60){
//     console.log('D');
// }else if (nota >= 50){
//     console.log('E');
// }else{
//     console.log('F');
// }


//exercicio 8 

// let numero1 = 9;
// let numero2 = 13;
// let numero3 = 15;

// if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0){
//     console.log(true);
// }else {
//     console.log(false);
// }

//exercicio 9 

// let numero1 = 10;
// let numero2 = 12;
// let numero3 = 15;

// if (numero1 % 2 === 1 || numero2 % 2 === 0 || numero3 % 2 === 0){
//     console.log(true);
// }else {
//     console.log(false);
// }

//exercicio 10

// let custoProduto = 100;
// let valorDeVenda = 200;

// if (custoProduto >= 0 && valorDeVenda >=0){
//     let valorCustoTotal = custoProduto * 1.2;
//     let lucroTotal = (valorDeVenda - valorCustoTotal) * 1000;
//     console.log(lucroTotal);
// }else {
//     console.log('erro!!');
//     }

//exercicio 11 

let aliquotaInss; 
let aliquotaIr;

let salario = 3500.00;

if (salario <= 1566.94){
    aliquotaInss = salario * 0.08;
}else if (salario <= 2594.92){
    aliquotaInss = salario *0.09;
}else if (salario <= 5189.82){
    aliquotaInss = salario * 0.11;
}else {
    aliquotaInss = 570.88;
}

let salarioBase = salario - aliquotaInss;

if (salarioBase <= 1903.98){
    aliquotaIr = 0;
}else if (salarioBase <= 2826.65){
    aliquotaIr = (salarioBase * 0.075) - 142.80;
}else if (salarioBase <= 3751.05){
    aliquotaIr = (salarioBase * 0.15) - 354.80;
}else if (salarioBase <= 4664,68){
    aliquotaIr = (salarioBase * 0.225) - 636.13;
}else {
    aliquotaIr = (salarioBase * 0.275) - 869,36;
}

console.log('Salário: ' + (salarioBase - aliquotaIr));

