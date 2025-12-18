const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
const userSchema = mongoose.Schema({
      name:{
            type:String,
            required:[true, 'your name is required']
      },
      email:{
            type:String,
            required:[true,'your email is required'],
            unique:true
      },
       password:{
            type:String,
            required:true,
      },
      phone:{
            type:Number,
           
      },
      createdAt:{
            type:Date,
            default:new Date()
      }

})

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User",userSchema);


// const Signup = require("../controllers/AuthCotroller");

// const router = require("express").Router();

// router.post("/signup", Signup);

// module.exports = {router}


// const User = require('../userModel/userShema');
// const {createSecretToken}  = require('../utils/SecrectToken');

// const Signup = async(req,res,next) => {
//       try {
//           const { name,email,password,phone ,createdAt} =req.body;
//           const existingUser = await User.findOne({email});
//            if(existingUser){
//              return  res.send("User already exist");
//             }
//             const newUser =await User.create({name,email,password,phone});
//             const token = createSecretToken(newUser._id);
//             res.cookie('token',token , {
//                      withCredentials: true,
//                     httpOnly: false,
//             });
//             res
//             .status(201)
//             .send({message:"user signedIn succesfully", success:true, newUser})
//            next();

//       }catch(err){
//             console.log("SignUpError",err);
//       }
  
// }

// module.exports = Signup;