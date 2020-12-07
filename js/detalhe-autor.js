const query = new URLSearchParams(location.search);
const authorId = query.get("authorId");
const authorResult = document.querySelector("#author-result");

function meuCallback(authorData) {
  console.log(authorData);
  authorResult.innerHTML = `
<div class="top-card">
<h2>${authorData.authordisplay}</h2>
</div>
<div class="botton-card">
<p><strong>Sobre o autor:</strong>
<br/>
${authorData.spotlight}</p>
</div>
`;
}

getAuthorDetails(authorId, meuCallback);
