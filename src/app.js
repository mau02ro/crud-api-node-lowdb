const express = require("express");
const morgan = require("morgan");

//initialize
const app = express();

//settings
// app.set("port", 3000);
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json()); //utilizar el metodo json nos permite recibir las peticiones en formato json.

//routes
app.use(require("./routes/tasks.routes"));

//export
module.exports = app;
