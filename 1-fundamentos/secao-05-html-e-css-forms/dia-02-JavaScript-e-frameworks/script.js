const buttonEnviar = document.querySelector('#submit-btn');
const buttonLimpar = document.querySelector('#submit-btn');
const concordo = document.querySelector('#agreement');
const nomeCompleto = document.querySelector('#fullname');
const email = document.querySelector('#email');
const textArea = document.querySelector('#question');

function enviar (event){
    event.preventDefault();
}

window.onload = function () {
buttonEnviar.addEventListener('click', enviar);
}

function clearFields() {
    submitBtn.disabled = true;
}
  
  window.onload = function () {
    buttonLimpar.addEventListener('click', clearFields);
}

function habilitarEnviar(){
    buttonEnviar.disabled = !concordo.checked;
}

window.onload = function () {
    concordo.addEventListener('change', habilitarEnviar);
}

function isNameValid (){
    const nameLength = nomeCompleto.value.length;
    return nameLength >= 10 && nameLength <= 40;
}
function emailValid (){
    const emailLength = email.value.length;
    return emailLength >= 10 && nameLength <= 50;
}
function textAreaValid (){
    const textAreaLength = textArea.value.length;
    return textAreaLength > 0 && textAreaLength <= 500;
}

function handleSubmit(event) {
    event.preventDefault();
    if (isNameValid() && emailValid() && textAreaValid()) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    } else {
      alert('Dados inválidos');
    }
  }

