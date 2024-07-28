const { Router } = require('express')
const pontosRoutes = require('./pontos.routes')


const routes = new Router()

routes.use('/pontos', pontosRoutes)


module.exports = routes