// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    
    email: { type: String, required: true, unique: true  },
    password: { type: String, required: false },

    role: {
      type: [String],
      required: true
    },
    
    refreshToken: {
      type: [String], 
      default: []
    },

    profileImage: {
      type: String,
      required: false
    }

}, { collection: 'users', timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;