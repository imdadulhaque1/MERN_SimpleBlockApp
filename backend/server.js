// initially MongoDB connection and Successfully run
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mern-blockapp');

const userRoute = require("./api/routers/userRoute");



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/users',userRoute);

// ------------> Starting MongoDB Database connection & check
const db = mongoose.connection;
db.on('error', (err) =>{
    console.log(err);
})
db.once('open', () =>{
    console.log("Database Connection Established!");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port @${PORT}.`)
})