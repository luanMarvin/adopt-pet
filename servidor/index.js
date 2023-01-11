const express = require('express');
const database = require('./database');

const app = express();
database.dbConnection();


app.listen(8080, () => console.log('Server is listening (127.0.0.1:8080). Open the Client Application.'));
