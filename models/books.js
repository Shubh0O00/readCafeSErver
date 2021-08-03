import mongoose from "mongoose";
//mongoose.set('debug', true);


//creating a schema for book collection and regestering it
const bookSchema = mongoose.Schema({
    title: String,
    rating: Number,
    selectedFile: String,
    rating0: Number,
    rating1: Number,
    rating2: Number,
    rating3: Number,
    rating4: Number,
    rating5: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

//creating a model of the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;    //default export Book