const router = require('express').Router();
const cortesController = require('../controllers/cortes.controller');

router.post('/corte', cortesController.realizarCorte);
router.get('/corte/:id_corte', cortesController.detalleCorte);

module.exports = router;