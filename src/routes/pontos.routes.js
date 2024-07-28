const {Router} = require('express')

const PontosControllers = require('../controllers/PontosControllers')


const pontosRoutes = new Router();

pontosRoutes.post("/", PontosControllers.criar);
pontosRoutes.get("/", PontosControllers.visualizarTodos);
pontosRoutes.get("/", PontosControllers.visualizarUmPeloNome);
pontosRoutes.get("/:id", PontosControllers.visualizarUm);
pontosRoutes.get("/:id/maps", PontosControllers.vizualizarMapa);
pontosRoutes.delete("/:id", PontosControllers.deletarPonto);
pontosRoutes.put("/:id", PontosControllers.atualizarPonto);


module.exports = pontosRoutes;