

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


//-----------------------------------------------------
let container = document.getElementById('conteiner');
container.addEventListener('click', getDisc);

let tower = document.getElementsByClassName('towers');
for (let i = 0; i < tower.length; i++) {
  tower[i].addEventListener('click', towerSwap);
}
//-----------------------------------------------------

// let first;
// let last;




function towerSwap(listen) {
 if (listen.target.id === 'tower-cont1') {
    console.log('tower1');
      contDisco1.firstChild.appendChild(contDisco2);
      }
  
      if (listen.target.id === 'tower-cont2') {
        console.log('tower2');
    }
    
    if (listen.target.id === 'tower-cont3') {
        console.log('tower3');
    }
}


function getDisc (event) {
    if (event.target.id === "D1") {
        console.log("D1")

    }
    
    if (event.target.id === "D2") {
        console.log("D2")

    }
    
    if (event.target.id === "D3") {
        console.log("D3")
    }
    
    if (event.target.id === "D4") {
        console.log("D4")
    }
}

// function getDisc(event) {
//   if (event.target.id === 'tower-cont1') {
    // console.log('tower1');
    //   }
    //   towerCont1.firstChild.appendChild(towerCont2);

    //   if (event.target.id === 'tower-cont2') {
        // console.log('tower2');
    // }

    // if (event.target.id === 'tower-cont3') {
        // console.log('tower3');
    // }
//  }



//-------------------------------------------------------------


// const discos = document.getElementById("contdisco")


// const mensagem = document.getElementById("msg");
// const paragrafo = document.getElementById("para1")
// const span = document.getElementById("parabens")


// function disappear(){
//     mensagem.style.display = "none";
// }
// disappear()

// function delay(){
//     setTimeout(function(){disappear()},2000);
//   }
// delay()

// const ganhou = function(){
//     for(var i = 0; i < contDisco3.length; i++) 
//     if(discos[i].towerCont3 !=3) {
//         return mensagem
//     };
//    }
   


