const sum = (...numbers) => {
let result = 0;
   
for (let index = 0; index < numbers.length; index += 1) {
result += numbers[index];
 }
 return result;
}

console.log(sum(4,5,6));