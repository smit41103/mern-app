import express, { Router } from "express";
import { getNews } from "../controllers/clientController.js";
import { addNews } from "../controllers/adminController.js";

const router=express.Router();

//routes for the client side
router.get("/getnews",getNews);

//routes for the admin side
router.post("/addnews",addNews);


export default router;