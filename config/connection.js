const mysql = require('mysql')

var connection;

if (process.env.JAWSDB_URL) {
  conection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sb1598951',
  database: 'burgers_db'
})
}
  


// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return
//   }
//   console.log('connected as id ' + connection.threadId);
// })


module.exports = connection