const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    animalName: String, //Nome do animal
    animalBirth: Date, // Dia do nascimento
    animalType: String, // Gato ou Cachorro
    animalGender: String, // Genero
    animalRace: String // Raça do animal
    //Obs* Necessário guardar fotos para os animais.
});

const AnimalModel = mongoose.model('animals', schema);

module.exports = AnimalModel;