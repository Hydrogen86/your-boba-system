
import mongoose from "mongoose";
const mongoURI = process.env.connectDB_URI || "mongodb://localhost:27017/boba_db";

const connectDB = async() => {

    try{
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to the database');

    } catch(err) {
        console.log("❌ Connection failed:",err);
    }

}


export default connectDB;