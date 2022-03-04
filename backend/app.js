const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const path= require('path')
const dotenv =require('dotenv')
var cors = require('cors')

if (process.env.NODE_ENV !== 'PRODUCTION'){

    dotenv.config({ path: 'backend/config/config.env' })

} 

app.use(express.json());
app.use(cookieParser());
app.use(cors())

//import all routes
// const product= require('./routes/product');
const UserAuth= require('./routes/auth');
const adminAuth= require('./routes/admin');

// app.use('/api/v1', product);
app.use('/api/v1', UserAuth);
app.use('/api/v1', adminAuth);

 app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*',(req, res) =>{
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
        // /bin/index.html
    })

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}
app.get('/', (req, res) => {
    res.send("Welcome to our ToDo")
})

//Middleware to handle error
app.use(errorMiddleware);

module.exports = app;