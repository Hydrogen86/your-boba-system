import express from "express";
import {
            add_AddOns
        } from "../controllers/addsOnController.js";

const router = express.Router();


router.post("/add", add_AddOns);
// router.get('/all', get_Item_In_Menu);
// router.put('/update/:id', update_Item_In_Menu);
// router.delete('/delete/:id', delete_Item_In_Menu);

export default router;
