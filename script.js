const contDisco1 = document.getElementById('contDisco1');
const contDisco2 = document.getElementById('contDisco2');
const contDisco3 = document.getElementById('contDisco3');

const disco1 = document.getElementById('D1');
const disco2 = document.getElementById('D2');
const disco3 = document.getElementById('D3');
const disco4 = document.getElementById('D4');

const palito1 = document.getElementById('palito1');
const palito2 = document.getElementById('palito2');
const palito3 = document.getElementById('palito3');

//-----------------------------------------------------
let container1 = document.getElementById('conteiner1');
let container2 = document.getElementById('conteiner2');
let container3 = document.getElementById('conteiner3');

conteiner1.addEventListener('click', getDisc);
conteiner2.addEventListener('click', getDisc);
conteiner3.addEventListener('click', getDisc);


let holder = '';
function getDisc(event) {

if (holder === null) {
  holder = '';
}

let firstChild =  event.currentTarget.firstElementChild.firstElementChild;

  if (event.target.id === 'conteiner1') {
    if (holder === '') {
      // console.log(firstChild)

      

      holder = palito1.firstElementChild;
    }
    
    else if (firstChild === null) {
      
      if (holder !== null) { 

      console.log(holder)
      palito1.prepend(holder);
      holder = ''

      }
      
    }
    
    else if (holder != '') {

      if (holder !== null) { 

        if (holder.clientWidth > firstChild.clientWidth) {
          console.log(firstChild.clientWidth)
          holder = '';
        }
        

        if (holder.clientWidth < firstChild.clientWidth) { 
        palito1.prepend(holder);
        holder = '';
        }
      }
    }
  }



  if (event.target.id === 'conteiner2') {
    if (holder === '') {
      holder = palito2.firstElementChild;
    }

    
    
    else if (firstChild === null) {

      if (holder !== null) { 

        palito2.prepend(holder);
        holder = ''

      }
      
    }
    
    else if (holder != '') {

      if (holder !== null) { 
        console.log(holder)
        console.log(firstChild)
        if (holder.clientWidth > firstChild.clientWidth) {
          holder = '';
        }
        
        if (holder.clientWidth < firstChild.clientWidth) { 
          palito2.prepend(holder);
          holder = '';
        }
      }  
    }
  }



  if (event.target.id === 'conteiner3') {
    if (holder === '') {
      holder = palito3.firstElementChild;
    }

    else if (firstChild === null) {

      if (holder !== null) { 

        palito3.prepend(holder);
        holder = ''

      }
    }
    
    else if (holder != '') {

      if (holder !== null) {

        if (holder.clientWidth > firstChild.clientWidth) {
          console.log(firstChild.clientWidth)
          holder = '';
        }

        if (holder.clientWidth < firstChild.clientWidth) { 
        palito3.prepend(holder);
        holder = '';
        }
      }
    }
  }
}

const discos = document.getElementById('contdisco');

const mensagem = document.getElementById('msg');
const paragrafo = document.getElementById('para1');
const span = document.getElementById('parabens');

function disappear() {
  mensagem.style.display = 'none';
}

function delay() {
  setTimeout(function () {
    disappear();
  }, 2000);
}

const ganhou = function () {
  for (var i = 0; i < contDisco3.length; i++)
    if (discos[i].towerCont3 != 3) {
      return alert('ye');
    }
};

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

// if (listen.target.id === 'palito3') {
//   console.log('P3');
// }

// const regrasMovimento = (e) => {
//   if (test.lastChild == disco2) {
//     if (e.currentTarget.lastElementChild == disco1) {
//       return false;
//     }
//   }
//   if (test.lastChild == disco3) {
//     if (e.currentTarget.lastElementChild == disco1) {
//       return false;
//     }
//     if (e.currentTarget.lastElementChild == disco2) {
//       return false;
//     }
//   }
//   if (test.lastChild == disco4) {
//     if (e.currentTarget.lastElementChild == disco3) {
//       return false;
//     }
//     if (e.currentTarget.lastElementChild == disco2) {
//       return false;
//     }
//     if (e.currentTarget.lastElementChild == disco1) {
//       return false;
//     }
//   }
// };
