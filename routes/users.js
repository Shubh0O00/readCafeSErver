import express from "express";

import { getUser, addUser } from "../controllers/users.js";       //importing getUser, addUser from controllers/users.js

const router = express.Router();        //adding a router=> initiating a var router as a Router from express

router.get('/:userId', getUser);          //if get request=> calls getUser function
router.post('/', addUser);         //if post request=> calls addUser function

export default router;              //exporting router as default