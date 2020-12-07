const query = new URLSearchParams(location.search);
const authorId = query.get("authorId");
const cardResult = document.querySelector("#card-result");

function meuCallback(authorData) {
  console.log(authorData);
  cardResult.innerHTML = `
<div id="author-card">
<h2>${authorData.authordisplay}</h2>
<p><strong>Sobre o autor (apenas em inglês):</strong>
<br/>
${authorData.spotlight}</p>
</div>
`;
}

getAuthorDetails(authorId, meuCallback);
