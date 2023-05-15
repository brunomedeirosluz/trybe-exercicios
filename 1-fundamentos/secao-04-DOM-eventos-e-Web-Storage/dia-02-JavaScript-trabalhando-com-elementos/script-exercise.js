const body = document.querySelector('body');

const title = document.createElement('h1');
title.innerText = 'TrybeTrip - Agência de Viagens'
body.appendChild(title);

const tagMain = document.createElement('main');

tagMain.className = 'main-content';
body.appendChild(tagMain);

const tagSection = document.createElement('section');

tagSection.className = 'center-content';
tagSection.style.backgroundColor = 'green';
tagMain.appendChild(tagSection);

const tagP = document.createElement('p');
tagP.innerText = 'Coloque algum texto';
tagSection.appendChild(tagP)

const tagSection2 = document.createElement('section');
tagSection2.className = 'left-content';
tagMain.appendChild(tagSection2);

const tagSection3 = document.createElement('section');
tagSection3.className = 'right-content';
tagSection3.style.marginRight = 'auto';
tagMain.appendChild(tagSection3);

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
tagSection2.appendChild(img);

const ul = document.createElement('ul');
const numbers = ['um','dois','três','quatro','cinco','seis','sete','oito'];

for (let index = 0; index < numbers.length; index +=1){
    const li = document.createElement('li');
    li.innerText = numbers[index];
    ul.appendChild(li);
}
tagSection3.appendChild(ul)

for(let index = 0; index < 3; index += 1){
    const h3 = document.createElement('h3');
    h3.innerText = index;
    h3.className ='description';
    tagMain.appendChild(h3);
}

title.className = 'title';


tagMain.removeChild(tagSection2);

