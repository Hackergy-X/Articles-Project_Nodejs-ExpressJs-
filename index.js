const express = require('express')
const app = express()
const port = 3000
const helmet = require("helmet");
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
const allArticles = require('./routes/all-articles')
app.use(helmet());

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 

// mongoose

const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://Articles:123@cluster0.tlqkgvd.mongodb.net/all-data?retryWrites=true&w=majority")
  .then( result => {
    app.listen(process.env.PORT  || 5000, () => {
      console.log("Example app listening at http://localhost:5000");
    });
    })
  .catch( err => {
    console.log(err);
  }); 










//==========================================================================






//===========================================================================


app.use(allArticles)


app.use((req, res, next) => {
    res.status(404).send("<h1>Not Found</h1>")
  })

