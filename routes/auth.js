const express =  require('express')
const authRoute = express.Router();
const {success, error} = require('../config/responseApi')
const authController =require('../controller/auth')
const {authValidation} = require('../validation/index')



authRoute.get('/login', authValidation.validateLoginRequest, async (req, res, next) => {
    try {
        const auth = new authController();
        const result = await auth.login(req.body);
        res.send(success("success", result, res.statusCode));
    }
    catch (err) {
        res.status(err.statusCode || 401).send(error(err.message || err, err.statusCode));
    }
});

authRoute.post('/register', async (req, res, next) => {
    try {
        const auth = new authController();
        await auth.register(req.body);

        res.send(success("user registered successfully!", null, res.statusCode));
    }
    catch (err) {
        res.send(error(err.message || err, err.statusCode))
    }
});

authRoute.get('/logout', async (req, res, next) => {
    try {
        const auth = new authController();
        const result = await auth.logout(req.body)

        res.send(success("success", result, res.statusCode))

    } catch (err) {
        res.send(error(err.message || err, err.statusCode))
    }
})

module.exports = authRoute