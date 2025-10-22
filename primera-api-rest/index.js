require("dotenv").config();

// nos traemos el módulo express que previamente hemos instalado
const express = require("express");

// lo ejecutamos y guardamos en la variable app
const app = express();

/* utilizamos nuestro servidor para ponerlo a escuchar con el método listen, le tenemos que pasar un puerto
 en el primer parámetro y un callback con la función a ejecutar cuando se ponga a escuchar.*/

 // todas las rutas que no tengan respuesta entrarán por aquí
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});



app.listen(3000, () => {
    console.log("http://localhost:3000");
})