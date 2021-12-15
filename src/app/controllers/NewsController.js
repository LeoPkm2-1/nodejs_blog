
class NewController{
    
    //{get} /news
    index(req,res){
        res.render('news');
    }

    //[GET] news:slug
    show(req,res){
        res.send(`<h1>news detail</h1>`);
    }



}

module.exports = new NewController;