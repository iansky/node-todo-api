const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to server '+ err);
    } 
     console.log('Successful connected to Server');

     
    //db.close();
});