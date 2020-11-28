const headers = { accept: "application/json" };
const options = { headers };

function getBookDetails(bookId, callback) {
  fetch(
    `https://reststop.randomhouse.com/resources/titles/${bookId}`,
    options
  ).then(function (response) {
    response.json().then(function (data) {
      callback(data);
    });
  });
}