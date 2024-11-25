function mostrarModal() {
    Swal.fire({
        title: 'Entrevista con Rafficer',
        html: `
            <p><strong>¿Puedes presentarte y explicar tu relación con Proton?</strong></p>
            <p>Mi nombre es Rafficer, es el nombre que utilizo en todos los lugares donde interactúo con Proton. Me siento como si fuera un miembro más de la comunidad, aunque obviamente noto que he contribuido mucho más al subreddit y a los proyectos de Proton que el miembro promedio de la comunidad.</p>
            <p>Todo empezó cuando yo era muy activo en Proton Mail y Privacidad Subreddits...</p>
            <p><strong>¿Fue a través de Reddit que se enteró de Proton en primer lugar?</strong></p>
            <p>En realidad, no fue así. Creé mi cuenta de Proton Mail a finales de 2016 y, después de crearla, descubrí mucho sobre la importancia de la privacidad. Luego, me volví mucho más consciente de la privacidad.

Descubrí Proton a través de un sitio de noticias que había escrito sobre un proveedor de correo electrónico cifrado: era una descripción general de Proton Mail. Pensé que era bastante genial, parecía un gran proyecto y creía que se convertiría en algo más grande. Entonces me registré y reservé mi nombre en la plataforma para asegurarme de que nadie más pudiera tomarlo.

Por supuesto, crear una nueva cuenta de correo electrónico sin que se envíen mensajes a ella es bastante inútil. Antes de eso, usaba Gmail y, aunque sabía que no era muy privado, no había hecho nada al respecto.

Sabía que debía cambiar a Proton Mail, y además es una forma genial de interactuar con el correo electrónico, sabiendo que todo lo que escribes allí es privado. Saber que podía escribir cualquier cosa allí y que nadie podía verlo me fascinó. Por eso también me interesé mucho en cómo funciona el cifrado en sí.

Si tienes un documento físico importante guardado bajo llave en una caja fuerte, siempre será posible acceder a él, sin importar lo segura que sea esa caja fuerte. Lo que me fascina del cifrado en general es que si cifro algo con un algoritmo de cifrado fuerte, sé que es seguro.

Por supuesto, esto es sólo por el momento, y nunca se sabe cómo evolucionarán las computadoras y el cifrado; el cifrado de hace 20 o 30 años es inútil hoy en día. Pero por el momento, puedo decir con confianza que mi archivo está seguro y que nadie más puede acceder a él. Así que eso es lo que despertó mi interés en usar Proton Mail.

A partir de ahí, fue principalmente culpa de Proton Mail que me metiera aún más en el tema de la privacidad. He aprendido mucho a través del subreddit; en ese sentido, Proton también me ayudó. He aprendido un montón de cosas. Es más como si Proton Mail me hubiera encontrado y me hubiera llevado a la privacidad, en lugar de lo contrario.</p>
            
        `,
        icon: 'info',
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'modal-sweetalert',
        },
        width: '80%',
    });
}


document.querySelector('.boton-leer-mas').addEventListener('click', function () {
    const boton = this;
    boton.style.transition = 'transform 0.2s ease';
    boton.style.transform = 'scale(1.2)';

    setTimeout(() => {
        boton.style.transform = 'scale(1)';
    }, 200);
});



document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.createElement("section");
    carrusel.classList.add("carrusel-container");
    document.body.appendChild(carrusel); // Añadimos el carrusel al body

    const imagenes = [
        "../img/Cumunidad/comunidad-1.jpeg",
        "../img/Comunidad/fondo3.jpeg",
        "../img/Comunidad/fondo4.jpeg"
    ];

    let indiceActual = 0;

    // Crear imágenes dinámicamente
    imagenes.forEach((imagen, index) => {
        const imagenElemento = document.createElement("span");
        imagenElemento.classList.add("carrusel-imagen");
        imagenElemento.style.backgroundImage = `url('${imagen}')`;
        if (index === 0) imagenElemento.classList.add("visible");
        carrusel.appendChild(imagenElemento);
    });

    // Función para cambiar de imagen
    const cambiarImagen = () => {
        const imagenesCarrusel = document.querySelectorAll(".carrusel-imagen");
        imagenesCarrusel[indiceActual].classList.remove("visible");
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenesCarrusel[indiceActual].classList.add("visible");
    };

    // Cambiar imagen cada 3 segundos
    setInterval(cambiarImagen, 3000);
});
