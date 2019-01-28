const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const router = require('./controllers/burgers_controller')
const app = express()
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use('https://git.heroku.com/intense-anchorage-97996.git', router)

// Open Server

app.listen( process.env.PORT || 3000, () => {
    // Log (server-side) when our server has started
    console.log("App is listening on" + PORT);
  });