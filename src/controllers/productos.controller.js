const productosModel = require('../models/productos.model');

exports.obtenerProductos = async(req,res) => {
    const dbResponse = await productosModel.obtenerProductos();
    const data = dbResponse.rows;
    res.status(200).json({
        success : true,
        rowCount : dbResponse.rowCount,
        data 
    });
}

exports.registrarProducto = async(req,res) => {
    const dbResponse = await productosModel.registrarProducto(req.body.nombre_producto, req.body.precio_producto);
    const data = dbResponse.rows;
    res.send(data);
}

exports.editarProducto = async(req,res) => {
    const iProducto = req.body.id_producto;
    const nombreProducto = req.body.nombre_producto;
    const precioProducto = req.body.precio_producto;
    const dbResponse = await productosModel.editarProducto(iProducto, nombreProducto, precioProducto);
    const data = dbResponse.rows;
    res.send(data);
}

exports.bajaReactivarProducto = async(req,res) => {
    const iProducto = req.body.id_producto;
    const iOpcion = req.body.iOpcion;
    const dbResponse = await productosModel.bajaReactivarProducto(iProducto, iOpcion);
    const data = dbResponse.rows;
    res.send(data);
}