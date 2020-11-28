const headers = { accept: "application/json" };
const options = { headers };

function searchAuthor(lastName, callback) {
  fetch(
    `https://reststop.randomhouse.com/resources/authors?lastName=${lastName}`,
    options
  ).then(function (response) {
    response.json().then(function (data) {
      callback(data);
    });
  });
}
