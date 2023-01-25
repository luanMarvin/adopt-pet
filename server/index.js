const express = require('express');
const database = require('./database');
const routes = require("./routes");


const app = express();
database.dbConnection(); //Conectar com o mongoDB, ./database
app.use(express.json());
app.use("/api", routes);


app.listen(8080, () => console.log('Server is listening (127.0.0.1:8080). Open the Client Application.'));
