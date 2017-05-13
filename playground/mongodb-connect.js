const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to server '+ err);
    } 
     console.log('Successful connected to Server');
     
     db.collection('Todos').insertOne({
          
          text:'Create signUp app',
          completed:true
     }).then((results)=>{
         console.log(JSON.stringify(results.ops,undefined,2));
     },(err)=>{
         if(err){
            console.log('Data was not inserted in db'+err);
         }
     });

    db.close();
});
