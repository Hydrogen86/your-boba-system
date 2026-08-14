import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const login = async(req, res) => {
    const {email, password} = req.body;

    if (!email || !password) { return res.status(400).json({message: "Email and Password are required!"}) };

    try {

        const emailFound = await User.findOne({email}).exec();
        if (!emailFound) { return res.status(404).json({message: "User not found!"}); }

        const matchedPassword = await bcrypt.compare(password, emailFound.password);
        if (!matchedPassword) { return res.status(404).json({message: "Incorrect password!"}); }

        return res.status(200).json({ 
            message: "Login successfully",
            user: {
                id: emailFound._id,
                firstName: emailFound.firstName,
                lastName: emailFound.lastName,
                email: emailFound.email,
                role: emailFound.role
            }
        });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "An expected error occured. Please try again later."});
    }
};

export default login;