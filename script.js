//alert("Hola este es mi Javascript");

// let nombre = "Andres";

// console.log(nombre);

//Elementos

//let contenidoTitulo ="Acerca de mi";

//let titulo = document.querySelector(".fa-solid fa-bars")
//titulo.innerHTML = contenidoTitulo;

// Condicionales

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//if(textoTitulo == acerca-de-mi){
//   texto.innerHTML = "otro" 
//} else {
//    console.log ("no se cumple")
//}

//Funcion

//let nombre = "David"
//let ciudad = "Medellin"
//let gusto = "nada"

//let parrafo = document.querySelector(".parrafo2")

//function cambiarTexto(nombre,ciudad,gusto) {
    //let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Suba. 
    //Me gusta el ${gusto} y salir a pasear en días de sol. 
    //Me encantaría aprender a programar para poder ayudar a las personas 
    //a mostrar lo que hacen.`;
//return contenido;
//}

//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function(){
  navBar =document.querySelector(".menu");
  navBar.classList.toggle("active");
};



const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});