import mongoose from "mongoose";
//mongoose.set('debug', true);

const bookSchema = mongoose.Schema({
    title: String,
    rating: Number,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;