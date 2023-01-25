const AnimalModel = require('../models/animals');
const mongoose = require('mongoose');

//Post

async function postPet(req, res){
    const {
        animalName,
        animalBirth,
        animalType,
        animalGender,
        animalRace,
        animalDescription
    } = req.body

    const databaseRegister = new AnimalModel({
        animalName,
        animalBirth,
        animalType,
        animalGender,
        animalRace,
        animalDescription
    })

    databaseRegister.save();
    res.send(databaseRegister)
}

module.exports = {
    postPet
}