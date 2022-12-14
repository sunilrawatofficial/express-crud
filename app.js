var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')
var applicationRoutes = require('./routes')
var helper =  require('./helper/helper')
var app = express();

const database = require('./database/config');
database.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
  res.send({message:"welcome to express via nginx"})
})
//#region [API/sec]
app.get('/sync-test', (req, res, next) => {
  
  console.log("=====syncCompute");
  let sum = 0;
  for(let i = 0; i < 10e9; i++){
    sum += i;
  }
  res.send({syncSum:sum})
})

app.get('/async-test', async (req, res, next) => {
  let sum = await asyncCompute();
  res.send({asyncSum:sum})
})

function asyncCompute(){
  console.log("=====asyncCompute");
    return new Promise((resolve, reject) => {
      let sum = 0;
      for(let i = 0; i < 10e9; i++){
        sum += i;
      }
      resolve(sum)
    })
} 
app.get('/child-process-test', async (req, res, next) => {
  let {fork} = require('child_process');
  const child = fork('./utils/chid_process/fork.js')
  child.send('start')
  child.on('message', (sum) => {
    res.send({forkSum : sum})
  })
})

//#endregion

app.use(applicationRoutes.auth)
app.use(helper.authorizeURL)
app.use(applicationRoutes.users)

app.get('/ping', (req, res) => res.send({ success: true }))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  // res.render('error');
});
module.exports = app;
