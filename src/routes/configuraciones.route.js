const router = require('express').Router();
const configuracionesController = require('../controllers/configuraciones.controller');

router.post('/configuraciones/fondo', configuracionesController.configurarFondoCaja);
router.post('/configuraciones/corte', configuracionesController.configurarCantidadCorteTope);
router.post('/configuraciones/paginas', configuracionesController.obtenerPaginasRol);
router.get('/tipo_servicio', configuracionesController.obtenerTipoRol);
router.get('/mesas', configuracionesController.obtenerMesas);

module.exports = router;