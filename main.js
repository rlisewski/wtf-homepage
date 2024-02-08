console.log('siema');
const firstName = 'Rafał';
const age = 38;
console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat.`);
console.log(`Witaj przybyszu!`);

const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);

about.innerHTML = "Co tu sie wyczynia?";
about.style.color = 'red';
about.style.fontSize = '20px';
about.style.backgroundColor = 'lightgreen';

console.log(about.innerHTML);

function hey(age, firstName) {
  console.log(`Nazywam się ${firstName} i mam ${age} lat.`);
}

hey(age, firstName);

function createContent(querySelector,content) {
    const element = document.querySelector(querySelector);
    element.innerHTML = content;
}
createContent('.about__paragraph--js','Co tu sie wyczynia teraz?');
// 14323372