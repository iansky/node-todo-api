const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to server '+ err);
    } 
     console.log('Successful connected to Server');
  
    // db.collection('Todos').findOneAndUpdate(
    //     {_id:new ObjectID('5918273a4523559d6d16b00d')},
    //     {$set:{
    //        completed:true
    //     }},
    //     {
    //         returnOriginal:false
    //     }
    //     ).then((result)=>{
    //         console.log(result);
    //     });
     
     //using increment operator
     db.collection('Users').findOneAndUpdate(
         {_id:new ObjectID('5916e0b9596503162063e446')},
         {$inc:{age:2}},
         {returnOriginal:false}
         ).then((result)=>{
          console.log(result);
         });
    //db.close();
});