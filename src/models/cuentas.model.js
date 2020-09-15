const pool = require('../config/database');

exports.cobrarPedido = (iPedido, iTipoPago, iCantidadPago, iEmpleado) => {
    const textSql = 'SELECT func_cobrar_pedido($1, $2, $3, $4) as resultado';
    const sqlValues = [iPedido, iTipoPago, iCantidadPago, iEmpleado];
    return pool.query(textSql, sqlValues);
}