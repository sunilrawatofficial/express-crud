
class  User{
    
    async get(id){
        try{
            let query = `Select * from users where id=${id}`;
            return await dbInstance.query(query);
        }
        catch(err){
            throw err
        }
    }

    async list(){
        try{
            let query = 'Select * from users';
            let [rows] = await dbInstance.query(query);
            return rows;
        }
        catch(err){
            throw err
        }
    }

    async update(data){
        try{
            console.log(data)
            req.send(true)
        }
        catch(err){
            throw err
        }
    }

    async delete(id){
        try{
            let [rows] = await dbInstance.query(`Delete from users where id = ${id}`);
            return Promise.resolve(rows)
        }
        catch(err){
            throw err
        }
    }
}
module.exports = User;