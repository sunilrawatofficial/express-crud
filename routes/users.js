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
        const result = await user.get(req.body.id)
        res.send(success("success", result, res.statusCode))
    } catch (error) {
        res.send(error(err.message, err.statusCode))
    }
})

// userRouter.post('/users/:id', (req, req, next) =>{
//     try {
//         const user = 
//     } catch (error) {
        
//     }
// });

userRouter.delete('/users/:id', async (req, res, next) =>{
    try {
        const user = new userController();
        const result = await user.delete(req.body.id)
        res.send(success("user successfully deleted", result, res.statusCode))
    } catch (err) {
        res.send(error(err.message, err.statusCode))
    }
});

module.exports = userRouter;
