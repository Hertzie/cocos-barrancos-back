const router = require('express').Router();
const pedidosController = require('../controllers/pedidos.controller');

router.get('/pedido/:iPedido', pedidosController.obtenerDetallePedido);
router.get('/pedidos', pedidosController.obtenerPedidos);
router.post('/pedido', pedidosController.registrarPedido);
router.post('/pedido/agregar_producto', pedidosController.agregarProductoPedido);
router.post('/pedido/cancelar', pedidosController.cancelarPedido);
router.post('/pedido/terminado', pedidosController.marcarPedidoPreparado);
router.post('/pedido/eliminar_producto', pedidosController.eliminarProductoPedido);

module.exports = router;