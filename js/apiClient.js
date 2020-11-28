const BASE_URL = "https://reststop.randomhouse.com";
const headers = { accept: "application/json" };
const options = { headers };

function callApi(endpoint, callback) {
  fetch(BASE_URL + endpoint, options).then(function (response) {
    response.json().then(function (data) {
      callback(data);
    });
  });
};

function searchBook(book, callback){
    const endpoint = `/resources/titles?search=${book}&max=20`;
    callApi(endpoint, callback);
};

function getBookDetails(bookId, callback){
    const endpoint = `/resources/titles/${bookId}`;
    callApi(endpoint, callback);
};

function searchAuthor(lastName, callback){
    const endpoint = `/resources/authors?lastName=${lastName}`;
    callApi(endpoint, callback);
};

function getAuthorDetails(authorId, callback){
    const endpoint = `/resources/authors/${authorId}`;
    callApi(endpoint, callback);
}

//getBookDetails("5060121251762", console.log);
