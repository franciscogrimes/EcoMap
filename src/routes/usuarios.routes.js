const { Router } = require("express");
const UsuariosControllers = require("../controllers/UsuariosControllers");

const usuariosRoutes = new Router();

usuariosRoutes.post("/", UsuariosControllers.criar);


module.exports = usuariosRoutes;