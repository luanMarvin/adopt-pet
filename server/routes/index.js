const router = require('express').Router();
const AnimalsController = require('../controllers/animals')

//PETs

//G E T
//router.get('/pets/:id?', );
router.get('/pets', AnimalsController.getPet);

router.post('/pets', AnimalsController.postPet);


//Users

module.exports = router