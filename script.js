// Criando um array vazio
const personagem = [];

// Criando a classe com nome adequado (usar PascalCase para classes)
class Product {
  constructor(nome, anime, descricao) {
    this.nome = nome;
    this.anime = anime;
    this.descricao = descricao;
  }
}

// Pegando os inputs do formulário
const inputNome = document.getElementById("input-nome");
const inputAnime = document.getElementById("input-anime");
const inputDescricao = document.getElementById("input-descricao");

const btnSave = document.getElementById("btn-save");
const btnList = document.getElementById("btn-list");

// Elementos onde a lista será renderizada
const ulListProducts = document.getElementById("product-list");

// Adicionando produto no array
btnSave.addEventListener("click", () => {
  // Validação: campos não podem estar vazios
  if (
    inputNome.value.trim() === "" ||
    inputAnime.value.trim() === "" ||
    inputDescricao.value.trim() === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  // Criando objeto e adicionando no array
  const novoProduto = new Product(inputNome.value, inputAnime.value, inputDescricao.value);
  personagem.push(novoProduto);

  // Limpa os campos
  inputNome.value = "";
  inputAnime.value = "";
  inputDescricao.value = "";

  console.log("Produto salvo:", novoProduto);
});

// Função que exibe todos os produtos na tela
const listProduct = () => {
  // Limpa a lista atual
  ulListProducts.innerHTML = "";

  // Cria e adiciona cada item do array
  personagem.forEach((p, index) => {
    createList(index, p.nome, p.anime, p.descricao);
  });
};

// Corrigindo forma de chamar a função no evento (sem parênteses)
btnList.addEventListener("click", listProduct);

// Cria o elemento visual para cada item
function createList(index, nome, anime, descricao) {
  const itemList = document.createElement("li");
  itemList.classList.add("itemList");

  const divInfos = document.createElement("div");
  divInfos.classList.add("divInfos");

  const nomeProduct = document.createElement("h3");
  nomeProduct.innerText = nome;

  const animeProduct = document.createElement("p");
  animeProduct.innerText = `Anime: ${anime}`;

  const descricaoProduct = document.createElement("p");
  descricaoProduct.innerText = `Descrição: ${descricao}`;

  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");

  btnEdit.innerText = "Editar";
  btnEdit.style.backgroundColor = "yellow";

  btnDelete.innerText = "Deletar";
  btnDelete.style.backgroundColor = "red";
  btnDelete.style.marginRight = "10px";

  // Evento para editar
  btnEdit.addEventListener("click", () => {
    inputNome.value = personagem[index].nome;
    inputAnime.value = personagem[index].anime;
    inputDescricao.value = personagem[index].descricao;

    // Remove da lista para atualizar ao salvar novamente
    personagem.splice(index, 1);
    listProduct();
  });

  // Evento para deletar
  btnDelete.addEventListener("click", () => {
    personagem.splice(index, 1);
    listProduct();
  });

  divInfos.appendChild(nomeProduct);
  divInfos.appendChild(animeProduct);
  divInfos.appendChild(descricaoProduct);

  itemList.appendChild(divInfos);
  itemList.appendChild(btnDelete);
  itemList.appendChild(btnEdit);

  ulListProducts.appendChild(itemList);
}
