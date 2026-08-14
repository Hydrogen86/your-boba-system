// const mongoose = require('mongoose');
import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({

    title: { type: String, enum: ["Milk Tea", "Fruit Tea", "Iced Coffee", "Shake"], required: true },
    flavor: { type: String, required: true },
    size: { type: [String], required: true},
    price: { type: [Number], required: true }

    //Image of the Menu

}, { collection: 'menu', timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;