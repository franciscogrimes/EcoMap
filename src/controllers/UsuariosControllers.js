const Usuario = require('../models/Usuario')

class UsuariosControllers {

    async criar(request, response){
        try{
            const dados = request.body

            if(!dados.nome || !dados.email || !dados.password){
                return response.status(400).json({mensagem: "Preencha todos os campos obrigatórios. (Nome, Email e Senha)"})
            }

            const emailExistente = await Usuario.findOne({ where: { email: dados.email } });
            const cpfExistente = await Usuario.findOne({ where: { cpf: dados.cpf } });


            if (emailExistente) {
                return response.status(409).json({ mensagem: "Email já cadastrado." });
            } else if (cpfExistente) {
                return response.status(409).json({ mensagem: "CPF já cadastrado." });
            } else {
                const usuario = await Usuario.create(dados);
                return response.status(201).json(`${usuario.nome} registrado com sucesso!`);
            }

          

        }catch(error){
            console.log(error)
            return response.status(500).json({mensagem : "Não foi possível criar o usuário, devido a um erro interno"})
        }
    }
}

module.exports = new UsuariosControllers()