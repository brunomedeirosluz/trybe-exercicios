// const section = document.getElementById('where-are-you').parentElement
// section.style.color = 'blue';

// const adicionaTexto = document.getElementById('first-child-of-child');
// adicionaTexto.innerText = 'Hello, World';

// const parent = document.getElementById('parent').nextElementSibling;

// const where = document.getElementById('where-are-you').previousElementSibling;

// const texto = document.getElementById('where-are-you').nextSibling;

// const terceiroFilho = document.getElementById('where-are-you').nextElementSibling;

// const terceiroFilho2 = document.getElementById('parent').lastElementChild.previousElementSibling

// const treinando = document.getElementById('first-child-of-child').parentElement.nextElementSibling.nextElementSibling;

// treinando.innerHTML = 'Sou o <strong>último</strong> elemento e o último filho'
// treinando.style.color = 'red';

// console.log(treinando);

const pai = document.getElementById('pai');

const irmaoOndeVoceEsta = document.createElement('section');

irmaoOndeVoceEsta.id = 'irmaoOndeVoceEsta';
pai.appendChild(irmaoOndeVoceEsta);

const pai2 = document.getElementById('elementoOndeVoceEsta');

const filhoElemento = document.createElement('section');

filhoElemento.id = 'filhoElemento';
pai2.appendChild(filhoElemento);


const pai3 = document.getElementById('primeiroFilhoDoFilho');

const neto = document.createElement('section');

neto.id = 'neto';
pai3.appendChild(neto);


const acessando = document.getElementById('neto').parentElement.parentElement.nextElementSibling;
