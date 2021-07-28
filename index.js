import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/books.js";
import usersRoute from "./routes/users.js";
import homeRoute from "./routes/home.js";
import dotenv from "dotenv";

const app = express();      //initialising app
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/books', booksRoute);          //defining '/books' to be used for the route in booksRoute
app.use('/users', usersRoute);          //defining '/books' to be used for the route in booksRoute
app.use('', homeRoute);

//connecting to the mongodb atlas database
const uri = process.env.CONNECTION_URL;         //fetching connection url from evironment vars
const PORT = process.env.PORT || 3000;          //fetching port from environment vars or setting it to 3000 if not available

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,})                      //connecting to mongodb atlas using the uri 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))         //Listening on the PORT if the connection is successfull
    .catch((error) => console.log(error.message));                                              //catching errors if the connection is not successfull

mongoose.set('useFindAndModify', false);