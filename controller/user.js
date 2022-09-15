
const userModel = require('../models/users')

class User {

    async get(id){
        try{
            const users = new userModel();
            return await users.get(id);
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    async list(){
        try{
            const users = new userModel();
            return  await users.list();
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    async update(data, id){
        try{
            const users = new userModel();
            return await users.update(data, id);
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    async delete(id){
        try{
            const users = new userModel();
            return await users.delete(id);
        }
        catch(err){
            throw err
        }
    }
}

module.exports = User;