// Obtener los elementos HTML por su ID
const boton = document.getElementById('cambiarBtn');
const titulo = document.getElementById('titulo');
const parrafo = document.getElementById('parrafo');

// Función para cambiar los elementos HTML
function cambiarElementos() {
    // Cambiar el texto del título
    titulo.innerHTML = '¡El título ha sido cambiado!';

    // Cambiar el texto del párrafo
    parrafo.innerHTML = 'El contenido de este párrafo también ha sido modificado.';
    parrafo.style.color = "blue";

    // Cambiar el texto del botón
    boton.innerHTML = '¡Hola Mundo!';
}

// Añadir un evento al botón para que ejecute la función cuando se haga clic
boton.addEventListener('click', cambiarElementos);
