const AnimalModel = require('../models/animals');
const mongoose = require('mongoose');

//Post

async function post(req, res){
    const {
        animalName,
        animalBirth,
        animalType,
        animalGender,
        animalRace
    } = req.body

    const databaseRegister = new AnimalModel({
        animalName,
        animalBirth,
        animalType,
        animalGender,
        animalRace
    })

    databaseRegister.save();
    res.send(databaseRegister)
}

module.exports = {
    post
}