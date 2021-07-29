import express from "express";

import { getBooks, addBooks } from "../controllers/books.js";       //importing getBooks and addBooks from controllers/book.js

const router = express.Router();        //adding a router=> initiating a var router as a Router from express

router.get('/:pageLimit', getBooks);          //if get request=> calls getBooks function
router.post('/', addBooks);         //if post request=> calls addBooks function

export default router;              //exporting router as default