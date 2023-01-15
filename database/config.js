const monngose = require('mongoose')

const dbConnection = async () => {

    try {
        monngose.set("strictQuery", false)
        monngose.connect(process.env.MONGODB_CNN);
        console.log('Base de datos Online')

    } catch (error) {
        console.log(error)
        throw new Error('Error en la Basa de datos');

    }

}

module.exports = {
    dbConnection
}