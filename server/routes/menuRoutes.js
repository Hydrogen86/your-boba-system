import express from "express";
import {
            add_Item_In_Menu,
            get_Item_In_Menu,
            update_Item_In_Menu
        } from "../controllers/menuController.js";

const router = express.Router();


router.post("/add", add_Item_In_Menu);
router.get('/all', get_Item_In_Menu);
router.put('/update/:id', update_Item_In_Menu);

export default router;
