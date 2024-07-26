const {Router} = require('express')

const PontosControllers = require('../controllers/PontosControllers')


const pontosRoutes = new Router();

pontosRoutes.post("/", PontosControllers.criar);


module.exports = pontosRoutes;