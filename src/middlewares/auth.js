const { verify } = require('jsonwebtoken')

function validaToken(request, response, next) {
    try {
        const token = request.headers.authorization
      
        if (!token) {
            return response
                .status(400)
                .json({ mensagem: 'Token não anexado' })
        }

        const jwt = token.split(" ")
    
        const resultado = verify(jwt[1], process.env.JWT_SECRET)
        
        request.user = { id: resultado.id }

        next()
    } catch (error) {
        console.log(error)
        if(error.message === "jwt malformed" || error.message === "jwt expired") {
            response.status(401).json({ mensagem: 'O Token está inválido ou expirado' })
        } else {
            response.status(500).json({ mensagem: 'A requisição falhou' })
        }
    }

}

module.exports = validaToken