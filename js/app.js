const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-hamburguesa");
const closeMenuBtn = document.querySelector(".general-conteiner");
const apareceTitulos = document.querySelectorAll(".efectoDesaparecer-no");
const boxes = document.querySelectorAll(".tarjeta");

function abrirMenu() {
  menu.classList.toggle("menu-active");
  openMenuBtn.classList.add("noMostrar");
}

function cerrarMenu() {
  menu.classList.remove("menu-active");
  openMenuBtn.classList.remove("noMostrar");
}

openMenuBtn.addEventListener("click", abrirMenu);
closeMenuBtn.addEventListener("click", cerrarMenu);

window.onscroll = function(){

  scroll = document.documentElement.scrollTop;

  if (scroll >= 130){

    for (const titulo of apareceTitulos) {
      titulo.classList.add("efectoDesaparecer-si");
      titulo.classList.add("titulo-position");
    }
    
  } 

 if (scroll >=280) {
  for (const box of boxes) {
    box.classList.add("efectoDesaparecer-si");
  }
} 

}

if (window.matchMedia("(max-width: 360px)").matches) {
  window.onscroll = function(){

    scroll = document.documentElement.scrollTop;
  
    if (scroll >= 550){
      for (const titulo of apareceTitulos) {
        titulo.classList.add("efectoDesaparecer-si");
        titulo.classList.add("titulo-position");
      }
    } 
  
   if (scroll >=680) {
    for (const box of boxes) {
      box.classList.add("efectoDesaparecer-si");
    }
  } 
  
  }
} 


