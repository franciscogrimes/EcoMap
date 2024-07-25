const Usuario = require('../models/Usuario')

class UsuariosControllers {

    async criar(request, response){
        try{
            const dados = request.body

            if(!dados.nome || !dados.email || !dados.password){
                return response.status(400).json({mensagem: "Preencha todos os campos obrigatórios."})
            }

            const usuario = await Usuario.create(dados)

            return response.status(201).json(`${usuario.nome} registrado com sucesso!`);

        }catch(error){
            return response.status(500).json({mensagem : "Não foi possível criar o usuário, devido a um erro interno"})
        }
    }
}

module.exports = new UsuariosControllers()