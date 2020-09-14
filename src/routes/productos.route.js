const router = require('express').Router();
const productosController = require('../controllers/productos.controller');

router.get('/productos', productosController.obtenerProductos);
router.post('/producto', productosController.registrarProducto);
router.post('/producto/editar', productosController.editarProducto);
router.post('/producto/baja_reactivar', productosController.bajaReactivarProducto);
router.post('/producto/decrementar', productosController.decrementarCantidadProductoPedido);
router.post('/producto/incrementar', productosController.incrementarCantidadProductoPedido);

module.exports = router;