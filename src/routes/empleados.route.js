const router = require('express').Router();
const empleadosController = require('../controllers/empleados.controller');

router.get('/empleados', empleadosController.obtenerEmpleados);
router.get('/roles', empleadosController.obtenerRoles);
router.post('/empleado', empleadosController.registrarEmpleado);

module.exports = router;