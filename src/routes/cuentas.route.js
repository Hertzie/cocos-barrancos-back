const router = require('express').Router();
const cuentasController = require('../controllers/cuentas.controller');

router.post('/cuenta', cuentasController.cobrarPedido);

module.exports = router;