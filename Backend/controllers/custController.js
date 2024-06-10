const Customer = require("../models/customerSchema")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login = async(req,res)=>{
    const {custEmail,password} = req.body;
    try{
        //check if email and password are provided
        if(!custEmail || !password) 
        return res.status(400).send({msg:"Please provide an email and a password"});
    //find the user by email
    const user = await Customer.findOne({custEmail:custEmail});
    if(user){
        //if user exists check the password
        const isMatch =await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).send({ msg: 'Invalid Password' });
        //create token
        jwt.sign(
            {id:user._id},
            process.env.SECRET_KEY ,
            {expiresIn:'3d'},
            (err,token)=> {
                if (err) throw err;
                res.json({
                    token,
                    user:{
                        id : user.id,
                        custName : user.custName,
                        custEmail : user.custEmail,
                        contactNo: user.contactNo
                        }
                });
            }
        )
    }else{
        return res.status(400).send({msg:"User does not exist!"})
    }
}catch(err){
    console.log(err);
}
}

const register = async(req,res)=>{
    const {custName,custEmail,password,contactNo} = req.body;
    if(!custName || !custEmail || !password || !contactNo){
        return res.status(400).send("please include Name, Email, Password and contact details");
    }

    const ifUser = await Customer.findOne({custEmail});
    if(ifUser) return res.status(400).send("Email already in use");
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) throw err;
        bcrypt.hash(password, salt, (err, hash) => {
            if(err) throw err;
            const user = new Customer({
                custName,
                custEmail,
                password:hash,
                contactNo
                })
                user.save()
                .then(data=>{
                    jwt.sign(
                        {id:user._id},
                        process.env.SECRET_KEY,
                        { expiresIn: "3d" },
                        (err,token)=>{
                            if(err)throw err;
                            res.json({
                                token,
                                user:{
                                    custName:data.custName,
                                    custEmail:data.custEmail,
                                    contactNo:data.contactNo
                                }
                            })
                        }
                    )
                })
        })
    })
}


module.exports = {login,register}