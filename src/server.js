const express = require("express")
const routes = require("./routes/routes")
const cors = require('cors')
const connection = require("./database/connection")
const APP_PORT = process.env.APP_PORT

class Server {
    
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initializeServer(server)
    }

    async middlewares(server) {
        console.log("Executando os middlewares")
        server.use(express.json())
        server.use(cors())
        console.log("Middlewares executados")
    }

    async database() {
        try {
            console.log("Conectando ao banco de dados")
            await connection.authenticate()
        } catch (error) {
            console.log("Erro ao conectar ao banco de dados: ", error)
        }
    }

    async initializeServer(server) {
        server.listen(APP_PORT, () => {
            console.log(`Servidor rodando na porta ${APP_PORT}!`)
        })
    }
}

module.exports = { Server }