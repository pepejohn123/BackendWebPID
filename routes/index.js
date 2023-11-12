const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const authMiddleware = require('../src/middlewares/auth');

//const usersController = require('../src/controllers/users');

const loginController = require('../src/controllers/login')
const registerController = require('../src/controllers/register')
const documentController = require('../src/controllers/document')
router.use(express.json());
router.use(cookieParser());
//AUTH
router.post('/login',loginController.login);

//Users

router.post('/register',registerController.register);

router.use('/credentials',authMiddleware);
router.get('/credentials',documentController.ver);
//router.get('/users', usersController.listar);
//router.get('/users/:id', usersController.ver); /* la lee después de new, si estuviera invertido el orden, la leería como un id=new */
/* router.post('/users/new',roleMiddleware('admin'),usersController.crear); /* la lee primero */
//router.put('/users/:id', usersController.editar); /* la lee primero */
//router.delete('/users/:id', usersController.eliminar); /* la lee primero */
module.exports = router; /* se pone al final pa que esté todo definido cuando se llame */