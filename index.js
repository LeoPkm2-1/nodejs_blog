const express = require('express');
const app=express();
const port =3000;


app.get('/leo_15',(req,res)=> {
    var a=4;
    var b=16;
    var c=a+b;
    return res.send('ahihi xin chao cac ban!');
    
}
);
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