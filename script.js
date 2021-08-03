const discos = document.getElementById("contdisco")
const contDisco1 = document.getElementById("contDisco1");
const contDisco2 = document.getElementById("contDisco2");
const contDisco3 = document.getElementById("contDisco3");

const disco1 = document.getElementById("D1");
const disco2 = document.getElementById("D2");
const disco3 = document.getElementById("D3");
const disco4 = document.getElementById("D4");

const mensagem = document.getElementById("msg");
const paragrafo = document.getElementById("para1")
const span = document.getElementById("parabens")


function disappear(){
    mensagem.style.display = "none";
}
disappear()

function delay(){
    setTimeout(function(){disappear()},2000);
  }
delay()

const ganhou = function(){
    for(var i = 0; i < contDisco3.length; i++) 
    if(discos[i].towerCont3 !=3) {
        return mensagem
    };
   }
   



let container = document.getElementById("conteiner");
container.addEventListener("click", getDisc);

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

let rod = document.getElementsByClassName("palito");
for (let i = 0; i < rod.length; i++) {
    rod[i].addEventListener("click", rodSwap);
}


function rodSwap (listen) {
    if (listen.target.id === "palito1") {
        console.log("P1")
    }
    
    if (listen.target.id === "palito2") {
        console.log("P2")
        
    }

    if (listen.target.id === "palito3") {
        console.log("P3")
    }
}

