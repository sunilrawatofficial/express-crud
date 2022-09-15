const express = require('express')
const userRouter = express.Router();
const {success, error} = require('../config/responseApi')
const userController =require('../controller/user')

userRouter.get('/users', async (req,res, next) => {
    try {
        const user = new userController();
        const result = await user.list();
        
        res.send(success("success", result, res.statusCode));
    }
    catch (err) {
        res.send(error(err.message, err.statusCode))
    }
});

userRouter.get('/users/:id', async (req, res, next) => {
    try {
        const user = new userController();
        const result = await user.get(req.params.id)

        res.send(success("success", result, res.statusCode))
    } catch (err) {
        res.send(error(err.message, err.statusCode))
    }
})

userRouter.post('/users/:id', async (req, res, next) =>{
    try {
        const user = new userController();
        const result = await user.update(req.body, req.params.id);

        res.send(success("success", result, res.statusCode))
    } catch (err) {
        res.send(error(err.message, err.statusCode))
    }
});

userRouter.delete('/users/:id', async (req, res, next) =>{
    try {
        const user = new userController();
        await user.delete(req.params.id)
        res.send(success("user successfully deleted", null, res.statusCode))
    } catch (err) {
        res.send(error(err.message, res.statusCode))
    }
});

module.exports = userRouter;
