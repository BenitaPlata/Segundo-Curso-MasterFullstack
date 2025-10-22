//ME TRAIGO EL MÓDULO Y LO CONFIGURO
require("dotenv").config();

// nos traemos el módulo express que previamente hemos instalado
const express = require("express");

// lo ejecutamos y guardamos
//  en la variable app
const app = express();

// todas las rutas que no tengan respuesta entrarán por aquí
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})


/* utilizamos nuestro servidor para ponerlo a escuchar con el método listen, le tenemos que pasar un puerto
 en el primer parámetro y un callback con la función a ejecutar cuando se ponga a escuchar.*/
app.listen(3000, () => {
    console.log("http://localhost:3000");
})

