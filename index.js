require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

let app = express();

app.use(cors());

//Cargar rutas
const productosRoute = require('./src/routes/productos.route');
const pedidosRoute = require('./src/routes/pedidos.route');
const configuracionesRoute = require('./src/routes/configuraciones.route');
const cortesRoute = require('./src/routes/cortes.route');
const cuentasRoute = require('./src/routes/cuentas.route');
const loginRoute = require('./src/routes/login.route');
const empleadosRoute = require('./src/routes/empleados.route');


app.use(bodyParser.json());

//Usar rutas
app.use(productosRoute);
app.use(pedidosRoute);
app.use(configuracionesRoute);
app.use(cortesRoute);
app.use(cuentasRoute);
app.use(loginRoute);
app.use(empleadosRoute);

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto: ", PORT);
});