const router = require('express').Router();
const pedidosController = require('../controllers/pedidos.controller');

router.get('/pedido/:iPedido', pedidosController.obtenerDetallePedido);
router.post('/pedido', pedidosController.registrarPedido);
router.post('/pedido/agregar_producto', pedidosController.agregarProductoPedido);

module.exports = router;