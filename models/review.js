import mongoose from "mongoose";
//mongoose.set('debug', true);


//creating a schema for book collection and regestering it
const reviewSchema = mongoose.Schema({
    title: String,          //title of the reviewed book
    userId: String,         //reviewed by
    review: String,         //review text
    rated: Number,          //rating provided
});

//creating a model of the schema
const Review = mongoose.model('Review', reviewSchema);

export default Review;    //default export Book