//DEPENDENCIES and CONFIGURATIONS
const express = require('express');
const app = express();

//ROUTES
app.get('/', (request, response) => {
    response.send("You Made It to the Back End of the Budgeting App. Hurrah!")
});


app.get("/universe", (request, response) => {
    response.send("Hello Universe!");
  });



//EXPORT
module.exports = app;
