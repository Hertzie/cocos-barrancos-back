const pedidosModel = require('../models/pedidos.model');

exports.obtenerDetallePedido = async(req,res) => {
    const iPedido = req.params.iPedido;
    const dbResponse = await pedidosModel.obtenerDetallePedido(iPedido);
    const data = dbResponse.rows;
    res.status(200).json({
        success : true,
        rowsCount : dbResponse.rowCount,
        data
    });
}

exports.obtenerPedidos = async(req,res) => {
    const dbResponse = await pedidosModel.obtenerPedidos();
    const data = dbResponse.rows;
    res.status(200).send(data);
}

exports.registrarPedido = async(req,res) => {
    const params = [req.body.id_empleado, req.body.id_mesa, req.body.id_tipo_servicio, req.body.cliente, req.body.productos, req.body.cantidades, req.body.precios];
    //const dbResponse = await pedidosModel.registrarPedido(params);
    //const data = dbResponse.rows;
    let cadenaIds = '{';
    let cadenaPrecios = '{';
    let cadenaCantidades = '{';

    req.body.productos.forEach( p => cadenaIds = cadenaIds + p + ',') ;
    req.body.cantidades.forEach( c => cadenaCantidades = cadenaCantidades + c + ',' );
    req.body.precios.forEach( precio => cadenaPrecios = cadenaPrecios + precio +',' );

    cadenaIds = cadenaIds.slice(0, -1);
    cadenaIds = cadenaIds + '}';
    cadenaPrecios = cadenaPrecios.slice(0, -1);
    cadenaPrecios = cadenaPrecios + '}';
    cadenaCantidades = cadenaCantidades.slice(0, -1);
    cadenaCantidades = cadenaCantidades + '}';

    const dbResponse = await pedidosModel.registrarPedido([
        req.body.id_empleado,
        req.body.id_mesa,
        req.body.id_tipo_servicio,
        req.body.cliente,
        cadenaIds,
        cadenaCantidades,
        cadenaPrecios
    ]);

    const data = dbResponse.rows;

    res.status(201).send(data);
}

exports.agregarProductoPedido = async(req,res) => {
    const iPedido = req.body.id_pedido;
    const iProducto = req.body.id_producto;
    const precioProducto = req.body.precio_producto;
    const cantidadProducto = req.body.cantidad_producto;
    const dbResponse = await pedidosModel.agregarProductoPedido(iPedido, iProducto, precioProducto, cantidadProducto);
    const data = dbResponse.rows;
    res.send(data);
}

exports.cancelarPedido = async(req,res) => {
    const iPedido = req.body.id_pedido;
    const dbResponse = await pedidosModel.cancelarPedido(iPedido);
    const data = dbResponse.rows[0];
    res.send(data);
}

exports.marcarPedidoPreparado = async(req,res) => {
    const iPedido = req.body.id_pedido;
    const dbResponse = await pedidosModel.marcarPedidoPreparado(iPedido);
    const data = dbResponse.rows[0];
    res.send(data);
}

exports.eliminarProductoPedido = async(req,res) => {
    const iPedido = req.body.id_pedido;
    const iProducto = req.body.id_producto;
    const dbResponse = await pedidosModel.eliminarProductoPedido(iPedido, iProducto);
    const data = dbResponse.rows[0];
    res.send(data);
}