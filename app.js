const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
import accessEnv from './helpers/accessEnv'

// express app
const app = express();


const dbURI = accessEnv("DB_URI")
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    console.log("connected to the database");
    app.listen(3000);
})
.catch((err)=>{console.log(err);})

// register view engine
app.set('view engine', 'ejs');

// listen for requests


app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


//blog routes
app.use('/blogs',blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});