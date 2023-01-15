const { default: mongoose } = require('mongoose');
const Role = require('../models/role');
const User = require('../models/user');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`)
    }

};

const emailExiste = async (email = '') => {
    const existeEmail = await User.findOne({ email: email });
    if (existeEmail) {
        throw new Error(`El correo: ${email} ya esta registrado`)
    };
}

const existeUserId = async (id) => {

if(mongoose.Types.ObjectId.isValid(id)){
    const existeId = await User.findById(id);
    if(!existeId){
        throw new Error(`El id ${id} no existe en la BD`)
    }
}else{
    throw new Error(`El id ${id} no es valido`)
}
};



module.exports = {
    esRoleValido,
    emailExiste,
    existeUserId,
}