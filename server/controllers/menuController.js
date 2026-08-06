
import Item from "../models/menuModel.js";

export const add_Item_In_Menu = async(req, res) => {
    const {title, flavor, size, price} = req.body;

    // FIltering of Raw Data

    try {

        const newItem = new Item ({ title, flavor, size, price });
        await newItem.save();
        

        return res.status(201).json({ 
            message: "Menu Item added successfully",
            Item: {
                Title: newItem.title,
                Flavor: newItem.flavor,
                Sizes: newItem.size,
                Prices: newItem.price
            }
        });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "An expected error occured. Please try again later."});
    }
};

export const get_Item_In_Menu = async(req, res) => {
    try {
        
        const items = await Item.find();
        res.status(200).json(items);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const update_Item_In_Menu = async (req, res) => {
    const { id } = req.params;
    const {title, flavor, size, price} = req.body;

    try {   
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { title, flavor, size, price },
            {new: true}
        );

        if (!updatedItem) {
            return res.status(404).json({
                message: "Menu item not found."
            });
        }

        return res.status(200).json({ 
            message: "Menu Item updated successfully",
            Item: {
                Title: updatedItem.title,
                Flavor: updatedItem.flavor,
                Sizes: updatedItem.size,
                Prices: updatedItem.price
            }
        });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "An expected error occured. Please try again later."});
    }

}

