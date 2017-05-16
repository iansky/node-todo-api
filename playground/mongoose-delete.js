var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');


//Removing all from database

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Finding by id and remove

//Todo.findByIdAndRemove('5918966626f853a00609cfd6').then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'5918966626f853a00609cfd6'}).then((result)=>{
// //   console.log(result);
// // });