// function userInfo() {
//     let userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    
//   }
//   userInfo();
//   console.log(userEmail);

// if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); 

// let pessoa = {
//     nome: 'Bruno',
//     sobrenome: 'Medeiros',
//     anoNascimento: 1995,
// }

// console.log(`Paciente: ${pessoa.nome + ' ' + pessoa.sobrenome}
// Idade: ${2023- pessoa.anoNascimento}`)

// const printName = () => 'Lucas';
// console.log(printName());

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(9, 1));

// const soma = (num1, num2) => num1 + num2;

// console.log(soma(2, 2));

// // function cumprimentaCliente(cliente) {
// //   return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
// // }

// const cumprimentar = (cliente) => 'Olá ' + cliente;


// console.log(cumprimentar('Bruno'));

// const contaLetras = frase => frase.split(' ').length;

// console.log(contaLetras('Quantas letras a tem nessa frase'));


// const nomeIdade = (nome, idade) => ({nome: nome, idade:idade});

// console.log(nomeIdade('Bruno', 28));

// const sairHoje = (dia) => (
//     dia === 'sábado' || 'domingo' ? `Pode sair hoje` : `Não pode sair hoje`
// );


// console.log(sairHoje('segunda'));

//TERBARY OPERATOR 


// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//       imprimeIdade()
//     }
// }

  
//    let pessoa = {
//     nome: 'Henri',
//     idade: 20,
//   }
//   pessoa = {
//     nome: 'Luna',
//     idade: 19
//   } 
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa['idade']);

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);

// const firstName = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${firstName} ${lastName}!`);
// // console.log('Olá' + ',' + name + ' ' + lastName + '!');
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);
// // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));


// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

// const numeroAleatorio = () => Math.random();

// console.log(numeroAleatorio());

// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

// const hello = (nome) => `Olá, ${nome}! `

// let nome = 'Bruno'
// console.log(hello(nome));

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

// let nome ='Bruno';
// let sobrenome = 'Medeiros';
// console.log(nomeCompleto(nome, sobrenome));

// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

// let speed = 90;

// const speedCar = speed => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

// console.log(speedCar(speed));

const substituaX = (nome) => {
 const frase = 'Tryber x aqui!';
 const fraseArray = frase.split(' ');
 for (let index = 0; index < fraseArray.length; index += 1){
    if (fraseArray[index] === 'x'){
        fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');   
}

console.log(substituaX('Bruno'));

