const {Router} = require('express')

const PontosControllers = require('../controllers/PontosControllers')


const pontosRoutes = new Router();

pontosRoutes.post("/", PontosControllers.criar    
    
    /*
    #swagger.tags = ['Local'],
    #swagger.description = 'Endpoint para criar ponto de coleta.',
    #swagger.parameters['criarPonto'] = {
        in: 'body',
        description: 'Criação de ponto de coleta',
        required: true,
        schema: { 
           
               $nomeLocal: "Ecoponto exemplo",
                $descricao: "Fechado Temporariamente",
                $cep: "XXXXXXX",
                $residuo: "Vidro"

        }
    }
*/
);
pontosRoutes.get("/", PontosControllers.visualizarTodos
    
    /*
    #swagger.tags = ['Local']
    */
);
pontosRoutes.get("/:id", PontosControllers.visualizarUm
    /*
    #swagger.tags = ['Local']
    */
);
pontosRoutes.get("/:id/maps", PontosControllers.vizualizarMapa
    /*
    #swagger.tags = ['Local']
    */
);
pontosRoutes.delete("/:id", PontosControllers.deletarPonto
    /*
    #swagger.tags = ['Local']
    */
);
pontosRoutes.put("/:id", PontosControllers.atualizarPonto
/*
    #swagger.tags = ['Local'],
    #swagger.description = 'Endpoint para alterar ponto de coleta.',
    #swagger.parameters['alterarPonto'] = {
        in: 'body',
        description: 'Alteração de ponto de coleta',
        required: true,
        schema: { 
           
               $nomeLocal: "Ecoponto exemplo",
                $descricao: "Fechado Temporariamente",
                $cep: "XXXXXXX",
                $residuo: "Vidro"
            }   

        }
                */
);


module.exports = pontosRoutes;