const headers = { accept: "application/json" };
const options = { headers };

function searchBook(book, callback) {
  fetch(
    `https://reststop.randomhouse.com/resources/titles?search=${book}&max=20`,
    options
  ).then(function (response) {
    response.json().then(function (data) {
      callback(data);
    });
  });
}
