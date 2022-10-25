let filmesAdicionados = [];

function adicionarFilme() {
    let campoFilmeFavorito = document.getElementById("filme").value;
    if (campoFilmeFavorito.endsWith(".png" || ".jpg" || ".jpeg") && campoFilmeFavorito != filmesAdicionados) {
            listarFilmesNaTela(campoFilmeFavorito);
            filmesAdicionados.push(campoFilmeFavorito);
        } else if (campoFilmeFavorito == filmesAdicionados) {
            alert("O filme já foi add");
        } else {
            alert("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    let elementoFilmeFavorito = "<img src=" + filme + ">";
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

