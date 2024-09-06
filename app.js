function pesquisar() {

    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase()
    //optei por colocar para aparecer todo resultado de pesquisa ao clicar pesquisar
    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Área do Doador</a>
            </div>
        `;
        }
    }
    section.innerHTML = resultados;
}
