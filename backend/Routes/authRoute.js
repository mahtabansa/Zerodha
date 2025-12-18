const {Signup, Login} = require('../controllers/AuthCotroller');
const { userVerification } = require('../middlewares/authUser');
const router =require('express').Router();
router.post('/',userVerification);
router.post('/signup', Signup);
router.post('/login',Login);
module.exports=router;