const path =require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars= require('express-handlebars');
const app=express();
const port =3000;


app.use(express.static(path.join(__dirname,'public')));

// hTTP logger
app.use(morgan('combined'));

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

app.get('/',(req,res)=> {   
    // return res.send('hello world');
    res.render('home');    
});

app.get('/news',(req,res)=> {   
    res.render('news');    
});

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