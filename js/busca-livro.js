const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", submitSearch);

function displayBooks(data) { //data é a resposta da API
  result.innerHTML = "";
  data.title.forEach((book) => {
    const bookId = book.isbn; // PAra usar quando for criar un link para os detalhes do livro
    const bookImage = book["@uri"];
    result.innerHTML += `<a href="detalhe-livro.html?bookId=${bookId}"><img src="${bookImage}"></a>`;
  });
}

function submitSearch(event) {
  event.preventDefault();
  result.innerHTML = `carregando...`;

  const book = event.target.book.value;
  searchBook(book, displayBooks);
}

