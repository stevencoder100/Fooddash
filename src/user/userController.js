const userModel = require("./userModel");

const createUser = async (req, res) => {

    try
    {
        const { phone, email, name } = req.body;

        if (!phone || !email || !name) {
            return res.status(400).json({ message: "all fields required" });
        }

        const checkemail = await userModel.findOne({email: email});
        const checkphone = await userModel.findOne({ phone: phone });

        if(checkemail || checkphone)
        {
            return res.status(400).json({ message: "User already exists" });
        }
        else
        {
            await userModel.create({name: name, phone: phone, email: email});
            return res.status(200).json({ message: "User created successfully"});
        }
    }
    catch(err)
    {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }    
};

const checkUser = async (req, res) => {

    try
    {
        const { phone } = req.body;
        const exist = await userModel.findOne({ phone: phone });
        console.log(req.body);

        if (exist) {
            return res.status(200).json({ message: "user exist" });
        }
        else {
            return res.status(400).json({ message: "user not exist" })
        }
    }
    catch(err)
    {
        console.log(err);
    }
    
};

module.exports = {createUser, checkUser};