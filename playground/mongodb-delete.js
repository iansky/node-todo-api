const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to server '+ err);
    } 
     console.log('Successful connected to Server');
     
     //deletemany
    //  db.collection('Todos').deleteMany({completed:true}).then((results)=>{
    //   console.log(results);
    //  });

    //deleteone
    //  db.collection('Todos').deleteOne({completed:true}).then((results)=>{
    //   console.log(results);
    //  });

    //findOne and detele
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5916e050bd21a10dd49d009c')}).then((result)=>{
       console.log(result);
    });

    
});