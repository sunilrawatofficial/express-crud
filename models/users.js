
class  User{
    
    async get(id){
        try{
            let [rows] = await readDBInstance.query(`Select * from users where id = ?`, [id]);
            return rows;
        }
        catch(err){
            throw err
        }
    }

    async list(){
        try{
            let [rows] = await readDBInstance.query(`Select * from users`,);
            return rows;
        }
        catch(err){
            throw err
        }
    }

    async update(data, id){
        try{
            let [result] = await writeDBInstance.query(`UPDATE users set ? where id = ?`, [data, id])
            return Promise.resolve(result)
        }
        catch(err){
            throw err
        }
    }

    async delete(id){
        try{
            let [rows] = await writeDBInstance.query(`DELETE from users where id = ?`,[id]);
            return Promise.resolve(rows)
        }
        catch(err){
            throw err
        }
    }
}
module.exports = User;