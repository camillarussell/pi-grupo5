const query = new URLSearchParams(location.search);
const bookId = query.get("bookId");
alert(bookId);