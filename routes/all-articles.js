const express = require('express')
const router = express.Router()
const articlesCont = require('../controllers/articlesCont')






router.get('/', articlesCont.home_get)
  
  // app.get('/all-articles', (req, res) => {
  //   res.sendFile("views/index.html",  {root: __dirname} )
  //     res.render('index', {title: "Home"});
  // })
  
router.get('/add-new-article',articlesCont.addNewArticle_get )
  
router.post("/all-articles", articlesCont.save_post); 
  
router.get("/all-articles", articlesCont.list_get); 
    
router.get("/all-articles/:id", articlesCont.list_id_get);
  
  
router.delete("/all-articles/:id", articlesCont.articles_delete ); 




module.exports = router