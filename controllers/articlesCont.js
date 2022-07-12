
const Article = require("../models/articalSchema");



const home_get = (req, res) => {
    res.redirect('/all-articles');
}

const addNewArticle_get = (req, res) => {
    res.render('add-new-article',{title: "Add Articles"});
}

const save_post = (req, res) => {
  
    const article = new Article(req.body);
  
    article
      .save( )
      .then( result => {
        res.redirect("/all-articles");
      })
      .catch( err => {
        console.log(err);
      });
}

const list_get = (req, res) => {
   
    // result = Array of objects inside mongo database
   
    Article.find()
      .then((result) => {
        res.render("index", { title: "HOME", arrArticles: result });
      })
      .catch((err) => {
        console.log(err);
      });
}

const list_id_get = (req, res) => {
  
    Article.findById(req.params.id)
      .then((result) => {
        res.render('details', {title: 'Article Details', ArrDetails: result});
      })
      .catch((err) => {
        console.log(err);
      });
  
}

const articles_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
      .then((params) => { res.json({ mylink: "/all-articles" }) })
      .catch((err) => {
        console.log(err);
      });
}

module.exports = {
    home_get,
    addNewArticle_get,
    save_post,
    list_get,
    list_id_get,
    articles_delete
}