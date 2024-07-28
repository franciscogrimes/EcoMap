const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const pontosRoutes = require('./pontos.routes')
const validaToken = require('../middlewares/auth')


const routes = new Router()

routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)
routes.use('/local', pontosRoutes)

routes.use(validaToken)


module.exports = routes