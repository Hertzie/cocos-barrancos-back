const router = require('express').Router();
const configuracionesController = require('../controllers/configuraciones.controller');

router.post('/configuraciones/fondo', configuracionesController.configurarFondoCaja);
router.post('/configuraciones/corte', configuracionesController.configurarCantidadCorteTope);

module.exports = router;