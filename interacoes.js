function mostrarConteudo(id) {
    const conteudo = document.getElementById(id);

    if (conteudo) {
        conteudo.style.display =
            conteudo.style.display === "block" ? "none" : "block";
    }
}

const curiosidades = {
    cientista: {
        titulo: "Pequena cientista",
        texto: "No 7º ano, participei de uma feira de Ciências e criei um jogo de luz utilizando energia de batata. Uma das minhas primeiras experiências envolvendo criatividade e ciência."
    },

    fiocruz: {
        titulo: "Um RPG sobre a Fiocruz",
        texto: "Desenvolvi, junto com um amigo, um RPG com o objetivo de desmistificar a ideia de que a Fiocruz trabalha apenas com vacinas e apresentar outras contribuições da instituição."
    },

    kizomba: {
        titulo: "Movimento estudantil",
        texto: "Faço parte do movimento jovem e estudantil Kizomba, uma experiência que também faz parte da minha trajetória e da maneira como enxergo a participação coletiva."
    }
};

function mostrarCuriosidade(tipo) {
    document.getElementById("titulo-curiosidade").textContent =
        curiosidades[tipo].titulo;

    document.getElementById("texto-curiosidade").textContent =
        curiosidades[tipo].texto;

    document.getElementById("alerta-curiosidade").style.display = "flex";
}

function fecharCuriosidade() {
    document.getElementById("alerta-curiosidade").style.display = "none";
}
