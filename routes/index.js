const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads');
    },
    filename: (req,file,cb) => {
        const id = req.user._id
        console.log(id);
        const ts = id;
        const ext = file.originalname.split('.').pop()
        const name= `${ts}.${ext}`;
        cb(null, name);

    }

})
const fileFilter = (req, file, cb)=>{
    const isValid = file.mimetype.startsWith('image/');
    cb(null,isValid);
}

const uploadMiddleware = multer({storage: storage, fileFilter: fileFilter});



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

router.use('/upload',authMiddleware);
router.post('/upload',uploadMiddleware.single('archivo'),(req,res)=>{
    console.log('File:',req.file);
    if(req.file){
        res.send('OK!');
    }
    else{
        res.status(400).send('invalid format')
    }
});

//router.get('/users', usersController.listar);
//router.get('/users/:id', usersController.ver); /* la lee después de new, si estuviera invertido el orden, la leería como un id=new */
/* router.post('/users/new',roleMiddleware('admin'),usersController.crear); /* la lee primero */
//router.put('/users/:id', usersController.editar); /* la lee primero */
//router.delete('/users/:id', usersController.eliminar); /* la lee primero */
module.exports = router; /* se pone al final pa que esté todo definido cuando se llame */