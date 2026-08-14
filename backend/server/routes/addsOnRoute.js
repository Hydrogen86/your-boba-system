import express from "express";
import {
            add_AddOns,
            edit_AddOns,
            get_AddOns,
            delete_AddOns
        } from "../controllers/addsOnController.js";

const router = express.Router();


router.post("/add", add_AddOns);
router.put("/update/:id", edit_AddOns);
router.get("/all", get_AddOns);
router.delete("/delete/:id", delete_AddOns);

export default router;
