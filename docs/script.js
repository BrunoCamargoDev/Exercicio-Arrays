// Array que vai armazenar os dados das pessoas (cada pessoa é um objeto {nome, idade})
let dados = [];

// Contador de quantas pessoas foram cadastradas
let contador = 0;

// Função chamada quando o usuário clica no botão "Cadastrar pessoa"
function adicionarDado() {
    // Pega os valores digitados pelo usuário e remove espaços extras
    let novoNome = document.getElementById("pessoaNome").value.trim();
    let idade = document.getElementById("pessoaIdade").value.trim();

    // Validação: se algum campo estiver vazio, mostra alerta e interrompe
    if (!novoNome || !idade) {
        alert("Por favor, digite um nome e uma idade.");
        return; // sai da função
    }

    // Verifica se a pessoa já está cadastrada (mesmo nome e idade)
    // some() retorna true se algum elemento do array passar no teste
    if (dados.some(p => p.nome === novoNome && p.idade == idade)) {
        alert("Pessoa já cadastrada!");
        return;
    }

    // Adiciona a nova pessoa no array como objeto
    dados.push({ nome: novoNome, idade: idade });

    // Incrementa o contador de pessoas cadastradas
    contador++;

    // Limpa os campos de input e foca novamente no campo do nome
    document.getElementById("pessoaNome").value = '';
    document.getElementById("pessoaIdade").value = '';
    document.getElementById("pessoaNome").focus();

    // Atualiza o contador na tela
    document.getElementById("contador2").innerText = "Total de pessoas: " + contador;

    // Atualiza a lista completa de pessoas cadastradas na tela
    atualizarLista();
}

// Função para mostrar todos os dados do array na lista HTML
function atualizarLista() {
    const lista = document.getElementById("listaPessoas");
    lista.innerHTML = ""; // limpa a lista antes de adicionar

    // Percorre cada pessoa no array e cria um <li> com o nome e idade
    dados.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nome} (${p.idade} anos)`;
        lista.appendChild(li);
    });
}

// Função chamada quando o usuário clica no botão "Buscar"
function filtrarNomes() {
    // Pega o valor do input de busca e transforma em minúsculo
    let filtro = document.getElementById("buscarNome").value.trim().toLowerCase();

    // Filtra o array de pessoas que contém o termo de busca no nome
    let resultados = dados.filter(p => p.nome.toLowerCase().includes(filtro));

    // Se não encontrou nada, mostra alerta
    if (resultados.length === 0) {
        alert("Nenhum resultado encontrado.");
    } else {
        // Caso tenha resultados, mostra na tela cada pessoa encontrada
        // map() transforma cada objeto em uma string formatada e join() adiciona <br> entre elas
        document.getElementById("resultadoBusca").innerHTML = resultados
            .map(p => `${p.nome} (${p.idade} anos)`)
            .join("<br>");
    }
}
