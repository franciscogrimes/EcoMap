const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const pontosRoutes = require('./pontos.routes')
const auth = require('../middlewares/auth')


const routes = new Router()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)

routes.use(auth)
routes.use('/local',auth, pontosRoutes)



module.exports = routes