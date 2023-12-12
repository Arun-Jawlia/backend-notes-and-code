const mongoose = require("mongoose");

const Connection = new mongoose.connect("mongodb://127.0.0.1:27017/first_database");

module.exports = Connection;
