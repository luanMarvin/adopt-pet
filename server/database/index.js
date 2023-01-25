const mongoose = require('mongoose');
//Remover Warnings do Mongo
mongoose.set('strictQuery', true);

const dbConnection = () => {
    //Abaixo o endereço para conexão do banco de dados do Mongo
    dbName = 'adopt-pet';
    dbURI = `mongodb://localhost:27017/${dbName}`;
    mongoose.connect(dbURI);

    const database = mongoose.connection;

    database.once('open', () => console.log(`Connected to Database at: ${dbURI}.`));
}

module.exports = {
    dbConnection
};
