const orm = require('../config/orm')

const burger = {

    selectAll: (cb) => {
        orm.selectAll((res) => {
            cb(res)
        })
    },

    insertOne: (burger_name, cb) => {
    orm.insertOne(burger_name, (res) => {
        cb(res)
    })
},      

    updateOne: (burger_id, cb) => {
        orm.updateOne(burger_id, (res) => {
            cb(res)
        })
    }


}

module.exports = burger