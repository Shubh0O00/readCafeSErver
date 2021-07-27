import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/books.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/books', booksRoute);

const CONNECTION_URL = "mongodb+srv://readWrite:10102000@cluster0.9dmnz.mongodb.net/readCafeDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);