const express = require('express');
const morgan = require('morgan');
const app=express();
const port =3000;

app.use(morgan('combined'));

app.get('/leo_15',(req,res)=> {
   
    return res.send('ahihi xin chao cac ban!');
    
});
app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`));








// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })