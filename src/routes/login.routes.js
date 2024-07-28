const { Router } = require("express");
const LoginControllers = require("../controllers/LoginControllers");

const loginRoutes = new Router();

loginRoutes.post("/", LoginControllers.login);


module.exports = loginRoutes;