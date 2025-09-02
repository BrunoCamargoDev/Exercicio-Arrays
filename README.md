# 📝 Treino de Arrays e Inputs em JavaScript

Este projeto é um **exercício prático em JavaScript** para treinar manipulação de arrays, objetos, inputs do usuário e DOM.  
O usuário pode **cadastrar pessoas** com nome e idade, **listar**, **filtrar por nome** e visualizar o **total de cadastros**.

[Ver o projeto funcionando](https://brunocamargodev.github.io/Exercicio-Arrays/)

---

## 🚀 Funcionalidades

1. **Cadastro de pessoas**  
   - O usuário digita o nome e a idade e clica no botão **Cadastrar pessoa**.  
   - Cada pessoa é armazenada em um array como objeto `{ nome, idade }`.  
   - ✅ Validações:
     - Não permite campos vazios.  
     - Não permite duplicatas (mesmo nome e idade).

2. **Listagem completa**  
   - Exibe todas as pessoas cadastradas em uma lista (`<ul>`).  
   - Atualiza automaticamente sempre que uma nova pessoa é adicionada.  

3. **Contador de cadastros**  
   - Mostra na tela quantas pessoas já foram cadastradas. 📊

4. **Busca por nome**  
   - Permite filtrar pessoas que **contêm o termo digitado no nome**. 🔍  
   - A busca é **case-insensitive** (não diferencia maiúsculas e minúsculas).  
   - Exibe resultados diretamente na tela ou alerta caso não encontre. ⚠️

---

## 💻 Tecnologias utilizadas

- HTML5 🏗️  
- CSS3 🎨  
- JavaScript puro (ES6+) ✨

---

## 📂 Estrutura da pasta dos aquivos

/docs
- index.html      ← página principal do projeto
- style.css       ← estilos
- script.js       ← lógica em JavaScript

---

## 🛠️ Como usar

1. Abra o arquivo `index.html` (Clone o repositório ou baixe os arquivos) no navegador 🌐  
2. No campo **Cadastro de pessoas**, digite:
   - Nome 
   - Idade 
3. Clique em **Cadastrar pessoa** ➕  
4. A lista de pessoas cadastradas será exibida automaticamente ✅  
5. Para buscar uma pessoa, digite o nome no campo **Buscar pessoa** 🔍 e clique em **Buscar**  
6. A tela exibirá os resultados encontrados ou alertará se não houver correspondência ⚠️  

---

## 📚 Conceitos praticados

- Manipulação de **arrays e objetos** (`push`, `filter`, `some`, `map`, `forEach`) 📊  
- Manipulação do **DOM** (`getElementById`, `createElement`, `innerHTML`, `textContent`) 💻  
- **Validação de formulários** ✔️  
- Uso de **funções para organizar código** 🛠️  
- Atualização dinâmica de **listas e contadores** 🔄  

---

## 🎯 Próximos desafios

1. Adicionar botão **Remover pessoa** ❌ ao lado de cada item na lista  
2. Permitir **editar cadastro** ✏️ diretamente na lista  
3. Salvar os dados no **localStorage** 💾 para persistência após fechar o navegador  
4. Adicionar filtros adicionais, como **idade maior ou menor que X anos** 🔎

---

Desenvolvido como exercício para praticar **JavaScript e manipulação de arrays e DOM**. 💡
