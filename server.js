let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 3000;
//let book = require('./app/routes/book');


//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => res.json({status: 200, message: "Welcome to our Bookstore!"}));

// app.route("/book")
//     .get(book.getBooks)
//     .post(book.postBook);
// app.route("/book/:id")
//     .get(book.getBook)
//     .delete(book.deleteBook)
//     .put(book.updateBook);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
