// const newEmployees = (employeesGenerator) => {
//   const employees = {
//     id1: employeesGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: employeesGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: employeesGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const employeesGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_')
//   return {fullName, email:`${email}@trybe.com`};
// }

// console.log(newEmployees(employeesGenerator));



// const checkNumber = (myNumber, number) => myNumber === number;
// const resultado = (myNumber, callback) => {
//   const number = Math.floor(Math.random() * 6)
//  return callback(myNumber, number) ? 'Você ganhou' : 'Você perdeu'
// };

// console.log(resultado(2, checkNumber));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'D', 'A', 'D', 'C'];
// const respostasCorretas = [];

// const comparaArrays = (respostasCorretas, respostasDoEstudante) => {
//   if (respostasCorretas === respostasDoEstudante) {
//     return 1;
//   } if (respostasDoEstudante === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const contaPontos = (respostasCorretas, respostasDoEstudante, action) => {
//   let contador = 0;
//   for (let index = 0; index < respostasCorretas.length; index += 1) {
//     const actionReturn = action(respostasCorretas[index], respostasDoEstudante[index]);
//     contador += actionReturn
//   }
//   return `Resultado final: ${contador} pontos`;
// }

// console.log(contaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaArrays));
