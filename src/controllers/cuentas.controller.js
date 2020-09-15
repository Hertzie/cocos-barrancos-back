const cuentasModel = require('../models/cuentas.model');
const configuracionesModel = require('../models/configuraciones.model');

exports.cobrarPedido = async(req,res) => {
    const iPedido = req.body.id_pedido;
    const iTipoPago = req.body.id_tipo_pago;
    const iCantidadPago = req.body.id_cantidad_pago;
    const iEmpleado = req.body.id_empleado;
    const dbResponse = await cuentasModel.cobrarPedido(iPedido, iTipoPago, iCantidadPago, iEmpleado);
    const data = dbResponse.rows[0];

    const corteResponse = await configuracionesModel.consultarCorteAlcanzado();
    const corteData = corteResponse.rows[0];

    let objRespuesta = {
        success : true
    };

    if(corteData.resultado == 1){
        objRespuesta.mensaje = 'La cantidad en caja es igual o mayor al tope de corte establecido, haga un corte por favor.';
        objRespuesta.codigo = 1;
    }else{
        objRespuesta.codigo = 0;
        objRespuesta.mensaje = 'Tope de corte aún no alcanzado.';
    }

    res.status(201).send(objRespuesta);
}