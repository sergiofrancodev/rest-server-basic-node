const { Router } = require('express');
const { usersGet, 
        usersPatch, 
        usersDelete, 
        usersPost } = require('../controllers/users.controller');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.patch('/:id', usersPatch);

router.delete('/:id', usersDelete );


module.exports = router;