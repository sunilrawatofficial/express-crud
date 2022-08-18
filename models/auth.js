class Authentication{

    async login(email){
        try{
            let [rows] = await dbInstance.query(`Select * from users where email = ?`, [email]);
            return Promise.resolve(rows);
        }        
        catch(err){
            throw err
        }

    }

    async register(data){
        try{
            let [row] = await dbInstance.query(`INSERT INTO users SET ?`, [data])
            return row;
        }
        catch(err){
            throw err
        }
    }
    
}

module.exports = Authentication;