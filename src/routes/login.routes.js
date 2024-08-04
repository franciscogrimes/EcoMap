const { Router } = require("express");
const LoginControllers = require("../controllers/LoginControllers");

const loginRoutes = new Router();

loginRoutes.post("/", LoginControllers.login
    /*
    #swagger.tags = ['Login'],
    #swagger.description = 'Endpoint para realizar o login no ambiente.',
    #swagger.parameters['login'] = {
        in: 'body',
        description: 'Login no ambiente',
        required: true,
        schema: { 
           
               $email: "exemplo@gmail.com",
                $password: "exemplo@123",
            }   

        }
    */
);


module.exports = loginRoutes;