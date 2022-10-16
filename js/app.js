const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-hamburguesa");
const closeMenuBtn = document.querySelector(".general-conteiner");
const apareceTitulos = document.querySelectorAll(".efectoDesaparecer-no");
const boxes = document.querySelectorAll(".tarjeta");
const buttonModal1 = document.querySelector(".tarjeta__parrafo--button-1");
const buttonModal2 = document.querySelector(".tarjeta__parrafo--button-2");
const buttonModal3 = document.querySelector(".tarjeta__parrafo--button-3");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const cerrarModal1 = document.querySelector(".cerrar1");
const cerrarModal2 = document.querySelector(".cerrar2");
const cerrarModal3 = document.querySelector(".cerrar3");
const iframe1 = document.querySelector(".modal__iframe-1");
const iframe2 = document.querySelector(".modal__iframe-2");
const iframe3 = document.querySelector(".modal__iframe-3");
const slider = document.querySelector(".slider-conteiner");


function abrirMenu() {
  menu.classList.toggle("menu-active");
  openMenuBtn.classList.add("noMostrar");
}

function cerrarMenu() {
  menu.classList.remove("menu-active");
  openMenuBtn.classList.remove("noMostrar");
}

function abrirModal1() {
  modal1.classList.add("modal-active");
  iframe1.setAttribute("src", "https://www.youtube.com/embed/h-9RYiqyqjk");
}

function abrirModal2() {
  modal2.classList.add("modal-active");
  iframe2.setAttribute("src", "https://www.youtube.com/embed/9azO_bO9cyk");
}

function abrirModal3() {
  modal3.classList.add("modal-active");
  iframe3.setAttribute("src", "https://www.youtube.com/embed/rt-2cxAiPJk");
}

function cerrarModalf1() {
  modal1.classList.remove("modal-active");
  iframe1.removeAttribute("src");
}

function cerrarModalf2() {
  modal2.classList.remove("modal-active");
  iframe2.removeAttribute("src");
}

function cerrarModalf3() {
  modal3.classList.remove("modal-active");
  iframe3.removeAttribute("src");
}

function scrollToRight(){
slider.scrollLeft= 350;
}

openMenuBtn.addEventListener("click", abrirMenu);
closeMenuBtn.addEventListener("click", cerrarMenu);
buttonModal1.addEventListener("click", abrirModal1);
buttonModal2.addEventListener("click", abrirModal2);
buttonModal3.addEventListener("click", abrirModal3);
cerrarModal1.addEventListener("click", cerrarModalf1);
cerrarModal2.addEventListener("click", cerrarModalf2);
cerrarModal3.addEventListener("click", cerrarModalf3);



window.onscroll = function () {

  scroll = document.documentElement.scrollTop;

  if (scroll >= 130) {

    for (const titulo of apareceTitulos) {
      titulo.classList.add("efectoDesaparecer-si");
      titulo.classList.add("titulo-position");
    }

  }

  if (scroll >= 280) {
    for (const box of boxes) {
      box.classList.add("efectoDesaparecer-si");
    }
  }

}

if (window.matchMedia("(max-width: 360px)").matches) {
  window.onscroll = function () {

    scroll = document.documentElement.scrollTop;

    if (scroll >= 550) {
      for (const titulo of apareceTitulos) {
        titulo.classList.add("efectoDesaparecer-si");
        titulo.classList.add("titulo-position");
      }
    }

    if (scroll >= 680) {
      for (const box of boxes) {
        box.classList.add("efectoDesaparecer-si");
      }
    }

  }
}