const {response, request} = require('express')




const usersGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'GET'
    });
};

const usersPost = (req = request, res = response) => {

    const body = req.body;

    res.json({
        msg: 'POST',
        body
    });
};

const usersPatch = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'PATCH',
        id
    });
};


const usersDelete = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'DELETE',
        id
    });
};


module.exports = {
    usersGet,
    usersPost,
    usersPatch,
    usersDelete
}