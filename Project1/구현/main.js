/*
-- Before start application, install modules (--save : local)
npm install mysql --save
npm install express --save
npm install body-parser --save
npm install compression --save
*/

// import modules
const express = require('express')
const app = express()
const home = require('./lib/home.js')
const process= require('./lib/process.js')
const bodyParser = require('body-parser')
const compression = require('compression')
const service = require('./lib/service')




/*
-- Middle Ware Part
app.use() : 모든 route 전에 실행되는 미들웨어
app.get('*') : 모든 get방식의 route 전에 실행되는 미들웨어
app.post('*') : 모든 post방식의 route 전에 실행되는 미들웨어
*/

// 정적인 파일의 서비스 (css, image 파일 등)
app.use(express.static(__dirname + '/public'));

// post 방식으로 전송된 데이터를 parsing, (request.body에 저장)
app.use(bodyParser.urlencoded({extended : false}));

// 데이터를 압축하여 전송
app.use(compression());





/*
-- Route Part
*/
app.get('/', function(request, response){
    home.mainPage(request, response);
})

app.get('/apply', function(request, response){
    home.applyPage(request, response);
})

app.get('/login', function(request, response){
    home.loginPage(request, response);
})

app.post('/login_process', function(request, response){
    process.login(request, response);
})

app.get('/service/:userID', function(request, response){
    // request.params = {userID : <...>}
    service.template(request, response);
})



/*
-- 예외 처리 Part
*/

// Not Found 예외 처리
app.use(function(request, response, next){
    response.status(404).send('Sorry can`t find that!');
})

// error로 던져진 경우의 예외 처리
app.use(function(err, request, response, next){
    console.error(err.stack);
    response.status(500).send('Something broke!');
})



app.listen(3000, function(){
    console.log('Application listening on port 3000!');
})