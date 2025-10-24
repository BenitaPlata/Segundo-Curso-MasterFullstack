//IMPORTO LIBRERIA mongoose, que me facilita trabajar con ongodb desde node.js : define esquemas, modelos y maneja la conexion
const mongoose = require('mongoose');

//EXTRAIGO la clase schema de mongoose
const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const characterSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    age: { type: Number },
    alias: { type: String, required: true },
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo Character. ESTE MODELO es la clase que usaré para crear, consultar y modificar documentos en la coleccion.
//CHARACTER ES UN CONSTRUCTOR con métodos como find, finById, create, updateOne....
const Character = mongoose.model('Character', characterSchema);

//EXPORTO el modelo para poder importarlo con require("./models/Character") desde otras partes de mi proyecto
module.exports = Character;