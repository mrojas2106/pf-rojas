const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-hamburguesa");
const closeMenuBtn = document.querySelector(".general-conteiner");

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



