const yup = require('yup');
const {error} = require('../config/responseApi')
const childProcess = require('child_process') //TODO::remove this later on

const validateLoginRequest = async(req, res, next) => {
    try {
        await yup.object({
            email : yup.string().email("Must be a valid email").required("Email is required"),
            password : yup.string().required("Password is required")
        }).validate(req.body)
        //TODO: //please remove this later on
        // childProcess.exec('open -a "Google Chrome" https://www.facebook.com/sunilrawatofficial/', (err,stdout, stderr ) => {
        // childProcess.exec('pwd', (err,stdout, stderr ) => {
        //     if(err)
        //         console.error("err", err)
        //     if(stdout)
        //         console.log("stdout", stdout)
        //     if(stderr)
        //         console.error("err", stderr)
        // });        
        return next();

    } catch (err) {
        return res.status(422).send(error(err.message || err, res.statusCode))
    }
}

module.exports = {validateLoginRequest};