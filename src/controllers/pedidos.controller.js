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

exports.registrarPedido = async(req,res) => {
    const params = [req.body.id_empleado, req.body.id_mesa, req.body.id_tipo_servicio, req.body.cliente, req.body.productos, req.body.cantidades, req.body.precios];
    const dbResponse = await pedidosModel.registrarPedido(params);
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