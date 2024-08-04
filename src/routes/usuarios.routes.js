const { Router } = require("express");
const UsuariosControllers = require("../controllers/UsuariosControllers");

const usuariosRoutes = new Router();

usuariosRoutes.post("/", UsuariosControllers.criar
    /*
    #swagger.tags = ['Usuarios'],
    #swagger.description = 'Endpoint para criação de novos usuarios.',
    #swagger.parameters['criarUsuario'] = {
        in: 'body',
        description: 'Criação de novos usuarios',
        required: true,
        schema: { 
            $nome: "Galvão Bueno",
            $cpf: "00000000052",
            $endereco: "Rua Globo confederação" ,
            $data_nascimento: 18-11-2000,
            $email: "galvao@outlook.com" ,
            $password: "Globo@123"
 
            }   

        }
                */
);


module.exports = usuariosRoutes;