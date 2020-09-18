const pool = require('../config/database');

exports.obtenerDetallePedido = (iPedido) => {
    const textSql = 'SELECT * FROM func_detalle_pedido($1);';
    const sqlValues = [iPedido];
    return pool.query(textSql, sqlValues);
}

exports.obtenerPedidos = () => {
    const textSql = 'SELECT * FROM func_obtener_pedidos() as resultado;';
    return pool.query(textSql);
}

exports.registrarPedido = (params) => {
    const textSql = 'SELECT func_registrar_pedido($1, $2, $3, $4, $5, $6, $7) as success;';
    const sqlValues = params;
    return pool.query(textSql, sqlValues);
}

exports.agregarProductoPedido = (iPedido, iProducto, precioProducto, cantidadProducto) => {
    const textSql = 'SELECT func_agregar_producto_a_pedido($1, $2, $3, $4) as success;';
    const sqlValues = [iPedido, iProducto, precioProducto, cantidadProducto];
    return pool.query(textSql, sqlValues);
}

exports.cancelarPedido = (iPedido) => {
    const textSql = 'SELECT func_cancelar_pedido($1) as resultado;';
    const sqlValues = [iPedido];
    return pool.query(textSql, sqlValues);
}

exports.marcarPedidoPreparado = (iPedido) => {
    const textSql = 'SELECT func_marcar_pedido_preparado($1) as resultado;';
    const sqlValues = [iPedido];
    return pool.query(textSql, sqlValues);
}

exports.eliminarProductoPedido = (iPedido, iProducto) => {
    const textSql = 'SELECT func_eliminar_producto_pedido($1, $2) as resultado;';
    const sqlValues = [iPedido, iProducto];
    return pool.query(textSql, sqlValues);
}