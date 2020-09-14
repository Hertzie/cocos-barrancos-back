const pool = require('../config/database');
const { text } = require('body-parser');

exports.validarCredenciales = (usuario, contrasena) => {
    const textSql = 'SELECT func_validar_inicio_sesion($1, $2) as resultado;';
    const sqlValues = [usuario, contrasena];
    return pool.query(textSql, sqlValues);
}

exports.obtenerDatosUsuario = (usuario) => {
    const textSql = 'SELECT * FROM func_login($1);';
    const sqlValues = [usuario];
    return pool.query(textSql, sqlValues);
}