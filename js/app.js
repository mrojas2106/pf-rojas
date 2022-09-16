const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-hamburguesa");
const closeMenuBtn = document.querySelector(".general-conteiner");

function abrirMenu() {
  menu.classList.add("menu-active");
}

function cerrarMenu() {
  menu.classList.remove("menu-active")
}

openMenuBtn.addEventListener("click", abrirMenu);
closeMenuBtn.addEventListener("click", cerrarMenu);



