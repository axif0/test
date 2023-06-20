const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://cse470:CSE_470@cse470.2ggvmnp.mongodb.net/?retryWrites=true&w=majority'
// const DB = 'mongodb+srv://cse470:<CSE_470>@cse470.2ggvmnp.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false


}).then(() => {
    console.log('Connected!');
}).catch((err) => console.log('Not connected'));


app.get('/', (req, res) => {

    res.send('hello from the server!')
});
app.get('/about', (req, res) => {

    res.send('hello from about')
});
app.get('/contact', (req, res) => {

    res.send('hello from the contact')
});
app.get('/signin', (req, res) => {

    res.send('hello from SignIn')
});
app.get('/signup', (req, res) => {

    res.send('hello from the Registration')
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});

// var express = require('express');
// var env = require('dotenv').config()
// var ejs = require('ejs');
// var path = require('path');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);

// mongoose.connect('mongodb+srv://mdasifulalam10:5RVLJAVUmp408MIF@mamamia.fl2jryb.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err) => {
//   if (!err) {
//     console.log('MongoDB Connection Succeeded.');
//   } else {
//     console.log('Error in DB connection : ' + err);
//   }
// });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
// });

// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');	

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/views'));

// var index = require('./routes/index');
// app.use('/', index);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// // define as the last app.use callback
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.send(err.message);
// });


// const PORT = process.env.PORT || 300;
// app.listen(PORT, function () {
//   console.log('Server is started on http://127.0.0.1:'+PORT);
// });
