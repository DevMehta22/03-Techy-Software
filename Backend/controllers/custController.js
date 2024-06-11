const Customer = require("../models/customerSchema")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login = async(req,res)=>{
    const {custEmail,password} = req.body;
    try{
        
        if(!custEmail || !password) 
        return res.status(400).send({msg:"Please provide an email and a password"});
    
    const user = await Customer.findOne({custEmail:custEmail});
    if(user){
        
        const isMatch =await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).send({ msg: 'Invalid Password' });
        
        jwt.sign(
            {id:user._id},
            process.env.SECRET_KEY ,
            {expiresIn:'3d'},
            (err,token)=> {
                if (err) throw err;
                // console.log(user)
                return res.json({
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

const register = async (req, res) => {
    const { custName, custEmail, password, contactNo } = req.body;

    // Check if all required fields are provided
    if (!custName || !custEmail || !password || !contactNo) {
        return res.status(400).send("Please include Name, Email, Password, and Contact details");
    }

    try {
        // Check if the user already exists
        const ifUser = await Customer.findOne({ custEmail });
        if (ifUser) return res.status(400).send("Email already in use");

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new Customer({
            custName,
            custEmail,
            password: hashedPassword,
            contactNo
        });

        // Save the user
        const data = await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
        );

        // Respond with token and user details
        return res.status(200).json({
            token,
            user: {
                custName: data.custName,
                custEmail: data.custEmail,
                contactNo: data.contactNo
            }
        });

    } catch (err) {
        // Handle errors
        console.log(err)
        return res.status(500).send(err);
    }
};


module.exports = {login,register}