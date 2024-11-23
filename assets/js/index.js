let palabras = document.querySelectorAll(".palabra");

palabras.forEach((palabra) => {
    let letras = palabra.textContent.split("");
    palabra.textContent = "";
    letras.forEach((letra) => {
        let span = document.createElement("span");
        span.textContent = letra;
        span.className = "letra";
        palabra.append(span);
    })
});

let currentPalabraIndex = 0;
let maxPalabaraIndex = palabras.length - 1;
palabras[currentPalabraIndex].style.opacity = "1";

let rotarTexto = () => {
    let currentPalabra = palabras[currentPalabraIndex];
    let nextPalabra = currentPalabraIndex === maxPalabaraIndex ? palabras[0] : palabras[currentPalabraIndex + 1];

    Array.from(currentPalabra.children).forEach((letra, i) => {
        setTimeout(() => {
            letra.className = "letra out";
        }, i * 80);
    });

    nextPalabra.style.opacity = "1";
    Array.from(nextPalabra.children).forEach((letra, i) => {
        letra.className = "letra behind";
        setTimeout(() => {
            letra.className = "letra in";
        }, 340 + i * 80);
    });

    currentPalabraIndex =
        currentPalabraIndex === maxPalabaraIndex ? 0 : currentPalabraIndex + 1;
};

rotarTexto();
setInterval(rotarTexto, 4000);