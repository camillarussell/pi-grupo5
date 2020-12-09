const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", submitSearch);

function displayAuthors(data) { //data é a resposta da API
  result.innerHTML = "";
  console.log(data);
  data.author.forEach((author) => {
    const authorId = author.authorid;
    const authorName = author.authordisplay;
    result.innerHTML += `<a id="link-author" href="detalhe-autor.html?authorId=${authorId}">${authorName}</a>`;
  });
}

function submitSearch(event) {
  event.preventDefault();
  result.innerHTML = `<p class="loading">Carregando...</p>
  <img class="loading" src="./img/loading.gif"></img>`;

  const author = event.target.author.value;
  searchAuthor(author, displayAuthors);
}

