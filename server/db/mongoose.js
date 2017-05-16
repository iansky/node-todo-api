var mongoose = require('mongoose');
//make use of promise
mongoose.Promise = global.Promise;
//1. connecting to database
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};