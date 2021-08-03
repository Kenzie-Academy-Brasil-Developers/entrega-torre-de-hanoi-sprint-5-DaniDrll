// Criar as 3 torres
// Criar os discos
// Criar interceptadores das torres
// Criar interceptadores de seleção de discos
// Criar interceptadores de captura dos discos
// Criar evento para mover os discos
// Crirar condições para não deixar um disco maior sobrepor um menor

const contDisco1 = document.getElementById('contDisco1');
const contDisco2 = document.getElementById('contDisco2');
const contDisco3 = document.getElementById('contDisco3');

const disco1 = document.getElementById('D1');
const disco2 = document.getElementById('D2');
const disco3 = document.getElementById('D3');
const disco4 = document.getElementById('D4');

const towerCont1 = document.getElementById('tower-cont1');
const towerCont2 = document.getElementById('tower-cont2');
const towerCont3 = document.getElementById('tower-cont3');

let container = document.getElementById('conteiner');
container.addEventListener('click', getDisc);

let first;
let last;

function getDisc(event) {
  if (event.target.id === 'tower-cont1') {
    console.log('tower1');
  }
  towerCont1.firstChild.appendChild(towerCont2);

  if (event.target.id === 'tower-cont2') {
    console.log('tower2');
  }

  if (event.target.id === 'tower-cont3') {
    console.log('tower3');
  }
}

let rod = document.getElementsByClassName('palito');
for (let i = 0; i < rod.length; i++) {
  rod[i].addEventListener('click', rodSwap);
}

function rodSwap(listen) {
  if (listen.target.id === 'palito1') {
    console.log('P1');
  }

  if (listen.target.id === 'palito2') {
    console.log('P2');
  }

  if (listen.target.id === 'palito3') {
    console.log('P3');
  }
}
