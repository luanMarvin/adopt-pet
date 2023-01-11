const mongoose = require('mongoose');

//Remover Warnings do Mongo
mongoose.set('strictQuery', true);

const dbConnection = () => {
    //Abaixo o endereço para conexão do banco de dados do Mongo
    dbURI = 'mongodb://localhost:27018';
    mongoose.connect(dbURI);

    const database = mongoose.connection;

    database.once('open', () => console.log(`Connected to database at URI: ${dbURI}.`));

    //Tratamento de erro devido a conexão mal-sucedida ao MongoDB
    if (!database.once._listening){
        console.log("Couldn't connect to MongoDB, please check the installation or the URI.");
    }
}

module.exports = {
    dbConnection
};
