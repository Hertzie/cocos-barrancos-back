const pool = require('../config/database');

exports.realizarCorte = (iEmpleado) => {
    const textSql = 'SELECT func_registrar_corte_caja($1) as success;';
    const sqlValues = [iEmpleado];
    return pool.query(textSql, sqlValues);
}

exports.detalleCorte = (iCorte) => {
    const textSql = 'SELECT * FROM func_detalle_corte($1);';
    const sqlValues = [iCorte];
    return pool.query(textSql, sqlValues);
}