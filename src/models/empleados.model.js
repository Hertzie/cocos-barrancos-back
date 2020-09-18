const pool = require('../config/database');

exports.obtenerEmpleados = () => {
    const textSql = 'SELECT * FROM func_obtener_empleados() as resultado;';
    return pool.query(textSql);
}

exports.obtenerRoles = () => {
    const textSql = 'SELECT * FROM func_obtener_roles() as resultado';
    return pool.query(textSql);
}

exports.registrarEmpleado = (nombres, paterno, materno, sueldo, rol, telefono, direccion) => {
    const textSql = 'SELECT func_registrar_empleado($1, $2, $3, $4, $5, $6, $7) as resultado;';
    const sqlValues = [nombres, paterno, materno, sueldo, rol, telefono, direccion];
    return pool.query(textSql, sqlValues);
}