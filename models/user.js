const {Schema, model} = require('mongoose');


const UserSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    edad: {
        type: String,
        required: [true, 'La edad es obligatoria']
    },
    genero: {
        type: String,
        required: [true, 'El Genero es obligatorio']

    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        default: null
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'EDITOR_ROLE', 'MOM_ROLE', 'DAD_ROLE']
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    primerParto: {
        type: String,
        required: true,
        enum: ['SI', 'NO']
    },
    google: {
        type: Boolean,
        default: false
    },
    facebook: {
        type: Boolean,
        default: false
    }

});

UserSchema.methods.toJSON = function() {
    const {__v, password, ...usuario } = this.toObject();
    return usuario;
}


module.exports = model( 'User', UserSchema )
