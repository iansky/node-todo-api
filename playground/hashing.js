const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const  bcrypt = require('bcryptjs');

var password = '123456'
// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$9JKI9vyFyAcVgzFoc5.Gae.V4LQwVgJTPo/t7lkrkYIVKX.gaacqm';

bcrypt.compare(password,hashedPassword,(err,res)=>{
  console.log(res);
});
// var data = {
//     id:1
// }
//take the object i.e user id and sign it create hash and return hash value
// var token = jwt.sign(data,'123456');
// console.log(token);

//take the hash value and make sure is not checked
//jwt.verify;
// var decoded = jwt.verify(token,'123456');
// console.log(decoded);
// var message = "I am user number 3";

// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);


// var data = {
//     id:4
// };


// //creating salt so that if data is changed wil not be able to know the salt
// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data)+'secret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// console.log("Data token",token.data);
// var resultHash = SHA256(JSON.stringify(token.data)+'secret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed do not trust ')
// }