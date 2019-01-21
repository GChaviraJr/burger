const connection = require('./connection')

connection.connect = (err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return
    }
    console.log('connected as id ' + connection.threadId);
  }

const orm = {

    selectAll: (cb) => {
    connection.query('SELECT * FROM burgers', (err, result) => {
        if (err) throw err
        cb(result)
      })
    },

    insertOne: (burger_name, cb) => {
        // Create a new timestamp
    // ----------------------------------------------------------
    let d = new Date();
    let timestamp = ''+ d.getFullYear() + '-' // must be string
    let month = '' + (d.getMonth() + 1) // must be string
      // handle 1 digit months
      if(month.length == 1){
        month = '0' + month
      }
    timestamp += month + '-'
    let day = '' + d.getDate() // must be string
      // handle 1 digit day of month
      if(day.length == 1){
        day = '0' + day
      }
    timestamp += day + ' '
    let hour = '' + d.getHours() // must be string
      // handle 1 digit hour
      if(hour.length == 1){
        hour = '0' + hour
      }
    timestamp += hour + ':'
    let minute = '' + d.getMinutes() // must be string
      // handle 1 digit minute
      if(minute.length == 1){
        minute = '0' + minute
      }
    timestamp += minute + ':'
    let second = '' + d.getSeconds() // must be string
      // handle 1 digit second
      if(second.length == 1){
        second = '0' + second
      }
    timestamp += second
    // ----------------------------------------------------------

    // Run MySQL Query
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, (err, result) => {
      if (err) throw err
      cb(result)
    })

  },


    updateOne: (burgerID, cb) => {
    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], (err, result) => {
        if (err) throw err;
        cb(result)
      })
}

}
module.exports = orm