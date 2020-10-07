const btn = document.getElementById("button");
btn.addEventListener("click", obtenerDatos);
const container = document.getElementById("container");



function obtenerDatos(event) {
    event.preventDefault()
    for (let i = 0; i <= 30; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrar(resultado));
    }
}

function mostrar(resultado) {
    let 
        html = ` <div class ="cotenedores">
                <img src="${resultado.sprites.front_default}" alt="">
                <img src="${resultado.sprites.back_default}" alt="">
                 <p> ${resultado.name}</p>
                </div>
                 `
    container.innerHTML += html;
}

