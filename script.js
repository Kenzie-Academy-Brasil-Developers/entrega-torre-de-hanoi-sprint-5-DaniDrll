let body = document.getElementsByTagName("body");

// criar palito

let palito = document.createElement("div");
palito.classList.add("palito")
palito.id = "palito1"
conteiner1.appendChild(palito)

// criar 4 discos no palito

let disk1 = document.createElement("div");
disk1.classList.add("disco1")
disk1.id = "D1"
palito.appendChild(disk1)

let disk2 = document.createElement("div");
disk2.classList.add("disco2")
disk2.id = "D2"
palito.appendChild(disk2)

let disk3 = document.createElement("div");
disk3.classList.add("disco3")
disk3.id = "D3"
palito.appendChild(disk3)

let disk4 = document.createElement("div");
disk4.classList.add("disco4")
disk4.id = "D4"
palito.appendChild(disk4)

// for(let i = 1; i <= 4; i++) {
//   let disco = document.createElement("div");
//   disco.classList.add("disco"+i)
//   disco.id = "D" +i
//   palito.appendChild(disco)
// }


//palito 2

let palitoo = document.createElement("div");
palitoo.classList.add("palito")
palitoo.id = "palito2"
conteiner2.appendChild(palitoo)

//palito 3

let palitooo = document.createElement("div");
palitooo.classList.add("palito")
palitooo.id = "palito3"
conteiner3.appendChild(palitooo)

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
    if (palito3.childElementCount === 4) {
      alert("Parabens voce ganhou!!!")
    }
  }

}
