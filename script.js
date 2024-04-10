// Obtén el icono de la barra de navegación
/*document.querySelector('.iconoHamburguesa').addEventListener('click', function(e) { 
    console.log("Icono de hamburguesa clicado");
    document.querySelector('.contenedorBarra .listaNav').classList.toggle('show');
});*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

document.querySelector('.menu-btn').addEventListener('click', activarMenu);

let linea1 = document.querySelector('.btn-line1');
let linea2 = document.querySelector('.btn-line2');
let linea3 = document.querySelector('.btn-line3');

function activarMenu() {
  linea1.classList.toggle('activelinea1__btn-menu');
  linea2.classList.toggle('activelinea2__btn-menu');
  linea3.classList.toggle('activelinea3__btn-menu');
}
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('.menu-btn').addEventListener("mouseover", cambiarFondo);
let cambioColor1 = document.querySelector('.btn-line1');
let cambioColor2 = document.querySelector('.btn-line2');
let cambioColor3 = document.querySelector('.btn-line3');

function cambiarFondo() {
  cambioColor1.style.backgroundColor = "darkblue";
  cambioColor2.style.backgroundColor = "skyblue";
  cambioColor3.style.backgroundColor = "white";
}
menuBtn.addEventListener('mouseover', cambiarFondo);

document.querySelector('.menu-btn').addEventListener("mouseout", cambiarFondo2);
let cambioColor4 = document.querySelector('.btn-line1');
let cambioColor5 = document.querySelector('.btn-line2');
let cambioColor6 = document.querySelector('.btn-line3');

function cambiarFondo2() {
  cambioColor4.style.backgroundColor = "";
  cambioColor5.style.backgroundColor = "";
  cambioColor6.style.backgroundColor = "";
}
menuBtn.addEventListener('mouseout', cambiarFondo2);

//nuevo menu hamburguesa
/*const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});*/






// Obtén todos los enlaces internos de la página
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Agrega un evento de clic a cada enlace interno
linksInternos.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtén el destino del enlace interno
        const destino = document.querySelector(this.getAttribute('href'));

        // Verifica si el destino existe
        if (destino) {
            // Usa el método scrollIntoView con el comportamiento suave
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});