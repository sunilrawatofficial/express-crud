
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

    async update(){
        try{
            const users = new userModel();
            return await users.update(req.body);
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    async delete(id){
        try{
            const users = new userModel();
            if(!this.get(id))
                return await users.delete(id);
            else{
                throw new Error("User does not exist");
            }
        }
        catch(err){
            throw err
        }
    }
}

module.exports = User;