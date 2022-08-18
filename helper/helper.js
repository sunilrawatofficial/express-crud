const jwt = require('jsonwebtoken')
const {success, error, validation} = require('../config/responseApi')

const authorizeURL = (req, res, next) =>{
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token === null || token === undefined){
            return res.status(401).send(success("Unauthenticated, undefined access token", null, res.statusCode ))
        }
        jwt.verify(token, process.env.secret, (err, user) =>{
            if(err)
                return res.status(401).send(error("Invalid Access Token", res.statusCode))
            
            next();
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { authorizeURL }