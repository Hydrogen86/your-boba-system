import AddsOn from "../models/addsOnModel.js";

export const add_AddOns = async(req, res) => {
    const {title, description} = req.body;

    // FIltering of Raw Data

    try {

        const newAddsOn = new AddsOn ({ title, description });
        await newAddsOn.save();
        

        return res.status(201).json({ 
            message: "Adds-on added successfully",
            AddsOn: {
                addsOn: newAddsOn.title,
                description: newAddsOn.description
            }
        });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "An expected error occured. Please try again later."});
    }
};


export const edit_AddOns = async(req, res) => {
    const {title, description} = req.body;
    const { id } = req.params;

    // FIltering of Raw Data

    try {

        const newAddsOn_Data = await AddsOn.findByIdAndUpdate (
            id,
            { title, description },
            {new: true}
        );

        if (!newAddsOn_Data) {
            return res.status(404).json({
                message: "Adds-on not found."
            });
        }     

        return res.status(200).json({ 
            message: "Adds-on updated successfully",
            AddsOn: {
                addsOn: newAddsOn_Data.title,
                description: newAddsOn_Data.description
            }
        });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "An expected error occured. Please try again later."});
    }
};


export const get_AddOns = async(req, res) => {

    try {

        const addsOn = await AddsOn.find();

        if (addsOn.length === 0) {
            return res.status(404).json({
                message: "Adds-on is Empty."
            });
        }     

        res.status(200).json(addsOn);


    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};


export const delete_AddOns = async(req, res) => {
    const { id } = req.params; 

    try {

        const deletedAddsOn = await AddsOn.findByIdAndDelete(id);

        if (!deletedAddsOn) {
            return res.status(404).json({
                message: "Adds-on not found!"
            });
        }     

        res.status(200).json({ message: "Adds-on deleted successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

