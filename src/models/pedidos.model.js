const pool = require('../config/database');

exports.obtenerDetallePedido = (iPedido) => {
    const textSql = 'SELECT * FROM func_detalle_pedido($1);';
    const sqlValues = [iPedido];
    return pool.query(textSql, sqlValues);
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