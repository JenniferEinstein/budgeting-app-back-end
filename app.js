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


app.get("/transactions", (request, response) => {
    response.send("/transactions - The index page. Index/GET/Read and Create/POST/Create!");
});

app.get("/transactions/:id", (request, response) => {
    response.send("/transactions:id - Show/GET/Read, Destroy/DELETE/Delete, and Update/PUT/Update)");
});

app.get("*", (request, response) => {
    response.send("Oh, no! There is no page here. 404");
});


//EXPORT
module.exports = app;
