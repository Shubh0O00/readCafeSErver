import mongoose from "mongoose";
//mongoose.set('debug', true);


//creating a schema for book collection and regestering it
const bookSchema = mongoose.Schema({
    title: String,
    rating: Number,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

//creating a model of the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;    //default export Book