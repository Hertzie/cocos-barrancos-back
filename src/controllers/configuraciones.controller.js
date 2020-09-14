const configuracionesModel = require('../models/configuraciones.model');

exports.configurarFondoCaja = async(req,res) => {
    const iCantidad = req.body.cantidad_fondo;
    const dbResponse = await configuracionesModel.configurarFondoCaja(iCantidad);
    const data = dbResponse.rows;
    res.send(data);
}

exports.configurarCantidadCorteTope = async(req,res) => {
    const iCantidad = req.body.cantidad_corte;
    const dbResponse = await configuracionesModel.configurarCantidadCorteTope(iCantidad);
    const data = dbResponse.rows;
    res.send(data);
}