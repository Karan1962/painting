import  Router  from "express";
import { getUser } from "../controllers/contact.controller.js";

const router =  Router();

router.post('/create',getUser)

export default router