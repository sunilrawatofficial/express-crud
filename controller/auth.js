const authModel = require('../models/auth')
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken')
const childProcess = require('child_process')

class Auth {

    async register (body) {
        try{            
            let email = require('../email/config');
            // childProcess.exec('open -a "Google Chrome" https://www.facebook.com/sunilrawatofficial/', (err,stdout, stderr ) => {
        // childProcess.exec(email.sendRegistrationEmail(body.name, body.email), (err,stdout, stderr ) => {
        //     if(err)
        //         console.error("err", err)
        //     if(stdout)
        //         console.log("stdout", stdout)
        //     if(stderr)
        //         console.error("err", stderr)
        // });
            // childProcess.execFile(email.sendRegistrationEmail(body.name, body.email));
            let auth = new authModel();
            body.password=sha256(body.password)
            return  auth.register(body);
        }
        catch(err){
            throw err.code === "ER_DUP_ENTRY" ? ("Email already registered !") : err
        }
    }

    async login(body){
        try{
            var authentication = new authModel();
            let { email, password } = body;
            let result = await authentication.login(email);

            if (result?.length) {
                let userDetails = result[0];

                if(sha256(password) === userDetails.password){
                    userDetails['accessToken'] = this.generateAccessToken(userDetails['id'], userDetails['email']);
                    return userDetails;
                }
               return Promise.reject("password is incorrect!");
            }
            else {
               return Promise.reject("User does not exist!");
            }
        }
        catch(err){
            err.statusCode = 401;
            throw new Error(err.message);
        }
    }
    
    async logout(req, res){
        try{
            let authentication = new authModel();
            return await authentication.logout();
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    generateAccessToken(id, email){
        
        let secret = process.env.secret;
        let payload = {
            email: email,
            id: id
        }
        return jwt.sign(payload, secret, {})
    }
}

module.exports = Auth;