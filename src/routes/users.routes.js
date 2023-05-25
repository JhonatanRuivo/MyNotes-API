const { Router } = require('express')

const UsersController = require('../controllers/UsersControllers')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/users', usersController.create)
usersRoutes.put('/users/:id', usersController.update)

module.exports = usersRoutes  