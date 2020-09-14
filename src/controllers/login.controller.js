const loginModel = require('../models/login.model');

exports.validarCredenciales = async(req,res) => {
    const usuario = req.body.nombre_usuario;
    const contrasena = req.body.contrasena;
    const dbResponse = await loginModel.validarCredenciales(usuario, contrasena);
    const data = dbResponse.rows[0];
    
    switch(data.resultado){
        case 1:
            const dbUsuario = await loginModel.obtenerDatosUsuario(usuario);
            const dataUsuario = dbUsuario.rows[0];
            res.send({
                success : true,
                codigo : 1,
                datos_usuario : dataUsuario
            });
            break;
        case 2:
            res.send({
                success : true,
                codigo : 2,
                mensaje : 'La contraseña no corresponde al usuario ingresado.'
            });
            break;
        case 3:
            res.send({
                success : true,
                codigo : 3,
                mensaje : 'No existe un registro con el usuario proporcionado.'
            });
            break;
    }
}
