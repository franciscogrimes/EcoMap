const { compareSync } = require("bcryptjs")
const Usuario = require("../models/Usuario")
const {sign} = require('jsonwebtoken')


class LoginControllers{
    async login(request, response){
        try{
        const dados = request.body

        if(!dados.email || !dados.password){
            return response.status(400).json({mensagem: "Os campos Email e Senha, são obrigatórios"})
        }


        const usuario = await   Usuario.findOne({
            where: {
                email: dados.email,
            }
        })
        
        if(!usuario){
            return response.status(404).json({mensagem: "Nenhum usuário encontrado, com o email informado."})
        }

    

        const confereSenha = compareSync(dados.password,usuario.password)

        if(confereSenha === false){
            return response.status(404).json({mensagem: "Senha incorreta para o usuário informado."})
        }

        const token = sign({
            id: usuario.id
        },
            process.env.JWT_SECRET,
        {
            expiresIn: '300m'
        })
    
        


        return response.status(200).json({mensagem: "Login realizado com sucesso!", token: token})


    }catch(error){
        console.log(error)
        return response.status(500).json({mensagem: "Não foi possivel realiza o login, devido a um erro interno"})
    }
        
    

    }
}

module.exports = new LoginControllers()