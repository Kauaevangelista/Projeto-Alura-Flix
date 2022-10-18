function adicionarFilme() {
    var campoFilmeFavorito = document.getElementById("filme").value;
    if (campoFilmeFavorito.endsWith(".png" || ".jpg" || ".jpeg")) {
      listarFilmesNaTela(campoFilmeFavorito);
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}