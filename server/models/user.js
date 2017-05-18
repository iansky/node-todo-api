const mongoose = require('mongoose');
const validator = require('validator');
const jwt =require('jsonwebtoken');
const  _ = require('lodash');

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

//userSchema.methods is object of schema and UserSchema.methods.generateAuthToken is an instance that is accessable
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
var User = mongoose.model('User',UserSchema);


module.exports = {User};

