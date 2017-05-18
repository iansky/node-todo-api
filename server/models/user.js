const mongoose = require('mongoose');
const validator = require('validator');
const jwt =require('jsonwebtoken');
const  _ = require('lodash');
const bycryt = require('bcryptjs');

var UserSchema = mongoose.Schema({
   email:{
       type:String,
       minlength:1,
       trim:true,
       require:true,
       unique:true,
       validate:{
           validator:validator.isEmail,
           message:'{value} is not a valid email'
       }
   },
 password:{
        type:String,
        require:true,
        minlength:6
       },
  tokens:[{
      access:{
      type:String,
     require:true
           },
       token:{
         type:String,
         require:true
        }
    }]
   
});
//return only email and id to user 
UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
};

//userSchema.methods is object of schema and UserSchema.methods.generateAuthToken is an 
//instance that is accessable
//method turn generateAuthToken
UserSchema.methods.generateAuthToken = function(){
  
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(),access},'123abc')
  .toString();
  
  user.tokens.push({access,token});
//return so that you can attach to sever.js
  return user.save().then(()=>{
      return token;
  });
};

UserSchema.methods.removeToken = function (token) {
  var user = this;

  return user.update({
    $pull: {
      tokens: {token}
    }
  });
};

UserSchema.statics.findByToken = function(token){
 var User = this;
 var decoded;

 try{
   decoded = jwt.verify(token,'123abc');
 }catch(e){
   return Promise.reject();
 }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

//loggin model
UserSchema.statics.findByCredentials = function(email,password){
  var User = this;

  return User.findOne({email}).then((user)=>{
      if(!user){
          return Promise.reject();
      }

      return new Promise((resolve,reject)=>{
         bycryt.compare(password,user.password,(err,res)=>{
             if(res){
                 //enable to use user  in server.js
                 resolve(user)
             }else{
                 return reject();
             }
         })
      });
  });
};

//hashing password before saving 
UserSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){

        var password = user.password;

        bycryt.genSalt(10,(err,salt)=>{
            bycryt.hash(password,salt,(err,hash)=>{
             user.password = hash;
               next();
            });
        });

    }else{
        next();
    }
});

var User = mongoose.model('User',UserSchema);

module.exports = {User};

