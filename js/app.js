const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-hamburguesa");
const closeMenuBtn = document.querySelector(".general-conteiner");
const apareceTitulo = document.querySelector(".efectoDesaparecer-no");
const boxes = document.querySelectorAll(".tarjeta");

function abrirMenu() {
  menu.classList.add("menu-active");
  openMenuBtn.classList.add("noMostrar")
}

function cerrarMenu() {
  menu.classList.remove("menu-active")
  openMenuBtn.classList.remove("noMostrar")
}

openMenuBtn.addEventListener("click", abrirMenu);
closeMenuBtn.addEventListener("click", cerrarMenu);

window.onscroll = function(){

  scroll = document.documentElement.scrollTop;

  if (scroll >= 130){
    apareceTitulo.classList.add("efectoDesaparecer-si");
    apareceTitulo.classList.add("titulo-position");
  } 

 if (scroll >=280) {
  for (const box of boxes) {
    box.classList.add("efectoDesaparecer-si");
  }
} 

}

if (window.matchMedia("(max-width: 450px)").matches) {
  window.onscroll = function(){

    scroll = document.documentElement.scrollTop;
  
    if (scroll >= 350){
      apareceTitulo.classList.add("efectoDesaparecer-si");
      apareceTitulo.classList.add("titulo-position");
    } 
  
   if (scroll >=480) {
    for (const box of boxes) {
      box.classList.add("efectoDesaparecer-si");
    }
  } 
  
  }
} 


