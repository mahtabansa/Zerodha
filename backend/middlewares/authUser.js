require('dotenv').config();
const User = require('../userModel/userShema');
const jwt = require('jsonwebtoken');

module.exports.userVerification = async(req,res,next) => {
      const token = req.cookies.token;
      if(!token){
            return res.json({message:"Token does not exist in the cookie"});
      }
      jwt.verify(token,process.env.TOKEN_KEY,async(err,data)=>{
            if(err) {
                  return res.json({message:"token does not verify"})
            } 
             const user = await User.findById(data.id);
            if(user){
                  return res.send({status:true,user:user.name});
            } else {
                  res.json({message:"user does not found by data Id"});
            }
      })
}