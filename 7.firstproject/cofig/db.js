const mongoose = require('mongoose');


const Connection = mongoose.connect('mongodb+srv://arunjawlia:ajawlia@cluster0.r2q6ust.mongodb.net/?retryWrites=true&w=majority')
module.exports = Connection