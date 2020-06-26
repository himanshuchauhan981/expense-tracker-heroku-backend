const mongoose = require('mongoose')

// const url = `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`

const url = 'mongodb://expense-tracker:expense-tracker0018@ds061158.mlab.com:61158/expense-tracker'

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }, (err,conn) => {
    if (err) {
        console.log('Mongo error ', err)
    }
    else {
        console.log('Mongoose Connection is Successful')
    }
})
