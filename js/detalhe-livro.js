const query = new URLSearchParams(location.search);
const bookId = query.get("bookId");
const cardResult = document.querySelector("#card-result");

function meuCallback(bookData) {
  console.log(bookData);
  cardResult.innerHTML = `
<div>
<h2>Título: ${bookData.titleweb}</h2>
<img src="${bookData["@uri"]}">
<p>Data de lançamento: ${bookData.onsaledate}</p>
<p>Autor: ${bookData.author}</p>
<p>${bookData.pages} páginas.</p>
</div>
`;
}

getBookDetails(bookId, meuCallback);
