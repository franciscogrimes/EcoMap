const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const pontosRoutes = require('./pontos.routes')
const auth = require('../middlewares/auth')


const routes = new Router()

routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)

routes.use(auth)
routes.use('/local',auth, pontosRoutes)


routes.use('/local', pontosRoutes)

module.exports = routes