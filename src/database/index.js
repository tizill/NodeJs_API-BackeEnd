const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/produto");
mongoose.Promise = global.Promise;

module.exports = mongoose;
