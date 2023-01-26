const AnimalModel = require('../models/animals');
const mongoose = require('mongoose');

//Get
async function getPet(req, res){
    const { id } = req.params
    try{
        const data = await AnimalModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

//Post
async function postPet(req, res){
    const {
        animalName,
        animalBirth,
        animalType,
        animalGender,
        animalRace,
        animalDescription,
        animalSize,
        animalTags
    } = req.body

    const databaseRegister = new AnimalModel({
        animalName,
        animalBirth,
        animalType,
        animalGender,
        animalRace,
        animalDescription,
        animalSize,
        animalTags
    })

    databaseRegister.save();
    res.send(databaseRegister)
}

module.exports = {
    getPet,
    postPet
}