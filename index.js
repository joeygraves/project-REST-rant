//require modules
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

//Base route
app.get('/', (req, res) => {
    res.render('home')
})

//routes
app.use('/places', require('./controllers/places'))

//404 Routes
app.get('*', (req, res) => {
    res.render('error404')
})

// app listen
app.listen(process.env.PORT)
