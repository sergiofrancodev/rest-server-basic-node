const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const usersGet = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;

    const [total, users] = await Promise.all([
        User.countDocuments({ estado: true }),
        User.find({ estado: true })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        users
    });
};

const usersPost = async (req = request, res = response) => {

    const { nombre, edad, genero, email, password, rol, primerParto } = req.body;
    const user = new User({ nombre, edad, genero, email, password, rol, primerParto });

    //Encriptar password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password.toString(), salt);

    //guardar en BD
    await user.save();

    res.json({
        success: true,
        msg: 'Usuario registrado corerctamente',
        user
    });
};

const usersPut = async (req = request, res = response) => {

    const id = req.params.id;
    const { _id, password, google, facebook, email, ...resto } = req.body;

    //TODO: Validar contra base de datos

    if (password) {
        //Encriptar password
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password.toString(), salt);

    }

    const user = await User.findByIdAndUpdate(id, resto);


    res.json({
        success: true,
        msg: 'Usuario actualizado con exito',
        user
    });
};


const usersDelete = async(req = request, res = response) => {

    const id = req.params.id;


    const user = await User.findByIdAndUpdate(id, {estado: false})

    res.json({
        success: true,
        msg: 'Usuario eliminado correctamente',
        user
    });
};


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}