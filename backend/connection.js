require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://ameny:ameny@cluster0.15iov.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
