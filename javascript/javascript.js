function mostrarInfo() {
    let texto = document.getElementById("informacion");
    let boton = document.getElementById("boton");

    if (texto.style.display === "none") {
        texto.style.display = "block";
        boton.textContent = "Ocultar información";
    } else {
        texto.style.display = "none";
        boton.textContent = "Ver información";
    }
}