import dotenv from "dotenv";

dotenv.config();


import User from './../models/userModel.js';
import bcrypt from "bcrypt";
import ROLES from "../config/roles.js";
import mongoose from "mongoose";



const managerEmail = 'manager@example.com';
const managerPassword = 'ADMIN123';

const mongoURI = process.env.DB_URI || 'mongodb://localhost:27017/boba_db';

(async () => {
    await mongoose.connect(mongoURI);
    
    const existingAccount = await User.findOne({email: managerEmail});

    if (!existingAccount) {
        const hashedPassword = await bcrypt.hash(managerPassword, 10);
        const new_Manager_Account = new User(
            { 
                firstName: "John",
                middleName: "Example",
                lastName: "Doe",


                email: managerEmail, 
                password: hashedPassword,
                role: ROLES.Manager
            }
        );
    
        await new_Manager_Account.save();

        console.log('✅ Admin account created successfully.');
    } 
    mongoose.disconnect();
})();