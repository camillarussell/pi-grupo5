const headers = { accept: "application/json" };
const options = { headers };

function getAuthorDetails(authorId, callback) {
  fetch(
    `https://reststop.randomhouse.com/resources/authors/${authorId}`,
    options
  ).then(function (response) {
    response.json().then(function (data) {
      callback(data);
    });
  });
}
