import mongoose from "mongoose";
//mongoose.set('debug', true);


//creating a schema for user collection and regestering it
const userSchema = mongoose.Schema({
    name: String,           //users name
    uniqueID: String,       //unique id to identify user passed by the frontend firebase authentication 
    userId: String,         //userId chosen by the user=> also is unique and must be
    reviewedBooks:[String],
});

//creating a model of the schema
const User = mongoose.model('User', userSchema);

export default User;    //default export User