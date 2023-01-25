const router = require('express').Router();
const AnimalsController = require('../controllers/animals')

//PETs
//router.get('/pets/:id?', );
router.post('/pets', AnimalsController.post);


//Users

module.exports = router