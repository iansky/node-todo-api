var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');


var id = '59183d9cc74c753011b5cf79';
// var id = '5918377476bf79d003d0d053';

// if(!ObjectID.isValid(id)){
//     return console.log('invalid object id');
// }
// Todo.find().then((todos)=>{
//   console.log("Todos "+todos);
// });

// Todo.findOne({_id:id}).then((todos)=>{
//   console.log("Todo "+todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('No data found');
//     }
//   console.log("Todo "+todo);
// }).catch((err)=>{
//     console.log("Error",err)
// });

User.findById(id).then((user)=>{
  if(!user){
      return  console.log('No data found');
  }
  
  console.log('User',user);
}).catch((err)=>{
    console.log("Error",err);
});