const express = require('express');
const app = express();
const _port = 3002;
const cors = require('cors')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const tvRoutes = require('./src/Routes/Tv.Route')
const movieRoutes = require('./src/Routes/Movie.Route')

app.use(express.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use(cors())

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.use('/tv', tvRoutes)
app.use('/movie', movieRoutes)


app.listen(_port,()=>{
    console.log('Server running at ' + _port);
})