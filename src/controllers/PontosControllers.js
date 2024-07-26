const Pontos = require('../models/Ponto')

class PontosControllers {

    async criar(request, response){
        try{
            const dados = request.body

            if(!dados.nomeLocal || !dados.usuario_id || !dados.descricao || !dados.cep || !dados.residuo){
                return response.status(400).json({mensagem: "Preencha todos os campos obrigatórios. (Id usuário, nome do local, descrição, cep e resíduo)"})
            }

            const cepExistente = await Usuario.findOne({ where: { email: dados.cep } });


            if (cepExistente) {
                return response.status(409).json({ mensagem: "CEP já cadastrado." });
            } 

        }catch(error){
            console.log(error)
            return response.status(500).json({mensagem : "Não foi possível criar o usuário, devido a um erro interno"})
        }
    }
}

module.exports = new UsuariosControllers()