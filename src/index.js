const path =require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars= require('express-handlebars');
const exp = require('constants');
const { join } = require('path');
const { json } = require('express/lib/response');
const app=express();
const port =3000;

const route=require('./routers');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

// hTTP logger
// app.use(morgan('combined'));

//templace engie
app.engine('hbs',handlebars({
    extname: '.hbs'
}));

// app.engine('handlebars', exphbs());
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

// console.log('Path: ',path.join(__dirname,'resources/views'));
// console.log('Path: 'path.join(__dirname,))
// console.log(__dirname);


//Route init;
route(app);



app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`));








// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening at http://localhost:${port}`)
// // })