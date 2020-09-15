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

exports.consultarCorteAlcanzado = async(req,res) => {
    const dbResponse = await configuracionesModel.consultarCorteAlcanzado();
    const data = dbResponse.rows[0];
    let objRespuesta = {
        success : true
    };

    if(data.resultado == 1){
        objRespuesta.mensaje = 'La cantidad en caja es igual o mayor al tope de corte establecido, haga un corte por favor.';
        objRespuesta.codigo = 1;
    }else{
        objRespuesta.codigo = 0;
        objRespuesta.mensaje = 'Tope de corte aún no alcanzado.';
    }

    res.status(200).send(objRespuesta);
}