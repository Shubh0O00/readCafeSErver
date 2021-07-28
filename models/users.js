import mongoose from "mongoose";
//mongoose.set('debug', true);


//creating a schema for user collection and regestering it
const userSchema = mongoose.Schema({
    name: String,
    uniqueID: String,
    reviewedBooks:[String],
});

//creating a model of the schema
const User = mongoose.model('User', userSchema);

export default User;    //default export User