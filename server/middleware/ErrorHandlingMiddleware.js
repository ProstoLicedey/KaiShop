const ApiError = require('../error/ApiError')
//const e = require("express");

module.exports = function (err, req, res,next) {
    if( err instanceof ApiError){ //объект принадлежить  классу?
        res.status(err.status).json ({message: err.message})
    }
    return res.status(500).json({message: "Непредвидення ошибка!"})
}

