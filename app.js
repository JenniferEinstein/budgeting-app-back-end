//note: Closely following the lab-express-sql-seed-read Tuner app, which was following the bookmarks2 app.


//DEPENDENCIES and CONFIGURATIONS
const express = require('express');
const app = express();
const cors = require("cors");

// === MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES
app.get('/', (request, response) => {
    response.send("You Made It to the Back End of the Budgeting App. Hurrah!")
});


// ROUTES that implement the index route that uses pg-promise to query the database
const transactionsController = require("./controllers/transactionsController");
app.use("/transactions", transactionsController);

// 404 PAGE
app.get("*", (request, response) => {
    response.send("Oh, no! There is no page here. 404");
});


//EXPORT
module.exports = app;
