const empleadosModel = require('../models/empleados.model');

exports.obtenerEmpleados = async(req,res) => {
    const dbResponse = await empleadosModel.obtenerEmpleados();
    const data = dbResponse.rows;
    res.send(data);
}

exports.obtenerRoles = async(req,res) => {
    const dbResponse = await empleadosModel.obtenerRoles();
    const data = dbResponse.rows;
    res.send(data);
}

exports.registrarEmpleado = async(req,res) => {
    const nombres = req.body.nombres_empleado;
    const paterno = req.body.apellido_paterno;
    const materno = req.body.apellido_materno;
    const sueldo = req.body.sueldo;
    const rol = req.body.id_rol;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const dbResponse = await empleadosModel.registrarEmpleado(nombres, paterno, materno, sueldo, rol, telefono, direccion);
    const data = dbResponse.rows[0];
    res.send(data);
}