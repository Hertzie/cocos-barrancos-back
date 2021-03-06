const pool = require('../config/database');

exports.registrarProducto = (nombreProducto, precioProducto) => {
    const textSql = 'SELECT func_registrar_producto($1, $2) as success;';
    const sqlValues = [nombreProducto, precioProducto];
    return pool.query(textSql, sqlValues);
}

exports.obtenerProductos = () => {
    const textSql = 'SELECT * FROM func_obtener_productos() as data;';
    return pool.query(textSql);
}

exports.editarProducto = (iProducto, nombreProducto, productoPrecio) => {
    const textSql = 'SELECT func_editar_producto($1,$2,$3) as success;';
    const sqlValues = [iProducto, nombreProducto, productoPrecio];
    return pool.query(textSql, sqlValues);
}

exports.bajaReactivarProducto = (iProducto, iOpcion) => {
    const textSql = 'SELECT func_baja_reactivar_producto($1, $2) as success;';
    const sqlValues = [iProducto, iOpcion];
    return pool.query(textSql, sqlValues);
}

exports.decrementarCantidadProductoPedido = (iPedido, iProducto, iCosto, iCantidad) => {
    const textSql = 'SELECT func_eliminar_producto_pedido($1, $2, $3, $4) as resultado;';
    const sqlValues = [iPedido, iProducto, iCosto, iCantidad];
    return pool.query(textSql, sqlValues);
}

exports.incrementarCantidadProductoPedido = (iPedido, iProducto, iCosto, iCantidad) => {
    const textSql = 'SELECT func_incrementar_producto_pedido($1, $2, $3, $4) as resultado;';
    const sqlValues = [iPedido, iProducto, iCosto, iCantidad];
    return pool.query(textSql, sqlValues);
}