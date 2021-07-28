import User from "../models/users.js";

//controller for route users


//getuser function: will be called for get request
//async as using await for User.find() to get all the data from database before moving
export const getUser = async (req,res) =>{
    try {
        const user = await User.find({"uniqueID":req.params["userId"]});        
        res.status(200).json(user);            //status 200 is OK and then returning json(user)
    } catch (error) {                           //if there is an error while reading
        res.status(404).json({message: error.message});         //status 404 is not found and the returning the error message
    }
}

//addUser function: will be called for post request
//async as using await for newUser.save() to push the data to database before moving
export const addUser = async (req,res) =>{
    const user = req.body;

    const newUser = new User(user);

    try {
        await newUser.save();               //waiting for newUser to be pushed to database
        
        res.status(201).json(newUser);      //status 201 is pushed successfully and then returning json(newUser)
    } catch (error) {                       //if there is an error while pushing
        res.status(409).json({message: error.message});         //status 409 is not pushed successfully and the returning the error message
    }
}