// const mongoose = require('mongoose');
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orders: [
        {
            menuItem: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true},
            flavor: {type: String, required: true},
            sugarLevel: {type: Number, required: true},
            size: {type: String, required: true},
            addsOn: [{type: String}]
        }
    ],

    orderType: {type: String, enum: ["Dine in", "Take out"], required: true},
    tableNumber: {type: Number, 
        function () {
        return this.orderType === "Dine in"; }}

}, { collection: 'order', timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;