// definindo variaveis globais

let local = document.getElementById("localTabela");
let dados = [
    {nome:"Sapato", descricao:"Sapato Preto em couro", qtd:10},
    {nome:"Chinelo", descricao:"Chinelo de alças", qtd:100},
    {nome:"Camisa", descricao:"Camisas de time", qtd:5},
    {nome:"Bermuda", descricao:"Bermudas masculinas", qtd:32},
    {nome:"Toalha", descricao:"Jogo de toalhas coloridas", qtd:8},
    {nome:"Lençol", descricao:"Jogo de lençõis de casal", qtd:22},
    {nome:"Panela", descricao:"Jogo de panelas antiaderentes", qtd:26},
    {nome:"Talheres", descricao:"Conjunto de facas, garfos e colheres", qtd:16},
    {nome:"Torneira", descricao:"Torneira multifunções", qtd:35},
            ]

function criaElementos(){
    let tabela = document.createElement("table");
    let linha = document.createElement("tr");
    let cab1 = document.createElement("th");
    let cab2 = document.createElement("th");
    let cab3 = document.createElement("th");

    cab1.innerHTML = "Item";
    cab2.innerHTML = "Descrição";
    cab3.innerHTML = "Quantidade";

    linha.appendChild(cab1);
    linha.appendChild(cab2);
    linha.appendChild(cab3);
    tabela.appendChild(linha);

    let conta = 1;
    //for (let i = 0; i < 5; i++) {
    for (let item in dados) {
        let novaLinha = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");

        //col1.innerHTML = "linha" + conta + "coluna 1";
        //col2.innerHTML = "linha" + conta + "coluna 2";
        //col3.innerHTML = "linha" + conta + "coluna 3";
        col1.innerHTML = dados[item].nome;
        col2.innerHTML = dados[item].descricao;
        col3.innerHTML = dados[item].qtd;
        //conta++;
        novaLinha.appendChild(col1);
        novaLinha.appendChild(col2);
        novaLinha.appendChild(col3);
        tabela.appendChild(novaLinha);
    }
    local.appendChild(tabela);

    let bo1 = document.createElement("input");
    bo1.type = "submit";
    bo1.value = "Enviar Dados";
    bo1.classList.add("meu-botao");

    let bo2 = document.createElement("input");
    bo2.type = "reset";
    bo2.value = "Mostrar mensagem"
    bo2.classList.add("meu-botao");
    bo2.addEventListener("click", 
        function() {alert("Estoque limitado")});

    local.appendChild(bo1);
    local.appendChild(bo2);
}
criaElementos();