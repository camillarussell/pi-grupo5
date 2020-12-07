const query = new URLSearchParams(location.search);
const bookId = query.get("bookId");
const cardResult = document.querySelector("#card-result");

function meuCallback(bookData) {
  console.log(bookData);
  cardResult.innerHTML = `
  <div class="left-card">
  <h2><span id="title-card">Título:</span> ${bookData.titleweb}</h2>
  <p><strong>Autor:</strong> ${bookData.authorweb}</p>
  <p><strong>Data de publicação:</strong> ${bookData.onsaledate}</p>
  <p>${bookData.pages} páginas</p>
  </div>
  <div class="right-card">
  <img src="${bookData["@uri"]}">
  </div>
  `;
}

getBookDetails(bookId, meuCallback);
