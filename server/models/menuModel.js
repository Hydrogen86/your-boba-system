// const mongoose = require('mongoose');
import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    title: { type: String, enum: ["Milk Tea", "Fruit Tea", "Iced Coffee", "Shake"], required: true },
    flavor: { type: String, required: true },
    size: { type: [String], required: true },
    
    ingredients: { type: [String], required: true, unique: true  },
    addsOn: { type: [String] },

}, { collection: 'menu', timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;