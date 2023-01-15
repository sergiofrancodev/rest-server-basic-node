const { Router } = require('express');
const { check } = require('express-validator');

const { esRoleValido, emailExiste, existeUserId } = require('../helpers/db-validators');

const { validateFields } = require('../middlewares/validate-fileds');
const { usersGet, 
        usersPut, 
        usersDelete, 
        usersPost } = require('../controllers/users.controller');

const router = Router();

router.get('/', usersGet);

router.post('/',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password tiene que tener al menos 8 caracteres').isLength({min: 8}).not().isEmpty(),
        check('email', 'El email no es valido').isEmail(),
        check('email').custom(emailExiste),
        check('rol').custom(esRoleValido),
        validateFields,
        
], usersPost);

router.put('/:id',[
        check('id').custom(existeUserId),
        check('rol').custom(esRoleValido),
        validateFields
], usersPut);

router.delete('/:id', [
        check('id').custom(existeUserId),
        validateFields
] ,usersDelete );


module.exports = router;