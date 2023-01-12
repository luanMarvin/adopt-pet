const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    animalName: String,
    animalBirth: Date,
    animalType: String,
    animalGender: String,
    animalRace: String
    //Obs* Necessário guardar fotos para os animais.
});

const AnimalModel = mongoose.model('animals', schema);

module.exports = AnimalModel;