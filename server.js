const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


const router = require('./controllers/burgers_controllers.js')
app.use('/', router)

// Open Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    // Log (server-side) when our server has started
    console.log("App is listening on" + PORT);
  });