const mongoose = require("mongoose");

const Connection = new mongoose.connect("mongodb://127.0.0.1:27017/firstdb");

module.exports = Connection;
