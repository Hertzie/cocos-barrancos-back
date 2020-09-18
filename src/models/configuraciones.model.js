const pool = require('../config/database');

exports.configurarFondoCaja = (iCantidad) => {
    const textSql = 'SELECT func_configurar_fondo_caja($1) as success;';
    const sqlValues = [iCantidad];
    return pool.query(textSql, sqlValues);
}

exports.configurarCantidadCorteTope = (iCantidad) => {
    const textSql = 'SELECT func_configurar_cantidad_corte($1) as success';
    const sqlValues = [iCantidad];
    return pool.query(textSql, sqlValues);
}

exports.consultarCorteAlcanzado = () => {
    const textSql = 'SELECT func_consultar_corte_alcanzado() as resultado;';
    return pool.query(textSql);
}

exports.obtenerPaginasRol = (iRol) => {
    const textSql = 'SELECT * FROM func_obtener_paginas_rol($1) as resultado;';
    const sqlValues = [iRol];
    return pool.query(textSql, sqlValues);
}

exports.obtenerTipoServicio = () => {
    const textSql = 'SELECT * FROM func_obtener_tipo_servicio() as resultado;';
    return pool.query(textSql);
}

exports.obtenerMesas = () => {
    const textSql = 'SELECT * FROM func_obtener_mesas() as resultado;';
    return pool.query(textSql);
}