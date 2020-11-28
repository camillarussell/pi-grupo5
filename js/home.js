const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", bookSearch);

function displayBooks(data) {
  result.innerHTML = "";
  data.title.forEach((book) => {
    const bookId = book.isbn; // PAra usar quando for criar un link para os detalhes do livro
    const bookImage = book["@uri"];
    result.innerHTML += `<img src="${bookImage}">`;
  });
}

function bookSearch(event) {
  event.preventDefault();
  result.innerHTML += `carregando...`;

  const book = event.target.book.value;
  searchBook(book, displayBooks);
}
