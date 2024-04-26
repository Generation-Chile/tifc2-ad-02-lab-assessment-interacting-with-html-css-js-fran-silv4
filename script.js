//Cambiar el primer "Hola Mundo" por "Adiós"
document.getElementById("encabezado").innerHTML = "Adiós";

//darle color de fondo
document.body.style.backgroundColor ="papayawhip";

//cambiar encabezado a color naranja
const naranja = document.getElementById("encabezado-2");
naranja.style.color = "orange";

//agregar un encabezado que cambie a color café cuando se clickea
const encabezadoMarron = document.createElement ('h2');
encabezadoMarron.textContent = "Click en este encabezado"
encabezadoMarron.addEventListener("click", function() {
  this.style.color = "brown";
});
document.body.appendChild(encabezadoMarron)

