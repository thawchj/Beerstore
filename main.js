const dotenv = require('dotenv')
const express = require('express');
const app = express();
dotenv.config()
app.set('view engine', 'ejs');
app.use( express.static( "image" ) );

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server listening on port' + PORT + '!')
});

const orderbeerFuncion = require('./controllers/orderbeerController')
const homepageFuncion = require('./controllers/firstpageController')


app.get('/beerthai',orderbeerFuncion.renderorderbeer)
app.get('/', (req,res) =>{
    res.render('firstpage')
    //>>>  firstpage.ejs  
})

