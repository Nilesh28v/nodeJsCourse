const router = require('express').Router();
const User = require('../model/User')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    //if the email is already exists
    const emailExist = await User.findOne({ email: req.body.email })
    console.log(emailExist);
    if (emailExist) return res.status(400).send('Email already exists')
    //Hashing

    const salt = await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(req.body.password,salt);


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,

    })
    try {
        const savedUser = await user.save()
        res.json({user:user._id})
    }
    catch (e) {
        res.status(400).send(e)

    }


})


//Login

router.post('/login',async(req,res)=>{
    //checking if the email exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email or password is wrong')
    
    const validPass= await bcrypt.compare(req.body.password,user.password)
    if(!validPass) return res.status(400).send('invalid password')
    res.send('sucessfull login')
    

})

module.exports = router;