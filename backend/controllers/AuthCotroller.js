const User = require('../userModel/userShema');
require('dotenv').config();
const {createSecretToken}  = require('../utils/SecrectToken');
const bcrypt = require('bcryptjs');
module.exports.Signup = async(req,res,next) => {
      try {
          const { name,email,password,phone} = req.body;
          const existingUser = await User.findOne({ email });
           if(existingUser){
             return  res.send("User already exist");
            }
            const newUser = await User.create({name,email,password,phone});
            console.log("newUser",newUser);
            const token = createSecretToken(newUser._id);
            res.cookie('token',token , {
                     withCredentials: true,
                     httpOnly: false,
                     maxAge:3*24*60*60*1000,
                     Path:'/',
            });
            res.json({message:'user  signup successfully'});
           next();

      }catch(err){
            console.log("SignUpError",err);
      }
  
}

module.exports.Login = async(req,res,next)=>{
try {
   const { email,password} = req.body;
   const user = await User.findOne({email});
   if(!user) {
    return res.send({message:"User does not exist"})
   }
   const auth = await bcrypt.compare(password,user.password);
   if(!auth) {
     return res.json({message:"password Incorrect ,please provide correct password"});
   }
   const token = createSecretToken(user._id);
   if(!token) {
      return res.send({mesaagee:"Token does not found"});
   }

   res.cookie('token', token, {
  httpOnly: true,      // ✅ Use this
  secure: false,       // ✅ Development mein false, production mein true
  sameSite: 'lax',     // ✅ Add this
  maxAge: 3*24*60*60*1000,
  path: '/'
});

    res.json({message:"user login successfully"});
   next()
} catch(err){
      console.log(err);
}

}
