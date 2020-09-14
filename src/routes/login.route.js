const router = require('express').Router();
const loginController = require('../controllers/login.controller');

router.post('/login', loginController.validarCredenciales);

module.exports = router;