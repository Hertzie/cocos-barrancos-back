const cortesModel = require('../models/cortes.model');

exports.realizarCorte = async(req,res) => {
    const iEmpleado = req.body.id_empleado;
    const dbResponse = await cortesModel.realizarCorte(iEmpleado);
    const data = dbResponse.rows;
    res.send(data);
}

exports.detalleCorte = async(req,res) => {
    const iCorte = req.params.id_corte;
    const dbResponse = await cortesModel.detalleCorte(iCorte);
    res.status(200).json({
        success : true,
        rowCount : dbResponse.rowCount,
        data : dbResponse.rows
    });
}