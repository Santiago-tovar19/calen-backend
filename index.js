const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

//crear el servidor express

const app = express();

//base de datos

dbConnection();

//cors

app.use(cors());

//directorio publico

app.use(express.static("public"));

//lectura y parseo del body

app.use(express.json());

//rutas

//todo: AUTH //crae,login,renew
app.use("/api/auth", require("./routes/auth"));

//todo: crud: eventos

app.use("/api/events", require("./routes/events"));
//escuchar peticiones

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
