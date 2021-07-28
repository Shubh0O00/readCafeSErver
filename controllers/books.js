import Book from "../models/books.js";

//controller for route books


//getBooks function: will be called for get request
//async as using await for Book.find() to get all the data from database before moving
export const getBooks = async (req,res) =>{
    try {
        const books = await Book.find();        //storing the array of jsons of docs from books
        res.status(200).json(books);            //status 200 is OK and then returning json(books)
    } catch (error) {                           //if there is an error while reading
        res.status(404).json({message: error.message});         //status 404 is not found and the returning the error message
    }
}

//addBooks function: will be called for post request
//async as using await for newBook.save() to push the data to database before moving
export const addBooks = async (req,res) =>{
    const book = req.body;

    const newBook = new Book(book);

    try {
        await newBook.save();               //waiting for newBook to be pushed to database
        
        res.status(201).json(newBook);      //status 201 is pushed successfully and then returning json(newBook)
    } catch (error) {                       //if there is an error while pushing
        res.status(409).json({message: error.message});         //status 409 is not pushed successfully and the returning the error message
    }
}