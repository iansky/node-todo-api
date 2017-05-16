var {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

//local required library
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
  var todo = new Todo({
      text:req.body.text
  });

  todo.save().then((docs)=>{
      res.send(docs);
  },(err)=>{
      res.status(400).send(err);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{
     res.send({doc})
  },(err)=>{
      res.status(400).send(err);
  });
});

app.get('/todos/:id',(req,res)=>{
   
   var id =  req.params.id;

   if(!ObjectID.isValid(id)){
       res.status(400).send();
   }

   Todo.findById(id).then((todo)=>{
       if(!todo){
           res.status(400).send();
       }
       res.send({todo});
   }).catch((err)=>{
       console.log(err);
   });
});

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send();
    }
     
    Todo.findByIdAndRemove(id).then((todo)=>{
          if(!todo){
           res.status(400).send();
       }
         res.send(todo);
    }).catch((err)=>{
        console.log('Error',err);
    });
});

app.listen(port,()=>{
  console.log(`Listening to port ${port}`);
});

module.exports.app = {app};