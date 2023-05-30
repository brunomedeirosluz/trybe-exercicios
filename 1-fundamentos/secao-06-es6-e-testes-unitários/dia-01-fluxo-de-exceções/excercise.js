const validarNumeros = (num1, num2, num3, num4) => {
 if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' || typeof num4 !== 'number'){
    throw new Error('Os valores devem ser numéricos');
 }
}
const calcularMedia = (num1, num2, num3, num4) => {
    try {
        validarNumeros(num1, num2, num3, num4);
    
    let sum = num1 + num2 + num3 + num4;
    let media = sum / 4; 
    return media;
}catch (error){
    return error.message;
 }
}

console.log(calcularMedia(5,6,7,'8'));

