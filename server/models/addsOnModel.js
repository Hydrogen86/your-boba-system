// const mongoose = require('mongoose');
import mongoose from "mongoose";

const addsOnSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true }

    //Image

}, { collection: 'addsOn', timestamps: true });

const AddsOn = mongoose.model("AddsOn", addsOnSchema);

export default AddsOn;