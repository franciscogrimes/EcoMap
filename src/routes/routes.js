const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')


const routes = new Router()

routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)

module.exports = routes