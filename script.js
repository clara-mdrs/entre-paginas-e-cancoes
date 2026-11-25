function mostrarConteudo(id) {
    const conteudo = document.getElementById(id);

    if (conteudo) {
        conteudo.style.display =
            conteudo.style.display === "block" ? "none" : "block";
    }
}